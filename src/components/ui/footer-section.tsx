"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter, Sofa } from "lucide-react"

function Footerdemo() {

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand + Newsletter */}
          <div className="relative">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#88734C] to-[#202e44] flex items-center justify-center">
                <Sofa className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#202e44] dark:text-white leading-tight">Maa Ashapura</p>
                <p className="text-[10px] text-[#88734C] font-medium tracking-wider uppercase leading-tight">Furniture</p>
              </div>
            </div>
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Direct from our workshop in Sojat Road, Rajasthan. 15+ years of heritage craftsmanship in teak, sheesham & mango wood. No middlemen. No MDF. No shortcuts.
            </p>
            <h3 className="mb-3 text-base font-semibold">Stay Updated</h3>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#88734C] text-white hover:bg-[#202e44] transition-colors"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#88734C]/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block transition-colors hover:text-[#88734C]">Home</Link>
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
                className="block text-left w-full transition-colors hover:text-[#88734C]"
              >About Us</button>
              <Link to="/services" className="block transition-colors hover:text-[#88734C]">Services</Link>
              <Link to="/projects" className="block transition-colors hover:text-[#88734C]">Projects</Link>
              <Link to="/contact" className="block transition-colors hover:text-[#88734C]">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p className="font-medium text-foreground">Heera Lal — Owner</p>
              <p>Char Bhuja Mandir, Musaliya</p>
              <p>Sojat Road, Rajasthan — 306103</p>
              <p>Phone: <a href="tel:+919928859926" className="hover:text-[#88734C]">+91 99288 59926</a></p>
              <p>Phone: <a href="tel:+918239209231" className="hover:text-[#88734C]">+91 82392 09231</a></p>
              <p>Email: <a href="mailto:maaashapurafurniture@gmail.com" className="hover:text-[#88734C]">maaashapurafurniture@gmail.com</a></p>
            </address>
          </div>

          {/* Social + Dark Mode */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#88734C] hover:text-white hover:border-[#88734C]">
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
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#88734C] hover:text-white hover:border-[#88734C]">
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
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#88734C] hover:text-white hover:border-[#88734C]">
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
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-[#88734C] hover:text-white hover:border-[#88734C]">
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
            © 2026 Maa Ashapura Furniture. All rights reserved. Crafted with ❤️ in Rajasthan.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-[#88734C]">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-[#88734C]">Terms of Service</a>
            <Link to="/contact" className="transition-colors hover:text-[#88734C]">Get a Quote</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
