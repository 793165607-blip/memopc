import { ReactNode } from "react";
export function Button({
  children, variant = "primary", href, className = "",
}: { children: ReactNode; variant?: "primary" | "ghost"; href?: string; className?: string }) {
  const cls = `${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  return <a href={href} className={cls}>{children}</a>;
}
