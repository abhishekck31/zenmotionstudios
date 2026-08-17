"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { duration, easing, stagger } from "@/lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["VIDEO.", "STORY.", "MOTION.", "CREATIVITY."];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger.slow,
        delayChildren: duration.component,
      }
    }
  };

  const item = {
    hidden: { y: "100%", opacity: 0, rotateX: -45 },
    show: { 
      y: "0%", 
      opacity: 1, 
      rotateX: 0,
      transition: {
        duration: duration.cinematic,
        ease: easing.expressive,
      }
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Video with delayed fade in */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: duration.cinematic * 1.5, ease: easing.entrance, delay: duration.section }}
        style={{ y, opacity }} 
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-dark-and-moody-waves-5242/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 mix-blend-multiply" />
        <NoiseOverlay />
      </motion.div>

      <div className="container mx-auto relative z-10 w-full">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start w-full"
        >
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden" style={{ perspective: "1000px" }}>
              <motion.h1 
                variants={item}
                className={`text-[10vw] sm:text-[11vw] font-black leading-[0.85] tracking-tighter uppercase font-heading ${i === 3 ? 'text-accent' : 'text-white'}`}
                style={{ transformOrigin: "bottom center" }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.section, delay: 2.5 }}
        className="absolute bottom-8 right-8 z-10 hidden md:block"
      >
        <div className="flex items-center gap-4 text-white/50">
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-accent"
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function NoiseOverlay() {
  return (
    <div 
      className="pointer-events-none absolute inset-0 z-50 h-full w-full opacity-30 mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
