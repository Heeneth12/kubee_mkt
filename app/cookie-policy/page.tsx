import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Kubee inventory management software.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-brand-blue py-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Cookie Policy</h1>
        <p className="text-sm text-white/80">Last updated: 20 April 2026</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm sm:prose-base">
          <h2>What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help us remember your preferences and understand how you use our service.</p>

          <h2>Cookies We Use</h2>

          <h3>Essential Cookies (always active)</h3>
          <p>These cookies are necessary for the Service to function and cannot be disabled.</p>
          <ul>
            <li><strong>session_id</strong> — keeps you logged in during your session. Expires when you close your browser.</li>
            <li><strong>csrf_token</strong> — prevents cross-site request forgery attacks. Session-scoped.</li>
          </ul>

          <h3>Analytics Cookies (optional)</h3>
          <p>These help us understand how visitors use our marketing site. All data is anonymised.</p>
          <ul>
            <li><strong>_ga, _gid</strong> — Google Analytics. Track page views and session duration anonymously. Expires in 2 years / 24 hours respectively.</li>
          </ul>

          <h3>Preference Cookies (optional)</h3>
          <ul>
            <li><strong>kubee_billing</strong> — remembers whether you last selected Monthly or Annual pricing. Expires in 30 days.</li>
          </ul>

          <h2>How to Opt Out</h2>
          <p>You can disable non-essential cookies in your browser settings. Instructions for major browsers:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          </ul>

          <h2>Contact</h2>
          <p>Questions about cookies? Email <a href="mailto:privacy@kubee.in">privacy@kubee.in</a>.</p>
        </div>
      </section>

      <section className="py-8 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-sm text-slate-500 flex flex-wrap gap-4">
          <span className="font-medium text-slate-700">Related policies:</span>
          <Link href="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link>
        </div>
      </section>
    </>
  );
}
