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
