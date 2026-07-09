import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const generatedDir = path.join(rootDir, "src", "generated");

const classId = 4303;
const classSlug = "soul-ascetic";
const basePointLimit = 49;
const defaultApiUrl = "https://www.divine-pride.net";
const skillTreeUrl = `${defaultApiUrl}/tools/skilltree/${classId}`;
const apiDocsUrl = `${defaultApiUrl}/api`;

const treeColumns = 9;
const classDisplayOrder = [
  "dragon-knight",
  "imperial-guard",
  "meister",
  "biolo",
  "shadow-cross",
  "abyss-chaser",
  "arch-mage",
  "elemental-master",
  "cardinal",
  "inquisitor",
  "wind-hawk",
  "troubadour",
  "trouvere",
  "night-watch",
  "shinkiro",
  "shiranui",
  "sky-emperor",
  "soul-ascetic",
  "spirit-handler",
  "hyper-novice"
];

const irowikiDetails = {
  5418: {
    url: "https://irowiki.org/wiki/Talisman_of_Protection",
    rows: {
      "SP Cost": "45 + (Skill Level x 5)",
      "Fixed Cast Time": "1 second",
      "Variable Cast Time": "1.5 seconds",
      "Cast Delay": "0.5 seconds",
      "Duration": "150 + (30 x Skill Level) seconds",
      "Target": "Self or Party Member",
      "Ammunition": "1 Soul Talisman",
      "AP Generated": "2"
    }
  },
  5419: {
    url: "https://irowiki.org/wiki/Talisman_of_Warrior",
    rows: {
      "SP Cost": "45 + (Skill Level x 5)",
      "Fixed Cast Time": "1 second",
      "Variable Cast Time": "1.5 seconds",
      "Cast Delay": "0.5 seconds",
      "Duration": "150 + (30 x Skill Level) seconds",
      "Target": "Self or Party Member",
      "Ammunition": "1 Soul Talisman",
      "AP Generated": "2"
    }
  },
  5420: {
    url: "https://irowiki.org/wiki/Talisman_of_Magician",
    rows: {
      "SP Cost": "45 + (Skill Level x 5)",
      "Fixed Cast Time": "1 second",
      "Variable Cast Time": "1.5 seconds",
      "Cast Delay": "0.5 seconds",
      "Duration": "150 + (30 x Skill Level) seconds",
      "Target": "Self or Party Member",
      "Ammunition": "1 Soul Talisman",
      "AP Generated": "2"
    }
  },
  5421: {
    url: "https://irowiki.org/wiki/Soul_Gathering",
    rows: {
      "SP Cost": "75 + (Skill Level x 5)",
      "Fixed Cast Time": "1 second",
      "Variable Cast Time": "1.5 seconds",
      "Cooldown": "5~1 seconds"
    }
  },
  5422: {
    url: "https://irowiki.org/wiki/Totem_of_Tutelary",
    rows: {
      "SP Cost": "60 + (Skill Level x 16)",
      "Fixed Cast Time": "1 second",
      "Variable Cast Time": "3.5 seconds",
      "Cooldown": "15 seconds",
      "Target": "Ground",
      "Area of Effect": "5x5~9x9",
      "Ammunition": "10 Soul Talismans"
    }
  },
  5423: {
    url: "https://irowiki.org/wiki/Talisman_of_Five_Elements",
    rows: {
      "SP Cost": "45 + (Skill Level x 5)",
      "Fixed Cast Time": "1 second",
      "Variable Cast Time": "1.5 seconds",
      "Cast Delay": "0.5 seconds",
      "Duration": "150 + (30 x Skill Level) seconds",
      "Target": "Self or Party Member",
      "Ammunition": "5 Soul Talismans",
      "AP Generated": "2"
    }
  },
  5424: {
    url: "https://irowiki.org/wiki/Talisman_of_Soul_Stealing",
    rows: {
      "SP Cost": "30",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "2.2 seconds",
      "Target": "Enemy",
      "Ammunition": "1 Soul Talisman"
    }
  },
  5425: {
    url: "https://irowiki.org/wiki/Exorcism_of_Malicious_Soul",
    rows: {
      "SP Cost": "45 + (Skill Level x 15)",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "2.2 seconds",
      "Cooldown": "1 second",
      "Area of Effect": "11x11~13x13"
    }
  },
  5426: {
    url: "https://irowiki.org/wiki/Talisman_of_Blue_Dragon",
    rows: {
      "SP Cost": "37 + (Skill Level x 5)",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "1 second",
      "Cooldown": "0.3 seconds",
      "Target": "Enemy",
      "Ammunition": "1 Soul Talisman",
      "AP Generated": "2"
    }
  },
  5427: {
    url: "https://irowiki.org/wiki/Talisman_of_White_Tiger",
    rows: {
      "SP Cost": "63 + (Skill Level x 3)",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "1 second",
      "Cooldown": "0.4 seconds",
      "Area of Effect": "11x11~15x15",
      "Ammunition": "1 Soul Talisman",
      "AP Generated": "1"
    }
  },
  5428: {
    url: "https://irowiki.org/wiki/Talisman_of_Red_Phoenix",
    rows: {
      "SP Cost": "55 + (Skill Level x 10)",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "1 second",
      "Cooldown": "0.45 seconds",
      "Target": "Enemy",
      "Area of Effect": "3x3~7x7",
      "Ammunition": "1 Soul Talisman",
      "AP Generated": "1"
    }
  },
  5429: {
    url: "https://irowiki.org/wiki/Talisman_of_Black_Tortoise",
    rows: {
      "SP Cost": "55 + (Skill Level x 12)",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "1 second",
      "Cooldown": "0.7 seconds",
      "Target": "Ground",
      "Area of Effect": "7x7~11x11",
      "Ammunition": "1 Soul Talisman",
      "AP Generated": "1"
    }
  },
  5430: {
    url: "https://irowiki.org/wiki/Talisman_of_Four_Bearing_God",
    rows: {
      "SP Cost": "54 + (Skill Level x 16)",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "1.5 seconds",
      "Cooldown": "1 second",
      "Target": "Enemy",
      "Area of Effect": "7x7~11x11",
      "Ammunition": "3 Soul Talismans",
      "AP Generated": "1"
    }
  },
  5431: {
    url: "https://irowiki.org/wiki/Circle_of_Directions_and_Elementals",
    rows: {
      "SP Cost": "75 + (Skill Level x 15)",
      "AP Consumed": "150",
      "Fixed Cast Time": "1.5 seconds",
      "Variable Cast Time": "1.5 seconds",
      "Cast Delay": "0.5 seconds",
      "Cooldown": "5 seconds",
      "Duration": "(Skill Level x 30) seconds",
      "Target": "Enemy",
      "Area of Effect": "7x7~11x11"
    }
  },
  5432: {
    url: "https://irowiki.org/wiki/Soul_of_Heaven_and_Earth",
    rows: {
      "SP Cost": "80 + (Skill Level x 10)",
      "AP Consumed": "180",
      "Fixed Cast Time": "4 seconds",
      "Cast Delay": "1 second",
      "Cooldown": "300 seconds",
      "Duration": "300 seconds",
      "Target": "Self"
    }
  }
};

