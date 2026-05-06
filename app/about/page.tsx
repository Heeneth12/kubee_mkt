import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Kubee",
  description: "Learn about Kubee — modern inventory management built for Indian businesses.",
};

const stats = [
  { value: "2025", label: "Founded in Chennai" },
  { value: "30+", label: "Cities in India" },
  { value: "45+", label: "Industries served" },
  { value: "100%", label: "Made in India" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="20" width="6" height="16" fill="#3E6AE1" opacity="0.3" />
        <rect x="14" y="12" width="6" height="24" fill="#3E6AE1" opacity="0.6" />
        <rect x="24" y="6" width="6" height="30" fill="#3E6AE1" opacity="0.9" />
        <polyline points="7,20 17,12 27,6" stroke="#3E6AE1" strokeWidth="1.5" fill="none" />
        <circle cx="27" cy="6" r="2.5" fill="#3E6AE1" />
      </svg>
    ),
    title: "Speed",
    description:
      "Operations shouldn't wait. Kubee is built to be fast — loading, searching, and processing in real time.",
    metric: "< 2s",
    metricLabel: "average sync time",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="18" width="24" height="16" rx="1" stroke="#171A20" strokeWidth="1.5" opacity="0.7" />
        <path d="M13 18V13a7 7 0 0114 0v5" stroke="#171A20" strokeWidth="1.5" opacity="0.4" />
        <circle cx="20" cy="26" r="3" fill="#3E6AE1" opacity="0.9" />
        <rect x="19" y="26" width="2" height="4" rx="1" fill="#3E6AE1" opacity="0.6" />
      </svg>
    ),
    title: "Reliability",
    description:
      "99.9% uptime SLA. Your data is always available when you need it, stored in Indian data centers.",
    metric: "99.9%",
    metricLabel: "uptime guarantee",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" stroke="#171A20" strokeWidth="1.5" opacity="0.2" />
        <circle cx="20" cy="20" r="6" fill="#3E6AE1" opacity="0.2" />
        <circle cx="20" cy="20" r="3" fill="#3E6AE1" opacity="0.9" />
        <line x1="20" y1="8" x2="20" y2="5" stroke="#3E6AE1" strokeWidth="1.5" opacity="0.5" />
        <line x1="32" y1="20" x2="35" y2="20" stroke="#3E6AE1" strokeWidth="1.5" opacity="0.5" />
        <line x1="20" y1="32" x2="20" y2="35" stroke="#3E6AE1" strokeWidth="1.5" opacity="0.5" />
        <line x1="8" y1="20" x2="5" y2="20" stroke="#3E6AE1" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    title: "Simplicity",
    description:
      "Powerful enough for enterprises, simple enough for a kirana store owner to use on day one.",
    metric: "Day 1",
    metricLabel: "time to value",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "Co-founder & CEO",
    initials: "AM",
    color: "#3E6AE1",
    linkedin: "https://linkedin.com/in/arjunmehta",
    twitter: "https://x.com/arjunmehta",
  },
  {
    name: "Priya Nair",
    role: "Co-founder & CTO",
    initials: "PN",
    color: "#171A20",
    linkedin: "https://linkedin.com/in/priyanair",
    twitter: "https://x.com/priyanair",
  },
  {
    name: "Rohan Das",
    role: "Head of Product",
    initials: "RD",
    color: "#5C5E62",
    linkedin: "https://linkedin.com/in/rohandas",
    twitter: null,
  },
  {
    name: "Meera Iyer",
    role: "Head of Design",
    initials: "MI",
    color: "#3E6AE1",
    linkedin: "https://linkedin.com/in/meeraiyer",
    twitter: "https://x.com/meeraiyer",
  },
];

