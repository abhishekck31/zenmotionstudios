"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { duration, easing } from "@/lib/motion";

const phases = [
  {
    number: "01",
    title: "DISCOVERY",
    description: "We begin by dissecting your brand's core truth. Through intense dialogue and research, we uncover the narrative spine that will dictate every creative decision moving forward.",
    tags: ["Strategy", "Research", "Brand Identity"]
  },
  {
    number: "02",
    title: "IDEATION",
    description: "The conceptual phase. We generate moodboards, storyboards, and visual treatments. This is where abstract concepts condense into a concrete cinematic vision.",
    tags: ["Storyboarding", "Art Direction", "Look Dev"]
  },
  {
    number: "03",
    title: "PRODUCTION",
    description: "Execution with extreme prejudice. Whether it's live-action cinematography or high-end 3D motion design, our production pipeline is built for uncompromising quality.",
    tags: ["Cinematography", "3D Animation", "VFX"]
  },
  {
    number: "04",
    title: "DELIVERY",
    description: "The final polish. Precision editing, aggressive sound design, and meticulous color grading. We refine the piece until it elicits a visceral reaction.",
    tags: ["Editing", "Color Grading", "Sound Design"]
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="bg-background relative border-t border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Pinned Left Column */}
          <div className="lg:w-5/12 py-24 lg:py-40 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: duration.section, ease: easing.entrance }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent font-heading mb-6">
                OUR METHODOLOGY
              </h2>
              <h3 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase font-heading leading-none">
                THE <br /> PROCESS.
              </h3>
              <p className="mt-8 text-xl text-white/50 max-w-sm font-medium leading-relaxed">
                A systematic approach to engineering emotion. We leave nothing to chance.
              </p>
            </motion.div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-7/12 py-12 lg:py-40 flex flex-col gap-32 lg:gap-64">
            {phases.map((phase, index) => (
              <ProcessItem key={index} phase={phase} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ProcessItem({ phase, index }: { phase: any; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div 
      ref={itemRef}
      style={{ opacity, y }}
      className="flex flex-col md:flex-row gap-8 lg:gap-16"
    >
      <div className="md:w-1/4">
        <span className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent font-heading">
          {phase.number}
        </span>
      </div>
      
      <div className="md:w-3/4 flex flex-col justify-center">
        <h4 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase font-heading mb-6">
          {phase.title}
        </h4>
        <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-medium mb-8">
          {phase.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {phase.tags.map((tag: string, i: number) => (
            <span 
              key={i}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
