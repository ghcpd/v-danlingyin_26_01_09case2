<template>
  <label class="select">
    <span class="select__label">{{ label }}</span>
    <select
      class="select__control"
      :value="modelValue"
      :aria-label="label"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
  </label>
</template>

<script setup lang="ts">
interface Option {
  label: string;
  value: string;
}

interface Props {
  modelValue: string;
  label: string;
  options: Option[];
}

defineProps<Props>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<style scoped>
.select {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
}

.select__control {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-panel);
  font: inherit;
  color: var(--text);
}

.select__control:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
