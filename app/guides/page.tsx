"use client";

import { useState } from "react";
import type { Metadata } from "next";

const sidebarSections = [
    {
        heading: "Getting started",
        items: [
            {
                label: "Inventory",
                sub: ["Overview", "Quick Start", "Resources"],
            },
            { label: "Dashboard" },
            { label: "Stock Management" },
            { label: "Workflows" },
            { label: "Integrations" },
            { label: "Reports & Analytics" },
            { label: "AI Forecasting" },
            { label: "Permissions" },
            { label: "GST & Taxes" },
            { label: "Navigation" },
            { label: "Automation" },
            { label: "Warehouses" },
            { label: "Advanced Planning" },
            { label: "Kubee Mobile" },
            { label: "More about Kubee" },
        ],
    },
];

type ContentKey = string;

const contentMap: Record<ContentKey, { title: string; sections: { heading: string; body: string; showHero?: boolean }[] }> = {
    Overview: {
        title: "Welcome to Kubee",
        sections: [
            {
                heading: "Everything you'll need to know",
                showHero: true,
                body: "Whether you've used it or not, we'll help you choose the right features for your business, set it up, and adopt best practices. So grab your team and let's go!",
            },
            {
                heading: "What is Kubee?",
                body: "Kubee is an industry-leading inventory management tool that brings every team together to plan, track, and deliver any type of product with confidence. It's the single source of truth for your organisation, empowering teams with the context to move quickly while staying connected to the greater business goal. Whether you're managing everyday tasks in smaller or complex projects, this is where teams and AI come together to drive better outcomes, faster. Sign up for a live demo of Kubee.",
            },
        ],
    },
    "Quick Start": {
        title: "Quick Start Guide",
        sections: [
            {
                heading: "Set up in minutes",
                body: "Kubee is designed for fast onboarding. Connect your existing catalogs, configure your warehouses, and invite your team — all within a single afternoon.",
            },
            {
                heading: "Your first inventory",
                body: "Start by creating a product catalog. Add SKUs, set reorder thresholds, and map suppliers. Kubee's AI will immediately begin learning your demand patterns.",
            },
        ],
    },
    Resources: {
        title: "Resources",
        sections: [
            {
                heading: "Documentation, templates & community",
                body: "Access our full API reference, downloadable import templates, video walkthroughs, and community forums. Everything you need to get the most out of Kubee.",
            },
        ],
    },
    Dashboard: {
        title: "Dashboard",
        sections: [
            {
                heading: "Your command centre",
                body: "The Kubee dashboard gives you a real-time view of inventory health, pending orders, low-stock alerts, and revenue trends — all on one screen.",
            },
        ],
    },
    "Stock Management": {
        title: "Stock Management",
        sections: [
            {
                heading: "Track every unit",
                body: "Kubee's stock engine handles multi-warehouse tracking, batch/lot numbers, expiry dates, and FIFO/LIFO costing. Get notified before you run out.",
            },
        ],
    },
    Workflows: {
        title: "Workflows",
        sections: [
            {
                heading: "Automate your operations",
                body: "Build custom approval chains, auto-reorder rules, and supplier notification flows. No code required — drag, drop, done.",
            },
        ],
    },
    Integrations: {
        title: "Integrations",
        sections: [
            {
                heading: "Connect the tools you already use",
                body: "Kubee connects natively with Tally, Zoho Books, Shopify, WooCommerce, Amazon India, and 30+ other platforms. Two-way sync keeps everything in step.",
            },
        ],
    },
    "Reports & Analytics": {
        title: "Reports & Analytics",
        sections: [
            {
                heading: "Data-driven decisions",
                body: "Generate sell-through reports, dead-stock alerts, supplier performance scorecards, and margin analyses. Export to Excel or share directly with stakeholders.",
            },
        ],
    },
    "AI Forecasting": {
        title: "AI Forecasting",
        sections: [
            {
                heading: "Predict demand before it happens",
                body: "Kubee's forecasting engine analyses historical sales velocity, seasonality, and market signals to recommend optimal stock levels — reducing overstock by up to 30%.",
            },
        ],
    },
    Permissions: {
        title: "Permissions",
        sections: [
            {
                heading: "Role-based access control",
                body: "Grant granular permissions to staff, warehouse managers, accountants, and read-only auditors. Every action is logged for compliance.",
            },
        ],
    },
    "GST & Taxes": {
        title: "GST & Taxes",
        sections: [
            {
                heading: "Built for India's tax landscape",
                body: "Kubee auto-calculates CGST, SGST, and IGST on every transaction. Generate GST-ready invoices and file-ready reports in one click.",
            },
        ],
    },
    Navigation: {
        title: "Navigation",
        sections: [
            {
                heading: "Finding your way around",
                body: "Learn keyboard shortcuts, the global search bar, and the command palette to move through Kubee at the speed of thought.",
            },
        ],
    },
    Automation: {
        title: "Automation",
        sections: [
            {
                heading: "Let Kubee do the work",
                body: "Trigger purchase orders when stock dips below threshold, send WhatsApp alerts to suppliers, and auto-reconcile deliveries — all on autopilot.",
            },
        ],
    },
    Warehouses: {
        title: "Warehouses",
        sections: [
            {
                heading: "Multi-location inventory",
                body: "Manage stock across multiple warehouses, retail stores, and fulfilment centres from a single view. Transfer stock between locations in seconds.",
            },
        ],
    },
    "Advanced Planning": {
        title: "Advanced Planning",
        sections: [
            {
                heading: "Enterprise-grade supply chain tools",
                body: "Model seasonal purchasing plans, set up consignment agreements, and run what-if simulations before committing to large supplier contracts.",
            },
        ],
    },
    "Kubee Mobile": {
        title: "Kubee Mobile",
        sections: [
            {
                heading: "Inventory in your pocket",
                body: "Scan barcodes, receive stock, approve purchase orders, and check alerts from the Kubee mobile app for iOS and Android.",
            },
        ],
    },
    "More about Kubee": {
        title: "More about Kubee",
        sections: [
            {
                heading: "Our story",
                body: "Kubee was built in India, for India — by operators who lived through the pain of spreadsheet-based inventory. We're on a mission to make modern operations accessible to every business.",
            },
        ],
    },
};

