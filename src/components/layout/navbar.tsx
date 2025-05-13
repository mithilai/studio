'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Research', href: '/#research' },
  { label: 'YouTube', href: '/#youtube' },
  { label: 'Contact', href: '/#contact' },
];

interface NavbarProps {
  onChatOpen: () => void;
}

export function Navbar({ onChatOpen }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/#home" className="text-xl font-bold text-primary">
          AI Explorer
        </Link>

        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" onClick={onChatOpen} className="gap-2">
            <MessageSquare size={16} />
            Chat with Me
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/#home" className="text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  AI Explorer
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <Button variant="outline" onClick={() => { onChatOpen(); setIsMobileMenuOpen(false); }} className="w-full gap-2">
                   <MessageSquare size={16} />
                   Chat with Me
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
