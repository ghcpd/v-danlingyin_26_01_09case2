<template>
  <div
    :class="[
      'flex mb-4',
      message.role === 'user' ? 'justify-end' : 'justify-start'
    ]"
  >
    <div
      :class="[
        'max-w-[80%] md:max-w-[70%] rounded-lg px-4 py-3 shadow-sm',
        message.role === 'user'
          ? 'bg-primary-600 text-white'
          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
      ]"
    >
      <div class="flex items-start space-x-2">
        <div
          v-if="message.role === 'assistant'"
          class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center"
        >
          <span class="text-white text-xs font-bold">AI</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="whitespace-pre-wrap break-words text-sm md:text-base">{{ message.content }}</p>
          <p
            :class="[
              'text-xs mt-2',
              message.role === 'user'
                ? 'text-primary-100'
                : 'text-gray-500 dark:text-gray-400'
            ]"
          >
            {{ formattedTime }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Message } from '@/types'
import { formatTimestamp } from '@/utils/helpers'

interface Props {
  message: Message
}

const props = defineProps<Props>()

const formattedTime = computed(() => formatTimestamp(props.message.timestamp))
</script>
