# Kubee.in Marketing Site — Design Spec

**Date:** 2026-04-20
**Product:** kubee.in — Inventory & Supply Chain Management SaaS for Indian businesses
**Goal:** SEO-first marketing site that converts Google visitors into signups

---

## 1. Architecture

- **Framework:** Next.js 16 App Router (already installed)
- **Rendering:** Static Site Generation (SSG) for all pages — best Google indexing
- **Styling:** Tailwind CSS v4 (already installed)
- **Language:** TypeScript
- **Blog:** Hardcoded JSON posts to start; file lives at `data/blog-posts.ts`
- **No CMS, no database** — pure static output

---

## 2. File Structure

```
app/
  layout.tsx               ← root layout (Navbar + Footer)
  page.tsx                 ← Homepage (/)
  pricing/
    page.tsx               ← Pricing (/pricing)
  blog/
    page.tsx               ← Blog listing (/blog)
    [slug]/
      page.tsx             ← Blog post (/blog/[slug])
  contact/
    page.tsx               ← Contact (/contact)
  about/
    page.tsx               ← About (/about)
  terms/
    page.tsx               ← Terms of Service (/terms)
  privacy/
    page.tsx               ← Privacy Policy (/privacy)
  cookie-policy/
    page.tsx               ← Cookie Policy (/cookie-policy)

components/
  Navbar.tsx
  Footer.tsx
  HeroSection.tsx
  StatsBar.tsx
  FeaturesGrid.tsx
  FeaturesAlternating.tsx
  FooterCTA.tsx
  PricingCard.tsx
  PricingToggle.tsx (client component — handles monthly/annual toggle)
  FAQSection.tsx
  BlogCard.tsx
  ContactForm.tsx

data/
  blog-posts.ts            ← blog content (title, slug, excerpt, date, content)
  pricing.ts               ← tier definitions
```

---

## 3. Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `brand-blue` | `#2d55e8` | Primary buttons, links, active states |
| `brand-blue-dark` | `#1a3bbd` | Hero background, navbar |
| `brand-navy` | `#0f1f3d` | Footer background |
| `brand-yellow` | `#f5c518` | Primary CTA buttons, accent highlights |
| `brand-light` | `#f8faff` | Feature section backgrounds |

### Typography
- Font: System sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Hero H1: `text-4xl font-extrabold` on desktop, `text-3xl` on mobile
- Section H2: `text-3xl font-extrabold`
- Body: `text-sm` or `text-base`, `text-slate-600`

### Buttons
- **Primary CTA:** Yellow bg (`#f5c518`), blue text (`#1a3bbd`), `font-bold`, `rounded-lg`
- **Secondary CTA:** Transparent bg, white border, white text (on blue sections)
- **Outline:** Blue border + blue text (on white sections)
- **Dark:** Navy bg + white text (Enterprise plan)

---

## 4. Pages

### 4.1 Homepage (`/`)

Sections in order:
1. **Navbar** — Logo (K icon + "Kubee"), links (Home / Pricing / Blog / Contact), Sign In ghost btn, "Start Free" yellow btn
2. **Hero** — Blue gradient bg, decorative geometric accents (yellow + light-blue rectangles), pill tag, H1 "Manage Inventory. Grow Faster.", subtext, dual CTAs ("Start for Free →" + "Watch Demo"), floating dashboard UI mockup (black placeholder box for now)
3. **Stats Bar** — White bg, 4 metrics: 5,000+ businesses, ₹120Cr+ inventory managed, 99.9% uptime, 4.8★ rating
4. **Features Grid** — Light blue bg, 2×2 card grid: Real-time Stock, AI Forecasting, Auto Reordering, Reports & Analytics
5. **Feature Deep-dive 1** — White bg, text-left + visual-right: "Real-time Stock. Zero Surprises." with 3 numbered steps
6. **Feature Deep-dive 2** — White bg, visual-left + text-right: "End-to-End Order Management" with 3 numbered steps
7. **Footer CTA** — Blue gradient, email capture input + "Get Started →" button
8. **Footer** — Dark navy, 3-column link grid + copyright

### 4.2 Pricing (`/pricing`)

