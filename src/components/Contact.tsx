"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-accent text-white py-32 sm:py-48 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[0.9] mb-8"
            >
              LET'S CRAFT<br />SOMETHING<br />EXTRAORDINARY.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-md font-medium text-white/90"
            >
              Ready to elevate your brand's narrative through cutting-edge motion and visual storytelling?
            </motion.p>
          </div>

          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-12"
            >
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-black">Inquiries</h3>
                <a 
                  href="mailto:hello@zenmotion.studio" 
                  className="text-2xl sm:text-3xl font-medium hover:text-black transition-colors"
                >
                  hello@zenmotion.studio
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-black">Location</h3>
                <p className="text-2xl sm:text-3xl font-medium">
                  Los Angeles, CA<br />
                  <span className="text-lg text-white/80">Available Worldwide</span>
                </p>
              </div>
              
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="mt-8"
              >
                <a href="/contact" className="inline-flex items-center gap-4 text-2xl font-bold uppercase tracking-wider relative">
                  START A PROJECT
                  <motion.div
                    animate={{
                      x: hovered ? 10 : 0,
                      y: hovered ? -10 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-black text-white p-3 rounded-full"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative large text */}
      <div className="absolute -bottom-20 -right-10 pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[20rem] font-black leading-none">ZM.</h2>
      </div>
    </section>
  );
}
