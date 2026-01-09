<template>
  <DefaultLayout>
    <div class="settings-page">
      <div class="settings-container">
        <h1 class="page-title">Settings</h1>
        
        <div class="settings-sections">
          <section class="settings-section">
            <h2 class="section-title">Appearance</h2>
            <div class="setting-item">
              <div class="setting-info">
                <label for="theme-toggle" class="setting-label">Theme</label>
                <p class="setting-description">Choose between light and dark mode</p>
              </div>
              <div class="setting-control">
                <button
                  @click="toggleTheme"
                  class="theme-toggle"
                  :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`"
                  :aria-pressed="theme === 'dark'"
                  role="switch"
                >
                  <span class="toggle-option" :class="{ active: theme === 'light' }">
                    ☀️ Light
                  </span>
                  <span class="toggle-option" :class="{ active: theme === 'dark' }">
                    🌙 Dark
                  </span>
                  <span class="toggle-slider" :class="{ dark: theme === 'dark' }"></span>
                </button>
              </div>
            </div>
          </section>
          
          <section class="settings-section">
            <h2 class="section-title">Language</h2>
            <div class="setting-item">
              <div class="setting-info">
                <label for="language-select" class="setting-label">Interface Language</label>
                <p class="setting-description">Choose your preferred language</p>
              </div>
              <div class="setting-control">
                <select
                  id="language-select"
                  v-model="currentLanguage"
                  @change="changeLanguage"
                  class="language-select"
                  aria-label="Select language"
                >
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                </select>
              </div>
            </div>
          </section>
          
          <section class="settings-section">
            <h2 class="section-title">About</h2>
            <div class="about-info">
              <p><strong>Version:</strong> 1.0.0</p>
              <p><strong>AI Portal</strong> - Your intelligent assistant for natural conversations</p>
              <p class="note">Note: This is a mock application with simulated AI responses</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import type { Language } from '@/types'

const settingsStore = useSettingsStore()

const theme = computed(() => settingsStore.theme)
const currentLanguage = ref<Language>(settingsStore.language)

const toggleTheme = (): void => {
  settingsStore.toggleTheme()
}

const changeLanguage = (): void => {
  settingsStore.setLanguage(currentLanguage.value)
}
</script>

<style scoped>
.settings-page {
  min-height: calc(100vh - 64px);
  background: #f9fafb;
  padding: 2rem 1.5rem;
}

:global(.dark) .settings-page {
  background: #111827;
}

.settings-container {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #111827;
}

:global(.dark) .page-title {
  color: #f9fafb;
}

.settings-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.settings-section {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

:global(.dark) .settings-section {
  background: #1f2937;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

:global(.dark) .section-title {
  color: #f9fafb;
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;
}

.setting-info {
  flex: 1;
}

.setting-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #111827;
}

:global(.dark) .setting-label {
  color: #f9fafb;
}

.setting-description {
  font-size: 0.875rem;
  color: #6b7280;
}

:global(.dark) .setting-description {
  color: #9ca3af;
}

.setting-control {
  flex-shrink: 0;
}

.theme-toggle {
  position: relative;
  display: flex;
  background: #e5e7eb;
  border: none;
  border-radius: 2rem;
  padding: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;
}

:global(.dark) .theme-toggle {
  background: #374151;
}

.toggle-option {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: all 0.3s;
  z-index: 1;
  border-radius: 1.5rem;
}

.toggle-option.active {
  color: #111827;
}

:global(.dark) .toggle-option.active {
  color: #f9fafb;
}

.toggle-slider {
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  width: calc(50% - 0.25rem);
  height: calc(100% - 0.5rem);
  background: white;
  border-radius: 1.5rem;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toggle-slider.dark {
  transform: translateX(100%);
}

.language-select {
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  transition: all 0.2s;
}

:global(.dark) .language-select {
  background-color: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

.language-select:hover {
  border-color: #3b82f6;
}

.language-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.about-info {
  color: #6b7280;
  line-height: 1.8;
}

:global(.dark) .about-info {
  color: #9ca3af;
}

.about-info strong {
  color: #111827;
}

:global(.dark) .about-info strong {
  color: #f9fafb;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

:global(.dark) .note {
  background: #78350f;
  color: #fef3c7;
}

@media (max-width: 768px) {
  .settings-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .setting-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .setting-control {
    width: 100%;
  }
  
  .language-select {
    width: 100%;
  }
}
</style>
