"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "NEON DREAMS",
    category: "Commercial / VFX",
    video: "https://player.vimeo.com/external/494254884.sd.mp4?s=d00e57200ef9019623e19875bb2f07d2f92461be&profile_id=164&oauth2_token_id=57447761",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "ECHOES",
    category: "Short Film / Color",
    video: "https://player.vimeo.com/external/517090022.sd.mp4?s=d00e57200ef9019623e19875bb2f07d2f92461be&profile_id=164&oauth2_token_id=57447761",
    image: "https://images.unsplash.com/photo-1518116348398-0c65538e14cb?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "VELOCITY",
    category: "Automotive / Edit",
    video: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2814&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "SYNTHESIS",
    category: "Music Video / 3D",
    video: "https://player.vimeo.com/external/530206122.sd.mp4?s=a7f23c0356e63df8a011d8d85f5223a8b4ec8b9f&profile_id=164&oauth2_token_id=57447761",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
];

export function WorkGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            SELECTED WORK
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            href="/work" 
            className="group relative inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
          >
            View All Projects
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex cursor-pointer flex-col gap-4 ${
                index % 2 !== 0 ? "md:mt-24" : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    hoveredId === project.id ? "opacity-0" : "opacity-100"
                  }`}
                />
                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  autoPlay={hoveredId === project.id}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 scale-90">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl">
                    <span className="text-xs font-bold tracking-widest uppercase">Play</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-widest text-white/50">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
