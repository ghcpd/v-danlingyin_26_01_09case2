<template>
  <header class="header">
    <div class="container header__inner">
      <div class="brand" aria-label="AI Portal">
        <div class="brand__mark" aria-hidden="true">∑</div>
        <div class="brand__text">
          <span class="brand__title">AstraMind</span>
          <span class="brand__subtitle">AI Portal</span>
        </div>
      </div>
      <nav aria-label="Primary">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink :to="item.path" :class="['nav-link', { active: isActive(item.path) }]">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface NavItem {
  label: string;
  path: string;
}

const route = useRoute();

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Chat', path: '/chat' },
  { label: 'History', path: '/history' },
  { label: 'Settings', path: '/settings' },
];

const isActive = (path: string): boolean => route.path.startsWith(path);
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--bg-panel) 90%, transparent);
  border-bottom: 1px solid var(--border);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand__mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #4f8dff, #7fd1ff);
  color: #0b1020;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand__title {
  font-weight: 700;
  letter-spacing: 0.4px;
}

.brand__subtitle {
  font-size: 12px;
  color: var(--muted);
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 12px;
  padding: 0;
  margin: 0;
}

.nav-link {
  padding: 10px 14px;
  border-radius: 12px;
  color: var(--muted);
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--text);
  outline: none;
}

.nav-link.active {
  background: var(--accent);
  color: #0b1020;
  box-shadow: var(--shadow);
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .nav-list {
    gap: 6px;
  }

  .nav-link {
    padding: 8px 10px;
  }
}
</style>
