# Cemzo Marketplace - React Developer Intern Assignment

A responsive React application built with Vite and Tailwind CSS that fetches items from the FakeStoreAPI. It features real-time debounced searching, category filtering, loading/error states, and a detailed product viewing modal.

## 🚀 Live Demo

[View Live Deployment Here](PASTE_YOUR_VERCEL_OR_NETLIFY_LINK_HERE)

## 🛠️ Tech Stack & Architecture

- **Framework:** React 18 (via Vite)
- **Styling:** Tailwind CSS (Fully Responsive layout grid)
- **Data Layer:** Isolate API fetch functions (`src/services/api.js`)
- **Optimization:** Custom React debounce hook (`src/hooks/useDebounce.js`)

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (Card, Modal, SearchBar, Filter, Loader)
├── pages/            # View wrappers (Home.jsx orchestrates data & layout)
├── services/         # Decoupled API communications layer
├── hooks/            # Custom utility hooks (useDebounce)
└── App.jsx           # App initialization
```
