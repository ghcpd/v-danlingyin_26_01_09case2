<template>
  <div class="h-[calc(100vh-4rem)] flex flex-col">
    <div class="container mx-auto px-4 flex-1 flex flex-col max-w-4xl">
      <!-- Chat Header -->
      <div class="py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div>
          <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ currentConversation?.title || 'New Conversation' }}
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ messageCount }} {{ messageCount === 1 ? 'message' : 'messages' }}
          </p>
        </div>
        <button
          @click="startNewConversation"
          class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
          aria-label="Start new conversation"
        >
          New Chat
        </button>
      </div>

      <!-- Messages Container -->
      <div
        ref="messagesContainer"
        class="flex-1 overflow-y-auto py-6 scroll-smooth"
      >
        <div v-if="!currentConversation || messageCount === 0" class="flex items-center justify-center h-full">
          <div class="text-center max-w-md">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-2xl">AI</span>
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Start a Conversation
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              Ask me anything! I'm here to help you with information, answers, and creative tasks.
            </p>
          </div>
        </div>

        <div v-else>
          <ChatMessage
            v-for="message in currentConversation.messages"
            :key="message.id"
            :message="message"
          />

          <LoadingSpinner
            v-if="isAIResponding"
            message="AI is thinking..."
          />
        </div>
      </div>

      <!-- Input Area -->
      <div class="py-4 border-t border-gray-200 dark:border-gray-700">
        <form @submit.prevent="handleSendMessage" class="flex items-end space-x-2">
          <div class="flex-1">
            <textarea
              v-model="inputMessage"
              @keydown.enter.exact.prevent="handleSendMessage"
              rows="1"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white resize-none"
              placeholder="Type your message here... (Enter to send, Shift+Enter for new line)"
              :disabled="isAIResponding"
              aria-label="Message input"
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="!canSend"
            class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            aria-label="Send message"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useConversationStore } from '@/stores/conversation'
import ChatMessage from '@/components/ChatMessage.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const conversationStore = useConversationStore()
const inputMessage = ref('')
const messagesContainer = ref<HTMLElement | null>(null)

const currentConversation = computed(() => conversationStore.currentConversation)
const isAIResponding = computed(() => conversationStore.isAIResponding)
const messageCount = computed(() => currentConversation.value?.messages.length || 0)

const canSend = computed(() => {
  return inputMessage.value.trim().length > 0 && !isAIResponding.value
})

const handleSendMessage = async (): Promise<void> => {
  if (!canSend.value) return

  const message = inputMessage.value.trim()
  inputMessage.value = ''

  await conversationStore.sendMessage(message)
  scrollToBottom()
}

const startNewConversation = (): void => {
  conversationStore.createNewConversation()
}

const scrollToBottom = async (): Promise<void> => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Auto-scroll when new messages arrive
watch(
  () => currentConversation.value?.messages.length,
  () => {
    scrollToBottom()
  }
)

// Create new conversation if none exists
onMounted(() => {
  if (!conversationStore.currentConversationId) {
    conversationStore.createNewConversation()
  }
})
</script>