Sections:
1. **Navbar** (shared)
2. **Pricing Hero** — Blue bg, "Simple, Transparent Pricing", monthly/annual toggle with "Save 20%" green badge
3. **Plans Grid** — 3 columns, overlaps hero bottom:
   - **Free** — ₹0/mo, 200 SKUs, 1 location, 5 POs/month, outline CTA
   - **Pro** — ₹1,499/mo (Most Popular badge), unlimited SKUs, 5 warehouses, AI forecasting, auto reorder, 5 seats, filled blue CTA "Start 14-day Free Trial"
   - **Enterprise** — Custom, everything in Pro + unlimited seats, API integrations, dedicated AM, dark navy CTA "Contact Sales"
4. **FAQ Section** — Light bg, 4 accordion items: free plan, plan switching, GST billing, payment methods (UPI/Razorpay)
5. **Footer** (shared)

### 4.3 Blog Listing (`/blog`)

- Blue hero header with "Kubee Blog" + subtitle
- Card grid (3 cols desktop, 1 col mobile): each card has category tag, title, excerpt, date, "Read more →"
- Posts sourced from `data/blog-posts.ts`

### 4.4 Blog Post (`/blog/[slug]`)

- Static params generated from `blog-posts.ts`
- Blue hero with post title + metadata (date, category, read time)
- Wide single-column content body (prose styling)
- "Back to Blog" link + related posts footer

### 4.5 Contact (`/contact`)

- Blue hero header
- Two-column layout: left = contact info (email, WhatsApp, office address), right = contact form (Name, Email, Company, Message, Submit)
- Form is client component with basic validation; on submit shows an inline success message ("We'll get back to you within 24 hours"). No backend — form data is not sent anywhere yet. Can hook to an API route later.

### 4.6 About (`/about`)

- Blue hero: "Built for Indian Businesses"
- Mission paragraph
- Team section (placeholder cards — to be filled)
- Values grid (3 values: Speed, Reliability, Simplicity)
- CTA section linking to pricing

### 4.7 Terms of Service (`/terms`)

- Minimal navbar + footer
- Prose layout, dated 2026-04-20
- Standard SaaS terms sections: Definitions, Use of Service, Account, Payments, IP, Termination, Limitation of Liability, Governing Law (India / Telangana jurisdiction), Contact

### 4.8 Privacy Policy (`/privacy`)

- Same prose layout
- GDPR + Indian IT Act compliant sections: Data collected, How used, Third parties, Cookies, Retention, User rights, Contact

### 4.9 Cookie Policy (`/cookie-policy`)

- Same prose layout
- Types of cookies used, how to opt out

---

## 5. Shared Components

### Navbar
- Sticky, `position: sticky top-0 z-50`
- Background: `#1a3bbd` (blue) — same on all pages
- Mobile: hamburger menu → full-width dropdown

### Footer
- Background: `#0f1f3d` (dark navy)
- 3 link columns: Product, Company, Legal
- Social icons (Twitter/X, LinkedIn)
- Bottom bar: copyright + "Made in India 🇮🇳"

---

## 6. SEO

- Each page exports `metadata` with `title`, `description`, `openGraph` fields
- `robots.txt` and `sitemap.xml` via Next.js route handlers
- All images use `next/image` with proper `alt` tags
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`

---

## 7. Responsiveness

- Mobile-first Tailwind classes throughout
- Navbar collapses to hamburger on `< md`
- Hero: stacks vertically on mobile (mockup below text)
- Features grid: 2×2 → 1 col on mobile
- Pricing: horizontal scroll on mobile (3 cards visible by swipe) or stacked
- Footer: single column stack on mobile

---

## 8. Image Placeholders

All product screenshot areas use a black `bg-black rounded-xl` placeholder div with an aspect ratio. User will drop real screenshots in later. No stock images.

---

## 9. Plugins / Packages to Add

- `@tailwindcss/typography` — for blog post and legal page prose styling
- No other dependencies needed

---

## 10. Out of Scope

- Authentication / login flow (separate app)
- Payment integration
- Blog CMS / admin panel
- Analytics (can add GTM script tag later)
- Dark mode
