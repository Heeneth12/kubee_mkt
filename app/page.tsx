import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesGrid from "@/components/FeaturesGrid";
import FeaturesAlternating from "@/components/FeaturesAlternating";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Kubee — Inventory Management for Indian Businesses",
  description:
    "Real-time tracking, AI-powered forecasting, and automated reordering. Built to scale your operations effortlessly.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <FeaturesAlternating />
      <FooterCTA />
    </>
  );
}
