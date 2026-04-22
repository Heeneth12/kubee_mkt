import Image from "next/image";
import razorpay from "@/assets/svg/razorpay-icon.svg";
import stripe from "@/assets/svg/stripe-icon.svg";
import gemini from "@/assets/svg/gemini-icon.svg";

export default function NewIntegrations() {
    return (
        <section className="w-full bg-white py-16 md:py-24 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 md:mb-16 tracking-tight text-center">
                    Seamlessly connected to your stack
                </h2>

                {/* Logos Container */}
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-12 md:gap-x-14 lg:gap-x-16">

                    {/* Razorpay */}
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer">
                        <Image src={razorpay} alt="Razorpay" width={120} height={50} className="shrink-0" />
                        <span className="text-[22px] font-bold text-[#02042B] tracking-tight"></span>
                    </div>

                    {/* Stripe */}
                    <div className="flex items-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer">
                        <Image src={stripe} alt="Stripe" width={120} height={50} className="h-8 w-auto shrink-0" />
                    </div>

                    {/* Google Gemini */}
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer">
                        <Image src={gemini} alt="Gemini" width={32} height={28} className="shrink-0" />
                        <span className="text-[21px] font-medium text-[#1F1F1F] tracking-tight">Gemini</span>
                    </div>

                    {/* Custom LLMs */}
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer">
                        <div className="flex flex-col leading-none">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Custom</span>
                            <span className="text-[16px] font-bold text-slate-900 tracking-tight">LLM APIs</span>
                        </div>
                    </div>

                    {/* GST Portal */}
                    <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer">
                        <div className="flex flex-col leading-none">
                            <span className="text-[20spx] font-bold text-[#0A3D91] tracking-wide uppercase">GST</span>
                            <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-tight">Network</span>
                        </div>
                    </div>

                    {/* e-Way Bill */}
                    <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer">
                        <div className="flex flex-col leading-none">
                            <span className="text-[15px] font-bold text-slate-800">E-Way Bill</span>
                            <span className="text-[10px] text-slate-500 font-semibold tracking-wider mt-0.5 uppercase">System</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}