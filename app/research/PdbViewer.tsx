'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function PdbViewer({ url }: { url: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded || !viewerRef.current) return;
    
    // Check if 3Dmol is available
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).$3Dmol) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const viewer = (window as any).$3Dmol.createViewer(viewerRef.current, {
          backgroundColor: 'white'
        });
        
        // Fetch and load the PDB data
        fetch(url)
          .then(res => {
            if (!res.ok) throw new Error("Failed to load PDB file");
            return res.text();
          })
          .then(data => {
            viewer.addModelsAsFrames(data, "pdb");
            viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
            viewer.zoomTo();
            viewer.zoom(1.2);
            viewer.animate({ loop: 'forward', step: 5 });
            viewer.render();
          })
          .catch(err => console.error("Error loading PDB for viewer:", err));
      } catch (err) {
        console.error("Error initializing 3Dmol viewer:", err);
      }
    }
  }, [scriptLoaded, url]);

  return (
    <div className="relative w-full aspect-video md:aspect-[4/3] bg-white overflow-hidden group cursor-move">
      {/* Script loaded with lazyOnload to not block the main thread */}
      <Script 
        src="https://3Dmol.org/build/3Dmol-min.js" 
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
      
      {/* Viewer Container */}
      <div ref={viewerRef} className="absolute inset-0 w-full h-full z-10"></div>
      
      {/* Loading skeleton / placeholder shown before initialization */}
      {!scriptLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse z-0 flex items-center justify-center">
          <span className="text-slate-400 font-medium tracking-widest uppercase text-sm">Loading 3D Viewer...</span>
        </div>
      )}

      {/* Interactive Overlay Hint */}
      {scriptLoaded && (
        <div className="absolute top-3 right-3 z-20 pointer-events-none bg-white/80 backdrop-blur-sm px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Drag to rotate</span>
        </div>
      )}
    </div>
  );
}
