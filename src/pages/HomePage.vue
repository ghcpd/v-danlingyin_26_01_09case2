<template>
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__text">
        <p class="eyebrow">Conversational AI Portal</p>
        <h1>Talk with AstraMind. Prototype AI experiences instantly.</h1>
        <p class="lead">
          Chat, revisit history, and tweak preferences in a responsive, accessible interface designed for modern AI products.
        </p>
        <div class="hero__actions">
          <RouterLink class="cta" to="/chat">Start Chatting</RouterLink>
          <RouterLink class="ghost" to="/history">Browse History</RouterLink>
        </div>
      </div>
      <div class="hero__panel card" aria-hidden="true">
        <div class="panel__header">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="panel__body">
          <p class="panel__line">You · How does this AI respond?</p>
          <p class="panel__line">AstraMind · Replies are simulated locally with a realistic delay.</p>
          <p class="panel__line">You · Great, let's start a conversation.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="container features">
    <div v-for="feature in features" :key="feature.title" class="card feature">
      <div class="feature__icon" aria-hidden="true">{{ feature.icon }}</div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Real-time feel',
    description: 'Messages stream with a brief delay to mimic realistic AI responses.',
    icon: '⚡',
  },
  {
    title: 'Conversation history',
    description: 'Jump back into any thread with titles and timestamps for quick context.',
    icon: '🗂️',
  },
  {
    title: 'Personalized UI',
    description: 'Toggle dark/light themes and language settings with local persistence.',
    icon: '🎛️',
  },
  {
    title: 'Responsive layout',
    description: 'Optimized for desktops, tablets, and phones with accessible controls.',
    icon: '📱',
  },
];
</script>

<style scoped>
.hero {
  padding: 24px 0 48px;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  align-items: center;
}

.hero__text h1 {
  font-size: clamp(32px, 4vw, 46px);
  margin: 8px 0;
}

.lead {
  color: var(--muted);
  max-width: 620px;
  line-height: 1.6;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  color: var(--accent);
  margin: 0;
}

.hero__actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 14px;
  background: var(--accent);
  color: #0b1020;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--bg-panel);
  color: var(--text);
}

.hero__panel {
  padding: 0;
}

.panel__header {
  display: flex;
  gap: 6px;
  padding: 12px;
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff8a8a;
}

.dot:nth-child(2) {
  background: #ffc86b;
}

.dot:nth-child(3) {
  background: #8df5a6;
}

.panel__body {
  padding: 18px;
  display: grid;
  gap: 12px;
}

.panel__line {
  margin: 0;
  padding: 12px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  color: var(--text);
}

.features {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.feature {
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow);
  display: grid;
  gap: 8px;
}

.feature__icon {
  font-size: 20px;
}
</style>
