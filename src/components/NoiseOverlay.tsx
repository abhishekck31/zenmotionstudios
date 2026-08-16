"use client";

import { useEffect, useRef } from "react";

export function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const drawNoise = () => {
      if (!ctx || width === 0 || height === 0) return;
      
      const idata = ctx.createImageData(width, height);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      
      for (let i = 0; i < len; i++) {
        // Only generate grayscale noise
        if (Math.random() < 0.1) {
          const v = Math.random() * 255;
          buffer32[i] = 0xff000000 | (v << 16) | (v << 8) | v;
        } else {
          buffer32[i] = 0xff000000;
        }
      }
      
      ctx.putImageData(idata, 0, 0);
    };

    const loop = () => {
      drawNoise();
      // Slow down the noise animation slightly for a more cinematic feel
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(loop);
      }, 50);
    };

    resize();
    window.addEventListener("resize", resize);
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.03] mix-blend-difference"
      aria-hidden="true"
    />
  );
}
