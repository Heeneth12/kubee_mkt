"use client";

import Link from "next/link";

const features = [
    {
        id: "inventory",
        eyebrow: "Inventory Management",
        title: "Real-time stock synchronization",
        description: "Never oversell or run out of stock again. Kubee automatically tracks your inventory across all connected sales channels, updating quantities the second an order is placed.",
        bullets: [
            "Multi-warehouse tracking",
            "Low stock threshold alerts",
            "Automated purchase order generation"
        ],
        // Wireframe representation of the UI feature
        illustration: (
            <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
                {/* Sidebar */}
                <rect x="20" y="20" width="60" height="260" fill="var(--ez-color-carbon)" opacity="0.05" />
                <rect x="30" y="40" width="40" height="6" fill="var(--ez-color-carbon)" opacity="0.2" />
                <rect x="30" y="60" width="30" height="4" fill="var(--ez-color-carbon)" opacity="0.1" />
                <rect x="30" y="72" width="35" height="4" fill="var(--ez-color-carbon)" opacity="0.1" />

                {/* Main Content */}
                <rect x="100" y="20" width="280" height="40" fill="var(--ez-color-white)" stroke="var(--ez-color-border)" />
                <rect x="120" y="36" width="80" height="8" fill="var(--ez-color-heading)" opacity="0.8" />

                {/* Table */}
                <rect x="100" y="80" width="280" height="200" fill="var(--ez-color-white)" stroke="var(--ez-color-border)" />
                <line x1="100" y1="110" x2="380" y2="110" stroke="var(--ez-color-border)" />
                <line x1="100" y1="150" x2="380" y2="150" stroke="var(--ez-color-border)" />
                <line x1="100" y1="190" x2="380" y2="190" stroke="var(--ez-color-border)" />

                {/* Data lines */}
                <rect x="120" y="126" width="60" height="6" fill="var(--ez-color-heading)" opacity="0.6" />
                <rect x="320" y="126" width="30" height="6" fill="var(--ez-color-primary)" opacity="0.8" />

                <rect x="120" y="166" width="90" height="6" fill="var(--ez-color-heading)" opacity="0.6" />
                <rect x="320" y="166" width="20" height="6" fill="var(--ez-color-primary)" opacity="0.8" />
            </svg>
        )
    },
    {
        id: "ai",
        eyebrow: "Artificial Intelligence",
        title: "Ask AI to optimize your business",
        description: "Stop digging through spreadsheets. Our built-in AI assistant analyzes your sales velocity, identifies dead stock, and predicts exactly when you need to reorder to maximize cash flow.",
        bullets: [
            "Natural language data querying",
            "Sales velocity predictions",
            "Automated markdown suggestions"
        ],
        illustration: (
            <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
                {/* Main Interface */}
                <rect x="40" y="40" width="320" height="220" fill="var(--ez-color-white)" stroke="var(--ez-color-border)" />

                {/* AI Chat Area */}
                <rect x="60" y="60" width="200" height="40" fill="var(--ez-color-ash)" />
                <rect x="75" y="76" width="150" height="6" fill="var(--ez-color-heading)" opacity="0.6" />

                <rect x="140" y="120" width="200" height="60" fill="var(--ez-color-primary)" opacity="0.1" />
                <rect x="155" y="136" width="160" height="6" fill="var(--ez-color-primary)" />
                <rect x="155" y="152" width="120" height="6" fill="var(--ez-color-primary)" />

                {/* Input Bar */}
                <rect x="60" y="200" width="280" height="40" fill="var(--ez-color-white)" stroke="var(--ez-color-primary)" />
                <rect x="75" y="217" width="100" height="6" fill="var(--ez-color-heading)" opacity="0.3" />

                <circle cx="315" cy="220" r="10" fill="var(--ez-color-primary)" />
                <path d="M312 220l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: "integrations",
        eyebrow: "Seamless Connectivity",
        title: "Plugs into your entire stack",
        description: "Kubee doesn't force you to change how you work. We integrate natively with your e-commerce platforms, accounting software, and point-of-sale systems to act as the single source of truth.",
        bullets: [
            "Shopify, Amazon & WooCommerce",
            "QuickBooks & Xero synchronization",
            "Custom API and webhooks available"
        ],
        illustration: (
            <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
                {/* Center Node */}
                <rect x="160" y="110" width="80" height="80" fill="var(--ez-color-carbon)" />
                <rect x="185" y="146" width="30" height="8" fill="white" opacity="0.9" />

                {/* Connector Lines */}
                <line x1="200" y1="110" x2="200" y2="60" stroke="var(--ez-color-border)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="240" y1="150" x2="300" y2="150" stroke="var(--ez-color-border)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="190" x2="200" y2="240" stroke="var(--ez-color-border)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="160" y1="150" x2="100" y2="150" stroke="var(--ez-color-border)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Surrounding Nodes */}
                <rect x="170" y="20" width="60" height="40" fill="var(--ez-color-white)" stroke="var(--ez-color-border)" />
                <rect x="300" y="130" width="60" height="40" fill="var(--ez-color-white)" stroke="var(--ez-color-border)" />
                <rect x="170" y="240" width="60" height="40" fill="var(--ez-color-white)" stroke="var(--ez-color-border)" />
                <rect x="40" y="130" width="60" height="40" fill="var(--ez-color-white)" stroke="var(--ez-color-border)" />

                {/* Node Accents */}
                <rect x="185" y="36" width="30" height="4" fill="var(--ez-color-heading)" opacity="0.5" />
                <rect x="315" y="146" width="30" height="4" fill="var(--ez-color-primary)" opacity="0.8" />
                <rect x="185" y="256" width="30" height="4" fill="var(--ez-color-heading)" opacity="0.5" />
                <rect x="55" y="146" width="30" height="4" fill="var(--ez-color-heading)" opacity="0.5" />
            </svg>
        )
    }
];

