import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center gap-3 group transition">
                <img src="/logo.png" alt="Chacon Lab Logo" className="w-[60px] h-[60px] object-contain group-hover:scale-105 transition-transform duration-250" />
                <div className="flex flex-col">
                  <span className="font-black text-[28px] tracking-tight leading-none text-text-main relative group-hover:-translate-y-[1px] transition-transform">
                    Chacon Lab
                  </span>
                  <span className="text-[10px] text-muted tracking-widest uppercase mt-1 font-semibold">Structural Bioinformatics Group</span>
                </div>
              </Link>
              
              <nav className="hidden md:flex items-center gap-1">
                <Link href="/research" className="px-3 lg:px-4 py-2.5 rounded-full text-slate-700 hover:bg-primary hover:text-white transition-all font-semibold text-[14px] lg:text-[15px] hover:shadow-panel">
                  Research
                </Link>
                <Link href="/publications" className="px-3 lg:px-4 py-2.5 rounded-full text-slate-700 hover:bg-primary hover:text-white transition-all font-semibold text-[14px] lg:text-[15px] hover:shadow-panel">
                  Publications
                </Link>
                <Link href="/team" className="px-3 lg:px-4 py-2.5 rounded-full text-slate-700 hover:bg-primary hover:text-white transition-all font-semibold text-[14px] lg:text-[15px] hover:shadow-panel">
                  Team
                </Link>
                <Link href="/tools" className="px-3 lg:px-4 py-2.5 rounded-full text-slate-700 hover:bg-primary hover:text-white transition-all font-semibold text-[14px] lg:text-[15px] hover:shadow-panel">
                  Tools
                </Link>
                <Link href="/servers" className="px-3 lg:px-4 py-2.5 rounded-full text-slate-700 hover:bg-primary hover:text-white transition-all font-semibold text-[14px] lg:text-[15px] hover:shadow-panel">
                  Servers
                </Link>
                <Link href="/contact" className="px-3 lg:px-4 py-2.5 rounded-full text-slate-700 hover:bg-primary hover:text-white transition-all font-semibold text-[14px] lg:text-[15px] hover:shadow-panel">
                  Contact
                </Link>
              </nav>
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
