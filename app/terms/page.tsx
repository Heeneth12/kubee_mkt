import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Kubee inventory management software.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-ez-ash border-b border-ez-border py-12 text-center px-6 lg:px-10">
        <h1 className="text-[40px] font-medium text-ez-heading leading-tight mb-3">Terms of Service</h1>
        <p className="text-ez-base text-ez-secondary">Last updated: 20 April 2026</p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto">

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">1. Acceptance of Terms</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            By accessing or using the Kubee Service, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you must not use the Service. Continued use of the Service after any modification to these Terms constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">2. Description of Service</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            Kubee is a cloud-based inventory management platform designed for Indian businesses. The Service includes real-time stock tracking, purchase and sales order management, AI-powered demand forecasting, automated reordering, GST-compliant invoicing, and multi-location warehouse management — accessible via kubee.in and associated mobile or desktop applications.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">3. Account Registration</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            To use the Service, you must register for an account by providing accurate and complete information. You must be at least 18 years of age and authorised to enter into binding agreements on behalf of your business. One person or legal entity may not maintain more than one free account.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">4. Account Responsibility</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify us immediately at <a href="mailto:hello@kubee.in" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">hello@kubee.in</a> if you suspect unauthorized use of your account.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">5. Payments and Billing</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            Paid plans are billed monthly or annually in advance in Indian Rupees (INR). All prices are exclusive of GST unless stated otherwise. You will receive a GST-compliant invoice for every payment. Refunds are not provided for partial months. You may cancel at any time; your plan continues until the end of the billing period.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">6. Intellectual Property</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            Kubee and its licensors retain all rights to the Service, including all software, designs, trademarks, and proprietary content. You retain ownership of all Content you upload. By uploading Content, you grant Kubee a limited license to store, process, and display it solely for the purpose of providing the Service.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">7. Confidentiality</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            Each party agrees to keep the other party's non-public information confidential and not to disclose it to third parties without prior written consent. Kubee will not access or use your business data except as necessary to provide the Service or as required by law. This obligation survives termination of your account.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">8. Termination</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            We may suspend or terminate your account if you violate these Terms. You may terminate your account at any time from your account settings. Upon termination, your data will be retained for 30 days before permanent deletion unless you request earlier deletion.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">9. Limitation of Liability</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            To the maximum extent permitted by applicable law, Kubee shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">10. Governing Law</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">11. Changes to Terms</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            We may update these Terms from time to time. We will notify you of material changes by email or via an in-app notification at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you disagree with the changes, you may terminate your account before the effective date.
          </p>

          <h2 className="text-ez-xl font-medium text-ez-heading mb-4">12. Contact</h2>
          <p className="text-ez-base text-ez-body leading-normal mb-10">
            For any questions regarding these Terms, contact us at <a href="mailto:legal@kubee.in" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">legal@kubee.in</a>.
          </p>

        </div>
      </section>

      {/* Footer Links */}
      <section className="py-10 px-6 lg:px-10 border-t border-ez-border bg-white">
        <div className="max-w-[800px] mx-auto text-ez-sm text-ez-secondary flex items-center flex-wrap gap-5">
          <span className="font-medium text-ez-heading">Related policies:</span>
          <Link href="/privacy" className="hover:text-ez-heading transition-colors duration-ez outline-none">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-ez-heading transition-colors duration-ez outline-none">Cookie Policy</Link>
        </div>
      </section>
    </div>
  );
}