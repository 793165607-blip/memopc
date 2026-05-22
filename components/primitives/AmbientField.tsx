// 漂浮氛围粒子（参照 App FloatingOrbs 的 ambient particles）。
// 固定位置，避免 SSR/CSR 不一致；通过 .particle 的 twinkle 动画（reduced-motion 时全局停用）。
const PARTICLES = [
  { l: "8%", t: "14%", s: 2.4, d: 5.0, dl: 0 },
  { l: "88%", t: "10%", s: 1.6, d: 6.2, dl: 0.8 },
  { l: "34%", t: "88%", s: 2.0, d: 7.0, dl: 1.4 },
  { l: "5%", t: "56%", s: 2.2, d: 4.4, dl: 0.4 },
  { l: "92%", t: "64%", s: 1.4, d: 6.6, dl: 1.1 },
  { l: "50%", t: "94%", s: 1.8, d: 4.8, dl: 2.0 },
  { l: "74%", t: "44%", s: 1.4, d: 5.6, dl: 0.6 },
  { l: "20%", t: "78%", s: 2.6, d: 5.2, dl: 1.7 },
  { l: "61%", t: "8%", s: 1.8, d: 4.0, dl: 0.2 },
  { l: "15%", t: "34%", s: 1.5, d: 6.8, dl: 2.3 },
  { l: "43%", t: "20%", s: 2.8, d: 5.8, dl: 1.0 },
  { l: "68%", t: "76%", s: 2.0, d: 4.6, dl: 0.5 },
  { l: "26%", t: "50%", s: 1.3, d: 7.2, dl: 1.9 },
  { l: "82%", t: "30%", s: 1.9, d: 5.4, dl: 0.9 },
  { l: "55%", t: "62%", s: 1.6, d: 6.0, dl: 2.4 },
];

export function AmbientField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDuration: `${p.d}s`, animationDelay: `${p.dl}s` }}
        />
      ))}
    </div>
  );
}
