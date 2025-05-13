import { youtubeVideos } from '@/lib/data';
import { YouTubeVideoCard } from '@/components/cards/youtube-video-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Youtube as YoutubeIcon } from 'lucide-react';

export function YouTubeSection() {
  return (
    <section id="youtube" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          From My <span className="text-primary">Channel</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Check out my latest videos on AI, tutorials, and tech discussions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {youtubeVideos.map((video) => (
            <YouTubeVideoCard key={video.id} video={video} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon className="mr-2 h-5 w-5" /> More on YouTube
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
