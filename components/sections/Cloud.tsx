import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { Orb } from "@/components/primitives/Orb";
import { Parallax } from "@/components/primitives/Parallax";

export function Cloud() {
  const c = content.cloud;
  const media = (
    <div className="relative flex min-h-[380px] w-full items-center justify-center">
      <Parallax amount={40}><Orb variant="warm" size={170} ripples={[250, 340]} /></Parallax>
      <div className="encounter absolute right-0 bottom-6">
        <div className="flex items-center gap-[9px]">
          <span className="av" aria-hidden />
          <div>
            <div className="serif text-[14px] text-ink">{c.encounter.who}</div>
            <div className="text-[10px] text-muted">{c.encounter.sub}</div>
          </div>
        </div>
        <div className="serif mt-3 text-[15px] text-ink">{c.encounter.theme}</div>
        <div className="mt-0.5 text-[13px] italic text-muted">{c.encounter.quote}</div>
      </div>
    </div>
  );
  return (
    <Section id="cloud">
      <TwoCol media={media}>
        <Reveal><span className="eyebrow">{c.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2 className="serif my-[18px] text-[32px] font-semibold leading-[1.3] text-ink sm:text-[40px]">{c.title[0]}<br />{c.title[1]}</h2></Reveal>
        <Reveal delay={160}><p className="max-w-[560px] text-[17px] leading-[1.85] text-muted">{c.body}</p></Reveal>
      </TwoCol>
    </Section>
  );
}
