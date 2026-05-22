import { content } from "@/lib/content";
import { Reveal } from "@/components/primitives/Reveal";
import { Button } from "@/components/primitives/Button";
import { Orb } from "@/components/primitives/Orb";
import { AmbientField } from "@/components/primitives/AmbientField";

export function Hero() {
  const h = content.hero;
  return (
    <section id="top" className="relative isolate flex min-h-screen flex-col items-center justify-center px-6 pt-[140px] text-center">
      <AmbientField className="-z-10" />
      <Reveal><span className="pill-eyebrow">{h.eyebrow}</span></Reveal>
      <Reveal delay={80}>
        <h1 className="serif mt-[30px] text-[44px] font-semibold leading-[1.3] text-ink sm:text-[64px]">{h.title}</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-5 max-w-[560px] text-[17px] leading-[1.85] text-muted sm:text-[19px]">
          {h.sub[0]}<br className="hidden sm:block" />{h.sub[1]}
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-[34px] flex gap-[14px]">
          <Button href="#philosophy">{h.primary}</Button>
          <Button variant="ghost" href="#closing">{h.ghost}</Button>
        </div>
      </Reveal>
      <Reveal delay={340} className="mt-14">
        <Orb size={168} animate="breathe" />
      </Reveal>
      <span className="eyebrow absolute bottom-[34px] left-1/2 -translate-x-1/2">scroll</span>
    </section>
  );
}
