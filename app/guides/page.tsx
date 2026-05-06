"use client";

import { useState } from "react";
import { guides, type GuideBlock, type GuideEntry } from "@/data/guides";

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

const guideMap: Record<string, GuideEntry | undefined> = Object.fromEntries(guides.map((g) => [g.key, g]));

export default function GuidesPage() {
    const [activeItem, setActiveItem] = useState<string>("Overview");
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ Inventory: true });

    const content = guideMap[activeItem] ?? guideMap["Overview"];
    if (!content) return null;

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
                                            {sec.blocks[0]?.type === "paragraph" && (
                                                <p className="text-ez-base text-ez-body leading-normal mb-4">
                                                    {sec.blocks[0].text}
                                                </p>
                                            )}
                                            <a href="/signup" className="inline-flex items-center text-ez-sm font-medium text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none">
                                                Sign up for a live demo
                                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                            {(() => {
                                                const rest = sec.blocks[0]?.type === "paragraph" ? sec.blocks.slice(1) : sec.blocks;
                                                return rest.length > 0 ? (
                                                    <div className="mt-4">
                                                        <BlockRenderer blocks={rest} />
                                                    </div>
                                                ) : null;
                                            })()}
                                        </div>

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
                                    <BlockRenderer blocks={sec.blocks} />
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

function BlockRenderer({ blocks }: { blocks: GuideBlock[] }) {
    return (
        <div className="space-y-4">
            {blocks.map((block, i) => <Block key={i} block={block} />)}
        </div>
    );
}

function Block({ block }: { block: GuideBlock }) {
    if (block.type === "paragraph") {
        return <p className="text-ez-base text-ez-body leading-normal">{block.text}</p>;
    }

    if (block.type === "list") {
        const Tag = block.ordered ? "ol" : "ul";
        return (
            <Tag className={`space-y-2 text-ez-base text-ez-body leading-normal pl-5 ${block.ordered ? "list-decimal" : "list-disc"}`}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
            </Tag>
        );
    }

    if (block.type === "callout") {
        const styles = {
            info: "bg-blue-50 border-blue-200 text-blue-800",
            tip: "bg-green-50 border-green-200 text-green-800",
            warning: "bg-amber-50 border-amber-200 text-amber-800",
        };
        const icons = { info: "ℹ", tip: "💡", warning: "⚠" };
        return (
            <aside className={`flex gap-3 border rounded px-4 py-3 text-ez-sm ${styles[block.variant]}`}>
                <span className="shrink-0">{icons[block.variant]}</span>
                <p>{block.text}</p>
            </aside>
        );
    }

    if (block.type === "steps") {
        return (
            <ol className="space-y-5">
                {block.items.map((step, j) => (
                    <li key={j} className="flex gap-4">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-ez-primary text-white flex items-center justify-center text-ez-sm font-medium">
                            {j + 1}
                        </div>
                        <div>
                            <p className="font-medium text-ez-heading text-ez-base">{step.title}</p>
                            <p className="text-ez-body text-ez-sm mt-1">{step.body}</p>
                        </div>
                    </li>
                ))}
            </ol>
        );
    }

    if (block.type === "link-card") {
        return (
            <a
                href={block.href}
                className="flex items-center justify-between px-4 py-3 border border-ez-border hover:border-ez-primary hover:bg-ez-ash rounded transition-colors duration-ez group"
            >
                <div>
                    <p className="font-medium text-ez-heading text-ez-base group-hover:text-ez-primary">{block.label}</p>
                    {block.description && (
                        <p className="text-ez-sm text-ez-muted mt-0.5">{block.description}</p>
                    )}
                </div>
                <svg className="w-4 h-4 text-ez-muted group-hover:text-ez-primary shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        );
    }

    if (block.type === "image") {
        return (
            <figure className="space-y-2">
                <img src={block.src} alt={block.alt} className="w-full rounded border border-ez-border" />
                {block.caption && (
                    <figcaption className="text-ez-sm text-ez-muted text-center">{block.caption}</figcaption>
                )}
            </figure>
        );
    }

    if (block.type === "video") {
        const isYouTube = block.src.includes("youtube.com") || block.src.includes("youtu.be");
        if (isYouTube) {
            const videoId = block.src.includes("youtu.be")
                ? block.src.split("youtu.be/")[1].split(/[?#]/)[0]
                : (() => { try { return new URL(block.src).searchParams.get("v") ?? ""; } catch { return ""; } })();
            return (
                <div className="aspect-video w-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={block.title ?? "Video"}
                        className="w-full h-full rounded border border-ez-border"
                        allowFullScreen
                    />
                </div>
            );
        }
        return (
            <video controls className="w-full rounded border border-ez-border">
                <source src={block.src} />
            </video>
        );
    }

    return null;
}
