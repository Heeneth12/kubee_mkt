import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/Kubee_logo.png";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/#features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ez-carbon text-white">
      <div className="max-w-345 mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <Link href="/" className="flex items-center outline-none">
                <Image src={logo} alt="Logo" width={36} height={36} />
                <span className="font-bold text-xl">Kubee</span>
              </Link>
            </div>
            <p className="text-sm text-white/50 max-w-50 leading-relaxed">
              Modern inventory management built for Indian businesses.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-10">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Kubee Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white">Made with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
