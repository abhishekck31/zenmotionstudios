"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

const items = [
  "VIDEO EDITING",
  "MOTION DESIGN",
  "VFX",
  "COLOR GRADING",
  "SOUND DESIGN",
  "CREATIVE DIRECTION",
];

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap m-0">
      <motion.div className="font-heading font-extrabold uppercase text-[10vw] leading-[1.1] flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {children} 
        <span className="mx-[4vw] text-accent">•</span>
        {children} 
        <span className="mx-[4vw] text-accent">•</span>
        {children} 
        <span className="mx-[4vw] text-accent">•</span>
        {children}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="bg-black py-24 sm:py-32 overflow-hidden border-t border-white/10" data-cursor="SCROLL">
      <div className="flex flex-col gap-8 -rotate-2 scale-105">
        <ParallaxText baseVelocity={-3}>
          {items.map((item, idx) => (
            <span key={idx} className="mr-8">
              {item} <span className="text-accent ml-8">•</span>
            </span>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          {[...items].reverse().map((item, idx) => (
            <span key={idx} className="mr-8 text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}>
              {item} <span className="text-accent ml-8" style={{ WebkitTextStroke: "0px" }}>•</span>
            </span>
          ))}
        </ParallaxText>
      </div>
    </section>
  );
}