// Captured from Divine Pride skill tree 4303 page source. The public API enriches
// skill details, while the page data provides the visible tree layout and edges.
const treeSkills = [
  { id: 2601, name: "Evil Soul Curse", idx: 9, maxLevel: 5, requirements: [{ id: 2607, level: 3 }] },
  { id: 2611, name: "Soul Energy Research", idx: 10, maxLevel: 5, requirements: [{ id: 2609, level: 1 }] },
  { id: 5417, name: "Soul Mastery", idx: 2, maxLevel: 10, requirements: [] },
  { id: 5416, name: "Talisman Mastery", idx: 4, maxLevel: 10, requirements: [] },
  { id: 5421, name: "Soul Gathering", idx: 8, maxLevel: 5, requirements: [{ id: 2611, level: 5 }, { id: 5417, level: 3 }] },
  { id: 5418, name: "Talisman of Protection", idx: 11, maxLevel: 5, requirements: [{ id: 5416, level: 1 }] },
  { id: 5419, name: "Talisman of Warrior", idx: 12, maxLevel: 5, requirements: [{ id: 5416, level: 1 }] },
  { id: 5420, name: "Talisman of Magician", idx: 13, maxLevel: 5, requirements: [{ id: 5416, level: 1 }] },
  { id: 5425, name: "Exorcism of Malicious Soul", idx: 14, maxLevel: 5, requirements: [{ id: 2601, level: 5 }, { id: 5421, level: 1 }] },
  { id: 5424, name: "Talisman of Soul Stealing", idx: 16, maxLevel: 5, requirements: [{ id: 5416, level: 1 }, { id: 5417, level: 1 }] },
  { id: 5422, name: "Totem of Tutelary", idx: 17, maxLevel: 5, requirements: [{ id: 5416, level: 3 }, { id: 5417, level: 3 }] },
  { id: 5423, name: "Talisman of Five Elements", idx: 19, maxLevel: 5, requirements: [{ id: 5416, level: 1 }] },
  { id: 5426, name: "Talisman of Blue Dragon", idx: 22, maxLevel: 5, requirements: [{ id: 5424, level: 1 }] },
  { id: 5427, name: "Talisman of White Tiger", idx: 23, maxLevel: 5, requirements: [{ id: 5426, level: 1 }] },
  { id: 5428, name: "Talisman of Red Phoenix", idx: 24, maxLevel: 5, requirements: [{ id: 5427, level: 1 }] },
  { id: 5429, name: "Talisman of Black Tortoise", idx: 25, maxLevel: 5, requirements: [{ id: 5428, level: 1 }] },
  { id: 5430, name: "Talisman of Four Bearing God", idx: 31, maxLevel: 5, requirements: [{ id: 5426, level: 1 }, { id: 5427, level: 1 }, { id: 5428, level: 1 }, { id: 5429, level: 1 }] },
  { id: 5431, name: "Circle of Directions and Elementals", idx: 38, maxLevel: 5, requirements: [{ id: 5417, level: 3 }, { id: 5423, level: 1 }, { id: 5430, level: 1 }] },
  { id: 5432, name: "Soul of Heaven and Earth", idx: 40, maxLevel: 10, requirements: [{ id: 5418, level: 5 }, { id: 5419, level: 5 }, { id: 5420, level: 5 }, { id: 5423, level: 5 }] }
];

