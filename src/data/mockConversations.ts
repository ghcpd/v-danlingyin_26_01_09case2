import { Conversation } from '@/types/conversation';

export const mockConversations: Conversation[] = [
  {
    id: 'welcome-thread',
    title: 'Getting started',
    updatedAt: Date.now() - 1000 * 60 * 45,
    messages: [
      {
        id: 'm-1',
        role: 'assistant',
        content: 'Welcome to AstraMind. Ask me anything to start exploring.',
        timestamp: Date.now() - 1000 * 60 * 50,
      },
      {
        id: 'm-2',
        role: 'user',
        content: 'How does this portal work?',
        timestamp: Date.now() - 1000 * 60 * 48,
      },
      {
        id: 'm-3',
        role: 'assistant',
        content: 'It is a mock AI chat: messages stay local, replies are simulated, and you can browse history or adjust settings.',
        timestamp: Date.now() - 1000 * 60 * 46,
      },
    ],
  },
  {
    id: 'design-notes',
    title: 'Design ideas',
    updatedAt: Date.now() - 1000 * 60 * 120,
    messages: [
      {
        id: 'm-4',
        role: 'assistant',
        content: 'Consider bold gradients and clear typography to make the AI brand memorable.',
        timestamp: Date.now() - 1000 * 60 * 140,
      },
      {
        id: 'm-5',
        role: 'user',
        content: 'Noted. What about accessibility?',
        timestamp: Date.now() - 1000 * 60 * 138,
      },
      {
        id: 'm-6',
        role: 'assistant',
        content: 'Use semantic landmarks, keyboard focus styles, and sufficient contrast for comfortable reading.',
        timestamp: Date.now() - 1000 * 60 * 136,
      },
    ],
  },
];
