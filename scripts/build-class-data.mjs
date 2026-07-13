import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const generatedDir = path.join(rootDir, "src", "generated");
const sourceDir = path.join(rootDir, "data", "sources");

const defaultApiUrl = "https://www.divine-pride.net";
const apiDocsUrl = `${defaultApiUrl}/api`;
const browikiUrl = "https://browiki.org";
const irowikiUrl = "https://irowiki.org";
const basePointLimit = 49;
const treeColumns = 9;
const skillDetailsCache = new Map();
const translationCache = new Map();
const cliOptions = parseCliOptions(process.argv.slice(2));
const sourceStats = { read: 0, fetched: 0, reused: 0, fallbackRead: 0 };
let envCache = null;

const classConfigs = [
  config(4252, "dragon-knight", "Dragon Knight", [[5201, 5213], [6001, 6001], [6502, 6502]], ["Novice", "Swordman", "Knight", "Lord Knight", "Rune Knight"]),
  config(4258, "imperial-guard", "Imperial Guard", [[5255, 5267], [6503, 6505]], ["Novice", "Swordman", "Crusader", "Paladin", "Royal Guard"]),
  config(4253, "meister", "Meister", [[5295, 5305], [6002, 6004], [6506, 6508]], ["Novice", "Merchant", "Blacksmith", "Whitesmith", "Mechanic"]),
  config(4259, "biolo", "Biolo", [[5336, 5348], [6005, 6006], [6509, 6510]], ["Novice", "Merchant", "Alchemist", "Creator", "Genetic"]),
  config(4254, "shadow-cross", "Shadow Cross", [[5285, 5294], [6511, 6511]], ["Novice", "Thief", "Assassin", "Assassin Cross", "Guillotine Cross"]),
  config(4260, "abyss-chaser", "Abyss Chaser", [[5311, 5322], [6512, 6515]], ["Novice", "Thief", "Rogue", "Stalker", "Shadow Chaser"]),
  config(4255, "arch-mage", "Arch Mage", [[5214, 5237], [6516, 6516]], ["Novice", "Mage", "Wizard", "High Wizard", "Warlock"]),
  config(4261, "elemental-master", "Elemental Master", [[5365, 5381], [6517, 6517]], ["Novice", "Mage", "Sage", "Professor", "Sorcerer"]),
  config(4256, "cardinal", "Cardinal", [[5268, 5284], [6518, 6518]], ["Novice", "Acolyte", "Priest", "High Priest", "Arch Bishop"]),
  config(4262, "inquisitor", "Inquisitor", [[5238, 5254], [6519, 6519]], ["Novice", "Acolyte", "Monk", "Champion", "Sura"]),
  config(4257, "wind-hawk", "Wind Hawk", [[5323, 5335], [6520, 6520]], ["Novice", "Archer", "Hunter", "Sniper", "Ranger"]),
  config(4263, "troubadour", "Troubadour", [[5349, 5364], [6521, 6521]], ["Novice", "Archer", "Bard", "Clown", "Minstrel"]),
  config(4264, "trouvere", "Trouvere", [[5349, 5364], [6521, 6521]], ["Novice", "Archer", "Dancer", "Gypsy", "Wanderer"]),
  config(4306, "night-watch", "Night Watch", [[5401, 5415], [5500, 5501]], ["Novice", "Gunslinger", "Rebellion"]),
  config(4304, "shinkiro", "Shinkiro", [[5476, 5495], [5499, 5499]], ["Novice", "Ninja", "Kagerou"]),
  config(4305, "shiranui", "Shiranui", [[5476, 5495], [5499, 5499]], ["Novice", "Ninja", "Oboro"]),
  config(4302, "sky-emperor", "Sky Emperor", [[5463, 5475], [5502, 5504]], ["Novice", "Taekwon", "Star Gladiator", "Star Emperor"]),
  config(4303, "soul-ascetic", "Soul Ascetic", [[5416, 5432]], ["Novice", "Taekwon", "Soul Linker", "Soul Reaper"]),
  config(4308, "spirit-handler", "Spirit Handler", [[5433, 5448], [5506, 5507]], ["Summoner"]),
  config(4307, "hyper-novice", "Hyper Novice", [[5449, 5462], [5505, 5505]], ["Novice", "Super Novice"]),
  config(4355, "alitea", "Alitea", [[6577, 6607]], [])
];

function config(classId, classSlug, className, skillRanges, previousLabels) {
  return { classId, classSlug, className, skillRanges, previousLabels };
}

function parseCliOptions(args) {
  const options = new Set(args);
  const downloadSources = options.has("--download-sources") || options.has("--download-sources-only");
  const writeGenerated = !options.has("--download-sources-only");
  const refreshSources = options.has("--refresh-sources");

  return {
    downloadSources,
    refreshSources,
    writeGenerated
  };
}

async function main() {
  const rebalanceManifest = await parseRebalanceManifest();
  const pointLimitTimeline = buildPointLimitTimeline(rebalanceManifest);
  const classDataSets = [];

  if (cliOptions.writeGenerated) await fs.mkdir(generatedDir, { recursive: true });

  for (const classConfig of classConfigs) {
    const data = await buildClassData({ classConfig, rebalanceManifest, pointLimitTimeline });
    const exportName = `${camelCase(classConfig.classSlug)}Data`;
    const fileName = `${exportName}.js`;

    if (cliOptions.writeGenerated) {
      await fs.writeFile(
        path.join(generatedDir, fileName),
        `export const ${exportName} = ${JSON.stringify(data, null, 2)};\n\nexport default ${exportName};\n`,
        "utf8"
      );
    }

    classDataSets.push({
      id: classConfig.classSlug,
      label: data.className,
      mode: "tree",
      jobIconUrl: data.tree.jobIconUrl,
      exportName,
      fileName
    });

    console.log(`${cliOptions.writeGenerated ? "Built" : "Cached sources for"} ${fileName} with ${data.skills.length} skills.`);
  }

  if (!cliOptions.writeGenerated) {
    console.log(
      `Cached source files in ${path.relative(rootDir, sourceDir)} (${sourceStats.fetched} fetched, ${sourceStats.reused} reused, ${sourceStats.fallbackRead} fallback reads).`
    );
    return;
  }

  const entries = classDataSets
    .map(
      (entry) =>
        `  { id: '${entry.id}', label: ${JSON.stringify(entry.label)}, mode: 'tree', jobIconUrl: '${entry.jobIconUrl}', load: () => import('./${entry.fileName}').then((module) => module.${entry.exportName}) }`
    )
    .join(",\n");

  await fs.writeFile(
    path.join(generatedDir, "classDataSets.js"),
    `export const classDataSets = [\n${entries},\n]\n\nexport default classDataSets\n`,
    "utf8"
  );

  console.log(`Built src/generated/classDataSets.js with ${classDataSets.length} classes.`);
  console.log(
    `Used source files from ${path.relative(rootDir, sourceDir)} (${sourceStats.read} read, ${sourceStats.fetched} fetched, ${sourceStats.reused} reused, ${sourceStats.fallbackRead} fallback reads).`
  );
}

async function buildClassData({ classConfig, rebalanceManifest, pointLimitTimeline }) {
  const treePage = await fetchSkillTreePage(classConfig);
  const rebalanceVersions = await parseRebalanceVersions(classConfig.classSlug, rebalanceManifest);
  const addedSkills = await parseAddedSkills(classConfig.classSlug, rebalanceManifest);
  const pointLimit = pointLimitTimeline.at(-1)?.pointLimit ?? basePointLimit;
  const allTreeSkills = treePage.skills;
  const treeSkillById = new Map(allTreeSkills.map((skill) => [skill.id, skill]));
  const treeSegments = treePage.segments
    .map((segment) => ({
      ...segment,
      skills: segment.skillIds.map((id) => skillWithSegmentLayout(treeSkillById.get(id), segment)).filter(Boolean)
    }))
    .filter((segment) => segment.skills.length);
  const currentSegment = treeSegments.find((segment) => segment.jobId === classConfig.classId);
  const currentTreeSkills = currentSegment?.skills.length
    ? currentSegment.skills
    : allTreeSkills.filter((skill) => isCurrentClassSkill(classConfig, skill.id));
  const currentIds = new Set(currentTreeSkills.map((skill) => skill.id));
  const previousSegments = currentSegment
    ? treeSegments.filter((segment) => segment.jobId !== currentSegment.jobId)
    : segmentPreviousSkills(allTreeSkills.filter((skill) => !currentIds.has(skill.id)));
  const tabTreeSkills = [currentTreeSkills, ...previousSegments.map((segment) => segment.skills)];
  const uniqueTabSkills = uniqueById(tabTreeSkills.flat());
  const treeById = new Map(allTreeSkills.map((skill) => [skill.id, skill]));
  const skillDetails = new Map(
    await mapWithConcurrency(uniqueTabSkills, 8, async (skill) => [skill.id, await fetchSkillDetails(skill)])
  );
  const rebalanceByName = groupRebalancesBySkill(rebalanceVersions);
  mergeAddedSkillNotes({ rebalanceByName, classSlug: classConfig.classSlug, addedSkills });

  const currentSkills = buildTabSkills({ treeSkills: currentTreeSkills, treeById, skillDetails, rebalanceByName });
  const hasNoviceSegment = previousSegments[0]?.skills.some((skill) => skill.id === 1) ?? false;
  const previousTabs = buildPreviousTabs({ classConfig, previousSegments, hasNoviceSegment, treeById, skillDetails, rebalanceByName });
  const currentTab = buildSkillTab({
    id: "current",
    label: classConfig.className || treePage.className,
    pointLimit,
    skills: currentSkills
  });
  const skillTabs = [currentTab, ...previousTabs];
  const skills = currentTab.skills;

  const noteCount = skills.reduce(
    (sum, skill) => sum + skill.balanceNotes.reduce((noteSum, entry) => noteSum + entry.notes.length, 0),
    0
  );
  const addedSkillCount = addedSkills.entries.reduce((sum, entry) => sum + entry.skills.length, 0);

  return {
    generatedAt: new Date().toISOString(),
    classId: classConfig.classId,
    classSlug: classConfig.classSlug,
    className: classConfig.className || treePage.className,
    hasSkillTree: true,
    pointLimit,
    pointLimitTimeline,
    summary: {
      changedSkills: skills.filter((skill) => skill.balanceNotes.length).length,
      noteCount,
      addedSkills: addedSkillCount,
      versions: rebalanceVersions.length
    },
    tree: {
      columns: currentTab.tree.columns,
      rows: currentTab.tree.rows,
      skillTreeUrl: `${defaultApiUrl}/tools/skilltree/${classConfig.classId}`,
      jobIconUrl: `assets/divine-pride/jobs/${classConfig.classId}.png`
    },
    sources: {
      rebalances: rebalanceVersions.map((version) => version.file),
      rebalanceManifest: "rebalances/manifest.json",
      divinePrideApiDocs: apiDocsUrl,
      divinePrideSkillTree: `${defaultApiUrl}/tools/skilltree/${classConfig.classId}`,
      browiki: browikiUrl,
      irowiki: `${irowikiUrl}/wiki/`
    },
    rebalanceVersions,
    addedSkills: addedSkills.entries,
    skillTabs,
    skills
  };
}

