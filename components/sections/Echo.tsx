import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

// 情绪丝带上的发光节点（柔和粉彩，非数据图表）
const NODES = [
  { x: 12, y: 60, c: "#aab2c0" },
  { x: 100, y: 44, c: "#7fb4f0" },
  { x: 178, y: 50, c: "#f4cf6a" },
  { x: 256, y: 26, c: "#f3a39c" },
  { x: 348, y: 40, c: "#b9a6ee" },
];

const RIBBON = "M12 60 C 50 30, 74 30, 100 44 C 130 60, 152 60, 178 50 C 212 36, 232 16, 256 26 C 300 44, 322 42, 348 40";

export function Echo() {
  const e = content.echo;
  const media = (
    <div className="glass relative w-full max-w-[420px] overflow-hidden p-9 sm:p-10">
      <svg viewBox="0 0 360 92" fill="none" className="mb-6 block h-[92px] w-full" aria-hidden>
        <defs>
          <linearGradient id="ribbonStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9fd2f3" />
            <stop offset="0.55" stopColor="#7fb4f0" />
            <stop offset="1" stopColor="#d9b98a" />
          </linearGradient>
          <linearGradient id="ribbonFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(127,180,240,.16)" />
            <stop offset="1" stopColor="rgba(127,180,240,0)" />
          </linearGradient>
          <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.4" />
          </filter>
        </defs>
        <path d={`${RIBBON} L348 92 L12 92 Z`} fill="url(#ribbonFill)" />
        <path d={RIBBON} stroke="url(#ribbonStroke)" strokeWidth="2.5" strokeLinecap="round" />
        {NODES.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="8" fill={n.c} opacity="0.4" filter="url(#nodeGlow)" />
            <circle cx={n.x} cy={n.y} r="3.4" fill={n.c} stroke="rgba(255,255,255,.85)" strokeWidth="1.2" />
          </g>
        ))}
      </svg>
      <div className="eyebrow mb-[14px]">{e.letterMeta}</div>
      <div className="serif text-[19px] leading-[1.75] text-ink">{e.letterExcerpt[0]}<br />{e.letterExcerpt[1]}</div>
    </div>
  );
  return (
    <Section id="echo">
      <TwoCol media={media} reverse>
        <Reveal><span className="eyebrow">{e.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2 className="serif my-[18px] text-[32px] font-semibold leading-[1.3] text-ink sm:text-[40px]">{e.title[0]}<br />{e.title[1]}</h2></Reveal>
        <Reveal delay={160}><p className="max-w-[560px] text-[17px] leading-[1.85] text-muted">{e.body}</p></Reveal>
      </TwoCol>
    </Section>
  );
}
