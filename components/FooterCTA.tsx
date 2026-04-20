"use client";

export default function FooterCTA() {
  return (
    <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to take control of your inventory?
        </h2>
        <p className="text-base text-white/80 mb-8">
          Join 5,000+ Indian businesses already using Kubee. Free forever, no credit card needed.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your work email"
            required
            className="flex-1 px-4 py-3 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-yellow"
          />
          <button
            type="submit"
            className="bg-brand-yellow text-brand-blue-dark font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Started →
          </button>
        </form>
      </div>
    </section>
  );
}
