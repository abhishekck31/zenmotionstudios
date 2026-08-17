"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { ArrowRight } from "lucide-react";
import { duration, easing, stagger, variants } from "@/lib/motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="about" ref={containerRef} className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      <GradientBackground
        gradientOrigin="top-middle"
        colors={[
          { color: "rgba(10,10,12,1)", stop: "0%" },
          { color: "rgba(30,25,20,1)", stop: "50%" },
          { color: "rgba(45,35,30,1)", stop: "100%" }
        ]}
        noiseIntensity={0.6}
        noisePatternSize={100}
        className="-z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative z-10 flex flex-col justify-center max-w-2xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: stagger.base, delayChildren: duration.micro }}
            >
              <div className="overflow-hidden mb-6">
                <motion.h2 
                  variants={variants.lineMask}
                  transition={{ duration: duration.section, ease: easing.entrance }}
                  className="text-sm font-bold uppercase tracking-widest text-accent font-heading"
                >
                  ABOUT THE STUDIO
                </motion.h2>
              </div>
              
              <div className="overflow-hidden mb-8">
                <motion.p 
                  variants={variants.lineMask}
                  transition={{ duration: duration.section, ease: easing.entrance }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.1] font-heading"
                >
                  WE DO NOT JUST EDIT VIDEO. <br />
                  <span className="text-muted-foreground">WE ENGINEER EMOTION.</span>
                </motion.p>
              </div>
              
              <motion.div 
                variants={variants.fadeScale}
                transition={{ duration: duration.section, ease: easing.entrance }}
                className="space-y-6 text-lg md:text-xl text-muted-foreground font-medium mb-12"
              >
                <p>
                  Founded by a collective of award-winning directors, editors, and motion designers, ZENMOTION is a creative agency built on the belief that visual storytelling should leave a lasting mark.
                </p>
                <p>
                  We operate at the intersection of cinematic artistry and modern digital culture, crafting pieces that are as intellectually rigorous as they are visually stunning.
                </p>
              </motion.div>

              <MagneticButton 
                className="group inline-flex items-center gap-4 border-b-2 border-foreground pb-2 text-lg font-bold tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
              >
                <span>Discover Our Process</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </MagneticButton>
            </motion.div>
          </div>

          <div className="relative h-[600px] sm:h-[800px] w-full lg:-mr-12">
            <motion.div 
              style={{ y: y1 }}
              className="absolute left-0 top-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2606&auto=format&fit=crop" 
                alt="Studio Editing Setup"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute right-0 bottom-12 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-2xl z-30"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1590608836566-077595abf6c6?q=80&w=2670&auto=format&fit=crop" 
                alt="Motion Design Process"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y3 }}
              className="absolute right-12 top-24 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-xl z-10 opacity-60"
            >
              <div className="w-full h-full bg-accent/20 backdrop-blur-3xl border border-accent/20" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
