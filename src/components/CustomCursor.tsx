"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast spring for the small dot
  const dotSpringConfig = { damping: 40, stiffness: 1000, mass: 0.05 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

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
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex items-center justify-center font-bold tracking-[0.2em] text-[10px] bg-white rounded-full mix-blend-difference"
      style={{
        x: dotX,
        y: dotY,
        opacity: isVisible ? 1 : 0,
      }}
      initial={{ 
        width: 12, 
        height: 12,
        marginLeft: -6,
        marginTop: -6
      }}
      animate={{ 
        width: isHovering ? 64 : 12,
        height: isHovering ? 64 : 12,
        marginLeft: isHovering ? -32 : -6,
        marginTop: isHovering ? -32 : -6
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
    >
      {isHovering && (
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.2 }}
          className="mix-blend-normal text-black"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
