import { ChevronDown } from "lucide-react";

const heroBackground = "/attached_assets/generated_images/Tech_grid_hero_background_6642f117.png";

export default function HeroSection() {
  const scrollToGames = () => {
    const gamesSection = document.getElementById("games-section");
    gamesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-chart-2/10 animate-glow-pulse" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-float">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-glow-pulse" data-testid="text-hero-name">
            遊戲玩家
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide" data-testid="text-hero-subtitle">
          探索我的遊戲世界 · 記錄每一個精彩瞬間
        </p>
        
        <button
          onClick={scrollToGames}
          className="group inline-flex items-center gap-2 px-8 py-3 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full text-white hover-elevate active-elevate-2 transition-all"
          data-testid="button-explore-games"
        >
          <span className="font-medium">探索遊戲存檔</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
