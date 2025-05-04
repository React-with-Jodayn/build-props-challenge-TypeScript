# 📦 Props and Reusable Components in React (TypeScript)

This project demonstrates how to build **reusable components** in React using `props` and `children` with TypeScript.

---

## 🚀 What I Learned

- How to pass props to components (`title`, `body`, and `children`)
- Conditional rendering based on prop values (e.g., hide component if no title)
- Styling components using external CSS
- Building modular, reusable UI blocks like `Post`, `Button`, and `Header`

---

## 🧩 Component Overview

### `App.tsx`
- Main entry point that renders all components.
- Stores post data and conditionally displays components like `ButtonHolder`.

### `Post.tsx`
- Displays a post card with a title and body.
- Uses `props` and optional `children` to insert custom content above the title.
- Skips rendering if `title` is empty.

### `Button.tsx`
- Reusable button component styled via CSS.
- Accepts a `btnName` as label and `children` to include icons or other elements.

### `Header.tsx`
- Fixed header with inline styling.

### `ButtonHolder` (inside `App.tsx`)
- Renders a styled panel containing multiple `Button` components with different children (icons, headings).

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Font Awesome (for icons)

---

## 🧪 Why This Project Matters

This project helped reinforce:
- Clean code practices using props
- Type safety with optional props and custom types
- Structuring pages into small, testable UI components
