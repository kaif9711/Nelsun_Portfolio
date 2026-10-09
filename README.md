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

Fields: **name** (required), **company** (optional), **phone** (required),
**email** (required), **product enquiry** (checkboxes for the three portfolio
lines — at least one required) and **details** (optional). The **Send Query**
button delivers the enquiry to **vansh0409@gmail.com** via EmailJS.

There is still no backend: the browser posts directly to EmailJS, which relays
the message to the Gmail account connected in the EmailJS dashboard.

## Setting up EmailJS

The form will not send until these three values exist. Until then it shows an
inline notice with a mail-app fallback link, so the page never looks broken.

1. Sign up at [emailjs.com](https://www.emailjs.com) using **vansh0409@gmail.com**.
2. **Email Services → Add New Service → Gmail**, connect that Gmail account and
   authorise it. Copy the **Service ID** (`service_…`).
3. **Email Templates → Create New Template.** Set *To Email* to
   `vansh0409@gmail.com` and *Reply To* to `{{reply_to}}`, then paste this as the
   subject and body:

   **Subject:** `Export enquiry — {{products}}`

   ```
   New enquiry from the Nelsun website

   Name:            {{name}}
   Company:         {{company}}
   Phone:           {{phone}}
   Email:           {{email}}
   Product enquiry: {{products}}

   Details:
   {{details}}
   ```

   Save it and copy the **Template ID** (`template_…`).
4. **Account → General** and copy the **Public Key**.
5. Put all three in `.env.local` locally (copy `.env.example`) and in Vercel under
   **Project Settings → Environment Variables**, then redeploy.

The variable names the form reads are in [`.env.example`](.env.example).

### Why these are `NEXT_PUBLIC_`

EmailJS is built to be called from the browser, so the public key is visible in
the page source by design — that is how the service works, and it cannot be
hidden in a frontend-only site. Protect the account in the EmailJS dashboard
instead:

- **Account → Security → Allowed Domains**: add only your Vercel domain (and
  `localhost` while developing). This stops other sites using your key.
- Turn on **reCAPTCHA** for the template if you start getting spam.
- The form already sets `blockHeadless` (rejects bot browsers) and a 15-second
  client-side throttle.

Free tier is 200 emails/month. If volume outgrows that, the swap is to move
sending into a Next.js route handler with Resend or Nodemailer — only
`src/components/EnquiryForm.tsx` changes.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project** and import that repository.
3. Vercel auto-detects Next.js — no build-setting changes are required. Add the
   three `NEXT_PUBLIC_EMAILJS_*` environment variables (see above) so the
   enquiry form can send, then click **Deploy**.

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
