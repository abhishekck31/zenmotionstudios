"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "AWARDS WON", value: 42, suffix: "+" },
  { label: "PROJECTS DELIVERED", value: 350, suffix: "+" },
  { label: "GLOBAL CLIENTS", value: 120, suffix: "+" },
  { label: "YEARS OF EXCELLENCE", value: 10, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-accent font-heading">
      {count}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-black text-white py-24 sm:py-32 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center gap-4"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
