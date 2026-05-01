"use client";

import Link from "next/link";

const stats = [
    { value: "4,000+", label: "Businesses using Kubee" },
    { value: "₹200Cr+", label: "Inventory tracked monthly" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "< 2s", label: "Average sync time" },
];

const features = [
    {
        id: "inventory",
        eyebrow: "Inventory Management",
        badge: "Core",
        title: "Real-time stock synchronization",
        description:
            "Never oversell or run out of stock again. Kubee automatically tracks your inventory across all connected sales channels, updating quantities the second an order is placed.",
        bullets: [
            { text: "Multi-warehouse tracking", sub: "Track stock across unlimited locations" },
            { text: "Low stock threshold alerts", sub: "Get notified before you run out" },
            { text: "Automated purchase order generation", sub: "Reorder without lifting a finger" },
        ],
        metrics: [
            { label: "Stock accuracy", value: "99.8%" },
            { label: "Sync delay", value: "< 2s" },
        ],
        illustration: (
            <svg viewBox="0 0 480 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Sidebar */}
                <rect x="0" y="0" width="80" height="360" fill="#F4F4F4" />
                <rect x="16" y="24" width="48" height="8" rx="1" fill="#171A20" opacity="0.15" />
                <rect x="16" y="56" width="48" height="6" rx="1" fill="#171A20" opacity="0.08" />
                <rect x="16" y="70" width="36" height="6" rx="1" fill="#3E6AE1" opacity="0.6" />
                <rect x="16" y="84" width="42" height="6" rx="1" fill="#171A20" opacity="0.08" />
                <rect x="16" y="98" width="38" height="6" rx="1" fill="#171A20" opacity="0.08" />
                <rect x="16" y="112" width="44" height="6" rx="1" fill="#171A20" opacity="0.08" />
                {/* Sidebar active indicator */}
                <rect x="0" y="66" width="3" height="14" fill="#3E6AE1" />

                {/* Top bar */}
                <rect x="80" y="0" width="400" height="48" fill="white" />
                <rect x="80" y="48" width="400" height="1" fill="#EEEEEE" />
                <rect x="96" y="16" width="100" height="8" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="340" y="14" width="80" height="20" rx="2" fill="#3E6AE1" />
                <rect x="356" y="22" width="48" height="4" rx="1" fill="white" opacity="0.9" />

                {/* Stat cards row */}
                <rect x="96" y="64" width="88" height="52" fill="white" stroke="#EEEEEE" />
                <rect x="108" y="76" width="40" height="5" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="108" y="88" width="28" height="8" rx="1" fill="#3E6AE1" opacity="0.9" />

                <rect x="196" y="64" width="88" height="52" fill="white" stroke="#EEEEEE" />
                <rect x="208" y="76" width="40" height="5" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="208" y="88" width="22" height="8" rx="1" fill="#171A20" opacity="0.7" />

                <rect x="296" y="64" width="88" height="52" fill="white" stroke="#EEEEEE" />
                <rect x="308" y="76" width="40" height="5" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="308" y="88" width="32" height="8" rx="1" fill="#171A20" opacity="0.7" />

                <rect x="396" y="64" width="84" height="52" fill="#FEF3C7" stroke="#FDE68A" />
                <rect x="408" y="76" width="40" height="5" rx="1" fill="#92400E" opacity="0.5" />
                <rect x="408" y="88" width="20" height="8" rx="1" fill="#D97706" opacity="0.9" />

                {/* Table */}
                <rect x="96" y="132" width="384" height="212" fill="white" stroke="#EEEEEE" />
                {/* Table header */}
                <rect x="96" y="132" width="384" height="28" fill="#F4F4F4" />
                <rect x="112" y="142" width="50" height="5" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="220" y="142" width="40" height="5" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="310" y="142" width="35" height="5" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="408" y="142" width="40" height="5" rx="1" fill="#5C5E62" opacity="0.6" />

                {/* Row 1 */}
                <rect x="96" y="160" width="384" height="1" fill="#EEEEEE" />
                <rect x="112" y="170" width="80" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="220" y="170" width="35" height="5" rx="1" fill="#171A20" opacity="0.5" />
                <rect x="310" y="168" width="44" height="10" rx="10" fill="#DCFCE7" />
                <rect x="318" y="171" width="28" height="4" rx="1" fill="#16A34A" opacity="0.8" />
                <rect x="408" y="170" width="42" height="5" rx="1" fill="#3E6AE1" opacity="0.8" />

                {/* Row 2 */}
                <rect x="96" y="196" width="384" height="1" fill="#EEEEEE" />
                <rect x="112" y="206" width="60" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="220" y="206" width="28" height="5" rx="1" fill="#171A20" opacity="0.5" />
                <rect x="310" y="204" width="44" height="10" rx="10" fill="#FEF3C7" />
                <rect x="318" y="207" width="28" height="4" rx="1" fill="#D97706" opacity="0.8" />
                <rect x="408" y="206" width="42" height="5" rx="1" fill="#3E6AE1" opacity="0.8" />

                {/* Row 3 — alert */}
                <rect x="96" y="232" width="384" height="36" fill="#FFF7ED" />
                <rect x="96" y="232" width="384" height="1" fill="#EEEEEE" />
                <rect x="112" y="244" width="70" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="220" y="244" width="16" height="5" rx="1" fill="#DC2626" opacity="0.8" />
                <rect x="310" y="242" width="52" height="10" rx="10" fill="#FEE2E2" />
                <rect x="318" y="245" width="36" height="4" rx="1" fill="#DC2626" opacity="0.8" />
                {/* Alert badge */}
                <rect x="380" y="237" width="80" height="20" rx="2" fill="#DC2626" opacity="0.1" />
                <rect x="390" y="244" width="60" height="4" rx="1" fill="#DC2626" opacity="0.7" />

                {/* Row 4 */}
                <rect x="96" y="268" width="384" height="1" fill="#EEEEEE" />
                <rect x="112" y="279" width="88" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="220" y="279" width="40" height="5" rx="1" fill="#171A20" opacity="0.5" />
                <rect x="310" y="277" width="44" height="10" rx="10" fill="#DCFCE7" />
                <rect x="318" y="280" width="28" height="4" rx="1" fill="#16A34A" opacity="0.8" />
                <rect x="408" y="279" width="42" height="5" rx="1" fill="#3E6AE1" opacity="0.8" />

                {/* Row 5 */}
                <rect x="96" y="305" width="384" height="1" fill="#EEEEEE" />
                <rect x="112" y="315" width="74" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="220" y="315" width="32" height="5" rx="1" fill="#171A20" opacity="0.5" />
                <rect x="310" y="313" width="44" height="10" rx="10" fill="#DCFCE7" />
                <rect x="318" y="316" width="28" height="4" rx="1" fill="#16A34A" opacity="0.8" />
                <rect x="408" y="315" width="42" height="5" rx="1" fill="#3E6AE1" opacity="0.8" />
            </svg>
        ),
    },
    {
        id: "ai",
        eyebrow: "Artificial Intelligence",
        badge: "AI-Powered",
        title: "Ask AI to optimize your business",
        description:
            "Stop digging through spreadsheets. Our built-in AI assistant analyzes your sales velocity, identifies dead stock, and predicts exactly when you need to reorder to maximize cash flow.",
        bullets: [
            { text: "Natural language data querying", sub: "Ask questions in plain English or Hindi" },
            { text: "Sales velocity predictions", sub: "Know what will sell before it does" },
            { text: "Automated markdown suggestions", sub: "Clear dead stock at the right price" },
        ],
        metrics: [
            { label: "Prediction accuracy", value: "94%" },
            { label: "Avg. cash flow lift", value: "+18%" },
        ],
        illustration: (
            <svg viewBox="0 0 480 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect x="0" y="0" width="480" height="360" fill="#F4F4F4" />

                {/* Main chat card */}
                <rect x="40" y="24" width="400" height="312" fill="white" stroke="#EEEEEE" />

                {/* Chat header */}
                <rect x="40" y="24" width="400" height="44" fill="#F4F4F4" />
                <rect x="40" y="68" width="400" height="1" fill="#EEEEEE" />
                <circle cx="64" cy="46" r="12" fill="#3E6AE1" opacity="0.15" />
                <rect x="80" y="40" width="60" height="6" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="80" y="50" width="40" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
                {/* Status dot */}
                <circle cx="74" cy="38" r="4" fill="#22C55E" />

                {/* User message bubble */}
                <rect x="220" y="88" width="200" height="36" rx="2" fill="#F4F4F4" />
                <rect x="234" y="100" width="160" height="5" rx="1" fill="#171A20" opacity="0.6" />
                <rect x="234" y="110" width="120" height="5" rx="1" fill="#171A20" opacity="0.4" />
                <rect x="400" y="88" width="20" height="20" rx="10" fill="#EEEEEE" />
                <rect x="405" y="96" width="10" height="4" rx="1" fill="#171A20" opacity="0.3" />

                {/* AI response card */}
                <rect x="60" y="140" width="240" height="100" fill="white" stroke="#EEEEEE" />
                {/* AI badge */}
                <rect x="60" y="140" width="240" height="22" fill="#3E6AE1" opacity="0.08" />
                <rect x="72" y="148" width="30" height="4" rx="1" fill="#3E6AE1" opacity="0.9" />
                <rect x="72" y="174" width="180" height="5" rx="1" fill="#171A20" opacity="0.6" />
                <rect x="72" y="186" width="140" height="5" rx="1" fill="#171A20" opacity="0.4" />
                <rect x="72" y="198" width="160" height="5" rx="1" fill="#171A20" opacity="0.4" />
                {/* Insight pill */}
                <rect x="72" y="212" width="80" height="16" rx="8" fill="#DCFCE7" />
                <rect x="82" y="217" width="60" height="4" rx="1" fill="#16A34A" opacity="0.8" />
                <rect x="164" y="212" width="70" height="16" rx="8" fill="#FEF3C7" />
                <rect x="174" y="217" width="50" height="4" rx="1" fill="#D97706" opacity="0.8" />

                {/* Chart card */}
                <rect x="60" y="256" width="240" height="64" fill="white" stroke="#EEEEEE" />
                <rect x="72" y="266" width="60" height="4" rx="1" fill="#5C5E62" opacity="0.6" />
                {/* Mini bar chart */}
                <rect x="72" y="290" width="12" height="20" fill="#3E6AE1" opacity="0.3" />
                <rect x="90" y="282" width="12" height="28" fill="#3E6AE1" opacity="0.5" />
                <rect x="108" y="275" width="12" height="35" fill="#3E6AE1" opacity="0.7" />
                <rect x="126" y="270" width="12" height="40" fill="#3E6AE1" />
                <rect x="144" y="278" width="12" height="32" fill="#3E6AE1" opacity="0.6" />
                <rect x="162" y="285" width="12" height="25" fill="#3E6AE1" opacity="0.4" />
                <rect x="180" y="272" width="12" height="38" fill="#3E6AE1" opacity="0.8" />

                {/* Input bar */}
                <rect x="40" y="316" width="400" height="20" fill="white" />
                <rect x="40" y="316" width="400" height="1" fill="#EEEEEE" />
                <rect x="56" y="324" width="140" height="4" rx="1" fill="#8E8E8E" opacity="0.4" />
                <rect x="404" y="318" width="24" height="16" rx="2" fill="#3E6AE1" />
                <rect x="410" y="324" width="12" height="4" rx="1" fill="white" opacity="0.9" />

                {/* Floating suggestion chips */}
                <rect x="316" y="156" width="104" height="22" rx="2" fill="white" stroke="#EEEEEE" />
                <rect x="326" y="163" width="80" height="4" rx="1" fill="#3E6AE1" opacity="0.7" />
                <rect x="316" y="186" width="104" height="22" rx="2" fill="white" stroke="#EEEEEE" />
                <rect x="326" y="193" width="70" height="4" rx="1" fill="#171A20" opacity="0.4" />
                <rect x="316" y="216" width="104" height="22" rx="2" fill="white" stroke="#EEEEEE" />
                <rect x="326" y="223" width="75" height="4" rx="1" fill="#171A20" opacity="0.4" />
            </svg>
        ),
    },
    {
        id: "integrations",
        eyebrow: "Seamless Connectivity",
        badge: "100+ Integrations",
        title: "Plugs into your entire stack",
        description:
            "Kubee doesn't force you to change how you work. We integrate natively with your e-commerce platforms, accounting software, and point-of-sale systems to act as the single source of truth.",
        bullets: [
            { text: "Shopify, Amazon & WooCommerce", sub: "Sync orders in real time" },
            { text: "QuickBooks & Tally synchronization", sub: "Accounts always balanced" },
            { text: "Custom API and webhooks available", sub: "Build any workflow you need" },
        ],
        metrics: [
            { label: "Integrations available", value: "100+" },
            { label: "Setup time", value: "< 5 min" },
        ],
        illustration: (
            <svg viewBox="0 0 480 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background grid */}
                <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#EEEEEE" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="480" height="360" fill="#F4F4F4" />
                <rect width="480" height="360" fill="url(#grid)" opacity="0.8" />

                {/* Center hub */}
                <rect x="184" y="140" width="112" height="80" fill="#171A20" />
                <rect x="196" y="160" width="88" height="6" rx="1" fill="white" opacity="0.9" />
                <rect x="210" y="174" width="60" height="4" rx="1" fill="white" opacity="0.4" />
                {/* Hub glow ring */}
                <rect x="180" y="136" width="120" height="88" fill="none" stroke="#3E6AE1" strokeWidth="1" opacity="0.3" />

                {/* Connector lines — animated feel via dashes */}
                {/* Top */}
                <line x1="240" y1="140" x2="240" y2="72" stroke="#3E6AE1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                {/* Right */}
                <line x1="296" y1="180" x2="368" y2="180" stroke="#3E6AE1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                {/* Bottom-right */}
                <line x1="280" y1="220" x2="340" y2="272" stroke="#3E6AE1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                {/* Bottom-left */}
                <line x1="200" y1="220" x2="140" y2="272" stroke="#3E6AE1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                {/* Left */}
                <line x1="184" y1="180" x2="112" y2="180" stroke="#3E6AE1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                {/* Top-right */}
                <line x1="284" y1="148" x2="344" y2="96" stroke="#3E6AE1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

                {/* Satellite nodes */}
                {/* Top — Shopify */}
                <rect x="200" y="24" width="80" height="48" fill="white" stroke="#EEEEEE" />
                <rect x="216" y="38" width="48" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="220" y="50" width="40" height="4" rx="1" fill="#5C5E62" opacity="0.5" />

                {/* Right — Amazon */}
                <rect x="368" y="156" width="80" height="48" fill="white" stroke="#EEEEEE" />
                <rect x="384" y="170" width="48" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="388" y="182" width="36" height="4" rx="1" fill="#5C5E62" opacity="0.5" />

                {/* Bottom-right — Tally */}
                <rect x="340" y="268" width="80" height="48" fill="white" stroke="#EEEEEE" />
                <rect x="356" y="282" width="48" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="360" y="294" width="40" height="4" rx="1" fill="#5C5E62" opacity="0.5" />

                {/* Bottom-left — QuickBooks */}
                <rect x="60" y="268" width="80" height="48" fill="white" stroke="#EEEEEE" />
                <rect x="76" y="282" width="48" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="80" y="294" width="36" height="4" rx="1" fill="#5C5E62" opacity="0.5" />

                {/* Left — WooCommerce */}
                <rect x="32" y="156" width="80" height="48" fill="white" stroke="#EEEEEE" />
                <rect x="48" y="170" width="48" height="5" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="52" y="182" width="40" height="4" rx="1" fill="#5C5E62" opacity="0.5" />

                {/* Top-right — Custom API */}
                <rect x="340" y="72" width="80" height="48" fill="#3E6AE1" opacity="0.08" stroke="#3E6AE1" strokeOpacity="0.3" />
                <rect x="356" y="86" width="48" height="5" rx="1" fill="#3E6AE1" opacity="0.9" />
                <rect x="360" y="98" width="36" height="4" rx="1" fill="#3E6AE1" opacity="0.5" />

                {/* Pulse dots on connectors */}
                <circle cx="240" cy="106" r="4" fill="#3E6AE1" />
                <circle cx="332" cy="180" r="4" fill="#3E6AE1" opacity="0.5" />
                <circle cx="310" cy="246" r="4" fill="#3E6AE1" opacity="0.7" />
            </svg>
        ),
    },
    {
        id: "analytics",
        eyebrow: "Business Intelligence",
        badge: "Insights",
        title: "Dashboards that actually make sense",
        description:
            "Every metric that matters — revenue, margins, sell-through rate, and reorder velocity — presented in one clean dashboard. No BI tool required. No analyst needed.",
        bullets: [
            { text: "Revenue & margin tracking", sub: "Daily, weekly, and monthly breakdowns" },
            { text: "Sell-through rate by SKU", sub: "Know your best and worst performers" },
            { text: "Custom report builder", sub: "Export to PDF, Excel, or GST portal" },
        ],
        metrics: [
            { label: "Reports available", value: "50+" },
            { label: "Data refresh", value: "Live" },
        ],
        illustration: (
            <svg viewBox="0 0 480 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="360" fill="#F4F4F4" />

                {/* Main dashboard card */}
                <rect x="24" y="24" width="432" height="312" fill="white" stroke="#EEEEEE" />

                {/* Top bar */}
                <rect x="24" y="24" width="432" height="40" fill="#F4F4F4" />
                <rect x="24" y="64" width="432" height="1" fill="#EEEEEE" />
                <rect x="40" y="38" width="80" height="6" rx="1" fill="#171A20" opacity="0.7" />
                <rect x="360" y="34" width="60" height="16" rx="2" fill="#3E6AE1" opacity="0.1" />
                <rect x="370" y="39" width="40" height="4" rx="1" fill="#3E6AE1" opacity="0.8" />

                {/* KPI row */}
                <rect x="40" y="80" width="92" height="56" fill="#F4F4F4" stroke="#EEEEEE" />
                <rect x="52" y="92" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="52" y="104" width="36" height="10" rx="1" fill="#171A20" opacity="0.8" />
                <rect x="52" y="120" width="44" height="4" rx="1" fill="#16A34A" opacity="0.8" />

                <rect x="144" y="80" width="92" height="56" fill="#F4F4F4" stroke="#EEEEEE" />
                <rect x="156" y="92" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="156" y="104" width="44" height="10" rx="1" fill="#171A20" opacity="0.8" />
                <rect x="156" y="120" width="36" height="4" rx="1" fill="#16A34A" opacity="0.8" />

                <rect x="248" y="80" width="92" height="56" fill="#F4F4F4" stroke="#EEEEEE" />
                <rect x="260" y="92" width="50" height="4" rx="1" fill="#5C5E62" opacity="0.6" />
                <rect x="260" y="104" width="28" height="10" rx="1" fill="#171A20" opacity="0.8" />
                <rect x="260" y="120" width="48" height="4" rx="1" fill="#DC2626" opacity="0.7" />

                <rect x="352" y="80" width="92" height="56" fill="#3E6AE1" opacity="0.06" stroke="#3E6AE1" strokeOpacity="0.2" />
                <rect x="364" y="92" width="50" height="4" rx="1" fill="#3E6AE1" opacity="0.6" />
                <rect x="364" y="104" width="40" height="10" rx="1" fill="#3E6AE1" opacity="0.9" />
                <rect x="364" y="120" width="44" height="4" rx="1" fill="#3E6AE1" opacity="0.5" />

                {/* Line chart area */}
                <rect x="40" y="152" width="248" height="100" fill="white" stroke="#EEEEEE" />
                <rect x="52" y="162" width="60" height="5" rx="1" fill="#171A20" opacity="0.6" />
                {/* Chart axes */}
                <line x1="60" y1="235" x2="268" y2="235" stroke="#EEEEEE" />
                <line x1="60" y1="215" x2="268" y2="215" stroke="#EEEEEE" strokeDasharray="2 2" />
                <line x1="60" y1="195" x2="268" y2="195" stroke="#EEEEEE" strokeDasharray="2 2" />
                {/* Line chart path */}
                <polyline points="60,228 100,220 140,210 180,214 220,200 260,192" stroke="#3E6AE1" strokeWidth="2" fill="none" />
                {/* Area fill */}
                <polygon points="60,228 100,220 140,210 180,214 220,200 260,192 260,235 60,235" fill="#3E6AE1" opacity="0.06" />
                {/* Data point */}
                <circle cx="260" cy="192" r="4" fill="#3E6AE1" />
                <rect x="240" y="180" width="36" height="14" rx="2" fill="#171A20" />
                <rect x="246" y="186" width="24" height="4" rx="1" fill="white" opacity="0.9" />

                {/* Donut chart placeholder */}
                <rect x="304" y="152" width="140" height="100" fill="white" stroke="#EEEEEE" />
                <rect x="316" y="162" width="50" height="5" rx="1" fill="#171A20" opacity="0.6" />
                {/* Donut rings */}
                <circle cx="374" cy="212" r="28" fill="none" stroke="#EEEEEE" strokeWidth="12" />
                <circle cx="374" cy="212" r="28" fill="none" stroke="#3E6AE1" strokeWidth="12" strokeDasharray="88 88" strokeDashoffset="88" transform="rotate(-90 374 212)" opacity="0.9" />
                <circle cx="374" cy="212" r="28" fill="none" stroke="#171A20" strokeWidth="12" strokeDasharray="44 132" strokeDashoffset="0" transform="rotate(-90 374 212)" opacity="0.15" />
                <rect x="362" y="208" width="24" height="6" rx="1" fill="#171A20" opacity="0.7" />

                {/* Bottom table */}
                <rect x="40" y="268" width="404" height="52" fill="white" stroke="#EEEEEE" />
                <rect x="40" y="268" width="404" height="18" fill="#F4F4F4" />
                <rect x="56" y="275" width="40" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
                <rect x="200" y="275" width="40" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
                <rect x="340" y="275" width="40" height="4" rx="1" fill="#5C5E62" opacity="0.5" />
                <rect x="40" y="286" width="404" height="1" fill="#EEEEEE" />
                <rect x="56" y="296" width="80" height="4" rx="1" fill="#171A20" opacity="0.6" />
                <rect x="200" y="296" width="48" height="4" rx="1" fill="#171A20" opacity="0.5" />
                <rect x="340" y="294" width="52" height="10" rx="10" fill="#DCFCE7" />
                <rect x="350" y="297" width="32" height="4" rx="1" fill="#16A34A" opacity="0.8" />
            </svg>
        ),
    },
];

