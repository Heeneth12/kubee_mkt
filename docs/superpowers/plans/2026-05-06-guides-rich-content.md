# Guides Rich Content System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move all guide content out of `app/guides/page.tsx` into a typed `data/guides.ts` file that supports rich block types (paragraphs, images, videos, lists, callouts, steps, link-cards), then fully author the Inventory > Overview and Quick Start sections.

**Architecture:** A discriminated-union `GuideBlock` type in `data/guides.ts` represents all renderable content. `app/guides/page.tsx` imports the data, builds a key→entry lookup, and delegates block rendering to two small helper components (`Block` + `BlockRenderer`) defined at the bottom of the same file. The sidebar and layout code is untouched.

**Tech Stack:** Next.js 16.2.4, React 19, TypeScript 5, Tailwind CSS 4. No new dependencies.

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `data/guides.ts` | Create | All guide content — types + data |
| `app/guides/page.tsx` | Modify | Import data, add `Block`+`BlockRenderer`, update section render |

---

### Task 1: Create `data/guides.ts` — types and non-Inventory entries

**Files:**
- Create: `data/guides.ts`

- [ ] **Step 1: Create the file with all types and non-Inventory guide entries**

Create `data/guides.ts` with the following complete content:

```typescript
export type GuideBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; title?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "info" | "tip" | "warning"; text: string }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "link-card"; href: string; label: string; description?: string }

export type GuideSection = {
  heading: string
  showHero?: boolean
  blocks: GuideBlock[]
}

export type GuideEntry = {
  key: string
  title: string
  sections: GuideSection[]
}

export const guides: GuideEntry[] = [
  {
    key: "Dashboard",
    title: "Dashboard",
    sections: [
      {
        heading: "Your command centre",
        blocks: [
          {
            type: "paragraph",
            text: "The Kubee dashboard gives you a real-time view of inventory health, pending orders, low-stock alerts, and revenue trends — all on one screen.",
          },
        ],
      },
    ],
  },
  {
    key: "Stock Management",
    title: "Stock Management",
    sections: [
      {
        heading: "Track every unit",
        blocks: [
          {
            type: "paragraph",
            text: "Kubee's stock engine handles multi-warehouse tracking, batch/lot numbers, expiry dates, and FIFO/LIFO costing. Get notified before you run out.",
          },
        ],
      },
    ],
  },
  {
    key: "Workflows",
    title: "Workflows",
    sections: [
      {
        heading: "Automate your operations",
        blocks: [
          {
            type: "paragraph",
            text: "Build custom approval chains, auto-reorder rules, and supplier notification flows. No code required — drag, drop, done.",
          },
        ],
      },
    ],
  },
  {
    key: "Integrations",
    title: "Integrations",
    sections: [
      {
        heading: "Connect the tools you already use",
        blocks: [
          {
            type: "paragraph",
            text: "Kubee connects natively with Tally, Zoho Books, Shopify, WooCommerce, Amazon India, and 30+ other platforms. Two-way sync keeps everything in step.",
          },
        ],
      },
    ],
  },
  {
    key: "Reports & Analytics",
    title: "Reports & Analytics",
    sections: [
      {
        heading: "Data-driven decisions",
        blocks: [
          {
            type: "paragraph",
            text: "Generate sell-through reports, dead-stock alerts, supplier performance scorecards, and margin analyses. Export to Excel or share directly with stakeholders.",
          },
        ],
      },
    ],
  },
  {
    key: "AI Forecasting",
    title: "AI Forecasting",
    sections: [
      {
        heading: "Predict demand before it happens",
        blocks: [
          {
            type: "paragraph",
            text: "Kubee's forecasting engine analyses historical sales velocity, seasonality, and market signals to recommend optimal stock levels — reducing overstock by up to 30%.",
          },
        ],
      },
    ],
  },
  {
    key: "Permissions",
    title: "Permissions",
    sections: [
      {
        heading: "Role-based access control",
        blocks: [
          {
            type: "paragraph",
            text: "Grant granular permissions to staff, warehouse managers, accountants, and read-only auditors. Every action is logged for compliance.",
          },
        ],
      },
    ],
  },
  {
    key: "GST & Taxes",
    title: "GST & Taxes",
    sections: [
      {
        heading: "Built for India's tax landscape",
        blocks: [
          {
            type: "paragraph",
            text: "Kubee auto-calculates CGST, SGST, and IGST on every transaction. Generate GST-ready invoices and file-ready reports in one click.",
          },
        ],
      },
    ],
  },
  {
    key: "Navigation",
    title: "Navigation",
    sections: [
      {
        heading: "Finding your way around",
        blocks: [
          {
            type: "paragraph",
            text: "Learn keyboard shortcuts, the global search bar, and the command palette to move through Kubee at the speed of thought.",
          },
        ],
      },
    ],
  },
  {
    key: "Automation",
    title: "Automation",
    sections: [
      {
        heading: "Let Kubee do the work",
        blocks: [
          {
            type: "paragraph",
            text: "Trigger purchase orders when stock dips below threshold, send WhatsApp alerts to suppliers, and auto-reconcile deliveries — all on autopilot.",
          },
        ],
      },
    ],
  },
  {
    key: "Warehouses",
    title: "Warehouses",
    sections: [
      {
        heading: "Multi-location inventory",
        blocks: [
          {
            type: "paragraph",
            text: "Manage stock across multiple warehouses, retail stores, and fulfilment centres from a single view. Transfer stock between locations in seconds.",
          },
        ],
      },
    ],
  },
  {
    key: "Advanced Planning",
    title: "Advanced Planning",
    sections: [
      {
        heading: "Enterprise-grade supply chain tools",
        blocks: [
          {
            type: "paragraph",
            text: "Model seasonal purchasing plans, set up consignment agreements, and run what-if simulations before committing to large supplier contracts.",
          },
        ],
      },
    ],
  },
  {
    key: "Kubee Mobile",
    title: "Kubee Mobile",
    sections: [
      {
        heading: "Inventory in your pocket",
        blocks: [
          {
            type: "paragraph",
            text: "Scan barcodes, receive stock, approve purchase orders, and check alerts from the Kubee mobile app for iOS and Android.",
          },
        ],
      },
    ],
  },
  {
    key: "More about Kubee",
    title: "More about Kubee",
    sections: [
      {
        heading: "Our story",
        blocks: [
          {
            type: "paragraph",
            text: "Kubee was built in India, for India — by operators who lived through the pain of spreadsheet-based inventory. We're on a mission to make modern operations accessible to every business.",
          },
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors. If you see "Cannot find module", check that the file is saved at `data/guides.ts` (not inside `app/`).

- [ ] **Step 3: Commit**

```bash
git add data/guides.ts
git commit -m "feat: create data/guides.ts with typed block schema and non-Inventory entries"
```

---

### Task 2: Add Inventory entries to `data/guides.ts`

**Files:**
- Modify: `data/guides.ts`

- [ ] **Step 1: Prepend the three Inventory entries to the `guides` array**

Open `data/guides.ts`. Replace the line:

```typescript
export const guides: GuideEntry[] = [
```

with:

```typescript
export const guides: GuideEntry[] = [
  {
    key: "Overview",
    title: "Welcome to Kubee",
    sections: [
      {
        heading: "Everything you'll need to know",
        showHero: true,
        blocks: [
          {
            type: "paragraph",
            text: "Whether you've used it or not, we'll help you choose the right features for your business, set it up, and adopt best practices. So grab your team and let's go!",
          },
        ],
      },
      {
        heading: "What is Kubee?",
        blocks: [
          {
            type: "paragraph",
            text: "Kubee is an industry-leading inventory management tool that brings every team together to plan, track, and deliver any type of product with confidence. It's the single source of truth for your organisation, empowering teams with the context to move quickly while staying connected to the greater business goal. Whether you're managing everyday tasks in smaller or complex projects, this is where teams and AI come together to drive better outcomes, faster.",
          },
        ],
      },
      {
        heading: "Why teams choose Kubee",
        blocks: [
          {
            type: "list",
            ordered: false,
            items: [
              "Real-time stock visibility across all locations",
              "AI-powered demand forecasting",
              "GST-ready invoicing and compliance",
              "Works for solo operators and enterprise teams alike",
              "Built in India, for Indian businesses",
            ],
          },
        ],
      },
      {
        heading: "What you can do with Kubee",
        blocks: [
          {
            type: "callout",
            variant: "tip",
            text: "Start with what you have — even a partial catalog is enough to get going.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Track stock across warehouses",
              "Create and send purchase orders to suppliers",
              "Receive goods with GRNs (Goods Receipt Notes)",
              "Invoice your customers",
              "Analyse reports and forecast demand",
            ],
          },
        ],
      },
    ],
  },
  {
    key: "Quick Start",
    title: "Quick Start Guide",
    sections: [
      {
        heading: "Before you begin",
        blocks: [
          {
            type: "paragraph",
            text: "Kubee is designed for fast onboarding — most teams are up and running within an afternoon. Before you start, make sure you have the following:",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "A modern browser (Chrome, Firefox, Safari, or Edge)",
              "A valid business email address",
              "Your GSTIN (optional — you can add this later)",
              "A product catalog or list of SKUs (optional — you can import this later)",
            ],
          },
        ],
      },
      {
        heading: "Create your account",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Go to kubee.in/signup",
                body: "Open the Kubee signup page in your browser.",
              },
              {
                title: "Enter your details",
                body: "Fill in your name, business email address, and phone number.",
              },
              {
                title: "Verify your email",
                body: "Check your inbox for the OTP Kubee sends you. Enter it on the verification screen.",
              },
              {
                title: "Set your password",
                body: "Choose a strong password, then select your business type (e.g. Retail, Distribution, Manufacturing).",
              },
              {
                title: "You're in",
                body: "Your Kubee workspace is ready. You'll land on your dashboard.",
              },
            ],
          },
        ],
      },
      {
        heading: "Log in",
        blocks: [
          {
            type: "paragraph",
            text: "Once your account is created, you can always return to your workspace via the login page.",
          },
          {
            type: "link-card",
            href: "/login",
            label: "Sign in to Kubee",
            description: "Return to your workspace at any time",
          },
        ],
      },
      {
        heading: "Set up your first inventory",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Go to Inventory → Products",
                body: "Click Add Product in the top-right corner of the Products screen.",
              },
              {
                title: "Fill in product details",
                body: "Enter the SKU, product name, unit of measure (e.g. pcs, kg, box), and HSN code.",
              },
              {
                title: "Set a reorder threshold",
                body: "Enter the minimum stock level that should trigger a reorder alert — for example, 50 units.",
              },
              {
                title: "Assign to a warehouse",
                body: "Select the warehouse or location where this stock is held.",
              },
              {
                title: "Save",
                body: "Your first item is now live in the system. Repeat for each product in your catalog.",
              },
            ],
          },
        ],
      },
      {
        heading: "Invite your team",
        blocks: [
          {
            type: "paragraph",
            text: "Go to Settings → Team and enter your colleagues' email addresses. They'll receive an invite to join your workspace.",
          },
          {
            type: "callout",
            variant: "info",
            text: "Each user gets role-based access — warehouse staff won't see financial reports unless you explicitly grant it.",
          },
        ],
      },
      {
        heading: "What's next",
        blocks: [
          {
            type: "link-card",
            href: "/guides",
            label: "Explore Resources",
            description: "API docs, import templates, and video walkthroughs",
          },
          {
            type: "link-card",
            href: "/guides",
            label: "Understand the Dashboard",
            description: "Your real-time inventory command centre",
          },
        ],
      },
    ],
  },
  {
    key: "Resources",
    title: "Resources",
    sections: [
      {
        heading: "Documentation, templates & community",
        blocks: [
          {
            type: "paragraph",
            text: "Access our full API reference, downloadable import templates, video walkthroughs, and community forums. Everything you need to get the most out of Kubee.",
          },
        ],
      },
    ],
  },
