"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1b4acc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/>
          </svg>
            <span className="font-extrabold text-xl text-white">Kubee</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2.5 rounded text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 transition-colors">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded text-sm font-semibold text-slate-900 bg-[#96F2A4] hover:bg-[#85e193] transition-colors">
              Request access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu">
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-blue-dark border-t border-white/10 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/80 hover:text-white border-b border-white/10">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link
              href="/login"
              className="flex-1 text-center text-sm text-white border border-white/30 px-4 py-2 rounded-lg">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center text-sm font-bold bg-white text-brand-blue-dark px-4 py-2 rounded-lg">
              Start Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
