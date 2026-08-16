"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
        }, 500); // slight delay after reaching 100%
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,51,102,0.15)_0%,rgba(0,0,0,0)_60%)]" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-8xl font-heading"
              >
                ZEN<span className="text-accent">MOTION</span>
              </motion.h1>
            </div>
            
            <div className="flex w-full items-center justify-between mt-8 max-w-[200px] sm:max-w-[300px]">
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">Loading</span>
              <span className="text-sm font-bold tracking-widest text-accent font-heading">{progress}%</span>
            </div>
            
            <div className="h-[2px] w-full max-w-[200px] sm:max-w-[300px] bg-white/10 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
