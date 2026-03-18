# Task: Structured Next.js Migration + Page Architecture Refactor (Interior Design Website)

## Objective

Migrate the existing React project to Next.js AND restructure the application into a scalable, multi-page architecture with reusable components and dynamic project pages.

This is NOT a simple UI migration. This is a structural rebuild.

---

## Critical Instructions for Claude Code

* Use **Frontend Skills from plugins** wherever relevant
* Focus on **clean architecture, not duplication**
* Avoid copy-paste pages — use reusable components and dynamic routing
* Maintain visual elegance, minimalism, and premium design consistency

---

## Phase 1: Core Layout & Global Structure

### 1. Navbar

* Sticky, responsive, clean
* Links:

  * Home
  * Projects
  * About
  * Contact


---

### 2. Footer

* Same across all pages
* Include:

  * Brand identity (JAY Interiors)
  * Navigation links
  * Contact details
* Clean, premium design

---

## Phase 2: Homepage (Landing Page)

### Sections (in order):

#### 1. Hero Section

* Strong visual impact with animations
* Headline + subheading


---

#### 2. About Us Section

* Short, high-quality content
* Focus on:

  * craftsmanship
  * personalization
  * premium interior design

---


---

## Phase 3: Projects Page (Critical)

### Route:

```
/projects
```

### Requirements:

* Display all project categories:

  * Kitchen
  * Bedroom
  * Living Room
  * Office
  * Villa
  * Hotel
  * Banquet
  * Home Interiors

---

### IMPORTANT: No static pages for each project

Use **dynamic routing**:

```
/projects/[slug]
```

Examples:

* /projects/kitchen
* /projects/bedroom
* /projects/office

---

## Phase 4: Individual Project Pages (Dynamic)

### Structure for EACH project page:

#### 1. Hero Section

* Project title (e.g., Kitchen Interiors)
* Elegant banner image

---

#### 2. Intro Section

Example:
"Kitchen Interior Designer in Mumbai: Creating Stylish, Functional, and Personalized Spaces"

* Follow with a well-written paragraph
* Focus on:

  * design quality
  * usability
  * aesthetics

---

#### 3. Image Gallery Section

* Multiple high-quality images
* Must match:

  * elegance
  * luxury
  * modern interior design

(Use placeholder images if needed, but keep style consistent)

---

#### 4. Why Choose JAY Interiors Section

* Bullet points:

  * Experience
  * Custom design
  * Premium materials
  * Client satisfaction

* Include:

  * small testimonials
  * project images

---

#### 5. Call To Action

* "Get Your Dream Space Designed"

---

#### 6. Footer (reuse global)

---

## Phase 5: Data Architecture (IMPORTANT)

Instead of hardcoding:

Create a data structure:

```
/data/projects.ts
```

Example:

* slug
* title
* description
* images[]
* category

Use this data to dynamically render all project pages.

---

## Phase 6: Styling & Design Rules

* Maintain **premium, minimal, elegant UI**
* Avoid clutter
* Use consistent spacing, typography, and color palette
* Prefer neutral tones + luxury aesthetics

---

---

## Enforcement: Required Folder & File Structure (Do NOT Deviate)

The project MUST follow this structure:

```
/app
  layout.tsx
  page.tsx                (Homepage)

  /projects
    page.tsx              (Projects listing page)

    /[slug]
      page.tsx            (Dynamic project page)

  /about
    page.tsx

/components
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  AboutSection.tsx
  ProjectCard.tsx
  ProjectGallery.tsx
  WhyChooseUs.tsx

/data
  projects.ts

/public
  /images
```

---

## Routing Rules (Strict)

* Homepage → `/`
* Projects page → `/projects`
* Dynamic pages → `/projects/[slug]`

Examples:

* `/projects/kitchen`
* `/projects/bedroom`
* `/projects/villa`

DO NOT create:

* `/kitchen`
* `/bedroom`
* or any standalone pages for projects

All project pages MUST use dynamic routing.

---

## Data Rules (Strict)

All project content MUST come from:

```
/data/projects.ts
```

Each project object must include:

* slug
* title
* description
* images (array)
* category

NO hardcoded content inside pages.

---

## Component Rules

* Navbar and Footer MUST be used in global layout
* Sections must be reusable (no duplication)
* Use `"use client"` ONLY when required

---

## Image Rules

* Use high-quality, elegant interior design images
* Prefer consistent aspect ratios
* Store in `/public/images` or use external URLs

---

## Design Constraints

* Minimal, premium, clean UI
* No clutter
* Consistent spacing and typography
* Avoid random colors or inconsistent styling

---

## Code Quality Rules

* No console.logs in final code
* No unused components
* No duplicate layouts
* Keep components modular and readable

---

## Failure Conditions (Must Avoid)

The task is considered FAILED if:

* Multiple project pages are manually created instead of dynamic routing
* Layout is duplicated across pages
* Data is hardcoded instead of using `/data/projects.ts`
* react-snap or Puppeteer is still present
* UI becomes inconsistent across pages

---

## Expected Outcome

A clean, scalable Next.js application where:

* New projects can be added via a single data file
* Routing is predictable and maintainable
* UI remains consistent and premium across all pages


## Phase 7: SEO Optimization

For each project page:

* Unique title
* Meta description
* Proper heading hierarchy

Use Next.js Metadata API.

---

## Phase 8: What NOT to do

* ❌ No react-snap
* ❌ No Puppeteer
* ❌ No duplicate pages
* ❌ No hardcoded repeated layouts
* ❌ No excessive client-side rendering

---

## Deliverables

* Fully migrated Next.js app
* Dynamic project routing working
* Clean homepage with hero + about
* Projects listing page
* Individual project pages generated dynamically
* Reusable Navbar and Footer
* Elegant and consistent UI

---

## Success Criteria

* Adding a new project requires ONLY updating data file
* No duplicated code across pages
* Clean routing structure
* Fast build and SEO-friendly output

---

## Final Note

Think like a system designer, not a page builder.

This is a scalable architecture task, not just UI implementation.

## Notes

This is a full architectural migration, not a patch. Prefer correctness and maintainability over quick fixes.
Your code will be reviewed by Codex and Copilot for inconsistencies and bugs.
USE all RELAVANT SKILLS FROM INSTALLED PLUGINS
