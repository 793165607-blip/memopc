"use client";
import { useReducedMotion } from "framer-motion";

type OrbVariant = "glass" | "twin" | "warm";

type Glow = { c: string; top: string; left: string; w: string };

/** 内部柔和粉彩辉光（参照 App OrbInterior 的 peach/cyan/lavender/pink/powder 调色） */
const GLOWS: Record<OrbVariant, Glow[]> = {
  glass: [
    { c: "rgba(210,225,240,.60)", top: "26%", left: "16%", w: "64%" },
    { c: "rgba(215,230,247,.52)", top: "10%", left: "48%", w: "50%" },
    { c: "rgba(225,227,246,.48)", top: "52%", left: "40%", w: "56%" },
    { c: "rgba(255,214,169,.30)", top: "60%", left: "14%", w: "42%" },
  ],
  twin: [
    { c: "rgba(215,230,247,.60)", top: "22%", left: "18%", w: "62%" },
    { c: "rgba(159,210,243,.50)", top: "14%", left: "46%", w: "50%" },
    { c: "rgba(160,214,196,.44)", top: "54%", left: "34%", w: "54%" },
    { c: "rgba(225,227,246,.40)", top: "58%", left: "14%", w: "42%" },
  ],
  warm: [
    { c: "rgba(255,214,169,.58)", top: "30%", left: "18%", w: "64%" },
    { c: "rgba(255,214,223,.50)", top: "12%", left: "46%", w: "52%" },
    { c: "rgba(215,230,247,.40)", top: "54%", left: "40%", w: "50%" },
    { c: "rgba(225,227,246,.38)", top: "60%", left: "14%", w: "44%" },
  ],
};

/** 一颗念念风格的玻璃球：透明壳 + 内部粉彩辉光 + 高光 + 外晕 + 可选涟漪 */
export function Orb({
  variant = "glass",
  size,
  ripples = [],
  className = "",
}: {
  variant?: OrbVariant;
  size: number;
  ripples?: number[];
  animate?: "breathe" | "float";
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
        <div className="orb-interior">
          {glows.map((g, i) => (
            <span
              key={i}
              className={`orb-glow ${reduce ? "" : "anim-glow"}`}
              style={{ background: g.c, top: g.top, left: g.left, width: g.w, height: g.w, animationDelay: `${i * 1.3}s` }}
            />
          ))}
        </div>
        <div className="orb-specular" />
        <div className="orb-glint" />
      </div>
    </div>
  );
}
