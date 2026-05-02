"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Kubee lets us easily monitor our increasingly complex inventory. From purchase orders and stock inaccuracy to vendor payments and QA, Kubee keeps our team alert to what's important, at all times.",
    author: "Bowie Cheung",
    role: "Co-Founder & CEO",
    company: "Pepper",
  },
  {
    id: 2,
    quote: "Since implementing Kubee, our stockout incidents dropped by 40%. The ability to catch reorder points before they become critical has been a game-changer for our operations team.",
    author: "Sarah Jenkins",
    role: "VP of Operations",
    company: "Acme Corp",
  },
  {
    id: 3,
    quote: "The AI-powered forecasting and automated reordering mean we no longer have to guess stock levels. Kubee gives us peace of mind knowing our supply chain is always running smoothly.",
    author: "David Chen",
    role: "Inventory Lead",
    company: "Nexus",
  },
];

export default function FooterCTA() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const progressPct = ((currentIndex + 1) / TESTIMONIALS.length) * 100;

  return (
    <section className="bg-ez-carbon py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* Eyebrow */}
        <p className="ez-micro-label text-white/40 text-center mb-4">What people say</p>

        {/* Heading */}
        <h2
          className="font-medium text-white text-center mb-16 leading-tight"
          style={{ fontSize: "32px", lineHeight: "1.2" }}
        >
          Trusted by teams across India
        </h2>

        {/* Testimonial card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-10 md:p-14 min-h-[240px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.33, ease: [0.5, 0, 0, 0.75] }}
                className="flex flex-col h-full justify-between gap-8"
              >
                <p className="text-ez-md text-ez-body leading-relaxed">
                  &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                </p>
                <div className="flex items-end justify-between pt-4 border-t border-ez-border">
                  <div>
                    <h4 className="font-medium text-ez-base text-ez-heading mb-0.5">
                      {TESTIMONIALS[currentIndex].author}
                    </h4>
                    <p className="text-ez-xs text-ez-secondary">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                  <span className="font-medium text-ez-lg text-ez-heading">
                    {TESTIMONIALS[currentIndex].company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8 max-w-[400px] mx-auto">
          <button
            onClick={handlePrev}
            className="text-white/40 hover:text-white transition-colors duration-ez p-2"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.33, ease: [0.5, 0, 0, 0.75] }}
            />
          </div>

          <button
            onClick={handleNext}
            className="text-white/40 hover:text-white transition-colors duration-ez p-2"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="font-medium text-white mb-3" style={{ fontSize: "28px", lineHeight: "1.2" }}>
            Ready to take control of your inventory?
          </h3>
          <p className="text-ez-md text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
            Join thousands of Indian businesses already running smarter operations with Kubee.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="ez-btn ez-btn-primary">Start Free Trial →</button>
            <button
              className="ez-btn border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-[border-color,color] duration-ez"
              style={{ background: "transparent" }}
            >
              Talk to Sales
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
