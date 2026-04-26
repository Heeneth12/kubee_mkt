"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Guide", href: "/guides" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get current route
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-ez-border">
      <div className="max-w-345 mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 outline-none">
            <span className="font-bold text-lg">Kubee</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((l) => {
              // Check if exact match OR if we are inside a sub-directory (e.g., /guides/setup)
              const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));

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
            <button onClick={() => router.push('/signup')} className="ez-btn ez-btn-primary">
              Sign In
            </button>
            <button onClick={() => router.push('/login')} className="ez-btn ez-surface border border-ez-ash">
              See How It Works
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ez-heading p-2 transition-colors duration-ez outline-none"
            aria-label="Toggle menu">
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
      {
        open && (
          <div className="md:hidden bg-white border-t border-ez-border px-6 pb-6 pt-2">
            {navLinks.map((l) => {
              const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-ez-base font-medium border-b border-ez-border last:border-0 transition-colors duration-ez outline-none ${isActive
                    ? "text-ez-heading"
                    : "text-ez-secondary hover:text-ez-heading"
                    }`}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 mt-6">
              <button
                onClick={() => { setOpen(false); router.push('/signup'); }}
                className="ez-btn ez-btn-primary w-full">
                Get Started Free &rarr;
              </button>
              <button
                onClick={() => { setOpen(false); router.push('/login'); }}
                className="ez-btn ez-surface border border-ez-ash w-full">
                See How It Works
              </button>
            </div>
          </div>
        )
      }
    </nav >
  );
}