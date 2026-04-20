const stats = [
  { value: "5,000+", label: "Businesses onboarded" },
  { value: "₹120Cr+", label: "Inventory managed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.8★", label: "Avg. user rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {stats.map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <div className="text-3xl font-extrabold text-brand-blue mb-1">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
