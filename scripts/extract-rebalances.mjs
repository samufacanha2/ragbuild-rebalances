import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const rebalancesDir = path.join(rootDir, "rebalances");
const manifestPath = path.join(rebalancesDir, "manifest.json");

const overwrite = process.argv.includes("--overwrite");
const overwriteGenerated = process.argv.includes("--overwrite-generated");

const classNames = [
  "Dragon Knight",
  "Imperial Guard",
  "Meister",
  "Biolo",
  "Shadow Cross",
  "Abyss Chaser",
  "Arch Mage",
  "Elemental Master",
  "Inquisitor",
  "Cardinal",
  "Wind Hawk",
  "Troubadour",
  "Trouvere",
  "Night Watch",
  "Hyper Novice",
  "Spirit Handler",
  "Shinkiro",
  "Shiranui",
  "Sky Emperor",
  "Soul Ascetic",
  "Rune Knight",
  "Royal Guard",
  "Mechanic",
  "Genetic",
  "Guillotine Cross",
  "Shadow Chaser",
  "Warlock",
  "Sorcerer",
  "Sura",
  "Arch Bishop",
  "Ranger",
  "Minstrel",
  "Wanderer",
  "Star Emperor",
  "Soul Reaper",
  "Rebellion",
  "Kagerou",
  "Oboro",
  "Summoner",
  "Super Novice",
  "Lord Knight",
  "Paladin",
  "Whitesmith",
  "Creator",
  "Assassin Cross",
  "Stalker",
  "High Wizard",
  "Professor",
  "Champion",
  "High Priest",
  "Sniper",
  "Clown",
  "Gypsy"
];

const classAliases = [
  { heading: "Windhawk", classNames: ["Wind Hawk"] },
  { heading: "Troubadour & Trouvere", classNames: ["Troubadour", "Trouvere"] },
  { heading: "Shinkiro & Shiranui", classNames: ["Shinkiro", "Shiranui"] }
];

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const addedSkills = new Map();
  const written = [];
  const skipped = [];

  for (const source of manifest) {
    const html = await fetchText(source.sourceUrl);
    const text = source.number === 5 ? topicText(html) : commentText(html, source.sourceUrl);
    const sections = splitByClass(text);

    if (!sections.length) {
      const file = await writeSection(source, "unclassified", "Unclassified", text);
      if (file.written) written.push(file.path);
      else skipped.push(file.path);
      continue;
    }

    for (const section of sections) {
      const file = await writeSection(source, slugify(section.className), section.className, section.text);
      if (file.written) written.push(file.path);
      else skipped.push(file.path);

      const skills = extractAddedSkills(section.text);
      if (source.addsNewSkills && skills.length) {
        const key = slugify(section.className);
        if (!addedSkills.has(key)) addedSkills.set(key, { className: section.className, entries: [] });
        addedSkills.get(key).entries.push({
          rebalance: source.label,
          skills
        });
      }
    }
  }

  for (const [classSlug, record] of addedSkills) {
    const classDir = path.join(rebalancesDir, classSlug);
    await fs.mkdir(classDir, { recursive: true });
    const content = [
      `# Added Skills - ${record.className}`,
      "",
      ...record.entries.flatMap((entry) => [
        `## ${entry.rebalance}`,
        "",
        ...entry.skills.map((skill) => `- ${skill}`),
        ""
      ])
    ].join("\n");
    await fs.writeFile(path.join(classDir, "added_skills.md"), content, "utf8");
  }

  console.log(`Extracted rebalance sections: ${written.length} written, ${skipped.length} skipped.`);
  if (skipped.length) console.log("Existing curated files were kept. Use --overwrite or --overwrite-generated to replace matching files.");
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "Accept": "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "SoulAsceticBalanceTool/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
  }

  return response.text();
}

function commentText(html, sourceUrl) {
  const commentId = new URL(sourceUrl).searchParams.get("comment");
  const comments = jsonLdObjects(html)
    .flatMap((entry) => Array.isArray(entry.comment) ? entry.comment : [])
    .filter((entry) => entry?.["@type"] === "Comment");

  const comment = comments.find((entry) => {
    const values = [entry["@id"], entry.url].filter(Boolean).map(String);
    return values.some((value) => value.includes(`#comment-${commentId}`));
  });

  if (!comment?.text) {
    throw new Error(`Could not find Divine Pride forum comment ${commentId}.`);
  }

  return normalizeForumText(comment.text);
}

