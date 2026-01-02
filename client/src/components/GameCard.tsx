import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import type { GameSave } from "@/types/content";

interface GameCardProps {
  gameSave: GameSave;
}

export default function GameCard({ gameSave }: GameCardProps) {
  const { title, platform, playtime, progress, lastPlayed, screenshotUrl, slug } = gameSave;
  
  return (
    <Link href={`/game-save/${slug}`}>
      <Card className="overflow-hidden hover-elevate group transition-all duration-300 cursor-pointer" data-testid={`card-game-${title}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={screenshotUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 backdrop-blur-sm bg-background/80"
          data-testid={`badge-platform-${platform}`}
        >
          {platform}
        </Badge>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2" data-testid={`text-game-title-${title}`}>
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span data-testid={`text-playtime-${playtime}`}>{playtime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span data-testid={`text-lastplayed-${lastPlayed}`}>{lastPlayed}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">遊戲進度</span>
            <span className="font-medium" data-testid={`text-progress-${progress}`}>
              {progress}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>
    </Card>
    </Link>
  );
}
