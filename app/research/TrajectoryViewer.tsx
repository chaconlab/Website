'use client';

import { useEffect, useRef, useState } from 'react';
import { loadMolstar, MINIMAL_UI_OPTIONS, MINIMAL_UI_CLASSES, hideAxes, animateModels } from './molstar';

// Plays a multi-model PDB trajectory as ball-and-stick, fading in the
// secondary-structure cartoon for the second half of the frames.
export default function TrajectoryViewer({ url, durationInS = 5 }: { url: string; durationInS?: number }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadMolstar()
      .then(() => { if (!cancelled) setScriptLoaded(true); })
      .catch((err) => console.error(err));
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !viewerRef.current) return;

    if (viewerRef.current.innerHTML !== "") {
      viewerRef.current.innerHTML = "";
    }

    const viewerInstance = new (window as any).PDBeMolstarPlugin();
    let ribbonTimer: ReturnType<typeof setInterval> | undefined;
    let disposed = false;

    const subscription = viewerInstance.events.loadComplete.subscribe(async (ok: boolean) => {
      if (!ok || disposed) return;
      const plugin = viewerInstance.plugin;
      try {
        hideAxes(plugin);

        // Reuse the trajectory PDBe parsed, but replace the model it built
        const trajectory = plugin.managers.structure.hierarchy.current.trajectories[0];
        const totalFrames = trajectory.cell.obj.data.frameCount;
        const cleanup = plugin.build();
        for (const m of trajectory.models) cleanup.delete(m.cell.transform.ref);
        await cleanup.commit();

        // Build the model from the LAST frame to get clean bonds
        const model = await plugin.builders.structure.createModel(trajectory.cell, { modelIndex: totalFrames - 1 });
        const structure = await plugin.builders.structure.createStructure(model);

        const component =
          (await plugin.builders.structure.tryCreateComponentStatic(structure, 'polymer')) ??
          (await plugin.builders.structure.tryCreateComponentStatic(structure, 'all'));

        if (component) {
          await plugin.builders.structure.representation.addRepresentation(component, {
            type: 'ball-and-stick',
            color: 'element-symbol'
          });
          const cartoon = await plugin.builders.structure.representation.addRepresentation(component, {
            type: 'cartoon',
            color: 'secondary-structure'
          });
          plugin.state.data.updateCellState(cartoon.ref, { isHidden: true });

          // Show the ribbon from the halfway frame on
          const halfWayFrame = Math.floor(totalFrames / 2);
          let ribbonIsVisible = false;
          ribbonTimer = setInterval(() => {
            const modelCell = plugin.state.data.cells.get(model.ref);
            if (!modelCell?.transform.params) return;
            const showRibbon = (modelCell.transform.params.modelIndex || 0) >= halfWayFrame;
            if (showRibbon !== ribbonIsVisible) {
              plugin.state.data.updateCellState(cartoon.ref, { isHidden: !showRibbon });
              ribbonIsVisible = showRibbon;
            }
          }, 50);
        }

        // Rewind to frame 0, frame the molecule and play
        await plugin.build().to(model.ref).update({ modelIndex: 0 }).commit();
        plugin.managers.camera.reset(undefined, 0);
        if (!disposed) animateModels(plugin, durationInS);
      } catch (err) {
        console.error("Error building trajectory in PDBe Molstar", err);
      }
    });

    viewerInstance.render(viewerRef.current, {
      customData: { url, format: 'pdb' },
      ...MINIMAL_UI_OPTIONS
    }).catch((err: unknown) => console.error("Error initializing PDBe Molstar", err));

    return () => {
      disposed = true;
      subscription?.unsubscribe?.();
      clearInterval(ribbonTimer);
      viewerInstance.plugin?.dispose?.();
    };
  }, [scriptLoaded, url, durationInS]);

  return (
    <div className={`relative w-full h-full bg-white overflow-hidden ${MINIMAL_UI_CLASSES}`}>
      <div ref={viewerRef} className="absolute inset-0 w-full h-full z-10"></div>

      {!scriptLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse z-0 flex items-center justify-center">
          <span className="text-slate-400 font-medium tracking-widest uppercase text-sm">Loading Mol* Viewer...</span>
        </div>
      )}
    </div>
  );
}
