"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
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

    const isElementFormControl = (el: HTMLElement | null) => {
      if (!el) return false;
      const tag = el.tagName?.toLowerCase();
      return (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        el.isContentEditable ||
        Boolean(el.closest("input, textarea, select, [contenteditable='true']"))
      );
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (isElementFormControl(target)) {
        cursorX = mouseX;
        cursorY = mouseY;
        isVisible = false;
        isHovering = false;
        currentText = "";
        cursor.style.opacity = "0";
        return;
      }

      if (!isVisible) {
        cursorX = mouseX;
        cursorY = mouseY;
        isVisible = true;
      }
      cursor.style.opacity = "1";

      const cursorDataEl = target.closest("[data-cursor]");
      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        Boolean(target.closest("a")) ||
        Boolean(target.closest("button")) ||
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

    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (isElementFormControl(target)) {
        isVisible = false;
        isHovering = false;
        currentText = "";
        cursor.style.opacity = "0";
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };
    const onMouseUp = () => {
      isMouseDown = false;
    };
    const onMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = "0";
    };
    const onMouseEnter = () => {
      const active = document.activeElement as HTMLElement | null;
      if (!isElementFormControl(active)) {
        isVisible = true;
        cursor.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("focusin", onFocusIn, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    let rafId: number;
    let currentScale = 0.15;
    let targetScale = 0.15;

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;

      if (isMouseDown) {
        targetScale = currentText ? 0.9 : 0.12;
      } else if (currentText) {
        targetScale = 1.0;
      } else if (isHovering) {
        targetScale = 0.45;
      } else {
        targetScale = 0.15;
      }

      currentScale += (targetScale - currentScale) * 0.22;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${currentScale.toFixed(4)})`;

      if (currentText && isHovering) {
        textEl.style.opacity = "1";
        if (textEl.innerText !== currentText) {
          textEl.innerText = currentText;
        }
      } else {
        textEl.style.opacity = "0";
        if (textEl.innerText !== "") {
          textEl.innerText = "";
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("focusin", onFocusIn);
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
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[999999] hidden md:flex items-center justify-center w-20 h-20 bg-white rounded-full mix-blend-difference will-change-transform"
      style={{
        opacity: 0,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transition: "opacity 0.2s ease-out",
      }}
    >
      <span
        ref={textRef}
        className="text-black select-none pointer-events-none text-xs font-mono font-bold uppercase tracking-wider text-center px-2 whitespace-nowrap"
        style={{
          opacity: 0,
          transition: "opacity 0.15s ease-out",
        }}
      />
    </div>
  );
}
