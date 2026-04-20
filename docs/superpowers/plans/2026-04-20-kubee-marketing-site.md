# Kubee Marketing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, SEO-first Next.js 16 marketing site for kubee.in covering 9 pages with shared Navbar/Footer, full design system, and responsive layout.

**Architecture:** Next.js 16 App Router with static generation (SSG) on all pages. Shared components live in `components/` at project root. Data (blog posts, pricing tiers) lives in `data/` at project root. Three client components handle interactivity: Navbar (hamburger), PricingToggle (monthly/annual), FAQSection (accordion), ContactForm (form state).

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, @tailwindcss/typography

---

## File Map

| File | Purpose |
|---|---|
| `app/globals.css` | Brand color tokens + typography plugin |
| `app/layout.tsx` | Root layout — wraps all pages with Navbar + Footer |
| `app/page.tsx` | Homepage (/) |
| `app/pricing/page.tsx` | Pricing page |
| `app/blog/page.tsx` | Blog listing |
| `app/blog/[slug]/page.tsx` | Blog post |
| `app/contact/page.tsx` | Contact page |
| `app/about/page.tsx` | About page |
| `app/terms/page.tsx` | Terms of Service |
| `app/privacy/page.tsx` | Privacy Policy |
| `app/cookie-policy/page.tsx` | Cookie Policy |
| `app/sitemap.ts` | Auto-generated sitemap.xml |
| `app/robots.ts` | robots.txt |
| `components/Navbar.tsx` | Sticky blue navbar, mobile hamburger — `use client` |
| `components/Footer.tsx` | Dark navy footer |
| `components/HeroSection.tsx` | Blue gradient hero with floating mockup |
| `components/StatsBar.tsx` | 4-metric stats bar |
| `components/FeaturesGrid.tsx` | 2×2 feature cards grid |
| `components/FeaturesAlternating.tsx` | Alternating text + visual rows |
| `components/FooterCTA.tsx` | Email CTA section |
| `components/PricingCard.tsx` | Single pricing tier card |
| `components/PricingToggle.tsx` | Monthly/annual toggle — `use client` |
| `components/FAQSection.tsx` | Accordion FAQ — `use client` |
| `components/BlogCard.tsx` | Blog listing card |
| `components/ContactForm.tsx` | Contact form with validation — `use client` |
| `data/blog-posts.ts` | Blog post data + types |
| `data/pricing.ts` | Pricing tier data + types |

---

## Task 1: Foundation — Install Package + Brand Colors

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1.1: Install @tailwindcss/typography**

```bash
npm install @tailwindcss/typography
```

Expected output: `added 1 package`

- [ ] **Step 1.2: Replace globals.css with brand tokens + typography plugin**

