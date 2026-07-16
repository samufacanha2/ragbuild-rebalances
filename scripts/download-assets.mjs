import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { knownJobIconAssets } from "../src/lib/jobIcons.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public", "assets", "divine-pride");
const staticUrl = "https://static.divine-pride.net";
const browikiFileRedirectUrl = "https://browiki.org/wiki/Especial:Redirecionar/file";
const brokenDivinePrideJobIconHash = "90FD5DFC46354798FA8FC4CBCEC9DEE97D8071B75ABC58951AB1887B11CD916E";

async function main() {
  const { classDataSets } = await import(pathToFileURL(path.join(rootDir, "src", "generated", "classDataSets.js")));
  const loadedDataSets = await Promise.all(
    classDataSets.map(async (dataSet) => ({
      ...dataSet,
      data: dataSet.data ?? await dataSet.load()
    }))
  );
  const jobIds = uniqueIds(loadedDataSets.map((dataSet) => dataSet.data.classId));
  const skillIds = uniqueIds(
    loadedDataSets.flatMap((dataSet) =>
      (dataSet.data.skillTabs ?? [{ skills: dataSet.data.skills }]).flatMap((tab) => tab.skills.map((skill) => skill.id))
    )
  );
  const downloads = [
    ...jobIds.map((id) => ({
      url: `${staticUrl}/images/skilltree/jobs/${id}.png`,
      filePath: path.join(publicDir, "jobs", `${id}.png`)
    })),
    ...knownJobIconAssets().map(({ browikiFileName, jobIconId }) => ({
      url: `${browikiFileRedirectUrl}/${encodeURIComponent(browikiFileName)}`,
      filePath: path.join(publicDir, "job-icons", `${jobIconId}.png`),
      refreshHashes: [brokenDivinePrideJobIconHash]
    })),
    ...skillIds.map((id) => ({
      url: `${staticUrl}/images/skill/${id}.png`,
      filePath: path.join(publicDir, "skills", `${id}.png`)
    }))
  ];

  let completed = 0;
  for (const asset of downloads) {
    await download(asset);
    completed += 1;
  }

  console.log(`Downloaded ${completed} assets into public/assets.`);
}

function uniqueIds(values) {
  return [
    ...new Set(
      values
        .map((value) => Number(value))
        .filter((value) => Number.isInteger(value) && value >= 0)
    )
  ];
}

async function download({ url, filePath, optional = false, refreshHashes = [] }) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  if (!(await shouldDownload(filePath, refreshHashes))) return;

  const response = await fetch(url, {
    headers: {
      "user-agent": "ro-skills-asset-cache/1.0"
    }
  });
  if (!response.ok) {
    if (optional) {
      console.warn(`Skipped optional asset ${response.status} for ${url}`);
      return;
    }
    throw new Error(`Failed ${response.status} for ${url}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (path.extname(filePath).toLowerCase() === ".png" && !isPng(bytes)) {
    throw new Error(`Expected PNG bytes for ${url}`);
  }
  await fs.writeFile(filePath, bytes);
}

async function shouldDownload(filePath, refreshHashes) {
  let bytes;
  try {
    bytes = await fs.readFile(filePath);
  } catch {
    return true;
  }

  if (!refreshHashes.length) return false;
  const hash = crypto.createHash("sha256").update(bytes).digest("hex").toUpperCase();
  return refreshHashes.includes(hash);
}

function isPng(bytes) {
  return bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4E &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0D &&
    bytes[5] === 0x0A &&
    bytes[6] === 0x1A &&
    bytes[7] === 0x0A;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
