import { useRoute, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import { gameSaves } from "@/data/content";

export default function GameSaveDetail() {
  const [, params] = useRoute("/game-save/:slug");
  const slug = params?.slug;

  const gameSave = gameSaves.find((g) => g.slug === slug);

  if (!gameSave) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">找不到這個遊戲存檔</p>
            <Link href="/">
              <Button variant="outline" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首頁
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回首頁
            </Button>
          </Link>

          <article className="space-y-8">
            <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
              <img
                src={gameSave.screenshotUrl}
                alt={gameSave.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-sm">
                    {gameSave.platform}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{gameSave.playtime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{gameSave.lastPlayed}</span>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-game-title">
                  {gameSave.title}
                </h1>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">遊戲進度</span>
                  <span className="font-medium" data-testid={`text-progress-${gameSave.progress}`}>
                    {gameSave.progress}%
                  </span>
                </div>
                <Progress value={gameSave.progress} className="h-2" />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <MarkdownContent content={gameSave.content} />
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

