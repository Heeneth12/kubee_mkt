import Image from "next/image";
import razorpay from "@/assets/svg/razorpay-icon.svg";
import stripe from "@/assets/svg/stripe-icon.svg";
import gemini from "@/assets/svg/gemini-icon.svg";

export default function Integrations() {
  return (
    <section className="w-full bg-white py-16 md:py-24 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

        <p className="ez-micro-label mb-4">Integrations</p>
        <h2 className="font-medium text-ez-heading text-center mb-14" style={{ fontSize: "32px", lineHeight: "1.2" }}>
          Seamlessly connected to your stack
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-20">

          {/* Razorpay */}
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-[filter,opacity] duration-ez cursor-pointer">
            <Image src={razorpay} alt="Razorpay" width={120} height={50} className="shrink-0" />
          </div>

          {/* Stripe */}
          <div className="flex items-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-[filter,opacity] duration-ez cursor-pointer">
            <Image src={stripe} alt="Stripe" width={120} height={50} className="h-8 w-auto shrink-0" />
          </div>

          {/* Google Gemini */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-[filter,opacity] duration-ez cursor-pointer">
            <Image src={gemini} alt="Gemini" width={32} height={28} className="shrink-0" />
            <span className="font-medium text-ez-xl text-ez-heading">Gemini</span>
          </div>

          {/* Custom LLMs */}
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-[filter,opacity] duration-ez cursor-pointer">
            <div className="flex flex-col leading-none">
              <span className="ez-micro-label mb-0.5">Custom</span>
              <span className="font-medium text-ez-lg text-ez-heading">LLM APIs</span>
            </div>
          </div>

          {/* GST Network */}
          <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-[filter,opacity] duration-ez cursor-pointer">
            <div className="flex flex-col leading-none">
              <span className="font-medium text-ez-xl text-ez-heading">GST</span>
              <span className="ez-micro-label mt-0.5">Network</span>
            </div>
          </div>

          {/* e-Way Bill */}
          <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-[filter,opacity] duration-ez cursor-pointer">
            <div className="flex flex-col leading-none">
              <span className="font-medium text-ez-lg text-ez-heading">E-Way Bill</span>
              <span className="ez-micro-label mt-0.5">System</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
