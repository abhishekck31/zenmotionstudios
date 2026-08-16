"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Neon Nights",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Flow",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Echoes of Silence",
    category: "Short Film",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Future Now",
    category: "Brand Anthem",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2564&auto=format&fit=crop",
  }
];

export function WorkGrid() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            SELECTED <br /> <span className="text-muted-foreground">WORKS</span>
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="/work"
            className="group flex items-center gap-2 font-semibold text-accent"
          >
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">View all projects</span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">View all projects</span>
            </span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-muted sm:aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
