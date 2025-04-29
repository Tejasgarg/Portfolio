
# TEJAS GARG — Portfolio

A clean, animated, and responsive portfolio built with **Next.js**, **TailwindCSS**, and **Framer Motion**. Designed for minimal, modern presentation with support for dynamic content and fast performance.

---

## Tech Stack

### Frontend
- **[Next.js](https://nextjs.org/)** — React framework with app directory structure (`/src/app`) and server/client components.
- **[React](https://reactjs.org/)** — Component-based UI library.
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for styling.
- **[Framer Motion](https://www.framer.com/motion/)** — Powerful animations and transitions.
- **[Lucide React](https://lucide.dev/)** — Icon set used via `lucide-react`.

### Tooling & Structure
- **Modular Folder Structure**: Organised inside `src/` with:
  - `app/`: Handles routing (`page.tsx`, nested routes like `works/stone-mind`)
  - `components/`: Reusable UI components (buttons, headers, forms, etc.)
  - `lib/`: Utility functions or configuration (`fonts.ts`)
  - `public/`: Static assets.
- **Image Optimization**: Utilizes `next/image` for optimized loading.
- **Responsive Design**: Works beautifully on desktop and mobile.

---

## Project Structure

```
src/
│
├── app/                     # Route-specific pages
│   ├── about/              # /about
│   ├── contact/            # /contact
│   ├── works/              # /works and individual project routes
│   └── page.tsx            # Homepage
│
├── components/             # Reusable UI elements
│   ├── ui/                 # Buttons, inputs, forms, sheets
│   ├── Header.tsx          # Site header
│   ├── Footer.tsx          # Site footer
│   └── MainLayout.tsx      # Common layout wrapper
│
├── lib/                    # Utility files like fonts
├── public/                 # Static assets (images, etc.)
└── globals.css             # Global styles
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/kryti-portfolio.git
cd kryti-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the dev server

```bash
npm run dev
# or
yarn dev
```

Navigate to `http://localhost:3000`.

---

## Deployment

This project is ready to be deployed to **Netlify**, but you can use any hosting provider.

## Features

- Animated page transitions
- Clean and accessible design
- Modular and extendable
- Works section with dynamic image content
- Mobile responsive

---

## Author

**Tejas Garg**  
Electronics and Technology projects enthusiast

Email: [tejasgarg421@gmail.com](mailto:tejasgarg421@gmail.com)

---

## License

MIT License. Use, copy, share, and modify freely — just don’t forget to give credit.
