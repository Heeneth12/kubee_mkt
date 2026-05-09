import { ArrowRight, Check } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="font-sans ">
      <div className="max-w-345 mx-auto px-6 lg:px-12">

        {/* Main CTA Box */}
        <div className="p-6 md:p-16 flex flex-col items-center text-center relative overflow-hidden relative group">
          {/* Heading */}
          <h2 className="text-[40px] md:text-[56px] font-medium text-ez-heading leading-[1.1] tracking-tight mb-6">
            Take absolute control of your inventory today.
          </h2>

          {/* Subtext */}
          <p className="text-ez-base text-ez-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            Join thousands of small and medium businesses. Streamline your inventory and connect your entire distribution network on one unified ledger.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <a href="#start-trial" className="ez-btn ez-btn-primary w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 group/btn font-medium">
              Start your free trial
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-ez" />
            </a>

            <a href="#book-demo" className="bg-ez-ash w-full sm:w-auto h-12 px-8 flex items-center justify-center border border-ez-border bg-transparent text-ez-heading font-medium hover:bg-ez-ash hover:border-ez-primary transition-all duration-ez">
              Book a Demo
            </a>
          </div>

          {/* Trust Indicators / Micro-copy */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-ez-sm text-ez-secondary font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-ez-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-ez-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-ez-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}