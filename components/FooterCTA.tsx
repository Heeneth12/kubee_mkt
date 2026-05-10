'use client';

import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useServiceWarmup } from "./utils/useServiceWarmup";

export default function FooterCTA() {
  useServiceWarmup();

  // 1. SEO: Structured Data for the specific Offer/Action being promoted
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "14-Day Free Trial",
    "description": "Start your free trial for Kubee inventory management. No credit card required.",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://kubee.in/signup"
  };

  return (
    <>
      {/* Inject Structured Data into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. SEO: Added semantic grouping with aria-labelledby */}
      <section
        className="font-sans"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-345 mx-auto px-6 lg:px-12">
          <div className="p-6 md:p-16 flex flex-col items-center text-center relative overflow-hidden group">

            <h2
              id="cta-heading"
              className="text-[40px] md:text-[56px] font-medium text-ez-heading leading-[1.1] tracking-tight mb-6"
            >
              Take absolute control of your inventory today.
            </h2>

            <p className="text-ez-base text-ez-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              Join thousands of small and medium businesses. Streamline your inventory and connect your entire distribution network on one unified ledger.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto justify-center">
              <Link
                href={`${process.env.NEXT_PUBLIC_KUBEE_APP_URL}/auth/login`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start your 14-day free trial with Kubee"
                className="ez-btn ez-btn-primary w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 group/btn font-medium"
              >
                Start your free trial
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-ez" aria-hidden="true" />
              </Link>

              <Link
                href={`${process.env.NEXT_PUBLIC_KUBEE_APP_URL}/auth/login?booking=true`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a demo of Kubee inventory management software"
                className="bg-ez-ash w-full sm:w-auto h-12 px-8 flex items-center justify-center border border-ez-border bg-transparent text-ez-heading font-medium hover:bg-ez-ash hover:border-ez-primary transition-all duration-ez"
              >
                Book a Demo
              </Link>
            </div>

            <ul
              className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-ez-sm text-ez-secondary font-medium m-0 p-0"
              aria-label="Trial features and guarantees"
            >
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-ez-primary" aria-hidden="true" />
                <span>14-day free trial</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-ez-primary" aria-hidden="true" />
                <span>No credit card required</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-ez-primary" aria-hidden="true" />
                <span>Cancel anytime</span>
              </li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}