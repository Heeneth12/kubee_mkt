"use client";

import { useState } from "react";
import Link from "next/link";

type CardType = "help" | "trial" | "sales" | "faq" | "press" | null;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
  agreed: boolean;
};

const CARDS = [
  {
    id: "help" as CardType,
    title: "Get help",
    description: "Speak to our team today and ask anything about our product.",
    cta: "Get info",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01" />
      </svg>
    ),
  },
  {
    id: "trial" as CardType,
    title: "Try it free",
    description: "See how we can help your business by getting early access.",
    cta: "Get started",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "sales" as CardType,
    title: "Contact Sales",
    description: "Speak to someone from our sales team today.",
    cta: "Contact Sales",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "faq" as CardType,
    title: "Have a question?",
    description: "See our frequently asked questions.",
    cta: "Get Answers",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "press" as CardType,
    title: "Press & Media",
    description: "Get in touch with our PR team today.",
    cta: "Press Contact",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

const FORM_TITLES: Record<NonNullable<CardType>, { title: string; sub: string }> = {
  help: { title: "Get in touch with support", sub: "Our friendly team will get back to you within 24 hours." },
  trial: { title: "Start your free trial", sub: "Tell us a bit about yourself to get early access." },
  sales: { title: "Talk to sales", sub: "Our sales team is ready to help you find the right plan." },
  faq: { title: "Ask us anything", sub: "Can't find the answer? Send us a message." },
  press: { title: "Press & media enquiries", sub: "Reach out to our communications team." },
};

const ArrowRight = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="w-2.5 h-2.5 transition-transform duration-200 group-hover:translate-x-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function ContactPage() {
  const [activeCard, setActiveCard] = useState<CardType>(CARDS[0].id);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "US",
    message: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCardClick = (id: CardType) => {
    setActiveCard((prev) => (prev === id ? null : id));
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const topCards = CARDS.slice(0, 2);
  const bottomCards = CARDS.slice(2);

  return (
    <div className="min-h-screen bg-ez-white font-sans text-ez-body">
      <div className="max-w-[1383px] mx-auto px-6 lg:px-10 py-16 lg:py-12">

        {/* Page Header */}
        <div className="mb-10 border-b border-ez-border pb-4">
          <h1 className="text-ez-hero font-medium text-ez-heading leading-tight mb-1">Let&apos;s talk</h1>
          <p className="text-ez-md text-ez-secondary">Need support or have a question? We&apos;re here to help.</p>
        </div>

        {/* Top 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {topCards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => handleCardClick(card.id)}
              className={[
                "group relative flex flex-col items-start p-6 text-left border transition-all duration-ez outline-none",
                activeCard === card.id
                  ? "border-ez-primary bg-[#EBF0FC]"
                  : "border-ez-border bg-ez-ash hover:border-ez-subtle hover:bg-[#efefef] hover:-translate-y-px",
              ].join(" ")}
            >
              {/* Active dot */}
              <span
                className={[
                  "absolute top-3 right-3 w-2 h-2 rounded-full bg-ez-primary transition-all duration-200",
                  activeCard === card.id ? "opacity-100 scale-100" : "opacity-0 scale-0",
                ].join(" ")}
              />

              {/* Icon */}
              <div
                className={[
                  "w-10 h-10 flex items-center justify-center border mb-4 transition-colors duration-ez",
                  activeCard === card.id
                    ? "bg-white border-ez-primary text-ez-primary"
                    : "bg-white border-ez-border text-ez-heading",
                ].join(" ")}
              >
                {card.icon}
              </div>

              <h3 className="text-ez-base font-medium text-ez-heading mb-1">{card.title}</h3>
              <p className="text-ez-xs text-ez-secondary leading-relaxed mb-4">{card.description}</p>
              <span className="inline-flex items-center gap-1 text-ez-xs font-medium text-ez-primary">
                {card.cta} <ArrowRight />
              </span>
            </button>
          ))}
        </div>

        {/* Bottom 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {bottomCards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => handleCardClick(card.id)}
              className={[
                "group relative flex flex-col items-start p-5 text-left border transition-all duration-ez outline-none",
                activeCard === card.id
                  ? "border-ez-primary bg-[#EBF0FC]"
                  : "border-ez-border bg-ez-ash hover:border-ez-subtle hover:bg-[#efefef] hover:-translate-y-px",
              ].join(" ")}
            >
              {/* Active dot */}
              <span
                className={[
                  "absolute top-3 right-3 w-2 h-2 rounded-full bg-ez-primary transition-all duration-200",
                  activeCard === card.id ? "opacity-100 scale-100" : "opacity-0 scale-0",
                ].join(" ")}
              />

              {/* Icon */}
              <div
                className={[
                  "w-9 h-9 flex items-center justify-center border mb-3 transition-colors duration-ez",
                  activeCard === card.id
                    ? "bg-white border-ez-primary text-ez-primary"
                    : "bg-white border-ez-border text-ez-heading",
                ].join(" ")}
              >
                {card.icon}
              </div>

              <h3 className="text-ez-sm font-medium text-ez-heading mb-1">{card.title}</h3>
              <p className="text-[10px] text-ez-secondary leading-relaxed mb-3">{card.description}</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-ez-primary">
                {card.cta} <ArrowRight />
              </span>
            </button>
          ))}
        </div>

        {/* Expandable Form Panel */}
        {activeCard && (
          <div className="border border-ez-border bg-ez-ash p-8 mb-8 step-fade">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-6 step-fade">
                <div className="w-11 h-11 bg-white border border-ez-border flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-ez-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-ez-lg font-medium text-ez-heading mb-1">Message received</h3>
                <p className="text-ez-sm text-ez-secondary mb-5">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setActiveCard(null); }}
                  className="text-ez-xs font-medium text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none"
                >
                  Back to contact options
                </button>
              </div>
            ) : (
              <>
                {/* Form header */}
                <div className="mb-6 pb-5 border-b border-ez-border">
                  <h2 className="text-ez-lg font-medium text-ez-heading mb-1">
                    {FORM_TITLES[activeCard].title}
                  </h2>
                  <p className="text-ez-sm text-ez-secondary">{FORM_TITLES[activeCard].sub}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="ez-label">First name</label>
                      <input
                        type="text"
                        placeholder="First name"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="ez-input ez-input--default w-full"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="ez-label">Last name</label>
                      <input
                        type="text"
                        placeholder="Last name"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="ez-input ez-input--default w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="ez-label">Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="ez-input ez-input--default w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="ez-label">Phone number</label>
                      <div className="flex border border-ez-border focus-within:border-ez-primary transition-[border-color] duration-ez bg-white">
                        <select
                          value={form.countryCode}
                          onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                          className="appearance-none w-20 pl-3 pr-2 py-2 border-r border-ez-border text-ez-sm text-ez-heading outline-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23171A20' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: "right 0.25rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.2em 1.2em",
                          }}
                        >
                          <option value="US">US</option>
                          <option value="UK">UK</option>
                          <option value="IN">IN</option>
                        </select>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="flex-1 px-3 py-2.5 border-none focus:outline-none placeholder:text-ez-muted text-ez-base text-ez-heading bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="ez-label">Message</label>
                    <textarea
                      placeholder="Tell us how we can help…"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="ez-input ez-input--default w-full resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start pt-1">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        checked={form.agreed}
                        onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                        className="w-4 h-4 cursor-pointer outline-none"
                        style={{ accentColor: "var(--ez-color-primary)" }}
                      />
                    </div>
                    <label htmlFor="privacy" className="ml-3 text-ez-sm text-ez-secondary cursor-pointer">
                      You agree to our friendly{" "}
                      <Link href="/privacy" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez">
                        privacy policy
                      </Link>
                      .
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ez-btn ez-btn-primary w-1/2 h-11 min-h-[44px] mt-1"
                  >
                    {isSubmitting ? (
                      <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} opacity="0.3" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
                      </svg>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-ez-carbon flex flex-col sm:flex-row items-start sm:items-center justify-between rounded gap-6 px-8 py-10">
          <div>
            <h2 className="text-[22px] font-medium text-white leading-tight">
              Let&apos;s get started on something great
            </h2>
            <p className="text-ez-sm text-white/50">Join 4,000+ teams already growing with Untitled.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="ez-btn ez-btn-primary px-6 text-ez-sm">Get started</button>
            <button className="ez-btn ez-btn-secondary px-6 text-ez-sm">View docs</button>
          </div>
        </div>

      </div>
    </div>
  );
}