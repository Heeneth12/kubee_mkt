import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Kubee team. We're here to help Indian businesses manage inventory better.",
};

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "hello@kubee.in",
    href: "mailto:hello@kubee.in",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  {
    icon: "📍",
    label: "Office",
    value: "Hyderabad, Telangana, India",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Get in Touch</h1>
        <p className="text-base text-white/80 max-w-md mx-auto">
          Have questions? Our team typically responds within 24 hours.
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Contact Details</h2>
            <div className="space-y-5">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm font-semibold text-brand-blue hover:underline">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-700">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-brand-blue-dark rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Looking for a demo?</h3>
              <p className="text-sm text-white/80 mb-4">
                Book a 30-minute walkthrough with our team and see Kubee in action for your business.
              </p>
              <a
                href="mailto:hello@kubee.in"
                className="inline-block bg-brand-yellow text-brand-blue-dark font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
