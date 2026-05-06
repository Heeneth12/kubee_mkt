# Guides Rich Content System — Design Spec
**Date:** 2026-05-06
**Scope:** `data/guides.ts` + `app/guides/page.tsx` — Inventory section (Overview + Quick Start)

---

## Problem

Guide content is currently hardcoded inline in `app/guides/page.tsx` as plain text strings. There is no way to render hyperlinks, images, videos, lists, callouts, or step-by-step flows. All content lives in the component rather than in the `data/` layer where it belongs.

---

## Goal

1. Move all guide content to `data/guides.ts` (consistent with `data/blog-posts.ts` and `data/pricing.ts`)
2. Support rich content blocks: paragraphs, images, videos, ordered/unordered lists, callouts, numbered steps, and link-cards
3. Complete the Inventory section with fully authored Overview and Quick Start content
4. The renderer in `page.tsx` maps block types to styled React components — no HTML strings, no `dangerouslySetInnerHTML`

---

## Data Schema

File: `data/guides.ts`

```ts
type GuideBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; title?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "info" | "tip" | "warning"; text: string }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "link-card"; href: string; label: string; description?: string }

type GuideSection = {
  heading: string;
  showHero?: boolean;
  blocks: GuideBlock[];
}

type GuideEntry = {
  key: string;        // matches sidebar activeItem key (e.g. "Overview", "Quick Start")
  title: string;
  sections: GuideSection[];
}

export const guides: GuideEntry[]
```

The file exports a flat `guides` array. `page.tsx` builds a lookup map from it at render time: `Object.fromEntries(guides.map(g => [g.key, g]))`.

---

## Renderer

`page.tsx` replaces the `sec.body` plain-text render with a `BlockRenderer` component defined inline in the same file. It switches on `block.type`:

| Block type   | Renders as |
|--------------|------------|
| `paragraph`  | `<p>` with `text-ez-base text-ez-body leading-normal` |
| `image`      | `<figure>` with `<img>` + optional `<figcaption>` |
| `video`      | `<video controls>` for direct URLs; YouTube iframe for youtube.com/youtu.be URLs |
| `list`       | `<ul>` or `<ol>` with styled bullets/numbers |
| `callout`    | Coloured aside box — blue (info), green (tip), amber (warning) |
| `steps`      | Numbered step cards with title + body, left border accent |
| `link-card`  | Bordered clickable card with label, description, and arrow icon |

The `showHero` flag on a section continues to work as before — it renders the hero illustration alongside the first block's text.

All other sidebar entries (Dashboard, Stock Management, etc.) keep their existing single-paragraph content, migrated verbatim into the new `blocks` format.

---

## Inventory > Overview Content

### Section: "Everything you'll need to know" (`showHero: true`)
- `paragraph`: existing welcome text

### Section: "What is Kubee?"
- `paragraph`: existing description text

### Section: "Why teams choose Kubee"
- `list` (unordered):
  - Real-time stock visibility across all locations
  - AI-powered demand forecasting
  - GST-ready invoicing and compliance
  - Works for solo operators and enterprise teams alike
  - Built in India, for Indian businesses

### Section: "What you can do with Kubee"
- `callout` (tip): "Start with what you have — even a partial catalog is enough to get going."
- `list` (ordered): Track stock → Create purchase orders → Receive GRNs → Invoice customers → Analyse reports

---

## Inventory > Quick Start Content

### Section: "Before you begin"
- `paragraph`: short intro
- `list` (unordered — requirements):
  - A modern browser (Chrome, Firefox, Safari, or Edge)
  - A valid business email address
  - Your GSTIN (optional — you can add this later)
  - A product catalog or list of SKUs (optional — you can import this later)

### Section: "Create your account"
- `steps`:
  1. **Go to kubee.in/signup** — Open the signup page in your browser
  2. **Enter your details** — Name, business email, and phone number
  3. **Verify your email** — Enter the OTP sent to your inbox
  4. **Set your password** — Choose a strong password and select your business type
  5. **You're in** — Your Kubee workspace is ready

### Section: "Log in"
- `paragraph`: "Once your account is created, you can always return to your workspace via the login page."
- `link-card`: href `/login`, label "Sign in to Kubee", description "Return to your workspace"

### Section: "Set up your first inventory"
- `steps`:
  1. **Go to Inventory → Products** — Click *Add Product* in the top right
  2. **Fill in product details** — SKU, product name, unit of measure, and HSN code
  3. **Set a reorder threshold** — e.g. 50 units — Kubee will alert you before you run out
  4. **Assign to a warehouse** — Select the location where this stock is held
  5. **Save** — Your first item is live in the system

### Section: "Invite your team"
- `paragraph`: "Go to Settings → Team and enter your colleagues' email addresses. They'll receive an invite to join your workspace."
- `callout` (info): "Each user gets role-based access — warehouse staff won't see financial reports unless you explicitly grant it."

### Section: "What's next"
- `link-card`: href `/guides` (Resources key), label "Explore Resources", description "API docs, import templates, video walkthroughs"
- `link-card`: href `/guides` (Dashboard key), label "Understand the Dashboard", description "Your real-time inventory command centre"

---

## File Changes

| File | Change |
|------|--------|
| `data/guides.ts` | New file — exports `GuideEntry[]` with all guide content |
| `app/guides/page.tsx` | Import from `data/guides.ts`, add `BlockRenderer`, remove inline `contentMap` |

No new routes, no new dependencies, no config changes.

---

## Out of Scope

- Other sidebar sections (Dashboard, Stock Management, etc.) beyond verbatim migration — full content is future work
- Real images/videos — placeholders used until assets are provided
- Search or full-text indexing of guide content
