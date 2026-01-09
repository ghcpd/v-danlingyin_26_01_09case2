import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { UISettings, Theme, Language } from '@/types'

export const useSettingsStore = defineStore('settings', () => {
  const theme = ref<Theme>('light')
  const language = ref<Language>('en')

  const setTheme = (newTheme: Theme): void => {
    theme.value = newTheme
    applyTheme(newTheme)
    saveToLocalStorage()
  }

  const setLanguage = (newLanguage: Language): void => {
    language.value = newLanguage
    saveToLocalStorage()
  }

  const toggleTheme = (): void => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  const applyTheme = (themeValue: Theme): void => {
    if (themeValue === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const saveToLocalStorage = (): void => {
    try {
      const settings: UISettings = {
        theme: theme.value,
        language: language.value
      }
      localStorage.setItem('ai-portal-settings', JSON.stringify(settings))
    } catch (error) {
      console.error('Failed to save settings to localStorage:', error)
    }
  }

  const loadFromLocalStorage = (): void => {
    try {
      const stored = localStorage.getItem('ai-portal-settings')
      if (stored) {
        const settings: UISettings = JSON.parse(stored)
        theme.value = settings.theme
        language.value = settings.language
        applyTheme(settings.theme)
      }
    } catch (error) {
      console.error('Failed to load settings from localStorage:', error)
    }
  }

  loadFromLocalStorage()

  return {
    theme,
    language,
    setTheme,
    setLanguage,
    toggleTheme
  }
})
