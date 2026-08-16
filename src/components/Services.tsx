"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "VIDEO EDITING",
    description: "Crafting narratives that resonate. We specialize in rhythmic, emotional, and high-impact editing for commercials and short films.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "MOTION DESIGN",
    description: "Bringing static concepts to life with fluid motion, 2D/3D animation, and dynamic typography that demands attention.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "COLOR GRADING",
    description: "Setting the mood and atmosphere. Our colorists sculpt light and color to enhance your story's visual impact.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "VFX & COMPOSITING",
    description: "Seamlessly blending reality and imagination. We handle green screen, rotoscoping, cleanups, and complex visual effects.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/10 relative overflow-hidden">
      {/* Background Image Reveal */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={services[hoveredIndex].image} 
              alt={services[hoveredIndex].title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
            EXPERTISE
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-white/20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/20 py-8 md:py-12 cursor-pointer transition-colors hover:bg-white/5 px-4 -mx-4 md:px-8 md:-mx-8"
              data-cursor="EXPLORE"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white transition-transform duration-500 group-hover:translate-x-4 group-hover:text-accent font-heading mb-4 md:mb-0">
                {service.title}
              </h3>
              
              <div className="md:max-w-md w-full overflow-hidden">
                <motion.p 
                  className="text-white/60 font-medium text-lg"
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.6,
                    x: hoveredIndex === index ? 0 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
