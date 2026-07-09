import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public", "assets", "divine-pride");
const staticUrl = "https://static.divine-pride.net";

async function main() {
  const { classDataSets } = await import(pathToFileURL(path.join(rootDir, "src", "generated", "classDataSets.js")));
  const loadedDataSets = await Promise.all(
    classDataSets.map(async (dataSet) => ({
      ...dataSet,
      data: dataSet.data ?? await dataSet.load()
    }))
  );
  const jobIds = loadedDataSets.map((dataSet) => dataSet.data.classId).filter(Boolean);
  const skillIds = [
    ...new Set(
      loadedDataSets.flatMap((dataSet) =>
        (dataSet.data.skillTabs ?? [{ skills: dataSet.data.skills }]).flatMap((tab) => tab.skills.map((skill) => skill.id))
      )
    )
  ];
  const downloads = [
    ...jobIds.map((id) => ({
      url: `${staticUrl}/images/skilltree/jobs/${id}.png`,
      filePath: path.join(publicDir, "jobs", `${id}.png`)
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

  console.log(`Downloaded ${completed} Divine Pride assets into public/assets/divine-pride.`);
}

async function download({ url, filePath }) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  try {
    await fs.access(filePath);
    return;
  } catch {
    // Download missing assets.
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed ${response.status} for ${url}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  await fs.writeFile(filePath, bytes);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