function buildTabSkills({ treeSkills, treeById, skillDetails, rebalanceByName }) {
  const visibleIds = new Set(treeSkills.map((skill) => skill.id));

  return treeSkills.map((treeSkill) => {
    const baseParsed = skillDetails.get(treeSkill.id) ?? fallbackSkill(treeSkill);
    const balanceNotes = rebalanceByName.get(normalizeName(baseParsed.name)) ?? rebalanceByName.get(normalizeName(treeSkill.name)) ?? [];
    const parsed = reconcileApDirectionWithNotes(baseParsed, balanceNotes);
    const layout = skillLayout(treeSkill);

    return {
      ...parsed,
      id: treeSkill.id,
      imageFile: `${treeSkill.id}.png`,
      iconUrl: `assets/divine-pride/skills/${treeSkill.id}.png`,
      sourceUrl: `${defaultApiUrl}/database/skill/${treeSkill.id}`,
      tree: {
        idx: layout.idx,
        row: layout.row,
        col: layout.col,
        columns: layout.columns,
        requirements: treeSkill.Requirements.map((requirement) => ({
          id: requirement.id,
          level: requirement.Level,
          name: treeById.get(requirement.id)?.name ?? `Skill ${requirement.id}`,
          visible: visibleIds.has(requirement.id)
        }))
      },
      details: buildSkillDetails(parsed),
      irowikiUrl: parsed.irowikiUrl ?? "",
      balanceNotes,
      translations: parsed.translations ?? {},
      api: {
        status: parsed.apiStatus ?? "not-used",
        entries: [],
        selectedEntry: null
      }
    };
  });
}

function buildPreviousTabs({ classConfig, previousSegments, hasNoviceSegment, treeById, skillDetails, rebalanceByName }) {
  const labeled = previousSegments
    .map((segment, index) => ({
      id: `previous-${index + 1}`,
      label: segment.label ?? segmentLabel(classConfig, segment, index, hasNoviceSegment),
      pointLimit: numericPointLimit(segment.pointLimit),
      skills: buildTabSkills({ treeSkills: segment.skills, treeById, skillDetails, rebalanceByName })
    }))
    .filter((entry) => entry.label !== "Novice");

  const merged = [];
  for (let index = 0; index < labeled.length; index += 1) {
    const entry = withFallbackPreviousPointLimit(labeled[index], index);
    const next = labeled[index + 1] ? withFallbackPreviousPointLimit(labeled[index + 1], index + 1) : null;

    if (shouldMergeSecondJobTabs(classConfig, labeled, index)) {
      merged.push({
        id: next.id,
        label: next.label,
        skills: [...entry.skills, ...next.skills],
        pointLimit: Math.max(entry.pointLimit, next.pointLimit)
      });
      index += 1;
      continue;
    }

    merged.push(entry);
  }

  return merged.reverse().map((entry, index) =>
    buildSkillTab({
      id: `previous-${index + 1}`,
      label: entry.label,
      pointLimit: entry.pointLimit,
      skills: entry.skills
    })
  );
}

function shouldMergeSecondJobTabs(classConfig, entries, index) {
  if (!isMainJobLineage(classConfig)) return false;
  if (entries.length < 4) return false;
  return index === 1 && Boolean(entries[index + 1]);
}

function isMainJobLineage(classConfig) {
  return classConfig.previousLabels?.length >= 5 && classConfig.previousLabels[0] === "Novice";
}

function numericPointLimit(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function withFallbackPreviousPointLimit(entry, index) {
  return {
    ...entry,
    pointLimit: entry.pointLimit ?? (index === 0 ? 49 : 69)
  };
}

function buildSkillTab({ id, label, pointLimit, skills }) {
  const maxCol = Math.max(...skills.map((skill) => skill.tree.col ?? 0), 0);
  const maxRow = Math.max(...skills.map((skill) => skill.tree.row ?? 0), 0);
  const columns = Math.max(...skills.map((skill) => skill.tree.columns ?? treeColumns), maxCol + 1, 1);

  return {
    id,
    label,
    pointLimit,
    tree: {
      columns,
      rows: maxRow + 1
    },
    skills
  };
}

function segmentPreviousSkills(skills) {
  const segments = [];
  let current = [];
  let lastIdx = Number.NEGATIVE_INFINITY;

  for (const skill of skills) {
    if (current.length && skill.idx <= lastIdx) {
      segments.push({ skills: current });
      current = [];
    }

    current.push(skill);
    lastIdx = skill.idx;
  }

  if (current.length) segments.push({ skills: current });
  return segments.filter((segment) => segment.skills.length);
}

function segmentLabel(classConfig, segment, index, hasNoviceSegment) {
  if (index === 0 && hasNoviceSegment && segment.skills.some((skill) => skill.id === 1)) return "Novice";
  const offset = !hasNoviceSegment && classConfig.previousLabels?.[0] === "Novice" ? 1 : 0;
  return classConfig.previousLabels?.[index + offset] ?? `Previous Class ${index + 1}`;
}

function uniqueById(skills) {
  const seen = new Set();
  const unique = [];
  for (const skill of skills) {
    if (seen.has(skill.id)) continue;
    seen.add(skill.id);
    unique.push(skill);
  }
  return unique;
}

function skillWithSegmentLayout(skill, segment) {
  if (!skill) return null;
  const layout = segment.layout?.[String(skill.id)];
  if (!layout) return skill;

  return {
    ...skill,
    treeLayout: layout
  };
}

function skillLayout(skill) {
  const columns = Number(skill.treeLayout?.columns ?? treeColumns) || treeColumns;
  const idx = Number(skill.treeLayout?.idx ?? skill.idx ?? 0) || 0;
  const row = Number(skill.treeLayout?.row ?? Math.floor(idx / columns)) || 0;
  const col = Number(skill.treeLayout?.col ?? idx % columns) || 0;

  return {
    idx,
    row,
    col,
    columns
  };
}

async function fetchSkillTreePage(classConfig) {
  const html = await fetchText(`${defaultApiUrl}/tools/skilltree/${classConfig.classId}`, {
    cachePath: sourceFilePath("divine-pride", "skilltree", `${classConfig.classId}.html`)
  });
  const className =
    html.match(/<meta property="og:title" content="Skilltree:\s*([^"]+)"/)?.[1] ??
    classConfig.className;
  const jobs = parseSkillTreeJobs(html);
  const skillsJson = html.match(/var\s+skills\s*=\s*(\[[\s\S]*?\]);/)?.[1];

  if (!skillsJson) {
    throw new Error(`Could not find skill tree JSON for ${classConfig.className}.`);
  }

  return {
    className: decodeHtml(className),
    segments: parseSkillTreeSegments(html, jobs),
    skills: JSON.parse(skillsJson)
  };
}

function parseSkillTreeJobs(html) {
  const jobsJson = html.match(/var\s+jobs\s*=\s*(\{[\s\S]*?\});/)?.[1];
  if (!jobsJson) return {};

  try {
    return JSON.parse(jobsJson);
  } catch {
    return {};
  }
}

function parseSkillTreeSegments(html, jobs) {
  const start = html.search(/<div class="skilltree\b[^"]*treejob-/);
  const end = html.search(/<div class="totalskilltreesum"/);
  if (start < 0 || end < 0 || end <= start) return [];

  return html
    .slice(start, end)
    .split(/(?=<div class="skilltree\b[^"]*treejob-)/)
    .map((block) => parseSkillTreeSegment(block, jobs))
    .filter(Boolean);
}

function parseSkillTreeSegment(block, jobs) {
  if (!block.includes("skilltree")) return null;

  const jobId = Number(block.match(/\bjob="(\d+)"/)?.[1] ?? block.match(/treejob-(\d+)/)?.[1]);
  const label = decodeHtml(stripTags(block.match(/<legend>([\s\S]*?)<\/legend>/)?.[1] ?? "")).trim();
  const layout = parseSkillTreeLayout(block);
  const skillIds = layout.skillIds.length
    ? layout.skillIds
    : [...block.matchAll(/skillid="(\d+)"/g)].map((match) => Number(match[1]));

  if (!jobId || !label || !skillIds.length) return null;

  return {
    jobId,
    label,
    pointLimit: numericPointLimit(jobs[String(jobId)]),
    skillIds,
    columns: layout.columns || treeColumns,
    rows: layout.rows || Math.ceil(skillIds.length / treeColumns),
    layout: layout.byId
  };
}

function parseSkillTreeLayout(block) {
  const rowBlocks = skillRowBlocks(block);
  const placements = [];
  const byId = {};
  let columns = 0;

  rowBlocks.forEach((rowHtml, row) => {
    const buttons = [...rowHtml.matchAll(/<div class="skillbutton"([^>]*)>/gi)];
    columns = Math.max(columns, buttons.length);

    buttons.forEach((match, col) => {
      const id = Number(match[1].match(/\bskillid="(\d+)"/)?.[1]);
      if (!id) return;
      placements.push({ id, row, col });
    });
  });

  for (const placement of placements) {
    byId[String(placement.id)] = {
      row: placement.row,
      col: placement.col,
      columns,
      idx: placement.row * columns + placement.col
    };
  }

  return {
    columns,
    rows: rowBlocks.length,
    skillIds: placements.map((placement) => placement.id),
    byId
  };
}

function skillRowBlocks(block) {
  const rows = [];
  const marker = '<div class="skillrow">';
  let cursor = 0;

  while (cursor < block.length) {
    const start = block.indexOf(marker, cursor);
    if (start < 0) break;

    const tagPattern = /<\/?div\b[^>]*>/gi;
    tagPattern.lastIndex = start;
    let depth = 0;
    let contentStart = -1;
    let foundEnd = false;

    let tag = null;
    while ((tag = tagPattern.exec(block))) {
      if (tag.index < start) continue;
      if (tag[0].startsWith("</")) {
        depth -= 1;
        if (depth === 0 && contentStart >= 0) {
          rows.push(block.slice(contentStart, tag.index));
          cursor = tagPattern.lastIndex;
          foundEnd = true;
          break;
        }
      } else {
        depth += 1;
        if (tag.index === start) contentStart = tagPattern.lastIndex;
      }
    }

    if (!foundEnd) break;
  }

  return rows;
}

