# AI Portal - Quick Start Guide

## Installation & Running

### 1. Install pnpm (if not already installed)
```powershell
npm install -g pnpm
```

### 2. Install dependencies
```powershell
pnpm install
```

### 3. Start development server
```powershell
pnpm dev
```

### 4. Open in browser
Navigate to: http://localhost:3000

## Build for Production

```powershell
pnpm build
```

## Type Check

```powershell
pnpm type-check
```

## Project Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm type-check` - Run TypeScript type checking

## What to Test

1. **Home Page**: Click "Start Chatting" button
2. **Chat Page**: Send messages and see AI responses
3. **History Page**: View past conversations
4. **Settings Page**: Toggle dark mode and change language
5. **Mobile View**: Resize browser to test responsive design

## Expected Behavior

- AI responds in 1-2.5 seconds
- Messages auto-scroll to bottom
- Settings persist after page reload
- All navigation works smoothly
- Dark mode applies instantly

## Troubleshooting

If you encounter any issues:

1. Clear node_modules and reinstall:
   ```powershell
   Remove-Item -Recurse -Force node_modules
   pnpm install
   ```

2. Check Node.js version (should be 18+):
   ```powershell
   node --version
   ```

3. Check pnpm version (should be 8+):
   ```powershell
   pnpm --version
   ```
