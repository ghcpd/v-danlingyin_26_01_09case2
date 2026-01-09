<template>
  <button class="card conversation" type="button" @click="$emit('select')">
    <div class="conversation__title">{{ title }}</div>
    <div class="conversation__meta">
      <span class="conversation__time">Updated {{ relativeTime }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatRelativeTime } from '@/utils/time';

interface Props {
  title: string;
  updatedAt: number;
}

const props = defineProps<Props>();

const relativeTime = computed(() => formatRelativeTime(props.updatedAt));
</script>

<style scoped>
.conversation {
  width: 100%;
  text-align: left;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--bg-panel);
  color: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.conversation:hover,
.conversation:focus-visible {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  outline: none;
}

.conversation__title {
  font-weight: 700;
  margin-bottom: 6px;
}

.conversation__meta {
  color: var(--muted);
  font-size: 14px;
}
</style>
