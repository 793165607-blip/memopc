import { content } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { AmbientField } from "@/components/primitives/AmbientField";

export function MeetYourself() {
  const m = content.meetYourself;
  return (
    <Section id="meet" center className="py-[140px]">
      <Reveal><span className="eyebrow">{m.eyebrow}</span></Reveal>
      <Reveal delay={80}>
        <h2 className="serif my-[18px] text-[36px] font-semibold leading-[1.3] text-ink sm:text-[48px]">{m.title[0]}<br />{m.title[1]}</h2>
      </Reveal>
      <Reveal delay={160}><p className="max-w-[560px] text-[17px] leading-[1.85] text-muted">{m.body}</p></Reveal>
      <Reveal delay={240} className="w-full">
        <div className="relative mx-auto mt-[34px] hidden h-[360px] w-full max-w-[780px] md:block">
          <AmbientField />
          {m.facets.map((f) => (
            <div key={f.label} className="memory-orb anim-float"
              style={{ width: f.size, height: f.size, left: f.left, top: f.top, animationDuration: `${6 + (f.size % 5)}s` }}>
              <b>{f.label}</b><span>{f.value}</span>
            </div>
          ))}
        </div>
        {/* 窄屏：流式排布 */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:hidden">
          {m.facets.map((f) => (
            <div key={f.label} className="memory-orb anim-float !static flex h-[110px] w-[110px]">
              <b>{f.label}</b><span>{f.value}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
