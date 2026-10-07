"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Disable on mobile
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.body.style.cursor = 'auto';
      return;
    }

    const cursor = cursorRef.current;
    const textEl = textRef.current;
    if (!cursor || !textEl) return;

    // Hide default cursor
    document.body.style.cursor = 'none';
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(styleEl);

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    
    let isHovering = false;
    let isVisible = false;
    let currentText = "";

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = "1";
      }
      
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      const cursorDataEl = target.closest('[data-cursor]');
      
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button');

      if (cursorDataEl) {
        isHovering = true;
        currentText = cursorDataEl.getAttribute('data-cursor') || "";
      } else if (isInteractive) {
        isHovering = true;
        currentText = "";
      } else {
        isHovering = false;
        currentText = "";
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    let rafId: number;

    const render = () => {
      // Lerp for smooth following
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      // Apply coordinates (using flat translate to prevent 3D layer promotion)
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

      // Apply size state smoothly using CSS transitions
      if (isHovering) {
        cursor.style.width = "64px";
        cursor.style.height = "64px";
        textEl.style.opacity = "1";
        textEl.innerText = currentText;
      } else {
        cursor.style.width = "12px";
        cursor.style.height = "12px";
        textEl.style.opacity = "0";
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = 'auto';
      if (styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex items-center justify-center font-bold tracking-[0.2em] text-[10px] bg-white rounded-full mix-blend-difference"
      style={{
        opacity: 0,
        width: "12px",
        height: "12px",
        transition: "width 0.2s ease-out, height 0.2s ease-out, opacity 0.3s",
      }}
    >
      <span 
        ref={textRef}
        className="mix-blend-normal text-black"
        style={{
          opacity: 0,
          transition: "opacity 0.2s ease-out",
        }}
      />
    </div>
  );
}
