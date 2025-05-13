import type { ResearchPaper } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FileText } from 'lucide-react';

interface ResearchPaperCardProps {
  paper: ResearchPaper;
}

export function ResearchPaperCard({ paper }: ResearchPaperCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {paper.imageUrl && (
         <div className="relative w-full h-48">
          <Image
            src={paper.imageUrl}
            alt={paper.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="research abstract illustration"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl leading-tight">{paper.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{paper.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-primary p-0 h-auto">
          <Link href={paper.link} target="_blank" rel="noopener noreferrer">
            View Paper <FileText className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
