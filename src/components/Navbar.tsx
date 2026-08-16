"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 } }
  };

  const linkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
  };

  const navLinks = [
    { title: "HOME", href: "/" },
    { title: "WORK", href: "/#work" },
    { title: "STUDIO", href: "/#about" },
    { title: "CONTACT", href: "/#contact" }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
        className="fixed top-0 z-[9999] w-full px-6 py-6 mix-blend-difference"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-white font-heading">ZEN<span className="text-accent">MOTION</span></span>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <MagneticButton>
              <Link href="/#work" className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/#about" className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                Studio
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/#contact" className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                Contact
              </Link>
            </MagneticButton>
          </div>

          <button 
            className="md:hidden relative z-[10000] text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[9998] bg-accent origin-top flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    variants={linkVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="pt-2"
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-6xl sm:text-8xl font-black uppercase tracking-tighter text-black font-heading hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
