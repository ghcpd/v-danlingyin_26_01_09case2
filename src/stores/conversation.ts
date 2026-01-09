import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Conversation, Message } from '@/types'
import { generateId, generateMockAIResponse } from '@/utils/helpers'
import { mockConversations } from '@/data/mockData'

export const useConversationStore = defineStore('conversation', () => {
  const conversations = ref<Conversation[]>([...mockConversations])
  const currentConversationId = ref<string | null>(null)
  const isAIResponding = ref(false)

  const currentConversation = computed(() => {
    if (!currentConversationId.value) return null
    return conversations.value.find(c => c.id === currentConversationId.value) || null
  })

  const setCurrentConversation = (id: string | null): void => {
    currentConversationId.value = id
  }

  const createNewConversation = (): string => {
    const newConversation: Conversation = {
      id: generateId(),
      title: `New Conversation ${conversations.value.length + 1}`,
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    conversations.value.unshift(newConversation)
    currentConversationId.value = newConversation.id
    return newConversation.id
  }

  const addMessage = (conversationId: string, content: string, role: 'user' | 'assistant'): void => {
    const conversation = conversations.value.find(c => c.id === conversationId)
    if (!conversation) return

    const message: Message = {
      id: generateId(),
      role,
      content,
      timestamp: Date.now()
    }

    conversation.messages.push(message)
    conversation.updatedAt = Date.now()

    // Update title based on first user message
    if (conversation.messages.length === 1 && role === 'user') {
      conversation.title = content.slice(0, 50) + (content.length > 50 ? '...' : '')
    }
  }

  const sendMessage = async (content: string): Promise<void> => {
    if (!currentConversationId.value) {
      createNewConversation()
    }

    if (!currentConversationId.value) return

    // Add user message
    addMessage(currentConversationId.value, content, 'user')

    // Simulate AI response
    isAIResponding.value = true

    setTimeout(() => {
      if (currentConversationId.value) {
        const aiResponse = generateMockAIResponse(content)
        addMessage(currentConversationId.value, aiResponse, 'assistant')
      }
      isAIResponding.value = false
    }, 1000 + Math.random() * 1500)
  }

  const deleteConversation = (id: string): void => {
    const index = conversations.value.findIndex(c => c.id === id)
    if (index !== -1) {
      conversations.value.splice(index, 1)
      if (currentConversationId.value === id) {
        currentConversationId.value = null
      }
    }
  }

  return {
    conversations,
    currentConversationId,
    currentConversation,
    isAIResponding,
    setCurrentConversation,
    createNewConversation,
    addMessage,
    sendMessage,
    deleteConversation
  }
})
