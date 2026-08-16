"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-6">
              LET&apos;S CREATE <br />
              <span className="text-accent">SOMETHING BIG.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-sm mb-8">
              We are always looking for new challenges and visionary partners.
            </p>
            <a href="mailto:hello@zenmotion.studio" className="inline-block border-b-2 border-accent pb-1 text-xl font-medium hover:text-accent transition-colors">
              hello@zenmotion.studio
            </a>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wider uppercase text-white/50">Social</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Vimeo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Behance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wider uppercase text-white/50">Studio</h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground">123 Creative Block</li>
              <li className="text-muted-foreground">Design District, NY 10001</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} ZENMOTION Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Huge background text */}
      <div className="absolute bottom-[-10%] left-0 w-full overflow-hidden pointer-events-none select-none z-0 opacity-[0.03]">
        <h1 className="text-[20vw] font-black tracking-tighter text-center leading-none whitespace-nowrap">
          ZENMOTION
        </h1>
      </div>
    </footer>
  );
}
