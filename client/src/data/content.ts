import type { GameSave } from "@/types/content";
import contentData from "./content.json";

interface ContentData {
  gameSaves: GameSave[];
}

const content = contentData as ContentData;

export const gameSaves: GameSave[] = content.gameSaves;

