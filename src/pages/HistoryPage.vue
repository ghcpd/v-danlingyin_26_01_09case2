<template>
  <DefaultLayout>
    <div class="history-page">
      <div class="history-container">
        <h1 class="page-title">Conversation History</h1>
        
        <div v-if="conversations.length === 0" class="empty-state">
          <div class="empty-icon" aria-hidden="true">📝</div>
          <h2 class="empty-title">No Conversations Yet</h2>
          <p class="empty-description">Start chatting to see your conversation history here</p>
          <router-link to="/chat" class="start-button">
            Start New Conversation
          </router-link>
        </div>
        
        <div v-else class="conversations-list" role="list">
          <div
            v-for="conversation in conversations"
            :key="conversation.id"
            class="conversation-item"
            role="listitem"
            @click="openConversation(conversation.id)"
            @keydown.enter="openConversation(conversation.id)"
            @keydown.space.prevent="openConversation(conversation.id)"
            tabindex="0"
            :aria-label="`Open conversation: ${conversation.title}`"
          >
            <div class="conversation-content">
              <h3 class="conversation-title">{{ conversation.title }}</h3>
              <p class="conversation-info">
                {{ conversation.messages.length }} message{{ conversation.messages.length !== 1 ? 's' : '' }} · 
                {{ formatDate(conversation.lastUpdated) }}
              </p>
            </div>
            <div class="conversation-actions">
              <button
                @click.stop="deleteConversationHandler(conversation.id)"
                class="delete-button"
                :aria-label="`Delete conversation: ${conversation.title}`"
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
                    d="M8 4H12M4 7H16M14 7L13.5 14.5C13.4 15.9 13.35 16.6 13 17.1C12.7 17.5 12.3 17.8 11.8 18C11.3 18.2 10.6 18.2 9.2 18.2H10.8C9.4 18.2 8.7 18.2 8.2 18C7.7 17.8 7.3 17.5 7 17.1C6.65 16.6 6.6 15.9 6.5 14.5L6 7M9 10V14M11 10V14" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useConversationStore } from '@/stores/conversation'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = useRouter()
const conversationStore = useConversationStore()

const conversations = computed(() => conversationStore.conversations)

const formatDate = (date: Date): string => {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (days === 0) {
    return 'Today'
  } else if (days === 1) {
    return 'Yesterday'
  } else if (days < 7) {
    return `${days} days ago`
  } else {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: now.getFullYear() !== new Date(date).getFullYear() ? 'numeric' : undefined
    })
  }
}

const openConversation = (conversationId: string): void => {
  conversationStore.setCurrentConversation(conversationId)
  router.push('/chat')
}

const deleteConversationHandler = (conversationId: string): void => {
  if (confirm('Are you sure you want to delete this conversation?')) {
    conversationStore.deleteConversation(conversationId)
  }
}
</script>

<style scoped>
.history-page {
  min-height: calc(100vh - 64px);
  background: #f9fafb;
  padding: 2rem 1.5rem;
}

:global(.dark) .history-page {
  background: #111827;
}

.history-container {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #111827;
}

:global(.dark) .page-title {
  color: #f9fafb;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
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
  margin-bottom: 2rem;
}

:global(.dark) .empty-description {
  color: #9ca3af;
}

.start-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.start-button:hover {
  background: #2563eb;
}

.conversations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.conversation-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

:global(.dark) .conversation-item {
  background: #1f2937;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.conversation-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

:global(.dark) .conversation-item:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}

.conversation-item:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.conversation-content {
  flex: 1;
  min-width: 0;
}

.conversation-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #111827;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:global(.dark) .conversation-title {
  color: #f9fafb;
}

.conversation-info {
  font-size: 0.875rem;
  color: #6b7280;
}

:global(.dark) .conversation-info {
  color: #9ca3af;
}

.conversation-actions {
  margin-left: 1rem;
}

.delete-button {
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-button:hover {
  background: #fee2e2;
  color: #ef4444;
}

:global(.dark) .delete-button:hover {
  background: #7f1d1d;
  color: #fca5a5;
}

@media (max-width: 768px) {
  .history-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .conversation-item {
    padding: 1rem;
  }
}
</style>
