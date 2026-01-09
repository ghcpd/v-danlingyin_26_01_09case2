<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <AppHeader />
    <main class="pt-16">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue'
</script>
