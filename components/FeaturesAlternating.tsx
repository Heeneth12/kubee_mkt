import React from "react";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-ez-base text-ez-body leading-relaxed">
      <span className="mt-0.5 w-4 h-4 bg-ez-primary-tint flex items-center justify-center shrink-0 rounded-sm">
        <svg viewBox="0 0 10 10" fill="none" stroke="var(--ez-color-primary, #3E6AE1)" strokeWidth="2" className="w-2.5 h-2.5">
          <polyline points="2,5 4,7.5 8,2.5" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function LearnMoreLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 mt-8 font-medium text-ez-primary hover:opacity-80 transition-opacity group underline underline-offset-4"
    >
      Learn more
      <svg
        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[4/3] bg-white rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
      <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-sm font-medium">{label} Mock Image Space</span>
    </div>
  );
}

export default function FeatureSections() {
  return (
    <section className="bg-white overflow-hidden py-16 lg:py-24">

      {/* Section Header */}
      <div className="max-w-345 mx-auto px-6 lg:px-10 mb-16 flex flex-col items-center text-center">
        <h2 className="text-[40px] text-ez-primary md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
          The all-in-one platform
          <span className='text-ez-heading'> you’ve been looking for</span>
        </h2>

        <p className="text-center text-md text-ez-secondary leading-relaxed max-w-3xl">
          Stop paying for features you never touch. With our modular architecture,
          you can hand-pick the exact tools your business needs and only pay for
          what you actually use. No bloat, no hidden costs—just the tools you
          need to scale.
        </p>
      </div>

      <div className="space-y-8 lg:space-y-12">
        {/* AI Automation (Image Left, Text Right) */}
        <div>
          <div className="max-w-345 mx-auto px-6 lg:px-10">
            <div className="bg-ez-ash p-8 lg:p-12 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <ImagePlaceholder label="AI Automation" />
                </div>
                <div className="max-w-xl order-1 lg:order-2">
                  <p className="ez-micro-label flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider text-ez-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--ez-color-primary,#3E6AE1)] animate-pulse" />
                    AI Automation
                  </p>
                  <h2 className="font-medium text-ez-heading leading-tight mb-4 text-slate-900" style={{ fontSize: "32px", lineHeight: "1.15" }}>
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
                  <LearnMoreLink href="#ai-automation" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Payments (Text Left, Image Right) */}
        <div>
          <div className="max-w-345 mx-auto px-6 lg:px-10">
            <div className="bg-ez-ash p-8 lg:p-12 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div className="max-w-xl order-1">
                  <p className="ez-micro-label flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider text-ez-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--ez-color-primary,#3E6AE1)]" />
                    Digital Payments
                  </p>
                  <h2 className="font-medium text-ez-heading leading-tight mb-4 text-slate-900" style={{ fontSize: "32px", lineHeight: "1.15" }}>
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
                  <LearnMoreLink href="#payments" />
                </div>
                <div className="order-2">
                  <ImagePlaceholder label="Digital Payments" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Management (Image Left, Text Right) */}
        <div>
          <div className="max-w-345 mx-auto px-6 lg:px-10">
            <div className="bg-ez-ash p-8 lg:p-12 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <ImagePlaceholder label="Stock Management" />
                </div>
                <div className="max-w-xl order-1 lg:order-2">
                  <p className="ez-micro-label flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider text-ez-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--ez-color-primary,#3E6AE1)] animate-pulse" />
                    Stock Management
                  </p>
                  <h2 className="font-medium text-ez-heading leading-tight mb-4 text-slate-900" style={{ fontSize: "32px", lineHeight: "1.15" }}>
                    Real-time inventory intelligence, zero guesswork
                  </h2>
                  <p className="text-ez-md text-ez-secondary leading-relaxed mb-8">
                    From raw materials to finished goods, Kubee tracks every item across warehouses, flags slow-moving SKUs, and syncs stock levels to your purchase and sales workflows in real time.
                  </p>
                  <ul className="space-y-3">
                    <CheckItem>Live stock levels across all warehouse locations</CheckItem>
                    <CheckItem>SKU-level movement tracking with ageing reports</CheckItem>
                    <CheckItem>Auto-reorder triggers based on demand forecasts</CheckItem>
                    <CheckItem>Batch, serial &amp; expiry tracking built in</CheckItem>
                  </ul>
                  <LearnMoreLink href="#stock-management" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}