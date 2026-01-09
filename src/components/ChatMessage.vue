<template>
  <div 
    class="message" 
    :class="{ 'message-user': isUser, 'message-assistant': !isUser }"
    role="article"
    :aria-label="`${isUser ? 'User' : 'Assistant'} message`"
  >
    <div class="message-content">
      <div class="message-text">{{ message.content }}</div>
      <div class="message-time">{{ formattedTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Message } from '@/types'

interface Props {
  message: Message
}

const props = defineProps<Props>()

const isUser = computed(() => props.message.role === 'user')

const formattedTime = computed(() => {
  const date = new Date(props.message.timestamp)
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit'
  })
})
</script>

<style scoped>
.message {
  display: flex;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-user {
  justify-content: flex-end;
}

.message-assistant {
  justify-content: flex-start;
}

.message-content {
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.message-text {
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  line-height: 1.6;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.message-user .message-text {
  background: #3b82f6;
  color: white;
  border-bottom-right-radius: 0.25rem;
}

.message-assistant .message-text {
  background: white;
  color: #111827;
  border-bottom-left-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

:global(.dark) .message-assistant .message-text {
  background: #1f2937;
  color: #f9fafb;
}

.message-time {
  font-size: 0.75rem;
  color: #9ca3af;
  padding: 0 0.5rem;
}

.message-user .message-time {
  text-align: right;
}

.message-assistant .message-time {
  text-align: left;
}

@media (max-width: 768px) {
  .message-content {
    max-width: 85%;
  }
}
</style>
