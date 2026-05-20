import "./globals.css";
export const metadata = { title: "念念 Memo" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="zh"><body>{children}</body></html>);
}
