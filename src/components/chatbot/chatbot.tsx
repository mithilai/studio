'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { chatWithAssistant } from '@/ai/flows/ai-chatbot-assistant';
import type { ChatMessage } from '@/types';
import { ChatMessageItem } from './chat-message-item';

interface ChatbotProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function Chatbot({ isOpen, onOpenChange }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const initialBotMessage: ChatMessage = {
    id: 'initial-bot-message',
    sender: 'bot',
    text: "Hi there! I'm Mithil's AI assistant. Feel free to ask me anything about his work, projects, or interests.",
    timestamp: new Date(),
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialBotMessage]);
    }
  }, [isOpen]);


  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const userMessageText = inputValue.trim();
    if (!userMessageText || isLoading) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMessageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const assistantResponse = await chatWithAssistant({ message: userMessageText });
      const newBotMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: assistantResponse.response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      console.error('Error calling chatWithAssistant:', error);
      const errorBotMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full max-w-md p-0 flex flex-col bg-background shadow-xl rounded-l-lg">
          <SheetHeader className="p-4 border-b">
            <div className="flex justify-between items-center">
              <SheetTitle className="text-lg font-semibold">Chat with Mithil&apos;s AI</SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>
          
          <ScrollArea className="flex-grow p-4 bg-background" ref={scrollAreaRef}>
            <div className="space-y-2">
              {messages.map((msg) => (
                <ChatMessageItem key={msg.id} message={msg} />
              ))}
              {isLoading && (
                <div className="flex items-start space-x-3 py-3">
                   <div className="h-8 w-8 shrink-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                  <div className="max-w-[70%] rounded-lg px-4 py-2.5 shadow bg-card text-card-foreground rounded-bl-none">
                    <p className="text-sm italic">Thinking...</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <SheetFooter className="p-4 border-t bg-background">
            <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
                disabled={isLoading}
                aria-label="Chat message input"
              />
              <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} aria-label="Send message">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
  );
}