```

The rest of the array (Dashboard onward) stays unchanged.

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add data/guides.ts
git commit -m "feat: add Inventory Overview, Quick Start, and Resources guide entries with rich blocks"
```

---

### Task 3: Update `app/guides/page.tsx` — import data + add BlockRenderer

**Files:**
- Modify: `app/guides/page.tsx`

- [ ] **Step 1: Replace the import line and remove the inline `contentMap`**

Open `app/guides/page.tsx`.

Replace:
```typescript
"use client";

import { useState } from "react";
import type { Metadata } from "next";
```
With:
```typescript
"use client";

import { useState } from "react";
import { guides, type GuideBlock } from "@/data/guides";
```

Then delete the entire `contentMap` variable (lines 34–197 in the original file — the big `const contentMap: Record<...> = { ... }` object).

- [ ] **Step 2: Add the `guideMap` lookup after the `sidebarSections` declaration**

After the closing `];` of `sidebarSections`, add:

```typescript
const guideMap = Object.fromEntries(guides.map((g) => [g.key, g]));
```

- [ ] **Step 3: Update the `content` lookup inside the component**

Inside `GuidesPage`, replace:
```typescript
const content = contentMap[activeItem] ?? contentMap["Overview"];
```
With:
```typescript
const content = guideMap[activeItem] ?? guideMap["Overview"];
```

