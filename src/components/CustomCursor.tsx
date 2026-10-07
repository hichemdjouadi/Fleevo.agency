"use client";

import { useEffect, useState, useRef } from "react";
import { useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast spring for the small dot
  const dotSpringConfig = { damping: 40, stiffness: 1000, mass: 0.05 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Manually update the DOM to bypass Framer Motion's hardware acceleration injection
  useMotionValueEvent(dotX, "change", (latestX) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${latestX}px, ${dotY.get()}px) translate(-50%, -50%)`;
    }
  });

  useMotionValueEvent(dotY, "change", (latestY) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${dotX.get()}px, ${latestY}px) translate(-50%, -50%)`;
    }
  });

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.body.style.cursor = 'auto';
      return;
    }

    document.body.style.cursor = 'none';

    const styleEl = document.createElement('style');
    styleEl.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(styleEl);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const cursorElement = target.closest('[data-cursor]');
      
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button');

      if (cursorElement) {
        setCursorText(cursorElement.getAttribute('data-cursor') || "");
        if (!isHovering) setIsHovering(true);
      } else if (isInteractive) {
        setCursorText("");
        if (!isHovering) setIsHovering(true);
      } else {
        setCursorText("");
        if (isHovering) setIsHovering(false);
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = 'auto';
      if (styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
    };
  }, [mouseX, mouseY, isHovering, isVisible]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex items-center justify-center font-bold tracking-[0.2em] text-[10px] bg-white rounded-full mix-blend-difference"
      style={{
        opacity: isVisible ? 1 : 0,
        width: isHovering ? "64px" : "12px",
        height: isHovering ? "64px" : "12px",
        transition: "width 0.2s ease-out, height 0.2s ease-out, opacity 0.3s",
      }}
    >
      <span 
        className="mix-blend-normal text-black"
        style={{
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.2s ease-out",
        }}
      >
        {cursorText}
      </span>
    </div>
  );
}
