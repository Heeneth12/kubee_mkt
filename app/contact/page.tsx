import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Kubee team. We're here to help Indian businesses manage inventory better.",
};

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "hello@kubee.in",
    href: "mailto:hello@kubee.in",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  {
    icon: "📍",
    label: "Office",
    value: "Hyderabad, Telangana, India",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactForm />
    </>
  );
}
