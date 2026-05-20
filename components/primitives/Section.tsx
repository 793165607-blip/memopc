import { ReactNode } from "react";

export function Section({
  id, children, center = false, className = "",
}: { id?: string; children: ReactNode; center?: boolean; className?: string }) {
  return (
    <section id={id} className={`relative px-6 py-[120px] ${className}`}>
      <div className={`mx-auto max-w-content ${center ? "flex flex-col items-center text-center" : ""}`}>
        {children}
      </div>
    </section>
  );
}

/** 左右两栏；reverse 时媒体列在右 */
export function TwoCol({
  media, children, reverse = false,
}: { media: ReactNode; children: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-[60px] md:grid-cols-2">
      <div className={`relative flex min-h-[380px] items-center justify-center ${reverse ? "md:order-2" : ""}`}>
        {media}
      </div>
      <div>{children}</div>
    </div>
  );
}
