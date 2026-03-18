"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ChevronDown, ArrowRight, Layers, Home, Sofa, Lightbulb, Grid3X3, Building2 } from "lucide-react"

// --- Dropdown data ---
const servicesDropdown = [
  { icon: Home,      label: "Residential Interiors",    href: "/services" },
  { icon: Building2, label: "Commercial Spaces",        href: "/services" },
  { icon: Grid3X3,   label: "Modular Kitchen & Wardrobe", href: "/services" },
  { icon: Lightbulb, label: "False Ceiling & Lighting", href: "/services" },
  { icon: Sofa,      label: "Custom Furniture",         href: "/services" },
  { icon: Layers,    label: "Turnkey Projects",         href: "/services" },
]

const projectsDropdown = [
  { label: "Residential Projects",   href: "/projects" },
  { label: "Commercial Interiors",   href: "/projects" },
  { label: "Hospitality Spaces",     href: "/projects" },
  { label: "Office Fit-Outs",        href: "/projects" },
  { label: "Before & After",         href: "/projects" },
]

// --- Dropdown panel ---
function DropdownPanel({
  children,
  isOpen,
}: {
  children: React.ReactNode
  isOpen: boolean
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-xl border border-[#2C3E50]/10 p-3 z-50"
        >
          {/* Triangle pointer */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
            <div className="w-3 h-3 bg-white border-l border-t border-[#2C3E50]/10 rotate-45 mx-auto mt-1" />
          </div>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const isActive = (path: string) => pathname === path

  return (
    <>
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#2C3E50]/10 shadow-sm" ref={navRef}>
      <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A96E] to-[#2C3E50] flex items-center justify-center shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17V9.5a7 7 0 0 1 14 0V17" />
              <line x1="1" y1="17" x2="19" y2="17" />
              <line x1="7" y1="17" x2="7" y2="13" />
              <line x1="13" y1="17" x2="13" y2="13" />
              <line x1="7" y1="13" x2="13" y2="13" />
            </svg>
          </motion.div>
          <div>
            <p className="text-[14px] font-bold text-[#2C3E50] leading-tight tracking-wide">Jay Interior</p>
            <p className="text-[10px] text-[#C9A96E] font-medium tracking-widest uppercase leading-tight">Design Studio</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive("/") ? "text-[#C9A96E] bg-[#C9A96E]/10" : "text-[#2C3E50]/75 hover:text-[#2C3E50] hover:bg-[#2C3E50]/[0.06]"
            }`}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/services") ? "text-[#C9A96E] bg-[#C9A96E]/10" : "text-[#2C3E50]/75 hover:text-[#2C3E50] hover:bg-[#2C3E50]/[0.06]"
              }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>

            <DropdownPanel isOpen={activeDropdown === "services"}>
              <div className="grid grid-cols-2 gap-1">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-[#2C3E50]/75 hover:bg-[#C9A96E]/10 hover:text-[#C9A96E] transition-colors group"
                  >
                    <item.icon size={14} className="text-[#C9A96E] shrink-0" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-[#2C3E50]/10">
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#C9A96E] hover:text-[#2C3E50] transition-colors py-1"
                >
                  View all services <ArrowRight size={12} />
                </Link>
              </div>
            </DropdownPanel>
          </div>

          {/* Projects dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/projects") ? "text-[#C9A96E] bg-[#C9A96E]/10" : "text-[#2C3E50]/75 hover:text-[#2C3E50] hover:bg-[#2C3E50]/[0.06]"
              }`}
            >
              Projects
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === "projects" ? "rotate-180" : ""}`}
              />
            </button>

            <DropdownPanel isOpen={activeDropdown === "projects"}>
              <div className="space-y-0.5">
                {projectsDropdown.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-[#2C3E50]/75 hover:bg-[#C9A96E]/10 hover:text-[#C9A96E] transition-colors group"
                  >
                    <span className="font-medium">{item.label}</span>
                    <ArrowRight size={12} className="text-[#2C3E50]/25 group-hover:text-[#C9A96E] transition-colors" />
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-[#2C3E50]/10">
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#C9A96E] hover:text-[#2C3E50] transition-colors py-1"
                >
                  View all projects <ArrowRight size={12} />
                </Link>
              </div>
            </DropdownPanel>
          </div>

          {/* About */}
          <button
            onClick={() => {
              const el = document.getElementById("about-section")
              if (el) {
                el.scrollIntoView({ behavior: "smooth" })
              } else {
                router.push("/")
                setTimeout(() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" }), 150)
              }
            }}
            className="px-3 py-2 text-sm font-medium text-[#2C3E50]/75 hover:text-[#2C3E50] hover:bg-[#2C3E50]/[0.06] rounded-lg transition-colors"
          >
            About
          </button>

          {/* Contact */}
          <Link
            href="/contact"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive("/contact") ? "text-[#C9A96E] bg-[#C9A96E]/10" : "text-[#2C3E50]/75 hover:text-[#2C3E50] hover:bg-[#2C3E50]/[0.06]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-[#C9A96E] rounded-full hover:bg-[#2C3E50] transition-colors shadow-sm"
          >
            Free Consultation
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden flex items-center p-2 rounded-lg hover:bg-[#2C3E50]/[0.06]"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-6 w-6 text-[#2C3E50]" /> : <Menu className="h-6 w-6 text-[#2C3E50]" />}
        </motion.button>
      </div>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[60] overflow-y-auto md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#2C3E50]/10">
              <div className="flex items-center gap-2.5">
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
                  <p className="text-[14px] font-bold text-[#2C3E50] tracking-wide">Jay Interior</p>
                  <p className="text-[10px] text-[#C9A96E] font-medium tracking-widest uppercase">Design Studio</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-[#2C3E50]/[0.06]">
                <X className="h-5 w-5 text-[#2C3E50]/75" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-1">
              <Link href="/" className="flex items-center px-4 py-3 text-base font-medium text-[#2C3E50] rounded-xl hover:bg-[#2C3E50]/[0.04]" onClick={() => setIsOpen(false)}>Home</Link>

              {/* Mobile Services accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#2C3E50] rounded-xl hover:bg-[#2C3E50]/[0.04]"
                  onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 space-y-0.5">
                        {servicesDropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#2C3E50]/75 rounded-lg hover:bg-[#C9A96E]/10 hover:text-[#C9A96E]"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon size={14} className="text-[#C9A96E]" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Projects accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#2C3E50] rounded-xl hover:bg-[#2C3E50]/[0.04]"
                  onClick={() => setMobileExpanded(mobileExpanded === "projects" ? null : "projects")}
                >
                  Projects
                  <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "projects" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "projects" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 space-y-0.5">
                        {projectsDropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center px-4 py-2.5 text-sm text-[#2C3E50]/75 rounded-lg hover:bg-[#C9A96E]/10 hover:text-[#C9A96E]"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                className="flex items-center w-full text-left px-4 py-3 text-base font-medium text-[#2C3E50] rounded-xl hover:bg-[#2C3E50]/[0.04]"
                onClick={() => {
                  setIsOpen(false)
                  const el = document.getElementById("about-section")
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" })
                  } else {
                    router.push("/")
                    setTimeout(() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" }), 150)
                  }
                }}
              >About</button>
              <Link href="/contact" className="flex items-center px-4 py-3 text-base font-medium text-[#2C3E50] rounded-xl hover:bg-[#2C3E50]/[0.04]" onClick={() => setIsOpen(false)}>Contact</Link>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3.5 text-base font-semibold text-white bg-[#C9A96E] rounded-2xl hover:bg-[#2C3E50] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { Navbar1 }
