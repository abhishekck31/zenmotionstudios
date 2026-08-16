"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "NEON DREAMS",
    slug: "neon-dreams",
    client: "Cyber Corp",
    category: "Commercial / VFX",
    video: "https://cdn.coverr.co/videos/coverr-cyberpunk-city-at-night-5244/1080p.mp4",
  },
  {
    title: "ECHOES OF SILENCE",
    slug: "echoes-of-silence",
    client: "Soundscape",
    category: "Music Video",
    video: "https://cdn.coverr.co/videos/coverr-dj-playing-music-at-a-party-5240/1080p.mp4",
  },
  {
    title: "THE ASCENT",
    slug: "neon-dreams", // reusing slug for demo
    client: "Alpine Gear",
    category: "Documentary",
    video: "https://cdn.coverr.co/videos/coverr-snowy-mountain-peaks-in-the-clouds-5226/1080p.mp4",
  },
  {
    title: "LIQUID GOLD",
    slug: "echoes-of-silence", // reusing slug for demo
    client: "Aura Fragrances",
    category: "Product / Motion",
    video: "https://cdn.coverr.co/videos/coverr-pouring-honey-5214/1080p.mp4",
  },
];

export function WorkGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="flex items-end justify-between">
            <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl font-heading">
              FEATURED <br />
              <span className="text-accent">WORK.</span>
            </h2>
            <p className="hidden md:block max-w-sm text-right text-lg text-white/50 font-medium">
              A curated selection of our finest visual narratives and motion design projects.
            </p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex h-[60vh] w-[400vw] sm:w-[300vw] lg:w-[200vw] xl:w-[400vw] pl-4 sm:pl-8 lg:pl-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative h-full w-[85vw] sm:w-[70vw] lg:w-[50vw] xl:w-[90vw] shrink-0 pr-4 sm:pr-8"
              data-cursor="EXPLORE"
            >
              <Link href={`/work/${project.slug}`} className="block h-full w-full">
                <ProjectCard project={project} index={index} />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="group relative h-full w-full overflow-hidden rounded-2xl bg-white/5"
      onMouseEnter={() => {
        setIsHovered(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        videoRef.current?.pause();
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <source src={project.video} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        <div className="flex items-center gap-4 mb-4 overflow-hidden">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent">{project.category}</span>
            <span className="text-white/30">•</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/50">{project.client}</span>
          </motion.div>
        </div>
        
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase font-heading drop-shadow-lg">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
