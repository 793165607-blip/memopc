import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { Orb } from "@/components/primitives/Orb";
import { Parallax } from "@/components/primitives/Parallax";

export function Companion() {
  const c = content.companion;
  const media = (
    <div className="relative flex min-h-[360px] w-full items-center justify-center">
      <Parallax amount={36}><Orb variant="twin" size={140} ripples={[220, 300]} /></Parallax>
      <div className="resp absolute right-0 top-10">{c.response[0]}<br />{c.response[1]}</div>
    </div>
  );
  return (
    <Section id="companion">
      <TwoCol media={media} reverse>
        <Reveal><span className="eyebrow">{c.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2 className="serif my-[18px] text-[32px] font-semibold leading-[1.3] text-ink sm:text-[40px]">{c.title[0]}<br />{c.title[1]}</h2></Reveal>
        <Reveal delay={160}><p className="max-w-[560px] text-[17px] leading-[1.85] text-muted">{c.body}</p></Reveal>
      </TwoCol>
    </Section>
  );
}
