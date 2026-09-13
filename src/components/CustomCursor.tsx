"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide on mobile devices inherently
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      // Set to exact mouse coordinates (CSS -50% translation handles centering)
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check for data-cursor on hovered elements
      const target = e.target as HTMLElement;
      const cursorElement = target.closest('[data-cursor]');
      
      // ONLY trigger hover on specific elements (Buttons) and NOT normal <a> links
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

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.getBoundingClientRect) {
        const rect = target.getBoundingClientRect();
        // Jump to the center of the focused element
        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
        
        setCursorText(target.getAttribute('data-cursor') || "");
        if (!isHovering) setIsHovering(true);
        if (!isVisible) setIsVisible(true);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("focusin", handleFocus);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("focusin", handleFocus);
    };
  }, [cursorX, cursorY, isHovering, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="flex items-center justify-center font-bold tracking-[0.2em] text-[10px] text-black bg-white"
        style={{
          x: "-50%",
          y: "-50%",
        }}
        initial={{ width: 16, height: 16, borderRadius: "50%" }}
        animate={{ 
          width: isHovering ? 80 : 16,
          height: isHovering ? 80 : 16,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      >
        {isHovering && (
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.2 }}
            className="mix-blend-normal"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
