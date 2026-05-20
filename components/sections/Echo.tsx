import { content } from "@/lib/content";
import { Section, TwoCol } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

export function Echo() {
  const e = content.echo;
  const media = (
    <div className="glass w-full max-w-[400px] p-[30px_30px_26px]" style={{ padding: "30px 30px 26px" }}>
      <svg viewBox="0 0 360 70" fill="none" className="mb-[18px] block h-[70px] w-full" aria-hidden>
        <path d="M6 50 C 60 14, 110 60, 160 34 S 270 8, 354 30" stroke="rgba(96,165,250,.35)" strokeWidth="2" fill="none" />
        <circle cx="6" cy="50" r="6" fill="#aab2c0" /><circle cx="86" cy="30" r="6" fill="#f4cf6a" />
        <circle cx="160" cy="34" r="6" fill="#7fb4f0" /><circle cx="244" cy="20" r="6" fill="#f3a39c" />
        <circle cx="354" cy="30" r="6" fill="#b9a6ee" />
      </svg>
      <div className="eyebrow mb-[14px]">{e.letterMeta}</div>
      <div className="serif text-[19px] leading-[1.7] text-ink">{e.letterExcerpt[0]}<br />{e.letterExcerpt[1]}</div>
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
