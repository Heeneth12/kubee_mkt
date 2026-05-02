"use client";

import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import { pricingTiers } from "@/data/pricing";

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle Container */}
      <div className="flex justify-center mb-12">
        <div
          role="group"
          aria-label="Billing period"
          className="inline-flex bg-ez-white border border-ez-border p-1"
        >
          <button
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
            className={`text-ez-sm px-6 py-2 min-h-[32px] rounded transition-[background-color,color] duration-ez font-medium outline-none ${!annual
              ? "bg-ez-ash text-ez-heading border border-ez-border"
              : "text-ez-secondary hover:text-ez-heading border border-transparent"
              }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={`text-ez-sm px-6 py-2 min-h-[32px] rounded transition-[background-color,color] duration-ez font-medium flex items-center gap-2 outline-none ${annual
              ? "bg-ez-ash text-ez-heading border border-ez-border"
              : "text-ez-secondary hover:text-ez-heading border border-transparent"
              }`}
          >
            Annual
            <span className="text-ez-primary">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto text-left">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} annual={annual} />
        ))}
      </div>
    </div>
  );
}