async function fetchSkillDetails(treeSkill) {
  if (skillDetailsCache.has(treeSkill.id)) return skillDetailsCache.get(treeSkill.id);

  const html = await fetchText(`${defaultApiUrl}/database/skill/${treeSkill.id}`, {
    cachePath: sourceFilePath("divine-pride", "skills", `${treeSkill.id}.html`)
  });
  const description =
    html.match(/<meta property="og:description" content="([\s\S]*?)">/)?.[1] ??
    "";
  const parsed = parseSkillDescription({
    id: treeSkill.id,
    fallbackName: treeSkill.name,
    maxLevel: treeSkill.MaxLevel,
    text: decodeHtml(description)
  });
  const skill = reconcileParsedApDirection(parsed, parseResourceApHistoryDirection(html));
  const pageDetails = parseSkillPageDetails(html);
  const translations = await fetchSkillTranslations({ id: treeSkill.id, englishName: skill.name || treeSkill.name });
  const irowiki = await fetchIrowikiSkillDetails({ id: treeSkill.id, englishName: skill.name || treeSkill.name });

  const result = {
    ...fallbackSkill(treeSkill),
    ...skill,
    ...pageDetails,
    ...missingSkillDetails({ ...fallbackSkill(treeSkill), ...skill, ...pageDetails }, irowiki?.rows ?? {}),
    irowikiUrl: irowiki?.url ?? "",
    translations,
    apiStatus: translations["pt-BR"] ? "translated" : "not-used",
    maxLevel: skill.maxLevel || treeSkill.MaxLevel
  };
  skillDetailsCache.set(treeSkill.id, result);
  return result;
}

function fallbackSkill(treeSkill) {
  return {
    id: treeSkill.id,
    imageFile: `${treeSkill.id}.png`,
    name: treeSkill.name,
    maxLevel: treeSkill.MaxLevel,
    prerequisiteText: "basic skill",
    group: "",
    type: "",
    target: "",
    recoversAp: "",
    consumesAp: "",
    ammunition: "",
    irowikiUrl: "",
    description: "",
    levelDetails: []
  };
}

function parseSkillDescription({ fallbackName, maxLevel, text }) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  const name = normalizeWhitespace(lines.shift() || fallbackName);
  const fields = new Map();
  const descriptionLines = [];
  const levelDetails = [];
  let inDescription = false;
  let inLevels = false;
  let currentLevel = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line === "\\_" || line === "_") {
      inDescription = false;
      inLevels = true;
      currentLevel = null;
      continue;
    }

    const levelMatch = line.match(/^\[(?:Level|Lv)\s*(\d+)\]\s*:?\s*(.*)$/i);
    if (levelMatch) {
      currentLevel = {
        level: Number(levelMatch[1]),
        text: normalizeWhitespace(levelMatch[2])
      };
      levelDetails.push(currentLevel);
      inLevels = true;
      continue;
    }

    if (inLevels && currentLevel) {
      currentLevel.text = `${currentLevel.text}\n${normalizeWhitespace(line)}`;
      continue;
    }

    const fieldMatch = line.match(/^([^:]+)\s*:\s*(.*)$/);
    if (fieldMatch && !inDescription) {
      const key = normalizeFieldKey(fieldMatch[1]);
      const value = normalizeWhitespace(fieldMatch[2]);
      fields.set(key, value);

      if (["details", "description"].includes(key)) {
        inDescription = true;
        if (value) descriptionLines.push(value);
      }
      continue;
    }

    if (inDescription || descriptionLines.length) {
      descriptionLines.push(normalizeWhitespace(line));
    }
  }

  const recovery = fields.get("recovery") ?? fields.get("recoversap") ?? "";
  const consumption =
    fields.get("resourceconsumption") ??
    fields.get("consumption") ??
    fields.get("consumes") ??
    fields.get("consumesap") ??
    "";

  return {
    name,
    maxLevel: Number(fields.get("maxlv") ?? fields.get("maxlevel")) || maxLevel || levelDetails.length || null,
    prerequisiteText: fields.get("learningconditions") || fields.get("skillrequirement") || fields.get("prerequisiteskills") || "basic skill",
    group: fields.get("class") || fields.get("skillform") || fields.get("group") || "",
    type: fields.get("type") || "",
    target: fields.get("target") || "",
    recoversAp: apValue(recovery),
    consumesAp: apValue(consumption),
    description: descriptionLines.join("\n"),
    levelDetails
  };
}

function reconcileParsedApDirection(skill, direction) {
  if (direction === "recovery" && skill.consumesAp && !skill.recoversAp) {
    return { ...skill, recoversAp: skill.consumesAp, consumesAp: "" };
  }
  if (direction === "consumption" && skill.recoversAp && !skill.consumesAp) {
    return { ...skill, recoversAp: "", consumesAp: skill.recoversAp };
  }
  return skill;
}

function reconcileApDirectionWithNotes(skill, balanceNotes) {
  const labels = new Set(
    balanceNotes
      .flatMap((entry) => entry.specRows ?? [])
      .map((row) => row.label)
  );

  if (labels.has("AP Generated") && !labels.has("AP Consumed") && skill.consumesAp && !skill.recoversAp) {
    return { ...skill, recoversAp: skill.consumesAp, consumesAp: "" };
  }
  if (labels.has("AP Consumed") && !labels.has("AP Generated") && skill.recoversAp && !skill.consumesAp) {
    return { ...skill, recoversAp: "", consumesAp: skill.recoversAp };
  }
  return skill;
}

function parseResourceApHistoryDirection(html) {
  // Divine Pride currently labels both AP recovery and AP cost as "Resource Consumption";
  // the most recent history entry still shows whether that AP line came from Recovery or Consumes.
  const text = normalizeWhitespace(stripTags(html));
  const historyIndex = text.search(/\bDate Field Old New\b/i);
  if (historyIndex < 0) return "";

  const history = text.slice(historyIndex);
  const descriptionIndex = history.search(/\bdescription\b/i);
  const sample = history.slice(descriptionIndex >= 0 ? descriptionIndex : 0, 2500);
  const recoveryIndex = sample.search(/\bRecovery\s*:\s*AP\b/i);
  const consumesIndex = sample.search(/\bConsumes\s*:\s*AP\b/i);

  if (recoveryIndex >= 0 && (consumesIndex < 0 || recoveryIndex < consumesIndex)) return "recovery";
  if (consumesIndex >= 0 && (recoveryIndex < 0 || consumesIndex < recoveryIndex)) return "consumption";
  return "";
}

function parseSkillPageDetails(html) {
  return {
    ...parseDelayInfo(html),
    levelExtras: parseDetailsLevelTables(html)
  };
}

function parseDelayInfo(html) {
  const tableHtml = html.match(/<div class="cuiskilldelayinfo"[\s\S]*?<table>([\s\S]*?)<\/table>/i)?.[1];
  if (!tableHtml) return {};

  const rows = tableRows(tableHtml)
    .map((row) => tableCells(row))
    .filter((cells) => cells.length === 5 && /^\d+$/.test(cells[0]));
  if (!rows.length) return {};

  const values = {
    fixedCastTime: rows.map((cells) => secondsValue(cells[1])),
    variableCastTime: rows.map((cells) => secondsValue(cells[2])),
    castDelay: rows.map((cells) => secondsValue(cells[3])),
    cooldown: rows.map((cells) => secondsValue(cells[4]))
  };
  const details = {};

  for (const [key, list] of Object.entries(values)) {
    const unique = [...new Set(list.filter(Boolean))];
    if (unique.length === 1) details[key] = unique[0];
  }

  return details;
}

function parseDetailsLevelTables(html) {
  const extras = [];
  const detailTableMatches = html.matchAll(/<table class="table table-bordered table-striped table-hover table-condensed">([\s\S]*?)<\/table>/gi);

  for (const match of detailTableMatches) {
    const tableHtml = match[1];
    const rows = tableRows(tableHtml).map((row) => tableCells(row));
    if (rows.length < 2) continue;

    const levels = rows[0].slice(1).map((cell) => Number(cell)).filter(Boolean);
    if (!levels.length) continue;

    for (const row of rows.slice(1)) {
      const label = detailTableLabel(row[0]);
      if (!label) continue;

      const values = levels.map((level, index) => ({
        level,
        value: normalizeSkillValue(row[index + 1] ?? "")
      })).filter((entry) => entry.value);

      if (values.length) extras.push({ label, values });
    }
  }

  return extras;
}

function tableRows(html) {
  return [...html.matchAll(/<tr[\s\S]*?>([\s\S]*?)<\/tr>/gi)].map((match) => match[1]);
}

function tableCells(html) {
  return [...html.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)]
    .map((match) => normalizeWhitespace(stripTags(match[1])));
}

