// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI chatbot assistant for Mithil Maske's portfolio.
 *
 * - chatWithAssistant - A function that handles the conversation with the AI assistant.
 * - ChatWithAssistantInput - The input type for the chatWithAssistant function.
 * - ChatWithAssistantOutput - The return type for the chatWithAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatWithAssistantInputSchema = z.object({
  message: z.string().describe('The user message to send to the chatbot.'),
});
export type ChatWithAssistantInput = z.infer<typeof ChatWithAssistantInputSchema>;

const ChatWithAssistantOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user message.'),
});
export type ChatWithAssistantOutput = z.infer<typeof ChatWithAssistantOutputSchema>;

export async function chatWithAssistant(input: ChatWithAssistantInput): Promise<ChatWithAssistantOutput> {
  return chatWithAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotAssistantPrompt',
  input: {schema: ChatWithAssistantInputSchema},
  output: {schema: ChatWithAssistantOutputSchema},
  prompt: `You are a helpful assistant answering questions as Mithil Maske — an AI developer and researcher.
  You can talk about your AI projects, blog posts, research, and personal interests.
  Do not use real-time data. Respond conversationally and help users understand your work.
  
  User: {{{message}}}
  Assistant: `,
});

const chatWithAssistantFlow = ai.defineFlow(
  {
    name: 'chatWithAssistantFlow',
    inputSchema: ChatWithAssistantInputSchema,
    outputSchema: ChatWithAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
