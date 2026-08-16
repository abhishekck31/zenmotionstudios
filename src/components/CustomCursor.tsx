"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position for the main dot (instant)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Position for the follower ring (spring)
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for data-cursor attribute up the tree
      const cursorElement = target.closest('[data-cursor]');
      if (cursorElement) {
        const text = cursorElement.getAttribute('data-cursor') || "";
        setHoverText(text);
        setIsHovering(true);
        return;
      }
      
      // Check for links and buttons
      if (target.closest('a') || target.closest('button')) {
        setHoverText("");
        setIsHovering(true);
        return;
      }
      
      setIsHovering(false);
      setHoverText("");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:flex items-center justify-center rounded-full border border-white/50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoverText ? 80 : isHovering ? 50 : 32,
          height: hoverText ? 80 : isHovering ? 50 : 32,
          opacity: isClicking ? 0.5 : 1,
          scale: isClicking ? 0.8 : 1,
          backgroundColor: hoverText ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderWidth: hoverText ? "0px" : "1px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className={`text-[10px] font-bold uppercase tracking-widest text-black transition-opacity duration-300 ${hoverText ? 'opacity-100' : 'opacity-0'}`}>
          {hoverText}
        </span>
      </motion.div>
      
      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block h-2 w-2 rounded-full bg-accent mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: (isHovering || hoverText) ? 0 : 1,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