const MissionIllustration = () => (
  <svg viewBox="0 0 480 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="360" fill="#F4F4F4" />
    {/* India outline - simplified geometric */}
    <path
      d="M200 60 L240 52 L280 60 L310 90 L320 130 L310 170 L290 210 L260 250 L240 280 L220 250 L195 210 L178 170 L170 130 L180 90 Z"
      fill="#3E6AE1"
      opacity="0.08"
      stroke="#3E6AE1"
      strokeWidth="1"
      strokeOpacity="0.3"
    />
    {/* City dots */}
    <circle cx="214" cy="148" r="5" fill="#3E6AE1" opacity="0.9" />
    <circle cx="214" cy="148" r="10" fill="#3E6AE1" opacity="0.15" />
    {/* Mumbai */}
    <circle cx="196" cy="168" r="4" fill="#3E6AE1" opacity="0.7" />
    <circle cx="196" cy="168" r="8" fill="#3E6AE1" opacity="0.1" />
    {/* Delhi */}
    <circle cx="232" cy="96" r="4" fill="#3E6AE1" opacity="0.7" />
    {/* Chennai */}
    <circle cx="238" cy="218" r="4" fill="#3E6AE1" opacity="0.7" />
    {/* Kolkata */}
    <circle cx="278" cy="148" r="3" fill="#3E6AE1" opacity="0.5" />
    {/* Hyderabad */}
    <circle cx="232" cy="192" r="3" fill="#3E6AE1" opacity="0.5" />
    {/* Connection lines */}
    <line x1="214" y1="148" x2="196" y2="168" stroke="#3E6AE1" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
    <line x1="214" y1="148" x2="232" y2="96" stroke="#3E6AE1" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
    <line x1="214" y1="148" x2="238" y2="218" stroke="#3E6AE1" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
    <line x1="214" y1="148" x2="278" y2="148" stroke="#3E6AE1" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
    {/* Stats cards floating */}
    <rect x="316" y="80" width="120" height="48" fill="white" stroke="#EEEEEE" />
    <rect x="328" y="92" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
    <rect x="328" y="104" width="36" height="10" rx="1" fill="#171A20" opacity="0.8" />
    <rect x="316" y="148" width="120" height="48" fill="white" stroke="#EEEEEE" />
    <rect x="328" y="160" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
    <rect x="328" y="172" width="44" height="10" rx="1" fill="#3E6AE1" opacity="0.9" />
    <rect x="316" y="216" width="120" height="48" fill="white" stroke="#EEEEEE" />
    <rect x="328" y="228" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
    <rect x="328" y="240" width="28" height="10" rx="1" fill="#171A20" opacity="0.7" />
    {/* Left panel - stat */}
    <rect x="44" y="80" width="112" height="48" fill="white" stroke="#EEEEEE" />
    <rect x="56" y="92" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
    <rect x="56" y="104" width="40" height="10" rx="1" fill="#171A20" opacity="0.8" />
    <rect x="44" y="148" width="112" height="48" fill="white" stroke="#EEEEEE" />
    <rect x="56" y="160" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
    <rect x="56" y="172" width="32" height="10" rx="1" fill="#3E6AE1" opacity="0.9" />
    {/* Bottom strip */}
    <rect x="44" y="284" width="392" height="28" fill="white" stroke="#EEEEEE" />
    <rect x="56" y="294" width="60" height="4" rx="1" fill="#5C5E62" opacity="0.4" />
    <rect x="164" y="294" width="80" height="4" rx="1" fill="#171A20" opacity="0.5" />
    <rect x="300" y="294" width="60" height="4" rx="1" fill="#5C5E62" opacity="0.4" />
  </svg>
);


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
        <div className="max-w-[1383px] mx-auto px-6 lg:px-10">
          <div className="max-w-[780px] step-fade">
            <span className="ez-micro-label text-ez-primary tracking-widest block mb-5">
              Our Story
            </span>
            <h1 className="text-[40px] sm:text-[56px] font-medium text-ez-heading leading-[1.1] tracking-tight mb-6">
              Built for Indian businesses, by Indian builders
            </h1>
            <p className="text-ez-md sm:text-ez-lg text-ez-secondary leading-relaxed max-w-2xl mb-10">
              We started Kubee because we saw Indian businesses struggling with outdated spreadsheets
              and expensive software that wasn't built for the way India works.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/signup" className="ez-btn ez-btn-primary h-11 px-7 text-ez-base">
                Start Free Trial
              </Link>
              <Link href="/careers" className="ez-btn ez-btn-secondary h-11 px-7 text-ez-base">
                Join the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-white">
        <div className="max-w-[1383px] mx-auto px-6 lg:px-10">
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

      {/* ── Mission — alternating layout like features ── */}
      <section className="max-w-[1383px] mx-auto px-6 lg:px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28 border-b border-ez-border">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="ez-micro-label text-ez-secondary tracking-widest">Our Mission</span>
              <span className="text-[10px] font-medium uppercase tracking-widest bg-ez-primary text-white px-2 py-0.5">
                Why We Exist
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] font-medium text-ez-heading leading-tight tracking-tight mb-5">
              Give every Indian business the tools once only available to enterprises
            </h2>
            <p className="text-ez-base sm:text-ez-md text-ez-secondary leading-relaxed mb-8">
              India&apos;s 63 million MSMEs are the backbone of the economy. Yet most of them manage stock
              in Excel or paper registers. Kubee changes that — with real-time tracking, AI forecasting,
              and end-to-end order management that works for both a 2-person shop and a 200-person
              distributor.
            </p>
            <ul className="space-y-5 mb-10">
              {[
                { text: "Built for Indian workflows", sub: "GST-native, Hindi support, UPI-first" },
                { text: "Accessible to all business sizes", sub: "From kirana to enterprise" },
                { text: "Data stays in India", sub: "Hosted on Indian cloud infrastructure" },
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 bg-ez-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-ez-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-ez-base text-ez-heading font-medium leading-snug">{bullet.text}</span>
                    <span className="block text-ez-xs text-ez-muted mt-0.5">{bullet.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
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
          {/* Illustration */}
          <div className="order-1 lg:order-2 w-full bg-ez-ash border border-ez-border aspect-[4/3] flex items-center justify-center overflow-hidden relative">
            <span className="absolute top-3 left-3 ez-micro-label text-ez-muted tracking-widest z-10">Preview</span>
            <MissionIllustration />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-ez-border">
        <div className="max-w-[1383px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <div className="mb-8 lg:mb-12">
            <span className="ez-micro-label text-ez-muted tracking-widest block mb-3">What We Stand For</span>
            <h2 className="text-[28px] sm:text-[36px] font-medium text-ez-heading leading-tight tracking-tight max-w-xl">
              Three principles, zero compromises
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ez-border border border-ez-border">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 flex flex-col hover:bg-ez-ash transition-colors duration-ez">
                <div className="w-10 h-10 border border-ez-border bg-ez-ash flex items-center justify-center mb-6 shrink-0">
                  {v.icon}
                </div>
                <h3 className="text-ez-lg font-medium text-ez-heading mb-2">{v.title}</h3>
                <p className="text-ez-sm text-ez-secondary leading-relaxed mb-6 flex-1">{v.description}</p>
                <div className="border-t border-ez-border pt-4">
                  <p className="text-[22px] font-medium text-ez-heading leading-none">{v.metric}</p>
                  <p className="text-ez-xs text-ez-muted mt-1">{v.metricLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="border-ez-border">
        <div className="max-w-[1383px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="ez-micro-label text-ez-muted tracking-widest block mb-3">The Team</span>
              <h2 className="text-[28px] font-medium text-ez-heading leading-tight">
                Engineers, operators, and entrepreneurs.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-ez-border border border-ez-border">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 hover:bg-ez-ash transition-colors duration-ez group">
                {/* Avatar */}
                <div
                  className="w-full aspect-square border border-ez-border mb-6 flex items-center justify-center text-white text-xl font-medium"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0">
                    <p className="text-ez-base font-medium text-ez-heading leading-snug">{member.name}</p>
                    <p className="text-ez-xs text-ez-muted mt-0.5">{member.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 border border-ez-border flex items-center justify-center text-ez-muted hover:text-ez-primary hover:border-ez-primary transition-colors duration-ez"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 border border-ez-border flex items-center justify-center text-ez-muted hover:text-ez-primary hover:border-ez-primary transition-colors duration-ez"
                        aria-label={`${member.name} on X`}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.844L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Inline metrics like features page */}
          <div className="flex gap-0 border border-ez-border mt-8">
            <div className="flex-1 px-5 py-4 border-r border-ez-border">
              <p className="text-[22px] font-medium text-ez-heading leading-none">40+</p>
              <p className="text-ez-xs text-ez-muted mt-1">Team members across India</p>
            </div>
            <div className="flex-1 px-5 py-4 border-r border-ez-border">
              <p className="text-[22px] font-medium text-ez-heading leading-none">8</p>
              <p className="text-ez-xs text-ez-muted mt-1">Cities with offices</p>
            </div>
            <div className="flex-1 px-5 py-4">
              <p className="text-[22px] font-medium text-ez-heading leading-none">6+</p>
              <p className="text-ez-xs text-ez-muted mt-1">Open roles right now</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}