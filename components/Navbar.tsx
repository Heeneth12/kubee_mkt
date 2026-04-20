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
    <nav className="sticky top-0 z-50 bg-brand-blue-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center font-extrabold text-sm text-brand-blue-dark">
              K
            </div>
            <span className="font-bold text-lg text-white">Kubee</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="text-sm text-white border border-white/30 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="text-sm font-bold bg-brand-yellow text-brand-blue-dark px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              className="block py-3 text-sm text-white/80 hover:text-white border-b border-white/10"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link href="#" className="flex-1 text-center text-sm text-white border border-white/30 px-4 py-2 rounded-lg">
              Sign in
            </Link>
            <Link href="#" className="flex-1 text-center text-sm font-bold bg-brand-yellow text-brand-blue-dark px-4 py-2 rounded-lg">
              Start Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
