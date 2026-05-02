"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/Kubee_logo.png";

const solutionsLeft = [
  {
    title: "POS System",
    desc: "Fast billing at the counter.",
    href: "/solutions/pos",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
      </svg>
    ),
    color: "text-blue-500 bg-blue-50 border-blue-100",
  },
  {
    title: "Hospital Management",
    desc: "Patients, OPD & billing in one place.",
    href: "/solutions/hospital",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "text-rose-500 bg-rose-50 border-rose-100",
  },
  {
    title: "Inventory Management",
    desc: "Stock, orders & warehouse control.",
    href: "/solutions/inventory",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    color: "text-amber-500 bg-amber-50 border-amber-100",
  },
  {
    title: "School Management",
    desc: "Students, fees & attendance.",
    href: "/solutions/school",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    color: "text-violet-500 bg-violet-50 border-violet-100",
  },
  {
    title: "Restaurant & F&B",
    desc: "Tables, KOT & menu management.",
    href: "/solutions/restaurant",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "text-orange-500 bg-orange-50 border-orange-100",
  },
  {
    title: "Real Estate CRM",
    desc: "Leads, properties & deal tracking.",
    href: "/solutions/real-estate",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "text-teal-500 bg-teal-50 border-teal-100",
  },
];

const solutionsRight = [
  { title: "Freelancers", href: "/solutions/freelancers" },
  { title: "Small Teams", href: "/solutions/teams" },
  { title: "Agencies", href: "/solutions/agencies" },
  { title: "Invoicing", href: "/solutions/invoicing" },
  { title: "Client Portal", href: "/solutions/client-portal" },
  { title: "Automation", href: "/solutions/automation" },
];

