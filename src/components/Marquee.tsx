"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const text = "MOTION DESIGN • VFX • COLOR GRADING • EDITING • 3D ANIMATION • ";
  
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap bg-accent py-4 text-accent-foreground sm:py-6">
      <motion.div
        className="flex whitespace-nowrap text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
