"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <footer 
      ref={containerRef}
      className="relative h-[80vh] min-h-[600px] w-full bg-black overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <motion.div 
        style={{ y, scale, opacity }}
        className="fixed bottom-0 h-[80vh] min-h-[600px] w-full flex flex-col justify-between pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white font-heading leading-[0.85]">
            LET'S MAKE <br />
            <span className="text-accent">SOMETHING MOVING.</span>
          </h2>
          <a href="mailto:hello@zenmotion.studio" className="mt-8 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors">
            Start a project
          </a>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4">Locations</h3>
            <p className="text-white/70 font-medium">
              Los Angeles<br />
              New York<br />
              London
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4">Socials</h3>
            <div className="flex flex-col gap-2">
              {['Instagram', 'Twitter', 'Vimeo', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-white/70 font-medium hover:text-accent transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-white/70 font-medium hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-white/70 font-medium hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center overflow-hidden pointer-events-none mt-auto">
          <h1 className="text-[18vw] font-black tracking-tighter uppercase leading-[0.8] text-white/5 font-heading">
            ZENMOTION
          </h1>
        </div>
        
        <div className="container mx-auto flex justify-between items-center text-sm font-bold uppercase tracking-widest text-white/50 border-t border-white/10 pt-8 mt-8">
          <span>&copy; {new Date().getFullYear()} Zenmotion Studios</span>
          <span>Built with intent</span>
        </div>
      </motion.div>
    </footer>
  );
}
