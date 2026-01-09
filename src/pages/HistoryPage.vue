<template>
  <div class="min-h-[calc(100vh-4rem)] py-8">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Conversation History
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          View and continue your past conversations
        </p>
      </div>

      <div v-if="conversations.length === 0" class="text-center py-16">
        <div class="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No conversations yet
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Start a new conversation to see it here
        </p>
        <router-link
          to="/chat"
          class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
        >
          Start Chatting
        </router-link>
      </div>

      <div v-else class="space-y-4">
        <ConversationItem
          v-for="conversation in sortedConversations"
          :key="conversation.id"
          :conversation="conversation"
          @click="openConversation"
          @delete="handleDeleteConversation"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useConversationStore } from '@/stores/conversation'
import ConversationItem from '@/components/ConversationItem.vue'

const router = useRouter()
const conversationStore = useConversationStore()

const conversations = computed(() => conversationStore.conversations)

const sortedConversations = computed(() => {
  return [...conversations.value].sort((a, b) => b.updatedAt - a.updatedAt)
})

const openConversation = (id: string): void => {
  conversationStore.setCurrentConversation(id)
  router.push('/chat')
}

const handleDeleteConversation = (id: string): void => {
  if (confirm('Are you sure you want to delete this conversation?')) {
    conversationStore.deleteConversation(id)
  }
}
</script>