async function main() {
  const [currentMarkdown, env] = await Promise.all([
    fs.readFile(path.join(rootDir, "current_skills.md"), "utf8"),
    loadEnv()
  ]);

  const current = parseCurrentSkills(currentMarkdown);
  const rebalanceManifest = await parseRebalanceManifest();
  const rebalanceVersions = await parseRebalanceVersions(classSlug, rebalanceManifest);
  const pointLimitTimeline = buildPointLimitTimeline(rebalanceManifest);
  const pointLimit = pointLimitTimeline.at(-1)?.pointLimit ?? basePointLimit;
  const treeById = new Map(treeSkills.map((skill) => [skill.id, skill]));
  const nameById = new Map(treeSkills.map((skill) => [skill.id, skill.name]));
  const rebalanceByName = groupRebalancesBySkill(rebalanceVersions);

  const apiBaseUrl = normalizeApiBaseUrl(env.DIVINE_PRIDE_API_URL || defaultApiUrl);
  const apiKey = env.DIVINE_PRIDE_API_KEY || process.env.DIVINE_PRIDE_API_KEY || "";

  const skills = [];
  for (const skill of current.skills) {
    const tree = treeById.get(skill.id);
    const requirements = tree?.requirements ?? [];
    const api = await fetchApiSkill({ skill, apiBaseUrl, apiKey });
    const balanceNotes = rebalanceByName.get(normalizeName(skill.name)) ?? [];

    skills.push({
      ...skill,
      iconUrl: `assets/divine-pride/skills/${skill.id}.png`,
      sourceUrl: `${defaultApiUrl}/database/skill/${skill.id}`,
      tree: {
        idx: tree?.idx ?? null,
        row: tree ? Math.floor(tree.idx / treeColumns) : null,
        col: tree ? tree.idx % treeColumns : null,
        columns: treeColumns,
        requirements: requirements.map((requirement) => ({
          ...requirement,
          name: nameById.get(requirement.id) ?? `Skill ${requirement.id}`,
          visible: current.skills.some((candidate) => candidate.id === requirement.id)
        }))
      },
      details: buildSkillDetails(skill),
      irowikiUrl: irowikiDetails[skill.id]?.url ?? "",
      balanceNotes,
      api
    });
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    classId,
    classSlug,
    className: current.className || "Soul Ascetic",
    hasSkillTree: true,
    pointLimit,
    pointLimitTimeline,
    summary: {
      changedSkills: skills.filter((skill) => skill.balanceNotes.length).length,
      noteCount: skills.reduce((sum, skill) => sum + skill.balanceNotes.reduce((noteSum, entry) => noteSum + entry.notes.length, 0), 0),
      addedSkills: 0
    },
    tree: {
      columns: treeColumns,
      rows: Math.ceil((Math.max(...skills.map((skill) => skill.tree.idx ?? 0)) + 1) / treeColumns),
      skillTreeUrl,
      jobIconUrl: `assets/divine-pride/jobs/${classId}.png`
    },
    sources: {
      currentSkills: "current_skills.md",
      rebalances: rebalanceVersions.map((version) => version.file),
      rebalanceManifest: "rebalances/manifest.json",
      divinePrideApiDocs: apiDocsUrl,
      divinePrideSkillTree: skillTreeUrl,
      irowiki: "https://irowiki.org/wiki/"
    },
    api: {
      baseUrl: apiBaseUrl,
      status: apiKey ? "configured" : "missing-key",
      endpoint: "/api/database/Skill/:id",
      auth: "apiKey query parameter",
      note: "API keys and signed request URLs are not written into this file."
    },
    rebalanceVersions,
    skills
  };

  const classRebalanceDataSets = await buildClassRebalanceDataSets({
    manifest: rebalanceManifest,
    pointLimitTimeline
  });

  await fs.mkdir(generatedDir, { recursive: true });
  await fs.writeFile(
    path.join(generatedDir, "soulAsceticData.js"),
    `export const soulAsceticData = ${JSON.stringify(payload, null, 2)};\n\nexport default soulAsceticData;\n`,
    "utf8"
  );
  await fs.writeFile(
    path.join(generatedDir, "classRebalanceData.js"),
    `export const classRebalanceDataSets = ${JSON.stringify(classRebalanceDataSets, null, 2)};\n\nexport default classRebalanceDataSets;\n`,
    "utf8"
  );

  const fetched = skills.filter((skill) => skill.api.status === "ok").length;
  const entries = skills.reduce((sum, skill) => sum + (skill.api.entries?.length ?? 0), 0);
  console.log(`Built src/generated/soulAsceticData.js with ${skills.length} skills.`);
  console.log(`Built src/generated/classRebalanceData.js with ${classRebalanceDataSets.length} classes.`);
  console.log(`Divine Pride API status: ${apiKey ? `${fetched} responses, ${entries} globalization entries` : "missing DIVINE_PRIDE_API_KEY"}.`);
}

