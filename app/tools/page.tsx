import React from 'react';

const labelStyles: Record<string, string> = {
  "Deep Learning & AI": "bg-blue-500/10 text-blue-600 border-blue-200/50",
  "Macromolecular Simulations": "bg-orange-500/10 text-orange-600 border-orange-200/50",
  "Integrative Modeling": "bg-emerald-500/10 text-emerald-600 border-emerald-200/50",
  "Protein Modeling": "bg-purple-500/10 text-purple-600 border-purple-200/50"
};

export default function Tools() {
  const tools = [
    {
      title: "PiFold2",
      description: "Enhancing the inverse folding approach PiFold",
      url: "https://github.com/chaconlab/PiFold2",
      isGithub: true,
      label: "Deep Learning & AI"
    },
    {
      title: "ilMode",
      description: "Constrained NMA for loop modeling",
      url: "https://github.com/chaconlab/ilmode",
      isGithub: true,
      label: "Protein Modeling"
    },
    {
      title: "RCD+",
      description: "Efficient loop closure engine for protein loop prediction (rcd.chaconlab.org)",
      url: "https://github.com/chaconlab/RCD",
      isGithub: true,
      label: "Protein Modeling"
    },
    {
      title: "KORP",
      description: "Orientational coarse-grained potential for protein & loop modeling",
      url: "https://github.com/chaconlab/Korp",
      isGithub: true,
      label: "Protein Modeling"
    },
    {
      title: "KORPM",
      description: "Stability prediction upon mutation",
      url: "https://github.com/chaconlab/korpm",
      isGithub: true,
      label: "Protein Modeling"
    },
    {
      title: "KORP-PL",
      description: "Effective coarse-grained knowledge-based scoring function for protein-ligand interactions",
      url: "https://github.com/chaconlab/KORP-PL",
      isGithub: true,
      label: "Protein Modeling"
    },
    {
      title: "iMOD",
      description: "Normal Mode Analysis in internal coordinates",
      url: "https://github.com/chaconlab/IMOD",
      isGithub: true,
      label: "Macromolecular Simulations"
    },
    {
      title: "iMODFIT",
      description: "Flexible fitting of atomic structures into EM maps",
      url: "https://github.com/chaconlab/IMODFIT",
      isGithub: true,
      label: "Integrative Modeling"
    },
    {
      title: "ADP_EM",
      description: "Ultra-fast multiresolution rigid-body fitting tool using spherical harmonics",
      url: "https://github.com/chaconlab/ADP_EM",
      isGithub: true,
      label: "Integrative Modeling"
    },
    {
      title: "FRODOCK",
      description: "Structural prediction of protein-protein interactions",
      url: "https://github.com/chaconlab/FRODOCK",
      isGithub: true,
      label: "Protein Modeling"
    },
    {
      title: "DalaiGA",
      description: "Ab initio 3D modeling of Small-angle X-ray scattering (SAXS) profiles. A relic from early 90s",
      url: "https://github.com/chaconlab/DALAI-GA",
      isGithub: true,
      label: "Integrative Modeling"
    },
    {
      title: "Situs",
      description: "Package for the modeling and refinement of multi-scale biomolecular EM structures (external Wriggers' lab)",
      url: "#",
      isGithub: false,
      label: "Integrative Modeling"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Methods & Bioinformatics Tools</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          A collection of software and methods developed by our group for structural bioinformatics and modeling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div 
            key={tool.title}
            className="flex flex-col bg-panel rounded-xl p-6 shadow-sm border border-transparent hover:border-slate-200 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4 gap-3">
              <h2 className="text-xl font-bold text-slate-800 tracking-tight leading-tight">
                {tool.title}
              </h2>
              {tool.label && (
                <span className={`shrink-0 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full border ${labelStyles[tool.label]}`}>
                  {tool.label}
                </span>
              )}
            </div>

            <p className="text-slate-600 leading-snug text-sm mb-6 flex-1">
              {tool.description}
            </p>

            <a 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:text-white hover:bg-primary font-semibold rounded-lg transition-colors text-sm"
            >
              {tool.isGithub ? "View on GitHub" : "Access Tool"}
              {tool.isGithub ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
