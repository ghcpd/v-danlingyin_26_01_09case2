# AstraMind AI Portal

A production-style AI portal built with Vue 3 + TypeScript. It mimics Doubao/ChatGPT-style flows: multi-page navigation, responsive chat UI, conversation history, and local settings with mock data only.

## Product Overview
- Home: Intro, CTA, feature highlights.
- Chat: Real-time-feel chat with auto-scroll, mock AI replies, loading state.
- History: Conversation list with titles and last updated time; opens in chat.
- Settings: Dark/Light toggle and language selector with local persistence.

## Tech Stack
- Vue 3 (Composition API) + TypeScript (strict)
- Vite + pnpm
- Pinia for state
- Vue Router v4 with lazy-loaded routes
- Scoped CSS with custom design system

## Getting Started
1. Install dependencies
   ```bash
   pnpm install
   ```
2. Run dev server
   ```bash
   pnpm dev
   ```
3. Build for production
   ```bash
   pnpm build
   ```
4. Preview production build
   ```bash
   pnpm preview
   ```

## Project Structure
```
src/
  assets/        # Global styles
  components/    # Reusable UI pieces (nav, chat bubbles, toggles, etc.)
  composables/   # Auto-scroll helper
  data/          # Mock conversations and responses
  layouts/       # App shell with header
  pages/         # Home, Chat, History, Settings
  router/        # Vue Router configuration
  stores/        # Pinia stores for conversations and settings
  types/         # TypeScript models
  utils/         # ID + time helpers
App.vue
main.ts
```

## User Flows
- Start chatting from Home → Chat page opens with current/new conversation.
- Send a message → mock AI reply appears with delay; auto-scrolls to newest message.
- Visit History → pick a conversation to resume in Chat.
- Open Settings → toggle theme, change language; preferences persist locally.

## Manual Validation
- ✅ Navigation: Header links switch between all pages.
- ✅ Chat: Messages align left/right by role; loading state visible while replying.
- ✅ Auto-scroll: Latest message stays in view after send.
- ✅ History: Cards show title + relative time; clicking opens chat.
- ✅ Settings: Dark mode toggles document theme; language change stores locally.
- ✅ Responsiveness: Test at <=480px, 768px, and desktop widths.
- ✅ Accessibility: Semantic landmarks, focusable controls, aria labels on chat input.

## Known Limitations
- AI responses are mocked locally (no backend calls).
- Language selection is cosmetic; copy remains English.
- No authentication or multi-user persistence.
