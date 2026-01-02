import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  gameSaves: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    gameSaves: [],
  };

  // Load game saves
  try {
    const gameSavesDir = resolve(contentPath, "game-saves");
    const gameSaveFiles = await readdir(gameSavesDir);
    for (const file of gameSaveFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(gameSavesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const gameSave = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          gameSave.slug = slug;
          // Validate screenshot URL
          if (gameSave.screenshotUrl && !gameSave.screenshotUrl.startsWith("/attached_assets/")) {
            console.warn(`Warning: Game save "${gameSave.title}" screenshotUrl should start with "/attached_assets/": ${gameSave.screenshotUrl}`);
          }
          data.gameSaves.push(gameSave);
        }
      }
    }
    // Sort by lastPlayed descending
    data.gameSaves.sort((a, b) => {
      try {
        const dateA = new Date(a.lastPlayed).getTime();
        const dateB = new Date(b.lastPlayed).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load game saves:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Game Saves: ${data.gameSaves.length}`);
}

generateContent().catch(console.error);

