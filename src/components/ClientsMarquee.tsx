"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Cloud, 
  Database, 
  Cpu, 
  Server, 
  Radio, 
  Globe, 
  Zap 
} from "lucide-react";

const clients = [
  { icon: Monitor, name: "TechVision" },
  { icon: Cloud, name: "CloudSync" },
  { icon: Database, name: "DataCore" },
  { icon: Cpu, name: "Quantum" },
  { icon: Server, name: "Nexus" },
  { icon: Radio, name: "Broadcast" },
  { icon: Globe, name: "GlobalNet" },
  { icon: Zap, name: "Bolt" },
];

// Duplicate for infinite scroll effect
const marqueeClients = [...clients, ...clients];

export function ClientsMarquee() {
  return (
    <section className="bg-black py-16 sm:py-24 overflow-hidden border-b border-white/5 relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-white/40 text-center font-heading">
          TRUSTED BY INDUSTRY LEADERS
        </p>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center shrink-0 w-fit"
        >
          {marqueeClients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 px-12 sm:px-16 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                <span className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white font-heading">
                  {client.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
