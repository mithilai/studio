'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/chatbot/chatbot';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata can't be dynamic in a client component, so we export it separately or define it statically
// export const metadata: Metadata = {
//   title: 'AI Explorer - Mithil Maske',
//   description: 'Personal portfolio of Mithil Maske, AI Developer and Researcher.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>AI Explorer - Mithil Maske</title>
        <meta name="description" content="Personal portfolio of Mithil Maske, AI Developer and Researcher." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar onChatOpen={() => setIsChatOpen(true)} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        {!isChatOpen && (
          <Button
            onClick={() => setIsChatOpen(true)}
            variant="default"
            size="lg"
            className="fixed bottom-6 right-6 rounded-full shadow-xl p-4 h-16 w-16 z-50 gap-2"
            aria-label="Open chat"
          >
            <MessageSquare size={28} />
          </Button>
        )}
        <Chatbot isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
      </body>
    </html>
  );
}