async function loadEnv() {
  const env = {};
  for (const file of [".env.example", ".env"]) {
    try {
      const text = await fs.readFile(path.join(rootDir, file), "utf8");
      for (const line of text.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const splitAt = trimmed.indexOf("=");
        if (splitAt < 0) continue;
        const key = trimmed.slice(0, splitAt).trim();
        const value = unquote(trimmed.slice(splitAt + 1).trim());
        if (value || !(key in env)) env[key] = value;
      }
    } catch {
      // Optional file.
    }
  }
  return env;
}

function unquote(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function parseCurrentSkills(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const titleLine = lines.find((line) => line.trim().startsWith("-") && line.includes("Soul Ascetic"));
  const className = titleLine?.replace(/^-+|-+$/g, "").trim();
  const skills = [];

  for (let index = 0; index < lines.length;) {
    const idMatch = lines[index].trim().match(/^(\d+)\.png$/);
    if (!idMatch) {
      index += 1;
      continue;
    }

    const id = Number(idMatch[1]);
    index += 1;

    while (index < lines.length && !lines[index].trim()) index += 1;
    const name = lines[index]?.trim() ?? `Skill ${id}`;
    index += 1;

    const block = [];
    while (index < lines.length && !lines[index].trim().match(/^\d+\.png$/)) {
      block.push(lines[index]);
      index += 1;
    }

    skills.push(parseSkillBlock({ id, name, block }));
  }

  return { className, skills };
}

function parseSkillBlock({ id, name, block }) {
  const fields = new Map();
  const descriptionLines = [];
  const levelDetails = [];
  let inDescription = false;
  let inLevels = false;
  let currentLevel = null;

  for (const rawLine of block) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line === "\\_" || line === "_") {
      inDescription = false;
      inLevels = true;
      currentLevel = null;
      continue;
    }

    const levelMatch = line.match(/^\[Level\s+(\d+)\]\s*:\s*(.*)$/i);
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

    if (inDescription) {
      descriptionLines.push(normalizeWhitespace(line));
      continue;
    }

    const fieldMatch = line.match(/^([^:]+)\s*:\s*(.*)$/);
    if (fieldMatch) {
      const key = normalizeFieldKey(fieldMatch[1]);
      const value = normalizeWhitespace(fieldMatch[2]);
      fields.set(key, value);
      if (key === "description") {
        inDescription = true;
        if (value) descriptionLines.push(value);
      }
      continue;
    }

    if (descriptionLines.length) descriptionLines.push(normalizeWhitespace(line));
  }

  return {
    id,
    imageFile: `${id}.png`,
    name,
    maxLevel: Number(fields.get("maxlevel")) || levelDetails.length || null,
    prerequisiteText: fields.get("prerequisiteskills") || "basic skill",
    group: fields.get("group") || "",
    type: fields.get("type") || "",
    target: fields.get("target") || "",
    recoversAp: fields.get("recoversap") || "",
    consumesAp: fields.get("consumesap") || "",
    description: descriptionLines.join("\n"),
    levelDetails
  };
}

