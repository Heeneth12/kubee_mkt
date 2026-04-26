/* ─────────────────────────────────────────────
   Mockup 1: Payment & Digital Finance (Static)
────────────────────────────────────────────── */
function PaymentMockup() {
  return (
    <div className="relative w-full h-100 flex items-center justify-center">

      {/* Main Invoice Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-77 bg-white border border-slate-200 rounded-lg p-5 shadow-sm z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Sales Invoice</p>
            <h3 className="font-extrabold text-[22px] text-slate-900 font-display tracking-tight mt-0.5">₹1,45,000</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">INV-9924 · Apple Electronics</p>
          </div>
          <span className="text-[9px] font-bold px-2.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
            Paid
          </span>
        </div>

        <div className="h-px bg-slate-100 my-3" />

        <div className="space-y-2">
          {[
            ["PO Reference", "PO-4412"],
            ["GRN Linked", "GRN-7801"],
            ["Items", "500 units × ₹290"],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between text-[11px]">
              <span className="text-slate-400">{label}</span>
              <span className="font-semibold text-slate-800">{val}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-slate-100 my-3" />

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-400">Settled via</span>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-[#635BFF] flex items-center justify-center text-white text-[9px] font-bold">
              S
            </div>
            <span className="font-semibold text-slate-800">Stripe · 2 mins ago</span>
          </div>
        </div>
      </div>

      {/* Wallet Card */}
      <div className="absolute bottom-3  right-1 w-70 bg-slate-900 border border-slate-800 rounded-2xl p-5 z-10">
        <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Avenue Wallet</p>
        <p className="text-[26px] font-extrabold text-slate-50 tracking-tight mb-4">₹8,32,450</p>
        <div className="flex gap-2">
          <button className="flex-1 py-2.5 rounded-lg bg-blue-600 text-white text-[11px] font-semibold">
            Add Funds
          </button>
          <button className="flex-1 py-2.5 rounded-lg bg-slate-800 text-slate-400 border border-slate-700 text-[11px] font-semibold">
            Withdraw
          </button>
        </div>
      </div>

      {/* Payment Method Pills */}
      <div className="absolute bottom-21 left-1/4 -translate-x-[68%] flex gap-2 z-20">
        {[
          { label: "R", bg: "bg-white border-slate-200 text-slate-800" },
          { label: "S", bg: "bg-[#635BFF] border-[#635BFF] text-white" },
          { label: "UPI", bg: "bg-[#F26522] border-[#F26522] text-white" },
        ].map(({ label, bg }) => (
          <div
            key={label}
            className={`w-10 h-10 rounded-xl border flex items-center justify-center text-[12px] font-bold ${bg}`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
  Mockup 2: AI Operations Agent (Static)
────────────────────────────────────────────── */
function AIAgentMockup() {
  return (
    <div className="relative w-full h-105 flex items-center justify-center">

      {/* Floating Automation Badge */}
      <div className="absolute top-[20%] -left-4 lg:-left-12 bg-white border border-slate-200 rounded-xl px-3 py-2.5 flex items-center gap-2.5 z-20 shadow-sm">
        <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 text-sm shrink-0">
          ⚡
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-800 leading-none">Workflow automated</p>
          <p className="text-[9px] text-slate-400 mt-0.5">Saved 18 minutes</p>
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-[370px] bg-white border border-slate-100 rounded-md overflow-hidden z-10 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-slate-100 bg-slate-50">
          <div className="relative w-9 h-9 rounded-full bg-linear-to-br from-blue-600 to-blue-900 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-50 rounded-full" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-slate-800">Kubee AI</p>
            <p className="text-[10px] text-slate-400">Online · ready to execute</p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-3.5 flex flex-col gap-3 min-h-[300px]">
          {/* User message */}
          <div className="self-end max-w-[88%] bg-white border border-slate-200 text-slate-800 text-[11.5px] leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-tr-sm">
            Generate a purchase order for 500 Apple units from our approved vendor. Use last negotiated rate.
          </div>

          {/* Typing indicator (Static) */}
          <div className="flex items-center gap-1 px-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-slate-400"
              />
            ))}
          </div>

          {/* AI message */}
          <div className="self-start max-w-[96%] bg-blue-900 text-blue-100 text-[11.5px] leading-relaxed p-3.5 rounded-2xl rounded-tl-sm">
            <p className="mb-3">
              Found vendor <strong className="text-white">Apple Electronics Pvt. Ltd.</strong> with active rate card (₹290/unit).
              Drafted <strong className="text-white">PO-4413</strong> and routed it to the Approval Console.
            </p>
            {/* Inline action card */}
            <div className="bg-white rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="9" y1="7" x2="15" y2="7" />
                    <line x1="9" y1="11" x2="15" y2="11" />
                    <line x1="9" y1="15" x2="12" y2="15" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-slate-800">Draft PO-4413</p>
                  <p className="text-[10px] text-slate-400">500 units · ₹1,45,000 total</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-semibold">
                  Review
                </button>
                <button className="flex-1 py-2 rounded-lg bg-blue-700 text-white text-[10px] font-semibold">
                  Send for Approval
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Ask a follow-up question..."
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-4 pr-10 text-[11.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute right-1.5 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <svg className="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stock Forecast Mini Card */}
      <div className="absolute bottom-6 right-0 lg:-right-12 w-40 bg-white border border-slate-200 rounded-lg p-3 z-20 shadow-sm">
        <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-2.5">Stock forecast</p>
        {[
          { label: "Laptops", val: 780, pct: 78, color: "bg-blue-600" },
          { label: "Phones", val: 340, pct: 34, color: "bg-amber-400" },
          { label: "Tablets", val: 120, pct: 12, color: "bg-red-500", warn: true },
        ].map(({ label, val, pct, color, warn }) => (
          <div key={label} className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[9px] text-slate-500 w-11 flex-shrink-0">{label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
            </div>
            <span className={`text-[9px] font-semibold w-7 text-right ${warn ? "text-red-500" : "text-slate-700"}`}>
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Shared: Check item
────────────────────────────────────────────── */
function CheckItem({ children, accent }: { children: React.ReactNode; accent: "green" | "amber" | "blue" }) {
  const colors = {
    green: { bg: "bg-emerald-100", stroke: "#065F46" },
    amber: { bg: "bg-amber-100", stroke: "#92400E" },
    blue: { bg: "bg-blue-100", stroke: "#00008B" },
  };
  const c = colors[accent];
  return (
    <li className="flex items-start gap-2.5 text-[13px] text-slate-500 leading-relaxed">
      <span className={`mt-0.5 w-4.5 h-4.5 rounded-full ${c.bg} flex items-center justify-center shrink-0`}>
        <svg viewBox="0 0 10 10" fill="none" stroke={c.stroke} strokeWidth="2" className="w-2.5 h-2.5">
          <polyline points="2,5 4,7.5 8,2.5" />
        </svg>
      </span>
      {children}
    </li>
  );
}

/* ─────────────────────────────────────────────
   Main Export
────────────────────────────────────────────── */
export default function FeatureSections() {
  return (
    <section className="bg-white overflow-hidden font-sans">

      {/* ── Section 2: AI Agent ── */}
      <div className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 bg-brand-light rounded-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Visual (left on desktop) */}
            <div className="order-2 lg:order-1">
              <AIAgentMockup />
            </div>

            {/* Text (right on desktop) */}
            <div className="max-w-xl order-1 lg:order-2">
              <p className="flex items-center gap-2 text-[14px] font-semibold text-brand-blue tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                AI Automation
              </p>
              <h2 className="text-[32px] sm:text-[38px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                Your operations team, powered by AI
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                Stop navigating menus. Tell Kubee AI to raise a PO, generate bulk invoices from GRNs, flag
                slow-moving stock, or forecast reorder points — it understands your supply chain context and acts immediately.
              </p>
              <ul className="space-y-3">
                <CheckItem accent="blue">
                  Drafts Purchase Orders, Invoices &amp; GRNs from plain English commands
                </CheckItem>
                <CheckItem accent="blue">
                  Proactive stockout alerts with AI-recommended reorder quantities
                </CheckItem>
                <CheckItem accent="blue">
                  Routes approvals automatically through your configured console
                </CheckItem>
                <CheckItem accent="blue">
                  Generates Excel reports, vendor analytics &amp; demand forecasts on demand
                </CheckItem>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Section 1: Digital Payments ── */}
      <div className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 bg-gray-100/50 p-12 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Text */}
            <div className="max-w-xl">
              <p className="flex items-center gap-2 text-[14px] font-semibold text-brand-blue tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                Digital Payments
              </p>
              <h2 className="text-[32px] sm:text-[38px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                Accept payments, manage cashflow — all in one place
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                EZ Inventory connects directly to Razorpay, Stripe, and UPI so your sales invoices and vendor
                payouts are settled automatically. The built-in wallet keeps your working capital visible and moving.
              </p>
              <ul className="space-y-3">
                <CheckItem accent="green">Auto-reconciliation of invoices against payments received</CheckItem>
                <CheckItem accent="green">Instant vendor payouts triggered on GRN confirmation</CheckItem>
                <CheckItem accent="green">Native wallet for advances, credits &amp; petty cash tracking</CheckItem>
                <CheckItem accent="green">Full payment history synced to your Sales &amp; Purchase ledgers</CheckItem>
              </ul>
            </div>

            {/* Visual */}
            <PaymentMockup />

          </div>
        </div>
      </div>

    </section>
  );
} 