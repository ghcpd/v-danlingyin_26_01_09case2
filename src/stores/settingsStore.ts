import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { UISettings, ThemeOption } from '@/types/settings';

const STORAGE_KEY = 'ai-portal-settings';

const defaultSettings: UISettings = {
  theme: 'light',
  language: 'en',
};

const loadSettings = (): UISettings => {
  if (typeof window === 'undefined') return defaultSettings;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultSettings;
  try {
    const parsed = JSON.parse(raw) as UISettings;
    return { ...defaultSettings, ...parsed };
  } catch (error) {
    console.error('Failed to parse settings', error);
    return defaultSettings;
  }
};

const applyTheme = (theme: ThemeOption): void => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
};

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<UISettings>(loadSettings());

  const persist = (value: UISettings): void => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  };

  const setTheme = (theme: ThemeOption): void => {
    settings.value = { ...settings.value, theme };
    applyTheme(theme);
    persist(settings.value);
  };

  const setLanguage = (language: UISettings['language']): void => {
    settings.value = { ...settings.value, language };
    persist(settings.value);
  };

  watch(
    settings,
    (value) => {
      applyTheme(value.theme);
      persist(value);
    },
    { deep: true, immediate: true },
  );

  return {
    settings,
    setTheme,
    setLanguage,
  };
});
