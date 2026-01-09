<template>
  <form class="composer" @submit.prevent="handleSubmit" aria-label="Send a message">
    <label class="visually-hidden" for="chat-input">Chat input</label>
    <textarea
      id="chat-input"
      v-model="draft"
      class="composer__input"
      :placeholder="placeholder"
      rows="3"
      :disabled="disabled"
      aria-label="Message input"
      @keydown.enter.exact.prevent="handleSubmit"
    ></textarea>
    <div class="composer__actions">
      <button type="submit" class="composer__send" :disabled="disabled || !draft.trim()">
        {{ disabled ? 'Responding…' : 'Send' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  onSend: (content: string) => Promise<void> | void;
  disabled?: boolean;
  placeholder?: string;
}

const props = defineProps<Props>();
const draft = ref('');

const handleSubmit = async (): Promise<void> => {
  if (!draft.value.trim()) return;
  await props.onSend(draft.value);
  draft.value = '';
};

watch(
  () => props.disabled,
  (isDisabled) => {
    if (!isDisabled) {
      const textarea = document.getElementById('chat-input');
      textarea?.focus();
    }
  },
);
</script>

<style scoped>
.composer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 12px;
  box-shadow: var(--shadow);
}

.composer__input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  resize: none;
  font: inherit;
  background: color-mix(in srgb, var(--bg) 90%, transparent);
  color: var(--text);
}

.composer__input:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.composer__actions {
  display: flex;
  justify-content: flex-end;
}

.composer__send {
  padding: 10px 18px;
  background: var(--accent);
  color: #0b1020;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: var(--shadow);
}

.composer__send:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.composer__send:not(:disabled):hover,
.composer__send:not(:disabled):focus-visible {
  transform: translateY(-1px);
  outline: none;
}
</style>
