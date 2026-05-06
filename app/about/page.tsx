import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Kubee",
  description:
    "Kubee was built by one person — from code to design to sales. Learn the story behind India's modern inventory platform.",
};

const stats = [
  { value: "2025", label: "Founded in Chennai" },
  { value: "30+", label: "Cities across India" },
  { value: "45+", label: "Industries served" },
  { value: "1", label: "Person who built all of it" },
];

const hats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Engineering",
    sub: "Full-stack, frontend, backend, infra — written from scratch",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Product & Design",
    sub: "Every screen, flow, and pixel — designed solo",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    title: "Marketing",
    sub: "Messaging, landing pages, content — one consistent voice",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Sales",
    sub: "First calls, first deals, first customers — all direct",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Customer Support",
    sub: "Every early ticket answered personally",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Infrastructure & Ops",
    sub: "Hosting, DevOps, security, uptime — all hands-on",
  },
];

const values = [
  {
    metric: "< 2s",
    metricLabel: "average sync time",
    title: "Speed",
    description: "Operations shouldn't wait. Kubee is built to be fast — loading, searching, and processing in real time.",
  },
  {
    metric: "99.9%",
    metricLabel: "uptime guarantee",
    title: "Reliability",
    description: "Your data is always available when you need it, stored in Indian data centers with a 99.9% uptime SLA.",
  },
  {
    metric: "Day 1",
    metricLabel: "time to value",
    title: "Simplicity",
    description: "Powerful enough for enterprises, simple enough for a kirana store owner to use on day one.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-ez-body">

      {/* ── Hero ── */}
      <section
        className="pt-12 pb-20 lg:pt-24 lg:pb-28 px-6 lg:px-10"
        style={{
          background:
            "linear-gradient(180deg, #c8d6e5 0%, #dfe6ed 30%, #f0f0f0 70%, #ffffff 100%)",
        }}
      >
        <div className="max-w-345 mx-auto px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="ez-micro-label text-ez-primary tracking-widest block mb-5">
              Our Story
            </span>
            <h1 className="text-[40px] sm:text-[56px] font-medium text-ez-heading leading-[1.1] tracking-tight mb-6">
              One person built this.{" "}
              <span className="italic text-ez-primary">Every single bit of it.</span>
            </h1>
            <p className="text-ez-md sm:text-ez-lg text-ez-secondary leading-relaxed max-w-2xl mb-6">
              Kubee started in Chennai in 2025 — no co-founder, no agency, no outsourcing.
              The idea, the code, the design, the sales, the marketing — all one person.
              That&apos;s not a limitation. That&apos;s the whole point.
            </p>

            {/* Solo founder callout */}
            <div className="inline-flex items-center gap-3 border border-ez-border bg-white/70 px-4 py-2.5 mb-10">
              <div className="w-2 h-2 rounded-full bg-ez-primary shrink-0" />
              <span className="text-ez-sm text-ez-secondary">
                Founded &amp; built entirely by{" "}
                <span className="font-medium text-ez-heading">A V Heeneth Sai</span>
                {" "}· Chennai, India · 2025
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/signup" className="ez-btn ez-btn-primary h-11 px-7 text-ez-base">
                Start Free Trial
              </Link>
              <Link href="/contact" className="ez-btn ez-btn-secondary h-11 px-7 text-ez-base">
                Talk to the Founder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-white">
        <div className="max-w-345 mx-auto px-6 lg:px-10 border-b border-ez-border">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 first:pl-0 last:pr-0">
                <p className="text-[28px] font-medium text-ez-heading leading-none mb-1">{s.value}</p>
                <p className="text-ez-xs text-ez-secondary mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Every Hat ── */}
      <section className="max-w-345 mx-auto px-6 lg:px-10 py-20 lg:py-28 border-b border-ez-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: copy */}
          <div>
            <span className="ez-micro-label text-ez-muted tracking-widest block mb-5">
              How It Was Built
            </span>
            <h2 className="text-[30px] sm:text-[38px] font-medium text-ez-heading leading-tight tracking-tight mb-5">
              Every hat. One head.
            </h2>
            <p className="text-ez-base sm:text-ez-md text-ez-secondary leading-relaxed mb-8">
              Most startups split these responsibilities across a founding team, a design agency,
              a marketing firm, and a sales hire. Kubee didn&apos;t. Every part of what you see —
              the product, the brand, the growth — came from one person working obsessively to get it right.
            </p>

            {/* Note callout */}
            <div className="border-l-2 border-ez-primary bg-ez-ash px-5 py-4 mb-8">
              <p className="text-ez-sm text-ez-secondary leading-relaxed">
                <span className="font-medium text-ez-heading">Why this matters:</span>{" "}
                When a single person owns every layer of the product, there&apos;s no translation
                loss between vision and execution. What you get is exactly what was intended.
              </p>
            </div>

            {/* Inline metrics */}
            <div className="flex gap-0 border border-ez-border">
              <div className="flex-1 px-5 py-4 border-r border-ez-border">
                <p className="text-[22px] font-medium text-ez-heading leading-none">63M+</p>
                <p className="text-ez-xs text-ez-muted mt-1">MSMEs in India</p>
              </div>
              <div className="flex-1 px-5 py-4">
                <p className="text-[22px] font-medium text-ez-heading leading-none">₹200Cr+</p>
                <p className="text-ez-xs text-ez-muted mt-1">Inventory tracked monthly</p>
              </div>
            </div>
          </div>

          {/* Right: hats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-ez-border border border-ez-border">
            {hats.map((h) => (
              <div key={h.title} className="bg-white p-6 hover:bg-ez-ash transition-colors duration-ez">
                <div className="w-9 h-9 border border-ez-border bg-ez-ash flex items-center justify-center mb-4 text-ez-primary shrink-0">
                  {h.icon}
                </div>
                <p className="text-ez-sm font-medium text-ez-heading leading-snug mb-1">{h.title}</p>
                <p className="text-ez-xs text-ez-muted leading-relaxed">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section>
        <div className="max-w-345 mx-auto px-6 lg:px-10 py-12 lg:py-16 border-b border-ez-border">
          <div className="mb-8 lg:mb-12">
            <span className="ez-micro-label text-ez-muted tracking-widest block mb-3">What We Stand For</span>
            <h2 className="text-[28px] sm:text-[36px] font-medium text-ez-heading leading-tight tracking-tight max-w-xl">
              Three principles, zero compromises.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ez-border border border-ez-border">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 flex flex-col hover:bg-ez-ash transition-colors duration-ez">
                <div className="border-b border-ez-border pb-4 mb-6">
                  <p className="text-[28px] font-medium text-ez-heading leading-none">{v.metric}</p>
                  <p className="text-ez-xs text-ez-muted mt-1">{v.metricLabel}</p>
                </div>
                <h3 className="text-ez-lg font-medium text-ez-heading mb-2">{v.title}</h3>
                <p className="text-ez-sm text-ez-secondary leading-relaxed flex-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section>
        <div className="max-w-345 mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <div className="mb-10">
            <span className="ez-micro-label text-ez-muted tracking-widest block mb-3">The Team</span>
            <h2 className="text-[28px] font-medium text-ez-heading leading-tight">
              The builder behind Kubee.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Founder card */}
            <div className="border border-ez-border">
              <div
                className="w-full aspect-[3/2] flex items-center justify-center text-white text-[64px] font-medium"
                style={{ backgroundColor: "#3E6AE1" }}
              >
                HS
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-ez-lg font-medium text-ez-heading">A V Heeneth Sai</p>
                    <p className="text-ez-xs text-ez-muted mt-0.5">Founder · Engineer · Designer · Salesperson · Everything</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="https://www.linkedin.com/in/atturu-venkat-heeneth-sai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 border border-ez-border flex items-center justify-center text-ez-muted hover:text-ez-primary hover:border-ez-primary transition-colors duration-ez"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/HeenethSai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 border border-ez-border flex items-center justify-center text-ez-muted hover:text-ez-primary hover:border-ez-primary transition-colors duration-ez"
                      aria-label="X / Twitter"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.844L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-ez-sm text-ez-secondary leading-relaxed">
                  Heeneth built Kubee entirely on his own — from the first commit to the first customer.
                  He handles engineering, design, product decisions, sales calls, and customer support.
                  Not because there&apos;s no one else, but because staying close to every layer
                  is how great products get made.
                </p>
              </div>
            </div>

            {/* Why solo is the story */}
            <div className="space-y-6">
              <div>
                <p className="text-ez-base font-medium text-ez-heading mb-2">
                  Why solo-built is actually the advantage
                </p>
                <p className="text-ez-sm text-ez-secondary leading-relaxed">
                  When one person owns the entire stack — from database schema to sales email — there&apos;s
                  no committee, no handoff delay, no &quot;lost in translation&quot; between design and engineering.
                  You get a product that moves fast, thinks consistently, and actually reflects
                  a single coherent vision.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Built for Indian workflows",
                    sub: "GST-native, Hindi support, UPI-first — because the founder lives it too",
                  },
                  {
                    label: "Every feature is intentional",
                    sub: "No feature committee. If it ships, it was worth shipping.",
                  },
                  {
                    label: "Direct access to the builder",
                    sub: "When you write in, you're often talking to the person who wrote that code",
                  },
                  {
                    label: "Data stays in India",
                    sub: "Hosted on Indian cloud infrastructure from day one",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 bg-ez-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-ez-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-ez-sm text-ez-heading font-medium leading-snug">{item.label}</span>
                      <span className="block text-ez-xs text-ez-muted mt-0.5">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-ez-border p-5 bg-ez-ash">
                <p className="text-ez-xs text-ez-muted uppercase tracking-widest mb-2">Looking ahead</p>
                <p className="text-ez-sm text-ez-secondary leading-relaxed">
                  As Kubee grows, the team will too. But the culture of building carefully,
                  shipping intentionally, and staying close to the customer will never change.
                  That&apos;s not a phase — it&apos;s the foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-345 mx-auto px-6 lg:px-10 py-12 lg:py-18">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-[28px] sm:text-[36px] font-medium text-ez-heading leading-tight tracking-tight mb-3">
              Built by one person,{" "}
              <span className="italic text-ez-primary">for millions more.</span>
            </h2>
            <p className="text-ez-base text-ez-secondary max-w-lg leading-relaxed">
              India&apos;s 63 million MSMEs deserve software that actually works for them.
              Come see what one determined builder put together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="ez-btn ez-btn-primary h-11 px-8 text-ez-base text-center">
              Talk to Heeneth
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}