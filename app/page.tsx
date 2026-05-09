import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FooterCTA from "@/components/FooterCTA";
import Integrations from "@/components/Integrations";
import FeaturesAlternating from "@/components/FeaturesAlternating";
import IndustryShowcase from "@/components/IndustryShowcase";

export const metadata: Metadata = {
  title: "Kubee — Inventory Management for Indian Businesses",
  description:
    "Real-time tracking, AI-powered forecasting, and automated reordering. Built to scale your operations effortlessly.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesAlternating />
      <IndustryShowcase />
      <Integrations />
      <FooterCTA />
    </>
  );
}
