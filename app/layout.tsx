import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    default: "Kubee — Inventory Management for Indian Businesses",
    template: "%s | Kubee",
  },
  description:
    "Real-time inventory tracking, AI-powered forecasting, and automated reordering. Built for Indian businesses to scale operations effortlessly.",
  metadataBase: new URL("https://kubee.in"),

  icons: {
  icon: [
    { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Kubee — Inventory Management for Indian Businesses",
    description: "Real-time inventory tracking, AI-powered forecasting, and automated reordering.",
    url: "https://kubee.in",
    siteName: "Kubee",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kubee Inventory Management",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kubee — Inventory Management",
    description: "Built for Indian businesses to scale operations effortlessly.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}