function topicText(html) {
  const discussion = jsonLdObjects(html).find((entry) => entry?.["@type"] === "DiscussionForumPosting");
  const texts = [];
  if (discussion?.text) texts.push(discussion.text);
  if (Array.isArray(discussion?.comment)) {
    for (const comment of discussion.comment) {
      if (comment?.text) texts.push(comment.text);
    }
  }

  if (!texts.length) {
    throw new Error("Could not find Divine Pride forum topic text.");
  }

  return normalizeForumText(texts.join("\n\n"));
}

function jsonLdObjects(html) {
  const blocks = [];
  const regex = /<script\b[^>]*type=(["'])application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi;
  let match = regex.exec(html);

  while (match) {
    try {
      const parsed = JSON.parse(match[2].trim());
      if (Array.isArray(parsed)) blocks.push(...parsed);
      else blocks.push(parsed);
    } catch {
      // Ignore unrelated or malformed structured data blocks.
    }
    match = regex.exec(html);
  }

  return blocks;
}

function splitByClass(text) {
  const lines = text.split("\n");
  const sections = [];
  let current = null;

  for (const line of lines) {
    const headingNames = headingClassNames(line);
    if (headingNames.length) {
      appendSection(sections, current);
      current = { classNames: headingNames, lines: [line] };
      continue;
    }

    if (current) current.lines.push(line);
  }

  appendSection(sections, current);

  return sections;
}

function appendSection(sections, section) {
  if (!section?.lines.some((entry) => entry.trim())) return;

  for (const className of section.classNames) {
    sections.push({
      className,
      text: section.lines.join("\n").trim()
    });
  }
}

function headingClassNames(line) {
  const normalized = normalizeWhitespace(line)
    .replace(/^-\s*/, "")
    .replace(/^\d+[.)]\s*/, "")
    .replace(/\s*-\s*$/, "")
    .replace(/\s*\([^)]*\)\s*$/, "")
    .trim();

  const alias = classAliases.find((entry) => normalized.toLowerCase() === entry.heading.toLowerCase());
  if (alias) return alias.classNames;

  const exact = classNames.find((className) => normalized.toLowerCase() === className.toLowerCase());
  return exact ? [exact] : [];
}

async function writeSection(source, classSlug, className, sectionText) {
  const classDir = path.join(rebalancesDir, classSlug);
  const filePath = path.join(classDir, `rebalance_${source.number}.md`);
  const relativePath = path.relative(rootDir, filePath).replace(/\\/g, "/");

  await fs.mkdir(classDir, { recursive: true });

  if (await shouldKeepExisting(filePath)) {
    return { path: relativePath, written: false };
  }

  const content = [
    "---",
    `rebalance: ${source.number}`,
    `label: ${JSON.stringify(source.label)}`,
    `class: ${JSON.stringify(className)}`,
    `source: ${JSON.stringify(source.sourceUrl)}`,
    `scope: ${JSON.stringify(source.scope)}`,
    `appliesTo: ${JSON.stringify(source.appliesTo)}`,
    `maxJobLevel: ${source.maxJobLevel}`,
    `pointLimit: ${source.pointLimit}`,
    `addsNewSkills: ${Boolean(source.addsNewSkills)}`,
    "---",
    "",
    sectionText.trim(),
    ""
  ].join("\n");

  await fs.writeFile(filePath, content, "utf8");
  return { path: relativePath, written: true };
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function shouldKeepExisting(filePath) {
  if (!await exists(filePath)) return false;
  if (overwrite) return false;
  if (!overwriteGenerated) return true;

  const text = await fs.readFile(filePath, "utf8");
  return !text.startsWith("---\nrebalance:");
}

function extractAddedSkills(sectionText) {
  const lines = sectionText.split("\n").map((line) => normalizeWhitespace(line)).filter(Boolean);
  const skills = [];

  for (let index = 0; index < lines.length; index += 1) {
    if (!/^max\s+level\s*:/i.test(lines[index])) continue;

    for (let cursor = index - 1; cursor >= 0; cursor -= 1) {
      const candidate = lines[cursor]
        .replace(/^\d+[.)]\s*/, "")
        .replace(/^-\s*/, "")
        .trim();

      if (!candidate || headingClassNames(candidate).length) continue;
      if (/^(image|description|prerequisite|type|effect|level)$/i.test(candidate)) continue;
      if (/^https?:\/\//i.test(candidate)) continue;
      if (candidate.length > 80) continue;

      if (!skills.includes(candidate)) skills.push(candidate);
      break;
    }
  }

  return skills;
}

function normalizeForumText(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/&amp;/g, "&")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeWhitespace(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function slugify(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
