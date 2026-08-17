"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { duration, easing, variants } from "@/lib/motion";
import { MagneticButton } from "./MagneticButton";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "BEHIND THE SCENES",
    date: "OCT 14, 2026",
    title: "THE SOUND OF SILENCE: CRAFTING AUDIO FOR THRILLERS",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-8",
    height: "h-[400px] sm:h-[500px]"
  },
  {
    category: "CASE STUDY",
    date: "SEP 28, 2026",
    title: "NEON DREAMS: COLOR GRADING CYBERPUNK",
    image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-[400px] sm:h-[500px]"
  },
  {
    category: "CULTURE",
    date: "AUG 12, 2026",
    title: "WHY STILLNESS MATTERS IN MOTION DESIGN",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-5",
    height: "h-[400px]"
  },
  {
    category: "TECHNOLOGY",
    date: "JUL 04, 2026",
    title: "INTEGRATING UNREAL ENGINE 5 INTO POST",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-7",
    height: "h-[400px]"
  }
];

export function JournalTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="bg-background py-24 sm:py-32 lg:py-40 relative border-t border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="overflow-hidden mb-4">
              <motion.h2 
                variants={variants.lineMask}
                transition={{ duration: duration.section, ease: easing.entrance }}
                className="text-sm font-bold uppercase tracking-widest text-accent font-heading"
              >
                THE JOURNAL
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h3 
                variants={variants.lineMask}
                transition={{ duration: duration.section, ease: easing.entrance }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase font-heading leading-none"
              >
                INSIGHTS & <br /> CULTURE.
              </motion.h3>
            </div>
          </motion.div>

          <MagneticButton 
            className="group inline-flex w-fit items-center gap-4 border-b-2 border-foreground pb-2 text-lg font-bold tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </MagneticButton>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          {articles.map((article, idx) => (
            <JournalCard key={idx} article={article} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

interface Article {
  category: string;
  date: string;
  title: string;
  image: string;
  colSpan: string;
  height: string;
}

function JournalCard({ article, index }: { article: Article; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax for the image inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: duration.component, delay: index * 0.1, ease: easing.entrance }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${article.colSpan} ${article.height}`}
      data-cursor="READ"
    >
      <motion.div 
        style={{ y }} 
        className="absolute inset-[-15%] w-[130%] h-[130%]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover grayscale-[0.3] transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white">
            {article.category}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">
            {article.date}
          </span>
        </div>
        
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-white uppercase font-heading leading-tight drop-shadow-xl transition-transform duration-500 group-hover:translate-x-2">
          {article.title}
        </h4>
      </div>
    </motion.div>
  );
}
