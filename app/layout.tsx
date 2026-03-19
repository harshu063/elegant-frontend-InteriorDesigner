import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/ui/navbar-1";
import { Footerdemo } from "@/components/ui/footer-section";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jay-interior.pages.dev"),
  title: {
    default: "Jay Interior – Premium Interior Design in Mumbai",
    template: "%s | Jay Interior",
  },
  description:
    "Jay Interior delivers residential, commercial, and turnkey interior design services across Mumbai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black">
        {/* FIXED NAVBAR */}
        <Navbar1 />

        {/* MAIN CONTENT */}
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footerdemo />
      </body>
    </html>
  );
}