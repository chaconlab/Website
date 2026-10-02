import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SiteNav from "./SiteNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chacon Lab | Decoding macromolecular dynamics",
  description: "Chacon Lab develops cutting edge tools and methods for structural biology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative z-0">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="orb a"></div>
          <div className="orb b"></div>
        </div>
        
        <header className="site-header">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-3 md:py-4">
              <Link href="/" className="flex items-center gap-3 group transition">
                <img src="/logo.png" alt="Chacon Lab Logo" className="w-11 h-11 md:w-[60px] md:h-[60px] object-contain group-hover:scale-105 transition-transform duration-250" />
                <div className="flex flex-col">
                  <span className="font-black text-[22px] md:text-[28px] tracking-tight leading-none text-text-main relative group-hover:-translate-y-[1px] transition-transform">
                    Chacon Lab
                  </span>
                  <span className="text-[9px] md:text-[10px] text-muted tracking-widest uppercase mt-1 font-semibold">Structural Bioinformatics Group</span>
                </div>
              </Link>
              
              <SiteNav />
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
