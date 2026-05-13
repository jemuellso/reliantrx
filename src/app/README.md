# app/

Next.js App Router. Every folder with a `page.tsx` is a public route.

| Route | File | Description |
|-------|------|-------------|
| `/` | `page.tsx` | Home — Hero, TrustBar, ServicesGrid (3), WhyUs, CTABanner |
| `/services` | `services/page.tsx` | Full services grid (6 cards) + CTABanner |
| `/about` | `about/page.tsx` | Story, values, team placeholders + CTABanner |
| `/contact` | `contact/page.tsx` | ContactForm + contact info panel |
| `/portal` | `portal/page.tsx` | Coming Soon placeholder — no auth logic yet |

## Shared files
- `layout.tsx` — Root layout. Loads fonts, renders Navbar + Footer, sets `<html>` classes.
- `globals.css` — `@import "tailwindcss"`, brand `@theme` tokens, `.reveal` / `.revealed` animation classes.

## Adding a page
1. Create `src/app/<name>/page.tsx`
2. Export a default component and a `metadata` export
3. Use `<Section>` for consistent padding and `font-heading` for display text
