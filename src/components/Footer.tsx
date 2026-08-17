"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { duration, easing } from "@/lib/motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

export function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
        <GradientBackground
          gradientOrigin="center"
          colors={[
            { color: "rgba(5,5,5,1)", stop: "0%" },
            { color: "rgba(40,10,20,1)", stop: "50%" },
            { color: "rgba(5,5,5,1)", stop: "100%" },
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
            className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white font-heading leading-[0.85]"
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
            className="mt-10 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Start a project
          </motion.a>
        </div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2 font-heading">
                Locations
              </h3>
              <p className="text-white/60 font-medium leading-relaxed">
                Los Angeles
                <br />
                New York
                <br />
                London
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2 font-heading">
                Socials
              </h3>
              <div className="flex flex-col gap-2">
                {["Instagram", "Twitter", "Vimeo", "LinkedIn"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-white/60 font-medium hover:text-accent transition-colors duration-300 w-fit"
                    >
                      {social}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2 font-heading">
                Legal
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-white/60 font-medium hover:text-white transition-colors duration-300 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-white/60 font-medium hover:text-white transition-colors duration-300 w-fit"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none border-t border-white/5 py-8">
        <span className="text-[18vw] font-black tracking-tighter uppercase leading-[0.8] text-white/[0.03] font-heading select-none">
          ZENMOTION
        </span>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/40">
          <span>&copy; {new Date().getFullYear()} Zenmotion Studios</span>
          <span>Built with intent</span>
        </div>
      </div>
    </footer>
  );
}