export default function GuidesPage() {
    const [activeItem, setActiveItem] = useState<ContentKey>("Overview");
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ Inventory: true });

    const content = contentMap[activeItem] ?? contentMap["Overview"];

    function toggleGroup(label: string) {
        setExpandedGroups((prev) => ({ ...prev, [label]: !prev[label] }));
    }

    return (
        <div className="bg-ez-white font-sans min-h-screen">

            {/* Split Content Layout */}
            <div className="max-w-[1383px] mx-auto flex flex-col md:flex-row px-6 lg:px-10 py-10 md:py-16 gap-8 lg:gap-16">

                {/* Sidebar */}
                <aside className="w-full md:w-64 shrink-0 md:sticky md:top-24 h-auto md:h-[calc(100vh-24rem)] overflow-y-auto hidden md:block scrollbar-hide">
                    <nav className="pb-8">
                        {sidebarSections.map((section, idx) => (
                            <div key={section.heading} className={idx !== 0 ? "mt-8" : ""}>
                                <p className="ez-text-base font-bold mb-3 px-3">
                                    {section.heading}
                                </p>
                                <ul className="space-y-1">
                                    {section.items.map((item) => (
                                        <li key={item.label}>
                                            {item.sub ? (
                                                <>
                                                    <button
                                                        onClick={() => toggleGroup(item.label)}
                                                        className="w-full flex items-center justify-between px-3 py-2 text-ez-sm font-medium text-ez-secondary hover:bg-ez-ash hover:text-ez-heading rounded transition-colors duration-ez outline-none"
                                                    >
                                                        <span>{item.label}</span>
                                                        <svg
                                                            className={`w-4 h-4 text-ez-muted transition-transform duration-ez ${expandedGroups[item.label] ? "rotate-90" : ""}`}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>

                                                    {/* Sub-items */}
                                                    {expandedGroups[item.label] && (
                                                        <ul className="mt-1 mb-2 space-y-1 border-l border-ez-border ml-4 pl-3">
                                                            {item.sub.map((sub) => (
                                                                <li key={sub}>
                                                                    <button
                                                                        onClick={() => setActiveItem(sub)}
                                                                        className={`w-full text-left px-3 py-1.5 text-ez-sm font-medium rounded transition-colors duration-ez outline-none ${activeItem === sub
                                                                            ? "text-ez-primary bg-ez-ash"
                                                                            : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                                                                            }`}
                                                                    >
                                                                        {sub}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : (
                                                <button
                                                    onClick={() => setActiveItem(item.label)}
                                                    className={`w-full text-left px-3 py-2 text-ez-sm font-medium rounded transition-colors duration-ez outline-none ${activeItem === item.label
                                                        ? "text-ez-primary bg-ez-ash"
                                                        : "text-ez-secondary hover:text-ez-heading hover:bg-ez-ash"
                                                        }`}
                                                >
                                                    {item.label}
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 max-w-3xl pb-20">
                    <h2 className="text-ez-hero font-medium text-ez-heading mb-10 leading-tight">
                        {content.title}
                    </h2>

                    <div className="space-y-12">
                        {content.sections.map((sec, i) => (
                            <section key={i} className="scroll-mt-24">
                                <h3 className="text-ez-lg font-medium text-ez-heading mb-4">{sec.heading}</h3>

                                {sec.showHero ? (
                                    <div className="flex flex-col sm:flex-row items-start gap-8">
                                        <div className="flex-1">
                                            <p className="text-ez-base text-ez-body leading-normal mb-4">
                                                {sec.body}
                                            </p>
                                            <a href="/signup" className="inline-flex items-center text-ez-sm font-medium text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">
                                                Sign up for a live demo
                                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>

                                        {/* Cleaned up Hero Illustration - Flat, monochrome + primary */}
                                        <div className="shrink-0 w-full sm:w-56 h-36 bg-ez-ash border border-ez-border flex items-center justify-center overflow-hidden">
                                            <svg viewBox="0 0 160 100" className="w-full h-full p-4" fill="none">
                                                <rect x="20" y="20" width="50" height="60" fill="var(--ez-color-primary)" opacity="0.1" />
                                                <rect x="24" y="24" width="42" height="8" fill="var(--ez-color-primary)" opacity="0.6" />
                                                <rect x="24" y="36" width="42" height="4" fill="var(--ez-color-primary)" opacity="0.4" />
                                                <rect x="24" y="44" width="30" height="4" fill="var(--ez-color-primary)" opacity="0.4" />
                                                <rect x="24" y="52" width="36" height="4" fill="var(--ez-color-primary)" opacity="0.4" />
                                                <rect x="24" y="60" width="20" height="4" fill="var(--ez-color-primary)" opacity="0.4" />

                                                <rect x="90" y="30" width="50" height="50" fill="var(--ez-color-carbon)" opacity="0.05" />
                                                <rect x="96" y="36" width="38" height="6" fill="var(--ez-color-carbon)" opacity="0.3" />
                                                <rect x="96" y="47" width="38" height="4" fill="var(--ez-color-carbon)" opacity="0.2" />
                                                <rect x="96" y="55" width="26" height="4" fill="var(--ez-color-carbon)" opacity="0.2" />

                                                <circle cx="125" cy="68" r="8" fill="var(--ez-color-primary)" />
                                                <path d="M122 68l2 2 4-4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-ez-base text-ez-body leading-normal">{sec.body}</p>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Intro Video Card */}
                    {activeItem === "Overview" && (
                        <section className="mt-14 pt-8 border-t border-ez-border">
                            <h3 className="text-ez-lg font-medium text-ez-heading mb-4">Video Overview</h3>
                            <div className="relative bg-ez-carbon border border-ez-border aspect-video max-w-2xl cursor-pointer group overflow-hidden">

                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                    <div className="w-16 h-16 rounded bg-white flex items-center justify-center group-hover:bg-ez-ash transition-colors duration-ez">
                                        <svg className="w-6 h-6 text-ez-heading ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Watermark */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="text-white/50 text-ez-sm font-medium tracking-[0.1em] uppercase">Kubee</span>
                                </div>
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}