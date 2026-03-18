# Task: Fix Missing Hero Section on Homepage (Critical UI Regression)

## Problem

The homepage hero section is currently EMPTY after migration to Next.js.

Previously (in the React version), the hero section:

* was the PRIMARY USP of the website
* contained animated image cards
* had strong visual storytelling
* created immediate impact for users

Now:

* only navbar is visible
* hero content is missing entirely
* page looks broken and incomplete

---

## Likely Cause (Do NOT ignore)

This is NOT a styling issue.

Most probable reasons:

* Hero component is not imported in `app/page.tsx`
* Wrong import path (e.g., `@/components/...` mismatch)
* Component was not migrated from old React project
* Animation dependencies (framer-motion) not applied correctly
* Original hero logic from `1.txt` was not reused

---

## Required Fix

### 1. Locate or Recreate Hero Component

* Check if hero component exists in:

```
/components
```

If missing:

* Recreate it using the original logic from `1.txt`
* Preserve:

  * animated card layout
  * premium visual feel
  * motion effects

---

### 2. Ensure Proper Import in Homepage

In:

```
app/page.tsx
```

Hero MUST be included at the top:

```tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* other sections */}
    </>
  );
}
```

---

### 3. Fix Animation (if broken)

If using `framer-motion`:

* ensure component has `"use client"`
* animations should not be stripped during migration

---

### 4. Visual Requirements

Hero must:

* NOT be empty
* NOT collapse height
* have strong above-the-fold presence
* include:

  * heading
  * supporting text
  * animated image cards (as before)

---

### 5. Maintain Design Quality

* Premium look (no generic hero)
* Smooth animations
* Balanced spacing
* Mobile responsiveness

---

## Success Criteria

* Hero section visible immediately on page load
* Matches previous React version in visual impact
* Animations working
* No blank space above fold

---

## Failure Conditions

Task is FAILED if:

* Hero still empty
* Static boring hero replaces animated one
* Layout breaks on mobile
* Component is hardcoded without reuse

---

## Reference

Use previous implementation (from React version + 1.txt) as baseline.

Do NOT redesign randomly — restore intended experience.
