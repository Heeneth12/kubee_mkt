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
