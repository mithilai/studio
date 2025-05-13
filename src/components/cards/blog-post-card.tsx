import type { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {post.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="blog abstract illustration"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
        <CardDescription>{post.date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{post.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-primary p-0 h-auto">
          <Link href={post.link}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
