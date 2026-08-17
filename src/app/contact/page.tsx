import { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Zenmotion",
  description: "Get in touch with us for your next project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-accent text-black selection:bg-black selection:text-white flex flex-col pt-24">
      {/* We reuse the Contact component but allow it to expand to fill the screen */}
      <div className="flex-1 flex flex-col justify-center">
        <Contact />
      </div>
    </main>
  );
}
