import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import manifest from "../rebalances/manifest.json" with { type: "json" };
import { classDataSets } from "../src/generated/classDataSets.js";
import { rebalance2AddedSkillIdsByClass } from "../src/lib/rebalance2SkillAdditions.js";
import { sigmaInitialSkillFor, sigmaInitialSpecRows } from "../src/lib/sigmaInitialSkills.js";

// Verified against the class skill IDs and bROWiki; never guess an icon from a similar title.
const classSkillAliases = {
  biolo: { "Bionic Mastery": 5337, "Hell Tree": 5348 },
  "abyss-chaser": { "Unlucky Rush": 5315, "Fatal Menace": 2284 },
  "arch-mage": { "Two Hand Staff Mastery": 5228 },
  "elemental-master": { "Increasing Activity": 5368, "Summon Elemental Ardor": 5375 },
  "night-watch": { "Grenade Dropping": 5412 },
};

// These headings describe several skills at once; never assign one icon/ID to the whole note.
const groupedSkillIds = {
  meister: { "ABR - Battle Warrior / ABR - Dual Cannon / ABR - Mother Net": [5302, 5303, 5304] },
  biolo: {
    "Wooden Warrior / Wooden Fairy / Creeper": [5344, 5345, 5346],
    "Acidified Zone (Water/Wind/Earth/Fire)": [5340, 5342, 5341, 5343],
    "Acidified Zone (Water)/(Fire)/(Wind)/(Ground)": [5340, 5343, 5342, 5341],
  },
  "wind-hawk": { "Deep Blind Trap / Solid Trap / Swift Trap / Flame Trap": [5331, 5332, 5333, 5335] },
  "sky-emperor": { "Solar Wrath, Lunar Wrath, Stellar Wrath (Star Gladiator)": [435, 436, 437] },
};

function correctedNoteName(classSlug, versionId, skill) {
  // The source's Earth Care/Earth Spike row repeats the preceding Diluvio heading.
  // Keep this correction until the class dataset is regenerated from the fixed markdown.
  return classSlug === "elemental-master" && versionId === "rebalance-4"
    && skill.name === "Summon Elemental Diluvio"
    && skill.notes.some((note) => note.includes("Earth Care") && note.includes("Earth Spike"))
    ? "Summon Elemental Terremotus" : skill.name;
}

function skillNameKey(name) {
  let label = name.trim();
  const duplicated = label.match(/^(.*?)\s*\(([^()]*)\)$/);
  if (duplicated && duplicated[1].trim().toLowerCase() === duplicated[2].trim().toLowerCase()) {
    label = duplicated[1];
  }
  return label.toLowerCase().replace(/[:.-]/g, " ").replace(/\s+/g, " ").trim();
}

export function catalogFromClassData(data, versions = manifest) {
  const tabSkills = data.skillTabs?.flatMap((tab) => tab.skills) ?? data.skills ?? [];
  const skillsByName = new Map();
  const skillsById = new Map(tabSkills.map((skill) => [skill.id, skill]));
  for (const skill of tabSkills) {
    const key = skillNameKey(skill.name);
    const candidates = skillsByName.get(key) ?? new Map();
    candidates.set(skill.id, skill);
    skillsByName.set(key, candidates);
  }
  const uniqueSkill = (name) => {
    const aliasedId = classSkillAliases[data.classSlug]?.[name];
    if (aliasedId) return skillsById.get(aliasedId) ?? null;
    const key = skillNameKey(name);
    const qualified = name.match(/^(.*?)\s+\([^/()]+\)$/);
    const candidates = skillsByName.get(key) ?? (qualified && skillsByName.get(skillNameKey(qualified[1])));
    return candidates?.size === 1 ? candidates.values().next().value : null;
  };
  return {
    id: data.classSlug,
    label: data.className,
    jobIconUrl: data.tree.jobIconUrl,
    versions: data.rebalanceVersions.map((version) => {
      const source = versions.find((entry) => entry.id === version.id);
      const matchingSkill = (name) => (data.skills ?? []).find((skill) =>
        skill.balanceNotes?.some((note) => note.versionId === version.id && note.skillName.toLowerCase() === name.toLowerCase())
      );
      const skillIdentity = (name) => {
        const groupIds = groupedSkillIds[data.classSlug]?.[name];
        if (groupIds) {
          const members = groupIds.map((id) => skillsById.get(id));
          if (members.some((member) => !member?.iconUrl)) throw new Error(`Missing group icon for ${data.classSlug}: ${name}`);
          return { groupedSkills: members.map(({ id, name: memberName, iconUrl }) => ({ skillId: id, name: memberName, iconUrl })) };
        }
        const match = matchingSkill(name) ?? uniqueSkill(name);
        return match ? { skillId: match.id, iconUrl: match.iconUrl } : {};
      };
      const skills = version.skills.map((skill) => {
        const name = correctedNoteName(data.classSlug, version.id, skill);
        return {
          name,
          notes: skill.notes,
          added: false,
          sourceUrl: version.sourceUrl || source?.sourceUrl || "",
          ...skillIdentity(name),
        };
      });
      if (version.id === "rebalance-2") {
        const introductions = [];
        for (const id of rebalance2AddedSkillIdsByClass[data.classSlug] ?? []) {
          const skill = skillsById.get(id);
          if (!skill?.iconUrl || skills.some((entry) => entry.skillId === id)) {
            throw new Error(`Cannot add ROLATAM skill ${id} to ${data.classSlug} ${version.id}`);
          }
          introductions.push({
            name: skill.name,
            notes: [],
            initialSpecs: sigmaInitialSpecRows(id),
            added: true,
            provenance: "rolatam-planned",
            sourceUrl: sigmaInitialSkillFor(id)?.sourceUrl ?? "",
            skillId: id,
            iconUrl: skill.iconUrl,
          });
        }
        skills.unshift(...introductions);
      }
      for (const group of data.addedSkills ?? []) {
        if (group.versionId !== version.id) continue;
        for (const name of group.skills) {
          skills.push({ name, notes: [], added: true, sourceUrl: source?.changeSourceUrl || version.sourceUrl || "", ...skillIdentity(name) });
        }
      }
      return { id: version.id, skills };
    }),
  };
}

async function main() {
  const classes = await Promise.all(classDataSets.map(async (entry) => catalogFromClassData(await entry.load())));
  const target = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/generated/rebalanceCatalog.js");
  await fs.writeFile(target, `// Generated by npm run notes:update. Do not edit by hand.\nexport const rebalanceCatalog = ${JSON.stringify({ versions: manifest, classes }, null, 2)}\n`, "utf8");
  console.log(`Built rebalance catalog for ${classes.length} classes.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
