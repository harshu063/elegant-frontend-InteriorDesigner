"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

function Footerdemo() {

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand + Newsletter */}
          <div className="relative">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A96E] to-[#2C3E50] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17V9.5a7 7 0 0 1 14 0V17" />
                  <line x1="1" y1="17" x2="19" y2="17" />
                  <line x1="7" y1="17" x2="7" y2="13" />
                  <line x1="13" y1="17" x2="13" y2="13" />
                  <line x1="7" y1="13" x2="13" y2="13" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#2C3E50] dark:text-white leading-tight">Jay Interior</p>
                <p className="text-[10px] text-[#C9A96E] font-medium tracking-wider uppercase leading-tight">Design Studio</p>
              </div>
            </div>
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Premium interior design & turnkey projects across Mira Road, Borivali, Bhayandar, Dahisar & beyond. 10+ years. 300+ spaces transformed.
            </p>
            <h3 className="mb-2 text-base font-semibold">Start Your Project</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Book a free site visit — we'll assess your space and send a detailed proposal within 48 hours.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#2C3E50] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Free Quote <Send className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#C9A96E]/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block transition-colors hover:text-[#C9A96E]">Home</Link>
              <button
                onClick={() => {
                  const el = document.getElementById("about-section");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/";
                    setTimeout(() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" }), 300);
                  }
                }}
                className="block text-left w-full transition-colors hover:text-[#C9A96E]"
              >About Us</button>
              <Link to="/services" className="block transition-colors hover:text-[#C9A96E]">Services</Link>
              <Link to="/projects" className="block transition-colors hover:text-[#C9A96E]">Projects</Link>
              <Link to="/contact" className="block transition-colors hover:text-[#C9A96E]">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p className="font-medium text-foreground">Om Prakash Chauhan — Owner</p>
              <p>Gala No. 2, Opp. Kheteshwar Ashram</p>
              <p>Dachkun Fada, Kashi Meera</p>
              <p>Mira Road East — 401107</p>
              <p>Phone: <a href="tel:+919920904475" className="hover:text-[#C9A96E]">+91 99209 04475</a></p>
              <p>Email: <a href="mailto:jayinterior.miraroad@gmail.com" className="hover:text-[#C9A96E]">jayinterior.miraroad@gmail.com</a></p>
            </address>
          </div>

          {/* Social + Dark Mode */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#C9A96E] hover:text-white hover:border-[#C9A96E]">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Follow on Facebook</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#C9A96E] hover:text-white hover:border-[#C9A96E]">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Follow on Twitter</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#C9A96E] hover:text-white hover:border-[#C9A96E]">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Follow on Instagram</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#C9A96E] hover:text-white hover:border-[#C9A96E]">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Connect on LinkedIn</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Jay Interior. All rights reserved. Designing Mumbai since 2014.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-[#C9A96E]">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-[#C9A96E]">Terms of Service</a>
            <Link to="/contact" className="transition-colors hover:text-[#C9A96E]">Get a Quote</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
