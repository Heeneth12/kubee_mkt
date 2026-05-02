import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Kubee inventory management software.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-ez-ash border-b border-ez-border py-12 text-center px-6 lg:px-10">
        <h1 className="text-[40px] font-medium text-ez-heading leading-tight mb-3">Cookie Policy</h1>
        <p className="text-ez-base text-ez-secondary">Last updated: 20 April 2026</p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto">

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">What Are Cookies</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            Cookies are small text files placed on your device when you visit a website. They help us remember your preferences and understand how you use our service.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-6">Cookies We Use</h2>

          <h3 className="text-ez-lg font-medium text-ez-heading mb-3">Essential Cookies (always active)</h3>
          <p className="text-ez-base text-ez-body leading-normal mb-4">
            These cookies are necessary for the Service to function and cannot be disabled.
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ez-primary mt-2 shrink-0"></span>
              <span className="text-ez-base text-ez-body leading-normal">
                <strong className="font-medium text-ez-heading">session_id</strong> — keeps you logged in during your session. Expires when you close your browser.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ez-primary mt-2 shrink-0"></span>
              <span className="text-ez-base text-ez-body leading-normal">
                <strong className="font-medium text-ez-heading">csrf_token</strong> — prevents cross-site request forgery attacks. Session-scoped.
              </span>
            </li>
          </ul>

          <h3 className="text-ez-lg font-medium text-ez-heading mb-3">Analytics Cookies (optional)</h3>
          <p className="text-ez-base text-ez-body leading-normal mb-4">
            These help us understand how visitors use our marketing site. All data is anonymised.
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ez-primary mt-2 shrink-0"></span>
              <span className="text-ez-base text-ez-body leading-normal">
                <strong className="font-medium text-ez-heading">_ga, _gid</strong> — Google Analytics. Track page views and session duration anonymously. Expires in 2 years / 24 hours respectively.
              </span>
            </li>
          </ul>

          <h3 className="text-ez-lg font-medium text-ez-heading mb-3">Preference Cookies (optional)</h3>
          <ul className="space-y-3 mb-10">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ez-primary mt-2 shrink-0"></span>
              <span className="text-ez-base text-ez-body leading-normal">
                <strong className="font-medium text-ez-heading">kubee_billing</strong> — remembers whether you last selected Monthly or Annual pricing. Expires in 30 days.
              </span>
            </li>
          </ul>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">How to Opt Out</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-4">
            You can disable non-essential cookies in your browser settings. Instructions for major browsers:
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ez-primary shrink-0"></span>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-ez-base text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">Google Chrome</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ez-primary shrink-0"></span>
              <a href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-ez-base text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">Mozilla Firefox</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ez-primary shrink-0"></span>
              <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-ez-base text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">Safari</a>
            </li>
          </ul>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">Contact</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            Questions about cookies? Email <a href="mailto:privacy@kubee.in" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">privacy@kubee.in</a>.
          </p>

        </div>
      </section>

      {/* Footer Links */}
      <section className="py-10 px-6 lg:px-10 border-t border-ez-border bg-white">
        <div className="max-w-[800px] mx-auto text-ez-sm text-ez-secondary flex items-center flex-wrap gap-5">
          <span className="font-medium text-ez-heading">Related policies:</span>
          <Link href="/terms" className="hover:text-ez-heading transition-colors duration-ez outline-none">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-ez-heading transition-colors duration-ez outline-none">Privacy Policy</Link>
        </div>
      </section>
    </div>
  );
}