import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Kubee inventory management software.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-white/70">Last updated: 20 April 2026</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-sm sm:prose-base">
          <h2>1. Definitions</h2>
          <p>"Service" means the Kubee inventory management platform accessible at kubee.in. "User" means any individual or entity that creates an account. "Content" means data, text, files, and other materials uploaded to the Service.</p>

          <h2>2. Use of Service</h2>
          <p>You may use the Service only for lawful business purposes in accordance with these Terms. You agree not to: (a) use the Service to store, transmit, or distribute unlawful content; (b) attempt to gain unauthorized access to any part of the Service; (c) use automated tools to scrape or extract data from the Service without our written consent.</p>

          <h2>3. Account Responsibility</h2>
          <p>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify us immediately at hello@kubee.in if you suspect unauthorized use of your account.</p>

          <h2>4. Payments and Billing</h2>
          <p>Paid plans are billed monthly or annually in advance in Indian Rupees (INR). All prices are exclusive of GST unless stated otherwise. You will receive a GST-compliant invoice for every payment. Refunds are not provided for partial months. You may cancel at any time; your plan continues until the end of the billing period.</p>

          <h2>5. Intellectual Property</h2>
          <p>Kubee and its licensors retain all rights to the Service, including all software, designs, trademarks, and proprietary content. You retain ownership of all Content you upload. By uploading Content, you grant Kubee a limited license to store, process, and display it solely for the purpose of providing the Service.</p>

          <h2>6. Termination</h2>
          <p>We may suspend or terminate your account if you violate these Terms. You may terminate your account at any time from your account settings. Upon termination, your data will be retained for 30 days before permanent deletion unless you request earlier deletion.</p>

          <h2>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, Kubee shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.</p>

          <h2>9. Contact</h2>
          <p>For any questions regarding these Terms, contact us at <a href="mailto:legal@kubee.in">legal@kubee.in</a>.</p>
        </div>
      </section>
    </>
  );
}
