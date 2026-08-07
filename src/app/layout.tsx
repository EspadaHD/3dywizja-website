import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3. Dywizja | Foxhole Warden Clan",
  description: "Oficjalna strona polskiego klanu 3. Dywizja w grze Foxhole. Miłego dnia/wieczoru!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-zinc-950 text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}