import { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work — Zenmotion",
  description: "A curated selection of our finest visual narratives and motion design projects.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white pt-24">
      {/* We can use the existing WorkGrid which handles its own layout and scroll */}
      <WorkGrid />
    </main>
  );
}
