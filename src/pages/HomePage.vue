<template>
  <DefaultLayout>
    <div class="home-page">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to AI Portal</h1>
          <p class="hero-description">
            Your intelligent AI assistant is ready to help. Experience natural conversations, 
            get instant answers, and unlock the power of artificial intelligence.
          </p>
          <router-link to="/chat" class="cta-button" aria-label="Start chatting with AI">
            Start Chatting
          </router-link>
        </div>
      </section>

      <section class="features-section">
        <h2 class="section-title">Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon" aria-hidden="true">💬</div>
            <h3 class="feature-title">Natural Conversations</h3>
            <p class="feature-description">
              Engage in human-like conversations with our advanced AI assistant
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon" aria-hidden="true">⚡</div>
            <h3 class="feature-title">Instant Responses</h3>
            <p class="feature-description">
              Get quick and accurate answers to your questions in real-time
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon" aria-hidden="true">📚</div>
            <h3 class="feature-title">Conversation History</h3>
            <p class="feature-description">
              Access your past conversations anytime and continue where you left off
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon" aria-hidden="true">🎨</div>
            <h3 class="feature-title">Customizable Experience</h3>
            <p class="feature-description">
              Personalize your experience with theme and language preferences
            </p>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<style scoped>
.home-page {
  min-height: calc(100vh - 64px);
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 1.5rem;
  text-align: center;
}

:global(.dark) .hero-section {
  background: linear-gradient(135deg, #4c5fd7 0%, #5c3a82 100%);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 0.75rem;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.cta-button:active {
  transform: translateY(0);
}

.features-section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #111827;
}

:global(.dark) .section-title {
  color: #f9fafb;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

:global(.dark) .feature-card {
  background: #1f2937;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

:global(.dark) .feature-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
}

:global(.dark) .feature-title {
  color: #f9fafb;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
}

:global(.dark) .feature-description {
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-section {
    padding: 4rem 1rem;
  }
  
  .features-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
