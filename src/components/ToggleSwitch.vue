<template>
  <label class="toggle">
    <span class="toggle__label">{{ label }}</span>
    <input
      :checked="modelValue"
      type="checkbox"
      class="toggle__input"
      :aria-label="label"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span class="toggle__slider" aria-hidden="true"></span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
  label: string;
}

defineProps<Props>();

defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>

<style scoped>
.toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.toggle__label {
  font-weight: 600;
}

.toggle__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.toggle__slider {
  width: 48px;
  height: 26px;
  border-radius: 999px;
  background: var(--border);
  position: relative;
  transition: background 0.2s ease;
}

.toggle__slider::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background 0.2s ease;
}

.toggle__input:checked + .toggle__slider {
  background: var(--accent);
}

.toggle__input:checked + .toggle__slider::after {
  transform: translateX(22px);
  background: #0b1020;
}
</style>
