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
    <section className="bg-ez-white py-24 px-6 lg:px-10 border-t border-ez-border">
      <div className="max-w-345 mx-auto px-6 lg:px-10">

        {/* Two-column layout: sticky label + accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

          {/* Left sticky label */}
          <div className="lg:pt-1">
            <span className="ez-micro-label text-ez-primary tracking-widest block mb-3">FAQ</span>
            <h2 className="text-ez-hero font-medium text-ez-heading leading-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-ez-sm text-ez-secondary leading-relaxed mb-8">
              Can't find what you're looking for? Reach our team directly.
            </p>
            <a
              href="/contact"
              className="ez-btn ez-btn-secondary inline-flex items-center gap-2 text-ez-sm px-5"
            >
              Contact support
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right accordion */}
          <div className="border-t border-ez-border">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="border-b border-ez-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left outline-none group"
                  >
                    {/* Number + question */}
                    <div className="flex items-start gap-4">
                      <span
                        className={`ez-micro-label tabular-nums mt-0.5 flex-shrink-0 transition-colors duration-ez ${isOpen ? "text-ez-primary" : "text-ez-muted"
                          }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-ez-md font-medium transition-colors duration-ez leading-snug ${isOpen
                          ? "text-ez-primary"
                          : "text-ez-heading group-hover:text-ez-primary"
                          }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    {/* Icon */}
                    <span
                      className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border transition-all duration-ez mt-0.5 ${isOpen
                        ? "border-ez-primary text-ez-primary rotate-45"
                        : "border-ez-border text-ez-muted group-hover:border-ez-subtle group-hover:text-ez-heading"
                        }`}
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="pl-9 pb-6 text-ez-sm text-ez-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-20 bg-ez-ash border border-ez-border p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-ez-base font-medium text-ez-heading mb-1">Still have questions?</p>
            <p className="text-ez-sm text-ez-secondary">
              Our team is available Mon–Fri, 9 am–6 pm IST.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="mailto:hello@kubee.in" className="ez-btn ez-btn-secondary text-ez-sm px-5">
              Email us
            </a>
            <a href="/contact" className="ez-btn ez-btn-primary text-ez-sm px-5">
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}