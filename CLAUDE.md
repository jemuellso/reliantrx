# ReliantRx — Codebase Guide

## Stack
- **Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS v4** · **React 19**
- **Fonts:** DM Serif Display (headings) + Plus Jakarta Sans (body) via `next/font/google`
- **Icons:** Lucide React
- **Deploy:** Vercel (auto-deploy from `main` on GitHub)

## Folder Map

```
src/
├── app/                  # Routes (Next.js App Router)
│   ├── layout.tsx        # Root layout — fonts, Navbar, Footer, metadata
│   ├── globals.css       # Brand color tokens (@theme) + .reveal animation
│   ├── page.tsx          # / Home
│   ├── services/         # /services
│   ├── about/            # /about
│   ├── contact/          # /contact
│   └── portal/           # /portal — Coming Soon placeholder
├── components/
│   ├── layout/           # Navbar (client), Footer (server)
│   ├── ui/               # Primitives: Button, Section, ScrollReveal
│   └── sections/         # Page sections: Hero, TrustBar, ServicesGrid, WhyUs, CTABanner, ContactForm
└── lib/
    ├── constants.ts      # All brand data: nav links, services, trust stats, contact info
    └── utils.ts          # cn() class helper
```

## Adding a New Page

1. Create `src/app/<route>/page.tsx`
2. Export a default component + `metadata` object
3. Add the route to `NAV_LINKS` in `src/lib/constants.ts` if it belongs in the nav

## Adding a New Service

Open `src/lib/constants.ts` → add an entry to the `SERVICES` array with `id`, `name`, `description`, and a Lucide `Icon`. It will automatically appear on `/services` and, if `limit` allows, on the home snapshot.

## Brand Tokens (Tailwind classes)

| Class | Color |
|-------|-------|
| `text-[#1D3D2F]` / `bg-[#1D3D2F]` | Primary forest green |
| `text-[#6BAE8E]` / `bg-[#6BAE8E]` | Accent sage |
| `bg-[#F8F8F6]` | Page background |
| `bg-[#E8E8E4]` | Muted / section background |
| `bg-[#1B3A4B]` | Navy (footer) |

Tokens are also defined in `globals.css` under `@theme` as `--color-primary`, `--color-accent`, etc.

## Component Rules

- **Server by default.** Only add `'use client'` when a component uses hooks or browser APIs.
- **Client components:** `Navbar` (mobile menu state), `ScrollReveal` (IntersectionObserver), `ContactForm` (form state).
- **Button** renders a `<Link>` when `href` is passed, a `<button>` otherwise.
- **Section** wraps content with consistent `py-20` padding and `max-w-7xl` centering.
- **ScrollReveal** wraps any block to animate it in on scroll. Accepts an optional `delay` (ms).

## TODO Before Launch

- Replace placeholder copy (search `TODO` in `src/app/about/page.tsx`)
- Add real team member names, titles, and photos
- Update `CONTACT_INFO` in `src/lib/constants.ts` with real details
- Replace SVG logo placeholder in Navbar/Footer with actual logo asset
- Wire contact form to an email service (Resend, Formspree, etc.)
- Set custom domain in Vercel dashboard
