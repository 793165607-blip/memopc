"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

// 极简单色情绪丝带：一条柔和细线 + 渐隐面积 + 末端一个微光点
const RIBBON = "M12 56 C 60 30, 96 32, 140 46 C 188 62, 220 30, 262 30 C 304 30, 326 42, 348 40";

/** 进入视口时丝带被"一笔写出"（pathLength 0→1），呼应"它会写一封信给你"。reduced-motion 时静态满绘。 */
export function EchoRibbon() {
  const reduce = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const draw = reduce || inView;

  return (
    <svg ref={ref} viewBox="0 0 360 80" fill="none" className="mb-7 block h-[76px] w-full" aria-hidden>
      <defs>
        <linearGradient id="ribbonStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(127,180,240,.18)" />
          <stop offset="0.4" stopColor="rgba(127,180,240,.62)" />
          <stop offset="1" stopColor="rgba(150,160,185,.45)" />
        </linearGradient>
        <linearGradient id="ribbonFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(127,180,240,.10)" />
          <stop offset="1" stopColor="rgba(127,180,240,0)" />
        </linearGradient>
        <filter id="nodeGlow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
      </defs>
      <motion.path
        d={`${RIBBON} L348 80 L12 80 Z`}
        fill="url(#ribbonFill)"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: draw ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      />
      <motion.path
        d={RIBBON}
        stroke="url(#ribbonStroke)"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: draw ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.g
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: draw ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
      >
        <circle cx="348" cy="40" r="7" fill="rgba(127,180,240,.9)" opacity="0.28" filter="url(#nodeGlow)" />
        <circle cx="348" cy="40" r="2.6" fill="rgba(96,165,250,.95)" stroke="rgba(255,255,255,.9)" strokeWidth="1" />
      </motion.g>
    </svg>
  );
}
