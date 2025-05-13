import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex justify-center space-x-6">
          <Link href="https://www.instagram.com/vigyanakrama/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/mithil-maske-408588225/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="https://github.com/mithilai" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github size={24} />
          </Link>
          <Link href="mailto:mithilm21@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Mithil Maske. All rights reserved.</p>
        <p>Built by AI Explorer</p>
      </div>
    </footer>
  );
}
