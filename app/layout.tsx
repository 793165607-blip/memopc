import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_SC({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://niannian.app"),
  title: "念念 Memo · 记录情绪，遇见自己",
  description:
    "念念是一款情绪日记 + AI 分身。把每天的情绪放进来，它替你听着、记着，慢慢拼出另一个你。不催你写、不评判你、只为你写。",
  openGraph: {
    title: "念念 Memo · 记录情绪，遇见自己",
    description: "把每天的情绪放进来，念念替你听着、记着，慢慢拼出另一个你。",
    images: ["/og.svg"],
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}
