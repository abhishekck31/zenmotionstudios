"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duration, easing, variants } from "@/lib/motion";

const awards = [
  {
    year: "2024",
    title: "SITE OF THE MONTH",
    organization: "AWWWARDS",
    project: "NEON DREAMS",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    year: "2023",
    title: "FWA OF THE DAY",
    organization: "THE FWA",
    project: "ECHOES OF SILENCE",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
  },
  {
    year: "2023",
    title: "STAFF PICK",
    organization: "VIMEO",
    project: "LIQUID GOLD",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop"
  },
  {
    year: "2022",
    title: "BEST VISUAL DESIGN",
    organization: "THE WEBBY AWARDS",
    project: "THE ASCENT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
  }
];

export function AwardsList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40 relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24"
        >
          <div className="overflow-hidden mb-4">
            <motion.h2 
              variants={variants.lineMask}
              transition={{ duration: duration.section, ease: easing.entrance }}
              className="text-sm font-bold uppercase tracking-widest text-accent font-heading"
            >
              INDUSTRY RECOGNITION
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h3 
              variants={variants.lineMask}
              transition={{ duration: duration.section, ease: easing.entrance }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase font-heading leading-none"
            >
              AWARDS & <br className="hidden sm:block" /> HONORS.
            </motion.h3>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Awards List */}
          <div className="w-full lg:w-1/2 flex flex-col border-t border-white/10">
            {awards.map((award, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-white/10 cursor-pointer"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-white/5 origin-left scale-x-0 transition-transform duration-500 ease-[0.34,1.56,0.64,1] group-hover:scale-x-100 -z-10" />
                
                <div className="flex flex-col gap-2 relative z-10 px-4">
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white transition-colors duration-300 font-heading">
                    {award.title}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/50">
                    {award.organization}
                  </span>
                </div>
                
                <div className="flex flex-col sm:items-end gap-2 mt-4 sm:mt-0 relative z-10 px-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent">
                    {award.year}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                    {award.project}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Image Reveal Area */}
          <div className="hidden lg:block w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden bg-white/5">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: duration.section, ease: easing.entrance }}
                  className="absolute inset-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={awards[hoveredIndex].image} 
                    alt={awards[hoveredIndex].title}
                    className="w-full h-full object-cover grayscale-[0.5] contrast-125"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
