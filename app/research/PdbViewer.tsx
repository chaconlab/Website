'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function PdbViewer({ url }: { url: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded || !viewerRef.current || typeof window === 'undefined') return;
    
    if ((window as any).PDBeMolstarPlugin) {
      if (viewerRef.current.innerHTML !== "") {
        viewerRef.current.innerHTML = "";
      }

      const viewerInstance = new (window as any).PDBeMolstarPlugin();

      const options = {
        customData: {
          url: url,
          format: 'pdb'
        },
        bgColor: { r: 255, g: 255, b: 255 },
        hideControls: false,
        hideIcon: true,
        visualStyle: 'cartoon',
        sequencePanel: true // helpful for structural analysis
      };

      try {
        viewerInstance.render(viewerRef.current, options);
      } catch (err) {
        console.error("Error initializing PDBe Molstar", err);
      }
    }
  }, [scriptLoaded, url]);

  return (
    <div className="relative w-full aspect-video md:aspect-[4/3] bg-white overflow-hidden group">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pdbe-molstar@3.3.0/build/pdbe-molstar-light.css" />
      
      <Script 
        src="https://cdn.jsdelivr.net/npm/pdbe-molstar@3.3.0/build/pdbe-molstar-plugin.js" 
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      
      {/* Viewer Container needs to be relative to contain the molstar absolute UI */}
      <div ref={viewerRef} className="absolute inset-0 w-full h-full z-10"></div>
      
      {!scriptLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse z-0 flex items-center justify-center">
          <span className="text-slate-400 font-medium tracking-widest uppercase text-sm">Loading Mol* Viewer...</span>
        </div>
      )}
    </div>
  );
}
