import { content, navLinks } from "@/lib/content";

export function Nav() {
  return (
    <nav className="fixed left-1/2 top-[18px] z-50 w-[calc(100%-48px)] max-w-content -translate-x-1/2">
      <div className="nav-glass flex items-center justify-between rounded-full px-5 py-[11px]">
        <a href="#top" className="serif flex items-center gap-[9px] text-[16px] font-semibold">
          <span className="dot-logo" aria-hidden />念念
        </a>
        <div className="hidden gap-[26px] text-[13px] text-muted sm:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="navlink hover:text-fg">{l.label}</a>
          ))}
        </div>
        <a href="#closing" className="rounded-full border-[.5px] border-white/80 bg-white/60 px-4 py-[7px] text-[12.5px]">
          {content.nav.cta}
        </a>
      </div>
    </nav>
  );
}
