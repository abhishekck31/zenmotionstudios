"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimation, PanInfo } from "framer-motion";

const testimonials = [
  {
    quote: "Zenmotion didn't just edit our video, they completely elevated our brand's narrative. Their attention to rhythm and emotion is unmatched.",
    name: "Sarah Jenkins",
    title: "Creative Director, Vibe Global",
  },
  {
    quote: "The motion design work they delivered for our launch campaign was breathtaking. They have an innate understanding of visual pacing.",
    name: "Marcus Cole",
    title: "CMO, Nexus Tech",
  },
  {
    quote: "Working with Zenmotion was a masterclass in collaboration. They took our raw footage and turned it into a cinematic masterpiece.",
    name: "Elena Rodriguez",
    title: "Independent Filmmaker",
  },
  {
    quote: "A rare mix of technical brilliance and artistic intuition. They are our go-to studio for anything that requires a premium touch.",
    name: "David Chen",
    title: "Head of Content, Aura",
  }
];

export function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
    
    // Auto scroll setup could go here if desired
  }, []);

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, _info: PanInfo) => {
    // Add some snap or bounce logic if needed
  };

  return (
    <section className="bg-background py-24 sm:py-32 overflow-hidden border-t border-white/10" data-cursor="DRAG">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading"
        >
          CLIENT VOICES
        </motion.h2>
      </div>

      <div className="pl-4 sm:pl-6 lg:pl-8">
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="flex gap-8 sm:gap-12 w-max"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-[85vw] sm:w-[600px] md:w-[700px] shrink-0 border border-white/10 bg-white/5 p-8 sm:p-12 transition-colors hover:bg-white/10"
              >
                <div className="text-accent text-6xl font-heading leading-none h-12">"</div>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 min-h-[120px]">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold font-heading">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider">{testimonial.name}</div>
                    <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-end">
        <div className="flex gap-4 items-center text-white/50 text-sm font-bold tracking-widest uppercase">
          <span>&larr; Drag to explore &rarr;</span>
        </div>
      </div>
    </section>
  );
}
