import GameCard from '../GameCard';

export default function GameCardExample() {
  const mockGameSave = {
    id: "1",
    slug: "薩爾達傳說-曠野之息",
    title: "薩爾達傳說：曠野之息",
    platform: "Nintendo Switch",
    playtime: "120 小時",
    progress: 85,
    lastPlayed: "2024-11-05",
    screenshotUrl: "/attached_assets/generated_images/Zelda_game_screenshot_94d59746.png",
    content: "# 薩爾達傳說：曠野之息\n\n這是一款開放世界動作冒險遊戲。"
  };

  return (
    <div className="p-8 bg-background">
      <GameCard gameSave={mockGameSave} />
    </div>
  );
}
