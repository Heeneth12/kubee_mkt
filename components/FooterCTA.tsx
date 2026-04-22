"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Testimonial Data
────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Avenue lets us easily monitor our increasingly complex system. From customer activity and order inaccuracy to fraud reviews and QA, Avenue keeps our team alert to what's important, at all times",
    author: "Bowie Cheung",
    role: "Co-Founder & CEO",
    company: "Pepper",
  },
  {
    id: 2,
    quote: "Since implementing Avenue, our incident response time has dropped by 40%. The ability to catch anomalies before they become critical issues has been a game-changer for our operations team.",
    author: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "Acme Corp",
  },
  {
    id: 3,
    quote: "The visual dashboards and automated alerting mean we no longer have to stare at logs all day. Avenue gives us peace of mind knowing that our data pipelines are running smoothly.",
    author: "David Chen",
    role: "Data Operations Lead",
    company: "Nexus",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Calculate progress bar width based on current slide
  const progressPercentage = ((currentIndex + 1) / TESTIMONIALS.length) * 100;

  return (
    <section className="relative w-full bg-brand-blue py-24 overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 leading-tight tracking-tight">
          What people say <br /> about Kubee
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Background Layer (Slightly wider blue card behind white card) */}
          <div className="absolute top-4 bottom-4 -left-6 -right-6 bg-[#4162ED] rounded-xl z-0" />

          {/* Geometric Accent: Left Light Blue Square */}
          <div className="absolute -left-10 bottom-6 w-14 h-14 bg-[#93C5FD] rotate-[-15deg] z-20 shadow-sm" />
          
          {/* Geometric Accent: Right Yellow Rectangle */}
          <div className="absolute -right-3 top-10 w-8 h-12 bg-[#FDE047] rotate-[10deg] z-20 shadow-sm" />

          {/* Main White Card */}
          <div className="relative bg-white rounded-lg px-10 py-12 md:px-14 md:py-14 z-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between gap-8"
              >
                {/* Quote */}
                <p className="text-[#334155] text-[15px] md:text-[17px] leading-[1.8] font-medium">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>

                {/* Author & Company */}
                <div className="flex items-end justify-between mt-auto pt-4">
                  <div>
                    <h4 className="text-[#1E293B] font-bold text-[15px] mb-0.5">
                      {TESTIMONIALS[currentIndex].author}
                    </h4>
                    <p className="text-[#64748B] text-[11px] font-medium">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                  <div className="text-[#334155] font-bold text-xl tracking-tight">
                    {TESTIMONIALS[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls (Arrows & Progress Bar) */}
        <div className="flex items-center justify-center gap-6 mt-16 max-w-[400px] mx-auto">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          {/* Progress Bar Track */}
          <div className="flex-1 h-[1px] bg-white/20 relative overflow-hidden rounded-full">
            {/* Progress Indicator */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}