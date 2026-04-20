"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const ringWrapperRef = useRef<HTMLDivElement>(null);
  
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    // Check if it's a touch device or no fine pointer
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const target = e.target as HTMLElement;
      if (!target) return;

      const hoverTarget = target.closest(
        'a, button, summary, [role="button"], [data-cursor-glow="true"]'
      );
      
      const isHoverable = !!hoverTarget && hoverTarget.getAttribute('data-cursor-glow') !== 'false';
      setIsHovering(isHoverable);
    };

    const animate = () => {
      // Very fast follow for dot
      dotX += (mouseX - dotX) * 0.4;
      dotY += (mouseY - dotY) * 0.4;
      
      // Smooth lerp for ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (dotWrapperRef.current) {
        dotWrapperRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      
      if (ringWrapperRef.current) {
        ringWrapperRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}} />
      
      <div className="hidden md:block">
        {/* EXTERNAL WRAPPER FOR RING (Handles Position ONLY) */}
        <div
          ref={ringWrapperRef}
          className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
          style={{ transform: 'translate3d(-100px, -100px, 0)' }}
        >
          {/* INTERNAL VISUAL RING (Handles Scale/Transitions) */}
          <div
            className={`
              w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 
              flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]
              transition-[transform,background-color,border-color,opacity,backdrop-filter] duration-300 ease-out
              ${isHovering ? "scale-[1.8] border-primary/80 bg-primary/10 backdrop-blur-[1px]" : "scale-100"}
              ${isClicking ? "scale-90 bg-primary/30" : ""}
            `}
          >
            {/* Hover Dot inside ring */}
            <div className={`w-0.5 h-0.5 rounded-full bg-primary transition-all duration-300 ${isHovering ? 'scale-[3] opacity-100' : 'scale-0 opacity-0'}`} />
          </div>
        </div>
        
        {/* EXTERNAL WRAPPER FOR DOT (Handles Position ONLY) */}
        <div
          ref={dotWrapperRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
          style={{ transform: 'translate3d(-100px, -100px, 0)' }}
        >
          {/* INTERNAL VISUAL DOT */}
          <div
            className={`
              w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full 
              shadow-[0_0_10px_rgba(16,185,129,0.8)]
              transition-[transform,opacity] duration-200 ease-out
              ${isHovering ? "scale-0 opacity-0" : "scale-100 opacity-100"}
              ${isClicking ? "scale-50" : ""}
            `}
          />
        </div>
      </div>
    </>
  );
}
