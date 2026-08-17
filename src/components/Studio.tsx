"use client";

import { motion } from "framer-motion";
import { duration, easing } from "@/lib/motion";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const R2 = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/stock-images";
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

const SLIDES = [
  {
    src: `${R2}/767d99bb371a54d0d36751e8cecae43c.jpg`,
    alt: "Diver silhouetted inside a sunset seascape shaped like a profile",
    title: "Tidewater",
    subtitle: "Brand Film",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Director", value: "Ada Ferrow" },
      { label: "Length", value: "3:42" },
    ],
  },
  {
    src: `${R2}/821d815affa6496c39cbdeeec7a84603.jpg`,
    alt: "Double-exposure portrait blended with a city skyline at dusk",
    title: "Nightshift",
    subtitle: "Commercial",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Director", value: "Kell Mora" },
      { label: "Length", value: "4:08" },
    ],
  },
  {
    src: `${R2}/937438c560ada1c83317f2c11b3454b0.jpg`,
    alt: "Motion-blurred side-profile portrait against a deep orange backdrop",
    title: "Overexposed",
    subtitle: "Music Video",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Director", value: "Juno Vale" },
      { label: "Length", value: "2:57" },
    ],
  },
  {
    src: `${R2}/98f89cb9994f5c382ab964062c4039db.jpg`,
    alt: "Figure holding a racket that dissolves into a swirling cloud at dusk",
    title: "Slow Bloom",
    subtitle: "Short Film",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Director", value: "Rue Alcott" },
      { label: "Length", value: "3:15" },
    ],
  },
  {
    src: UNSPLASH("1470071459604-3b5ec3a7fe05"),
    alt: "Fog rolling through a forested valley at first light",
    title: "Low Country",
    subtitle: "Documentary",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Director", value: "Sim Oyo" },
      { label: "Length", value: "5:20" },
    ],
  },
  {
    src: UNSPLASH("1500534314209-a25ddb2bd429"),
    alt: "Sunlit dune ridge under a hard blue sky",
    title: "Dry Season",
    subtitle: "Commercial",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Director", value: "Juno Vale" },
      { label: "Length", value: "2:44" },
    ],
  }
];

export function Studio() {
  return (
    <section className="bg-background py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: duration.section, ease: easing.entrance }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent font-heading mb-6">
            ORIGINALS & SHOWCASE
          </h2>
          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase font-heading leading-none">
            STUDIO <span className="text-muted-foreground">ARCHIVE</span>
          </h3>
          <p className="mt-6 text-lg text-white/50 max-w-2xl font-medium">
            Explore our curated selection of original films, experiments, and high-end commercial projects through our interactive archive.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: duration.section, delay: 0.2 }}
        className="w-full relative"
      >
        <CoverflowCarousel 
          slides={SLIDES} 
          showCaption 
          showNavigation 
          className="py-12"
          cardClassName="border border-white/10"
        />
      </motion.div>
    </section>
  );
}
