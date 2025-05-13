import { HeroSection } from '@/components/sections/hero-section';
import { BlogSection } from '@/components/sections/blog-section';
import { ResearchSection } from '@/components/sections/research-section';
import { YouTubeSection } from '@/components/sections/youtube-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BlogSection />
      <ResearchSection />
      <YouTubeSection />
      <ContactSection />
    </>
  );
}