const logos = ["Shopify", "Amazon", "WooCommerce", "Tally", "QuickBooks", "Razorpay", "Shiprocket", "Zoho"];

export default function FeaturesPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-ez-body">

            {/* ── Hero ── */}
            <section className="bg-ez-ash pt-12 pb-20 lg:pt-24 lg:pb-28 px-6 lg:px-10"
                style={{
                    background: "linear-gradient(180deg, #c8d6e5 0%, #dfe6ed 30%, #f0f0f0 70%, #ffffff 100%)"
                }}>
                <div className="max-w-345 mx-auto px-6 lg:px-10">
                    <div className="max-w-[780px] step-fade">
                        <span className="ez-micro-label text-ez-primary tracking-widest block mb-5">Platform Features</span>
                        <h1 className="text-[40px] sm:text-[56px] font-medium text-ez-heading leading-[1.1] tracking-tight mb-6">
                            Engineered for total business control
                        </h1>
                        <p className="text-ez-md sm:text-ez-lg text-ez-secondary leading-relaxed max-w-2xl mb-10">
                            Kubee combines inventory tracking, AI-powered insights, and order management into one brutally efficient platform — built for Indian SMBs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/signup" className="ez-btn ez-btn-primary h-11 px-7 text-ez-base">
                                Start Free Trial
                            </Link>
                            <Link href="/pricing" className="ez-btn ez-btn-secondary h-11 px-7 text-ez-base">
                                See Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats bar ── */}
            <div className="bg-white">
                <div className="max-w-[1383px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ez-border-ash">
                        {stats.map((s) => (
                            <div key={s.label} className="py-8 px-6 first:pl-0 last:pr-0">
                                <p className="text-[28px] font-medium text-ez-heading leading-none mb-1">{s.value}</p>
                                <p className="text-ez-xs text-ez-secondary mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Features ── */}
            <section className="max-w-[1383px] mx-auto px-6 lg:px-10">
                {features.map((feature, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={feature.id}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28 border-b border-ez-border last:border-0"
                        >
                            {/* Text */}
                            <div className={`order-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="ez-micro-label text-ez-secondary tracking-widest">{feature.eyebrow}</span>
                                    <span className="text-[10px] font-medium uppercase tracking-widest bg-ez-primary text-white px-2 py-0.5">
                                        {feature.badge}
                                    </span>
                                </div>

                                <h2 className="text-[30px] sm:text-[38px] font-medium text-ez-heading leading-tight tracking-tight mb-5">
                                    {feature.title}
                                </h2>
                                <p className="text-ez-base sm:text-ez-md text-ez-secondary leading-relaxed mb-8">
                                    {feature.description}
                                </p>

                                {/* Bullets */}
                                <ul className="space-y-5 mb-10">
                                    {feature.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 flex-shrink-0 bg-ez-primary/10 flex items-center justify-center mt-0.5">
                                                <svg className="w-3 h-3 text-ez-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="block text-ez-base text-ez-heading font-medium leading-snug">{bullet.text}</span>
                                                <span className="block text-ez-xs text-ez-muted mt-0.5">{bullet.sub}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* Inline metrics */}
                                <div className="flex gap-0 border border-ez-border">
                                    {feature.metrics.map((m, i) => (
                                        <div key={i} className={`flex-1 px-5 py-4 ${i < feature.metrics.length - 1 ? "border-r border-ez-border" : ""}`}>
                                            <p className="text-[22px] font-medium text-ez-heading leading-none">{m.value}</p>
                                            <p className="text-ez-xs text-ez-muted mt-1">{m.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Illustration */}
                            <div
                                className={`order-1 ${isEven ? "lg:order-2" : "lg:order-1"} w-full bg-ez-ash border border-ez-border aspect-[4/3] flex items-center justify-center overflow-hidden relative`}
                            >
                                {/* Corner label */}
                                <span className="absolute top-3 left-3 ez-micro-label text-ez-muted tracking-widest z-10">
                                    Preview
                                </span>
                                {feature.illustration}
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* ── Integration logos ── */}
            <div className="border-t border-b border-ez-border bg-ez-ash">
                <div className="max-w-[1383px] mx-auto px-6 lg:px-10 py-12">
                    <p className="ez-micro-label text-ez-muted tracking-widest text-center mb-8">Works with your existing tools</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                        {logos.map((logo) => (
                            <span key={logo} className="text-ez-sm font-medium text-ez-secondary opacity-60 hover:opacity-100 transition-opacity duration-ez">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom CTA ── */}
            <section className="border-t border-ez-border bg-ez-carbon px-6 lg:px-10 py-24 lg:py-32">
                <div className="max-w-345 mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="ez-micro-label text-white/40 tracking-widest block mb-5">Get Started</span>
                        <h2 className="text-[32px] sm:text-[44px] font-medium text-white leading-tight tracking-tight mb-6">
                            Ready to streamline your operations?
                        </h2>
                        <p className="text-ez-md text-white/50 leading-relaxed max-w-md">
                            Join thousands of modern businesses managing millions in inventory with Kubee. Free forever, upgrade when you&apos;re ready.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
                        <Link href="/signup" className="ez-btn ez-btn-primary h-12 px-8 text-ez-base min-w-[180px] justify-center">
                            Start Free Trial
                        </Link>
                        <Link
                            href="/contact"
                            className="h-12 px-8 flex items-center justify-center bg-transparent border border-white/20 text-white text-ez-base font-medium hover:bg-white/10 transition-[background-color] duration-ez outline-none min-w-[180px]"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}