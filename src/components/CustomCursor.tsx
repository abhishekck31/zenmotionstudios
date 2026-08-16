"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Only show on devices with hover capability
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" || 
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;

      setIsPointer(isClickable);

      // Check for custom cursor text
      const cursorElement = target.closest('[data-cursor]');
      if (cursorElement) {
        setCursorText(cursorElement.getAttribute('data-cursor') || "");
      } else {
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          body, a, button {
            cursor: none !important;
          }
        }
      `}} />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99999] flex items-center justify-center rounded-full bg-accent mix-blend-difference overflow-hidden"
        animate={{
          x: mousePosition.x - (isPointer || cursorText ? 32 : 8),
          y: mousePosition.y - (isPointer || cursorText ? 32 : 8),
          width: isPointer || cursorText ? 64 : 16,
          height: isPointer || cursorText ? 64 : 16,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold text-white uppercase tracking-widest text-center px-2 mix-blend-normal"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
