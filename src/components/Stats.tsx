"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const stats = [
  { label: "AWARDS WON", value: 42, suffix: "+" },
  { label: "PROJECTS DELIVERED", value: 350, suffix: "+" },
  { label: "GLOBAL CLIENTS", value: 85, suffix: "+" },
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, inView]);

  return <span ref={nodeRef}>{count}</span>;
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative py-32 bg-black border-y border-white/10 overflow-hidden group">
      {/* Video Background that reveals on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105"
        >
          <source src="https://cdn.coverr.co/videos/coverr-abstract-neon-lights-5236/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="relative overflow-hidden mb-4">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[12vw] sm:text-[8vw] md:text-[6vw] font-black leading-none tracking-tighter text-white font-heading mix-blend-difference"
                >
                  <AnimatedCounter value={stat.value} />
                  <span className="text-accent">{stat.suffix}</span>
                </motion.div>
              </div>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-widest text-white/50">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
