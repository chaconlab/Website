'use client';

import React, { useEffect, useRef, useState } from 'react';
import { loadMolstar, MINIMAL_UI_OPTIONS, MINIMAL_UI_CLASSES, hideAxes, animateModels } from './molstar';

// Initial view: molecule rotation in screen axes (degrees, Y applied first) and zoom factor
const VIEW = { rotateY: 225, rotateZ: -180, zoom: 1.5 };

type Vec3 = [number, number, number];
const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a: Vec3): Vec3 => { const l = Math.hypot(...a); return [a[0] / l, a[1] / l, a[2] / l]; };

// Rotating the molecule by R in screen axes is the same as turning the camera by R⁻¹
// around its target, so rotate the view direction and up vector by Ry(-y)·Rz(-z).
function rotatedCameraAxes(snapshot: any, yDeg: number, zDeg: number) {
  const forward = norm(sub(Array.from(snapshot.target) as Vec3, Array.from(snapshot.position) as Vec3));
  const right = norm(cross(forward, Array.from(snapshot.up) as Vec3));
  const up = cross(right, forward);

  const inverseRotate = ([x, y, z]: Vec3): Vec3 => {
    const zr = (-zDeg * Math.PI) / 180, yr = (-yDeg * Math.PI) / 180;
    [x, y] = [x * Math.cos(zr) - y * Math.sin(zr), x * Math.sin(zr) + y * Math.cos(zr)];
    [x, z] = [x * Math.cos(yr) + z * Math.sin(yr), -x * Math.sin(yr) + z * Math.cos(yr)];
    return [x, y, z];
  };
  // Screen coordinates (x right, y up, z toward viewer) back to world space
  const toWorld = ([x, y, z]: Vec3): Vec3 =>
    [0, 1, 2].map((i) => x * right[i] + y * up[i] - z * forward[i]) as Vec3;

  return { dir: toWorld(inverseRotate([0, 0, -1])), up: toWorld(inverseRotate([0, 1, 0])) };
}

// One colour per residue in the first model, blue (N-terminus) to red (C-terminus)
function rainbowResidues(pdb: string) {
  const keys: string[] = [];
  for (const line of pdb.split('\n')) {
    if (line.startsWith('ENDMDL')) break;
    if (!line.startsWith('ATOM') || line.substring(12, 16).trim() !== 'CA') continue;
    keys.push(`${line[21]}|${line.substring(22, 26).trim()}`);
  }
  return keys.map((key, i) => {
    const [chain, resNum] = key.split('|');
    const hue = keys.length > 1 ? 240 - (240 * i) / (keys.length - 1) : 240;
    return {
      auth_asym_id: chain,
      auth_residue_number: Number(resNum),
      color: hslToRgb(hue, 0.85, 0.5)
    };
  });
}

function hslToRgb(h: number, s: number, l: number) {
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))));
  return { r: f(0), g: f(8), b: f(4) };
}

export default function PdbViewer({ url }: { url: string }) {
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

    const options = {
      customData: {
        url: url,
        format: 'pdb'
      },
      visualStyle: 'cartoon',
      ...MINIMAL_UI_OPTIONS
    };

    const subscription = viewerInstance.events.loadComplete.subscribe(async (ok: boolean) => {
      if (!ok) return;
      const plugin = viewerInstance.plugin;
      try {
        // Small fragments get ball-and-stick from the default preset, so swap in a cartoon ribbon
        const componentManager = plugin.managers.structure.component;
        // Re-read after each change: the hierarchy snapshot goes stale
        const currentComponents = () => plugin.managers.structure.hierarchy.current.structures.flatMap((s: any) => s.components);
        await componentManager.removeRepresentations(currentComponents());
        await componentManager.addRepresentation(currentComponents(), 'cartoon');

        // Rainbow from first to last residue present (the 'sequence-id' theme
        // scales from residue 1, so a fragment numbered 50-57 came out all red)
        const pdb = await fetch(url).then((res) => res.text());
        const residues = rainbowResidues(pdb);
        await viewerInstance.visual.select({ data: residues });

        hideAxes(plugin);

        // Turn the loop to face the viewer and zoom in. Mol* calls the snapshot
        // function only once the molecule is framed, so the timing is safe.
        plugin.canvas3d?.requestCameraReset({
          durationMs: 0,
          snapshot: (scene: any, camera: any) => {
            const { dir, up } = rotatedCameraAxes(camera.getSnapshot(), VIEW.rotateY, VIEW.rotateZ);
            const { center, radius } = scene.boundingSphereVisible;
            return camera.getFocus(center, radius / VIEW.zoom, up, dir);
          }
        });

        // Loop through all models in the PDB file
        animateModels(plugin, 4);
      } catch (err) {
        console.error("Error styling PDBe Molstar", err);
      }
    });

    viewerInstance.render(viewerRef.current, options).catch((err: unknown) => {
      console.error("Error initializing PDBe Molstar", err);
    });

    return () => {
      subscription?.unsubscribe?.();
      viewerInstance.plugin?.dispose?.();
    };
  }, [scriptLoaded, url]);

  return (
    <div className={`relative w-full aspect-video md:aspect-[4/3] bg-white overflow-hidden group ${MINIMAL_UI_CLASSES}`}>
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
