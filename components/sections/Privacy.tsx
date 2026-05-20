import { content } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

export function Privacy() {
  const p = content.privacy;
  return (
    <Section id="privacy" center>
      <Reveal><span className="eyebrow">{p.eyebrow}</span></Reveal>
      <Reveal delay={80}><h2 className="serif my-[18px] text-[32px] font-semibold leading-[1.3] text-ink sm:text-[40px]">{p.title[0]}<br />{p.title[1]}</h2></Reveal>
      <Reveal delay={160}><p className="max-w-[560px] text-[17px] leading-[1.85] text-muted">{p.body}</p></Reveal>
    </Section>
  );
}
