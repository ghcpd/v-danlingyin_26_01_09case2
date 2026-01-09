import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Conversation, Message } from '@/types'
import { generateMockResponse } from '@/utils/mockAI'

export const useConversationStore = defineStore('conversation', () => {
  const conversations = ref<Conversation[]>([])
  const currentConversationId = ref<string | null>(null)

  const currentConversation = computed(() => {
    if (!currentConversationId.value) return null
    return conversations.value.find(c => c.id === currentConversationId.value) || null
  })

  const createConversation = (title: string = 'New Conversation'): string => {
    const id = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const newConversation: Conversation = {
      id,
      title,
      messages: [],
      lastUpdated: new Date()
    }
    conversations.value.unshift(newConversation)
    currentConversationId.value = id
    saveToLocalStorage()
    return id
  }

  const addMessage = (conversationId: string, message: Omit<Message, 'id' | 'timestamp'>): void => {
    const conversation = conversations.value.find(c => c.id === conversationId)
    if (!conversation) return

    const newMessage: Message = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    }

    conversation.messages.push(newMessage)
    conversation.lastUpdated = new Date()
    
    if (conversation.messages.length === 1 && message.role === 'user') {
      conversation.title = message.content.slice(0, 30) + (message.content.length > 30 ? '...' : '')
    }

    saveToLocalStorage()
  }

  const sendMessage = async (conversationId: string, content: string): Promise<void> => {
    addMessage(conversationId, { role: 'user', content })

    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200))

    const response = generateMockResponse(content)
    addMessage(conversationId, { role: 'assistant', content: response })
  }

  const deleteConversation = (conversationId: string): void => {
    const index = conversations.value.findIndex(c => c.id === conversationId)
    if (index !== -1) {
      conversations.value.splice(index, 1)
      if (currentConversationId.value === conversationId) {
        currentConversationId.value = conversations.value.length > 0 ? conversations.value[0].id : null
      }
      saveToLocalStorage()
    }
  }

  const setCurrentConversation = (conversationId: string | null): void => {
    currentConversationId.value = conversationId
  }

  const saveToLocalStorage = (): void => {
    try {
      localStorage.setItem('ai-portal-conversations', JSON.stringify(conversations.value))
    } catch (error) {
      console.error('Failed to save conversations to localStorage:', error)
    }
  }

  const loadFromLocalStorage = (): void => {
    try {
      const stored = localStorage.getItem('ai-portal-conversations')
      if (stored) {
        const parsed = JSON.parse(stored)
        conversations.value = parsed.map((conv: Conversation) => ({
          ...conv,
          lastUpdated: new Date(conv.lastUpdated),
          messages: conv.messages.map((msg: Message) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
        }))
      }
    } catch (error) {
      console.error('Failed to load conversations from localStorage:', error)
    }
  }

  loadFromLocalStorage()

  return {
    conversations,
    currentConversationId,
    currentConversation,
    createConversation,
    addMessage,
    sendMessage,
    deleteConversation,
    setCurrentConversation
  }
})
