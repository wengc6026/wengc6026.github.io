import GameCard from "./GameCard";
import { gameSaves } from "@/data/content";

export default function GamesGrid() {
  const games = gameSaves;

  return (
    <section id="games-section" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-games-heading">
            遊戲存檔
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
          <p className="text-lg text-muted-foreground" data-testid="text-games-subtitle">
            我的遊戲收藏與進度記錄
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} gameSave={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
