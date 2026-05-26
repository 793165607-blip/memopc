import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { EchoRibbon } from "@/components/primitives/EchoRibbon";

export function Echo() {
  const e = content.echo;
  const media = (
    <div className="glass relative w-full max-w-[420px] overflow-hidden p-9 sm:p-10">
      <EchoRibbon />
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
