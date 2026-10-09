# Nelsun Tea Company — Portfolio Website

A frontend-only marketing site for **Nelsun Tea Company**, built from the company
profile & export catalog deck. No backend, no database — it builds to fully static
pages and deploys to Vercel as-is.

## Stack

| Layer      | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js (App Router, React 19, TypeScript)      |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` tokens)     |
| Motion     | Framer Motion (scroll reveals, reduced-motion safe) |
| Icons      | lucide-react                                    |
| Fonts      | Fraunces (display) + Inter (UI), self-hosted via `next/font` |
| Images     | `next/image` with AVIF/WebP + responsive sizes  |

## Local development

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build
```

## Project structure

```
public/images/        Photography & product shots extracted from the company deck
src/app/layout.tsx    Fonts, metadata, Open Graph, JSON-LD organisation schema
src/app/page.tsx      Section composition order
src/app/globals.css   Brand tokens (@theme), base styles, marquee keyframes
src/data/site.ts      ALL copy, contact details and product data — single source of truth
src/components/       One file per page section
src/components/ui/    Reveal (scroll animation), SectionHeading, Logo
```

### Editing content

Everything the site says lives in [`src/data/site.ts`](src/data/site.ts) — company
details, phone numbers, emails, capabilities, product lines, the spec table, the
vision statement and the team. Change it there and the whole page follows; no
component edits needed.

### Sections

1. **Hero** — full-bleed Assam garden photography + key export facts
2. **Marquee** — scrolling capability strip
3. **About Our Business** — company overview with at-a-glance facts
4. **Our Service** — six capability tiles
5. **Our Portfolio** — two supply tracks (bulk / private label), product lines, grade & packing table
6. **Why Partner With Nelsun** — six differentiators
7. **From Garden to Cup** — six-stage process
8. **Our Vision** — vision statement
9. **Meet Our Team** — leadership with direct contact links
10. **Contact Us** — phone / email / WhatsApp + enquiry form

### The enquiry form

Intentionally backend-free. It composes a structured `mailto:` draft (addressed to
the first contact email, cc'ing the second) in the visitor's own mail client.
Nothing is sent or stored by the site, so there is no server, database or API key
to manage.

If a real inbox-delivered form is wanted later, drop in a hosted form endpoint
(Formspree, Vercel Forms, Resend + a route handler) inside
`src/components/EnquiryForm.tsx` — the rest of the site stays untouched.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project** and import that repository.
3. Vercel auto-detects Next.js — no environment variables and no build-setting
   changes are required. Click **Deploy**.

After the first deploy, update `siteUrl` in
[`src/app/layout.tsx`](src/app/layout.tsx) to the live domain so Open Graph and
canonical URLs point at the real site.

## Notes

- All copy is taken from the Nelsun company profile deck. The source PDF is
  git-ignored; the photography used by the site lives in `public/images/`.
- Animations are disabled automatically when the visitor has
  `prefers-reduced-motion` set.
- The page is a single static route (`/`), so it serves from Vercel's edge cache
  with no server runtime.
