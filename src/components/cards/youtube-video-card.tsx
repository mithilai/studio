import type { YouTubeVideo } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube as YoutubeIcon } from 'lucide-react'; // Renamed to avoid conflict

interface YouTubeVideoCardProps {
  video: YouTubeVideo;
}

export function YouTubeVideoCard({ video }: YouTubeVideoCardProps) {
  return (
    <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col">
        <CardHeader className="p-0 relative aspect-video">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="youtube thumbnail"
          />
           <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <YoutubeIcon className="h-12 w-12 text-white" />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-md leading-tight group-hover:text-primary transition-colors">{video.title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
