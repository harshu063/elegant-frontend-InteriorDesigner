import type { Metadata } from "next";
import { PremiumContact } from "@/components/ui/premium-contact";
import { Footerdemo } from "@/components/ui/footer-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jay Interior for a free consultation. Reach us via WhatsApp, email, or visit our Mumbai office.",
  openGraph: {
    title: "Contact Us | Jay Interior",
    description:
      "Get in touch with Jay Interior for a free consultation. Reach us via WhatsApp, email, or visit our Mumbai office.",
  },
};

export default function Contact() {
  return (
    <>
      <PremiumContact />
      <Footerdemo />
    </>
  );
}
