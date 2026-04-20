import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-8 right-24 w-14 h-14 bg-brand-yellow rounded-xl rotate-12 opacity-90 hidden sm:block" />
      <div className="absolute bottom-24 left-6 w-10 h-10 bg-blue-300 rounded-lg -rotate-8 opacity-50 hidden sm:block" />
      <div className="absolute top-1/3 right-8 w-6 h-6 bg-blue-200 rounded opacity-30 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 relative z-10">
        {/* Tag */}
        <div className="flex justify-center mb-5">
          <span className="inline-block bg-white/15 text-white text-xs px-4 py-1.5 rounded-full tracking-wide">
            ✦ Modern Inventory Software for Indian Businesses
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight max-w-3xl mx-auto mb-5">
          Manage Inventory.{" "}
          <span className="text-brand-yellow">Grow Faster.</span>
        </h1>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-xl mx-auto mb-8 leading-relaxed">
          Real-time tracking, AI-powered forecasting, and automated reordering.
          Built to scale your operations effortlessly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Link
            href="#"
            className="bg-brand-yellow text-brand-blue-dark font-bold px-7 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity text-center"
          >
            Start for Free →
          </Link>
          <Link
            href="#"
            className="bg-white/15 text-white border border-white/30 px-7 py-3 rounded-xl text-sm hover:bg-white/20 transition-colors text-center"
          >
            ▶ Watch Demo
          </Link>
        </div>

        {/* Floating dashboard mockup */}
        <div className="bg-white rounded-t-2xl shadow-2xl mx-auto max-w-3xl overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-3 border-b border-slate-100">
            <span className="text-xs font-semibold text-brand-blue border-b-2 border-brand-blue pb-1">Dashboard</span>
            <span className="text-xs text-slate-400">Inventory</span>
            <span className="text-xs text-slate-400">Orders</span>
            <span className="text-xs text-slate-400">Reports</span>
          </div>
          {/* Black placeholder — replace with real screenshot */}
          <div className="bg-black w-full aspect-[16/7]" aria-label="Kubee dashboard screenshot" />
        </div>
      </div>
    </section>
  );
}
