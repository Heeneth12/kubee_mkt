const features = [
  {
    icon: "📦",
    title: "Real-time Stock Tracking",
    description:
      "See live inventory levels across all locations. Never face stockouts or overstocking again.",
  },
  {
    icon: "🤖",
    title: "AI-powered Forecasting",
    description:
      "Smart demand predictions based on sales history, seasonality, and market trends.",
  },
  {
    icon: "🔄",
    title: "Auto Reordering",
    description:
      "Set reorder points and let Kubee automatically generate purchase orders when stock is low.",
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    description:
      "Excel-based reports, dashboards, and vendor analytics. All exportable in one click.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-brand-light py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold text-brand-blue uppercase tracking-widest text-center mb-3">
          What Kubee Does
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-4">
          Everything your business needs
        </h2>
        <p className="text-sm text-slate-500 text-center mb-12">
          From stock tracking to purchase orders — all in one place
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
