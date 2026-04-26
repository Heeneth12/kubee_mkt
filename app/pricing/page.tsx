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
    <div className="bg-white min-h-screen font-sans">
      {/* Hero */}
      <section className="py-18 text-center px-6 lg:px-10">
        <div className="max-w-[1383px] mx-auto">
          <h1 className="text-[40px] font-medium text-ez-heading leading-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-ez-md text-ez-secondary max-w-md mx-auto mb-12">
            Start free. Upgrade when your business needs more. No hidden charges.
          </p>
          <PricingToggle />
        </div>
      </section>
      {/* FAQs */}
      <FAQSection />
    </div>
  );
}