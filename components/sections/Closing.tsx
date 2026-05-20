import { content } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { EmailForm } from "@/components/EmailForm";

export function Closing() {
  const c = content.closing;
  return (
    <Section id="closing" center className="py-[150px]">
      <Reveal>
        <h2 className="serif max-w-[720px] text-[34px] font-semibold leading-[1.3] text-ink sm:text-[46px]">
          {c.manifesto[0]}<br />{c.manifesto[1]}<br />{c.manifesto[2]}
        </h2>
      </Reveal>
      <Reveal delay={140} className="mt-11 flex flex-col items-center">
        <EmailForm />
        <p className="mt-4 text-[13px] text-muted">{c.note}</p>
      </Reveal>
    </Section>
  );
}
