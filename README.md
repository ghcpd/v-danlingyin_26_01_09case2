# AI Portal

A modern, production-ready AI assistant web application built with Vue 3, TypeScript, and Tailwind CSS. This project provides a ChatGPT-style interface for engaging conversations with an AI assistant.

## 🎯 Product Overview

AI Portal is a web-based platform that enables users to interact with an AI assistant through an intuitive chat interface. The application features conversation management, persistent settings, and a responsive design that works seamlessly across all devices.

## ✨ Features

- **Interactive Chat Interface**: Real-time messaging with mock AI responses
- **Conversation Management**: Create, view, and manage multiple conversations
- **Conversation History**: Browse and continue past conversations
- **Customizable Settings**: Dark/Light theme toggle and language preferences
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Accessible UI**: ARIA labels, keyboard navigation, and semantic HTML
- **State Management**: Centralized state with Pinia
- **Type Safety**: Full TypeScript support with strict mode
- **Modern Architecture**: Composition API, lazy-loaded routes, and clean code structure

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: Vue Router v4 (with lazy loading)
- **State Management**: Pinia
- **Package Manager**: pnpm

## 📁 Project Structure

```
ai-portal/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ChatMessage.vue  # Individual chat message display
│   │   ├── ConversationItem.vue  # Conversation list item
│   │   └── LoadingSpinner.vue    # Loading state indicator
│   ├── pages/              # Page-level views
│   │   ├── HomePage.vue    # Landing page with features
│   │   ├── ChatPage.vue    # Main chat interface
│   │   ├── HistoryPage.vue # Conversation history list
│   │   └── SettingsPage.vue # User settings
│   ├── layouts/            # Layout components
│   │   ├── AppHeader.vue   # Global navigation header
│   │   └── DefaultLayout.vue # Main layout wrapper
│   ├── router/             # Vue Router configuration
│   │   └── index.ts        # Route definitions (lazy-loaded)
│   ├── stores/             # Pinia stores
│   │   ├── conversation.ts # Conversation state management
│   │   └── settings.ts     # Settings state management
│   ├── types/              # TypeScript type definitions
│   │   ├── index.ts        # Core interfaces
│   │   └── vue-shim.d.ts   # Vue module declarations
│   ├── utils/              # Helper utilities
│   │   └── helpers.ts      # Utility functions
│   ├── data/               # Mock data
│   │   └── mockData.ts     # Sample conversations
│   ├── App.vue             # Root component
│   ├── main.ts             # Application entry point
│   └── style.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

### Setup Steps

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   pnpm dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

### Type Checking

```bash
pnpm type-check
```

## 🎮 User Flow

### 1. Home Page (`/`)
- Welcome screen with product introduction
- Feature highlights showcasing key capabilities
- "Start Chatting" CTA button leading to chat interface

### 2. Chat Page (`/chat`)
- **New Conversation**: Click "New Chat" to start fresh
- **Send Messages**: Type in the input field and press Enter or click Send
- **AI Responses**: Mock AI responses appear after 1-2 seconds
- **Auto-scroll**: Automatically scrolls to latest message
- **Loading State**: Visual indicator when AI is "thinking"

### 3. History Page (`/history`)
- View all past conversations sorted by most recent
- Click any conversation to open it in Chat Page
- Delete conversations with confirmation dialog
- Empty state with CTA when no conversations exist

### 4. Settings Page (`/settings`)
- **Theme Toggle**: Switch between Light and Dark modes
- **Language Selection**: Choose from 5 languages (mock implementation)
- **Persistent Settings**: Saved to localStorage
- **Success Feedback**: Visual confirmation when settings are saved

## 🧪 Manual UI Validation Steps

### Functionality Testing

1. **Navigation**:
   - ✅ Click all nav links (Home, Chat, History, Settings)
   - ✅ Verify URL changes and page renders correctly
   - ✅ Test mobile menu (hamburger icon)

2. **Chat Functionality**:
   - ✅ Send a message and verify AI response appears
   - ✅ Send multiple messages in sequence
   - ✅ Verify loading spinner during AI response
   - ✅ Check auto-scroll to latest message
   - ✅ Create new conversation
   - ✅ Verify message timestamps

3. **Conversation History**:
   - ✅ View list of conversations
   - ✅ Click a conversation to open in Chat
   - ✅ Delete a conversation
   - ✅ Verify empty state when no conversations exist

4. **Settings**:
   - ✅ Toggle between Light/Dark themes
   - ✅ Verify theme persists after page reload
   - ✅ Change language selection
   - ✅ Click "Save Settings" and verify success message

### Responsive Design Testing

1. **Desktop** (1920px+):
   - ✅ Full navigation bar visible
   - ✅ Optimal content width
   - ✅ Proper spacing and layout

2. **Tablet** (768px - 1024px):
   - ✅ Responsive layout adjustments
   - ✅ Touch-friendly button sizes
   - ✅ Readable text sizes

3. **Mobile** (< 768px):
   - ✅ Hamburger menu appears
   - ✅ Mobile navigation works
   - ✅ Chat messages properly sized
   - ✅ Input area accessible
   - ✅ No horizontal scrolling

### Accessibility Testing

1. **Keyboard Navigation**:
   - ✅ Tab through all interactive elements
   - ✅ Enter key works on buttons
   - ✅ Focus indicators visible

2. **Screen Reader**:
   - ✅ ARIA labels present on buttons
   - ✅ Semantic HTML structure
   - ✅ Alt text on icons (via aria-label)

3. **Color Contrast**:
   - ✅ Text readable in both themes
   - ✅ Sufficient contrast ratios

### TypeScript Validation

```bash
pnpm type-check
```

Expected: No TypeScript errors, all types correctly inferred.

## 🔧 Technical Highlights

### Type Safety
- Strict TypeScript mode enabled
- No use of `any` type
- Explicit interfaces for all data models
- Type-safe router and stores

### Performance
- Lazy-loaded routes for optimal bundle size
- Efficient component splitting
- Minimal re-renders with computed properties
- Debounced input handling where applicable

### Code Quality
- Composition API with `<script setup>`
- DRY principles applied
- Clear component boundaries
- Consistent naming conventions
- Comments only for complex logic

### State Management
- Centralized state with Pinia stores
- Reactive state updates
- Persistent settings via localStorage
- Proper TypeScript typing for stores

### Styling
- Tailwind CSS utility classes
- Dark mode support
- Responsive breakpoints
- Custom scrollbar styling
- Smooth transitions

## 🚫 Known Limitations

1. **Mock Data**: All AI responses are mocked; no real API integration
2. **Language Settings**: Language selection is cosmetic (UI text not translated)
3. **Authentication**: No user authentication or multi-user support
4. **Conversation Search**: No search functionality in history
5. **Message Editing**: Cannot edit or delete individual messages
6. **Export Feature**: No conversation export capability
7. **File Uploads**: No support for image or file attachments

## 📝 Implementation Notes

### Mock AI Responses
The application simulates AI responses with:
- 1-2.5 second delay for realistic typing effect
- Context-aware responses for common phrases (hello, help, thank you)
- Randomized responses from a pool of templates
- Automatic conversation title generation from first message

### State Persistence
- **Settings**: Stored in localStorage and persisted across sessions
- **Conversations**: Stored in Pinia store (memory only, resets on page refresh)
- **Current Conversation**: Tracked in Pinia store for navigation between pages

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Development Guidelines

### Adding New Features
1. Define TypeScript types in `src/types/`
2. Create reusable components in `src/components/`
3. Add state management in `src/stores/` if needed
4. Create page components in `src/pages/`
5. Register routes in `src/router/index.ts` with lazy loading

### Code Style
- Use Composition API with `<script setup lang="ts">`
- Prefer `const` over `let`
- Use explicit return types for functions
- Add ARIA labels for accessibility
- Follow existing component structure patterns

## 📄 License

This is a demonstration project created for UI case evaluation purposes.

## 🙋 Support

For questions or issues, please refer to the evaluation documentation.

---

**Built with ❤️ using Vue 3 + TypeScript + Vite**
