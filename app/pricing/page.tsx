import type { Metadata } from "next";
import PricingToggle from "@/components/PricingToggle";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Kubee. Start free forever, upgrade when you need more. No hidden charges.",
};

export default function PricingPage() {
  return (
    <div className="bg-ez-white min-h-screen font-sans">
      {/* Hero */}
      <section className="pt-20 pb-6 px-6 lg:px-10 text-center">
        <div className="max-w-[1383px] mx-auto">
          {/* Eyebrow */}
          <span className="inline-block ez-micro-label text-ez-primary tracking-widest mb-5">
            Pricing
          </span>

          <h1 className="text-[44px] font-medium text-ez-heading leading-[1.15] tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-ez-md text-ez-secondary max-w-sm mx-auto mb-14 leading-relaxed">
            Start free. Upgrade when your business needs more.{" "} <br />
            <span className="text-ez-primary font-bold">No hidden charges.</span>
          </p>

          <PricingToggle />
        </div>
      </section>

      {/* Trust bar */}
      <div className="mt-16">
        <div className="max-w-[1383px] mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {["No credit card required", "Cancel anytime", "GST-compliant invoices", "Indian data centers"].map((t) => (
            <span key={t} className="flex items-center gap-2 text-ez-xs text-ez-secondary">
              <svg className="w-3.5 h-3.5 text-ez-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <FAQSection />
    </div>
  );
}