"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export function MagneticButton({ 
  children,
  className = "",
  onClick
}: { 
  children: ReactNode,
  className?: string,
  onClick?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const childX = useTransform(springX, (value) => value * 0.4);
  const childY = useTransform(springY, (value) => value * 0.4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull strength
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      className={`inline-block ${className}`}
    >
      <motion.div
        style={{
          x: childX,
          y: childY,
        }}
        className="flex h-full w-full items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