function stripTags(value) {
  return decodeHtml(String(value ?? "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " "));
}

function cleanGameText(value) {
  return stripTags(String(value ?? "")
    .replace(/\^[0-9A-Fa-f]{6}/g, "")
    .replace(/\\n/g, "\n"));
}

function detailTableLabel(value) {
  const normalized = normalizeWhitespace(value);
  if (/^SP consumption$/i.test(normalized)) return "SP Cost";
  return normalized;
}

function secondsValue(value) {
  const normalized = normalizeWhitespace(value);
  const match = normalized.match(/^([0-9.]+)\s*sec(?:onds?)?$/i);
  if (!match) return normalized;
  const amount = Number(match[1]);
  return `${Number.isInteger(amount) ? amount : match[1]} ${amount === 1 ? "second" : "seconds"}`;
}

function apValue(value) {
  const match = normalizeWhitespace(value).match(/AP\s*:?\s*(.+)$/i);
  if (!match) return "";
  return normalizeSkillValue(match[1].replace(/Skill Levelx/gi, "Skill Level x "));
}

function buildSkillDetails(skill) {
  const rows = [];
  const levelTable = buildLevelTable(skill);
  const levelLabels = new Set(levelTable?.columns.map((column) => column.label) ?? []);

  addDetail(rows, "Type", skill.group ? `${skill.group} Skill` : skill.type);
  addDetail(rows, "Levels", skill.maxLevel);
  addDetail(rows, "SP Cost", skill.spCost);
  addDetail(rows, "Fixed Cast Time", skill.fixedCastTime);
  addDetail(rows, "Variable Cast Time", skill.variableCastTime);
  addDetail(rows, "Cast Delay", skill.castDelay);
  addDetail(rows, "Cooldown", levelLabels.has("Cooldown") ? "" : skill.cooldown || levelMetric(skill, /(?:skill\s*)?cooldown\s*:\s*([^/]+?sec(?:onds?)?)(?=\s*\/|$)/i, secondsValue));
  addDetail(rows, "Cast Range", skill.castRange);
  addDetail(rows, "Target", skill.target);
  addDetail(rows, "Area of Effect", levelLabels.has("Area of Effect") ? "" : skill.areaOfEffect || levelMetric(skill, /(?:range|area of effect)\s*:\s*([0-9]+\s*x\s*[0-9]+\s*cells?)/i));
  addDetail(rows, "Duration", levelLabels.has("Duration") ? "" : skill.duration || levelMetric(skill, /duration\s*:?\s*([^/]+?sec(?:onds?)?)(?=\s*\/|$)/i, secondsValue));
  addDetail(rows, "Ammunition", consumedTalisman(skill.description) || skill.ammunition);
  addDetail(rows, "AP Generated", skill.recoversAp);
  addDetail(rows, "AP Consumed", skill.consumesAp);
  addDetail(rows, "Pulse", descriptionValue(skill.description, /every\s+([0-9.]+\s*seconds?)/i));
  addDetail(rows, "Property", descriptionValue(skill.description, /inflicts\s+([a-z ]+property\s+(?:magical|physical)\s+damage)/i));
  addDetail(rows, "HP Recovery", recoverySpecValue(skill, "HP Recovery"));
  addDetail(rows, "SP Recovery", recoverySpecValue(skill, "SP Recovery"));
  addDetail(rows, "Damage", damageSpecValue(skill));
  for (const formulaRow of levelTable?.formulaRows ?? []) {
    addDetail(rows, formulaRow.label, formulaRow.value);
  }

  return {
    rows,
    levelTables: levelTable ? [levelTable] : []
  };
}

function addDetail(rows, label, value) {
  const normalized = normalizeWhitespace(value);
  if (!normalized) return;
  rows.push({ label, value: normalized });
}

function buildLevelTable(skill) {
  const levels = new Set(skill.levelDetails.map((detail) => detail.level));
  for (const extra of skill.levelExtras ?? []) {
    for (const entry of extra.values) levels.add(entry.level);
  }

  if (!levels.size) return null;

  const table = {
    title: "Level Scaling",
    columns: [],
    rows: [],
    formulaRows: []
  };
  const formulaRows = new Map();

  const detailByLevel = new Map(skill.levelDetails.map((detail) => [detail.level, detail]));

  for (const level of [...levels].sort((a, b) => a - b)) {
    const detail = detailByLevel.get(level);
    const row = { level, values: {} };
    for (const line of (detail?.text ?? "").split("\n")) {
      parseLevelLine(line, row, table, formulaRows);
    }
    table.rows.push(row);
  }

  for (const extra of skill.levelExtras ?? []) {
    for (const entry of extra.values) {
      const row = table.rows.find((candidate) => candidate.level === entry.level);
      if (row) setLevelValue(row, table, extra.label, entry.value);
    }
  }

  for (const row of table.rows) {
    const detail = detailByLevel.get(row.level);
    if (detail && !Object.keys(row.values).length) setLevelValue(row, table, "Effect", normalizeSkillValue(detail.text));
  }

  stripDamageFromLevelTable(table);
  table.columns = orderLevelColumns(
    table.columns.filter((column) => table.rows.some((row) => row.values[column.id]))
  );
  table.formulaRows = [...formulaRows.values()].filter((row) => !isDamageSpecLabel(row.label));

  return table.columns.length ? table : null;
}

function parseLevelLine(rawLine, row, table, formulaRows) {
  let line = normalizeWhitespace(rawLine).replace(/\.$/, "");
  if (!line) return;

  const parsedRecovery = parseRecoverySegments(line, row, table);
  line = parsedRecovery.line;
  line = pullMetric(line, row, table, "Area of Effect", /(?:^|\s*\/\s*)(?:(?:[\w\s]+?\s+)?aoe|range|area of effect)\s*:?\s*([0-9]+\s*x\s*[0-9]+\s*cells?)/i, formatArea);
  line = pullMetric(line, row, table, "Duration", /(?:^|\s*[,/]\s*)duration\s*:?\s*([0-9.]+\s*sec(?:onds?)?)(?=\s*[,/]|\s|$)/i, secondsValue);
  line = pullMetric(line, row, table, "Duration", /(?:^|\s*\/\s*)([0-9.]+\s*sec(?:onds?)?)(?=\s+[A-Z][A-Z. ]*\s*[+-]|\s*$)/i, secondsValue);
  line = pullMetric(line, row, table, "Cooldown", /(?:^|\s*[,/]\s*)(?:skill\s*)?cooldown\s*:?\s*([0-9.]+\s*sec(?:onds?)?)(?=\s*[,/]|\s|$)/i, secondsValue);
  line = pullMetric(line, row, table, "AP", /(?:^|\s*[,/]\s*)AP\s*\+?\s*([0-9]+)/i);

  const parsedDamage = parseDamageSegment(line, row, table, formulaRows);
  const parsedBonus = parseGenericBonusSegment(parsedDamage ? removeDamageSegmentsForBonus(line) : line, row, table);
  if (!parsedRecovery.parsed && !parsedDamage && !parsedBonus && normalizeWhitespace(line)) {
    setLevelValue(row, table, "Effect", normalizeSkillValue(line));
  }
}

function parseRecoverySegments(line, row, table) {
  const recoveryPattern = /(?:^|\s*\/\s*)((?:HP|SP)\s+recovery(?:\s+amount)?|Healing amount|Recovery Amount(?:\([^)]+\))?)\s*:?\s*([0-9,]+\s*\+\s*\([^)]+?\s*x\s*[0-9]+\))\s*(?:\/\s*(?:(?:[\w\s]+?\s+)?aoe|range|area of effect)\s*:?\s*([0-9]+\s*x\s*[0-9]+\s*cells?))?/gi;
  let parsed = false;
  const remaining = line.replace(recoveryPattern, (_match, rawLabel, rawValue, rawArea) => {
    const label = recoveryLabel(rawLabel);
    setRecoveryFormulaValues(row, table, label, rawValue);

    if (rawArea) {
      const qualifier = recoveryQualifier(rawLabel);
      setLevelValue(row, table, qualifier ? `Area of Effect (${qualifier})` : "Area of Effect", formatArea(rawArea));
    }

    parsed = true;
    return "";
  });

  return { line: remaining.trim(), parsed };
}

function setRecoveryFormulaValues(row, table, label, rawValue) {
  const parts = recoveryFormulaParts(rawValue);
  if (!parts) {
    setLevelValue(row, table, label, formatFormulaExpression(rawValue));
    return;
  }

  setLevelValue(row, table, recoveryBaseLabel(label), formatNumber(parts.base));
  setLevelValue(row, table, recoveryBonusLabel(label, parts.source), `${parts.source} x ${formatNumber(parts.multiplier)}`);
}

function recoveryFormulaParts(value) {
  const match = normalizeWhitespace(value).match(/^([0-9,]+)\s*\+\s*\((.+?)\s*x\s*([0-9,]+)\)$/i);
  if (!match) return null;

  return {
    base: match[1],
    source: recoveryFormulaSource(match[2]),
    multiplier: match[3]
  };
}

function recoveryFormulaSource(value) {
  return normalizeFormulaSource(value).replace(/\bLvl\b/gi, "Lv");
}

function recoveryBaseLabel(label) {
  if (label === "HP Recovery") return "Base Recovery (HP)";
  if (label === "SP Recovery") return "Base Recovery (SP)";
  return `Base ${label}`;
}

function recoveryBonusLabel(label, source) {
  const sourceLabel = recoveryBonusSourceLabel(source);
  if (label === "HP Recovery") return `Bonus HP Recovery (${sourceLabel})`;
  if (label === "SP Recovery") return `Bonus SP Recovery (${sourceLabel})`;
  return `Bonus ${label} (${sourceLabel})`;
}

function recoveryBonusSourceLabel(source) {
  return normalizeSkillValue(source)
    .replace(/\s+Lv$/i, "")
    .replace(/\s+Level$/i, "");
}

function recoveryLabel(label) {
  const normalized = normalizeWhitespace(label);
  const qualifier = recoveryQualifier(normalized);
  if (/^HP\s+recovery/i.test(normalized)) return "HP Recovery";
  if (/^SP\s+recovery/i.test(normalized)) return "SP Recovery";
  if (/^Healing amount$/i.test(normalized)) return "HP Recovery";
  return qualifier ? `Recovery Amount (${qualifier})` : "Recovery Amount";
}

function recoveryQualifier(label) {
  return normalizeWhitespace(label).match(/\(([^)]+)\)/)?.[1] ?? "";
}

function formatFormulaExpression(value) {
  const parts = recoveryFormulaParts(value);
  if (parts) return `${formatNumber(parts.base)} + (${parts.source} x ${formatNumber(parts.multiplier)})`;

  return normalizeSkillValue(value)
    .replace(/\s*\+\s*/g, " + ")
    .replace(/\s*x\s*/gi, " x ");
}

function recoverySpecValue(skill, label) {
  const detail = maxLevelDetail(skill);
  if (!detail) return "";

  const values = [];
  for (const rawLine of detail.text.split("\n")) {
    for (const value of recoverySpecValuesFromLevelLine(rawLine, label)) {
      if (value && !values.includes(value)) values.push(value);
    }
  }

  return values.join("/");
}

function recoverySpecValuesFromLevelLine(rawLine, label) {
  const line = normalizeWhitespace(rawLine);
  if (!line) return [];

  const values = [];
  for (const segment of line.split(/\s*\/\s*/)) {
    const match = segment.match(/^((?:HP|SP)\s+recovery(?:\s+amount)?|Healing amount|Recovery Amount(?:\([^)]+\))?)\s*:?\s*([0-9,]+\s*\+\s*\([^)]+?\s*x\s*[0-9,]+\))/i);
    if (!match || recoveryLabel(match[1]) !== label) continue;
    values.push(formatFormulaExpression(match[2]));
  }

  return values;
}

function parseDamageSegment(line, row, table, formulaRows) {
  const normalized = normalizeWhitespace(line);
  if (!normalized) return false;
  let parsed = false;

  const hitLabel = /per hit/i.test(normalized) ? " per Hit" : "";
  const physicalMatch = normalized.match(/\bATK(?:\s*per\s*hit)?\s+([0-9,]+%)/i) ?? normalized.match(/([0-9,]+%)\s*Atk/i);
  if (physicalMatch) {
    setLevelValue(row, table, `Base Damage (ATK${hitLabel})`, physicalMatch[1]);
    parsed = true;
  }

  const magicalMatch = normalized.match(/\bMATK(?:\s*per\s*hit)?\s+([0-9,]+%)/i) ?? normalized.match(/([0-9,]+%)\s*Matk/i);
  if (magicalMatch) {
    setLevelValue(row, table, `Base Damage (MATK${hitLabel})`, magicalMatch[1]);
    parsed = true;
  }

  return parseFormulaValue("Damage", normalized, row, table, formulaRows) || parsed;
}

