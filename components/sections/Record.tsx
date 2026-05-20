import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

const DOTS = [
  { c: "var(--m-joy)", style: { left: "8%", top: "14%" } },
  { c: "var(--m-calm)", style: { right: "12%", top: "22%" } },
  { c: "var(--m-tired)", style: { right: "18%", bottom: "24%" } },
  { c: "var(--m-tangle)", style: { left: "14%", bottom: "20%" } },
];

export function Record() {
  const r = content.record;
  const media = (
    <div className="glass relative w-full max-w-[400px] p-[34px_30px]" style={{ minHeight: 230, padding: "34px 30px" }}>
      <div className="pointer-events-none absolute inset-0">
        {DOTS.map((d, i) => (<span key={i} className="mood-dot" style={{ background: d.c, ...d.style }} aria-hidden />))}
      </div>
      <div className="serif text-[26px] tracking-[.04em] text-ink">{r.writingLine}<span className="write-cursor" /></div>
      <div className="mt-[30px] flex flex-wrap gap-[10px]">
        {r.modes.map((m) => (<span key={m} className="mode-chip">{m}</span>))}
      </div>
    </div>
  );
  return (
    <Section id="record">
      <TwoCol media={media}>
        <Reveal><span className="eyebrow">{r.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2 className="serif my-[18px] text-[32px] font-semibold leading-[1.3] text-ink sm:text-[40px]">{r.title[0]}<br />{r.title[1]}</h2></Reveal>
        <Reveal delay={160}><p className="max-w-[560px] text-[17px] leading-[1.85] text-muted">{r.body}</p></Reveal>
      </TwoCol>
    </Section>
  );
}
