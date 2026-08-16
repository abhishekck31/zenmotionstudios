"use client";

import { useState } from "react";
import { WorkGrid } from "@/components/WorkGrid";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { ShowreelModal } from "@/components/ShowreelModal";
import { Hero } from "@/components/Hero";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-white">
      <main className="flex-1">
        <Hero />
        
        <Marquee />
        <About />
        <Stats />
        <WorkGrid />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      
      <ShowreelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
