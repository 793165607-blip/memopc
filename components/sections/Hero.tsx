import { content } from "@/lib/content";
import { Reveal } from "@/components/primitives/Reveal";
import { Button } from "@/components/primitives/Button";
import { Orb } from "@/components/primitives/Orb";
import { Parallax } from "@/components/primitives/Parallax";
import { AmbientField } from "@/components/primitives/AmbientField";

export function Hero() {
  const h = content.hero;
  return (
    <section id="top" className="relative isolate flex min-h-screen flex-col items-center justify-center px-6 pt-[84px] pb-[56px] text-center">
      <AmbientField className="-z-10" />
      <Reveal><span className="pill-eyebrow">{h.eyebrow}</span></Reveal>
      <Reveal delay={80}>
        <h1 className="serif mt-[30px] text-[44px] font-semibold leading-[1.3] text-ink sm:text-[64px]">{h.title}</h1>
      </Reveal>
      <Reveal delay={130}>
        <p className="mt-[14px] text-[12.5px] tracking-[.22em] text-muted">{h.tagline}</p>
      </Reveal>
      <Reveal delay={180}>
        <p className="mt-[18px] max-w-[560px] text-[17px] leading-[1.85] text-muted sm:text-[19px]">
          {h.sub[0]}<br className="hidden sm:block" />{h.sub[1]}
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-[34px] flex gap-[14px]">
          <Button href="#philosophy">{h.primary}</Button>
          <Button variant="ghost" href="#closing">{h.ghost}</Button>
        </div>
      </Reveal>
      <Reveal delay={340} className="mt-[44px]">
        <Parallax amount={28}><Orb size={168} /></Parallax>
      </Reveal>
    </section>
  );
}
