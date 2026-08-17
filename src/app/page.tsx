"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WorkGrid } from "@/components/WorkGrid";
import { Studio } from "@/components/Studio";
import { Stats } from "@/components/Stats";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Testimonials } from "@/components/Testimonials";
import { JournalTeaser } from "@/components/JournalTeaser";
import { ShowreelModal } from "@/components/ShowreelModal";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-white">
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <WorkGrid />
        <Studio />
        <Stats />
        <ClientsMarquee />
        <Testimonials />
        <Marquee />
        <JournalTeaser />
      </main>
      
      <ShowreelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
