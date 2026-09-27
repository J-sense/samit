"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "EDUCATION", href: "#education" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("HOME");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between w-full ${
          scrolled
            ? "max-w-5xl rounded-full px-6 sm:px-8 py-3 bg-[#0c0717]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-950/40"
            : "max-w-7xl rounded-none px-4 sm:px-8 py-4 bg-transparent border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-2xl font-black tracking-tight text-[#8b5cf6] hover:text-[#a78bfa] transition-colors"
        >
          Samit
        </a>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative py-1 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#8b5cf6] rounded-full shadow-lg shadow-purple-500"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7127BA] text-white shadow-lg shadow-[#7127BA]/30 hover:bg-[#611fb3] transition-all"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-full left-0 right-0 mt-3 p-5 rounded-3xl bg-[#0c0717]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3 md:hidden pointer-events-auto"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold tracking-widest text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-3 rounded-full text-xs font-bold text-center uppercase tracking-wider bg-[#7127BA] text-white"
              >
                HIRE ME
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
