import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

// 极简单色情绪丝带：一条柔和细线 + 渐隐面积 + 末端一个微光点
const RIBBON = "M12 56 C 60 30, 96 32, 140 46 C 188 62, 220 30, 262 30 C 304 30, 326 42, 348 40";

export function Echo() {
  const e = content.echo;
  const media = (
    <div className="glass relative w-full max-w-[420px] overflow-hidden p-9 sm:p-10">
      <svg viewBox="0 0 360 80" fill="none" className="mb-7 block h-[76px] w-full" aria-hidden>
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
        <path d={`${RIBBON} L348 80 L12 80 Z`} fill="url(#ribbonFill)" />
        <path d={RIBBON} stroke="url(#ribbonStroke)" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="348" cy="40" r="7" fill="rgba(127,180,240,.9)" opacity="0.28" filter="url(#nodeGlow)" />
        <circle cx="348" cy="40" r="2.6" fill="rgba(96,165,250,.95)" stroke="rgba(255,255,255,.9)" strokeWidth="1" />
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