function buildSkillDetails(skill) {
  const rows = [];
  const wiki = irowikiDetails[skill.id]?.rows ?? {};
  const levelTable = buildLevelTable(skill);
  const levelLabels = new Set(levelTable?.columns.map((column) => column.label) ?? []);

  addDetail(rows, "Type", skill.group ? `${skill.group} Skill` : skill.type);
  addDetail(rows, "Levels", skill.maxLevel);
  addDetail(rows, "SP Cost", wiki["SP Cost"]);
  addDetail(rows, "Fixed Cast Time", wiki["Fixed Cast Time"]);
  addDetail(rows, "Variable Cast Time", wiki["Variable Cast Time"]);
  addDetail(rows, "Cast Delay", wiki["Cast Delay"]);
  addDetail(rows, "Cooldown", levelLabels.has("Cooldown") ? "" : levelMetric(skill, /skill cooldown\s*:\s*([^/]+?)(?:\.(?:\s|$)|$|\/)/i) || wiki["Cooldown"]);
  addDetail(rows, "Cast Range", wiki["Cast Range"]);
  addDetail(rows, "Target", skill.target || wiki["Target"]);
  addDetail(rows, "Area of Effect", levelLabels.has("Area of Effect") ? "" : levelMetric(skill, /area of effect\s*:\s*([0-9]+\s*x\s*[0-9]+\s*cells?)/i) || wiki["Area of Effect"]);
  addDetail(rows, "Duration", levelLabels.has("Duration") ? "" : levelMetric(skill, /duration\s*:\s*([0-9]+\s*seconds?)/i) || wiki["Duration"]);
  addDetail(rows, "Ammunition", consumedTalisman(skill.description) || wiki["Ammunition"]);
  addDetail(rows, "AP Generated", skill.recoversAp || wiki["AP Generated"]);
  addDetail(rows, "AP Consumed", skill.consumesAp || wiki["AP Consumed"]);
  addDetail(rows, "Pulse", descriptionValue(skill.description, /every\s+([0-9.]+\s*seconds?)/i));
  addDetail(rows, "Property", descriptionValue(skill.description, /inflicts\s+([a-z ]+property\s+(?:magical|physical)\s+damage)/i));
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
  if (!skill.levelDetails.length) return null;

  const table = {
    title: "Level Scaling",
    columns: [],
    rows: [],
    formulaRows: []
  };
  const formulaRows = new Map();

  for (const detail of skill.levelDetails) {
    const row = { level: detail.level, values: {} };
    for (const line of detail.text.split("\n")) {
      parseLevelLine(line, row, table, formulaRows);
    }
    if (Object.keys(row.values).length) table.rows.push(row);
  }

  if (!table.rows.length) return null;

  table.columns = orderLevelColumns(
    table.columns.filter((column) => table.rows.some((row) => row.values[column.id]))
  );
  table.formulaRows = [...formulaRows.values()];

  return table;
}

