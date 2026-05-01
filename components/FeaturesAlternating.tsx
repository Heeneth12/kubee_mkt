import React from "react";

function PaymentMockup() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">

      {/* Invoice Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 bg-white border border-ez-border p-5 z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="ez-micro-label mb-1">Sales Invoice</p>
            <h3 className="font-medium text-ez-heading" style={{ fontSize: "22px" }}>₹1,45,000</h3>
            <p className="text-ez-xs text-ez-muted mt-0.5">INV-9924 · Apple Electronics</p>
          </div>
          <span className="text-ez-2xs font-medium px-2.5 py-1.5 bg-ez-primary-tint text-ez-primary uppercase" style={{ letterSpacing: "0.08em" }}>
            Paid
          </span>
        </div>

        <hr className="ez-divider my-3" />

        <div className="space-y-2">
          {[
            ["PO Reference", "PO-4412"],
            ["GRN Linked", "GRN-7801"],
            ["Items", "500 units × ₹290"],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between">
              <span className="text-ez-xs text-ez-secondary">{label}</span>
              <span className="text-ez-xs font-medium text-ez-heading">{val}</span>
            </div>
          ))}
        </div>

        <hr className="ez-divider my-3" />

        <div className="flex justify-between items-center">
          <span className="text-ez-xs text-ez-secondary">Settled via</span>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-ez-primary flex items-center justify-center text-white text-ez-2xs font-medium">
              S
            </div>
            <span className="text-ez-xs font-medium text-ez-heading">Stripe · 2 mins ago</span>
          </div>
        </div>
      </div>

      {/* Wallet Card */}
      <div className="absolute bottom-3 right-1 w-64 bg-ez-carbon border border-ez-carbon p-5 z-10">
        <p className="ez-micro-label text-white/40 mb-1">Avenue Wallet</p>
        <p className="font-medium text-white mb-4" style={{ fontSize: "22px" }}>₹8,32,450</p>
        <div className="flex gap-2">
          <button className="ez-btn ez-btn-primary flex-1 text-ez-xs py-2">Add Funds</button>
          <button className="flex-1 py-2 text-ez-xs font-medium border border-white/20 text-white/60 transition-[border-color,color] duration-ez hover:border-white/40 hover:text-white/80">
            Withdraw
          </button>
        </div>
      </div>

      {/* Payment method pills */}
      <div className="absolute bottom-24 left-1/4 -translate-x-[68%] flex gap-2 z-20">
        {[
          { label: "R", bg: "bg-white border-ez-border text-ez-heading" },
          { label: "S", bg: "bg-ez-primary text-white border-ez-primary" },
          { label: "UPI", bg: "bg-ez-ash border-ez-border text-ez-heading" },
        ].map(({ label, bg }) => (
          <div
            key={label}
            className={`w-10 h-10 border flex items-center justify-center text-ez-sm font-medium ${bg}`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function AIAgentMockup() {
  return (
    <div className="relative w-full h-[420px] flex items-center justify-center">

      {/* Automation badge */}
      <div className="absolute top-[18%] -left-4 lg:-left-10 bg-white border border-ez-border px-3 py-2.5 flex items-center gap-2.5 z-20">
        <div className="w-7 h-7 bg-ez-ash flex items-center justify-center text-ez-secondary text-sm shrink-0">
          ⚡
        </div>
        <div>
          <p className="text-ez-xs font-medium text-ez-heading leading-none">Workflow automated</p>
          <p className="text-ez-2xs text-ez-muted mt-0.5">Saved 18 minutes</p>
        </div>
      </div>

      {/* Chat window */}
      <div className="w-[360px] bg-white border border-ez-border overflow-hidden z-10">

        {/* Header */}
        <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-ez-border bg-ez-ash">
          <div className="relative w-9 h-9 bg-ez-primary flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-ez-ash rounded-full" />
          </div>
          <div>
            <p className="text-ez-base font-medium text-ez-heading">Kubee AI</p>
            <p className="text-ez-2xs text-ez-muted">Online · ready to execute</p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-3.5 flex flex-col gap-3 min-h-[280px]">
          {/* User message */}
          <div className="self-end max-w-[88%] bg-white border border-ez-border text-ez-heading text-ez-xs leading-relaxed px-3.5 py-2.5">
            Generate a purchase order for 500 Apple units from our approved vendor. Use last negotiated rate.
          </div>

          {/* Typing indicator */}
          <div className="flex items-center gap-1 px-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-ez-border-subtle" />
            ))}
          </div>

          {/* AI message */}
          <div className="self-start max-w-[96%] bg-ez-carbon text-white/80 text-ez-xs leading-relaxed p-3.5">
            <p className="mb-3">
              Found vendor <strong className="text-white">Apple Electronics Pvt. Ltd.</strong> with active rate card (₹290/unit).
              Drafted <strong className="text-white">PO-4413</strong> and routed it to the Approval Console.
            </p>
            <div className="bg-white p-3">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 bg-ez-ash flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-ez-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="0" />
                    <line x1="9" y1="7" x2="15" y2="7" />
                    <line x1="9" y1="11" x2="15" y2="11" />
                    <line x1="9" y1="15" x2="12" y2="15" />
                  </svg>
                </div>
                <div>
                  <p className="text-ez-sm font-medium text-ez-heading">Draft PO-4413</p>
                  <p className="text-ez-2xs text-ez-muted">500 units · ₹1,45,000 total</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-ez-ash text-ez-primary text-ez-2xs font-medium transition-[background-color] duration-ez hover:bg-ez-primary-tint">
                  Review
                </button>
                <button className="flex-1 py-2 bg-ez-primary text-white text-ez-2xs font-medium transition-[background-color] duration-ez hover:bg-ez-primary-hover">
                  Send for Approval
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-ez-border">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Ask a follow-up question..."
              className="w-full bg-ez-ash border border-ez-border py-2.5 pl-4 pr-10 text-ez-xs text-ez-heading placeholder:text-ez-muted focus:outline-none focus:border-ez-primary transition-[border-color] duration-ez"
              readOnly
            />
            <button className="absolute right-1.5 w-7 h-7 bg-ez-primary flex items-center justify-center text-white transition-[background-color] duration-ez hover:bg-ez-primary-hover">
              <svg className="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stock forecast card */}
      <div className="absolute bottom-6 right-0 lg:-right-10 w-40 bg-white border border-ez-border p-3 z-20">
        <p className="ez-micro-label mb-2.5">Stock forecast</p>
        {[
          { label: "Laptops", val: 780, pct: 78, color: "bg-ez-primary" },
          { label: "Phones", val: 340, pct: 34, color: "bg-ez-border-subtle" },
          { label: "Tablets", val: 120, pct: 12, color: "bg-ez-carbon", warn: true },
        ].map(({ label, val, pct, color, warn }) => (
          <div key={label} className="flex items-center gap-1.5 mb-1.5">
            <span className="text-ez-2xs text-ez-secondary w-11 shrink-0">{label}</span>
            <div className="flex-1 h-1.5 bg-ez-border overflow-hidden">
              <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
            </div>
            <span className={`text-ez-2xs font-medium w-7 text-right ${warn ? "text-ez-primary" : "text-ez-heading"}`}>
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-ez-base text-ez-body leading-relaxed">
      <span className="mt-0.5 w-4 h-4 bg-ez-primary-tint flex items-center justify-center shrink-0">
        <svg viewBox="0 0 10 10" fill="none" stroke="var(--ez-color-primary)" strokeWidth="2" className="w-2.5 h-2.5">
          <polyline points="2,5 4,7.5 8,2.5" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export default function FeatureSections() {
  return (
    <section className="bg-white overflow-hidden">

      {/* AI Automation */}
      <div className="py-8 lg:py-12">
        <div className="max-w-345 mx-auto px-6 lg:px-10">
          <div className="bg-ez-ash p-8 lg:p-12 rounded">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              <div className="order-2 lg:order-1">
                <AIAgentMockup />
              </div>

              <div className="max-w-xl order-1 lg:order-2">
                <p className="ez-micro-label flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-ez-primary" />
                  AI Automation
                </p>
                <h2 className="font-medium text-ez-heading leading-tight mb-4" style={{ fontSize: "32px", lineHeight: "1.15" }}>
                  Your operations team, powered by AI
                </h2>
                <p className="text-ez-md text-ez-secondary leading-relaxed mb-8">
                  Stop navigating menus. Tell Kubee AI to raise a PO, generate bulk invoices from GRNs, flag
                  slow-moving stock, or forecast reorder points — it understands your supply chain context and acts immediately.
                </p>
                <ul className="space-y-3">
                  <CheckItem>Drafts Purchase Orders, Invoices &amp; GRNs from plain English commands</CheckItem>
                  <CheckItem>Proactive stockout alerts with AI-recommended reorder quantities</CheckItem>
                  <CheckItem>Routes approvals automatically through your configured console</CheckItem>
                  <CheckItem>Generates Excel reports, vendor analytics &amp; demand forecasts on demand</CheckItem>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Digital Payments */}
      <div className="py-8 lg:py-12 bg-white">
        <div className="max-w-345 mx-auto px-6 lg:px-10">
          <div className="bg-ez-ash p-8 lg:p-12 rounded">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              <div className="max-w-xl">
                <p className="ez-micro-label flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-ez-primary" />
                  Digital Payments
                </p>
                <h2 className="font-medium text-ez-heading leading-tight mb-4" style={{ fontSize: "32px", lineHeight: "1.15" }}>
                  Accept payments, manage cashflow — all in one place
                </h2>
                <p className="text-ez-md text-ez-secondary leading-relaxed mb-8">
                  Kubee connects directly to Razorpay, Stripe, and UPI so your sales invoices and vendor
                  payouts are settled automatically. The built-in wallet keeps your working capital visible and moving.
                </p>
                <ul className="space-y-3">
                  <CheckItem>Auto-reconciliation of invoices against payments received</CheckItem>
                  <CheckItem>Instant vendor payouts triggered on GRN confirmation</CheckItem>
                  <CheckItem>Native wallet for advances, credits &amp; petty cash tracking</CheckItem>
                  <CheckItem>Full payment history synced to your Sales &amp; Purchase ledgers</CheckItem>
                </ul>
              </div>

              <PaymentMockup />

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
