<template>
  <article :class="['bubble', roleClass]" role="listitem" :aria-label="`${role} message`">
    <header class="bubble__meta">
      <span class="bubble__role">{{ roleLabel }}</span>
      <span class="bubble__time">{{ time }}</span>
    </header>
    <p class="bubble__content">{{ content }}</p>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatTime } from '@/utils/time';
import type { Role } from '@/types/conversation';

interface Props {
  role: Role;
  content: string;
  timestamp: number;
}

const props = defineProps<Props>();

const roleClass = computed(() => (props.role === 'user' ? 'bubble--user' : 'bubble--assistant'));
const roleLabel = computed(() => (props.role === 'user' ? 'You' : 'AstraMind'));
const time = computed(() => formatTime(props.timestamp));
</script>

<style scoped>
.bubble {
  max-width: 680px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--bg-panel);
  box-shadow: var(--shadow);
}

.bubble--user {
  margin-left: auto;
  background: linear-gradient(135deg, #5b8def, #7ed6ff);
  color: #0b1020;
  border-color: transparent;
}

.bubble--assistant {
  margin-right: auto;
}

.bubble__meta {
  display: flex;
  gap: 10px;
  align-items: baseline;
  font-size: 12px;
  color: var(--muted);
  opacity: 0.9;
}

.bubble--user .bubble__meta {
  color: #0b1020;
}

.bubble__content {
  margin: 8px 0 0;
  white-space: pre-wrap;
  line-height: 1.5;
}
</style>
