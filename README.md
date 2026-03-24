# DEY GLOBAL EXPORTERS — Next.js 14 Website

> **B2B export website for raw Indian temple hair** — built for wig manufacturers, wholesalers, and international buyers.

**Domain:** https://www.deyglobalexporters.com
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · lucide-react · clsx
**Deployment:** Vercel

---

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Data Layer](#data-layer)
- [Components](#components)
- [Styling System](#styling-system)
- [SEO](#seo)
- [Deployment](#deployment)
- [Pre-launch Checklist](#pre-launch-checklist)

---

## Overview

Dey Global Exporters is a Kolkata-based exporter of raw Indian temple hair. This website serves as the company's primary B2B marketing and lead-generation platform, showcasing products, certifications, and export capabilities to international buyers.

**Key features:**
- Product catalogue with client-side filtering (6 products)
- Full blog with 9 long-form SEO articles, dynamic `[slug]` routing
- Certifications page (IEC, GST, MSME, DGFT, FIEO, EPC)
- Contact form with EmailJS integration
- FAQ accordion (10 questions across 5 categories)
- WhatsApp floating CTA button
- Scroll-reveal animations via `IntersectionObserver`
- Organization + Article JSON-LD structured data
- Mobile-first responsive design

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/dey-global-exporters.git
cd dey-global-exporters

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Other commands
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## Project Structure

```
dey-global-exporters/
├── public/
│   ├── sitemap.xml          # Static sitemap for search engines
│   └── og-image.jpg         # Open Graph image (1200×630) — replace before launch
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout: fonts, metadata, Navbar, Footer, JSON-LD
│   │   ├── globals.css      # CSS variables, animations, glass button styles
│   │   ├── page.tsx         # Homepage (assembles all sections)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx                  # SSR wrapper
│   │   │   └── ProductsClientPage.tsx    # Client-side category filter
│   │   ├── certifications/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx                  # Blog listing
│   │   │   ├── BlogClient.tsx            # Client search/filter
│   │   │   └── [slug]/page.tsx           # Dynamic article page + JSON-LD
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   └── ContactForm.tsx           # EmailJS contact form (client component)
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   └── privacy/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Sticky navbar with mobile drawer
│   │   │   └── Footer.tsx               # 4-column navy footer
│   │   ├── ui/                          # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   └── WhatsAppButton.tsx       # Floating glass button (homepage only)
│   │   └── sections/                    # Homepage section components
│   │       ├── HeroSection.tsx
│   │       ├── TrustBar.tsx
│   │       ├── ProductGrid.tsx
│   │       ├── ProcessTimeline.tsx
│   │       ├── WhyIndianHair.tsx
│   │       ├── CertificationsPreview.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── BlogPreview.tsx
│   │       ├── FaqAccordion.tsx
│   │       └── CtaBanner.tsx
│   ├── data/                            # All site content as TypeScript
│   │   ├── products.ts                  # 6 products with full specs & metadata
│   │   ├── blogPosts.ts                 # 9 full blog articles with slugs
│   │   ├── certifications.ts            # 6 certifications with numbers
│   │   └── faqs.ts                      # 10 FAQs across 5 categories
│   ├── hooks/
│   │   └── useFadeUp.ts                 # IntersectionObserver scroll animation
│   └── lib/
│       └── utils.ts                     # clsx utility wrapper
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── vercel.json
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — Hero, TrustBar, ProductGrid, Process, WhyIndianHair, Certifications preview, Testimonials, Blog preview, FAQ, CTA |
| `/about` | Company story, mission, team |
| `/products` | Full product catalogue with category filter |
| `/certifications` | All 6 export certifications |
| `/blog` | Blog listing with client-side search |
| `/blog/[slug]` | Dynamic article page with Article JSON-LD |
| `/contact` | Contact form (EmailJS) + company details |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

---

## Data Layer

All content is managed in `/src/data/` as plain TypeScript — no CMS required.

### `products.ts`
Each product object contains: `id`, `slug`, `name`, `category`, `shortDescription`, `longDescription`, `specs[]`, `moq`, `leadTime`, `tags[]`, `imageUrl`.

To add a product, append an entry and it will automatically appear in `ProductGrid` and the `/products` page.

### `blogPosts.ts`
Each post contains: `slug`, `title`, `excerpt`, `content`, `date`, `readTime`, `category`, `imageUrl`.

The `content` field supports Markdown-like formatting rendered via the blog `[slug]` page. Add a post here and it will appear in the listing and generate a dynamic route.

### `certifications.ts`
Contains: `id`, `name`, `number`, `issuedBy`, `description`, `icon`. Update certificate numbers before launch.

### `faqs.ts`
Array of `{ category, question, answer }` objects rendered by `FaqAccordion`.

---

## Components

### Layout
- **`Navbar`** — Sticky top bar with blur effect, mobile hamburger drawer, and active link highlighting.
- **`Footer`** — 4-column layout: brand info, quick links, products, contact details.

### UI Primitives
- **`Button`** — Supports `variant` (`primary` | `outline` | `ghost`) and `size` props.
- **`SectionHeading`** — Consistent `<h2>` + subtitle pattern with accent underline.
- **`Badge`** — Small label pill for product categories and blog tags.
- **`ProductCard`** — Image, name, category badge, short description, CTA link.
- **`BlogCard`** — Thumbnail, date, read time, excerpt, slug link.
- **`WhatsAppButton`** — Fixed bottom-right floating button, rendered only on homepage.

### Hooks
- **`useFadeUp`** — Returns a `ref` and `isVisible` boolean. Attach `ref` to any element to trigger a fade-up animation on scroll into view.

---

## Styling System

### CSS Variables (defined in `globals.css`, extended in `tailwind.config.ts`)

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0A1628` | Primary backgrounds, headings, navbar, footer, hero |
| `--navy-muted` | `#1E3A5F` | Hover states, secondary navy |
| `--accent` | `#FFDB78` | CTAs, highlights, badge accents |
| `--accent-hover` | `#F5C842` | Hover state for accent elements |
| `--white` | `#FFFFFF` | Page background, card backgrounds |
| `--surface` | `#F8F9FA` | Alternating section backgrounds |
| `--text-muted` | `#6B7280` | Secondary body text |
| `--border` | `#E5E7EB` | Card borders, dividers |

### Typography
- **Headings:** Playfair Display — loaded via `next/font/google` as `var(--font-playfair)` → Tailwind class `font-heading`
- **Body:** DM Sans — loaded via `next/font/google` as `var(--font-dm-sans)` → Tailwind class `font-body`

---

## SEO

- `generateMetadata()` exported from every page for per-page `<title>` and `<meta>` tags
- **Organization JSON-LD** schema in `layout.tsx`
- **Article JSON-LD** schema in `blog/[slug]/page.tsx`
- Static `sitemap.xml` in `/public` — covers all static routes and blog/product slugs
- `robots.txt` in `/public`
- Descriptive `alt` text on all images
- Single `<h1>` per page
- Mobile-first responsive layout
- Open Graph and Twitter card metadata on all pages

---

## Deployment

This project is configured for **Vercel** deployment.

### Option 1 — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Preview deployment
vercel

# Production deployment
vercel --prod
```

### Option 2 — GitHub Integration

1. Push repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import the GitHub repository.
4. Vercel auto-detects Next.js — no build configuration needed.
5. Every push to `main` triggers an automatic production deployment.

### Environment Variables

No environment variables are required by default. If you wire up EmailJS, add:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Pre-launch Checklist

Before going live, update the following placeholders throughout the codebase:

- [ ] **Phone number** — Replace `98765 43210` with the real number
- [ ] **Email address** — Replace `exports@deyglobalexporters.com` if needed
- [ ] **Physical address** — Replace `123 Export Industrial Zone` with real address
- [ ] **Certificate numbers** — Replace `IEC-XXXX-XXXX`, `19XXXXX1234X1ZX`, etc. in `certifications.ts`
- [ ] **OG image** — Add a real `1200×630` JPEG to `/public/og-image.jpg`
- [ ] **Testimonials** — Replace placeholder names and quotes in `TestimonialsSection.tsx`
- [ ] **Team photos** — Replace `picsum.photos` image seeds with real team photos
- [ ] **EmailJS** — Wire `ContactForm.tsx` to a real EmailJS (or Resend/Formspree) account
- [ ] **Google Analytics** — Add GA4 `<Script>` tag to `layout.tsx` if tracking is required
- [ ] **Sitemap `lastmod`** — Update dates in `public/sitemap.xml` after final content review
- [ ] **Blog content review** — Review all 9 articles for accuracy and branding consistency
- [ ] **`robots.txt`** — Confirm the domain in `/public/robots.txt` matches the live domain

---

*Built for DEY GLOBAL EXPORTERS — Raw Indian Temple Hair Exporter, Kolkata, India*
