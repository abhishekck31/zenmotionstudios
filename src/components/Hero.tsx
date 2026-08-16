"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const text1 = "WE CRAFT";
  const text2 = "CINEMATIC";
  const text3 = "EXPERIENCES";

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1 + index * 0.05, 
          ease: [0.215, 0.61, 0.355, 1] 
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black"
    >
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-person-editing-video-on-a-computer-1132/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-end pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="overflow-hidden mb-2">
          <h1 className="text-[12vw] sm:text-[10vw] font-black tracking-tighter text-white leading-[0.85] uppercase font-heading flex flex-wrap gap-x-[3vw]">
            <span className="flex">{splitText(text1)}</span>
            <span className="flex text-accent">{splitText(text2)}</span>
            <span className="flex w-full">{splitText(text3)}</span>
          </h1>
        </div>
        
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 border-t border-white/20 pt-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            className="max-w-xl text-lg sm:text-xl font-medium text-white/80"
          >
            An independent creative studio specializing in high-end video editing, motion design, and visual effects for visionary brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-16 bg-white/50" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/50">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
