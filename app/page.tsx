import Link from 'next/link';
import HighlightsCarousel from './HighlightsCarousel';

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center mb-24">
        <div>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight font-black m-0 text-text-main">
            Decoding <br />
            <span className="text-primary">
              structure
            </span> and dynamics.
          </h1>
          
          <p className="mt-6 text-[clamp(1rem,1.6vw,1.15rem)] text-muted max-w-[760px] leading-relaxed">
            We fuse deep learning, geometric algebras, and multiresolution data to model complex biomolecular assemblies and pioneer new architectures for protein design.
          </p>
          
          <div className="flex flex-wrap gap-3.5 mt-8">
            <Link href="/research" className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold bg-primary text-white shadow-panel hover:-translate-y-0.5 transition-transform">
              Explore Research
            </Link>
            <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold bg-white text-blue border border-[rgba(90,141,255,0.25)] hover:-translate-y-0.5 transition-transform">
              View Open Source
            </Link>
          </div>
        </div>
        
        {/* Decorative Side Panel for Hero */}
        <div className="relative overflow-hidden rounded-[28px] bg-panel border border-border-main shadow-panel p-7">
          <div className="absolute rounded-full filter blur-[40px] opacity-50 w-[120px] h-[120px] -right-7 -top-5 bg-[radial-gradient(circle,rgba(22,124,130,.9),rgba(90,141,255,.4))]"></div>
          <div className="absolute rounded-full filter blur-[40px] opacity-50 w-[140px] h-[140px] -left-2.5 -bottom-10 bg-[radial-gradient(circle,rgba(242,140,111,.85),rgba(22,124,130,.2))]"></div>
          
          <HighlightsCarousel />
        </div>
      </section>


    </div>
  );
}
