import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "src", "data", "browiki-pt-br.json");
const base = "https://browiki.org";
export const standaloneSkillPaths = ["/wiki/Habilidades_B%C3%A1sicas"];
let nextRequestAt = 0;
let requestQueue = Promise.resolve();
// English tab labels from Divine Pride -> class titles on bROWiki's Classes page.
const classNames = {
  "Dragon Knight": "Cavaleiros Draconianos", "Rune Knight": "Cavaleiros Rúnicos", "Lord Knight": "Lordes", "Swordman": "Espadachins",
  "Imperial Guard": "Guardiões Imperiais", "Royal Guard": "Guardiões Reais", "Paladin": "Paladinos",
  "Meister": "Engenheiros", "Mechanic": "Mecânicos", "Whitesmith": "Mestres-Ferreiros", "Merchant": "Mercadores",
  "Biolo": "Cientistas", "Genetic": "Bioquímicos", "Creator": "Criadores",
  "Shadow Cross": "Executores", "Glt. Cross": "Sicários", "Assassin Cross": "Algozes", "Thief": "Gatunos",
  "Abyss Chaser": "Mandraques", "Shadow Chaser": "Renegados", "Stalker": "Desordeiros",
  "Arch Mage": "Magus", "Warlock": "Arcanos", "High Wizard": "Arquimagos", "Magician": "Magos",
  "Elemental Master": "Elementalistas", "Sorcerer": "Feiticeiros", "Professor": "Professores",
  "Cardinal": "Cardeais", "Arch Bishop": "Arcebispos", "High Priest": "Sumo Sacerdotes", "Acolyte": "Noviços",
  "Inquisitor": "Inquisidores", "Sura": "Shuras", "Champion": "Mestres",
  "Wind Hawk": "Falcões do Vento", "Ranger": "Sentinelas", "Sniper": "Atiradores de Elite", "Archer": "Arqueiros",
  "Troubadour": "Maestros", "Minstrel": "Menestréis", "Clown": "Bardos",
  "Trouvere": "Divas", "Wanderer": "Musas", "Gypsy": "Ciganas",
  "Night Watch": "Guerrilheiros", "Rebellion": "Insurgentes", "Gunslinger": "Justiceiros",
  "Shinkiro": "Shinkiro", "Kagerou": "Kagerou", "Ninja": "Ninjas",
  "Shiranui": "Shiranui", "Oboro": "Oboro",
  "Sky Emperor": "Mestres Celestiais", "Star Emperor": "Mestres Estelares", "Star Gladiator": "Mestres Taekwons", "TaeKwon Boy": "Taekwons",
  "Soul Ascetic": "Ascetas das Almas", "Soul Reaper": "Ceifadores de Almas", "Soul Linker": "Espiritualistas",
  "Spirit Handler": "Animistas", "Summoner": "Invocadores",
  "Hyper Novice": "Hiperaprendizes", "Super Novice 2": "Superaprendizes EX", "Super Novice": "Superaprendizes",
  "Alitea": "Alitea", "Karnos": "Karnos", "Druid": "Druidas"
};

const wikiPath = (name) => `/wiki/${encodeURIComponent(name.replaceAll(" ", "_"))}`;
const decode = (text) => String(text).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).trim();

