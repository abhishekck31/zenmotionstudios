"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duration, easing, stagger, variants } from "@/lib/motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

const services = [
  {
    number: "01",
    title: "VIDEO EDITING",
    description:
      "Crafting narratives that resonate. We specialize in rhythmic, emotional, and high-impact editing for commercials, short films, and branded content.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "MOTION DESIGN",
    description:
      "Bringing static concepts to life with fluid motion, 2D/3D animation, and dynamic typography that demands attention.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "COLOR GRADING",
    description:
      "Setting the mood and atmosphere. Our colorists sculpt light and color to enhance your story\u2019s visual impact.",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2564&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "VFX & COMPOSITING",
    description:
      "Seamlessly blending reality and imagination. We handle green screen, rotoscoping, cleanups, and complex visual effects.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "SHORT-FORM CONTENT",
    description:
      "Reels, TikToks, YouTube Shorts — we create scroll-stopping short-form content engineered for maximum engagement and shareability.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "BRAND FILMS",
    description:
      "Cinematic storytelling that captures your brand\u2019s essence. From concept to final grade, we produce films that leave a mark.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2564&auto=format&fit=crop",
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Warm editorial gradient background */}
      <GradientBackground
        gradientOrigin="bottom-right"
        colors={[
          { color: "rgba(15,12,10,1)", stop: "0%" },
          { color: "rgba(25,18,14,1)", stop: "40%" },
          { color: "rgba(35,25,18,1)", stop: "70%" },
          { color: "rgba(20,15,12,1)", stop: "100%" },
        ]}
        noiseIntensity={0.5}
        noisePatternSize={110}
        noisePatternRefreshInterval={3}
        className="-z-10"
      />

      {/* Background Image Reveal */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.section, ease: easing.entrance }}
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
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: stagger.base }}
          className="mb-16 md:mb-24"
        >
          <div className="overflow-hidden mb-4">
            <motion.span
              variants={variants.lineMask}
              transition={{ duration: duration.section, ease: easing.entrance }}
              className="block text-sm font-bold uppercase tracking-widest text-accent font-heading"
            >
              WHAT WE DO
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              variants={variants.lineMask}
              transition={{ duration: duration.section, ease: easing.entrance }}
              className="text-4xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl font-heading uppercase leading-none"
            >
              OUR <span className="text-muted-foreground">EXPERTISE.</span>
            </motion.h2>
          </div>
        </motion.div>

        <div className="flex flex-col border-t border-white/15">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 py-8 md:py-10 cursor-pointer transition-colors duration-300 hover:bg-white/[0.03] px-4 -mx-4 md:px-8 md:-mx-8"
              data-cursor="EXPLORE"
            >
              <div className="flex items-baseline gap-6 md:gap-8">
                <span className="text-sm font-bold text-white/20 tracking-widest font-heading min-w-[2ch]">
                  {service.number}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent font-heading">
                  {service.title}
                </h3>
              </div>

              <div className="md:max-w-md w-full mt-3 md:mt-0 pl-10 md:pl-0">
                <motion.p
                  className="text-white/50 font-medium text-base md:text-lg leading-relaxed"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.5,
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
