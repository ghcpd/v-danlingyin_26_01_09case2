# AI Portal

A modern, production-ready AI chat application built with Vue 3, TypeScript, and Vite. Experience natural conversations with an intelligent AI assistant through a clean, responsive interface.

## 📋 Product Overview

AI Portal is a web-based AI chat platform similar to ChatGPT and Doubao, designed to provide users with an intuitive interface for interacting with an AI assistant. The application features real-time chat, conversation history management, and customizable settings.

## ✨ Features

- **Natural Conversations**: Engage in human-like conversations with mock AI responses
- **Instant Responses**: Real-time chat with simulated AI response delays
- **Conversation History**: Access and manage all your past conversations
- **Customizable Experience**: Toggle between light/dark themes and language preferences
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop
- **Accessibility**: WCAG-compliant with keyboard navigation and ARIA labels
- **Persistent Storage**: Conversations and settings saved to localStorage

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (Strict Mode)
- **Build Tool**: Vite
- **Package Manager**: pnpm

### Key Libraries
- **Router**: Vue Router v4 (with lazy-loaded routes)
- **State Management**: Pinia
- **Styling**: Scoped CSS with dark mode support

## 📁 Project Structure

```
ai-portal/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── ChatMessage.vue  # Individual chat message component
│   ├── layouts/             # Layout components
│   │   └── DefaultLayout.vue # Global layout with header
│   ├── pages/               # Page-level views
│   │   ├── HomePage.vue     # Landing page
│   │   ├── ChatPage.vue     # Chat interface
│   │   ├── HistoryPage.vue  # Conversation history
│   │   └── SettingsPage.vue # Settings page
│   ├── router/              # Vue Router configuration
│   │   └── index.ts         # Route definitions
│   ├── stores/              # Pinia stores
│   │   ├── conversation.ts  # Conversation state management
│   │   └── settings.ts      # UI settings management
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Core interfaces
│   ├── utils/               # Helper utilities
│   │   └── mockAI.ts        # Mock AI response generator
│   ├── App.vue              # Root component
│   └── main.ts              # Application entry point
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript config for Node
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
pnpm install
```

### Development

Start the development server:
```bash
pnpm dev
```

The application will open automatically at `http://localhost:3000`

### Build

Build for production:
```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build:
```bash
pnpm preview
```

### Type Checking

Run TypeScript type checking:
```bash
pnpm type-check
```

## 👤 User Flow

### 1. Home Page
- User lands on the home page with product introduction
- Sees feature highlights
- Clicks "Start Chatting" CTA button

### 2. Chat Experience
- User is taken to the chat page
- Types a message in the input field
- Clicks send button or presses Enter
- Sees their message appear on the right side
- After a brief delay (0.8-2 seconds), receives an AI response on the left side
- Messages auto-scroll to the latest
- Can continue the conversation indefinitely

### 3. Conversation Management
- All messages are automatically saved to localStorage
- First user message becomes the conversation title
- User can navigate to History page to view all conversations
- Can click any conversation to open it in the chat page
- Can delete conversations with confirmation

### 4. Settings
- User can toggle between light and dark themes
- Can select interface language (English/中文)
- Settings are persisted to localStorage
- Theme changes apply immediately across the entire app

## 🧪 Manual UI Validation Steps

### Basic Functionality
1. ✅ Open the app - home page loads correctly
2. ✅ Click "Start Chatting" - navigates to chat page
3. ✅ Type a message and send - message appears on right
4. ✅ Wait for response - AI message appears on left after delay
5. ✅ Navigate to History - see saved conversation
6. ✅ Click conversation in history - opens in chat page
7. ✅ Delete conversation - confirmation appears, deletes correctly

### Theme & Settings
8. ✅ Go to Settings page
9. ✅ Toggle theme - UI changes to dark/light mode
10. ✅ Change language - dropdown updates selection
11. ✅ Refresh page - settings persist

### Responsive Design
12. ✅ Resize browser to mobile width (< 768px)
13. ✅ Check header navigation - compact layout
14. ✅ Verify chat messages - proper width on mobile
15. ✅ Test all pages on mobile - fully functional

### Accessibility
16. ✅ Tab through navigation - focus indicators visible
17. ✅ Use Enter/Space on buttons - activates correctly
18. ✅ Screen reader labels - ARIA labels present
19. ✅ Keyboard navigation - fully navigable without mouse

### Performance
20. ✅ Check initial load time - fast first paint
21. ✅ Navigate between pages - instant with lazy loading
22. ✅ Send multiple messages - smooth scrolling
23. ✅ No console errors - clean console

## 🔧 Technical Implementation Details

### State Management
- **Pinia Stores**: Two main stores for separation of concerns
  - `conversation`: Manages all chat and conversation data
  - `settings`: Handles UI preferences (theme, language)
- **LocalStorage**: Automatic persistence of all state
- **Reactivity**: Computed properties for efficient updates

### Router Configuration
- **Lazy Loading**: All routes use dynamic imports
- **Meta Tags**: Each route sets appropriate page title
- **404 Handling**: Catch-all route redirects to home

### TypeScript
- **Strict Mode**: Enabled for maximum type safety
- **No `any`**: All types explicitly defined
- **Interfaces**: Complete type definitions for all data structures

### Styling Approach
- **Scoped Styles**: Component-level CSS isolation
- **CSS Variables**: Consistent color palette
- **Dark Mode**: Class-based theme switching
- **Responsive**: Mobile-first breakpoints

### Mock AI
- **Response Generation**: Context-aware mock responses
- **Realistic Delays**: 0.8-2 second random delays
- **Varied Responses**: Multiple response templates
- **Follow-up Questions**: 50% chance of follow-up prompts

## ⚠️ Known Limitations

1. **Mock AI Only**: No real AI backend - responses are simulated
2. **No Authentication**: No user login system
3. **LocalStorage Only**: Data stored locally, not synced across devices
4. **No Real-time Sync**: Multiple tabs don't sync in real-time
5. **Limited Language Support**: UI text not fully internationalized (only settings labels)
6. **No Message Editing**: Cannot edit messages after sending
7. **No File Uploads**: Text-only conversations
8. **No Export**: Cannot export conversation history

## 🎯 Implementation Completeness

### ✅ Fully Implemented
- All 4 pages (Home, Chat, History, Settings)
- Global layout with fixed header
- Responsive design for all screen sizes
- Dark/light theme toggle
- Language selection (mock)
- Conversation persistence
- Mock AI responses with delays
- Auto-scroll to latest message
- Conversation history with delete
- Lazy-loaded routes
- Full TypeScript coverage
- Accessibility features

### 📊 Code Quality
- **TypeScript**: 100% coverage, strict mode, no `any`
- **Vue 3**: Composition API with `<script setup>`
- **Components**: Properly separated and reusable
- **Styling**: Consistent, responsive, themed
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This is a demonstration project created for UI evaluation purposes.

## 🤝 Contributing

This is an evaluation project. Not accepting contributions.

---

Built with ❤️ using Vue 3 + TypeScript + Vite
