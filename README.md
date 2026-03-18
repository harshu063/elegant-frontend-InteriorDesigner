<div align="center">

<img src="https://img.shields.io/badge/Maa%20Ashapura-Furniture-88734C?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0yMCAxMlY4SDRWMTIiLz48cGF0aCBkPSJNMiAxMmgxIi8+PHBhdGggZD0iTTIxIDEyaDEiLz48cGF0aCBkPSJNMyAxMnY2Ii8+PHBhdGggZD0iTTIxIDEydjYiLz48cGF0aCBkPSJNNCAxMGgxNiIvPjxwYXRoIGQ9Ik03IDE4aDEwIi8+PC9zdmc+" alt="Maa Ashapura Furniture" />



### Premium Handcrafted Furniture — Portfolio Website

*15+ years of heritage craftsmanship in teak, sheesham & mango wood from Rajasthan*

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)

</div>

---

## Overview

A fully responsive, animation-rich portfolio website  — a premium furniture manufacturer based in Rajasthan. The site showcases the business's 15+ years of handcrafted furniture work across residential, commercial, and hospitality projects.

Built with a modern stack focused on smooth animations, mobile-first design, and real-world business integrations like WhatsApp contact.

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Animated hero with 3D flip-card morphing sequence, About Us section with stats |
| **Services** | `/services` | 6-category service grid — Living Room, Bedroom, Custom, Décor, Office, Kitchen |
| **Projects** | `/projects` | Embla-powered carousel gallery of 8 completed projects |
| **Contact** | `/contact` | Validated contact form with direct WhatsApp integration |

---

## Features

- **Animated Hero** — Timer-driven phase animation (scatter → line → circle → reveal) with 3D flip cards and parallax mouse tracking. No scroll blocking.
- **WhatsApp Integration** — Contact form submits directly to WhatsApp with a pre-filled, structured message. Floating "WhatsApp Us" button on every page.
- **Smooth Anchor Navigation** — "About Us" in navbar scrolls to the section from any page using `scrollIntoView`.
- **Dropdown Navigation** — Desktop hover dropdowns for Services and Projects; accordion menus on mobile.
- **Project Gallery** — Drag-and-scroll Embla carousel with arrow navigation.
- **Clean URLs** — `BrowserRouter` for real path-based URLs (`/`, `/services`, `/projects`, `/contact`) — no `#` fragments.
- **Fully Responsive** — Optimized layouts at every breakpoint from 320px mobile to 1920px desktop.
- **Brand-consistent Design** — Gold `#88734C`, Navy `#202e44`, Cream `#F8F8F2` palette throughout every component.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Routing | React Router DOM v7 (BrowserRouter) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| UI Primitives | Radix UI (Tooltip, Switch, Label, Slot) |
| Component Variants | class-variance-authority + clsx + tailwind-merge |
| Icons | Lucide React |
| Carousel | Embla Carousel React |

---

## Project Structure

```
src/
├── App.tsx                          # Root — BrowserRouter, routes, WhatsApp FAB
├── main.tsx                         # React entry point
├── index.css                        # Tailwind + CSS variables + global styles
│
├── pages/
│   ├── Home.tsx                     # Hero + About sections
│   ├── Services.tsx                 # Services grid page
│   ├── Projects.tsx                 # Projects gallery page
│   └── Contact.tsx                  # Contact form page
│
├── components/ui/
│   ├── navbar-1.tsx                 # Fixed full-width navbar with dropdowns
│   ├── scroll-morph-hero.tsx        # Animated 3D flip-card hero
│   ├── about-us-section.tsx         # About section with stats counter
│   ├── feature-72.tsx               # 6-service card grid
│   ├── gallery4.tsx                 # Embla carousel project gallery
│   ├── premium-contact.tsx          # Contact form + WhatsApp submit
│   ├── footer-section.tsx           # Footer with links and contact info
│   ├── button.tsx                   # Shadcn-style Button
│   ├── input.tsx                    # Shadcn-style Input
│   ├── card.tsx                     # Card container
│   ├── tooltip.tsx                  # Radix Tooltip wrapper
│   └── carousel.tsx                 # Embla Carousel wrapper
│
└── lib/
    └── utils.ts                     # clsx + tailwind-merge helper

public/
└── images/
    └── img-01.jpeg … img-21.jpeg    # Furniture photography assets
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repository
git clone https://github.com/your-username/elegant-frontend-InteriorDesigner.git
cd maa-ashapura-furniture

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:5173` with SPA routing handled automatically.

### Build for Production

```bash
npm run build
```

Output is placed in `/dist`. Since the project uses `BrowserRouter`, configure your hosting to serve `index.html` for all routes:

- **Netlify** — add a `public/_redirects` file: `/* /index.html 200`
- **Vercel** — add a `vercel.json`: `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- **Apache** — use `.htaccess` with `FallbackResource /index.html`
- **Nginx** — add `try_files $uri /index.html;` in your server block

```bash
# Preview production build locally
npm run preview
```

---

## Brand & Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Gold | `#88734C` | Primary CTA, accents, hover states |
| Navy | `#202e44` | Headings, navbar, dark surfaces |
| Light Gold | `#c4a97a` | Gradient accents, subtle highlights |
| Cream | `#F8F8F2` | Light backgrounds, card surfaces |


---

## Scripts

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Type-check + production build
npm run preview    # Serve the /dist build locally
```

---

<div align="center">

Crafted with care 

</div>
