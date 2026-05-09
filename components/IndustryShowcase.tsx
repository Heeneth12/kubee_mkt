'use client';
import { useState } from 'react';
import Image from 'next/image';
import warehouseImg from '@/assets/images/warehouse_1.png';
import medicineImg from '@/assets/images/medicine.png';
import posImg from '@/assets/images/pos.png';
import distributorImg from '@/assets/images/distributor.png';

import {
    Package,
    Activity,
    MonitorSmartphone,
    Truck,
    ArrowRight
} from 'lucide-react';

const industries = [
    {
        id: "warehouse",
        label: "Warehouses",
        titlePrefix: "Empower your",
        titleHighlight: "warehouse operations",
        description: "Streamline inventory management with a unified ledger, enabling real-time bin tracking, automated dispatch routing, and seamless stock counts while minimizing shrinkage.",
        icon: Package,
        image: warehouseImg,
        clients: ["SafeX Logistics", "PrimeVault", "Metro Storage"]
    },
    {
        id: "hospital",
        label: "Hospitals",
        titlePrefix: "Empower your",
        titleHighlight: "healthcare facility",
        description: "Manage critical medical supplies with zero downtime. Track expiry dates, monitor department-wise consumption, and automate reordering for life-saving inventory.",
        icon: Activity,
        image: medicineImg,
        clients: ["CityCare Health", "Apex Med", "LifeLine Plus"]
    },
    {
        id: "pos",
        label: "Point of Sale (POS)",
        titlePrefix: "Empower your",
        titleHighlight: "retail billing counters",
        description: "Accelerate checkouts with a high-speed POS interface. Sync offline sales instantly with your central inventory, handle complex promotions, and eliminate billing queues.",
        icon: MonitorSmartphone,
        image: posImg,
        clients: ["FreshMart", "Urban Style", "Daily Needs"]
    },
    {
        id: "distributor",
        label: "Distributors",
        titlePrefix: "Empower your",
        titleHighlight: "distribution network",
        description: "Handle bulk orders and secondary sales effortlessly. Map delivery routes, manage B2B credit limits, and automate invoicing for your entire dealer network.",
        icon: Truck,
        image: distributorImg,
        clients: ["Global FMCG", "Vanguard Dist.", "Peak Supply"]
    },
];

export default function IndustryShowcase() {
    const [activeTab, setActiveTab] = useState(industries[0].id);

    const activeData = industries.find(ind => ind.id === activeTab) || industries[0];
    const ActiveIcon = activeData.icon;

    return (
        <section className="bg-[#f1f5fa] font-sans">
            <div className="max-w-345 mx-auto px-6 lg:px-12 py-20 lg:py-28">

                {/* Header Section */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-[40px] text-ez-primary md:text-[56px] font-medium leading-[1.1] tracking-tight">
                            Powering every industry.<br />
                            <span className='text-ez-heading'>Powering all disruptors.</span>
                        </h2>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-6 md:gap-8 border-b border-ez-border overflow-x-auto no-scrollbar mb-4">
                    {industries.map((ind) => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveTab(ind.id)}
                            className={` text-ez-sm font-medium border-b-2 transition-colors duration-ez whitespace-nowrap outline-none ${activeTab === ind.id
                                ? 'border-ez-primary text-ez-primary'
                                : 'border-transparent text-ez-secondary hover:text-ez-heading hover:border-ez-subtle'
                                }`}
                        >
                            {ind.label}
                        </button>
                    ))}
                </div>

                {/* Content Box */}
                <div className="bg-white border border-ez-border flex flex-col lg:flex-row ">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-[66%] p-8 lg:p-14 flex flex-col justify-center">

                        <h3 className="text-[32px] md:text-[40px] font-medium text-ez-heading leading-tight tracking-tight mb-6">
                            {activeData.titlePrefix} <br className="hidden sm:block" />
                            <span className="text-ez-primary">{activeData.titleHighlight}</span>
                        </h3>

                        <p className="text-ez-base text-ez-secondary leading-relaxed mb-10 max-w-lg">
                            {activeData.description}
                        </p>

                        {/* Trusted By / Clients */}
                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            {activeData.clients.map((client, idx) => (
                                <div key={idx} className="px-3 py-1.5 border border-ez-border bg-ez-ash text-ez-xs font-medium text-ez-heading uppercase tracking-[0.1em]">
                                    {client}
                                </div>
                            ))}
                            <span className="text-ez-xs text-ez-secondary font-medium tracking-wide">
                                + 10,000 others
                            </span>
                        </div>

                        <div>
                            <button className="ez-btn ez-btn-primary min-w-[180px] h-12 flex items-center justify-center gap-2 group">
                                See Solutions
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-ez" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Technical Blueprint Visual (Replacing the photo) */}
                    <div className="lg:w-[34%] bg-ez-ash border-t lg:border-t-0 lg:border-l border-ez-border relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                        <div className="relative w-full h-full">
                            <Image
                                src={activeData.image}
                                alt={activeData.label}
                                fill // 3. Use 'fill' for responsive containers
                                className="object-contain"
                                priority // 4. Helps with LCP performance
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}