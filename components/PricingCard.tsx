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
