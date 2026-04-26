import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Kubee inventory management software.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-ez-ash border-b border-ez-border py-8 text-center px-6 lg:px-10">
        <h1 className="text-[40px] font-medium text-ez-heading leading-tight mb-3">Privacy Policy</h1>
        <p className="text-ez-base text-ez-secondary">Last updated: 20 April 2026</p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto">

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">1. Data We Collect</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            We collect: (a) <strong className="font-medium text-ez-heading">Account data</strong> — name, email, company name, GSTIN; (b) <strong className="font-medium text-ez-heading">Usage data</strong> — pages visited, features used, session duration; (c) <strong className="font-medium text-ez-heading">Business data</strong> — inventory records, purchase orders, and other content you upload; (d) <strong className="font-medium text-ez-heading">Payment data</strong> — processed by Razorpay; we do not store card details.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">2. How We Use Your Data</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            We use your data to: provide and improve the Service; send product updates and billing notifications; comply with legal obligations under the Indian IT Act 2000, GST regulations, and where applicable the EU General Data Protection Regulation (GDPR); analyse usage patterns in aggregate to improve the product.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">3. Third-Party Services</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            We use: <strong className="font-medium text-ez-heading">Razorpay</strong> for payment processing; <strong className="font-medium text-ez-heading">AWS Mumbai</strong> for cloud hosting; <strong className="font-medium text-ez-heading">Google Analytics</strong> for anonymous usage analytics. Each third party has its own privacy policy. We do not sell your data to any third party.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">4. Cookies</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            We use essential cookies for authentication and session management, and optional analytics cookies. See our <Link href="/cookie-policy" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">Cookie Policy</Link> for details.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">5. Data Retention</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            We retain your data for as long as your account is active. After account deletion, data is retained for 30 days for recovery purposes, then permanently deleted.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">6. Your Rights</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            You have the right to: access your personal data; correct inaccurate data; request deletion of your account and data; export your data in machine-readable format. Contact <a href="mailto:privacy@kubee.in" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">privacy@kubee.in</a> to exercise these rights.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">7. Security</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Our servers are hosted in AWS Mumbai (ap-south-1), keeping your data within India.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">8. Contact</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            Data Protection Officer: <a href="mailto:privacy@kubee.in" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">privacy@kubee.in</a>
          </p>

        </div>
      </section>

      {/* Footer Links */}
      <section className="py-10 px-6 lg:px-10 border-t border-ez-border bg-white">
        <div className="max-w-[800px] mx-auto text-ez-sm text-ez-secondary flex items-center flex-wrap gap-5">
          <span className="font-medium text-ez-heading">Related policies:</span>
          <Link href="/terms" className="hover:text-ez-heading transition-colors duration-ez outline-none">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:text-ez-heading transition-colors duration-ez outline-none">Cookie Policy</Link>
        </div>
      </section>
    </div>
  );
}