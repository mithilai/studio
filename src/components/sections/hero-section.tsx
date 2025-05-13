import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-24 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="https://picsum.photos/150/150"
            alt="Mithil Maske"
            width={150}
            height={150}
            className="rounded-full border-4 border-primary shadow-lg"
            data-ai-hint="profile picture"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Hi, I’m <span className="text-primary">Mithil Maske</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-6">
          AI Developer & Researcher
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I explore the depths of artificial intelligence and its real-world applications.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/#blog">Explore My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