function damageSpecValue(skill) {
  const detail = maxLevelDetail(skill);
  if (!detail) return "";

  const values = [];
  for (const rawLine of detail.text.split("\n")) {
    for (const value of damageSpecValuesFromLevelLine(rawLine)) {
      if (value && !values.includes(value)) values.push(value);
    }
  }

  return values.join("/");
}

function maxLevelDetail(skill) {
  const details = [...(skill.levelDetails ?? [])].filter((detail) => Number.isFinite(detail.level));
  if (!details.length) return null;

  const targetLevel = Number(skill.maxLevel) || Math.max(...details.map((detail) => detail.level));
  return details.filter((detail) => detail.level === targetLevel).at(-1)
    ?? details.sort((a, b) => a.level - b.level).at(-1);
}

function damageSpecValuesFromLevelLine(rawLine) {
  const line = normalizeDamageSourceText(rawLine).replace(/\.$/, "");
  if (!line || !/\b(?:ATK|MATK)\b/i.test(line)) return [];

  const lineHasPerHit = /per hit/i.test(line);
  const globalStat = line.match(/\b(?:ATK|MATK)\b/gi)?.at(-1)?.toUpperCase() ?? "";
  const values = [];

  for (const segment of line.split(/\s*\/\s*/)) {
    values.push(...damageSpecValuesFromSegment(segment, lineHasPerHit, globalStat));
  }

  return values;
}

function normalizeDamageSourceText(value) {
  return normalizeWhitespace(value)
    .replace(/\bPer\s+hit(?=(?:ATK|MATK)\b)/gi, "Per hit ");
}

function damageSpecValuesFromSegment(segment, lineHasPerHit, globalStat) {
  const normalized = normalizeWhitespace(segment);
  if (!normalized) return [];

  const formulaValue = damageFormulaSpecValue(normalized, lineHasPerHit);
  if (formulaValue) return [formulaValue];

  const rawFormulaValue = damageRawFormulaSpecValue(normalized, lineHasPerHit);
  if (rawFormulaValue) return [rawFormulaValue];

  return damagePercentSpecValues(normalized, lineHasPerHit, globalStat);
}

function damageFormulaSpecValue(segment, lineHasPerHit) {
  const statMatch = segment.match(/\b(ATK|MATK)\b/i);
  if (!statMatch) return "";

  const formulaMatch = segment.match(/\(?\s*([0-9,]+)\s*\+\s*\({1,2}\s*([^)]+?(?:level|lv)(?:\s*\+\s*[^)]+?(?:level|lv))?)\)*\s*x\s*([0-9]+)\)?/i);
  if (!formulaMatch) return "";

  const stat = statMatch[1].toUpperCase();
  const base = formatNumber(formulaMatch[1]);
  const source = normalizeFormulaSource(formulaMatch[2]);
  const sourceTerm = source.includes("+") ? `(${source})` : source;
  const multiplier = formatNumber(formulaMatch[3]);
  const inner = `${base} + (${sourceTerm} x ${multiplier})`;
  const outerMultiplier = segment.match(/\)+\s*x\s*([A-Za-z][A-Za-z\s]*)%/i)?.[1];
  const qualifier = damageStatQualifier(segment);
  let value = outerMultiplier
    ? `((${inner}) x ${normalizeSkillValue(outerMultiplier)})% ${stat}`
    : `(${inner})% ${stat}`;

  if (lineHasPerHit && !/per hit/i.test(value)) value = `${value} per hit`;
  if (qualifier) value = `${value} (${qualifier})`;

  return normalizeSkillValue(value);
}

function damageRawFormulaSpecValue(segment, lineHasPerHit) {
  const match = segment.match(/\b(ATK|MATK)\b(?:\(([^)]*)\))?\s*(.*)$/i);
  if (!match) return "";

  const expression = normalizeWhitespace(match[3]).replace(/\s*(?:range|area of effect|aoe)\b.*$/i, "");
  if (!/^\(?\s*[0-9][\s\S]*\+[\s\S]*%/.test(expression)) return "";

  const stat = match[1].toUpperCase();
  const qualifier = normalizeSkillValue(match[2]);
  let value = `${normalizeDamageExpression(expression)} ${stat}`;

  if (lineHasPerHit && !/per hit/i.test(value)) value = `${value} per hit`;
  if (qualifier) value = `${value} (${qualifier})`;

  return normalizeSkillValue(value);
}

function normalizeFormulaSource(value) {
  return normalizeSkillValue(value)
    .replace(/\bLvl\b/gi, "Lv")
    .replace(/([a-z])Lv\b/gi, "$1 Lv")
    .replace(/\s*\+\s*/g, " + ");
}

function normalizeDamageExpression(value) {
  let expression = normalizeFormulaSource(value);
  const hasPercent = expression.endsWith("%");
  if (hasPercent) expression = expression.slice(0, -1).trim();
  if (expression.includes(" + ") && !isWrappedExpression(expression)) expression = `(${expression})`;
  return `${expression}${hasPercent ? "%" : ""}`;
}

function isWrappedExpression(value) {
  if (!value.startsWith("(") || !value.endsWith(")")) return false;

  let depth = 0;
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (depth === 0 && index < value.length - 1) return false;
  }

  return depth === 0;
}

function damageStatQualifier(value) {
  const compact = value.match(/\b(?:ATK|MATK)\(([^)]+)\)/i)?.[1];
  if (compact) return normalizeSkillValue(compact);

  const spaced = value.match(/\b(?:ATK|MATK)\b\s+\(([^()0-9+%]+)\)\s+\(?[0-9]/i)?.[1];
  return spaced ? normalizeSkillValue(spaced) : "";
}

function damagePercentSpecValues(segment, lineHasPerHit, globalStat) {
  const values = [];
  const statFirstPattern = /\b(ATK|MATK)\b(?:\(([^)]*)\))?(?:\s*per\s*hit)?\s*([0-9][0-9,]*%)/gi;
  const percentFirstPattern = /([0-9][0-9,]*%)\s*(?:\(([^)]*)\))?\s*\b(ATK|MATK)\b(?:\s*\(([^)]*)\))?/gi;

  collectDamagePercentValues(values, segment, statFirstPattern, (match) => ({
    stat: match[1],
    qualifier: match[2],
    percent: match[3],
    text: match[0]
  }), lineHasPerHit);
  collectDamagePercentValues(values, segment, percentFirstPattern, (match) => ({
    stat: match[3],
    qualifier: match[2] || match[4],
    percent: match[1],
    text: match[0]
  }), lineHasPerHit);

  if (!values.length && globalStat) {
    const percentOnlyMatch = segment.match(/^([0-9][0-9,]*%)\s*(?:\(([^)]*)\))?(?:\s*per\s*hit)?$/i);
    if (percentOnlyMatch) {
      addDamagePercentValue(values, {
        stat: globalStat,
        qualifier: percentOnlyMatch[2],
        percent: percentOnlyMatch[1],
        text: percentOnlyMatch[0]
      }, lineHasPerHit);
    }
  }

  return values;
}

function collectDamagePercentValues(values, segment, pattern, mapper, lineHasPerHit) {
  for (const match of segment.matchAll(pattern)) {
    addDamagePercentValue(values, mapper(match), lineHasPerHit);
  }
}

function addDamagePercentValue(values, component, lineHasPerHit) {
  const amount = formatNumber(component.percent.replace(/%$/, ""));
  const stat = component.stat.toUpperCase();
  const qualifier = normalizeSkillValue(component.qualifier);
  let value = `${amount}% ${stat}`;

  if (lineHasPerHit || /per hit/i.test(component.text)) value = `${value} per hit`;
  if (qualifier) value = `${value} (${qualifier})`;

  value = normalizeSkillValue(value);
  if (!values.includes(value)) values.push(value);
}

function parseGenericBonusSegment(line, row, table) {
  const normalized = normalizeGenericBonusInput(line);
  if (!normalized) return false;

  const increaseMatch = normalized.match(/^increases?\s+(.+?)\s+by\s+([0-9][0-9,.]*(?:\s*%)?)(?:\s*(?:\/|,)\s*(.+))?$/i);
  if (increaseMatch) {
    setGenericBonusValues(row, table, increaseMatch[1], `+${increaseMatch[2]}`);
    if (increaseMatch[3] && !parseGenericBonusSegment(increaseMatch[3], row, table)) {
      setLevelValue(row, table, "Effect", normalizeSkillValue(increaseMatch[3]));
    }

    return true;
  }

  const match = normalized.match(/^(.+?)\s*([+-]\s*[0-9][0-9,.]*(?:\s*%)?)(?:\s*(?:\/|,)\s*(.+))?$/i);
  if (!match) return false;

  if (!setGenericBonusValues(row, table, match[1], match[2])) return false;
  if (match[3] && !parseGenericBonusSegment(match[3], row, table)) {
    setLevelValue(row, table, "Effect", normalizeSkillValue(match[3]));
  }

  return true;
}

function normalizeGenericBonusInput(value) {
  return normalizeWhitespace(value).replace(/^[/:]\s*/, "").replace(/^\+\s*/, "");
}

function removeDamageSegmentsForBonus(value) {
  return normalizeWhitespace(value)
    .replace(/(?:^|\s*\/\s*)\b(?:ATK|MATK)(?:\s*per\s*hit)?\s+[0-9,][^/]*%/gi, "")
    .replace(/(?:^|\s*\/\s*)[0-9,]+%\s*(?:ATK|MATK)(?:\s*per\s*hit)?/gi, "")
    .trim();
}

function setGenericBonusValues(row, table, rawLabels, rawValue) {
  const value = normalizeSkillValue(rawValue);
  const labels = genericMetricLabels(rawLabels);
  if (!labels.length) return false;

  for (const label of labels) setLevelValue(row, table, label, value);
  return true;
}

function genericMetricLabels(value) {
  const normalized = normalizeWhitespace(value).toLowerCase();

  if (/melee\s*\/\s*long\s*(?:range|ranged)\s*\/\s*(?:all\s*)?(?:attribute|property)\s*(?:magic\s*)?damage(?:\s*bonus)?/.test(normalized)) {
    return ["Melee Damage Bonus", "Long Ranged Damage Bonus", "All Property Damage Bonus"];
  }

  const labels = splitSharedMetricLabels(normalized.replace(/\s*bonus$/i, " Bonus"));
  return labels.length ? labels : [titleCase(normalized.replace(/\s*bonus$/i, " Bonus"))];
}

