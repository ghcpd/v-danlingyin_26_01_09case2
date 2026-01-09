export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface Conversation {
  id: string
  title: string
  messages: Message[]
  lastUpdated: Date
}

export interface UISettings {
  theme: 'light' | 'dark'
  language: 'en' | 'zh'
}

export type MessageRole = 'user' | 'assistant'
export type Theme = 'light' | 'dark'
export type Language = 'en' | 'zh'
