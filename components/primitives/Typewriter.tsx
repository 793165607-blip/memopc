"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** 进入视口后逐字浮现，呼应"书写"。reduced-motion 时全文直出。全文始终在 DOM（sr-only）保证可读性。 */
export function Typewriter({ text, speed = 55, className = "" }: { text: string; speed?: number; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduce || !inView || n >= text.length) return;
    const t = setTimeout(() => setN((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [reduce, inView, n, text.length, speed]);

  const shown = reduce ? text : text.slice(0, n);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{shown}</span>
      <span className="sr-only">{text}</span>
      <span className="write-cursor" aria-hidden />
    </span>
  );
}
