<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Title -->
        <div class="flex items-center space-x-4">
          <router-link to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">AI</span>
            </div>
            <span class="text-xl font-semibold text-gray-900 dark:text-white">AI Portal</span>
          </router-link>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <router-link
            to="/"
            class="nav-link"
            active-class="nav-link-active"
          >
            Home
          </router-link>
          <router-link
            to="/chat"
            class="nav-link"
            active-class="nav-link-active"
          >
            Chat
          </router-link>
          <router-link
            to="/history"
            class="nav-link"
            active-class="nav-link-active"
          >
            History
          </router-link>
          <router-link
            to="/settings"
            class="nav-link"
            active-class="nav-link-active"
          >
            Settings
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
          aria-expanded="isMobileMenuOpen"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
      >
        <nav class="flex flex-col space-y-2">
          <router-link
            to="/"
            class="mobile-nav-link"
            active-class="mobile-nav-link-active"
            @click="closeMobileMenu"
          >
            Home
          </router-link>
          <router-link
            to="/chat"
            class="mobile-nav-link"
            active-class="mobile-nav-link-active"
            @click="closeMobileMenu"
          >
            Chat
          </router-link>
          <router-link
            to="/history"
            class="mobile-nav-link"
            active-class="mobile-nav-link-active"
            @click="closeMobileMenu"
          >
            History
          </router-link>
          <router-link
            to="/settings"
            class="mobile-nav-link"
            active-class="mobile-nav-link-active"
            @click="closeMobileMenu"
          >
            Settings
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium;
}

.nav-link-active {
  @apply text-primary-600 dark:text-primary-400;
}

.mobile-nav-link {
  @apply block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors;
}

.mobile-nav-link-active {
  @apply bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400;
}
</style>
