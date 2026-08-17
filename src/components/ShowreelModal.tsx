"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="h-8 w-8" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              delay: 0.1,
            }}
            className="relative w-full max-w-6xl aspect-video mx-4 sm:mx-8 bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm font-medium tracking-widest animate-pulse">
              LOADING SHOWREEL
            </div>

            <iframe
              src="https://player.vimeo.com/video/372332616?h=df1239c4d9&autoplay=1&loop=1&title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full z-10"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
