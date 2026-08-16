"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/50 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <MagneticButton>
          <a href="/" className="text-xl font-bold tracking-tighter text-white">
            ZENMOTION
          </a>
        </MagneticButton>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <MagneticButton key={link.name}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-accent"
              >
                {link.name}
              </a>
            </MagneticButton>
          ))}
          <MagneticButton>
            <button className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105">
              START A PROJECT
            </button>
          </MagneticButton>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full flex flex-col bg-black/95 px-4 py-8 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="border-b border-white/10 py-4 text-2xl font-bold uppercase tracking-tight text-white transition-colors hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-bold text-black">
              START A PROJECT
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
