"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { duration } from "@/lib/motion";

// Subscribe to nothing — this is a static value that only needs client-side reading
function subscribe() {
  return () => {};
}

function getIsTouchDevice() {
  return typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function getServerSnapshot() {
  return true; // Assume touch device on server to avoid rendering cursor during SSR
}

export function CustomCursor() {
  const isTouchDevice = useSyncExternalStore(subscribe, getIsTouchDevice, getServerSnapshot);
  const [hoverText, setHoverText] = useState("");
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const cursorElement = target.closest("[data-cursor]");
      if (cursorElement) {
        const text = cursorElement.getAttribute("data-cursor") || "";
        setHoverText(text);
        setIsHoveringLink(false);
        return;
      }

      if (target.closest("a") || target.closest("button")) {
        setHoverText("");
        setIsHoveringLink(true);
        return;
      }

      setIsHoveringLink(false);
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
  }, [isTouchDevice, cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: hoverText ? 80 : isHoveringLink ? 24 : 12,
        height: hoverText ? 80 : isHoveringLink ? 24 : 12,
        opacity: isClicking ? 0.5 : 1,
        scale: isClicking ? 0.8 : 1,
        backgroundColor: hoverText
          ? "rgba(255, 255, 255, 1)"
          : isHoveringLink
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 1)",
        borderWidth: isHoveringLink ? "1px" : "0px",
        borderColor: "rgba(255, 255, 255, 1)",
      }}
      transition={{ duration: duration.micro }}
    >
      <span
        className={`text-[10px] font-bold uppercase tracking-widest text-black transition-opacity duration-300 ${hoverText ? "opacity-100" : "opacity-0"}`}
      >
        {hoverText}
      </span>
    </motion.div>
  );
}
