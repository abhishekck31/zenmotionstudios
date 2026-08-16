"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Studio", href: "/studio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 z-50 flex w-full justify-center px-4 pt-6 pb-2 transition-all duration-300 ${
        scrolled ? "pt-4" : ""
      }`}
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 px-6 py-3 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-black/50" : "bg-transparent"
        }`}
      >
        <Link href="/" className="text-xl font-bold tracking-tighter">
          ZEN<span className="text-accent">MOTION</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95 md:hidden">
          Menu
        </button>
      </nav>
    </motion.header>
  );
}
