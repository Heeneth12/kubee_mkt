import type { Metadata } from "next";
import PricingToggle from "@/components/PricingToggle";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Kubee. Start free forever, upgrade when you need more. No hidden charges.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue pt-16 pb-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-base text-white/80 max-w-md mx-auto mb-10">
          Start free. Upgrade when your business needs more. No hidden charges.
        </p>
        <PricingToggle />
      </section>

      <FAQSection />
      <FooterCTA />
    </>
  );
}
