"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { duration, easing } from "@/lib/motion";

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
      id="work"
      ref={containerRef} 
      className="relative h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="flex items-end justify-between overflow-hidden">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: duration.section, ease: easing.entrance }}
              className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl font-heading"
            >
              FEATURED <br />
              <span className="text-accent">WORK.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: duration.section, delay: duration.micro }}
              className="hidden md:block max-w-sm text-right text-lg text-white/50 font-medium"
            >
              A curated selection of our finest visual narratives and motion design projects.
            </motion.p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex h-[60vh] w-[400vw] sm:w-[300vw] lg:w-[200vw] xl:w-[400vw] pl-4 sm:pl-8 lg:pl-12 pt-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative h-full w-[85vw] sm:w-[70vw] lg:w-[50vw] xl:w-[90vw] shrink-0 pr-4 sm:pr-8"
              data-cursor="PLAY"
            >
              <Link href={`/work/${project.slug}`} className="block h-full w-full outline-none">
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  slug: string;
  client: string;
  category: string;
  video: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="group relative h-full w-full overflow-hidden rounded-2xl bg-white/5 cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        videoRef.current?.pause();
      }}
    >
      <motion.video
        ref={videoRef}
        muted
        loop
        playsInline
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: duration.section, ease: easing.entrance }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={project.video} type="video/mp4" />
      </motion.video>
      
      <motion.div 
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: duration.component }}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" 
      />
      
      <motion.div 
        animate={{ y: isHovered ? 0 : 20 }}
        transition={{ duration: duration.component, ease: easing.expressive }}
        className="absolute bottom-0 left-0 w-full p-8 sm:p-12"
      >
        <div className="flex items-center gap-4 mb-4 overflow-hidden">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: duration.ui, ease: easing.exit }}
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
      </motion.div>
    </div>
  );
}
