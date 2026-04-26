import type { PricingTier } from "@/data/pricing";
import Link from "next/link";

type Props = {
  tier: PricingTier;
  annual: boolean;
};

export default function PricingCard({ tier, annual }: Props) {
  const price = annual ? tier.annualPrice : tier.monthlyPrice;

  // Map legacy ctaStyle to the new minimal design system classes
  const isPrimaryCta = tier.popular || tier.ctaStyle === "filled" || tier.ctaStyle === "dark";
  const ctaClass = isPrimaryCta ? "ez-btn ez-btn-primary w-full" : "ez-btn ez-btn-secondary w-full";

  return (
    <div
      className={`relative p-8 flex flex-col border-2 transition-[border-color,background-color] duration-ez ${tier.popular
        ? "border-ez-primary bg-ez-ash"
        : "border-ez-border hover:border-ez-subtle bg-white"
        }`}
    >
      {/* Header Row */}
      <div className="flex items-center gap-2 mb-4">
        <span className="ez-micro-label">{tier.name}</span>
        {tier.popular && (
          <span className="ez-micro-label text-ez-primary">
            • Most Popular
          </span>
        )}
      </div>

      {/* Pricing */}
      <div className="mb-2">
        {price === null ? (
          <span className="text-[40px] font-medium text-ez-heading leading-tight">Custom</span>
        ) : price === 0 ? (
          <span className="text-[40px] font-medium text-ez-heading leading-tight">
            ₹0<span className="text-ez-base text-ez-secondary">/month</span>
          </span>
        ) : (
          <span className="text-[40px] font-medium text-ez-heading leading-tight">
            <sup className="text-ez-lg text-ez-secondary font-medium mr-1">₹</sup>
            {price.toLocaleString("en-IN")}
            <span className="text-ez-base text-ez-secondary">/month</span>
          </span>
        )}
      </div>

      {/* Savings Callout */}
      {annual && tier.monthlyPrice != null && tier.annualPrice != null && tier.monthlyPrice > 0 && (
        <p className="text-ez-xs font-medium text-ez-primary mb-2">
          Save ₹{((tier.monthlyPrice - tier.annualPrice) * 12).toLocaleString("en-IN")}/year
        </p>
      )}

      {/* Description */}
      <p className="text-ez-sm text-ez-secondary mb-8 leading-relaxed">{tier.description}</p>

      {/* CTA Button */}
      <Link
        href={tier.ctaStyle === "dark" ? "/contact" : "/signup"}
        className={`${ctaClass} mb-8`}
      >
        {tier.cta}
      </Link>

      {/* Features List */}
      <ul className="space-y-4 mt-auto">
        {tier.features.map((f) => (
          <li key={f.text} className="flex gap-3 items-start">
            {f.included ? (
              <svg className="w-4 h-4 text-ez-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-ez-border flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={`text-ez-sm ${f.included ? "text-ez-body" : "text-ez-muted"}`}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}