export type MessageRole = 'user' | 'assistant'

export interface Message {
  id: string
  role: MessageRole
  content: string
  timestamp: number
}

export interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: number
  updatedAt: number
}

export type ThemeMode = 'light' | 'dark'
export type Language = 'en' | 'zh' | 'es' | 'fr' | 'ja'

export interface Settings {
  theme: ThemeMode
  language: Language
}

export interface AppState {
  currentConversationId: string | null
  conversations: Conversation[]
  settings: Settings
}
