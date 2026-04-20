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
