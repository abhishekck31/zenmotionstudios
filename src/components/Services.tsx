"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Video Editing",
    description: "Narrative-driven editing that keeps audiences engaged from the first frame to the last.",
    tags: ["Offline", "Online", "Color Grading", "Sound Design"]
  },
  {
    title: "Motion Design",
    description: "Dynamic 2D and 3D animations that bring your brand's story to life with premium visual flair.",
    tags: ["2D Animation", "3D Animation", "VFX", "Title Sequences"]
  },
  {
    title: "Creative Direction",
    description: "End-to-end conceptualization and creative strategy for commercial and digital campaigns.",
    tags: ["Storyboarding", "Art Direction", "Scripting", "Concept Art"]
  }
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            OUR <span className="text-accent">EXPERTISE</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We merge technical precision with creative vision to deliver visuals that transcend the ordinary.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/5"
            >
              {/* Background accent reveal on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between px-4 sm:px-8">
                <div className="md:w-1/3">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                </div>
                
                <div className="md:w-1/3">
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                    {service.description}
                  </p>
                </div>
                
                <div className="md:w-1/3 flex flex-wrap gap-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium tracking-wider text-white/60 transition-colors duration-300 group-hover:border-accent/50 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
