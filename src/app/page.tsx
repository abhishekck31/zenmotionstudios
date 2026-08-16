"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WorkGrid } from "@/components/WorkGrid";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-white">
      <main className="flex-1">
        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          {/* Subtle animated background gradient overlay */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,51,102,0.05)_0%,rgba(0,0,0,0)_50%)]" />

          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-5xl"
            >
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                <span className="block text-white">CRAFTING</span>
                <span className="block text-accent">MOTION.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-8 max-w-2xl"
            >
              <p className="text-lg font-medium tracking-wide text-muted-foreground sm:text-xl md:text-2xl">
                We are a digital creative studio specializing in award-winning video editing, motion design, and visual storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 font-semibold text-black transition-transform hover:scale-105 active:scale-95">
                <span>View Showreel</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </section>
        
        <Marquee />
        <About />
        <WorkGrid />
        <Services />
      </main>
    </div>
  );
}
