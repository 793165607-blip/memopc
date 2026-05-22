import { content } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

export function Philosophy() {
  const p = content.philosophy;
  return (
    <Section id="philosophy" center>
      <Reveal><span className="eyebrow">{p.eyebrow}</span></Reveal>
      <Reveal delay={80}>
        <h2 className="serif mt-[18px] max-w-[680px] text-[32px] font-semibold leading-[1.3] text-ink sm:text-[40px]">
          {p.title[0]}<br />{p.title[1]}
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-[18px] max-w-[560px] text-[17px] leading-[1.85] text-muted">{p.body}</p>
      </Reveal>
      <div className="mt-12 grid w-full gap-[18px] md:grid-cols-3">
        {p.pillars.map((pl, i) => (
          <Reveal key={pl.num} delay={i * 90}>
            <article className="glass lift h-full p-[30px] text-left">
              <span className="num block mb-[14px]">{pl.num}</span>
              <h3 className="serif mb-2 text-[21px] font-semibold text-ink">{pl.h}</h3>
              <p className="text-[14px] leading-[1.7] text-muted">{pl.p}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
