"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

/** 滚动视差：元素随滚动轻微上浮，制造层次与"丝滑"深度感。reduced-motion 时静止。 */
export function Parallax({
  children,
  amount = 46,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  if (reduce) {
    return (
      <div ref={ref} className={`relative ${className}`}>
        {children}
      </div>
    );
  }
  return (
    <motion.div ref={ref} style={{ y }} className={`relative ${className}`}>
      {children}
    </motion.div>
  );
}