export default function FeaturesPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-ez-body">

            {/* Hero Section */}
            <section className="bg-ez-ash border-b border-ez-border pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 lg:px-10 text-center">
                <div className="max-w-[900px] mx-auto step-fade">
                    <h1 className="text-[40px] sm:text-[56px] font-medium text-ez-heading leading-tight mb-6">
                        Engineered for total control
                    </h1>
                    <p className="text-ez-md sm:text-ez-lg text-ez-secondary leading-relaxed max-w-2xl mx-auto">
                        Kubee strips away the complexity of traditional ERPs. We combined inventory tracking, order management, and artificial intelligence into a single, brutally efficient platform.
                    </p>
                </div>
            </section>

            {/* Features List */}
            <section className="max-w-[1383px] mx-auto px-6 lg:px-10">
                {features.map((feature, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={feature.id}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20 lg:py-32 border-b border-ez-border last:border-0"
                        >
                            {/* Text Content */}
                            <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <span className="ez-micro-label mb-4 block text-ez-secondary">
                                    {feature.eyebrow}
                                </span>
                                <h2 className="text-[32px] sm:text-[40px] font-medium text-ez-heading leading-tight mb-6">
                                    {feature.title}
                                </h2>
                                <p className="text-ez-base sm:text-ez-md text-ez-secondary leading-relaxed mb-8">
                                    {feature.description}
                                </p>

                                <ul className="space-y-4">
                                    {feature.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-ez-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-ez-base text-ez-heading font-medium">
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Minimal Illustration Placeholder */}
                            <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full bg-ez-ash border border-ez-border aspect-[4/3] flex items-center justify-center`}>
                                {feature.illustration}
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-ez-border bg-ez-carbon text-center py-24 lg:py-32 px-6 lg:px-10">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-[32px] sm:text-[40px] font-medium text-white leading-tight mb-6">
                        Ready to streamline your operations?
                    </h2>
                    <p className="text-ez-md text-white/60 mb-10">
                        Join thousands of modern businesses managing millions in inventory with Kubee.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/signup" className="ez-btn ez-btn-primary min-w-[160px] h-12 text-ez-base">
                            Start Free Trial
                        </Link>
                        <Link href="/contact" className="px-6 h-12 flex items-center justify-center bg-transparent border border-white/20 text-white rounded text-ez-base font-medium hover:bg-white/10 transition-[background-color] duration-ez outline-none">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}