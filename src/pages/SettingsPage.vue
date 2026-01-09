<template>
  <div class="min-h-[calc(100vh-4rem)] py-8">
    <div class="container mx-auto px-4 max-w-2xl">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Customize your AI Portal experience
        </p>
      </div>

      <div class="space-y-6">
        <!-- Theme Setting -->
        <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Theme
              </h2>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Choose your preferred color theme
              </p>
            </div>
          </div>

          <div class="flex space-x-3">
            <button
              @click="setTheme('light')"
              :class="[
                'flex-1 px-4 py-3 rounded-lg border-2 transition-all',
                settings.theme === 'light'
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              ]"
              aria-label="Light theme"
            >
              <div class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span class="font-medium text-gray-900 dark:text-white">Light</span>
              </div>
            </button>

            <button
              @click="setTheme('dark')"
              :class="[
                'flex-1 px-4 py-3 rounded-lg border-2 transition-all',
                settings.theme === 'dark'
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              ]"
              aria-label="Dark theme"
            >
              <div class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span class="font-medium text-gray-900 dark:text-white">Dark</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Language Setting -->
        <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div class="mb-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Language
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Select your preferred language
            </p>
          </div>

          <select
            v-model="currentLanguage"
            @change="handleLanguageChange"
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            aria-label="Language selection"
          >
            <option
              v-for="lang in languages"
              :key="lang.value"
              :value="lang.value"
            >
              {{ lang.label }}
            </option>
          </select>
        </div>

        <!-- Save Button -->
        <div class="flex justify-end">
          <button
            @click="handleSave"
            class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Save Settings</span>
          </button>
        </div>

        <!-- Success Message -->
        <div
          v-if="showSuccessMessage"
          class="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 flex items-center space-x-3"
        >
          <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-green-800 dark:text-green-200 font-medium">
            Settings saved successfully!
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import type { ThemeMode, Language } from '@/types'

const settingsStore = useSettingsStore()
const showSuccessMessage = ref(false)

const settings = computed(() => settingsStore.settings)
const currentLanguage = ref(settings.value.language)

const languages = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文 (Chinese)' },
  { value: 'es', label: 'Español (Spanish)' },
  { value: 'fr', label: 'Français (French)' },
  { value: 'ja', label: '日本語 (Japanese)' }
]

const setTheme = (theme: ThemeMode): void => {
  settingsStore.setTheme(theme)
}

const handleLanguageChange = (): void => {
  settingsStore.setLanguage(currentLanguage.value as Language)
}

const handleSave = (): void => {
  showSuccessMessage.value = true
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}
</script>