- [ ] **Step 4: Replace the section body rendering in the JSX**

Find the `<div className="space-y-12">` block (currently lines 287–332). Replace the entire contents of that block with:

```tsx
<div className="space-y-12">
    {content.sections.map((sec, i) => (
        <section key={i} className="scroll-mt-24">
            <h3 className="text-ez-lg font-medium text-ez-heading mb-4">{sec.heading}</h3>

            {sec.showHero ? (
                <div className="flex flex-col sm:flex-row items-start gap-8">
                    <div className="flex-1">
                        {sec.blocks[0]?.type === "paragraph" && (
                            <p className="text-ez-base text-ez-body leading-normal mb-4">
                                {sec.blocks[0].text}
                            </p>
                        )}
                        <a href="/signup" className="inline-flex items-center text-ez-sm font-medium text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">
                            Sign up for a live demo
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        {sec.blocks.length > 1 && (
                            <div className="mt-4">
                                <BlockRenderer blocks={sec.blocks.slice(1)} />
                            </div>
                        )}
                    </div>

                    <div className="shrink-0 w-full sm:w-56 h-36 bg-ez-ash border border-ez-border flex items-center justify-center overflow-hidden">
                        <svg viewBox="0 0 160 100" className="w-full h-full p-4" fill="none">
                            <rect x="20" y="20" width="50" height="60" fill="var(--ez-color-primary)" opacity="0.1" />
                            <rect x="24" y="24" width="42" height="8" fill="var(--ez-color-primary)" opacity="0.6" />
                            <rect x="24" y="36" width="42" height="4" fill="var(--ez-color-primary)" opacity="0.4" />
                            <rect x="24" y="44" width="30" height="4" fill="var(--ez-color-primary)" opacity="0.4" />
                            <rect x="24" y="52" width="36" height="4" fill="var(--ez-color-primary)" opacity="0.4" />
                            <rect x="24" y="60" width="20" height="4" fill="var(--ez-color-primary)" opacity="0.4" />
                            <rect x="90" y="30" width="50" height="50" fill="var(--ez-color-carbon)" opacity="0.05" />
                            <rect x="96" y="36" width="38" height="6" fill="var(--ez-color-carbon)" opacity="0.3" />
                            <rect x="96" y="47" width="38" height="4" fill="var(--ez-color-carbon)" opacity="0.2" />
                            <rect x="96" y="55" width="26" height="4" fill="var(--ez-color-carbon)" opacity="0.2" />
                            <circle cx="125" cy="68" r="8" fill="var(--ez-color-primary)" />
                            <path d="M122 68l2 2 4-4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            ) : (
                <BlockRenderer blocks={sec.blocks} />
            )}
        </section>
    ))}
</div>
```

