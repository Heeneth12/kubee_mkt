"use client";

import { useState } from "react";
import Link from "next/link";

type Feature = { icon: string; title: string; desc: string };
type Pain = { bad: string; good: string };
type Stat = { value: string; label: string };

type Industry = {
    id: string;
    label: string;
    emoji: string;
    eyebrow: string;
    headline: string;
    description: string;
    pains: Pain[];
    features: Feature[];
    stats: Stat[];
    ctaGuide: string;
};

const industries: Industry[] = [
    {
        id: "wholesale",
        label: "Wholesale & Distribution",
        emoji: "🏭",
        eyebrow: "Wholesale & Distribution",
        headline: "Built for high-volume trading businesses",
        description:
            "Manage bulk purchase orders, multi-party invoicing, and GST compliance without spreadsheets. Kubee gives distributors a live view of stock across all branches — so you never oversell or understock.",
        pains: [
            { bad: "Manual order tracking", good: "Automated PO management" },
            { bad: "GST errors on invoices", good: "Auto CGST/SGST/IGST calculation" },
            { bad: "Stock blind spots", good: "Live multi-branch visibility" },
        ],
        features: [
            { icon: "📋", title: "Bulk Purchase Orders", desc: "Create, approve and track large orders with multi-SKU line items and approval chains." },
            { icon: "🧾", title: "GST Invoicing", desc: "Auto CGST/SGST/IGST on every invoice. File-ready reports in one click." },
            { icon: "🏭", title: "Multi-Branch Stock", desc: "Live stock levels across all warehouses and distribution branches." },
            { icon: "🤖", title: "AI Reorder Suggestions", desc: "Predict demand and auto-suggest reorder quantities before you run out." },
        ],
        stats: [
            { value: "40%", label: "Less time on order processing" },
            { value: "₹2L+", label: "Avg. monthly GST errors prevented" },
            { value: "99.9%", label: "Stock accuracy across branches" },
        ],
        ctaGuide: "/guides",
    },
    {
        id: "hospitals",
        label: "Hospitals & Clinics",
        emoji: "🏥",
        eyebrow: "Hospitals & Clinics",
        headline: "Precision inventory for healthcare facilities",
        description:
            "From surgical supplies to pharmacy stock, Kubee tracks every item with expiry dates, batch numbers, and regulatory compliance built in. Never run out of critical supplies again.",
        pains: [
            { bad: "Expired medicines in stock", good: "Automated expiry alerts" },
            { bad: "Manual indenting process", good: "Digital indent & approval flow" },
            { bad: "Compliance gaps", good: "Audit-ready batch records" },
        ],
        features: [
            { icon: "💊", title: "Expiry Date Tracking", desc: "FIFO/FEFO enforcement with alerts weeks before items expire." },
            { icon: "🔢", title: "Batch & Lot Numbers", desc: "Full traceability from supplier to patient for every item." },
            { icon: "📝", title: "Digital Indent Management", desc: "Department-wise indent requests, approvals, and fulfillment." },
            { icon: "🛡️", title: "Regulatory Compliance", desc: "Audit trails and reports ready for NABH, NABL, and Drug Inspector visits." },
        ],
        stats: [
            { value: "0", label: "Expired items reaching patients" },
            { value: "60%", label: "Reduction in indent processing time" },
            { value: "100%", label: "Batch traceability coverage" },
        ],
        ctaGuide: "/guides",
    },
    {
        id: "warehouse",
        label: "Warehousing & 3PL",
        emoji: "📦",
        eyebrow: "Warehousing & 3PL",
        headline: "Run your warehouse at maximum throughput",
        description:
            "From receiving to dispatch, Kubee orchestrates every movement inside your warehouse. Barcode scanning, zone management, and real-time put-away instructions keep your team moving fast.",
        pains: [
            { bad: "Paper-based receiving", good: "Barcode scan & auto-receive" },
            { bad: "Lost stock in the warehouse", good: "Zone & bin-level location tracking" },
            { bad: "Slow pick & pack", good: "Optimised pick routes" },
        ],
        features: [
            { icon: "📲", title: "Barcode & QR Scanning", desc: "Mobile app scanning for inbound, outbound, and stock counts." },
            { icon: "🗺️", title: "Zone & Bin Management", desc: "Organise your floor into zones, aisles, and bins. Know exactly where every SKU lives." },
            { icon: "🚚", title: "Inbound & Outbound", desc: "PO-linked receiving and order-linked dispatching with signature capture." },
            { icon: "📊", title: "3PL Client Portals", desc: "Give each client a read-only dashboard of their own inventory." },
        ],
        stats: [
            { value: "3×", label: "Faster inbound receiving" },
            { value: "99.5%", label: "Pick accuracy rate" },
            { value: "50%", label: "Less time on stock counts" },
        ],
        ctaGuide: "/guides",
    },
    {
        id: "retail",
        label: "Retail & D2C",
        emoji: "🛒",
        eyebrow: "Retail & D2C",
        headline: "Never lose a sale to stockout again",
        description:
            "Whether you run one store or fifty, Kubee keeps every shelf stocked and every sale accounted for. Sync with your POS, e-commerce store, and supplier in real time.",
        pains: [
            { bad: "Stockouts during peak season", good: "AI-powered demand forecasting" },
            { bad: "Manual stock counts", good: "Cycle counts with mobile scanning" },
            { bad: "Disconnected POS & inventory", good: "Real-time POS sync" },
        ],
        features: [
            { icon: "🏪", title: "Multi-Store Management", desc: "Manage stock levels, transfers, and replenishment across all stores from one screen." },
            { icon: "⚡", title: "POS Integration", desc: "Every sale auto-deducts from inventory. No end-of-day reconciliation needed." },
            { icon: "📈", title: "Demand Forecasting", desc: "AI predicts seasonal demand so you order the right quantity at the right time." },
            { icon: "↩️", title: "Returns & Exchanges", desc: "Process returns, update stock, and trigger restocking — all in one flow." },
        ],
        stats: [
            { value: "35%", label: "Reduction in overstock cost" },
            { value: "28%", label: "Fewer stockout incidents" },
            { value: "2 min", label: "Average stock replenishment trigger" },
        ],
        ctaGuide: "/guides",
    },
    {
        id: "pharma",
        label: "Pharma & Chemicals",
        emoji: "🧪",
        eyebrow: "Pharma & Chemicals",
        headline: "Compliance-first inventory for regulated industries",
        description:
            "Track every molecule from manufacturer to end user. Kubee handles Schedule H&X drugs, narcotics registers, and chemical safety data sheets — keeping you audit-ready at all times.",
        pains: [
            { bad: "Manual narcotics register", good: "Auto-maintained digital register" },
            { bad: "Recall management nightmare", good: "Batch recall in one click" },
            { bad: "Cold chain gaps", good: "Temperature log integration" },
        ],
        features: [
            { icon: "🗂️", title: "Schedule H/X Tracking", desc: "Separate registers and access controls for controlled substances." },
            { icon: "🌡️", title: "Cold Chain Monitoring", desc: "Integrate temperature loggers and flag excursions automatically." },
            { icon: "🔄", title: "Batch Recall Management", desc: "Identify and quarantine all affected stock from a single batch ID in seconds." },
            { icon: "📃", title: "CoA & SDS Management", desc: "Attach Certificates of Analysis and Safety Data Sheets to every item." },
        ],
        stats: [
            { value: "100%", label: "Regulatory audit pass rate" },
            { value: "<5 min", label: "Full batch recall execution" },
            { value: "Zero", label: "Cold chain excursion misses" },
        ],
        ctaGuide: "/guides",
    },
    {
        id: "fmcg",
        label: "FMCG & Food",
        emoji: "🍱",
        eyebrow: "FMCG & Food",
        headline: "Move fast. Waste nothing. Sell everything.",
        description:
            "In FMCG, margins live and die on freshness and speed. Kubee automates reorders, tracks perishables with FEFO logic, and connects you to your distributor network in real time.",
        pains: [
            { bad: "High spoilage / wastage", good: "FEFO-driven stock rotation" },
            { bad: "Demand spikes emptying shelves", good: "Predictive seasonal reordering" },
            { bad: "Distributor communication lag", good: "Portal-based distributor sync" },
        ],
        features: [
            { icon: "🥗", title: "FEFO Stock Rotation", desc: "First-Expired-First-Out enforcement ensures freshest stock ships last." },
            { icon: "📡", title: "Distributor Network", desc: "Give your distributors real-time visibility and ordering through a branded portal." },
            { icon: "🔔", title: "Wastage Alerts", desc: "Get notified before items approach expiry so you can discount or redirect them." },
            { icon: "📦", title: "Secondary Packaging Tracking", desc: "Track cartons, cases, and units as separate levels of the same SKU." },
        ],
        stats: [
            { value: "45%", label: "Reduction in food wastage" },
            { value: "2×", label: "Faster distributor order processing" },
            { value: "₹8L", label: "Avg. annual spoilage savings" },
        ],
        ctaGuide: "/guides",
    },
    {
        id: "manufacturing",
        label: "Manufacturing",
        emoji: "⚙️",
        eyebrow: "Manufacturing",
        headline: "From raw material to finished goods — fully tracked",
        description:
            "Kubee ties together your raw material procurement, work-in-progress, and finished goods inventory. Know your true cost of production and never stop a line for want of components.",
        pains: [
            { bad: "Production halts from stock-outs", good: "Component shortage alerts before they happen" },
            { bad: "Unknown production costs", good: "Real-time BOM cost tracking" },
            { bad: "WIP invisible on the floor", good: "Stage-by-stage WIP visibility" },
        ],
        features: [
            { icon: "📐", title: "Bill of Materials (BOM)", desc: "Define multi-level BOMs and auto-deduct components as production runs." },
            { icon: "🔩", title: "Raw Material Planning", desc: "Auto-calculate material requirements from your production schedule." },
            { icon: "🏗️", title: "Work-in-Progress Tracking", desc: "Track items through each production stage with yield and scrap recording." },
            { icon: "💰", title: "Cost of Production", desc: "See the true landed cost of every finished good including labour and overheads." },
        ],
        stats: [
            { value: "Zero", label: "Production line stoppages" },
            { value: "22%", label: "Reduction in raw material waste" },
            { value: "Real-time", label: "Cost-of-goods visibility" },
        ],
        ctaGuide: "/guides",
    },
    {
        id: "ecommerce",
        label: "E-commerce & Marketplaces",
        emoji: "🛍️",
        eyebrow: "E-commerce & Marketplaces",
        headline: "Sell everywhere. Manage inventory in one place.",
        description:
            "Sync stock across Amazon, Flipkart, your Shopify store, and physical outlets simultaneously. Kubee prevents overselling, speeds up fulfilment, and automates returns — all from one dashboard.",
        pains: [
            { bad: "Overselling across channels", good: "Real-time multi-channel sync" },
            { bad: "Manual order fulfilment", good: "Auto pick-pack-ship workflows" },
            { bad: "Returns creating chaos", good: "Automated return-to-stock processing" },
        ],
        features: [
            { icon: "🔗", title: "Multi-Channel Sync", desc: "Connect Amazon, Flipkart, Shopify, Meesho and more. One inventory, everywhere." },
            { icon: "📬", title: "Order Management", desc: "Aggregate orders from all channels and route to the nearest fulfilment centre." },
            { icon: "↩️", title: "Returns Automation", desc: "Inspect returned items, update stock, and issue refunds in a single workflow." },
            { icon: "🏎️", title: "Fulfilment Speed", desc: "Optimised pick paths and carrier integrations cut dispatch time in half." },
        ],
        stats: [
            { value: "0", label: "Oversell incidents after go-live" },
            { value: "55%", label: "Faster order dispatch" },
            { value: "4×", label: "More channels managed per person" },
        ],
        ctaGuide: "/guides",
    },
];

