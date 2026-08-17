"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useRef } from "react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  return (
    <section 
      id="contact"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-accent py-24 sm:py-32 lg:py-48 text-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        
        <motion.div
          style={{ x, y }}
          className="mb-12"
        >
          <h2 className="text-[12vw] sm:text-[10vw] leading-[0.9] font-black tracking-tighter uppercase font-heading">
            Let&apos;s Create <br />
            <span className="text-white drop-shadow-lg">Together.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <MagneticButton>
            <a 
              href="mailto:hello@zenmotion.studio" 
              className="group relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110 active:scale-95 shadow-xl"
            >
              <span className="sr-only">Contact Us</span>
              <ArrowUpRight className="h-8 w-8 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
            </a>
          </MagneticButton>
          
          <p className="mt-8 text-xl font-bold tracking-widest uppercase">
            hello@zenmotion.studio
          </p>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 p-8 hidden md:block opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" className="animate-spin-slow">
          <path id="curve" d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="transparent" />
          <text className="text-[12px] font-bold uppercase tracking-widest">
            <textPath href="#curve">
              Available for work • Available for work • 
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}
