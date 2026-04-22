"use client";

import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import { pricingTiers } from "@/data/pricing";

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle Container */}
      <div className="flex justify-center mb-10">
        <div
          role="group"
          aria-label="Billing period"
          className="inline-flex bg-slate-100 border border-slate-100 rounded-xl gap-1 shadow-sm"
        >
          <button
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
            className={`text-sm px-5 py-2 rounded-lg transition-all font-medium ${!annual
              ? "bg-white text-[#0B1536] font-bold shadow-sm border border-slate-200/50"
              : "text-slate-500 hover:text-slate-800"
              }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={`text-sm px-5 py-2 rounded-lg transition-all font-medium flex items-center gap-2 ${annual
              ? "bg-white text-[#0B1536] font-bold shadow-sm border border-slate-200/50"
              : "text-slate-500 hover:text-slate-800"
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