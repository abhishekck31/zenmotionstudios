import { Metadata } from "next";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { AwardsList } from "@/components/AwardsList";

export const metadata: Metadata = {
  title: "Studio — Zenmotion",
  description: "Learn about our award-winning directors, editors, and motion designers.",
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white pt-24">
      {/* Studio Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <h1 className="text-5xl sm:text-7xl lg:text-[10vw] font-black tracking-tighter uppercase font-heading leading-none">
          THE <br /> STUDIO.
        </h1>
      </section>

      <About />
      <Process />
      <Stats />
      <Services />
      <AwardsList />
    </main>
  );
}
