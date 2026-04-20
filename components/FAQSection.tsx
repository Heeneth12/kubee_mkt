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
    <section className="bg-brand-light py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-semibold text-sm text-slate-800">{faq.q}</span>
                <span className="text-slate-400 ml-4 flex-shrink-0 text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
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
