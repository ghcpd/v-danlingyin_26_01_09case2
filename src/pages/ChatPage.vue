<template>
  <DefaultLayout>
    <div class="chat-page">
      <div class="chat-container">
        <div 
          ref="messagesContainer" 
          class="messages-container" 
          role="log" 
          aria-live="polite" 
          aria-label="Chat messages"
        >
          <div v-if="!currentConversation || currentConversation.messages.length === 0" class="empty-state">
            <div class="empty-icon" aria-hidden="true">💭</div>
            <h2 class="empty-title">Start a Conversation</h2>
            <p class="empty-description">Send a message to begin chatting with your AI assistant</p>
          </div>
          
          <div v-else class="messages-list">
            <ChatMessage 
              v-for="message in currentConversation.messages" 
              :key="message.id"
              :message="message"
            />
          </div>
          
          <div v-if="isLoading" class="loading-message">
            <div class="loading-avatar" aria-hidden="true">
              <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="input-container">
          <form @submit.prevent="handleSendMessage" class="input-form">
            <input
              v-model="inputMessage"
              type="text"
              class="message-input"
              placeholder="Type your message..."
              aria-label="Message input"
              :disabled="isLoading"
            />
            <button 
              type="submit" 
              class="send-button"
              :disabled="!inputMessage.trim() || isLoading"
              aria-label="Send message"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M3 10L17 3L10 17L8 11L3 10Z" 
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useConversationStore } from '@/stores/conversation'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ChatMessage from '@/components/ChatMessage.vue'

const router = useRouter()
const conversationStore = useConversationStore()

const inputMessage = ref('')
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

const currentConversation = computed(() => conversationStore.currentConversation)

const scrollToBottom = async (): Promise<void> => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const handleSendMessage = async (): Promise<void> => {
  const message = inputMessage.value.trim()
  if (!message || isLoading.value) return

  let conversationId = conversationStore.currentConversationId
  
  if (!conversationId) {
    conversationId = conversationStore.createConversation()
  }

  inputMessage.value = ''
  isLoading.value = true

  try {
    await conversationStore.sendMessage(conversationId, message)
  } catch (error) {
    console.error('Failed to send message:', error)
  } finally {
    isLoading.value = false
  }
}

watch(
  () => currentConversation.value?.messages.length,
  () => {
    scrollToBottom()
  }
)

watch(isLoading, () => {
  scrollToBottom()
})
</script>

<style scoped>
.chat-page {
  height: calc(100vh - 64px);
  background: #f9fafb;
}

:global(.dark) .chat-page {
  background: #111827;
}

.chat-container {
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 2rem 1.5rem;
  scroll-behavior: smooth;
}

.empty-state {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

:global(.dark) .empty-title {
  color: #f9fafb;
}

.empty-description {
  color: #6b7280;
}

:global(.dark) .empty-description {
  color: #9ca3af;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.loading-message {
  display: flex;
  justify-content: flex-start;
  margin-top: 1.5rem;
}

.loading-avatar {
  max-width: 70%;
  padding: 1rem 1.25rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

:global(.dark) .loading-avatar {
  background: #1f2937;
}

.loading-dots {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.loading-dots span {
  width: 8px;
  height: 8px;
  background: #9ca3af;
  border-radius: 50%;
  animation: loading 1.4s infinite ease-in-out both;
}

.loading-dots span:nth-child(1) {
  animation-delay: -0.32s;
}

.loading-dots span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes loading {
  0%, 80%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

.input-container {
  padding: 1.5rem;
  background: white;
  border-top: 1px solid #e5e7eb;
}

:global(.dark) .input-container {
  background: #1f2937;
  border-top-color: #374151;
}

.input-form {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  gap: 0.75rem;
}

.message-input {
  flex: 1;
  padding: 0.875rem 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font-size: 1rem;
  background: white;
  color: #111827;
  transition: all 0.2s;
}

:global(.dark) .message-input {
  background: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

.message-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.message-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-button {
  padding: 0.875rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-button:hover:not(:disabled) {
  background: #2563eb;
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .messages-container {
    padding: 1rem;
  }
  
  .input-container {
    padding: 1rem;
  }
}
</style>
