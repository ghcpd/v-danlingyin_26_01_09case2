# AI Portal - Project Structure Visualization

```
Claude-Sonnet-4.5/
│
├── 📋 Configuration Files
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript strict config
│   ├── tsconfig.node.json        # Node TS config
│   ├── vite.config.ts            # Vite build config
│   ├── tailwind.config.js        # Tailwind CSS config
│   ├── postcss.config.js         # PostCSS config
│   ├── index.html                # HTML entry point
│   └── .gitignore                # Git ignore rules
│
├── 📚 Documentation
│   ├── README.md                 # Comprehensive docs
│   ├── SETUP.md                  # Quick start guide
│   ├── PROJECT_SUMMARY.md        # Implementation summary
│   └── evaluation_report.json   # Self-evaluation report
│
└── 📁 src/
    │
    ├── 🎨 Core App Files
    │   ├── App.vue               # Root component
    │   ├── main.ts               # Application entry
    │   └── style.css             # Global styles
    │
    ├── 📄 Pages (4 files)
    │   ├── HomePage.vue          # Landing page (/)
    │   ├── ChatPage.vue          # Chat interface (/chat)
    │   ├── HistoryPage.vue       # Conversation history (/history)
    │   └── SettingsPage.vue      # User settings (/settings)
    │
    ├── 🧩 Components (3 files)
    │   ├── ChatMessage.vue       # Individual message display
    │   ├── ConversationItem.vue  # History list item
    │   └── LoadingSpinner.vue    # Loading indicator
    │
    ├── 🏗️ Layouts (2 files)
    │   ├── AppHeader.vue         # Navigation header
    │   └── DefaultLayout.vue     # Main layout wrapper
    │
    ├── 🗺️ Router (1 file)
    │   └── index.ts              # Route config with lazy loading
    │
    ├── 🗄️ Stores (2 files)
    │   ├── conversation.ts       # Conversation state management
    │   └── settings.ts           # Settings state management
    │
    ├── 📘 Types (2 files)
    │   ├── index.ts              # Core TypeScript interfaces
    │   └── vue-shim.d.ts         # Vue type declarations
    │
    ├── 🛠️ Utils (1 file)
    │   └── helpers.ts            # Utility functions
    │
    └── 📊 Data (1 file)
        └── mockData.ts           # Mock conversation data

```

## 📊 Statistics

- **Total Files**: 31
- **Configuration**: 8 files
- **Documentation**: 4 files
- **Source Code**: 19 files
  - Pages: 4
  - Components: 3
  - Layouts: 2
  - Stores: 2
  - Types: 2
  - Utils: 1
  - Data: 1
  - Router: 1
  - Core: 3

## 🔗 Data Flow

```
User Interaction
      ↓
  [Pages]
      ↓
  [Components]
      ↓
  [Stores (Pinia)]
      ↓
  [Utils/Helpers]
      ↓
  [Mock Data]
      ↓
  Updated UI
```

## 🎯 Component Hierarchy

```
App.vue
  └── DefaultLayout.vue
        ├── AppHeader.vue
        │     └── Navigation Links
        │
        └── RouterView (Pages)
              ├── HomePage.vue
              │     └── Feature Cards
              │
              ├── ChatPage.vue
              │     ├── ChatMessage.vue (multiple)
              │     └── LoadingSpinner.vue
              │
              ├── HistoryPage.vue
              │     └── ConversationItem.vue (multiple)
              │
              └── SettingsPage.vue
                    └── Theme/Language Controls
```

## 🔄 State Management Flow

```
[User Action]
      ↓
[Component Event]
      ↓
[Store Action]
      ↓
[State Update]
      ↓
[Reactive Re-render]
      ↓
[Updated UI]
```

### Conversation Store
- Creates new conversations
- Manages messages
- Handles AI responses
- Tracks current conversation

### Settings Store
- Manages theme (light/dark)
- Handles language preference
- Persists to localStorage
- Applies theme to DOM

## 🛣️ Routing Structure

```
/ (Home)
├── /chat (Chat)
├── /history (History)
└── /settings (Settings)
```

All routes are lazy-loaded for optimal performance.

## 💾 Data Persistence

```
Settings Store
      ↓
  localStorage
      ↓
  Persists across sessions

Conversations Store
      ↓
  Memory (Pinia)
      ↓
  Resets on page refresh
```

## 🎨 Styling Architecture

```
Tailwind CSS
      ↓
  Global Styles (style.css)
      ↓
  Component Scoped Styles
      ↓
  Dark Mode Classes
      ↓
  Responsive Breakpoints
```

## 📱 Responsive Breakpoints

```
Mobile     Tablet      Desktop
< 768px    768-1024px  > 1024px
   │           │           │
   └─────┬─────┴──────┬────┘
         │            │
    Mobile Menu   Full Nav
    Stack Layout  Side-by-side
```

## 🔐 Type Safety Layer

```
TypeScript Interfaces
      ↓
  Strict Mode
      ↓
  Explicit Types
      ↓
  No 'any' types
      ↓
  Compile-time Safety
```
