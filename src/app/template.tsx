"use client";

import { motion } from "framer-motion";
import { duration, easing } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const columns = 5;

  return (
    <>
      <div className="fixed inset-0 z-[9990] flex pointer-events-none">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full bg-accent flex-1 origin-bottom"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: duration.component,
              ease: easing.exit,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
      {children}
    </>
  );
}
