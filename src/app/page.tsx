"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WorkGrid } from "@/components/WorkGrid";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-white">
      <main className="flex-1">
        <section ref={containerRef} className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
          {/* Parallax Video Background */}
          <motion.div 
            style={{ y, opacity }} 
            className="absolute inset-0 z-0 h-full w-full"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-full w-full object-cover opacity-40 scale-105"
            >
              {/* Using a placeholder stock video for the creative agency vibe */}
              <source src="https://player.vimeo.com/external/372332616.sd.mp4?s=d00e57200ef9019623e19875bb2f07d2f92461be&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-5xl"
            >
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                <span className="block text-white drop-shadow-xl">CRAFTING</span>
                <span className="block text-accent drop-shadow-xl">MOTION.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-8 max-w-2xl"
            >
              <p className="text-lg font-medium tracking-wide text-white/80 sm:text-xl md:text-2xl drop-shadow-md">
                We are a digital creative studio specializing in award-winning video editing, motion design, and visual storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 font-semibold text-black transition-transform hover:scale-105 active:scale-95 shadow-2xl">
                <span>View Showreel</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </section>
        
        <Marquee />
        <About />
        <WorkGrid />
        <Testimonials />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
