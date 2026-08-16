"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <div 
      className="relative h-[800px] sm:h-[600px] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="fixed bottom-0 w-full h-[800px] sm:h-[600px] bg-black text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 border-t border-white/10 flex flex-col justify-between overflow-hidden">
        
        {/* Dynamic Abstract Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,51,102,0.15)_0%,rgba(0,0,0,0)_60%)]" />

        <div className="container mx-auto relative z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">ZENMOTION</h3>
            <p className="max-w-xs text-muted-foreground font-medium">
              A premium digital creative agency crafting award-winning video editing and motion design experiences.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white/50">Socials</h4>
            <ul className="space-y-4">
              {['Instagram', 'Twitter (X)', 'LinkedIn', 'Vimeo', 'Behance'].map((social) => (
                <li key={social}>
                  <a href="#" className="group inline-flex items-center gap-2 text-lg font-medium transition-colors hover:text-accent">
                    {social}
                    <span className="block h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white/50">Company</h4>
            <ul className="space-y-4">
              {['About', 'Work', 'Services', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="group inline-flex items-center gap-2 text-lg font-medium transition-colors hover:text-accent">
                    {item}
                    <span className="block h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white/50">Newsletter</h4>
            <p className="text-muted-foreground font-medium">Subscribe for insights and inspiration.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent rounded-sm"
              />
              <button 
                type="submit" 
                className="bg-white text-black px-6 py-3 font-semibold hover:bg-accent hover:text-white transition-colors rounded-sm"
              >
                Join
              </button>
            </form>
          </div>
          
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row mt-12 sm:mt-auto">
          <p className="text-sm font-medium text-white/40">
            © {new Date().getFullYear()} Zenmotion Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-white/40">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Oversized typography effect */}
        <div className="absolute -bottom-8 left-0 right-0 overflow-hidden pointer-events-none opacity-5 select-none flex justify-center">
          <h1 className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap leading-none font-heading">
            ZENMOTION
          </h1>
        </div>
      </footer>
    </div>
  );
}
