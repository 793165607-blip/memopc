import { content } from "@/lib/content";

export function Footer() {
  const f = content.footer;
  return (
    <footer className="px-6 pb-[50px] pt-[60px]">
      <div className="divider mb-9" />
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 text-[12.5px] text-muted">
        <div className="serif flex items-center gap-2 text-[14px]"><span className="dot-logo" style={{ width: 20, height: 20 }} aria-hidden />{f.brand}</div>
        <div className="flex gap-6">{f.tags.map((t) => (<span key={t}>{t}</span>))}</div>
      </div>
    </footer>
  );
}
