import React from 'react';

export default function Servers() {
  const servers = [
    {
      title: "iMODS",
      subtitle: "Collective motions prediction",
      description: "To explore the collective motions of proteins and nucleic acids using NMA in internal coordinates (torsional space) just submit the PDB-ID or the atomic coordinates in PDB format (3.x).",
      url: "https://imods.chaconlab.org",
      image: "/servers/imods-server.jpg",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "RCD+",
      subtitle: "Ab initio loop modeling",
      description: "RCD+ server is a fast loop-closure modeling tool based on an improved version of our RCD method. Accurate all-atom loop predictions and ensembles can be easily generated in a few minutes.",
      url: "https://rcd.chaconlab.org",
      image: "/servers/rcd-server.jpg",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "FRODOCK",
      subtitle: "Protein-protein docking",
      description: "Predict protein-protein interactions using our Fast Rotational DOCKing method. It efficiently generates potential interaction models from the 3D coordinates of two proteins.",
      url: "https://frodock.chaconlab.org",
      image: "/servers/frodock-server.jpg",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "AbRaCD",
      subtitle: "CDR loop modeling",
      description: "AbRaCD is a sampling-based web server for ab initio prediction of antibody complementarity-determining region (CDR) loops, designed to capture antibody-specific conformational features.",
      url: "https://abracd.chaconlab.org",
      image: "/servers/abracd-server.jpg",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-10 md:pt-8 md:pb-16">
      <div className="mb-10 flex items-center gap-4">
        <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-blue flex items-center justify-center shadow-md">
          {/* Server stack */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-7 h-7 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
          </svg>
        </div>
        <h1 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1] tracking-tight font-black m-0 text-text-main">
          Web <span className="text-primary">Servers</span>.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((server) => (
          <div 
            key={server.title}
            className="flex flex-col bg-panel border border-border-main rounded-xl p-5 shadow-sm"
          >
            <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-2">
              {server.title}
            </h2>

            <p className="text-slate-600 leading-snug text-sm mb-6 flex-1">
              {server.description}
            </p>

            <div className="w-40 md:w-48 mx-auto aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-slate-50">
              <img 
                src={server.image} 
                alt={`${server.title} server interface`}
                className="w-full h-full object-cover"
              />
            </div>

            <a 
              href={server.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-primary/10 text-primary hover:text-white hover:bg-primary font-semibold rounded-lg transition-colors text-sm"
            >
              Launch Server
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
