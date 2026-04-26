"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is the Free plan really free forever?",
    a: "Yes. No credit card required. The Free plan stays free with no expiry — upgrade only when you need more capacity or features.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Yes. Upgrade or downgrade at any time from your account settings. Billing is prorated — you only pay for what you use.",
  },
  {
    q: "Do you support GST billing?",
    a: "Yes. All invoices are GST-compliant. You'll receive a proper GST tax invoice for every payment, with GSTIN support for your records.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, Net Banking, Credit/Debit cards, and Razorpay wallets. All major Indian payment methods are supported.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is stored in Indian data centers, encrypted at rest and in transit. We comply with the Indian IT Act and GDPR.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6 lg:px-10">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-ez-hero font-medium text-ez-heading text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* Flat Accordion List */}
        <div className="border-t border-ez-border">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-b border-ez-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex justify-between items-center py-6 text-left transition-colors duration-ez outline-none group"
              >
                <span className="font-medium text-ez-md text-ez-heading group-hover:text-ez-primary transition-colors duration-ez">
                  {faq.q}
                </span>
                <span className="text-ez-muted group-hover:text-ez-primary transition-colors duration-ez ml-4 flex-shrink-0">
                  {open === i ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>

              {open === i && (
                <div className="pb-6 text-ez-base text-ez-body leading-normal animate-in slide-in-from-top-2 duration-ez">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
