<template>
  <section class="container settings">
    <header class="settings__header">
      <div>
        <p class="eyebrow">Preferences</p>
        <h2>Customize your AI portal</h2>
        <p class="muted">Changes are saved locally for your next visit.</p>
      </div>
      <RouterLink class="ghost" to="/chat">Back to Chat</RouterLink>
    </header>

    <div class="card settings__panel">
      <div class="setting-row">
        <ToggleSwitch
          :model-value="settings.theme === 'dark'"
          label="Dark mode"
          @update:model-value="toggleTheme"
        />
        <p class="muted">Switch between light and dark UI themes.</p>
      </div>
      <div class="setting-row">
        <SelectField
          :model-value="settings.language"
          label="Language"
          :options="languageOptions"
          @update:model-value="setLanguage"
        />
        <p class="muted">Update interface language preference (mock).</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import SelectField from '@/components/SelectField.vue';
import { useSettingsStore } from '@/stores/settingsStore';

const settingsStore = useSettingsStore();

const settings = settingsStore.settings;

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: '简体中文', value: 'zh' },
];

const toggleTheme = (isDark: boolean): void => {
  settingsStore.setTheme(isDark ? 'dark' : 'light');
};

const setLanguage = (value: string): void => {
  if (value === 'en' || value === 'zh') {
    settingsStore.setLanguage(value);
  }
};
</script>

<style scoped>
.settings {
  display: grid;
  gap: 16px;
}

.settings__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.settings__panel {
  padding: 18px;
  display: grid;
  gap: 18px;
}

.setting-row {
  display: grid;
  gap: 6px;
}

.muted {
  color: var(--muted);
  margin: 0;
}

.ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-panel);
  color: var(--text);
}

@media (max-width: 768px) {
  .settings__header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
