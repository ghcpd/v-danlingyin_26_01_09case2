<template>
  <button
    @click="handleClick"
    class="w-full text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors group"
    :aria-label="`Open conversation: ${conversation.title}`"
  >
    <div class="flex items-start justify-between">
      <div class="flex-1 min-w-0 pr-4">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {{ conversation.title }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {{ messageCount }} {{ messageCount === 1 ? 'message' : 'messages' }}
        </p>
        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
          {{ formattedTime }}
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <button
          @click.stop="handleDelete"
          class="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          aria-label="Delete conversation"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Conversation } from '@/types'
import { formatTimestamp } from '@/utils/helpers'

interface Props {
  conversation: Conversation
}

interface Emits {
  (e: 'click', id: string): void
  (e: 'delete', id: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const messageCount = computed(() => props.conversation.messages.length)
const formattedTime = computed(() => formatTimestamp(props.conversation.updatedAt))

const handleClick = (): void => {
  emit('click', props.conversation.id)
}

const handleDelete = (): void => {
  emit('delete', props.conversation.id)
}
</script>
