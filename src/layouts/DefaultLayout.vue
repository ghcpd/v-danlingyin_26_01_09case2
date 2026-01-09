<template>
  <div class="app-layout">
    <header class="header" role="banner">
      <div class="header-content">
        <router-link to="/" class="logo" aria-label="Go to home page">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2"/>
            <path d="M12 14C12 12.8954 12.8954 12 14 12H18C19.1046 12 20 12.8954 20 14V18C20 19.1046 19.1046 20 18 20H14C12.8954 20 12 19.1046 12 18V14Z" fill="currentColor"/>
            <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
          </svg>
          <span class="logo-text">AI Portal</span>
        </router-link>
        
        <nav class="nav" role="navigation" aria-label="Main navigation">
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          <router-link to="/chat" class="nav-link" active-class="active">Chat</router-link>
          <router-link to="/history" class="nav-link" active-class="active">History</router-link>
          <router-link to="/settings" class="nav-link" active-class="active">Settings</router-link>
        </nav>
      </div>
    </header>
    
    <main class="main-content" role="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
  transition: background-color 0.3s, border-color 0.3s;
}

:global(.dark) .header {
  background: #1f2937;
  border-bottom-color: #374151;
}

.header-content {
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #111827;
  font-weight: 600;
  font-size: 1.25rem;
  transition: color 0.2s;
}

:global(.dark) .logo {
  color: #f9fafb;
}

.logo:hover {
  color: #3b82f6;
}

.logo svg {
  flex-shrink: 0;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

:global(.dark) .nav-link {
  color: #9ca3af;
}

.nav-link:hover {
  color: #111827;
  background: #f3f4f6;
}

:global(.dark) .nav-link:hover {
  color: #f9fafb;
  background: #374151;
}

.nav-link.active {
  color: #3b82f6;
  background: #eff6ff;
}

:global(.dark) .nav-link.active {
  color: #60a5fa;
  background: #1e3a8a;
}

.main-content {
  flex: 1;
  margin-top: 64px;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
  }
  
  .logo-text {
    display: none;
  }
  
  .nav {
    gap: 0.5rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}
</style>
