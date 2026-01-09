import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Settings, ThemeMode, Language } from '@/types'

const SETTINGS_KEY = 'ai-portal-settings'

const defaultSettings: Settings = {
  theme: 'light',
  language: 'en'
}

const loadSettings = (): Settings => {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY)
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) }
    }
  } catch (error) {
    console.error('Failed to load settings:', error)
  }
  return defaultSettings
}

const saveSettings = (settings: Settings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
  } catch (error) {
    console.error('Failed to save settings:', error)
  }
}

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<Settings>(loadSettings())

  const setTheme = (theme: ThemeMode): void => {
    settings.value.theme = theme
    applyTheme(theme)
  }

  const setLanguage = (language: Language): void => {
    settings.value.language = language
  }

  const applyTheme = (theme: ThemeMode): void => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Apply theme on initialization
  applyTheme(settings.value.theme)

  // Watch for settings changes and persist them
  watch(settings, (newSettings) => {
    saveSettings(newSettings)
  }, { deep: true })

  return {
    settings,
    setTheme,
    setLanguage
  }
})
