"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ChevronDown, ArrowRight, Sofa, Building2, Ruler, PaintBucket, Pen, Home } from "lucide-react"

// --- Dropdown data ---
const servicesDropdown = [
  { icon: Sofa, label: "Living Room Furniture", href: "/services" },
  { icon: Home, label: "Bedroom Sets", href: "/services" },
  { icon: Ruler, label: "Custom Furniture", href: "/services" },
  { icon: PaintBucket, label: "Wooden Décor", href: "/services" },
  { icon: Building2, label: "Office Furniture", href: "/services" },
  { icon: Pen, label: "Kitchen Cabinets", href: "/services" },
]

const projectsDropdown = [
  { label: "Residential Projects", href: "/projects" },
  { label: "Commercial Projects", href: "/projects" },
  { label: "Hospitality Projects", href: "/projects" },
  { label: "Office Fitouts", href: "/projects" },
  { label: "Heritage Restorations", href: "/projects" },
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
          className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-xl border border-[#202e44]/10 p-3 z-50"
        >
          {/* Triangle pointer */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
            <div className="w-3 h-3 bg-white border-l border-t border-[#202e44]/10 rotate-45 mx-auto mt-1" />
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
  const location = useLocation()
  const navigate = useNavigate()
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close dropdown when navigating
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  // Click outside to close
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

  const isActive = (path: string) => location.pathname === path

  return (
    <>
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#202e44]/10 shadow-sm" ref={navRef}>
      <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#88734C] to-[#202e44] flex items-center justify-center shadow-sm"
          >
            <Sofa className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <p className="text-[13px] font-bold text-[#202e44] leading-tight">Maa Ashapura</p>
            <p className="text-[10px] text-[#88734C] font-medium tracking-wider uppercase leading-tight">Furniture</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Home */}
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive("/") ? "text-[#88734C] bg-[#88734C]/10" : "text-[#202e44]/75 hover:text-[#202e44] hover:bg-[#202e44]/[0.06]"
            }`}
          >
            Home
          </Link>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/services") ? "text-[#88734C] bg-[#88734C]/10" : "text-[#202e44]/75 hover:text-[#202e44] hover:bg-[#202e44]/[0.06]"
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
                    to={item.href}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-[#202e44]/75 hover:bg-[#88734C]/10 hover:text-[#88734C] transition-colors group"
                  >
                    <item.icon size={14} className="text-[#88734C] shrink-0" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-[#202e44]/10">
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#88734C] hover:text-[#202e44] transition-colors py-1"
                >
                  View all services <ArrowRight size={12} />
                </Link>
              </div>
            </DropdownPanel>
          </div>

          {/* Projects with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/projects") ? "text-[#88734C] bg-[#88734C]/10" : "text-[#202e44]/75 hover:text-[#202e44] hover:bg-[#202e44]/[0.06]"
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
                    to={item.href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-[#202e44]/75 hover:bg-[#88734C]/10 hover:text-[#88734C] transition-colors group"
                  >
                    <span className="font-medium">{item.label}</span>
                    <ArrowRight size={12} className="text-[#202e44]/25 group-hover:text-[#88734C] transition-colors" />
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-[#202e44]/10">
                <Link
                  to="/projects"
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#88734C] hover:text-[#202e44] transition-colors py-1"
                >
                  View all projects <ArrowRight size={12} />
                </Link>
              </div>
            </DropdownPanel>
          </div>

          {/* About */}
          <button
            onClick={() => {
              const el = document.getElementById("about-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/");
                setTimeout(() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" }), 150);
              }
            }}
            className="px-3 py-2 text-sm font-medium text-[#202e44]/75 hover:text-[#202e44] hover:bg-[#202e44]/[0.06] rounded-lg transition-colors"
          >
            About
          </button>

          {/* Contact */}
          <Link
            to="/contact"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive("/contact") ? "text-[#88734C] bg-[#88734C]/10" : "text-[#202e44]/75 hover:text-[#202e44] hover:bg-[#202e44]/[0.06]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-[#88734C] rounded-full hover:bg-[#202e44] transition-colors shadow-sm"
          >
            Get Quote
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden flex items-center p-2 rounded-lg hover:bg-[#202e44]/[0.06]"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-6 w-6 text-[#202e44]" /> : <Menu className="h-6 w-6 text-[#202e44]" />}
        </motion.button>
      </div>

    </div>

      {/* Mobile Menu — rendered outside the backdrop-blur wrapper to avoid containing-block issues */}
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
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#202e44]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#88734C] to-[#202e44] flex items-center justify-center">
                  <Sofa className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#202e44]">Maa Ashapura</p>
                  <p className="text-[10px] text-[#88734C] font-medium tracking-wider uppercase">Furniture</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-[#202e44]/[0.06]">
                <X className="h-5 w-5 text-[#202e44]/75" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-1">
              <Link to="/" className="flex items-center px-4 py-3 text-base font-medium text-[#202e44] rounded-xl hover:bg-[#202e44]/[0.04]" onClick={() => setIsOpen(false)}>Home</Link>

              {/* Mobile Services accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#202e44] rounded-xl hover:bg-[#202e44]/[0.04]"
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
                            to={item.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#202e44]/75 rounded-lg hover:bg-[#88734C]/10 hover:text-[#88734C]"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon size={14} className="text-[#88734C]" />
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
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#202e44] rounded-xl hover:bg-[#202e44]/[0.04]"
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
                            to={item.href}
                            className="flex items-center px-4 py-2.5 text-sm text-[#202e44]/75 rounded-lg hover:bg-[#88734C]/10 hover:text-[#88734C]"
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
                className="flex items-center w-full text-left px-4 py-3 text-base font-medium text-[#202e44] rounded-xl hover:bg-[#202e44]/[0.04]"
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById("about-section");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/");
                    setTimeout(() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" }), 150);
                  }
                }}
              >About</button>
              <Link to="/contact" className="flex items-center px-4 py-3 text-base font-medium text-[#202e44] rounded-xl hover:bg-[#202e44]/[0.04]" onClick={() => setIsOpen(false)}>Contact</Link>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full py-3.5 text-base font-semibold text-white bg-[#88734C] rounded-2xl hover:bg-[#202e44] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Free Quote
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
