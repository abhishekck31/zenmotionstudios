import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock data - in a real app this would come from a CMS or API
const projects = {
  "neon-dreams": {
    title: "NEON DREAMS",
    client: "Cyber Corp",
    category: "Commercial / VFX",
    year: "2023",
    role: "Full Post-Production",
    description: "A cyberpunk-inspired commercial campaign for Cyber Corp's latest hardware release. We handled offline editing, intensive CGI integration, and a neon-soaked color grade.",
    video: "https://cdn.coverr.co/videos/coverr-cyberpunk-city-at-night-5244/1080p.mp4",
    credits: [
      { role: "Director", name: "Alex K." },
      { role: "Lead Editor", name: "Sarah J." },
      { role: "VFX Supervisor", name: "Marcus C." },
      { role: "Colorist", name: "Elena R." },
    ]
  },
  "echoes-of-silence": {
    title: "ECHOES OF SILENCE",
    client: "Soundscape",
    category: "Music Video",
    year: "2024",
    role: "Editing & Color",
    description: "An atmospheric and moody music video relying heavily on rhythmic editing and a desaturated, high-contrast aesthetic to match the sonic landscape.",
    video: "https://cdn.coverr.co/videos/coverr-dj-playing-music-at-a-party-5240/1080p.mp4",
    credits: [
      { role: "Director", name: "James W." },
      { role: "Editor", name: "David C." },
      { role: "Colorist", name: "Elena R." },
    ]
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects[params.slug as keyof typeof projects];
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} — Zenmotion` };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];
  
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white pb-32">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src={project.video} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute top-8 left-4 sm:left-8 z-50">
          <Link href="/" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Studio</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 lg:p-16 z-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              {project.category}
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              {project.year}
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-[10vw] font-black tracking-tighter uppercase font-heading leading-none drop-shadow-2xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-white/90 leading-relaxed">
              {project.description}
            </h2>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Client</h3>
              <p className="text-xl font-bold uppercase tracking-wider">{project.client}</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Our Role</h3>
              <p className="text-xl font-bold uppercase tracking-wider">{project.role}</p>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Credits</h3>
              <ul className="flex flex-col gap-4">
                {project.credits.map((credit, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-sm text-white/70 font-medium">{credit.role}</span>
                    <span className="text-sm font-bold uppercase tracking-wider">{credit.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Teaser (Placeholder) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 text-center" data-cursor="NEXT">
        <div className="inline-block relative group cursor-pointer">
          <p className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 transition-colors group-hover:text-accent">
            Up Next
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-heading transition-colors group-hover:text-accent">
            THE ASCENT
          </h2>
        </div>
      </section>
    </main>
  );
}