function parseLevelLine(rawLine, row, table, formulaRows) {
  let line = normalizeWhitespace(rawLine).replace(/\.$/, "");
  if (!line) return;

  line = pullMetric(line, row, table, "Area of Effect", /(?:^|\s*\/\s*)area of effect\s*:\s*([^/]+?)(?=\s*\/|$)/i, formatArea);
  line = pullMetric(line, row, table, "Duration", /(?:^|\s*\/\s*)duration\s*:\s*([^/]+?seconds?)(?=\s*\/|$)/i);
  line = pullMetric(line, row, table, "Cooldown", /(?:^|\s*\/\s*)skill cooldown\s*:\s*([^/]+?seconds?)(?=\s*\/|$)/i);

  const apMatch = line.match(/(?:^|\s*\/\s*)AP\s*\+\s*([0-9]+)/i);
  if (apMatch) setLevelValue(row, table, "AP", apMatch[1]);

  const smatkDurationMatch = line.match(/S\.Matk\s*\+\s*([0-9]+)\s+for\s+([0-9]+\s*seconds?)/i);
  if (smatkDurationMatch) {
    setLevelValue(row, table, "S.Matk", smatkDurationMatch[1]);
    setLevelValue(row, table, "Duration", smatkDurationMatch[2]);
  } else {
    pullStatValue(line, row, table, "P.Atk", /P\.Atk\s*\+\s*([0-9]+)/i);
    pullStatValue(line, row, table, "S.Matk", /S\.Matk\s*\+\s*([0-9]+)/i);
    pullStatValue(line, row, table, "SPL", /SPL\s*\+\s*([0-9]+)/i);
  }

  pullStatValue(line, row, table, "Damage Bonus", /damage bonus\s*\+\s*([0-9]+%)/i);

  const fieldMatch = line.match(/^(.+?)\s*:\s*(.+)$/);
  if (fieldMatch) {
    parseLevelField(fieldMatch[1], fieldMatch[2], row, table, formulaRows);
    return;
  }

  parseFormulaValue("Damage", line, row, table, formulaRows);
}

function pullMetric(line, row, table, label, regex, formatter = normalizeSkillValue) {
  return line.replace(regex, (_, value) => {
    setLevelValue(row, table, label, formatter(value));
    return "";
  }).trim();
}

function pullStatValue(line, row, table, label, regex) {
  const match = line.match(regex);
  if (match) setLevelValue(row, table, label, match[1]);
}

function parseLevelField(rawLabel, rawValue, row, table, formulaRows) {
  const label = normalizeLevelLabel(rawLabel);
  const value = normalizeWhitespace(rawValue).replace(/\.$/, "");

  if (parseFormulaValue(label, value, row, table, formulaRows)) return;

  setLevelValue(row, table, label, normalizeSkillValue(value));
}

function parseFormulaValue(label, value, row, table, formulaRows) {
  const formulaMatch = value.match(/\({1,2}\s*([0-9,]+)\s*\+\s*\({1,2}\s*([^)]+?level(?:\s*\+\s*[^)]+?level)?)\)*\s*x\s*([0-9]+)\)?/i);
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

