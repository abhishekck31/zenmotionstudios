"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { duration, easing } from "@/lib/motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-background overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
        <GradientBackground
          gradientOrigin="center"
          colors={[
            { color: "rgba(255,255,255,1)", stop: "0%" },
            { color: "rgba(255,240,245,1)", stop: "50%" },
            { color: "rgba(255,255,255,1)", stop: "100%" },
          ]}
          noiseIntensity={0.4}
          noisePatternSize={120}
          noisePatternRefreshInterval={3}
          className="-z-10"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: duration.cinematic, ease: easing.entrance }}
            className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-foreground font-heading leading-[0.85]"
          >
            LET&apos;S MAKE <br />
            <span className="text-accent">SOMETHING MOVING.</span>
          </motion.h2>
          <motion.a
            href="mailto:hello@zenmotion.studio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: duration.component,
              ease: easing.entrance,
              delay: 0.2,
            }}
            className="mt-10 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors duration-300"
          >
            Start a project
          </motion.a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-foreground font-heading mb-4">
                Stay in the loop
              </h3>
              <p className="text-black/60 font-medium leading-relaxed">
                Subscribe to our newsletter for insights on motion design, video production tips, and behind-the-scenes looks at our latest projects.
              </p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-80 px-6 py-4 bg-black/5 border border-black/10 rounded-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-foreground placeholder:text-black/40"
                required
              />
              <button 
                type="submit" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest hover:bg-black transition-colors duration-300"
              >
                Subscribe
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-2 font-heading">
                Locations
              </h3>
              <p className="text-black/60 font-medium leading-relaxed">
                Los Angeles
                <br />
                New York
                <br />
                London
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-2 font-heading">
                Socials
              </h3>
              <div className="flex flex-col gap-2">
                {["Instagram", "Twitter", "Vimeo", "LinkedIn"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-black/60 font-medium hover:text-accent transition-colors duration-300 w-fit"
                    >
                      {social}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-2 font-heading">
                Legal
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-black/60 font-medium hover:text-foreground transition-colors duration-300 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-black/60 font-medium hover:text-foreground transition-colors duration-300 w-fit"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none border-t border-black/5 py-8">
        <span className="text-[18vw] font-black tracking-tighter uppercase leading-[0.8] text-black/[0.03] font-heading select-none">
          ZENMOTION
        </span>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/40">
          <span>&copy; {new Date().getFullYear()} Zenmotion Studios</span>
          <span>Built with intent</span>
        </div>
      </div>
    </footer>
  );
}
