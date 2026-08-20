"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { duration, easing, stagger } from "@/lib/motion";

const faqs = [
  {
    question: "What types of video projects do you take on?",
    answer: "We specialize in cinematic commercials, high-end corporate brand videos, music videos, and advanced motion graphics for forward-thinking brands."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary greatly depending on scope. A standard promotional video might take 2-4 weeks from concept to final delivery, whereas complex VFX or 3D motion design can take 6-8 weeks."
  },
  {
    question: "Do you offer sound design and color grading?",
    answer: "Absolutely. Our post-production pipeline includes professional sound design, audio mixing, and DaVinci Resolve color grading to ensure your project looks and sounds cinematic."
  },
  {
    question: "How does the revision process work?",
    answer: "We typically include 2-3 rounds of revisions for every project. The first round is for structural changes, and the final rounds are for polishing (color, sound, fine cuts)."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: duration.component, ease: easing.entrance }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-foreground font-heading">
            Common <span className="text-accent">Questions</span>
          </h2>
          <p className="mt-4 text-black/60 font-medium max-w-xl mx-auto">
            Everything you need to know about our process, capabilities, and how we collaborate.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: duration.component, delay: index * stagger.fast, ease: easing.entrance }}
              className="border-b border-black/10 overflow-hidden"
            >
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                data-cursor="CLICK"
              >
                <span className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-foreground font-heading pr-8">
                  {faq.question}
                </span>
                <span className="text-accent flex-shrink-0 transition-transform duration-300">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: duration.component, ease: easing.expressive }}
                  >
                    <div className="pb-6 text-black/60 font-medium leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
