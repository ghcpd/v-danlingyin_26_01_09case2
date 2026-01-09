<template>
  <div class="flex items-center justify-center py-8">
    <div class="flex flex-col items-center space-y-3">
      <div class="relative">
        <div class="w-12 h-12 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400">{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string
}

withDefaults(defineProps<Props>(), {
  message: 'Loading...'
})
</script>
