import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kubee — modern inventory management built for Indian businesses.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed",
    description: "Operations shouldn't wait. Kubee is built to be fast — loading, searching, and processing in real time.",
  },
  {
    icon: "🔒",
    title: "Reliability",
    description: "99.9% uptime SLA. Your data is always available when you need it, stored in Indian data centers.",
  },
  {
    icon: "🎯",
    title: "Simplicity",
    description: "Powerful enough for enterprises, simple enough for a kirana store owner to use on day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Built for Indian Businesses
        </h1>
        <p className="text-base text-white/80 max-w-xl mx-auto">
          We started Kubee because we saw Indian businesses struggling with outdated spreadsheets and expensive software that wasn't built for the way India works.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">Our Mission</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            Give every Indian business the inventory tools that were once only available to large enterprises
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            India's 63 million MSMEs are the backbone of the economy. Yet most of them manage stock in Excel or paper registers. Kubee changes that — with real-time tracking, AI forecasting, and end-to-end order management that works for both a 2-person shop and a 200-person distributor.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-light py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">The Team</h2>
          <p className="text-sm text-slate-500 mb-8">A team of engineers, operators, and entrepreneurs from across India.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-black rounded-2xl w-full aspect-square mb-3" />
                <div className="h-3 bg-slate-200 rounded w-3/4 mx-auto mb-1.5" />
                <div className="h-2.5 bg-slate-100 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-dark py-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to join us?</h2>
        <p className="text-sm text-white/80 mb-8">Start with the free plan today. No credit card needed.</p>
        <Link
          href="/pricing"
          className="inline-block bg-brand-yellow text-brand-blue-dark font-bold px-8 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
        >
          See Pricing →
        </Link>
      </section>
    </>
  );
}
