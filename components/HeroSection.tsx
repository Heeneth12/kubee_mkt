"use client";

import React from "react";
import Image from "next/image";
import dashBoard from "@/assets/images/dashboard.png";


function DashboardMockup() {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 step-fade shadow-sm shadow-ez-ash-lite">
      <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">

        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ez-border">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>

        <div>
          <Image src={dashBoard} alt="Dashboard" />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #c8d6e5 0%, #dfe6ed 30%, #f0f0f0 70%, #ffffff 100%)"
      }}>
      <div className="max-w-5xl mx-auto px-6 pt-20 text-center">
        <h1
          className="font-[600] text-ez-heading leading-tight mb-5"
          style={{ fontSize: "68px", lineHeight: "1.2", }}
        >
          Modern inventory software<br />for Indian businesses
        </h1>
        <p className="text-ez-md text-ez-secondary max-w-xl mx-auto leading-relaxed mb-8">
          Real-time tracking, AI-powered forecasting, and automated reordering.<br />
          Built to scale your operations effortlessly.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="ez-btn ez-btn-primary">Get Started Free →</button>
          <button className="ez-btn ez-surface border border-ez-ash">Book a Demo</button>
        </div>
        <p className="ez-micro-label my-5">Inventory Management</p>
      </div>
      <div className="px-6 pb-0 mt-12 mb-6">
        <DashboardMockup />
      </div>
    </section>
  );
}
