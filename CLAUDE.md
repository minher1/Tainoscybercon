# Tainos Cyber Con 2026 — Project Context for Claude Code

## What this is
The official website for **Tainos Cyber Con 2026**, an international cybersecurity conference on August 29, 2026 in Mascouche, QC. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel via GitHub Actions CI/CD.

**Live site:** https://tainoscybercon.vercel.app  
**GitHub:** https://github.com/minher1/Tainoscybercon  

## Tech stack
- **Framework:** Next.js 15, App Router, TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS variables in `src/app/globals.css`
- **Fonts:** Barlow (body) + Barlow Condensed (headings) — loaded via `next/font/google`
- **Email:** Resend SDK → `src/app/api/contact/route.ts` → sends to `hello@tainoscybercon.com`
- **Spam protection:** Cloudflare Turnstile + honeypot field + 3-second time-trap
- **i18n:** Custom React context, no library — French default, English toggle

## Brand
- **Colors:** Coral `#e84444` → Deep pink `#c03880` → Violet `#7b35b0` → Navy `#1c2460` → Dark `#07091a`
- **Logo:** `public/logo.png` (gradient, transparent bg) — use everywhere
- **SVG gradients:** Defined once in `src/components/BrandDefs.tsx` as `#logoGrad` / `#logoGradH`

## Content / i18n
All site text lives in two JSON files — **edit these to update copy, never hardcode strings in components:**
- `src/content/fr.json` — French (default)
- `src/content/en.json` — English

Access in components via `const { t, lang } = useLang()` from `@/context/LangContext`.

## Key files
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Page composition — add/remove/reorder sections here |
| `src/app/layout.tsx` | Fonts, metadata, OG image |
| `src/app/globals.css` | CSS variables, brand gradient classes, glitch animation |
| `src/app/api/contact/route.ts` | Email API — Resend, HTML template, Turnstile verify |
| `src/components/ContactForm.tsx` | Reusable form — takes `fields[]`, `formType`, `submitLabel` |
| `src/components/Silhouettes.tsx` | SVG decorative elements using brand gradient |
| `src/components/BrandDefs.tsx` | SVG `<defs>` rendered once in layout body |
| `tailwind.config.ts` | Cyber color palette, font variables |

## Sections (in page order)
1. `Nav` — fixed, logo + lang toggle + mobile menu
2. `Hero` — countdown to Aug 29 2026, typewriter tagline, CTAs
3. `ThreatTicker` — scrolling cybersecurity alert marquee
4. `About` — mission, benefits grid, audience photo split layout
5. `Terminal` — mock bash terminal showing event info
6. `Themes` — 4 cybersecurity themes for 2026
7. `Speakers` — confirmed speaker cards + call-for-speakers form
8. `Schedule` — timeline of the day
9. `WhyAttend` — split photo/gradient conversion section
10. `Tickets` — what's included + Eventbrite CTA
11. `Sponsors` — benefits + partner contact form
12. `Footer` — contact info, socials, copyright

## Forms
Both forms post to `/api/contact`. Pass `formType="speaker"` or `formType="sponsor"`.

**Speaker fields:** Nom · Prénom · E-mail · Téléphone · Fonction · Organisation · Titre sujet · Format · Parcours · Résumé · Co-speaker · LinkedIn

**Partner fields:** Nom · E-mail · Téléphone · Adresse · Source · Entreprise · Site web · Niveau (Bronze/Argent/Or) · Commentaires · Consentement

## Environment variables (set in Vercel)
```
RESEND_API_KEY=                         # Resend — sends emails
NEXT_PUBLIC_TURNSTILE_SITE_KEY=         # Cloudflare Turnstile — client widget
TURNSTILE_SECRET_KEY=                   # Cloudflare Turnstile — server verify
```

## Confirmed speakers
- **Mike Arbrouet** — Field CTO, IBM · `/public/speakers/mike.jpg`
- **Blaise Arbouet** — Co-founder, YottaSec · `/public/speakers/blaise.jpg`

To add a speaker: add entry to `speakers.confirmed` in both JSON files + drop photo in `public/speakers/`.

## Common tasks

**Change destination email:**  
Edit `const TO = "..."` in `src/app/api/contact/route.ts`

**Add a section:**  
1. Create `src/components/MySection.tsx`
2. Add content keys to both JSON files
3. Import and place `<MySection />` in `src/app/page.tsx`

**Update event details:**  
Edit `fr.json` and `en.json`. Hero date badge is hardcoded in `Hero.tsx` line 59.

**Deploy:**  
Push to `main` → GitHub Actions → Vercel auto-deploys.
