import type { Conversation } from '@/types'

export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    title: 'Introduction to AI',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'What is artificial intelligence?',
        timestamp: Date.now() - 3600000 * 24 * 2
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. The term may also be applied to any machine that exhibits traits associated with a human mind, such as learning and problem-solving.',
        timestamp: Date.now() - 3600000 * 24 * 2 + 5000
      },
      {
        id: 'msg-3',
        role: 'user',
        content: 'Can you give me some examples?',
        timestamp: Date.now() - 3600000 * 24 * 2 + 60000
      },
      {
        id: 'msg-4',
        role: 'assistant',
        content: 'Sure! Here are some common examples of AI in everyday life:\n\n1. Virtual assistants like Siri, Alexa, and Google Assistant\n2. Recommendation systems on Netflix, Amazon, and Spotify\n3. Self-driving cars\n4. Spam filters in email\n5. Facial recognition in photos\n6. Language translation services\n\nThese applications use various AI techniques including machine learning, natural language processing, and computer vision.',
        timestamp: Date.now() - 3600000 * 24 * 2 + 65000
      }
    ],
    createdAt: Date.now() - 3600000 * 24 * 2,
    updatedAt: Date.now() - 3600000 * 24 * 2 + 65000
  },
  {
    id: 'conv-2',
    title: 'Programming Tips',
    messages: [
      {
        id: 'msg-5',
        role: 'user',
        content: 'What are some best practices for writing clean code?',
        timestamp: Date.now() - 3600000 * 12
      },
      {
        id: 'msg-6',
        role: 'assistant',
        content: 'Here are some key best practices for writing clean code:\n\n1. Use meaningful and descriptive names for variables and functions\n2. Keep functions small and focused on a single task\n3. Write comments only when necessary to explain why, not what\n4. Follow consistent formatting and style guidelines\n5. Avoid code duplication (DRY principle)\n6. Write unit tests for your code\n7. Keep code simple and avoid premature optimization\n\nRemember: Code is read more often than it is written, so prioritize readability!',
        timestamp: Date.now() - 3600000 * 12 + 4000
      }
    ],
    createdAt: Date.now() - 3600000 * 12,
    updatedAt: Date.now() - 3600000 * 12 + 4000
  },
  {
    id: 'conv-3',
    title: 'Quick Question',
    messages: [
      {
        id: 'msg-7',
        role: 'user',
        content: 'Hello!',
        timestamp: Date.now() - 3600000 * 2
      },
      {
        id: 'msg-8',
        role: 'assistant',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: Date.now() - 3600000 * 2 + 1000
      }
    ],
    createdAt: Date.now() - 3600000 * 2,
    updatedAt: Date.now() - 3600000 * 2 + 1000
  }
]