function splitSharedMetricLabels(value) {
  const parts = normalizeWhitespace(value)
    .replace(/\bs\.makt\b/gi, "s.matk")
    .split(/\s*(?:\/|,|&|\band\b)\s*/i)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2 || !parts.every(isShortMetricLabel)) return [];
  return parts.map(titleCase);
}

function isShortMetricLabel(value) {
  return /^(?:p\.atk|s\.matk|h\.plus|pow|crt|con|spl|wis|sta|atk|matk|hit|cri|def|mdef|flee|mhp|msp|maxhp|maxsp)$/i.test(value);
}

function titleCase(value) {
  return normalizeWhitespace(value)
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\bP\.atk\b/gi, "P.Atk")
    .replace(/\bS\.makt\b/gi, "S.Matk")
    .replace(/\bS\.matk\b/gi, "S.Matk")
    .replace(/\bH\.plus\b/gi, "H.Plus")
    .replace(/\bMaxhp\b/gi, "MaxHP")
    .replace(/\bMaxsp\b/gi, "MaxSP")
    .replace(/\bMhp\b/gi, "MHP")
    .replace(/\bMsp\b/gi, "MSP")
    .replace(/\bPow\b/gi, "POW")
    .replace(/\bCrt\b/gi, "CRT")
    .replace(/\bCon\b/gi, "CON")
    .replace(/\bSpl\b/gi, "SPL")
    .replace(/\bWis\b/gi, "WIS")
    .replace(/\bSta\b/gi, "STA");
}

function pullMetric(line, row, table, label, regex, formatter = normalizeSkillValue) {
  return line.replace(regex, (_, value) => {
    setLevelValue(row, table, label, formatter(value));
    return "";
  }).trim();
}

function parseFormulaValue(label, value, row, table, formulaRows) {
  const formulaMatch = value.match(/\(?\s*([0-9,]+)\s*\+\s*\({1,2}\s*([^)]+?(?:level|lv)(?:\s*\+\s*[^)]+?(?:level|lv))?)\)*\s*x\s*([0-9]+)\)?/i);
  if (!formulaMatch) return false;

  const baseLabel = formulaBaseLabel(label, value);
  const multiplierLabel = formulaMultiplierLabel(label, formulaMatch[2]);

  setLevelValue(row, table, baseLabel, formatNumber(formulaMatch[1]));
  setLevelValue(row, table, multiplierLabel, formulaMatch[3]);

  const formulaLabel = formulaSpecLabel(label);
  if (!formulaRows.has(formulaLabel)) {
    formulaRows.set(formulaLabel, {
      label: formulaLabel,
      value: formulaTemplate(value, baseLabel, multiplierLabel, formulaMatch[2])
    });
  }

  return true;
}

function formulaBaseLabel(label, value) {
  if (label === "Under Blessing of Four Directions") return "Under Blessing of Four Directions";
  if (label === "Cursed Target") return "Cursed Target Factor";
  if (/per hit/i.test(value)) return /matk/i.test(value) ? "Base Damage (MATK per Hit)" : "Base Damage (ATK per Hit)";
  return /matk/i.test(value) ? "Base Damage (MATK)" : "Base Damage (ATK)";
}

function formulaMultiplierLabel(label, formulaSource) {
  const isDamage = /damage|blessing|cursed/i.test(label);
  if (/Talisman Mastery level\s*\+\s*Soul Mastery level/i.test(formulaSource)) {
    return isDamage ? "Bonus Damage (Talisman + Soul Lv) Multiplier" : "Mastery Lv Multiplier";
  }
  if (/Talisman Mastery/i.test(formulaSource)) {
    return isDamage ? "Bonus Damage (Talisman Lv) Multiplier" : "Talisman Lv Multiplier";
  }
  if (/Soul Mastery/i.test(formulaSource)) {
    return isDamage ? "Bonus Damage (Soul Lv) Multiplier" : "Soul Lv Multiplier";
  }
  return "Skill Level Factor";
}

function formulaSpecLabel(label) {
  if (label === "Under Blessing of Four Directions") return "Blessing Damage Formula";
  if (label === "Cursed Target") return "Cursed Target Formula";
  return "Damage Formula";
}

function formulaTemplate(value, baseLabel, multiplierLabel, formulaSource) {
  const source = normalizeWhitespace(formulaSource);
  const sourceTerm = source.includes("+") ? `(${source})` : source;
  const inner = `${baseLabel} + (${sourceTerm} x ${multiplierLabel})`;
  if (/Soul Energy/i.test(value)) return `((${inner}) x Soul Energy)% MATK`;
  if (/Matk/i.test(value)) return `(${inner})% MATK${/per hit/i.test(value) ? " per hit" : ""}`;
  return `(${inner})% ATK${/per hit/i.test(value) ? " per hit" : ""}`;
}

function stripDamageFromLevelTable(table) {
  const damageColumnIds = new Set(table.columns.filter((column) => isDamageLevelColumn(column.label)).map((column) => column.id));
  const effectColumn = table.columns.find((column) => column.label === "Effect");

  for (const row of table.rows) {
    for (const id of damageColumnIds) delete row.values[id];

    if (effectColumn && row.values[effectColumn.id]) {
      const effect = removeDamageEffect(row.values[effectColumn.id]);
      if (effect) {
        row.values[effectColumn.id] = effect;
      } else {
        delete row.values[effectColumn.id];
      }
    }
  }

  table.columns = table.columns.filter((column) => !damageColumnIds.has(column.id));
}

function isDamageLevelColumn(label) {
  const normalized = normalizeWhitespace(label);
  if (/^(?:Base\s+)?Damage(?:\s*\(|$)/i.test(normalized)) return true;
  if (/^Bonus Damage \(.+\) Multiplier$/i.test(normalized)) return true;
  return ["Under Blessing of Four Directions", "Cursed Target Factor", "Skill Level Factor"].includes(label);
}

function isDamageSpecLabel(label) {
  return /damage|cursed target/i.test(label);
}

function removeDamageEffect(value) {
  return String(value ?? "")
    .split(/\n+/)
    .map((line) =>
      line
        .split(/\s*\/\s*/)
        .map((segment) => segment.trim())
        .filter((segment) => segment && !effectSegmentLooksLikeDamage(segment))
        .join(" / ")
    )
    .filter(Boolean)
    .join("\n");
}

function effectSegmentLooksLikeDamage(value) {
  const text = String(value ?? "").trim();
  if (!text) return false;
  if (/\b(?:ATK|MATK)\b/i.test(text) && /[0-9]/.test(text) && /%/.test(text)) return true;
  return /[0-9][0-9,]*\s*\+\s*\([^)]*(?:level|lv|mastery|count)[^)]*\)\s*%/i.test(text);
}

function setLevelValue(row, table, label, value) {
  const normalized = normalizeWhitespace(value);
  if (!normalized) return;

  const id = levelColumnId(label);
  if (!table.columns.some((column) => column.id === id)) table.columns.push({ id, label });
  row.values[id] = row.values[id] ? `${row.values[id]}\n${normalized}` : normalized;
}

