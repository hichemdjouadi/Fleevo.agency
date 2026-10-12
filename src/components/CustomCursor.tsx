"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Disable on mobile, touch, or reduced-motion environments
    if (
      typeof window === "undefined" ||
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      "ontouchstart" in window
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
        target.classList.contains("cursor-pointer");

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

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;

      let scale = 1;
      if (isMouseDown) {
        scale = 0.7;
      } else if (isHovering) {
        scale = currentText ? 2.6 : 1.8;
      }

      // Hardware accelerated transform without layout recalculations
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${scale})`;

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
      className="fixed top-0 left-0 pointer-events-none z-[999999] hidden md:flex items-center justify-center font-mono font-bold tracking-[0.2em] text-[10px] w-8 h-8 bg-white rounded-full mix-blend-difference will-change-transform"
      style={{
        opacity: 0,
        transition: "opacity 0.25s ease-out",
      }}
    >
      <span 
        ref={textRef}
        className="text-black select-none pointer-events-none text-[8px]"
        style={{
          opacity: 0,
          transition: "opacity 0.15s ease-out",
        }}
      />
    </div>
  );
}
