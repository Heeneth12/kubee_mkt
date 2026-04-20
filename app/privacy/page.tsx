import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Kubee inventory management software.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-white/70">Last updated: 20 April 2026</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm sm:prose-base">
          <h2>1. Data We Collect</h2>
          <p>We collect: (a) <strong>Account data</strong> — name, email, company name, GSTIN; (b) <strong>Usage data</strong> — pages visited, features used, session duration; (c) <strong>Business data</strong> — inventory records, purchase orders, and other content you upload; (d) <strong>Payment data</strong> — processed by Razorpay; we do not store card details.</p>

          <h2>2. How We Use Your Data</h2>
          <p>We use your data to: provide and improve the Service; send product updates and billing notifications; comply with legal obligations under the Indian IT Act 2000, GST regulations, and where applicable the EU General Data Protection Regulation (GDPR); analyse usage patterns in aggregate to improve the product.</p>

          <h2>3. Third-Party Services</h2>
          <p>We use: <strong>Razorpay</strong> for payment processing; <strong>AWS Mumbai</strong> for cloud hosting; <strong>Google Analytics</strong> for anonymous usage analytics. Each third party has its own privacy policy. We do not sell your data to any third party.</p>

          <h2>4. Cookies</h2>
          <p>We use essential cookies for authentication and session management, and optional analytics cookies. See our <a href="/cookie-policy">Cookie Policy</a> for details.</p>

          <h2>5. Data Retention</h2>
          <p>We retain your data for as long as your account is active. After account deletion, data is retained for 30 days for recovery purposes, then permanently deleted.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to: access your personal data; correct inaccurate data; request deletion of your account and data; export your data in machine-readable format. Contact <a href="mailto:privacy@kubee.in">privacy@kubee.in</a> to exercise these rights.</p>

          <h2>7. Security</h2>
          <p>All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Our servers are hosted in AWS Mumbai (ap-south-1), keeping your data within India.</p>

          <h2>8. Contact</h2>
          <p>Data Protection Officer: <a href="mailto:privacy@kubee.in">privacy@kubee.in</a></p>
        </div>
      </section>

      <section className="py-8 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-sm text-slate-500 flex flex-wrap gap-4">
          <span className="font-medium text-slate-700">Related policies:</span>
          <Link href="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:text-brand-blue transition-colors">Cookie Policy</Link>
        </div>
      </section>
    </>
  );
}
