"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { openApp } from "./utils/openApp";
import Image from "next/image";
import logo from "@/assets/images/Kubee_logo.png";

import {
  ShoppingCart,
  Stethoscope,
  Package,
  Utensils,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from "lucide-react";

const solutionsLeft = [
  {
    title: "POS System",
    desc: "Fast billing at the counter.",
    href: "/solutions/pos",
    icon: <ShoppingCart className="w-4 h-4" strokeWidth={1.5} />,
    color: "text-blue-500 bg-blue-50 border-blue-100",
  },
  {
    title: "Hospital Management",
    desc: "Patients, OPD & billing in one place.",
    href: "/solutions/hospital",
    icon: <Stethoscope className="w-4 h-4" strokeWidth={1.5} />,
    color: "text-rose-500 bg-rose-50 border-rose-100",
  },
  {
    title: "Inventory Management",
    desc: "Stock, orders & warehouse control.",
    href: "/solutions/inventory",
    icon: <Package className="w-4 h-4" strokeWidth={1.5} />,
    color: "text-amber-500 bg-amber-50 border-amber-100",
  },
  {
    title: "Restaurant & F&B",
    desc: "Tables, KOT & menu management.",
    href: "/solutions/restaurant",
    icon: <Utensils className="w-4 h-4" strokeWidth={1.5} />,
    color: "text-orange-500 bg-orange-50 border-orange-100",
  },
];

const solutionsRight = [
  { title: "Agencies", href: "/solutions/agencies" },
  { title: "Invoicing", href: "/solutions/invoicing" },
  { title: "Client Portal", href: "/solutions/client-portal" },
  { title: "Automation", href: "/solutions/automation" },
];

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Guide", href: "/guides" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<"main" | "solutions">("main");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setSolutionsOpen(false);
    setOpen(false);
    setMobilePanel("main");
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isSolutionsActive = pathname.startsWith("/solutions");

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white border-b border-ez-border transition-shadow duration-200 ${scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.06)]" : ""
          }`}
      >
        <div className="max-w-345 mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2 outline-none shrink-0">
              <Image src={logo} alt="Logo" width={34} height={34} />
              <span className="font-bold text-lg text-ez-heading">Kubee</span>
            </Link>

            {/* ── Desktop centre nav ── */}
            <div className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">

              {/* Solutions trigger */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setSolutionsOpen((p) => !p)}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 min-h-[32px] rounded text-ez-md font-medium transition-[background-color,color] duration-ez outline-none ${isSolutionsActive || solutionsOpen
                    ? "text-ez-heading bg-ez-ash"
                    : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                    }`}
                >
                  Solutions
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-ez-muted transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                    strokeWidth={2.5}
                  />
                </button>

                {/* Mega dropdown */}
                {solutionsOpen && (
                  <div
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] bg-white border border-ez-border shadow-lg rounded step-fade overflow-hidden"
                  >
                    <div className="grid grid-cols-[1fr_188px]">

                      {/* Col 1 — By Industry */}
                      <div className="p-5 border-r border-ez-border">
                        <p className="ez-micro-label text-ez-muted tracking-widest px-1 mb-3">By Industry</p>
                        <div className="grid grid-cols-2 gap-0.5">
                          {solutionsLeft.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-start gap-3 px-2.5 py-3 group transition-colors duration-ez rounded ${isActive ? "bg-ez-ash" : "hover:bg-ez-ash"
                                  }`}
                              >
                                <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded border mt-0.5 transition-transform duration-ez group-hover:scale-105 ${item.color}`}>
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

                      {/* Col 2 — By Team */}
                      <div className="p-5">
                        <p className="ez-micro-label text-ez-muted tracking-widest px-1 mb-3">By Team</p>
                        <ul className="space-y-0.5">
                          {solutionsRight.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className={`flex items-center justify-between px-2.5 py-2.5 text-ez-sm font-medium rounded transition-colors duration-ez group ${isActive
                                    ? "text-ez-primary bg-ez-ash"
                                    : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                                    }`}
                                >
                                  {item.title}
                                  <ChevronRight
                                    className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 text-ez-muted"
                                    strokeWidth={2.5}
                                  />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA strip */}
                    <div className="border-t border-ez-border px-5 py-3 bg-ez-ash flex items-center justify-between">
                      <span className="text-ez-xs text-ez-secondary">
                        Not sure which solution fits your business?
                      </span>
                      <Link
                        href="/contact"
                        className="text-ez-xs font-medium text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez flex items-center gap-1 group"
                      >
                        Talk to our team
                        <ChevronRight
                          className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-ez"
                          strokeWidth={2.5}
                        />
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

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              <button onClick={() => openApp("login")} className="ez-btn ez-btn-primary">
                Sign In
              </button>
              <button onClick={() => openApp("demo")} className="ez-btn ez-surface border border-ez-ash">
                See How It Works
              </button>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => { setOpen(!open); setMobilePanel("main"); }}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded text-ez-heading hover:bg-ez-ash transition-colors duration-ez outline-none"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="w-5 h-5" strokeWidth={1.8} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      {open && (
        <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white flex flex-col overflow-hidden" style={{ top: 64 }}>

          {/* Sliding panels */}
          <div className="relative flex-1 overflow-hidden">

            {/* Main panel */}
            <div
              className={`absolute inset-0 flex flex-col overflow-y-auto transition-transform duration-300 ease-out ${mobilePanel === "solutions" ? "-translate-x-full" : "translate-x-0"
                }`}
            >
              <div className="flex flex-col flex-1 px-4 pt-2 pb-8">

                {/* Solutions row → opens sub-panel */}
                <button
                  onClick={() => setMobilePanel("solutions")}
                  className={`flex items-center justify-between w-full px-3 py-3.5 text-ez-base font-medium border-b border-ez-border transition-colors duration-ez outline-none ${isSolutionsActive ? "text-ez-primary" : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                    }`}
                >
                  Solutions
                  <ChevronRight className="w-4 h-4 text-ez-muted" strokeWidth={2} />
                </button>

                {/* Regular links */}
                {navLinks.map((l) => {
                  const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-3.5 text-ez-base font-medium border-b border-ez-border transition-colors duration-ez outline-none ${isActive
                        ? "text-ez-heading"
                        : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                        }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}

                {/* CTAs */}
                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <button
                    onClick={() => openApp("login")}
                    className="ez-btn ez-btn-primary w-full"
                  >
                    Get Started Free &rarr;
                  </button>
                  <button
                    onClick={() => openApp("demo")}
                    className="ez-btn ez-surface border border-ez-ash w-full"
                  >
                    See How It Works
                  </button>
                </div>

                <p className="text-center text-ez-xs text-ez-muted mt-5">
                  Questions?{" "}
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="text-ez-primary font-medium hover:text-ez-primary-hover transition-colors duration-ez"
                  >
                    Talk to our team
                  </Link>
                </p>
              </div>
            </div>

            {/* Solutions sub-panel */}
            <div
              className={`absolute inset-0 flex flex-col overflow-y-auto transition-transform duration-300 ease-out ${mobilePanel === "solutions" ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="px-4 pt-2 pb-8">

                {/* Back */}
                <button
                  onClick={() => setMobilePanel("main")}
                  className="flex items-center gap-1.5 text-ez-sm font-medium text-ez-secondary hover:text-ez-heading transition-colors duration-ez mb-4 px-1 py-1"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                  Back
                </button>

                {/* By Industry */}
                <p className="ez-micro-label text-ez-muted tracking-widest px-1 mb-2">By Industry</p>
                <div className="space-y-0.5 mb-6">
                  {solutionsLeft.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-2.5 py-3 rounded transition-colors duration-ez ${isActive ? "bg-ez-ash" : "hover:bg-ez-ash"
                          }`}
                      >
                        <span className={`w-8 h-8 flex items-center justify-center rounded border flex-shrink-0 ${item.color}`}>
                          {item.icon}
                        </span>
                        <span>
                          <span className={`block text-ez-sm font-medium ${isActive ? "text-ez-primary" : "text-ez-heading"}`}>
                            {item.title}
                          </span>
                          <span className="block text-[11px] text-ez-muted leading-snug">{item.desc}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* By Team */}
                <p className="ez-micro-label text-ez-muted tracking-widest px-1 mb-2">By Team</p>
                <div className="space-y-0.5">
                  {solutionsRight.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between px-2.5 py-3 rounded text-ez-sm font-medium transition-colors duration-ez group ${isActive
                          ? "text-ez-primary bg-ez-ash"
                          : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                          }`}
                      >
                        {item.title}
                        <ChevronRight
                          className="w-3.5 h-3.5 text-ez-muted opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-ez"
                          strokeWidth={2.5}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}