Replace the entire content of `app/globals.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme inline {
  --color-brand-blue: #2d55e8;
  --color-brand-blue-dark: #1a3bbd;
  --color-brand-navy: #0f1f3d;
  --color-brand-yellow: #f5c518;
  --color-brand-light: #f8faff;
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #ffffff;
  color: #1e293b;
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 1.3: Update root layout.tsx**

Replace `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    default: "Kubee — Inventory Management for Indian Businesses",
    template: "%s | Kubee",
  },
  description:
    "Real-time inventory tracking, AI-powered forecasting, and automated reordering. Built for Indian businesses to scale operations effortlessly.",
  metadataBase: new URL("https://kubee.in"),
  openGraph: {
    siteName: "Kubee",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

- [ ] **Step 1.4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 1.5: Commit**

```bash
git add app/globals.css app/layout.tsx package.json package-lock.json
git commit -m "feat: add brand tokens, typography plugin, update root layout"
```

---

## Task 2: Data Layer

**Files:**
- Create: `data/blog-posts.ts`
- Create: `data/pricing.ts`

- [ ] **Step 2.1: Create data/blog-posts.ts**

```ts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-reduce-stockouts-in-retail",
    title: "How to Reduce Stockouts in Indian Retail",
    excerpt:
      "Stockouts cost Indian retailers an estimated ₹2.5 lakh crore annually. Here's a practical guide to preventing them using modern inventory management.",
    date: "2026-04-10",
    category: "Inventory Tips",
    readTime: 5,
    content: `
## Why Stockouts Happen

Stockouts are rarely random. They happen because of three root causes: poor demand forecasting, slow supplier response, and no early-warning system.

## 1. Set Reorder Points Based on Lead Time

A reorder point is the stock level that triggers a new purchase order. Calculate it as:

**Reorder Point = Average Daily Sales × Supplier Lead Time (days) + Safety Stock**

For example, if you sell 20 units/day and your supplier takes 5 days to deliver, set your reorder point at 120 units (20 × 5 + 20 safety stock).

## 2. Use Historical Data to Forecast Demand

Manual guesswork is the enemy. Pull your last 90 days of sales data and look for patterns — day of week, festivals, seasonal spikes. Kubee's AI forecasting does this automatically.

## 3. Set Up Automatic Reorder Alerts

Don't wait until stock hits zero. Set up alerts at 30% of your average stock level. Kubee sends WhatsApp and email alerts when stock crosses your defined threshold.

## 4. Track Vendor Lead Times

Not all suppliers deliver on time. Track actual delivery dates versus promised dates. With Kubee, every GRN records the delivery date so you can calculate real lead time per vendor.

## Summary

The fastest path to zero stockouts: real-time stock visibility + automated reorder triggers + reliable supplier data. Kubee handles all three out of the box.
    `.trim(),
  },
  {
    slug: "gst-inventory-management-india",
    title: "GST & Inventory Management: What Indian Businesses Must Know",
    excerpt:
      "GST compliance is mandatory, but most inventory tools make it harder than it needs to be. Here's what to look for in a GST-ready inventory system.",
    date: "2026-04-01",
    category: "Compliance",
    readTime: 6,
    content: `
## GST and Your Inventory Records

Under GST, you must maintain accurate records of stock movement, purchase invoices, and sales invoices for at least 6 years. Any inventory system you use must support this.

## What a GST-Ready Inventory System Must Do

1. **Record HSN/SAC codes** on every item in your catalog
2. **Generate GST-compliant purchase orders** with GSTIN, place of supply, and tax breakdowns
3. **Track ITC (Input Tax Credit)** — every GRN should record the GST amount for ITC claims
4. **Produce GSTR-1 ready sales data** exportable per period

## Common GST Mistakes in Inventory Management

- Not linking purchase orders to GRNs (breaks ITC trail)
- Missing place-of-supply data on inter-state stock transfers
- Not recording purchase returns (PR) against the original GRN

## How Kubee Handles GST

Kubee's purchase and sales modules are built around GST workflows. Every PO, GRN, Invoice, and return document captures the required tax fields. Reports export in formats ready for filing.
    `.trim(),
  },
  {
    slug: "ai-inventory-forecasting-small-business",
    title: "AI Forecasting for Small Business Inventory: A Plain-English Guide",
    excerpt:
      "AI forecasting sounds complex, but for inventory management it comes down to one thing: predicting how much stock you'll need before you need it.",
    date: "2026-03-22",
    category: "AI & Technology",
    readTime: 4,
    content: `
## What AI Forecasting Actually Does

AI inventory forecasting uses your past sales data to predict future demand. It's not magic — it's pattern recognition applied to your numbers.

A good forecasting model looks at:
- Historical sales per SKU per time period
- Day-of-week and seasonal effects
- Trends (growing vs declining items)
- External signals (if available)

## Why Spreadsheets Fail at Forecasting

Spreadsheets require you to manually update formulas every month. They can't automatically detect that SKU-123 always spikes 3x during Diwali. They don't update in real time as sales come in.

## What to Expect from Kubee AI Forecasting

Kubee's forecasting module analyzes your last 180 days of sales and generates a 30-day demand prediction per SKU. It automatically flags:
- Items where stock will run out in under 14 days
- Items that are overstocked (holding cost waste)
- New seasonal patterns detected in current data

## Is It Accurate?

Accuracy depends on data quality. If your stock records and sales data are clean, Kubee's forecasts achieve 85–92% accuracy for established SKUs. For new items with less than 30 days of history, it falls back to category averages.
    `.trim(),
  },
];
```

- [ ] **Step 2.2: Create data/pricing.ts**

```ts
export type PricingFeature = {
  text: string;
  included: boolean;
};

export type PricingTier = {
  id: string;
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  cta: string;
  ctaStyle: "outline" | "filled" | "dark";
  popular: boolean;
  features: PricingFeature[];
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for solo operators and tiny shops getting started.",
    cta: "Get Started Free",
    ctaStyle: "outline",
    popular: false,
    features: [
      { text: "Up to 200 SKUs", included: true },
      { text: "1 warehouse / location", included: true },
      { text: "Basic stock tracking", included: true },
      { text: "5 purchase orders / month", included: true },
      { text: "AI demand forecasting", included: false },
      { text: "Auto reorder triggers", included: false },
      { text: "Multi-user access", included: false },
      { text: "Advanced reports (Excel/PDF)", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 1499,
    annualPrice: 1199,
    description: "For growing SMBs that need full inventory + order control.",
    cta: "Start 14-day Free Trial",
    ctaStyle: "filled",
    popular: true,
    features: [
      { text: "Unlimited SKUs", included: true },
      { text: "Up to 5 warehouses", included: true },
      { text: "Real-time stock ledger", included: true },
      { text: "Unlimited POs, GRNs, Invoices", included: true },
      { text: "AI demand forecasting", included: true },
      { text: "Auto reorder triggers", included: true },
      { text: "5 user seats", included: true },
      { text: "Advanced reports (Excel/PDF)", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "For large businesses needing custom workflows, integrations, and SLAs.",
    cta: "Contact Sales",
    ctaStyle: "dark",
    popular: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited warehouses", included: true },
      { text: "Unlimited user seats", included: true },
      { text: "Custom approval workflows", included: true },
      { text: "API & ERP integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority 24/7 support", included: true },
      { text: "Custom SLA & onboarding", included: true },
    ],
  },
];
```

- [ ] **Step 2.3: Verify types compile**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 2.4: Commit**

```bash
git add data/blog-posts.ts data/pricing.ts
git commit -m "feat: add blog post and pricing data with TypeScript types"
```

---

## Task 3: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 3.1: Create components/Navbar.tsx**

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-blue-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center font-extrabold text-sm text-brand-blue-dark">
              K
            </div>
            <span className="font-bold text-lg text-white">Kubee</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="text-sm text-white border border-white/30 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="text-sm font-bold bg-brand-yellow text-brand-blue-dark px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-blue-dark border-t border-white/10 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/80 hover:text-white border-b border-white/10"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link href="#" className="flex-1 text-center text-sm text-white border border-white/30 px-4 py-2 rounded-lg">
              Sign in
            </Link>
            <Link href="#" className="flex-1 text-center text-sm font-bold bg-brand-yellow text-brand-blue-dark px-4 py-2 rounded-lg">
              Start Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 3.2: Verify**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3.3: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger"
```

---

## Task 4: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 4.1: Create components/Footer.tsx**

```tsx
import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/#features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center font-extrabold text-sm text-brand-blue-dark">
                K
              </div>
              <span className="font-bold text-lg">Kubee</span>
            </div>
            <p className="text-sm text-white/50 max-w-[200px] leading-relaxed">
              Modern inventory management built for Indian businesses.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Twitter" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-10">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Kubee Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Made with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4.2: Verify**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4.3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add dark navy Footer with 3-column links"
```

---

## Task 5: Homepage — Hero, Stats, Footer CTA Components

**Files:**
- Create: `components/HeroSection.tsx`
- Create: `components/StatsBar.tsx`
- Create: `components/FooterCTA.tsx`

- [ ] **Step 5.1: Create components/HeroSection.tsx**

```tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-8 right-24 w-14 h-14 bg-brand-yellow rounded-xl rotate-12 opacity-90 hidden sm:block" />
      <div className="absolute bottom-24 left-6 w-10 h-10 bg-blue-300 rounded-lg -rotate-8 opacity-50 hidden sm:block" />
      <div className="absolute top-1/3 right-8 w-6 h-6 bg-blue-200 rounded opacity-30 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 relative z-10">
        {/* Tag */}
        <div className="flex justify-center mb-5">
          <span className="inline-block bg-white/15 text-white text-xs px-4 py-1.5 rounded-full tracking-wide">
            ✦ Modern Inventory Software for Indian Businesses
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight max-w-3xl mx-auto mb-5">
          Manage Inventory.{" "}
          <span className="text-brand-yellow">Grow Faster.</span>
        </h1>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-xl mx-auto mb-8 leading-relaxed">
          Real-time tracking, AI-powered forecasting, and automated reordering.
          Built to scale your operations effortlessly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Link
            href="#"
            className="bg-brand-yellow text-brand-blue-dark font-bold px-7 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity text-center"
          >
            Start for Free →
          </Link>
          <Link
            href="#"
            className="bg-white/15 text-white border border-white/30 px-7 py-3 rounded-xl text-sm hover:bg-white/20 transition-colors text-center"
          >
            ▶ Watch Demo
          </Link>
        </div>

        {/* Floating dashboard mockup */}
        <div className="bg-white rounded-t-2xl shadow-2xl mx-auto max-w-3xl overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-3 border-b border-slate-100">
            <span className="text-xs font-semibold text-brand-blue border-b-2 border-brand-blue pb-1">Dashboard</span>
            <span className="text-xs text-slate-400">Inventory</span>
            <span className="text-xs text-slate-400">Orders</span>
            <span className="text-xs text-slate-400">Reports</span>
          </div>
          {/* Black placeholder — replace with real screenshot */}
          <div className="bg-black w-full aspect-[16/7]" aria-label="Kubee dashboard screenshot" />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5.2: Create components/StatsBar.tsx**

```tsx
const stats = [
  { value: "5,000+", label: "Businesses onboarded" },
  { value: "₹120Cr+", label: "Inventory managed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.8★", label: "Avg. user rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {stats.map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <div className="text-3xl font-extrabold text-brand-blue mb-1">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5.3: Create components/FooterCTA.tsx**

```tsx
export default function FooterCTA() {
  return (
    <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to take control of your inventory?
        </h2>
        <p className="text-base text-white/80 mb-8">
          Join 5,000+ Indian businesses already using Kubee. Free forever, no credit card needed.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your work email"
            required
            className="flex-1 px-4 py-3 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-yellow"
          />
          <button
            type="submit"
            className="bg-brand-yellow text-brand-blue-dark font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Started →
          </button>
        </form>
      </div>
    </section>
  );
}
```

- [ ] **Step 5.4: Verify**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5.5: Commit**

```bash
git add components/HeroSection.tsx components/StatsBar.tsx components/FooterCTA.tsx
git commit -m "feat: add HeroSection, StatsBar, FooterCTA components"
```

---

## Task 6: Homepage — Features Components

**Files:**
- Create: `components/FeaturesGrid.tsx`
- Create: `components/FeaturesAlternating.tsx`

- [ ] **Step 6.1: Create components/FeaturesGrid.tsx**

```tsx
const features = [
  {
    icon: "📦",
    title: "Real-time Stock Tracking",
    description:
      "See live inventory levels across all locations. Never face stockouts or overstocking again.",
  },
  {
    icon: "🤖",
    title: "AI-powered Forecasting",
    description:
      "Smart demand predictions based on sales history, seasonality, and market trends.",
  },
  {
    icon: "🔄",
    title: "Auto Reordering",
    description:
      "Set reorder points and let Kubee automatically generate purchase orders when stock is low.",
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    description:
      "Excel-based reports, dashboards, and vendor analytics. All exportable in one click.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-brand-light py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold text-brand-blue uppercase tracking-widest text-center mb-3">
          What Kubee Does
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-4">
          Everything your business needs
        </h2>
        <p className="text-sm text-slate-500 text-center mb-12">
          From stock tracking to purchase orders — all in one place
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6.2: Create components/FeaturesAlternating.tsx**

```tsx
const sections = [
  {
    tag: "Inventory",
    title: "Real-time Stock. Zero Surprises.",
    description:
      "Track every item across warehouses, branches, and locations with a live stock ledger and instant alerts.",
    steps: [
      "Connect your locations and add your product catalog",
      "Track every inward and outward movement automatically",
      "Get alerts before stock runs out — never lose a sale",
    ],
    reverse: false,
  },
  {
    tag: "Purchases & Sales",
    title: "End-to-End Order Management",
    description:
      "Handle PRQs, POs, GRNs, Sales Orders, Invoices, and Delivery Challans — all with approval workflows.",
    steps: [
      "Raise purchase requests and get auto-approvals",
      "Generate POs, GRNs, and manage vendor payments",
      "Track sales from quote to invoice to delivery",
    ],
    reverse: true,
  },
];

export default function FeaturesAlternating() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {sections.map((s) => (
          <div
            key={s.title}
            className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
          >
            {/* Visual placeholder */}
            <div className="flex-1 w-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex items-center justify-center min-h-[220px]">
                <div className="bg-white rounded-xl p-5 shadow-md w-full max-w-xs">
                  <div className="text-xs font-bold text-slate-800 mb-3">{s.tag}</div>
                  {/* Black placeholder for screenshot */}
                  <div className="bg-black rounded-lg w-full aspect-video" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
                {s.tag}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{s.description}</p>
              <ol className="space-y-3">
                {s.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-brand-blue-dark text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-600 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6.3: Verify**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6.4: Commit**

```bash
git add components/FeaturesGrid.tsx components/FeaturesAlternating.tsx
git commit -m "feat: add FeaturesGrid and FeaturesAlternating components"
```

---

## Task 7: Assemble Homepage + Wire Root Layout

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 7.1: Update app/layout.tsx to include Navbar and Footer**

```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    default: "Kubee — Inventory Management for Indian Businesses",
    template: "%s | Kubee",
  },
  description:
    "Real-time inventory tracking, AI-powered forecasting, and automated reordering. Built for Indian businesses to scale operations effortlessly.",
  metadataBase: new URL("https://kubee.in"),
  openGraph: {
    siteName: "Kubee",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 7.2: Replace app/page.tsx with assembled homepage**

```tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesGrid from "@/components/FeaturesGrid";
import FeaturesAlternating from "@/components/FeaturesAlternating";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Kubee — Inventory Management for Indian Businesses",
  description:
    "Real-time tracking, AI-powered forecasting, and automated reordering. Built to scale your operations effortlessly.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <FeaturesAlternating />
      <FooterCTA />
    </>
  );
}
```

- [ ] **Step 7.3: Check tsconfig has path alias configured**

Open `tsconfig.json`. Verify it has `"paths": { "@/*": ["./*"] }` inside `compilerOptions`. If it doesn't, add it:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

- [ ] **Step 7.4: Run dev server and visually verify homepage**

```bash
npm run dev
```

Open `http://localhost:3000` in a browser. Check:
- Navbar renders with blue background and yellow K logo
- Hero section has blue gradient and black placeholder box
- Stats bar shows 4 metrics
- Features grid shows 4 cards
- Alternating features shows 2 rows
- Footer CTA is blue
- Footer is dark navy

- [ ] **Step 7.5: Verify build**

```bash
npm run build
```

Expected: ✓ compiled successfully, no errors.

- [ ] **Step 7.6: Commit**

```bash
git add app/layout.tsx app/page.tsx tsconfig.json
git commit -m "feat: assemble homepage, wire Navbar and Footer in root layout"
```

---

## Task 8: Pricing Page Components

**Files:**
- Create: `components/PricingCard.tsx`
- Create: `components/PricingToggle.tsx`
- Create: `components/FAQSection.tsx`

- [ ] **Step 8.1: Create components/PricingCard.tsx**

```tsx
import type { PricingTier } from "@/data/pricing";
import Link from "next/link";

type Props = {
  tier: PricingTier;
  annual: boolean;
};

export default function PricingCard({ tier, annual }: Props) {
  const price = annual ? tier.annualPrice : tier.monthlyPrice;

  const ctaClasses: Record<PricingTier["ctaStyle"], string> = {
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-blue-50",
    filled: "bg-brand-blue text-white hover:opacity-90",
    dark: "bg-brand-navy text-white hover:opacity-90",
  };

  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col ${
        tier.popular
          ? "border-brand-blue shadow-xl shadow-brand-blue/20"
          : "border-slate-200"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          ⭐ Most Popular
        </div>
      )}

      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
        {tier.name}
      </div>

      <div className="mb-2">
        {price === null ? (
          <span className="text-4xl font-extrabold text-slate-900">Custom</span>
        ) : price === 0 ? (
          <span className="text-4xl font-extrabold text-slate-900">
            ₹0<span className="text-base font-normal text-slate-400">/month</span>
          </span>
        ) : (
          <span className="text-4xl font-extrabold text-slate-900">
            <sup className="text-xl font-normal text-slate-500">₹</sup>
            {price.toLocaleString("en-IN")}
            <span className="text-base font-normal text-slate-400">/month</span>
          </span>
        )}
      </div>

      {annual && tier.monthlyPrice && tier.annualPrice && tier.monthlyPrice > 0 && (
        <p className="text-xs text-green-600 mb-2">
          Save ₹{((tier.monthlyPrice - tier.annualPrice) * 12).toLocaleString("en-IN")}/year
        </p>
      )}

      <p className="text-sm text-slate-500 mb-6 leading-relaxed">{tier.description}</p>

      <Link
        href={tier.ctaStyle === "dark" ? "/contact" : "#"}
        className={`w-full text-center font-bold text-sm py-3 rounded-xl transition-all mb-6 ${ctaClasses[tier.ctaStyle]}`}
      >
        {tier.cta}
      </Link>

      <ul className="space-y-3 mt-auto">
        {tier.features.map((f) => (
          <li key={f.text} className="flex gap-2 items-start">
            {f.included ? (
              <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px] flex-shrink-0 mt-0.5">
                ✓
              </span>
            ) : (
              <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-[10px] flex-shrink-0 mt-0.5">
                ✗
              </span>
            )}
            <span className={`text-xs ${f.included ? "text-slate-600" : "text-slate-300"}`}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 8.2: Create components/PricingToggle.tsx**

```tsx
"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import { pricingTiers } from "@/data/pricing";

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-white/15 rounded-xl p-1 gap-1">
          <button
            onClick={() => setAnnual(false)}
            className={`text-sm px-5 py-2 rounded-lg transition-all font-medium ${
              !annual ? "bg-white text-brand-blue-dark font-bold" : "text-white/70 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`text-sm px-5 py-2 rounded-lg transition-all font-medium flex items-center gap-2 ${
              annual ? "bg-white text-brand-blue-dark font-bold" : "text-white/70 hover:text-white"
            }`}
          >
            Annual
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} annual={annual} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 8.3: Create components/FAQSection.tsx**

```tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is the Free plan really free forever?",
    a: "Yes. No credit card required. The Free plan stays free with no expiry — upgrade only when you need more capacity or features.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Yes. Upgrade or downgrade at any time from your account settings. Billing is prorated — you only pay for what you use.",
  },
  {
    q: "Do you support GST billing?",
    a: "Yes. All invoices are GST-compliant. You'll receive a proper GST tax invoice for every payment, with GSTIN support for your records.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, Net Banking, Credit/Debit cards, and Razorpay wallets. All major Indian payment methods are supported.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is stored in Indian data centers, encrypted at rest and in transit. We comply with the Indian IT Act and GDPR.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-brand-light py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-semibold text-sm text-slate-800">{faq.q}</span>
                <span className="text-slate-400 ml-4 flex-shrink-0 text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8.4: Verify**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 8.5: Commit**

```bash
git add components/PricingCard.tsx components/PricingToggle.tsx components/FAQSection.tsx
git commit -m "feat: add PricingCard, PricingToggle (with annual toggle), FAQSection"
```

---

## Task 9: Pricing Page

**Files:**
- Create: `app/pricing/page.tsx`

- [ ] **Step 9.1: Create app/pricing/page.tsx**

```tsx
import type { Metadata } from "next";
import PricingToggle from "@/components/PricingToggle";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Kubee. Start free forever, upgrade when you need more. No hidden charges.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue pt-16 pb-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-base text-white/80 max-w-md mx-auto mb-10">
          Start free. Upgrade when your business needs more. No hidden charges.
        </p>
        <PricingToggle />
      </section>

      <FAQSection />
      <FooterCTA />
    </>
  );
}
```

- [ ] **Step 9.2: Run dev server and visually verify pricing page**

```bash
npm run dev
```

Open `http://localhost:3000/pricing`. Check:
- Blue hero with "Simple, Transparent Pricing"
- Toggle switches between Monthly / Annual (Annual shows "Save 20%" badge)
- 3 pricing cards render — Pro has blue border + "Most Popular" badge
- Annual toggle updates prices (Free stays ₹0, Pro shows ₹1,199)
- FAQ accordion opens/closes correctly
- Footer CTA renders

- [ ] **Step 9.3: Commit**

```bash
git add app/pricing/page.tsx
git commit -m "feat: add pricing page with toggle, cards, FAQ, CTA"
```

---

## Task 10: Blog Components + Blog Pages

**Files:**
- Create: `components/BlogCard.tsx`
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`

- [ ] **Step 10.1: Create components/BlogCard.tsx**

```tsx
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

type Props = { post: BlogPost };

export default function BlogCard({ post }: Props) {
  const formatted = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Black placeholder for post cover image */}
      <div className="bg-black w-full aspect-[16/9]" />
      <div className="p-5 flex flex-col flex-1">
        <span className="inline-block bg-blue-50 text-brand-blue text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
          {post.category}
        </span>
        <h2 className="font-bold text-slate-900 text-base leading-snug mb-2">{post.title}</h2>
        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {formatted} · {post.readTime} min read
          </span>
          <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-brand-blue hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 10.2: Create app/blog/page.tsx**

```tsx
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/BlogCard";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Inventory management tips, GST guides, and supply chain insights for Indian businesses.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Kubee Blog</h1>
        <p className="text-base text-white/80 max-w-md mx-auto">
          Inventory tips, compliance guides, and business insights for Indian entrepreneurs.
        </p>
      </section>

      {/* Posts */}
      <section className="bg-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
```

- [ ] **Step 10.3: Create app/blog/[slug]/page.tsx**

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formatted = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-white/70">
            {formatted} · {post.readTime} min read
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1 text-xs text-brand-blue font-semibold mb-8 hover:underline">
            ← Back to Blog
          </Link>
          <article
            className="prose prose-slate prose-sm sm:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
          />
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-brand-light py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">More from the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs text-brand-blue font-semibold">{p.category}</span>
                  <h3 className="text-sm font-bold text-slate-800 mt-1 leading-snug">{p.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 10.4: Verify**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 10.5: Verify blog pages in dev**

```bash
npm run dev
```

- Open `http://localhost:3000/blog` — 3 blog cards render
- Open `http://localhost:3000/blog/how-to-reduce-stockouts-in-retail` — full post renders

- [ ] **Step 10.6: Commit**

```bash
git add components/BlogCard.tsx app/blog/page.tsx "app/blog/[slug]/page.tsx"
git commit -m "feat: add blog listing and post pages with static generation"
```

---

## Task 11: Contact Page

**Files:**
- Create: `components/ContactForm.tsx`
- Create: `app/contact/page.tsx`

- [ ] **Step 11.1: Create components/ContactForm.tsx**

```tsx
"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="font-bold text-slate-900 text-lg mb-2">Message received!</h3>
        <p className="text-sm text-slate-600">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  const field = (
    id: keyof FormState,
    label: string,
    type: string = "text",
    rows?: number
  ) => (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue resize-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
        />
      )}
      {errors[id] && <p className="text-xs text-red-500 mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {field("name", "Your Name")}
      {field("email", "Work Email", "email")}
      {field("company", "Company (optional)")}
      {field("message", "Message", "text", 5)}
      <button
        type="submit"
        className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
      >
        Send Message →
      </button>
    </form>
  );
}
```

- [ ] **Step 11.2: Create app/contact/page.tsx**

```tsx
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Kubee team. We're here to help Indian businesses manage inventory better.",
};

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "hello@kubee.in",
    href: "mailto:hello@kubee.in",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  {
    icon: "📍",
    label: "Office",
    value: "Hyderabad, Telangana, India",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Get in Touch</h1>
        <p className="text-base text-white/80 max-w-md mx-auto">
          Have questions? Our team typically responds within 24 hours.
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Contact Details</h2>
            <div className="space-y-5">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm font-semibold text-brand-blue hover:underline">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-700">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-brand-blue-dark rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Looking for a demo?</h3>
              <p className="text-sm text-white/80 mb-4">
                Book a 30-minute walkthrough with our team and see Kubee in action for your business.
              </p>
              <a
                href="mailto:hello@kubee.in"
                className="inline-block bg-brand-yellow text-brand-blue-dark font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 11.3: Verify**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 11.4: Verify contact page in dev**

```bash
npm run dev
```

Open `http://localhost:3000/contact`. Check:
- Two-column layout (contact info + form)
- Form validates: try submitting empty — errors appear
- Form submits: fill all fields + submit — success message shows

- [ ] **Step 11.5: Commit**

```bash
git add components/ContactForm.tsx app/contact/page.tsx
git commit -m "feat: add contact page with validated form and success state"
```

---

## Task 12: About Page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 12.1: Create app/about/page.tsx**

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kubee — modern inventory management built for Indian businesses.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed",
    description: "Operations shouldn't wait. Kubee is built to be fast — loading, searching, and processing in real time.",
  },
  {
    icon: "🔒",
    title: "Reliability",
    description: "99.9% uptime SLA. Your data is always available when you need it, stored in Indian data centers.",
  },
  {
    icon: "🎯",
    title: "Simplicity",
    description: "Powerful enough for enterprises, simple enough for a kirana store owner to use on day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Built for Indian Businesses
        </h1>
        <p className="text-base text-white/80 max-w-xl mx-auto">
          We started Kubee because we saw Indian businesses struggling with outdated spreadsheets and expensive software that wasn't built for the way India works.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">Our Mission</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            Give every Indian business the inventory tools that were once only available to large enterprises
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            India's 63 million MSMEs are the backbone of the economy. Yet most of them manage stock in Excel or paper registers. Kubee changes that — with real-time tracking, AI forecasting, and end-to-end order management that works for both a 2-person shop and a 200-person distributor.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-light py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">The Team</h2>
          <p className="text-sm text-slate-500 mb-8">A team of engineers, operators, and entrepreneurs from across India.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-black rounded-2xl w-full aspect-square mb-3" />
                <div className="h-3 bg-slate-200 rounded w-3/4 mx-auto mb-1.5" />
                <div className="h-2.5 bg-slate-100 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-dark py-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to join us?</h2>
        <p className="text-sm text-white/80 mb-8">Start with the free plan today. No credit card needed.</p>
        <Link
          href="/pricing"
          className="inline-block bg-brand-yellow text-brand-blue-dark font-bold px-8 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
        >
          See Pricing →
        </Link>
      </section>
    </>
  );
}
```

- [ ] **Step 12.2: Verify and commit**

```bash
npx tsc --noEmit && git add app/about/page.tsx && git commit -m "feat: add about page with mission, values, team placeholders"
```

---

## Task 13: Legal Pages (Terms, Privacy, Cookie Policy)

**Files:**
- Create: `app/terms/page.tsx`
- Create: `app/privacy/page.tsx`
- Create: `app/cookie-policy/page.tsx`

- [ ] **Step 13.1: Create a shared prose layout component inline — create app/terms/page.tsx**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Kubee inventory management software.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-white/70">Last updated: 20 April 2026</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm sm:prose-base">
          <h2>1. Definitions</h2>
          <p>"Service" means the Kubee inventory management platform accessible at kubee.in. "User" means any individual or entity that creates an account. "Content" means data, text, files, and other materials uploaded to the Service.</p>

          <h2>2. Use of Service</h2>
          <p>You may use the Service only for lawful business purposes in accordance with these Terms. You agree not to: (a) use the Service to store, transmit, or distribute unlawful content; (b) attempt to gain unauthorized access to any part of the Service; (c) use automated tools to scrape or extract data from the Service without our written consent.</p>

          <h2>3. Account Responsibility</h2>
          <p>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify us immediately at hello@kubee.in if you suspect unauthorized use of your account.</p>

          <h2>4. Payments and Billing</h2>
          <p>Paid plans are billed monthly or annually in advance in Indian Rupees (INR). All prices are exclusive of GST unless stated otherwise. You will receive a GST-compliant invoice for every payment. Refunds are not provided for partial months. You may cancel at any time; your plan continues until the end of the billing period.</p>

          <h2>5. Intellectual Property</h2>
          <p>Kubee and its licensors retain all rights to the Service, including all software, designs, trademarks, and proprietary content. You retain ownership of all Content you upload. By uploading Content, you grant Kubee a limited license to store, process, and display it solely for the purpose of providing the Service.</p>

          <h2>6. Termination</h2>
          <p>We may suspend or terminate your account if you violate these Terms. You may terminate your account at any time from your account settings. Upon termination, your data will be retained for 30 days before permanent deletion unless you request earlier deletion.</p>

          <h2>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, Kubee shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.</p>

          <h2>9. Contact</h2>
          <p>For any questions regarding these Terms, contact us at <a href="mailto:legal@kubee.in">legal@kubee.in</a>.</p>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 13.2: Create app/privacy/page.tsx**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Kubee inventory management software.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-white/70">Last updated: 20 April 2026</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm sm:prose-base">
          <h2>1. Data We Collect</h2>
          <p>We collect: (a) <strong>Account data</strong> — name, email, company name, GSTIN; (b) <strong>Usage data</strong> — pages visited, features used, session duration; (c) <strong>Business data</strong> — inventory records, purchase orders, and other content you upload; (d) <strong>Payment data</strong> — processed by Razorpay; we do not store card details.</p>

          <h2>2. How We Use Your Data</h2>
          <p>We use your data to: provide and improve the Service; send product updates and billing notifications; comply with legal obligations under the Indian IT Act 2000 and GST regulations; analyse usage patterns in aggregate to improve the product.</p>

          <h2>3. Third-Party Services</h2>
          <p>We use: <strong>Razorpay</strong> for payment processing; <strong>AWS Mumbai</strong> for cloud hosting; <strong>Google Analytics</strong> for anonymous usage analytics. Each third party has its own privacy policy. We do not sell your data to any third party.</p>

          <h2>4. Cookies</h2>
          <p>We use essential cookies for authentication and session management, and optional analytics cookies. See our <a href="/cookie-policy">Cookie Policy</a> for details.</p>

          <h2>5. Data Retention</h2>
          <p>We retain your data for as long as your account is active. After account deletion, data is retained for 30 days for recovery purposes, then permanently deleted.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to: access your personal data; correct inaccurate data; request deletion of your account and data; export your data in machine-readable format. Contact <a href="mailto:privacy@kubee.in">privacy@kubee.in</a> to exercise these rights.</p>

          <h2>7. Security</h2>
          <p>All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Our servers are hosted in AWS Mumbai (ap-south-1), keeping your data within India.</p>

          <h2>8. Contact</h2>
          <p>Data Protection Officer: <a href="mailto:privacy@kubee.in">privacy@kubee.in</a></p>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 13.3: Create app/cookie-policy/page.tsx**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Kubee inventory management software.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Cookie Policy</h1>
        <p className="text-sm text-white/70">Last updated: 20 April 2026</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm sm:prose-base">
          <h2>What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help us remember your preferences and understand how you use our service.</p>

          <h2>Cookies We Use</h2>

          <h3>Essential Cookies (always active)</h3>
          <p>These cookies are necessary for the Service to function and cannot be disabled.</p>
          <ul>
            <li><strong>session_id</strong> — keeps you logged in during your session. Expires when you close your browser.</li>
            <li><strong>csrf_token</strong> — prevents cross-site request forgery attacks. Session-scoped.</li>
          </ul>

          <h3>Analytics Cookies (optional)</h3>
          <p>These help us understand how visitors use our marketing site. All data is anonymised.</p>
          <ul>
            <li><strong>_ga, _gid</strong> — Google Analytics. Track page views and session duration anonymously. Expires in 2 years / 24 hours respectively.</li>
          </ul>

          <h3>Preference Cookies (optional)</h3>
          <ul>
            <li><strong>kubee_billing</strong> — remembers whether you last selected Monthly or Annual pricing. Expires in 30 days.</li>
          </ul>

          <h2>How to Opt Out</h2>
          <p>You can disable non-essential cookies in your browser settings. Instructions for major browsers:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          </ul>

          <h2>Contact</h2>
          <p>Questions about cookies? Email <a href="mailto:privacy@kubee.in">privacy@kubee.in</a>.</p>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 13.4: Verify and commit**

```bash
npx tsc --noEmit && git add app/terms/page.tsx app/privacy/page.tsx app/cookie-policy/page.tsx && git commit -m "feat: add Terms, Privacy, and Cookie Policy legal pages"
```

---

## Task 14: SEO — Sitemap + Robots

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 14.1: Create app/sitemap.ts**

```ts
import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const base = "https://kubee.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
```

- [ ] **Step 14.2: Create app/robots.ts**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://kubee.in/sitemap.xml",
  };
}
```

- [ ] **Step 14.3: Verify and commit**

```bash
npx tsc --noEmit && git add app/sitemap.ts app/robots.ts && git commit -m "feat: add sitemap.xml and robots.txt via Next.js route handlers"
```

---

## Task 15: Final Build Verification

- [ ] **Step 15.1: Run full production build**

```bash
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Generating static pages (14/14)
Route (app)                     Size
├ ○ /                           ...
├ ○ /about                      ...
├ ○ /blog                       ...
├ ● /blog/[slug]                ...
├ ○ /contact                    ...
├ ○ /cookie-policy              ...
├ ○ /pricing                    ...
├ ○ /privacy                    ...
├ ○ /terms                      ...
```

If any TypeScript or build errors appear, fix them before continuing.

- [ ] **Step 15.2: Smoke-test all pages in dev**

```bash
npm run dev
```

Visit each URL and confirm it renders without errors:
- `http://localhost:3000` — Homepage
- `http://localhost:3000/pricing` — Pricing with toggle
- `http://localhost:3000/blog` — Blog listing
- `http://localhost:3000/blog/how-to-reduce-stockouts-in-retail` — Blog post
- `http://localhost:3000/contact` — Contact with form
- `http://localhost:3000/about` — About
- `http://localhost:3000/terms` — Terms (prose layout)
- `http://localhost:3000/privacy` — Privacy
- `http://localhost:3000/cookie-policy` — Cookie Policy

- [ ] **Step 15.3: Check mobile layout on all pages**

In browser DevTools, set viewport to 375px width (iPhone SE). Verify:
- Navbar collapses to hamburger on all pages
- Hamburger menu opens/closes correctly
- Pricing cards stack vertically
- Homepage hero stacks (text above, mockup below)
- Footer stacks to single column

- [ ] **Step 15.4: Final commit**

```bash
git add -A
git commit -m "feat: kubee.in marketing site — all pages complete"
```

---

## Self-Review Checklist

- [x] Homepage — Hero, Stats, Features Grid, Alternating Features, Footer CTA ✓
- [x] Pricing — Toggle, 3 tiers (Free/Pro/Enterprise), FAQ, Footer CTA ✓
- [x] Blog listing — Card grid from blog-posts.ts ✓
- [x] Blog post — Static generation, prose content, related posts ✓
- [x] Contact — Form with validation, success state, contact info ✓
- [x] About — Mission, values, team placeholders, CTA ✓
- [x] Terms — Full prose legal content ✓
- [x] Privacy — Full prose legal content ✓
- [x] Cookie Policy — Full prose legal content ✓
- [x] Navbar — Sticky, hamburger, all links ✓
- [x] Footer — 3 columns, social icons, Made in India ✓
- [x] SEO — metadata on all pages, sitemap.xml, robots.txt ✓
- [x] Responsiveness — mobile-first Tailwind throughout ✓
- [x] Black placeholders for all product screenshots ✓
- [x] @tailwindcss/typography for prose pages ✓
