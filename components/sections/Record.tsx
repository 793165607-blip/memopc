import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { Typewriter } from "@/components/primitives/Typewriter";

export function Record() {
  const r = content.record;
  const media = (
    <div className="glass relative w-full max-w-[420px] overflow-hidden p-9 sm:p-10">
      {/* 柔和内光 */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full"
        style={{ background: "radial-gradient(circle,rgba(127,180,240,.14),transparent 70%)" }}
        aria-hidden
      />
      <div className="eyebrow mb-6">今天 · 22:14</div>
      <p className="serif text-[23px] leading-[1.75] text-ink sm:text-[25px]">
        <Typewriter text={r.writingLine} />
      </p>
      <div className="write-rule my-7" />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] tracking-[.05em] text-muted">
        {r.modes.map((m, i) => (
          <span key={m} className="flex items-center gap-3">
            {i > 0 && <span className="mode-sep">·</span>}
            {m}
          </span>
        ))}
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