const featuredSolution = {
  title: "All-in-one Business Suite",
  desc: "One platform that handles billing, clients, inventory and more — built for Indian SMBs.",
  href: "/solutions",
  badge: "New",
};

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Guide", href: "/guides" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenApp = (type: string) => {
    if (type === "demo") {
      window.open("https://app.kubee.in/auth/login?demo=true", "_blank");
    }
    if (type === "login") {
      window.open("https://app.kubee.in/auth/login", "_blank");
    }
  };

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    setSolutionsOpen(false);
    setOpen(false);
  }, [pathname]);

  const isSolutionsActive = pathname.startsWith("/solutions");

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-ez-border">
      <div className="max-w-345 mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center outline-none">
            <Image src={logo} alt="Logo" width={36} height={36} />
            <span className="font-bold text-lg">Kubee</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">

            {/* Solutions trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsOpen((p) => !p)}
                className={`flex items-center gap-1 px-4 py-1.5 min-h-[32px] rounded text-ez-md font-medium transition-[background-color,color] duration-ez outline-none ${isSolutionsActive || solutionsOpen
                  ? "text-ez-heading bg-ez-ash"
                  : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                  }`}
              >
                Solutions
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ── Mega dropdown ── */}
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[900px] bg-white border border-ez-border shadow-lg rounded step-fade overflow-hidden">

                  <div className="grid grid-cols-[1fr_180px_220px]">

                    {/* Col 1 — Industry solutions (2-col sub-grid) */}
                    <div className="p-4 border-r border-ez-border">
                      <p className="ez-micro-label text-ez-muted tracking-widest px-2 mb-3">By Industry</p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {solutionsLeft.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`flex items-start gap-3 px-2 py-2.5 group transition-colors duration-ez ${isActive ? "bg-ez-ash" : "hover:bg-ez-ash"
                                }`}
                            >
                              <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded border mt-0.5 ${item.color}`}>
                                {item.icon}
                              </span>
                              <span>
                                <span className={`block text-ez-sm font-medium leading-tight ${isActive ? "text-ez-primary" : "text-ez-heading"}`}>
                                  {item.title}
                                </span>
                                <span className="block text-[10px] text-ez-muted mt-0.5 leading-snug">
                                  {item.desc}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 2 — By Team quick links */}
                    <div className="p-4 border-r border-ez-border">
                      <p className="ez-micro-label text-ez-muted tracking-widest px-2 mb-3">By Team</p>
                      <ul className="space-y-0.5">
                        {solutionsRight.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={`flex items-center justify-between px-2 py-2 text-ez-sm font-medium transition-colors duration-ez group ${isActive
                                  ? "text-ez-primary bg-ez-ash"
                                  : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                                  }`}
                              >
                                {item.title}
                                <svg
                                  className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 text-ez-muted"
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Col 3 — Featured card */}
                    <div className="p-4 flex flex-col">
                      <p className="ez-micro-label text-ez-muted tracking-widest px-1 mb-3">Featured</p>
                      <Link
                        href={featuredSolution.href}
                        className="flex-1 flex flex-col bg-ez-ash border border-ez-border p-4 group hover:border-ez-subtle transition-colors duration-ez"
                      >
                        {/* Decorative visual */}
                        <div className="w-full h-[72px] mb-4 relative overflow-hidden border border-ez-border bg-white flex items-center justify-center gap-2">
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(0deg,#EEEEEE,#EEEEEE 1px,transparent 1px,transparent 18px),repeating-linear-gradient(90deg,#EEEEEE,#EEEEEE 1px,transparent 1px,transparent 18px)",
                            }}
                          />
                          {["POS", "ERP", "CRM"].map((t) => (
                            <span key={t} className="relative text-[9px] font-medium bg-ez-primary text-white px-2 py-0.5">
                              {t}
                            </span>
                          ))}
                        </div>

                        {featuredSolution.badge && (
                          <span className="inline-block text-[9px] font-medium uppercase tracking-widest bg-ez-primary text-white px-2 py-0.5 mb-2 self-start">
                            {featuredSolution.badge}
                          </span>
                        )}
                        <p className="text-ez-sm font-medium text-ez-heading leading-snug mb-1">
                          {featuredSolution.title}
                        </p>
                        <p className="text-[10px] text-ez-muted leading-relaxed flex-1">
                          {featuredSolution.desc}
                        </p>

                        <div className="mt-4 flex items-center gap-1 text-ez-xs font-medium text-ez-primary group-hover:gap-2 transition-all duration-150">
                          Explore suite
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Bottom CTA strip */}
                  <div className="border-t border-ez-border px-5 py-3 bg-ez-ash flex items-center justify-between">
                    <span className="text-ez-xs text-ez-secondary">
                      Not sure which solution fits your business?
                    </span>
                    <Link
                      href="/contact"
                      className="text-ez-xs font-medium text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez flex items-center gap-1"
                    >
                      Talk to our team
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Regular nav links */}
            {navLinks.map((l) => {
              const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-1.5 min-h-[32px] rounded text-ez-md font-medium transition-[background-color,color] duration-ez outline-none ${isActive
                    ? "text-ez-heading bg-ez-ash"
                    : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                    }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-center gap-3">
            <button onClick={() => handleOpenApp("login")} className="ez-btn ez-btn-primary">
              Sign In
            </button>
            <button onClick={() => handleOpenApp("demo")} className="ez-btn ez-surface border border-ez-ash">
              See How It Works
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ez-heading p-2 transition-colors duration-ez outline-none"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-ez-border px-6 pb-6 pt-2">

          {/* Industry solutions */}
          <div className="border-b border-ez-border py-3">
            <p className="text-ez-xs font-medium text-ez-muted uppercase tracking-widest mb-2">By Industry</p>
            {solutionsLeft.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 py-2 text-ez-base font-medium text-ez-secondary hover:text-ez-heading transition-colors duration-ez outline-none"
              >
                <span className={`w-6 h-6 flex items-center justify-center rounded border flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </span>
                {item.title}
              </Link>
            ))}
          </div>

          {/* By Team */}
          <div className="border-b border-ez-border py-3">
            <p className="text-ez-xs font-medium text-ez-muted uppercase tracking-widest mb-2">By Team</p>
            {solutionsRight.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-ez-base font-medium text-ez-secondary hover:text-ez-heading transition-colors duration-ez outline-none"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Regular links */}
          {navLinks.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-ez-base font-medium border-b border-ez-border last:border-0 transition-colors duration-ez outline-none ${isActive ? "text-ez-heading" : "text-ez-secondary hover:text-ez-heading"
                  }`}
              >
                {l.label}
              </Link>
            );
          })}

          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => { handleOpenApp("login") }}
              className="ez-btn ez-btn-primary w-full"
            >
              Get Started Free &rarr;
            </button>
            <button
              onClick={() => { handleOpenApp("demo"); }}
              className="ez-btn ez-surface border border-ez-ash w-full"
            >
              See How It Works
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}