export default function SolutionsPage() {
    const [activeId, setActiveId] = useState<string>("wholesale");
    const industry = industries.find((i) => i.id === activeId) || industries[0];

    return (
        <div className="flex min-h-[calc(100vh-64px)] max-w-345 mx-auto  bg-ez-white font-sans text-ez-body">
            <aside className="w-72 shrink-0 border-r border-ez-border bg-white overflow-y-auto sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-between hidden md:flex scrollbar-hide">
                <nav className="py-8 px-6">
                    <p className="ez-micro-label mb-4 px-2">
                        Industries
                    </p>
                    <ul className="space-y-1">
                        {industries.map((ind) => (
                            <li key={ind.id}>
                                <button
                                    onClick={() => setActiveId(ind.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-[background-color,color] duration-ez text-left outline-none ${activeId === ind.id
                                        ? "bg-ez-ash text-ez-heading"
                                        : "text-ez-secondary hover:bg-ez-ash hover:text-ez-heading"
                                        }`}
                                >
                                    <span className="text-ez-lg leading-none grayscale opacity-80">{ind.emoji}</span>
                                    <span className="text-ez-sm font-medium">
                                        {ind.label}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom CTA (Flat, no gradients/shadows) */}
                <div className="p-6 border-t border-ez-border bg-ez-ash">
                    <p className="text-ez-base font-medium text-ez-heading mb-1.5">Not sure which fits?</p>
                    <p className="text-ez-sm text-ez-secondary mb-5 leading-relaxed pr-2">
                        Talk to our team and we'll map Kubee to your exact workflow.
                    </p>
                    <Link
                        href="/contact"
                        className="ez-btn ez-btn-secondary w-full"
                    >
                        Book a call
                    </Link>
                </div>
            </aside>

            {/* ── Main content ── */}
            <main className="flex-1 overflow-y-auto bg-white">
                <div className="max-w-4xl mx-auto px-8 py-16 lg:px-16 lg:py-24 step-fade" key={industry.id}>

                    {/* Eyebrow + Headline */}
                    <div className="mb-12">
                        <p className="ez-micro-label text-ez-secondary mb-4">
                            {industry.eyebrow}
                        </p>
                        <h1 className="text-[40px] sm:text-[48px] font-medium text-ez-heading mb-6 tracking-normal leading-tight">
                            {industry.headline}
                        </h1>
                        <p className="text-ez-md text-ez-secondary leading-relaxed max-w-2xl">
                            {industry.description}
                        </p>
                    </div>

                    {/* Stats bar */}
                    <div className="flex flex-wrap gap-8 sm:gap-16 mb-16 py-8 border-y border-ez-border bg-white">
                        {industry.stats.map((s) => (
                            <div key={s.label}>
                                <p className="text-[32px] font-medium text-ez-heading leading-none">{s.value}</p>
                                <p className="ez-micro-label text-ez-secondary mt-3">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pain → Solution (Minimal layout, no colored backgrounds) */}
                    <div className="mb-16">
                        <h2 className="text-ez-xl font-medium text-ez-heading mb-6">
                            The Kubee Transformation
                        </h2>
                        <div className="flex flex-col gap-4">
                            {industry.pains.map((p, idx) => (
                                <div key={idx} className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                                    {/* Bad */}
                                    <div className="flex items-start gap-3 p-4 border border-ez-border bg-ez-ash h-full">
                                        <div className="text-ez-muted mt-0.5 shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <span className="text-ez-sm text-ez-secondary">{p.bad}</span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="text-ez-muted flex justify-center rotate-90 sm:rotate-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>

                                    {/* Good */}
                                    <div className="flex items-start gap-3 p-4 border border-ez-border bg-white h-full">
                                        <div className="text-ez-primary mt-0.5 shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-ez-sm font-medium text-ez-heading">{p.good}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature cards */}
                    <div className="mb-16">
                        <h2 className="text-ez-xl font-medium text-ez-heading mb-6">
                            Tailored capabilities
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {industry.features.map((f) => (
                                <div
                                    key={f.title}
                                    className="bg-white border border-ez-border p-6 hover:border-ez-subtle transition-[border-color] duration-ez cursor-default"
                                >
                                    <div className="w-10 h-10 border border-ez-border bg-ez-ash flex items-center justify-center mb-5 text-ez-heading">
                                        <span className="text-xl leading-none block grayscale opacity-80">{f.icon}</span>
                                    </div>
                                    <p className="text-ez-base font-medium text-ez-heading mb-2">{f.title}</p>
                                    <p className="text-ez-sm text-ez-secondary leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA row */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-ez-border">
                        <Link
                            href="/contact"
                            className="ez-btn ez-btn-primary px-8 w-full sm:w-auto"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href={industry.ctaGuide}
                            className="text-ez-sm font-medium text-ez-secondary hover:text-ez-primary transition-colors duration-ez inline-flex items-center gap-1.5 outline-none"
                        >
                            Explore the full guide
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}