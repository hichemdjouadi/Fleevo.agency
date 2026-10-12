"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers (desktop mouse)
    if (
      typeof window === "undefined" ||
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    const textEl = textRef.current;
    if (!cursor || !textEl) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    
    let isHovering = false;
    let isMouseDown = false;
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
      if (!target) return;

      const cursorDataEl = target.closest("[data-cursor]");
      const isInteractive = 
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button";

      if (cursorDataEl) {
        isHovering = true;
        currentText = cursorDataEl.getAttribute("data-cursor") || "";
      } else if (isInteractive) {
        isHovering = true;
        currentText = "";
      } else {
        isHovering = false;
        currentText = "";
      }
    };

    const onMouseDown = () => { isMouseDown = true; };
    const onMouseUp = () => { isMouseDown = false; };
    const onMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = "0";
    };
    const onMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    let rafId: number;

    let currentScale = 0.28;
    let targetScale = 0.28;

    const render = () => {
      // Smooth, responsive interpolation
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;

      if (isMouseDown) {
        targetScale = 0.22;
      } else if (isHovering) {
        targetScale = currentText ? 1.35 : 0.9;
      } else {
        targetScale = 0.28;
      }

      currentScale += (targetScale - currentScale) * 0.22;

      // Hardware accelerated transform without texture upscaling blur
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${currentScale.toFixed(4)})`;

      if (currentText && isHovering) {
        textEl.style.opacity = "1";
        textEl.innerText = currentText;
      } else {
        textEl.style.opacity = "0";
        textEl.innerText = "";
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[999999] hidden md:flex items-center justify-center font-mono font-bold tracking-[0.2em] text-[9px] w-11 h-11 bg-white rounded-full mix-blend-difference will-change-transform"
      style={{
        opacity: 0,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transition: "opacity 0.2s ease-out",
      }}
    >
      <span 
        ref={textRef}
        className="text-black select-none pointer-events-none text-[9px] font-bold"
        style={{
          opacity: 0,
          transition: "opacity 0.15s ease-out",
        }}
      />
    </div>
  );
}
