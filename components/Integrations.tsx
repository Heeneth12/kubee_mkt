
interface IconItem {
  name: string;
  iconUrl: string;
}

interface IntegrationRowProps {
  label: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  linkHref: string;
  linkLabel?: string;
  icons: IconItem[];
  scrollDirection?: 'left' | 'right';
}

function AppIconCard({ name, iconUrl }: IconItem) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 text-center w-[160px] h-[160px] shrink-0 border border-ez-border transition-all duration-ez hover:bg-ez-ash hover:border-ez-primary group mx-2">
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-ez-white border border-ez-border transition-colors duration-ez group-hover:border-ez-primary">
        {/* Replace this SVG with actual <Image> when you have the logos */}
        <svg className="w-7 h-7 text-ez-muted group-hover:text-ez-primary transition-colors duration-ez" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-ez-sm font-medium text-ez-heading leading-snug">
        {name}
      </p>
    </div>
  );
}

function IntegrationRow({ label, titlePrefix, titleHighlight, description, linkHref, linkLabel, icons, scrollDirection = 'left' }: IntegrationRowProps) {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="bg-[#f1f5fa] border border-ez-border flex flex-col lg:flex-row mb-8 last:mb-0 overflow-hidden rounded">

      {/* Left: Text Content */}
      <div className="w-full lg:w-[45%] p-8 lg:p-14 flex flex-col justify-center relative z-10">
        {/* <div className="mb-8">
          <span className="px-3 py-1.5 border border-ez-border bg-ez-ash text-ez-xs font-medium text-ez-heading uppercase tracking-[0.1em] inline-block">
            {label}
          </span>
        </div> */}

        <h3 className="text-[26px] md:text-[32px] font-medium text-ez-heading leading-tight tracking-tight mb-6">
          {titlePrefix} <br className="hidden sm:block" />
          <span className="text-ez-primary">{titleHighlight}</span>
        </h3>

        <p className="text-ez-base text-ez-secondary leading-relaxed mb-10 max-w-md">
          {description}
        </p>

        <div className="flex gap-4 items-center">
          <a href="#" className="text-ez-primary hover:underline text-sm font-medium">
            View more →
          </a>
        </div>
      </div>

      {/* Right: Auto-Scrolling Marquee Zone */}
      <div className="lg:w-[55%] border-t lg:border-t-0 lg:border-l border-ez-border relative overflow-hidden flex flex-col justify-center py-12 lg:py-0">

        {/* Fade Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ez-ash to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ez-ash to-transparent z-10 pointer-events-none" />

        {/* Scroller Track */}
        <div className={`flex w-max ${scrollDirection === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} hover:[animation-play-state:paused] cursor-pointer`}>
          {duplicatedIcons.map((icon, index) => (
            <AppIconCard key={`${icon.name}-${index}`} name={icon.name} iconUrl={icon.iconUrl} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default function IntegrationShowcase() {
  // Inventory Management specific integrations
  const paymentAndComplianceIcons: IconItem[] = [
    { name: "Razorpay", iconUrl: "mock_razorpay.png" },
    { name: "Stripe", iconUrl: "mock_stripe.png" },
    { name: "GST Portal", iconUrl: "mock_gst.png" },
    { name: "Tally Prime", iconUrl: "mock_tally.png" },
    { name: "Zoho Books", iconUrl: "mock_zohobooks.png" },
    { name: "QuickBooks", iconUrl: "mock_quickbooks.png" },
    { name: "PayU", iconUrl: "mock_payu.png" },
  ];

  const retailAndCommsIcons: IconItem[] = [
    { name: "WhatsApp", iconUrl: "mock_whatsapp.png" },
    { name: "Square POS", iconUrl: "mock_pos.png" },
    { name: "Shopify", iconUrl: "mock_shopify.png" },
    { name: "WooCommerce", iconUrl: "mock_woo.png" },
    { name: "Amazon", iconUrl: "mock_amazon.png" },
    { name: "Twilio", iconUrl: "mock_twilio.png" },
    { name: "Shiprocket", iconUrl: "mock_shiprocket.png" },
  ];

  return (
    <section className="bg-white font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
                @keyframes marqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marqueeRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marqueeLeft 35s linear infinite;
                }
                .animate-marquee-right {
                    animation: marqueeRight 35s linear infinite;
                }
            `}} />

      <div className="max-w-345 mx-auto px-6 lg:px-12 py-20 lg:py-28">

        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="text-[40px] text-ez-primary md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
              Expand your ecosystem.<br />
              <span className='text-ez-heading'>Connect your tools.</span>
            </h2>
            <p className="text-ez-base text-ez-secondary leading-relaxed max-w-xl">
              Connect Kubee seamlessly with your favorite payment gateways, tax portals, and messaging apps. Keep your inventory synced across physical counters and digital storefronts in real-time.
            </p>
          </div>
        </div>

        {/* Integration Rows */}
        <div className="flex flex-col">
          <IntegrationRow
            label="Payments & Compliance"
            titlePrefix="Automate your"
            titleHighlight="financial workflows"
            description="Push invoices directly to the GST portal for E-invoicing. Reconcile B2B and B2C payments instantly using native Stripe and Razorpay integrations."
            linkHref="#finance-integrations"
            icons={paymentAndComplianceIcons}
            scrollDirection="left"
          />

          <IntegrationRow
            label="Retail & Comms"
            titlePrefix="Omnichannel syncing"
            titleHighlight="and live alerts"
            description="Trigger automated low-stock and dispatch alerts directly to your clients via WhatsApp. Sync your offline POS hardware sales with online Shopify orders seamlessly."
            linkHref="#retail-integrations"
            icons={retailAndCommsIcons}
            scrollDirection="right" // Reverses the scroll direction for visual variety
          />
        </div>

      </div>
    </section>
  );
}