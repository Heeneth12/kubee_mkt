import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dashBoard from "@/assets/images/dashboard.png";


function DashboardMockup() {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 step-fade">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
        <div className="flex items-center gap-4 px-4 py-3 bg-[#f6f6f6] border-b border-gray-200">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          <div className="flex gap-4 ml-4 text-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>

          <div className="flex-1 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 py-1 px-3 bg-white border border-gray-300 rounded-sm text-[11px] text-gray-500">
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium tracking-tight">https://kubee.in</span>
            </div>
          </div>
          <div className="w-16" />
        </div>

        <div className="relative bg-gray-50">
          <Image
            src={dashBoard}
            alt="Kubee inventory management software dashboard showing real-time stock tracking and AI analytics"
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  // SEO: Structured Data (JSON-LD) for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kubee",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free tier available"
    },
    "description": "Modern inventory software for Indian businesses featuring real-time tracking, AI-powered forecasting, and automated reordering.",
    "url": "https://kubee.in"
  };

  return (
    <>
      {/* Inject Structured Data into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="overflow-hidden min-h-screen"
        style={{ background: "linear-gradient(180deg, #c8d6e5 0%, #dfe6ed 30%, #f0f0f0 70%, #ffffff 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 pt-24 md:pt-28 text-center">
          <h1 className="font-[600] text-ez-heading leading-[1.2] mb-5 text-[32px] md:text-[68px]">
            Modern inventory software<br className="hidden md:block" /> for Indian businesses
          </h1>

          <p className="text-[10px] md:text-[14px] lg:text-ez-md text-ez-secondary max-w-xl mx-auto leading-relaxed mb-8 px-4 md:px-0">
            Real-time tracking, AI-powered forecasting, and automated reordering.
            <br className="hidden md:block" />
            Built to scale your operations effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`${process.env.NEXT_PUBLIC_KUBEE_APP_URL}/auth/login`}
              target='_blank'
              rel="noopener noreferrer"
              aria-label="Get started with Kubee for free"
              className="ez-btn ez-btn-primary w-full sm:w-auto h-10 px-8 flex items-center justify-center gap-2 group/btn font-medium"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-ez" aria-hidden="true" />
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_KUBEE_APP_URL}/auth/login?booking=true`}
              target='_blank'
              rel="noopener noreferrer"
              aria-label="Book a demo of Kubee inventory software"
              className="ez-btn ez-surface border border-ez-ash w-full sm:w-auto h-10 px-8 flex items-center justify-center gap-2 group/btn font-medium"
            >
              Book a Demo
            </Link>
          </div>

          <h2 className="ez-micro-label my-5 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Inventory Management
          </h2>
        </div>

        <div className="px-4 md:px-6 pb-0 mt-8 md:mt-12 mb-6">
          <DashboardMockup />
        </div>
      </section>
    </>
  );
}