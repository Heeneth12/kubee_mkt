const sections = [
  {
    tag: "Inventory",
    title: "Real-time Stock. Zero Surprises.",
    description:
      "Track every item across warehouses, branches, and locations with a live stock ledger and instant alerts.",
    steps: [
      "Connect your locations and add your product catalog",
      "Track every inward and outward movement automatically",
      "Get alerts before stock runs out — never lose a sale",
    ],
    reverse: false,
  },
  {
    tag: "Purchases & Sales",
    title: "End-to-End Order Management",
    description:
      "Handle PRQs, POs, GRNs, Sales Orders, Invoices, and Delivery Challans — all with approval workflows.",
    steps: [
      "Raise purchase requests and get auto-approvals",
      "Generate POs, GRNs, and manage vendor payments",
      "Track sales from quote to invoice to delivery",
    ],
    reverse: true,
  },
];

export default function FeaturesAlternating() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {sections.map((s) => (
          <div
            key={s.title}
            className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
          >
            {/* Visual placeholder */}
            <div className="flex-1 w-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex items-center justify-center min-h-[220px]">
                <div className="bg-white rounded-xl p-5 shadow-md w-full max-w-xs">
                  <div className="text-xs font-bold text-slate-800 mb-3">{s.tag}</div>
                  {/* Black placeholder for screenshot */}
                  <div className="bg-black rounded-lg w-full aspect-video" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
                {s.tag}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{s.description}</p>
              <ol className="space-y-3">
                {s.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-brand-blue-dark text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-600 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
