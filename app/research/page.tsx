import React from 'react';
import PdbViewer from './PdbViewer';

export default function Research() {
  const topics = [
    {
      title: "Deep Learning & AI",
      description: "Geometric Algebra, Flow Matching, and diffusion models for biomolecular modeling.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09l2.846.813-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600",
      bgBlur: "bg-blue-500/20"
    },
    {
      title: "Macromolecular Simulations",
      description: "Elastic Network Models, Normal Mode Analysis, Dynamic Relaxation, and coarse-grained simulations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
      color: "from-orange-500 to-rose-600",
      bgBlur: "bg-orange-500/20"
    },
    {
      title: "Integrative Modeling",
      description: "Combining multiresolution experimental data (X-ray crystallography, cryo-EM, SAXS) with computational models.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600",
      bgBlur: "bg-emerald-500/20"
    },
    {
      title: "Protein Modeling",
      description: "Developing tools for predicting protein-protein interactions, loop closure modeling, and knowledge-based potentials.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
      color: "from-purple-500 to-pink-600",
      bgBlur: "bg-purple-500/20"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-16">
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight font-black m-0 text-text-main">
          Research <span className="text-primary">Lines</span>.
        </h1>
        <p className="mt-6 text-[clamp(1rem,1.6vw,1.15rem)] text-muted max-w-[760px] leading-relaxed">
          Our group focuses on the development of novel computational approaches to understand the structure and dynamics of complex biological systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {topics.map((topic, index) => (
          <div
            key={topic.title}
            className="group relative flex flex-col bg-panel border border-border-main rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Background ambient glow */}
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${topic.bgBlur} rounded-full blur-[60px] -z-10 group-hover:scale-110 transition-transform duration-700`} />

            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-8 shadow-md transform group-hover:-translate-y-1 transition-transform duration-500`}>
              {topic.icon}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
              {topic.title}
            </h2>

            <p className="text-slate-600 leading-relaxed text-base flex-1">
              {topic.description}
            </p>
          </div>
        ))}
      </div>

      {/* --- Research Highlights Section --- */}
      <div className="mt-24 mb-10">
        <div className="space-y-12">
          {/* Highlight 1: Macromolecular Dynamics */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-center bg-panel rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="w-full md:w-5/12 shrink-0 rounded-2xl overflow-hidden bg-black aspect-video md:aspect-[4/3]">
              <video
                src="/movies/nma.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="w-full h-full object-cover block"
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className="w-full md:w-7/12 flex flex-col md:pr-4">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3 self-start">
                Macromolecular Simulations
              </span>
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-4">
                Normal Mode Analysis
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Visualizing the collective motions of protein structures using our highly efficient Normal Mode Analysis (NMA) tools. These simulations reveal intrinsic flexibility essential for biological function without the computational cost of full MD simulations.
              </p>
            </div>
          </div>

          {/* Highlight 2: Integrative Modeling (Reverse layout) */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-center bg-panel rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="w-full md:w-5/12 shrink-0 rounded-2xl overflow-hidden bg-black md:order-2 aspect-video md:aspect-[4/3]">
              <video
                src="/movies/tfIId.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="w-full h-full object-cover block"
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className="w-full md:w-7/12 flex flex-col md:pl-4 md:order-1">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold tracking-wider uppercase mb-3 self-start">
                Integrative Modeling
              </span>
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-4">
                Flexible Fitting into Cryo-EM
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Our hybrid methods bridge the resolution gap by flexibly fitting high-resolution atomic structures into lower-resolution electron microscopy density maps, providing detailed atomistic models of large molecular machines.
              </p>
            </div>
          </div>

          {/* Highlight 3: Protein Modeling */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-center bg-panel rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="w-full md:w-5/12 shrink-0 rounded-2xl overflow-hidden relative bg-white aspect-video md:aspect-[4/3]">
              <PdbViewer url="/movies/loops.pdb" />
            </div>
            <div className="w-full md:w-7/12 flex flex-col md:pr-4">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-xs font-bold tracking-wider uppercase mb-3 self-start">
                Protein Modeling
              </span>
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-4">
                Ab initio Loop Modeling
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Explore an interactively rendered 3D prediction generated by our fast loop-closure modeling tool. Accurate all-atom loop predictions are critical for structural refinement and antibody design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
