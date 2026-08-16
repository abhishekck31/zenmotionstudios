"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  
  const text = "We exist to push boundaries, break rules, and craft visuals that make people stop, stare, and feel something profound.";

  return (
    <section ref={containerRef} className="bg-white text-black py-32 sm:py-48 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 relative h-[50vh] sm:h-[60vh] overflow-hidden rounded-xl bg-zinc-200">
            <motion.div style={{ y: y1 }} className="absolute inset-[-20%] h-[140%] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop" 
                alt="Studio behind the scenes"
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white p-8 rounded-full h-32 w-32 flex items-center justify-center text-center font-bold tracking-widest text-sm uppercase mix-blend-difference"
            >
              Since 2018
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold tracking-widest uppercase text-accent mb-8"
            >
              The Studio
            </motion.h2>
            
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {text.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.2, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <a href="/studio" className="inline-block group relative text-lg font-medium">
                <span className="relative z-10">Read our manifesto</span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
