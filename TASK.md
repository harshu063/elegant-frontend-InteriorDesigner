# Task: Migrate Existing React SPA to Next.js (Production-Ready)

## Objective

Migrate the existing React-based frontend project to Next.js, removing all dependencies on react-snap, Puppeteer, and client-side-only rendering hacks. The final application should support static generation (SSG) and/or server-side rendering (SSR) where appropriate.

---

## Current Stack (To Be Replaced)

* React (Vite / CRA-based SPA)
* react-snap for prerendering
* Puppeteer (via react-snap)
* Static deployment (Cloudflare Pages)

---

## Target Stack

* Next.js (latest stable version)
* File-based routing (App Router preferred)
* Built-in SSG/SSR (no react-snap or Puppeteer)
* Optimized for deployment on Cloudflare Pages / Vercel

---

## Migration Requirements

### 1. Project Setup

* Initialize a new Next.js project
* Use App Router (`/app` directory)
* Enable TypeScript (if not already used)
* Configure ESLint and Prettier

---

### 2. Routing Migration

* Convert all existing React Router routes to Next.js file-based routes
* Maintain exact URL structure
* Replace dynamic routes with `[slug]` or `[id]` patterns

---

### 3. Component Migration

* Move all reusable components into `/components`
* Ensure all components are compatible with server/client rendering
* Add `"use client"` only where necessary (avoid overuse)

---

### 4. Page Conversion

* Convert each route/page into a Next.js page:

  * Static pages → use SSG
  * Dynamic data → use `fetch` with caching or SSR
* Remove all client-side-only rendering assumptions

---

### 5. Data Fetching Refactor

* Replace any useEffect-based data fetching with:

  * `fetch()` in Server Components (preferred)
  * or `getStaticProps` / `getServerSideProps` if using Pages Router
* Implement caching where applicable

---

### 6. Assets & Styling

* Migrate global styles to `/app/globals.css`
* Ensure all images use `next/image` where beneficial
* Fix any path issues for static assets

---

### 7. SEO & Metadata

* Replace manual meta tags with Next.js Metadata API
* Ensure each page has proper title, description, and OpenGraph tags

---

### 8. Remove Legacy Dependencies

Completely remove:

* react-snap
* Puppeteer
* Any prerender scripts
* Any build-time hacks for SEO

---

### 9. Build & Deployment

* Ensure `next build` succeeds without warnings
* Configure deployment for:

  * Vercel (preferred), OR
  * Cloudflare Pages (static export if needed)

If using Cloudflare:

* Enable `output: "export"` if fully static
* Ensure no Node-only APIs are used

---

### 10. Performance Optimization

* Enable automatic code splitting
* Use dynamic imports where needed
* Optimize images and fonts

---

## Deliverables

* Fully functional Next.js project
* All routes working as before
* Improved SEO without react-snap
* Clean, minimal dependencies
* Production-ready build

---

## Constraints

* Do NOT introduce unnecessary libraries
* Do NOT keep legacy SPA patterns
* Avoid client-side data fetching unless absolutely required

---

## Success Criteria

* No Puppeteer usage
* No react-snap
* Faster build times
* Clean CI/CD pipeline
* Pages render correctly with SEO support

---

## Notes

This is a full architectural migration, not a patch. Prefer correctness and maintainability over quick fixes.
Your code will be reviewed by Codex and Copilot for inconsistencies and bugs.
