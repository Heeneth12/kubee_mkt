"use client";

import { useEffect } from "react";
import Image from "next/image";
import dashBoard from "@/assets/images/dashboard.png";



function DashboardMockup() {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 step-fade">
      {/* Outer Shadow & Container */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">

        {/* MacBook Style Browser Header */}
        <div className="flex items-center gap-4 px-4 py-3 bg-[#f6f6f6] border-b border-gray-200">

          {/* Window Controls */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          {/* Navigation Arrows (Optional but adds to the look) */}
          <div className="flex gap-4 ml-4 text-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
          </div>

          {/* URL Bar */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 py-1 px-3 bg-white border border-gray-300 rounded-sm text-[11px] text-gray-500">
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium tracking-tight">https://kubee.in</span>
            </div>
          </div>

          <div className="w-16" />
        </div>

        {/* Content Area */}
        <div className="relative bg-gray-50">
          <Image
            src={dashBoard}
            alt="Dashboard"
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {

  const handleOpenApp = (type: string) => {
    const baseUrl = "https://app.kubee.in/auth/login";
    const url = type === "contact" ? `${baseUrl}?booking=true` : baseUrl;
    window.open(url, "_blank");
  };

  useEffect(() => {
    // Note: Consider moving these to a global provider if you have multiple pages
    fetch("https://ezauth-c4w0.onrender.com/actuator/health").catch(console.error);
    fetch("https://ez-inventory.onrender.com/actuator/health").catch(console.error);
  }, []);

  return (
    <section
      className="overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(180deg, #c8d6e5 0%, #dfe6ed 30%, #f0f0f0 70%, #ffffff 100%)"
      }}
    >
      <div className="max-w-5xl mx-auto px-4 pt-20 md:pt-24 text-center">

        {/* Responsive Heading: 40px on mobile, 68px on large screens */}
        <h1 className="font-[600] text-ez-heading leading-[1.2] mb-5 text-[32px] md:text-[68px]">
          Modern inventory software<br className="hidden md:block" /> for Indian businesses
        </h1>

        {/* Responsive Text: Smaller on mobile */}
        <p className="text-[10px] md:text-[14px] lg:text-ez-md text-ez-secondary max-w-xl mx-auto leading-relaxed mb-8 px-4 md:px-0">
          Real-time tracking, AI-powered forecasting, and automated reordering.
          <br className="hidden md:block" />
          Built to scale your operations effortlessly.
        </p>

        {/* Responsive Buttons: Stack on very small screens, row on others */}
        <div className="flex lex-row items-center justify-center gap-3">
          <button
            className="ez-btn ez-btn-primary"
            onClick={() => handleOpenApp("demo")}
          >
            Get Started Free →
          </button>
          <button
            className="ez-btn ez-surface border border-ez-ash"
            onClick={() => handleOpenApp("contact")}
          >
            Book a Demo
          </button>
        </div>

        <p className="ez-micro-label my-5">Inventory Management</p>
      </div>

      {/* Reduced margins for mobile to let the mockup breathe */}
      <div className="px-4 md:px-6 pb-0 mt-8 md:mt-12 mb-6">
        <DashboardMockup />
      </div>
    </section>
  );
}
