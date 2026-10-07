"use client";

import React, { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousPos = useRef({ x: -100, y: -100 });
  const mousePos = useRef({ x: -100, y: -100 });
  
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const targetSize = isHovering ? 64 : 12;

  const animate = () => {
    if (!cursorRef.current) return;

    const currentX = previousPos.current.x;
    const currentY = previousPos.current.y;
    
    // We adjust the target position by half the target size to center the cursor
    const targetX = mousePos.current.x - targetSize / 2;
    const targetY = mousePos.current.y - targetSize / 2;

    const deltaX = (targetX - currentX) * 0.3;
    const deltaY = (targetY - currentY) * 0.3;

    const newX = currentX + deltaX;
    const newY = currentY + deltaY;

    previousPos.current = { x: newX, y: newY };
    
    // Use 2D translate to avoid translate3d hardware layer promotion
    cursorRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    cursorRef.current.style.width = `${targetSize}px`;
    cursorRef.current.style.height = `${targetSize}px`;

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.body.style.cursor = 'auto';
      return;
    }

    const styleEl = document.createElement('style');
    styleEl.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(styleEl);

    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };

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
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = "auto";
      if (styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
    };
  }, [animate, isHovering]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none rounded-full bg-white flex items-center justify-center font-bold tracking-[0.2em] text-[10px] mix-blend-difference z-[99999]"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.3s',
      }}
      aria-hidden="true"
    >
      {isHovering && (
        <span 
          className="mix-blend-normal text-black"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s' }}
        >
          {cursorText}
        </span>
      )}
    </div>
  );
}