- [ ] **Step 5: Add `Block` and `BlockRenderer` components at the bottom of the file**

After the closing `}` of `GuidesPage` (and before the end of the file), add:

```tsx
function BlockRenderer({ blocks }: { blocks: GuideBlock[] }) {
    return (
        <div className="space-y-4">
            {blocks.map((block, i) => <Block key={i} block={block} />)}
        </div>
    );
}

function Block({ block }: { block: GuideBlock }) {
    if (block.type === "paragraph") {
        return <p className="text-ez-base text-ez-body leading-normal">{block.text}</p>;
    }

    if (block.type === "list") {
        const Tag = block.ordered ? "ol" : "ul";
        return (
            <Tag className={`space-y-2 text-ez-base text-ez-body leading-normal pl-5 ${block.ordered ? "list-decimal" : "list-disc"}`}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
            </Tag>
        );
    }

    if (block.type === "callout") {
        const styles = {
            info: "bg-blue-50 border-blue-200 text-blue-800",
            tip: "bg-green-50 border-green-200 text-green-800",
            warning: "bg-amber-50 border-amber-200 text-amber-800",
        };
        const icons = { info: "ℹ", tip: "💡", warning: "⚠" };
        return (
            <aside className={`flex gap-3 border rounded px-4 py-3 text-ez-sm ${styles[block.variant]}`}>
                <span className="shrink-0">{icons[block.variant]}</span>
                <p>{block.text}</p>
            </aside>
        );
    }

    if (block.type === "steps") {
        return (
            <ol className="space-y-5">
                {block.items.map((step, j) => (
                    <li key={j} className="flex gap-4">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-ez-primary text-white flex items-center justify-center text-ez-sm font-medium">
                            {j + 1}
                        </div>
                        <div>
                            <p className="font-medium text-ez-heading text-ez-base">{step.title}</p>
                            <p className="text-ez-body text-ez-sm mt-1">{step.body}</p>
                        </div>
                    </li>
                ))}
            </ol>
        );
    }

    if (block.type === "link-card") {
        return (
            <a
                href={block.href}
                className="flex items-center justify-between px-4 py-3 border border-ez-border hover:border-ez-primary hover:bg-ez-ash rounded transition-colors duration-ez group"
            >
                <div>
                    <p className="font-medium text-ez-heading text-ez-base group-hover:text-ez-primary">{block.label}</p>
                    {block.description && (
                        <p className="text-ez-sm text-ez-muted mt-0.5">{block.description}</p>
                    )}
                </div>
                <svg className="w-4 h-4 text-ez-muted group-hover:text-ez-primary shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        );
    }

    if (block.type === "image") {
        return (
            <figure className="space-y-2">
                <img src={block.src} alt={block.alt} className="w-full rounded border border-ez-border" />
                {block.caption && (
                    <figcaption className="text-ez-sm text-ez-muted text-center">{block.caption}</figcaption>
                )}
            </figure>
        );
    }

    if (block.type === "video") {
        const isYouTube = block.src.includes("youtube.com") || block.src.includes("youtu.be");
        if (isYouTube) {
            const videoId = block.src.includes("youtu.be")
                ? block.src.split("youtu.be/")[1].split(/[?#]/)[0]
                : (() => { try { return new URL(block.src).searchParams.get("v") ?? ""; } catch { return ""; } })();
            return (
                <div className="aspect-video w-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={block.title ?? "Video"}
                        className="w-full h-full rounded border border-ez-border"
                        allowFullScreen
                    />
                </div>
            );
        }
        return (
            <video controls className="w-full rounded border border-ez-border">
                <source src={block.src} />
            </video>
        );
    }

    return null;
}
```

- [ ] **Step 6: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors. Common issues to fix:
- If you see `Cannot find module '@/data/guides'`: check `tsconfig.json` has `"paths": { "@/*": ["./*"] }`. If not, change the import to `"../data/guides"`.
- If you see `Type 'X' is not assignable`: check the `GuideBlock` import includes `type` keyword — `import { guides, type GuideBlock }`.

- [ ] **Step 7: Start dev server and visually verify**

Run: `npm run dev`

Check the following in the browser at `http://localhost:3000/guides`:
1. **Overview** — hero section shows, "Why teams choose Kubee" shows a bullet list, "What you can do with Kubee" shows a green tip callout + numbered list
2. **Quick Start** — "Before you begin" shows a bullet list, "Create your account" shows numbered step cards (circle numbers, title + body), "Log in" shows a link-card, "Set up your first inventory" shows step cards, "Invite your team" shows a blue info callout, "What's next" shows two link-cards
3. **Dashboard / any other section** — still renders the plain paragraph correctly
4. No layout regressions in the sidebar or main content area

- [ ] **Step 8: Commit**

```bash
git add app/guides/page.tsx
git commit -m "feat: add BlockRenderer to guides page, load content from data/guides.ts"
```