function levelColumnId(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function orderLevelColumns(columns) {
  const order = [
    "Base Damage (ATK)",
    "Base Damage (ATK per Hit)",
    "Base Damage (MATK)",
    "Base Damage (MATK per Hit)",
    "Under Blessing of Four Directions",
    "Cursed Target Factor",
    "POW",
    "CRT",
    "CON",
    "SPL",
    "WIS",
    "STA",
    "MaxHP",
    "MaxSP",
    "MHP",
    "MSP",
    "P.Atk",
    "S.Matk",
    "H.Plus",
    "Damage Bonus",
    "Long Range Physical Damage",
    "Long Ranged Physical Damage",
    "Melee Damage Bonus",
    "Long Ranged Damage Bonus",
    "All Property Damage Bonus",
    "Base Recovery (HP)",
    "Bonus HP Recovery (Talisman Mastery)",
    "Base Recovery (SP)",
    "Bonus SP Recovery (Talisman Mastery)",
    "HP Recovery",
    "SP Recovery",
    "Recovery Amount",
    "Recovery Amount (Commune)",
    "AP",
    "SP Cost",
    "Bonus Damage (Talisman Lv) Multiplier",
    "Bonus Damage (Soul Lv) Multiplier",
    "Bonus Damage (Talisman + Soul Lv) Multiplier",
    "Skill Level Factor",
    "Area of Effect",
    "Area of Effect (Commune)",
    "Duration",
    "Cooldown",
    "Effect"
  ];

  return [...columns].sort((a, b) => {
    const aIndex = order.indexOf(a.label);
    const bIndex = order.indexOf(b.label);
    if (aIndex === -1 && bIndex === -1) return a.label.localeCompare(b.label);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
}

function formatArea(value) {
  return normalizeSkillValue(value).replace(/\s*x\s*/gi, "x").replace(/\s*cells?$/i, "");
}

function formatNumber(value) {
  const digits = String(value).replace(/,/g, "");
  if (!/^\d+$/.test(digits)) return value;
  return Number(digits).toLocaleString("en-US");
}

function levelMetric(skill, regex, formatter = normalizeSkillValue) {
  const values = [];
  for (const detail of skill.levelDetails) {
    const match = detail.text.match(regex);
    if (match) values.push({ level: detail.level, value: formatter(match[1]) });
  }

  if (!values.length) return "";
  const unique = [...new Set(values.map((entry) => entry.value))];
  if (unique.length === 1) return unique[0];
  return values.map((entry) => `Lv ${entry.level}: ${entry.value}`).join(" / ");
}

function consumedTalisman(description) {
  const match = description.match(/Consumes\s+(\d+)\s+(Soul Talismans?)/i);
  if (!match) return "";
  return `${match[1]} ${match[2]}`;
}

function descriptionValue(description, regex) {
  const match = description.match(regex);
  return match ? normalizeSkillValue(match[1]) : "";
}

async function fetchSkillTranslations({ id, englishName }) {
  if (translationCache.has(id)) return translationCache.get(id);

  const translations = {};
  const divinePride = await fetchDivinePrideSkillTranslation(id);
  const browiki = await fetchBrowikiSkillTranslation({ id, englishName });
  const ptBr = {
    ...(divinePride ?? {}),
    ...(browiki ?? {})
  };

  if (Object.keys(ptBr).length) translations["pt-BR"] = ptBr;
  translationCache.set(id, translations);
  return translations;
}

async function fetchDivinePrideSkillTranslation(id) {
  const env = await loadEnv();
  const apiKey = env.DIVINE_PRIDE_API_KEY;
  if (!apiKey) return null;

  const apiUrl = (env.DIVINE_PRIDE_API_URL || `${defaultApiUrl}/api`).replace(/\/$/, "");

  try {
    const data = await fetchJson(`${apiUrl}/database/Skill/${id}?apiKey=${encodeURIComponent(apiKey)}`, {
      cachePath: sourceFilePath("divine-pride-api", "skills", `${id}.json`)
    });
    const entry = (data.globalization ?? []).find(isPortugueseGlobalization);
    if (!entry) return null;

    return {
      name: normalizeWhitespace(entry.name),
      description: cleanGameText(entry.description),
      source: "Divine Pride API"
    };
  } catch {
    return null;
  }
}

function isPortugueseGlobalization(entry) {
  const server = String(entry.server ?? "").toLowerCase();
  const language = String(entry.language ?? "").toLowerCase();
  return server.includes("bro") || server.includes("latam") || language.includes("pt") || language.includes("portugu");
}

async function fetchBrowikiSkillTranslation({ id, englishName }) {
  const pageName = encodeURIComponent(englishName.replace(/\s+/g, "_"));
  const url = `${browikiUrl}/wiki/${pageName}`;

  try {
    const html = await fetchText(url, {
      accept: "text/html,application/xhtml+xml",
      language: "pt-BR,pt;q=0.9,en;q=0.6",
      cacheNotFound: true,
      cachePath: sourceFilePath("browiki", "wiki", `${id}-${slugify(englishName) || "skill"}.html`)
    });
    if (isMissingWikiPage(html)) return null;

    const name = stripTags(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");
    const description = browikiDescription(html);
    if (!name && !description) return null;

    return {
      name: name || englishName,
      description,
      source: "bROWiki",
      sourceUrl: url
    };
  } catch {
    return null;
  }
}

async function fetchIrowikiSkillDetails({ id, englishName }) {
  const pageName = encodeURIComponent(englishName.replace(/\s+/g, "_"));
  const url = `${irowikiUrl}/wiki/${pageName}`;

  try {
    const html = await fetchText(url, {
      accept: "text/html,application/xhtml+xml",
      language: "en-US,en;q=0.9",
      cacheNotFound: true,
      cachePath: sourceFilePath("irowiki", "wiki", `${id}-${slugify(englishName) || "skill"}.html`)
    });
    if (isMissingWikiPage(html)) return null;

    return {
      url,
      rows: parseIrowikiDetailRows(html)
    };
  } catch {
    return null;
  }
}

function isMissingWikiPage(html) {
  return /No momento,\s*n[aã]o h[aá] conte[uú]do nesta p[aá]gina/i.test(html)
    || /There is currently no text in this page|This page does not exist|Action unknown|Bad title/i.test(html);
}

function parseIrowikiDetailRows(html) {
  const rows = {};

  for (const rowHtml of tableRows(html)) {
    const cells = tableCells(rowHtml);
    if (cells.length < 2) continue;

    const label = irowikiDetailLabel(cells[0]);
    const value = cleanIrowikiValue(cells.slice(1).join(" "));
    if (label && value) rows[label] = value;
  }

  return rows;
}

function irowikiDetailLabel(value) {
  const key = normalizeFieldKey(value.replace(/:$/, ""));
  const labels = {
    type: "Type",
    levels: "Levels",
    maxlevel: "Levels",
    spcost: "SP Cost",
    fixedcasttime: "Fixed Cast Time",
    variablecasttime: "Variable Cast Time",
    castdelay: "Cast Delay",
    cooldown: "Cooldown",
    duration: "Duration",
    target: "Target",
    range: "Cast Range",
    castrange: "Cast Range",
    areaofeffect: "Area of Effect",
    ammunition: "Ammunition",
    apgenerated: "AP Generated",
    apconsumed: "AP Consumed",
    apcost: "AP Consumed"
  };

  return labels[key] ?? "";
}

function cleanIrowikiValue(value) {
  return normalizeSkillValue(value)
    .replace(/\bImage(?::\s*)?/gi, "")
    .replace(/\b\d+\.png\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function missingSkillDetails(current, rows) {
  const details = {};
  const fields = {
    "SP Cost": "spCost",
    "Fixed Cast Time": "fixedCastTime",
    "Variable Cast Time": "variableCastTime",
    "Cast Delay": "castDelay",
    "Cooldown": "cooldown",
    "Duration": "duration",
    "Target": "target",
    "Cast Range": "castRange",
    "Area of Effect": "areaOfEffect",
    "Ammunition": "ammunition"
  };

  if (rows.Type && !current.group && !current.type) details.type = rows.Type;
  if (rows.Levels && !current.maxLevel) details.maxLevel = Number(rows.Levels) || current.maxLevel;

  for (const [label, field] of Object.entries(fields)) {
    if (!current[field] && rows[label]) details[field] = rows[label];
  }
  if (shouldPreferIrowikiTarget(current.target, rows.Target)) details.target = rows.Target;

  if (rows["AP Generated"] && !current.recoversAp) {
    details.recoversAp = rows["AP Generated"];
    if (current.consumesAp === rows["AP Generated"]) details.consumesAp = "";
  }
  if (rows["AP Consumed"] && !current.consumesAp) {
    details.consumesAp = rows["AP Consumed"];
    if (current.recoversAp === rows["AP Consumed"]) details.recoversAp = "";
  }

  return details;
}

function shouldPreferIrowikiTarget(currentTarget, irowikiTarget) {
  const current = normalizeWhitespace(currentTarget).toLowerCase();
  const candidate = normalizeWhitespace(irowikiTarget);
  if (!candidate || !current) return false;
  if (!/^single target$/.test(current)) return false;
  return /\b(?:self|party member|caster|ally|allies)\b/i.test(candidate);
}

function browikiDescription(html) {
  const content = html.match(/<div[^>]+class="mw-parser-output"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i)?.[1] ?? html;
  const paragraphs = [...content.matchAll(/<p>([\s\S]*?)<\/p>/gi)]
    .map((match) => stripTags(match[1]))
    .map(normalizeWhitespace)
    .filter(Boolean)
    .filter((text) => !/^De bROWiki$/i.test(text));

  return paragraphs.slice(0, 3).join("\n");
}

function isCurrentClassSkill(classConfig, skillId) {
  return classConfig.skillRanges.some(([from, to]) => skillId >= from && skillId <= to);
}

function mergeAddedSkillNotes({ rebalanceByName, classSlug, addedSkills }) {
  const addedFile = `rebalances/${classSlug}/added_skills.md`;

  for (const entry of addedSkills.entries) {
    for (const skillName of entry.skills) {
      const key = normalizeName(skillName);
      if (!rebalanceByName.has(key)) rebalanceByName.set(key, []);
      rebalanceByName.get(key).push({
        skillName,
        versionId: entry.versionId,
        versionLabel: entry.versionLabel,
        file: addedFile,
        section: "Added skill",
        notes: [`Added as a new skill in ${entry.versionLabel}.`],
        specRows: [],
        added: true
      });
    }
  }
}

async function parseRebalanceManifest() {
  try {
    const text = await fs.readFile(path.join(rootDir, "rebalances", "manifest.json"), "utf8");
    return JSON.parse(text);
  } catch {
    return [];
  }
}

function buildPointLimitTimeline(manifest) {
  const timeline = [{ versionId: "pre", label: "Pre-rebalances", maxJobLevel: 50, pointLimit: basePointLimit }];
  for (const entry of manifest) {
    timeline.push({
      versionId: entry.id ?? `rebalance-${entry.number}`,
      label: entry.label ?? `Rebalance ${entry.number}`,
      maxJobLevel: Number(entry.maxJobLevel) || 50,
      pointLimit: Number(entry.pointLimit) || basePointLimit
    });
  }
  timeline.push({ ...timeline.at(-1), versionId: "current", label: "Current specs" });
  return timeline;
}

async function parseRebalanceVersions(targetClassSlug, manifest) {
  const classDir = path.join(rootDir, "rebalances", targetClassSlug);
  const files = await readRebalanceFiles(classDir);
  const manifestByNumber = new Map(manifest.map((entry) => [Number(entry.number), entry]));

  const versions = [];
  for (const filePath of files) {
    const markdown = await fs.readFile(filePath, "utf8");
    const frontmatter = parseFrontmatter(markdown);
    const body = stripFrontmatter(markdown);
    const file = path.relative(rootDir, filePath).replace(/\\/g, "/");
    const number = Number(path.basename(filePath).match(/\d+/)?.[0] ?? versions.length + 1);
    const metadata = manifestByNumber.get(number) ?? {};
    const heading = body.split(/\r?\n/).find((line) => /^\s*\d+\.\s+/.test(line))?.trim() ?? `Rebalance ${number}`;
    const skills = [];
    let currentSkill = null;

    for (const line of body.split(/\r?\n/)) {
      const headingMatch = line.match(/^\s*(\d+\.\d+)\.\s+(.+?)\s*$/);
      if (headingMatch) {
        currentSkill = {
          section: headingMatch[1],
          name: normalizeWhitespace(headingMatch[2]),
          notes: []
        };
        skills.push(currentSkill);
        continue;
      }

      const bulletMatch = line.match(/^\s*-\s+(.+?)\s*$/);
      if (bulletMatch && currentSkill) {
        currentSkill.notes.push(normalizeWhitespace(bulletMatch[1]));
      }
    }

    versions.push({
      id: metadata.id ?? `rebalance-${number}`,
      label: metadata.label ?? `Rebalance ${number}`,
      file,
      heading,
      className: frontmatter.class ?? classNameFromHeading(heading) ?? titleFromSlug(targetClassSlug),
      sourceUrl: metadata.sourceUrl ?? "",
      scope: metadata.scope ?? "",
      appliesTo: metadata.appliesTo ?? "",
      maxJobLevel: metadata.maxJobLevel ?? null,
      pointLimit: metadata.pointLimit ?? null,
      addsNewSkills: Boolean(metadata.addsNewSkills),
      skills
    });
  }

  return versions;
}

async function readRebalanceFiles(directory) {
  try {
    const files = await fs.readdir(directory);
    return files
      .filter((file) => /^rebalance_\d+\.md$/i.test(file))
      .map((file) => path.join(directory, file))
      .sort((a, b) => Number(path.basename(a).match(/\d+/)?.[0] ?? 0) - Number(path.basename(b).match(/\d+/)?.[0] ?? 0));
  } catch {
    return [];
  }
}

async function parseAddedSkills(slug, manifest) {
  const filePath = path.join(rootDir, "rebalances", slug, "added_skills.md");
  const manifestByLabel = new Map(manifest.map((entry) => [entry.label, entry]));
  const entries = [];
  let className = "";
  let current = null;

  try {
    const markdown = await fs.readFile(filePath, "utf8");
    for (const line of markdown.split(/\r?\n/)) {
      const titleMatch = line.match(/^#\s+Added Skills\s+-\s+(.+?)\s*$/i);
      if (titleMatch) {
        className = normalizeWhitespace(titleMatch[1]);
        continue;
      }

      const headingMatch = line.match(/^##\s+(.+?)\s*$/);
      if (headingMatch) {
        const label = normalizeWhitespace(headingMatch[1]);
        const metadata = manifestByLabel.get(label) ?? {};
        current = {
          versionId: metadata.id ?? slugify(label),
          versionLabel: label,
          file: path.relative(rootDir, filePath).replace(/\\/g, "/"),
          skills: []
        };
        entries.push(current);
        continue;
      }

      const skillMatch = line.match(/^-\s+(.+?)\s*$/);
      if (skillMatch && current) current.skills.push(normalizeWhitespace(skillMatch[1]));
    }
  } catch {
    // Optional.
  }

  return {
    className,
    entries: entries.filter((entry) => entry.skills.length)
  };
}

function groupRebalancesBySkill(versions) {
  const groups = new Map();
  for (const version of versions) {
    for (const skill of version.skills) {
      const key = normalizeName(skill.name);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({
        skillName: skill.name,
        versionId: version.id,
        versionLabel: version.label,
        file: version.file,
        section: skill.section,
        notes: skill.notes,
        specRows: mergeSpecRows(skill.notes.flatMap(parseSpecRows))
      });
    }
  }
  return groups;
}

function parseSpecRows(note) {
  const rows = [];
  const changeMatch = note.match(/^(Increases|Reduces|Decreases|Changes)\s+(.+?)\s+from\s+(.+?)\s+to\s+(.+?)(?:\s+based on level\s+(\d+)(?:\s+(\([^)]+\)))?)?\.?$/i);
  if (changeMatch) {
    const label = specLabel(changeMatch[2]);
    const qualifier = label === "Damage" ? damageMetricQualifier(changeMatch[2]) : "";
    rows.push({
      label,
      before: appendDamageQualifier(normalizeSkillValue(changeMatch[3]), qualifier),
      after: appendDamageQualifier(normalizeSkillValue(changeMatch[4]), qualifier),
      scope: changeMatch[5] ? `Lv ${changeMatch[5]}${changeMatch[6] ? ` ${normalizeSkillValue(changeMatch[6])}` : ""}` : "",
      source: note
    });
    return rows;
  }

  const removeMatch = note.match(/^Removes\s+(.+?)(?:\s+after skill)?\.?$/i);
  if (removeMatch) {
    rows.push({
      label: specLabel(removeMatch[1]),
      before: normalizeSkillValue(removeMatch[1]),
      after: "Removed",
      scope: "",
      source: note
    });
    return rows;
  }

  const conditionMatch = note.match(/^Improved the skill to can be used while under\s+(.+?)\s+buff\.?$/i);
  if (conditionMatch) {
    rows.push({
      label: "Use Condition",
      before: "Unavailable",
      after: `Can be used while under ${normalizeSkillValue(conditionMatch[1])} buff`,
      scope: "",
      source: note
    });
    return rows;
  }

  const dispelMatch = note.match(/^(.+?)\s+buff no longer be removed by\s+(.+?)\.?$/i);
  if (dispelMatch) {
    rows.push({
      label: "Buff Removal",
      before: `Can be removed by ${normalizeSkillValue(dispelMatch[2])}`,
      after: `No longer removed by ${normalizeSkillValue(dispelMatch[2])}`,
      scope: normalizeSkillValue(dispelMatch[1]),
      source: note
    });
  }

  return rows;
}

function specLabel(rawMetric) {
  const metric = normalizeWhitespace(rawMetric).toLowerCase();
  if (metric.includes("sp consumption")) return "SP Cost";
  if (metric.includes("ap consumption")) return "AP Consumed";
  if (metric.includes("ap recovery")) return "AP Generated";
  if (/^(?:base\s+)?damage\b/.test(metric)) return "Damage";
  if (metric.includes("cooldown")) return "Cooldown";
  if (metric.includes("delay")) return "Cast Delay";
  if (metric.includes("cast range")) return "Cast Range";
  if (metric.includes("area of effect")) return "Area of Effect";
  if (metric.includes("buff duration")) return "Buff Duration";
  return rawMetric
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function mergeSpecRows(rows) {
  const merged = [];
  const damageByScope = new Map();

  for (const row of rows) {
    if (row.label !== "Damage") {
      merged.push(row);
      continue;
    }

    const key = "Damage";
    const existing = damageByScope.get(key);
    if (!existing) {
      const copy = { ...row };
      damageByScope.set(key, copy);
      merged.push(copy);
      continue;
    }

    existing.before = joinSpecValues(existing.before, row.before);
    existing.after = joinSpecValues(existing.after, row.after);
    existing.scope = joinSpecValues(existing.scope, row.scope);
    existing.source = joinSources(existing.source, row.source);
  }

  return merged;
}

function joinSpecValues(left, right) {
  if (!left) return right;
  if (!right || left === right) return left;
  return `${left}/${right}`;
}

function joinSources(left, right) {
  if (!left) return right;
  if (!right || left.includes(right)) return left;
  return `${left} / ${right}`;
}

function damageMetricQualifier(rawMetric) {
  const metric = normalizeSkillValue(rawMetric).replace(/^base\s+/i, "");
  const parenMatch = metric.match(/^damage\s*\((.+)\)$/i);
  if (parenMatch) return parenMatch[1];

  const suffixMatch = metric.match(/^damage\s+(?:of\s+(?:the\s+)?|)(.+)$/i);
  if (!suffixMatch) return "";

  const qualifier = suffixMatch[1].trim();
  return qualifier && !/^from\b/i.test(qualifier) ? qualifier : "";
}

function appendDamageQualifier(value, qualifier) {
  const normalizedValue = normalizeSkillValue(value);
  const normalizedQualifier = normalizeSkillValue(qualifier);
  if (!normalizedValue || !normalizedQualifier || normalizedValue.toLowerCase().includes(normalizedQualifier.toLowerCase())) {
    return normalizedValue;
  }
  return `${normalizedValue} (${normalizedQualifier})`;
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return {};
  const endIndex = markdown.indexOf("\n---", 3);
  if (endIndex < 0) return {};

  const frontmatter = {};
  for (const line of markdown.slice(3, endIndex).split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
    if (!match) continue;
    frontmatter[match[1]] = parseFrontmatterValue(match[2]);
  }

  return frontmatter;
}

function parseFrontmatterValue(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);
  try {
    return JSON.parse(trimmed);
  } catch {
    return trimmed;
  }
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return markdown;
  const endIndex = markdown.indexOf("\n---", 3);
  if (endIndex < 0) return markdown;
  return markdown.slice(endIndex + 4).trimStart();
}

async function fetchText(url, options = {}) {
  return sourceText(url, options);
}

async function fetchJson(url, options = {}) {
  const text = await sourceText(url, {
    ...options,
    accept: "application/json",
    extension: "json"
  });
  return JSON.parse(text);
}

async function sourceText(url, options = {}) {
  const cachePath = options.cachePath ?? sourceFilePath("external", `${sourceFileNameFromUrl(url)}.${options.extension ?? "html"}`);

  if (!cliOptions.downloadSources) return readSourceFile(cachePath, url);

  if (!cliOptions.refreshSources) {
    const cached = await tryReadSourceFile(cachePath);
    if (cached !== null) {
      sourceStats.reused += 1;
      return cached;
    }
  }

  try {
    const text = await fetchRemoteText(url, options);
    await writeSourceFile(cachePath, text);
    sourceStats.fetched += 1;
    return text;
  } catch (error) {
    try {
      const text = await readSourceFile(cachePath, url);
      sourceStats.fallbackRead += 1;
      console.warn(`Using cached source after fetch failed for ${url}: ${error.message}`);
      return text;
    } catch {
      throw error;
    }
  }
}

async function fetchRemoteText(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      "Accept": options.accept ?? "text/html,application/xhtml+xml",
      "Accept-Language": options.language ?? "en-US,en;q=0.9",
      "User-Agent": "SoulAsceticBalanceTool/1.0"
    }
  });

  const text = await response.text();
  if (!response.ok) {
    if (options.cacheNotFound && response.status === 404) return text;
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return text;
}

async function readSourceFile(cachePath, url) {
  const text = await tryReadSourceFile(cachePath);
  if (text !== null) return text;

  throw new Error(
    `Missing local source for ${url} at ${path.relative(rootDir, cachePath)}. Run npm run data:sources to download source files.`
  );
}

async function tryReadSourceFile(cachePath) {
  try {
    const text = await fs.readFile(cachePath, "utf8");
    sourceStats.read += 1;
    return text;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return null;
  }
}

async function writeSourceFile(cachePath, text) {
  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  await fs.writeFile(cachePath, text, "utf8");
}

function sourceFilePath(...segments) {
  return path.join(sourceDir, ...segments.map(safeSourceSegment));
}

function sourceFileNameFromUrl(url) {
  const parsed = new URL(url);
  const parts = [parsed.hostname, ...parsed.pathname.split("/").filter(Boolean)];
  return parts.map(safeSourceSegment).join("-");
}

function safeSourceSegment(value) {
  return String(value ?? "")
    .trim()
    .replace(/[<>:"/\\|?*]+/g, "-")
    .split("")
    .map((character) => character.charCodeAt(0) < 32 ? "-" : character)
    .join("")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "source";
}

async function loadEnv() {
  if (envCache) return envCache;

  const env = {};
  for (const fileName of [".env", ".env.local"]) {
    try {
      const text = await fs.readFile(path.join(rootDir, fileName), "utf8");
      for (const line of text.split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
        if (!match) continue;
        env[match[1]] = match[2].replace(/^["']|["']$/g, "");
      }
    } catch {
      // Optional environment file.
    }
  }

  envCache = env;
  return env;
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
      await sleep(80);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}

function classNameFromHeading(heading) {
  return heading?.replace(/^\s*\d+\.\s+/, "").trim() || "";
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function camelCase(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, letter) => letter.toUpperCase());
}

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeFieldKey(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function normalizeName(value) {
  return normalizeWhitespace(value).toLowerCase();
}

function normalizeWhitespace(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function normalizeSkillValue(value) {
  return normalizeWhitespace(value)
    .replace(/\s*x\s*/gi, " x ")
    .replace(/\s*cell(s)?/gi, " cells")
    .replace(/\s+%/g, "%");
}

function decodeHtml(value) {
  return String(value ?? "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
