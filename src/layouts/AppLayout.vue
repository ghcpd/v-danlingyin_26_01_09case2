<template>
  <div class="layout">
    <a class="visually-hidden" href="#main-content">Skip to content</a>
    <HeaderNav />
    <main id="main-content" class="main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue';
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding: 32px 0 64px;
}

@media (max-width: 768px) {
  .main {
    padding: 20px 0 40px;
  }
}
</style>
