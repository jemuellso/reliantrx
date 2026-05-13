# lib/

Shared data and utilities — no React, no components.

## constants.ts
Single source of truth for all brand data. Edit here; UI picks it up automatically.

| Export | Type | Used By |
|--------|------|---------|
| `NAV_LINKS` | Array | Navbar, Footer |
| `SERVICES` | Array of `Service` | ServicesGrid, constants snapshot on Home |
| `TRUST_STATS` | Array of `TrustStat` | TrustBar |
| `CONTACT_INFO` | Object | Footer, Contact page |

**To update contact details:** change `CONTACT_INFO`. All usages update automatically.  
**To add a service:** append to `SERVICES` with a Lucide `Icon` import.

## utils.ts
`cn(...classes)` — merges class strings, filtering out falsy values. Use instead of string concatenation when conditionally applying Tailwind classes.
