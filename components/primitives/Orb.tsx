"use client";
import { useReducedMotion } from "framer-motion";

type OrbVariant = "glass" | "twin" | "warm";

/** 一颗球，可选呼吸/浮动动画与同心涟漪 */
export function Orb({
  variant = "glass", size, ripples = [], animate, className = "",
}: {
  variant?: OrbVariant; size: number; ripples?: number[];
  animate?: "breathe" | "float"; className?: string;
}) {
  const reduce = useReducedMotion();
  const cls = variant === "twin" ? "orb-twin" : variant === "warm" ? "orb-warm" : "orb";
  const anim = reduce ? "" : animate === "breathe" ? "anim-breathe" : animate === "float" ? "anim-float" : "";
  const rippleCls = variant === "warm" ? "ripple ripple-warm" : "ripple";
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {ripples.map((r) => (
        <span key={r} className={rippleCls} style={{ width: r, height: r }} aria-hidden />
      ))}
      <div className={`${cls} ${anim}`} style={{ width: size, height: size }} aria-hidden />
    </div>
  );
}
