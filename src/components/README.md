# components/

## layout/
Shared chrome rendered on every page via `src/app/layout.tsx`.

| File | Type | Notes |
|------|------|-------|
| `Navbar.tsx` | Client | Sticky header, active-link highlighting, mobile hamburger drawer |
| `Footer.tsx` | Server | 3-column: brand, quick links, contact info. Navy background. |

## ui/
Reusable primitives with no business logic.

| File | Type | Notes |
|------|------|-------|
| `Button.tsx` | Server | Variants: `primary`, `outline`, `ghost`, `accent`. Pass `href` for a Link, omit for a `<button>`. |
| `Section.tsx` | Server | Consistent `py-20` + `max-w-7xl` wrapper. Accepts `id` and `className`. |
| `ScrollReveal.tsx` | Client | Wraps children with a fade-in-up animation on scroll. Optional `delay` prop (ms). |

## sections/
Page-level content blocks. Each maps to a named section in the design plan.

| File | Used On | Notes |
|------|---------|-------|
| `Hero.tsx` | Home | Full-viewport, grain texture, gradient bg, two CTA buttons |
| `TrustBar.tsx` | Home | 4 trust stats pulled from `TRUST_STATS` in constants |
| `ServicesGrid.tsx` | Home, Services | Pass `limit={3}` for the home preview snapshot; omit for the full 6-card grid |
| `WhyUs.tsx` | Home | 4 value props with ScrollReveal stagger |
| `CTABanner.tsx` | Home, Services, About | Full-width dark green banner with a single CTA button |
| `ContactForm.tsx` | Contact | Controlled form, client-side validation, success state. No backend yet. |
