# Cemzo Marketplace - React Developer Intern Technical Assignment

A premium, modern, and highly optimized frontend product marketplace application built using **React, Vite, TypeScript, and Tailwind CSS v4**. This application connects to the FakeStoreAPI to provide a fast, fluid user experience complete with advanced searching, filtering, and deep state management.

## 🚀 Live Demo

- **Netlify Deployment:** [View Live Application Demo](https://cemzo-marketplace.netlify.app/)

## 🏗️ Architectural Overview & Design Patterns

This project goes beyond fundamental React configurations to demonstrate production-grade software engineering principles:

- **Global State Architecture (Zustand):** Used to decouple global concerns like dark/light layout themes, modal view contexts, and centralized global configurations away from the rendering view trees.
- **Performance Optimization (Derived State & Custom Hooks):** \* Implements a custom `useDebounce` hook to optimize user search performance and mitigate cascading re-renders during text input events.
  - Avoids the common antipattern of syncing state through `useEffect`. Instead, filters and active pagination states are calculated on-the-fly as high-performance **Derived State** during render cycles.
- **Clean Separation of Concerns:** Core API calls are entirely abstracted into an isolated infrastructure service layer (`src/services/api.ts`), ensuring UI components remain clean and stateless.
- **Responsive UI/UX Grid Layout:** Designed from the ground up using Tailwind CSS v4 utility classes. Features a premium white/midnight theme background system and automatically scales from a single-column layout on mobile devices to a polished **3-card-in-a-row layout** on large screens.

---

## 📁 Project Folder Structure

```text
src/
├── components/         # Reusable atomic UI elements
│   ├── ProductCard.tsx # Individual premium product display card
│   ├── SearchBar.tsx   # Controlled debounced input component
│   ├── CategoryFilter.tsx # Category dropdown control element
│   ├── ProductModal.tsx # Premium overview product detailed viewport overlay
│   └── Loader.tsx      # Fluid Tailwind CSS skeleton loader animation
├── pages/
│   └── Home.tsx        # Dashboard orchestrator layout view
├── services/
│   └── api.ts          # Strongly-typed fetch connection configuration
├── hooks/
│   └── useDebounce.ts  # Custom performance search debounce script
├── store/
│   └── useStore.ts     # Zustand global store configuration script
├── App.tsx             # Core mount file config
└── main.tsx            # Application entry configuration
```

1. Prerequisites :
   Ensure you have Node.js (v18.0 or higher) and npm installed on your computer.

2. Clone the Repository

```
git clone <PASTE_YOUR_GITHUB_REPOSITORY_URL_HERE>
cd cemzo-product-app
```

3. Install Package Dependencies
   Download and install all project libraries, configuration adapters, and typescript definitions: `npm install`

4. Launch the Local Development Server:
   Execute the application compiled via Vite's super-fast build engine: `npm run dev`
