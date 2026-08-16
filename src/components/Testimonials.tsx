"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Zenmotion elevated our brand campaign to entirely new heights. Their attention to rhythm and visual storytelling is unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "CMO, Global Tech",
  },
  {
    quote: "Working with this studio was a revelation. They didn't just execute our vision—they transformed it into something cinematic and unforgettable.",
    author: "Marcus Thorne",
    role: "Director, Thorne Films",
  },
  {
    quote: "The team's ability to blend striking 3D motion design with raw, emotional narrative editing sets them apart from any other agency we've hired.",
    author: "Elena Rostova",
    role: "Creative Director, VANGUARD",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="bg-zinc-950 text-white py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 mb-16 sm:flex-row">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">CLIENT VOICES</h2>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={next}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[300px] w-full max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="text-2xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="text-xl font-bold">{testimonials[currentIndex].author}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
