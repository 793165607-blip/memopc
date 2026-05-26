"use client";
import { useReducedMotion } from "framer-motion";

type OrbVariant = "glass" | "twin" | "warm";

type Glow = { c: string; top: string; left: string; w: string };

/** 克制的单色调内辉（每个变体 2 团，近单色，留白为主）——更简约高级 */
const GLOWS: Record<OrbVariant, Glow[]> = {
  glass: [
    { c: "rgba(206,222,240,.50)", top: "24%", left: "22%", w: "60%" },
    { c: "rgba(226,232,246,.34)", top: "48%", left: "44%", w: "48%" },
  ],
  twin: [
    { c: "rgba(178,216,240,.50)", top: "24%", left: "22%", w: "60%" },
    { c: "rgba(170,210,200,.30)", top: "50%", left: "42%", w: "46%" },
  ],
  warm: [
    { c: "rgba(247,210,180,.48)", top: "28%", left: "22%", w: "60%" },
    { c: "rgba(245,222,228,.28)", top: "50%", left: "44%", w: "46%" },
  ],
};

/** 念念风格玻璃球：透明壳 + 克制单色内辉（缓慢旋转）+ 脆利高光 + 底部折射 + 外晕 + 可选涟漪 */
export function Orb({
  variant = "glass",
  size,
  ripples = [],
  className = "",
}: {
  variant?: OrbVariant;
  size: number;
  ripples?: number[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const glows = GLOWS[variant];
  const auraSize = Math.round(size * 1.5);
  const wrap = Math.max(auraSize, ...(ripples.length ? ripples : [0]));

  return (
    <div className={`orb-wrap ${className}`} style={{ width: wrap, height: wrap }} aria-hidden>
      <span
        className={`orb-aura ${reduce ? "" : "anim-aura"}`}
        style={{ left: "50%", top: "50%", marginLeft: -auraSize / 2, marginTop: -auraSize / 2, width: auraSize, height: auraSize }}
      />
      {ripples.map((r) => (
        <span key={r} className={variant === "warm" ? "ripple ripple-warm" : "ripple"} style={{ width: r, height: r }} />
      ))}
      <div className={`orb-shell ${reduce ? "" : "anim-orb"}`} style={{ width: size, height: size }}>
        <div className={`orb-interior ${reduce ? "" : "anim-spin-slow"}`}>
          {glows.map((g, i) => (
            <span key={i} className="orb-glow" style={{ background: g.c, top: g.top, left: g.left, width: g.w, height: g.w }} />
          ))}
        </div>
        <div className="orb-floor" />
        <div className="orb-specular" />
        <div className="orb-glint" />
      </div>
    </div>
  );
}
