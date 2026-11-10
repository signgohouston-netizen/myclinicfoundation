# MyClinic Foundation — myclinicfoundation.org

A 501(c)(3) nonprofit healthcare marketplace that connects patients — especially the
elderly and those who cannot afford care — with **volunteer doctors, pharmacies,
laboratories, emergency rooms, hospitals, trauma centers, private nurses and private
assistants**, and with **donors worldwide** who help pay their medical bills. Medicare,
Medicaid and private insurance are welcome. Founded with a focus on the **USA and
Pakistan**, open to everyone, everywhere.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, SEO-optimized and
ready to deploy on **Vercel**.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, React 19, Server Components
- TypeScript
- Tailwind CSS v4
- Built-in SEO: `metadata`, dynamic Open Graph image, `sitemap.xml`, `robots.txt`,
  JSON-LD structured data (Organization, Website, Breadcrumb, FAQ)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set your site URL (used for canonical links, sitemap and OG):

```bash
cp .env.example .env.local
# edit NEXT_PUBLIC_SITE_URL=https://myclinicfoundation.org
```

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/              # Routes (App Router)
    page.tsx        # Home
    how-it-works/   services/   find-help/   insurance/
    research/       advertise/  about/       donate/
    join/           contact/    privacy/     terms/
    sitemap.ts      robots.ts   opengraph-image.tsx   icon.svg
  components/       # Header, Footer, Logo, Button, Icon, Sections, forms
  lib/site.ts       # Central site config, nav, services, steps
public/
  logo.avif         # Brand logo
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — mission, marketplace, how it works, donate, regions |
| `/how-it-works` | Patient & provider steps, FAQ |
| `/services` | The 8 care categories |
| `/find-help` | Patients request care / bill sponsorship |
| `/join` | Join as volunteer / provider / donor / patient |
| `/donate` | Sponsor a patient's bill |
| `/insurance` | Medicare, Medicaid & private insurance |
| `/advertise` | Advertising & partnerships |
| `/research` | Publish research & new products |
| `/about` | Nonprofit mission & values |
| `/contact` | Contact form |

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the environment variable `NEXT_PUBLIC_SITE_URL=https://myclinicfoundation.org`.
4. Deploy, then point the `myclinicfoundation.org` domain at the project.

## Roadmap — Phase 2 (backend)

The current site is the complete public front end. The following features have UI/forms
in place and need backend wiring:

- **Accounts & auth** — member sign-up/login (e.g. NextAuth or Clerk)
- **Database** — members, providers, requests, donations (e.g. Postgres / Neon / Supabase)
- **Secure medical-report uploads** — encrypted storage with access controls
- **Provider directory & matching** — searchable, filterable listings
- **Donations** — Stripe payment processing and receipts
- **Contact/notifications** — transactional email (e.g. Resend)

> MyClinic Foundation is not an emergency service. In a medical emergency, call your
> local emergency number immediately.
