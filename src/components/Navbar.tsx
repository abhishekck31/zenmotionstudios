"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { Menu, X } from "lucide-react";
import { duration, easing, stagger } from "@/lib/motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;
    
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: duration.component, ease: easing.entrance } },
    exit: { scaleY: 0, transition: { duration: duration.component, ease: easing.exit, delay: duration.ui } }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: stagger.slow, staggerDirection: -1 } },
    open: { transition: { delayChildren: duration.ui, staggerChildren: stagger.slow, staggerDirection: 1 } }
  };

  const linkVars = {
    initial: { y: "150%", rotate: 5, opacity: 0, transition: { duration: duration.ui, ease: easing.exit } },
    open: { y: 0, rotate: 0, opacity: 1, transition: { duration: duration.component, ease: easing.expressive } }
  };

  const navLinks = [
    { title: "HOME", href: "/" },
    { title: "WORK", href: "/work" },
    { title: "STUDIO", href: "/studio" },
    { title: "CONTACT", href: "/contact" }
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={isHidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: duration.ui, ease: easing.smooth }}
        className="fixed top-0 z-[9999] w-full px-6 py-6 mix-blend-difference"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2" data-cursor="HOME">
            <span className="text-xl font-bold tracking-tighter text-white font-heading">ZEN<span className="text-accent">MOTION</span></span>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <MagneticButton>
              <Link href="/work" data-cursor="VIEW WORK" className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/studio" data-cursor="ABOUT US" className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                Studio
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact" data-cursor="CONTACT" className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                Contact
              </Link>
            </MagneticButton>
          </div>

          <button 
            className="md:hidden relative z-[10000] text-white p-2 mix-blend-difference"
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
            className="fixed inset-0 z-[9998] bg-black origin-top flex flex-col justify-center px-8"
          >
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-4 items-center text-center"
            >
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden p-2">
                  <motion.div variants={linkVars} style={{ transformOrigin: "bottom left" }}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors font-heading"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