export function parseClassSkillLinks(html) {
  const start = html.search(/id="Habilidades"/i);
  if (start < 0) return [];
  const tail = html.slice(start);
  const end = tail.search(/<h2\b/i);
  const section = end < 0 ? tail : tail.slice(0, end);
  return [...new Set([...section.matchAll(/<a\b[^>]*href="(\/wiki\/[^"#]+)"[^>]*>\s*<img\b/gi)].map((match) => match[1]))];
}

export function parseSkillIdentity(html, urlPath) {
  const name = decode(html.match(/<h1\b[^>]*>[\s\S]*?<span class="mw-page-title-main">([\s\S]*?)<\/span>/i)?.[1] ?? "");
  const id = Number(html.match(/<td>\s*<b>ID<\/b>\s*<\/td>\s*<td>\s*<small>[^<]*?\((\d+)\)/i)?.[1]);
  if (!name || !id || /No momento, não há conteúdo nesta página/i.test(html)) return null;
  return { id, name, url: new URL(urlPath, base).href };
}

export function parseSkillDescription(html) {
  const idRow = /<td>\s*<b>ID<\/b>\s*<\/td>\s*<td>\s*<small>[^<]*?\((\d+)\)/i.exec(html);
  if (!idRow) return "";
  const tableTags = /<\/?table\b[^>]*>/gi;
  let depth = 0;
  let enclosingDepth = null;
  let afterInfobox = -1;
  for (const tag of html.matchAll(tableTags)) {
    if (tag.index >= idRow.index && enclosingDepth === null) enclosingDepth = depth;
    if (/^<\/table/i.test(tag[0])) {
      depth--;
      if (enclosingDepth !== null && depth < enclosingDepth) {
        afterInfobox = tag.index + tag[0].length;
        break;
      }
    } else {
      depth++;
    }
  }
  if (afterInfobox < 0) return "";
  let rest = html.slice(afterInfobox);
  const notice = /^\s*<div\b[^>]*class="[^"]*\bdablink\b[^"]*"[^>]*>[\s\S]*?<\/div>/i.exec(rest);
  if (notice) rest = rest.slice(notice[0].length);
  const paragraphs = [];
  while (paragraphs.length < 10) {
    const paragraph = /^\s*<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(rest);
    if (!paragraph) break;
    const text = plainWikiText(paragraph[1]);
    if (text && !/No momento, não há conteúdo nesta página/i.test(text)) paragraphs.push(text);
    rest = rest.slice(paragraph[0].length);
  }
  if (paragraphs.at(-1)?.endsWith(":")) {
    const list = firstImmediateList(rest);
    if (list) {
      const lines = list.replace(/<li\b[^>]*>/gi, "\n• ")
        .split("\n").map(plainWikiText).filter(Boolean).slice(0, 20);
      paragraphs.push(...lines);
      rest = rest.slice(list.length);
      while (paragraphs.length < 30) {
        const paragraph = /^\s*<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(rest);
        if (!paragraph) break;
        const text = plainWikiText(paragraph[1]);
        if (text) paragraphs.push(text);
        rest = rest.slice(paragraph[0].length);
      }
    } else if (/^\s*<table\b/i.test(rest) && paragraphs.length > 1) {
      paragraphs.pop();
    }
  }
  return paragraphs.join("\n");
}

function plainWikiText(html) {
  return decode(String(html).replace(/<br\b[^>]*>/gi, "\n"))
    .replace(/&nbsp;|&#160;|&#xA0;/gi, " ")
    .replace(/&quot;/gi, '"')
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/[^\S\n]+/g, " ").replace(/ *\n */g, "\n").trim();
}

function firstImmediateList(html) {
  const start = /^\s*<ul\b[^>]*>/i.exec(html);
  if (!start) return "";
  let depth = 0;
  for (const tag of html.matchAll(/<\/?ul\b[^>]*>/gi)) {
    depth += /^<\/ul/i.test(tag[0]) ? -1 : 1;
    if (!depth) return html.slice(0, tag.index + tag[0].length);
  }
  return "";
}

export function selectSkillLinks(paths, skills, refresh = false) {
  if (refresh) return [...paths];
  const cached = new Map(Object.values(skills).map((entry) => [entry.url, entry]));
  return [...paths].filter((urlPath) => {
    const description = cached.get(new URL(urlPath, base).href)?.description;
    return !description || description.trim().endsWith(":");
  });
}

export function classEntryFromPage(name, urlPath, html, previousEntry = null) {
  return html?.includes('id="Habilidades"')
    ? { name, url: new URL(urlPath, base).href }
    : previousEntry;
}

async function fetchPage(urlPath) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      // bROWiki also throttles bursts; keep crawls polite and resumable.
      const response = await (requestQueue = requestQueue.catch(() => {}).then(async () => {
        const delay = nextRequestAt - Date.now();
        if (delay > 0) await new Promise((resolve) => setTimeout(resolve, delay));
        nextRequestAt = Date.now() + 500;
        return fetch(new URL(urlPath, base), { headers: { "User-Agent": "ROSkillsBrowikiUpdate/1.0" }, signal: AbortSignal.timeout(20000) });
      }));
      if (response.status === 404) return null;
      if (!response.ok) throw Error(`HTTP ${response.status}`);
      const html = await response.text();
      if (!html.includes("mw-parser-output")) throw Error("not a wiki page");
      return html;
    } catch (error) {
      if (attempt === 2) { console.warn(`Skipped ${urlPath}: ${error.message}`); return null; }
      await new Promise((resolve) => setTimeout(resolve, (attempt + 1) * 5000));
    }
  }
}

async function main() {
  const { classDataSets } = await import("../src/generated/classDataSets.js");
  const all = await Promise.all(classDataSets.map((entry) => entry.load()));
  const knownIds = new Set(all.flatMap((data) => data.skillTabs.flatMap((tab) => tab.skills.map((skill) => skill.id))));
  const labels = new Set(all.flatMap((data) => data.skillTabs.map((tab) => tab.label)));
  const descriptionsOnly = process.argv.includes("--descriptions-only");
  let previous = {};
  try { previous = JSON.parse(await fs.readFile(output, "utf8")); } catch { /* first run */ }
  if (descriptionsOnly && !Object.keys(previous.skills ?? {}).length) throw Error("Run browiki:update first to create the verified skill index.");
  const classes = descriptionsOnly ? { ...previous.classes } : {};
  const paths = new Set();
  if (!descriptionsOnly) {
    for (const label of labels) {
      const name = classNames[label];
      if (!name) { console.warn(`Unmapped class: ${label}`); continue; }
      const urlPath = wikiPath(name);
      const html = await fetchPage(urlPath);
      const hasSkillTable = Boolean(html?.includes('id="Habilidades"'));
      const entry = classEntryFromPage(name, urlPath, html, previous.classes?.[label]);
      if (!hasSkillTable) console.warn(`Missing class skills: ${label} ${urlPath}`);
      if (entry) classes[label] = entry;
      if (!hasSkillTable) continue;
      for (const skillPath of parseClassSkillLinks(html)) paths.add(skillPath);
    }
  }
  const skills = previous.skills ?? {};
  for (const urlPath of standaloneSkillPaths) paths.add(urlPath);
  for (const entry of Object.values(skills)) if (entry.url) paths.add(entry.url);
  console.log(`${Object.keys(classes).length}/${labels.size} class pages, ${paths.size} skill links; checking skill IDs.`);
  const links = selectSkillLinks(paths, skills, process.argv.includes("--refresh"));
  console.log(`${links.length} skill pages to check (${Object.keys(skills).length} previously verified IDs).`);
  let cursor = 0;
  let matches = 0;
  let processed = 0;
  let checkpoint = Promise.resolve();
  const cachedIdByUrl = new Map(Object.entries(skills).map(([id, entry]) => [entry.url, Number(id)]));
  function saveCheckpoint() {
    checkpoint = checkpoint.then(async () => {
      const temporary = `${output}.tmp`;
      await fs.writeFile(temporary, `${JSON.stringify({ classes, skills }, null, 2)}\n`);
      await fs.rename(temporary, output);
    });
    return checkpoint;
  }
  async function worker() {
    while (cursor < links.length) {
      const index = cursor++;
      const html = await fetchPage(links[index]);
      const identity = html && parseSkillIdentity(html, links[index]);
      const expectedId = cachedIdByUrl.get(new URL(links[index], base).href);
      if (identity && knownIds.has(identity.id) && (!expectedId || expectedId === identity.id)) {
        const description = parseSkillDescription(html);
        skills[identity.id] = {
          ...skills[identity.id], name: identity.name, url: identity.url,
          ...(description ? { description } : {}),
        };
        matches++;
      }
      processed++;
      if (processed % 25 === 0) await saveCheckpoint();
      if (index % 50 === 0) console.log(`${index + 1}/${links.length} links processed`);
    }
  }
  await Promise.all(Array.from({ length: 2 }, worker));
  await saveCheckpoint();
  console.log(`Saved ${Object.keys(classes).length} classes, ${Object.keys(skills).length} unique skill IDs (${Object.values(skills).filter((entry) => entry.description).length} descriptions, ${matches} page matches).`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((error) => { console.error(error); process.exitCode = 1; });