function normalizeLevelLabel(label) {
  const normalized = normalizeWhitespace(label).toLowerCase();
  if (normalized.includes("blessing of the four directions")) return "Under Blessing of Four Directions";
  if (normalized === "cursed target") return "Cursed Target";
  if (normalized === "healing amount") return "Healing Base";
  if (normalized === "hp recovery amount") return "HP Recovery Base";
  if (normalized === "sp recovery amount") return "SP Recovery Base";
  if (normalized === "skill cooldown") return "Cooldown";
  if (normalized === "area of effect") return "Area of Effect";
  return label
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function formulaBaseLabel(label, value) {
  if (label === "Under Blessing of Four Directions") return "Under Blessing of Four Directions";
  if (label === "Cursed Target") return "Cursed Target Factor";
  if (label === "Healing Base" || label === "HP Recovery Base" || label === "SP Recovery Base") return label;
  if (/per hit/i.test(value)) return "Base Damage (MATK per Hit)";
  return "Base Damage (MATK)";
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
  if (/Healing|Recovery/.test(label)) return `${label.replace(" Base", "")} Formula`;
  return "Damage Formula";
}

function formulaTemplate(value, baseLabel, multiplierLabel, formulaSource) {
  const source = normalizeWhitespace(formulaSource);
  const sourceTerm = source.includes("+") ? `(${source})` : source;
  const inner = `${baseLabel} + (${sourceTerm} x ${multiplierLabel})`;
  if (/Soul Energy/i.test(value)) return `((${inner}) x Soul Energy)% MATK`;
  if (/Matk/i.test(value)) return `(${inner})% MATK${/per hit/i.test(value) ? " per hit" : ""}`;
  return inner;
}

function setLevelValue(row, table, label, value) {
  const normalized = normalizeWhitespace(value);
  if (!normalized) return;

  const id = levelColumnId(label);
  if (!table.columns.some((column) => column.id === id)) table.columns.push({ id, label });
  row.values[id] = normalized;
}

function levelColumnId(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function orderLevelColumns(columns) {
  const order = [
    "Base Damage (MATK)",
    "Under Blessing of Four Directions",
    "Base Damage (MATK per Hit)",
    "Cursed Target Factor",
    "Healing Base",
    "HP Recovery Base",
    "SP Recovery Base",
    "P.Atk",
    "S.Matk",
    "SPL",
    "Damage Bonus",
    "AP",
    "Bonus Damage (Talisman Lv) Multiplier",
    "Bonus Damage (Soul Lv) Multiplier",
    "Bonus Damage (Talisman + Soul Lv) Multiplier",
    "Talisman Lv Multiplier",
    "Soul Lv Multiplier",
    "Mastery Lv Multiplier",
    "Skill Level Factor",
    "Area of Effect",
    "Duration",
    "Cooldown"
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

function levelMetric(skill, regex) {
  const values = [];
  for (const detail of skill.levelDetails) {
    const match = detail.text.match(regex);
    if (match) values.push({ level: detail.level, value: normalizeSkillValue(match[1]) });
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

function normalizeSkillValue(value) {
  return normalizeWhitespace(value)
    .replace(/\s*x\s*/gi, " x ")
    .replace(/\s*cell(s)?/gi, " cells")
    .replace(/\s+%/g, "%");
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
  const classFiles = await readRebalanceFiles(classDir);
  const legacyFiles = classFiles.length ? [] : await readRebalanceFiles(rootDir);
  const files = classFiles.length ? classFiles : legacyFiles;
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

async function buildClassRebalanceDataSets({ manifest, pointLimitTimeline }) {
  const dirents = await fs.readdir(path.join(rootDir, "rebalances"), { withFileTypes: true });
  const classSlugs = dirents
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(compareClassSlugs);
  const generatedAt = new Date().toISOString();

  const dataSets = [];
  for (const slug of classSlugs) {
    const versions = await parseRebalanceVersions(slug, manifest);
    if (!versions.length) continue;

    const addedSkills = await parseAddedSkills(slug, manifest);
    const className = versions.find((version) => version.className)?.className ?? addedSkills.className ?? titleFromSlug(slug);
    const skills = buildRebalanceOnlySkills({ slug, versions, addedSkillEntries: addedSkills.entries });
    const noteCount = skills.reduce(
      (sum, skill) => sum + skill.balanceNotes.reduce((noteSum, entry) => noteSum + entry.notes.length, 0),
      0
    );
    const addedSkillCount = addedSkills.entries.reduce((sum, entry) => sum + entry.skills.length, 0);

    dataSets.push({
      id: slug,
      label: className,
      mode: slug === classSlug ? "tree" : "rebalances",
      data: {
        generatedAt,
        classId: null,
        classSlug: slug,
        className,
        hasSkillTree: false,
        pointLimit: pointLimitTimeline.at(-1)?.pointLimit ?? basePointLimit,
        pointLimitTimeline,
        tree: {
          columns: 0,
          rows: 0,
          skillTreeUrl: "",
          jobIconUrl: ""
        },
        sources: {
          rebalances: versions.map((version) => version.file),
          rebalanceManifest: "rebalances/manifest.json"
        },
        summary: {
          changedSkills: skills.length,
          noteCount,
          addedSkills: addedSkillCount,
          versions: versions.length
        },
        rebalanceVersions: versions,
        addedSkills: addedSkills.entries,
        skills
      }
    });
  }

  return dataSets;
}

function buildRebalanceOnlySkills({ slug, versions, addedSkillEntries }) {
  const groups = groupRebalancesBySkill(versions);
  const addedFile = `rebalances/${slug}/added_skills.md`;

  for (const entry of addedSkillEntries) {
    for (const skillName of entry.skills) {
      const key = normalizeName(skillName);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({
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

  return [...groups.entries()].map(([key, balanceNotes], index) => ({
    id: `${slug}:${index + 1}`,
    name: balanceNotes[0]?.skillName ?? titleFromNameKey(key),
    maxLevel: null,
    balanceNotes
  }));
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
      if (skillMatch && current) {
        current.skills.push(normalizeWhitespace(skillMatch[1]));
      }
    }
  } catch {
    // Added skill tracking is optional for classes without new skills.
  }

  return {
    className,
    entries: entries.filter((entry) => entry.skills.length)
  };
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

function classNameFromHeading(heading) {
  return heading?.replace(/^\s*\d+\.\s+/, "").trim() || "";
}

function compareClassSlugs(a, b) {
  const aIndex = classDisplayOrder.indexOf(a);
  const bIndex = classDisplayOrder.indexOf(b);
  if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function titleFromNameKey(key) {
  return key
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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
        specRows: skill.notes.flatMap(parseSpecRows)
      });
    }
  }
  return groups;
}

function parseSpecRows(note) {
  const rows = [];
  const changeMatch = note.match(/^(Increases|Reduces|Decreases)\s+(.+?)\s+from\s+(.+?)\s+to\s+(.+?)(?:\s+based on level\s+(\d+))?\.?$/i);
  if (changeMatch) {
    rows.push({
      label: specLabel(changeMatch[2]),
      before: normalizeSkillValue(changeMatch[3]),
      after: normalizeSkillValue(changeMatch[4]),
      scope: changeMatch[5] ? `Lv ${changeMatch[5]}` : "",
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
  if (metric.includes("base damage") || metric === "damage") return "Damage";
  if (metric.includes("cooldown")) return "Cooldown";
  if (metric.includes("delay")) return "Cast Delay";
  if (metric.includes("cast range")) return "Cast Range";
  if (metric.includes("buff duration")) return "Buff Duration";
  return rawMetric
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

async function fetchApiSkill({ skill, apiBaseUrl, apiKey }) {
  if (!apiKey) {
    return {
      status: "missing-key",
      entries: [],
      selectedEntry: null
    };
  }

  const url = new URL(`/api/database/Skill/${skill.id}`, apiBaseUrl);
  url.searchParams.set("apiKey", apiKey);

  let lastResult = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    if (attempt > 1) await sleep(450 * attempt);
    lastResult = await requestApiSkill({ url, skill });
    if (!["http-403", "http-429", "network-error"].includes(lastResult.status)) break;
  }

  await sleep(180);
  return lastResult;
}

async function requestApiSkill({ url, skill }) {
  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "Accept-Language": "en-US",
        "User-Agent": "SoulAsceticBalanceTool/1.0"
      }
    });

    const text = await response.text();
    if (!response.ok) {
      return {
        status: `http-${response.status}`,
        statusCode: response.status,
        entries: [],
        selectedEntry: null
      };
    }

    let json = null;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      return {
        status: "invalid-json",
        statusCode: response.status,
        entries: [],
        selectedEntry: null
      };
    }

    const entries = Array.isArray(json?.globalization)
      ? json.globalization.map((entry) => ({
        name: normalizeWhitespace(stripColorCodes(entry.name ?? "")),
        description: stripColorCodes(entry.description ?? "").trim(),
        server: entry.server ?? null,
        language: entry.language ?? null
      }))
      : [];

    const selectedEntry =
      entries.find((entry) => normalizeName(entry.name) === normalizeName(skill.name)) ??
      entries.find((entry) => entry.name) ??
      null;

    return {
      status: "ok",
      statusCode: response.status,
      fetchedAt: new Date().toISOString(),
      entries,
      selectedEntry
    };
  } catch (error) {
    return {
      status: "network-error",
      message: error.message,
      entries: [],
      selectedEntry: null
    };
  }
}

function stripColorCodes(value) {
  return value.replace(/\^[0-9a-fA-F]{6}/g, "").replace(/\r/g, "");
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

function normalizeApiBaseUrl(value) {
  const trimmed = String(value || defaultApiUrl).trim().replace(/\/+$/, "");
  try {
    const url = new URL(trimmed);
    if (url.pathname.toLowerCase() === "/api") {
      return url.origin;
    }
    return url.toString().replace(/\/+$/, "");
  } catch {
    return defaultApiUrl;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
