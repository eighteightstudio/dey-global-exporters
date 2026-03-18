# DEY GLOBAL EXPORTERS — Next.js 14 Website

**Domain:** https://www.deyglobalexporters.com  
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · lucide-react · clsx  
**Deployment:** Vercel

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, Navbar, Footer)
│   ├── globals.css         # CSS variables, animations, glass button
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── ProductsClientPage.tsx   # Client-side filter component
│   ├── certifications/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── ContactForm.tsx  # Client form component
│   ├── terms/page.tsx
│   └── privacy/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky, blur, mobile drawer
│   │   └── Footer.tsx       # 4-column navy footer
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Badge.tsx
│   │   ├── ProductCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── WhatsAppButton.tsx  # Floating glass button (homepage only)
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustBar.tsx
│       ├── ProductGrid.tsx
│       ├── ProcessTimeline.tsx
│       ├── WhyIndianHair.tsx
│       ├── CertificationsPreview.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogPreview.tsx
│       ├── FaqAccordion.tsx
│       └── CtaBanner.tsx
├── data/
│   ├── products.ts         # 6 products with full specs
│   ├── blogPosts.ts        # 5 full blog articles
│   ├── certifications.ts   # 6 certifications (IEC, GST, MSME, DGFT, FIEO, EPC)
│   └── faqs.ts             # 10 FAQs across 5 categories
├── hooks/
│   └── useFadeUp.ts        # IntersectionObserver scroll animation hook
└── lib/
    └── utils.ts            # clsx utility wrapper
```

---

## Color Palette

All defined as CSS variables in `globals.css` and extended in `tailwind.config.ts`:

| Token | Hex | Usage |
|-------|-----|-------|
| `--navy` | `#0A1628` | Primary backgrounds, headings, navbar, footer, hero |
| `--navy-muted` | `#1E3A5F` | Hover states, secondary navy |
| `--accent` | `#FFDB78` | CTAs, highlights, badge accents |
| `--accent-hover` | `#F5C842` | Hover state for accent |
| `--white` | `#FFFFFF` | Page background, card backgrounds |
| `--surface` | `#F8F9FA` | Section alternates |
| `--text-muted` | `#6B7280` | Secondary body text |
| `--border` | `#E5E7EB` | Card borders, dividers |

---

## Typography

- **Headings:** Playfair Display (Google Fonts) — `font-heading` / `var(--font-playfair)`
- **Body:** DM Sans (Google Fonts) — `font-body` / `var(--font-dm-sans)`

Both loaded via `next/font/google` in `layout.tsx`.

---

## Before Deploying — Update These

1. **Contact details** (search for `98765 43210` and `exports@deyglobalexporters.com`)
2. **Address** (search for `123 Export Industrial Zone`)
3. **Certificate numbers** (search for `IEC-XXXX-XXXX` and `19XXXXX1234X1ZX`)
4. **`/public/og-image.jpg`** — Add a real 1200×630 OG image
5. **Google Analytics** — Add GA4 script to `layout.tsx` if needed
6. **Form backend** — Wire `ContactForm.tsx` to an email service (Resend, Formspree, etc.)
7. **Testimonials** — Replace placeholder names/quotes with real client testimonials
8. **Team photos** — Replace picsum.photos seeds with real team photos
9. **Blog content** — All 5 articles have real content; review for any updates needed
10. **`public/sitemap.xml`** — Update `lastmod` dates after launch

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

Or connect the GitHub repo to Vercel dashboard for automatic deployments.

---

## SEO

- Organization JSON-LD schema in `layout.tsx`
- Article JSON-LD schema in `blog/[slug]/page.tsx`
- `generateMetadata()` on every page
- `robots.txt` and `sitemap.xml` in `/public`
- All images have descriptive alt text
- One `<h1>` per page
- Mobile-first responsive design

---

## Content Architecture

All content lives in `/src/data/` as TypeScript files:

- **Products:** Edit `products.ts` to add/update products — `ProductCard` renders automatically
- **Blog:** Add posts to `blogPosts.ts` with `slug`, `content` (Markdown-like), and metadata
- **Certifications:** Update `certifications.ts` with real certificate numbers
- **FAQs:** Add/edit in `faqs.ts` — `FaqAccordion` renders from data

---

*Built for DEY GLOBAL EXPORTERS — Raw Indian Temple Hair Exporter, Kolkata, India*
