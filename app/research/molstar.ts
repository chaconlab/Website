// Shared PDBe Mol* setup for the research page viewers

export const MOLSTAR_SCRIPT = 'https://cdn.jsdelivr.net/npm/pdbe-molstar@3.3.0/build/pdbe-molstar-plugin.js';
export const MOLSTAR_CSS = 'https://cdn.jsdelivr.net/npm/pdbe-molstar@3.3.0/build/pdbe-molstar-light.css';

// No menus, panels or canvas buttons: just the molecule on white
export const MINIMAL_UI_OPTIONS = {
  bgColor: { r: 255, g: 255, b: 255 },
  hideControls: true,
  sequencePanel: false,
  leftPanel: false,
  rightPanel: false,
  logPanel: false,
  pdbeLink: false,
  hideIcon: true,
  hideCanvasControls: ['expand', 'controlToggle', 'controlInfo', 'selection', 'animation', 'trajectory'],
  selectInteraction: false
};

// Hide the reset/screenshot buttons (no option for them) and Mol*'s own frame border
export const MINIMAL_UI_CLASSES = '[&_.msp-viewport-controls]:hidden [&_.msp-layout-standard]:border-0!';

export function hideAxes(plugin: any) {
  plugin.canvas3d?.setProps({ camera: { helper: { axes: { name: 'off', params: {} } } } });
}

export function animateModels(plugin: any, durationInS: number) {
  const animation = plugin.managers.animation.animations.find((a: any) => a.name === 'built-in.animate-model-index');
  if (animation) {
    plugin.managers.animation.play(animation, {
      mode: { name: 'loop', params: { direction: 'forward' } },
      duration: { name: 'fixed', params: { durationInS } }
    });
  }
}

// Load the PDBe Mol* script and stylesheet once for every viewer on the page.
// (next/script only calls onReady for the first of several identical <Script>s
// while the file is still downloading, which left the second viewer blank.)
let molstarLoading: Promise<void> | undefined;
export function loadMolstar(): Promise<void> {
  if ((window as any).PDBeMolstarPlugin) return Promise.resolve();
  if (!molstarLoading) {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = MOLSTAR_CSS;
    document.head.appendChild(css);

    molstarLoading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = MOLSTAR_SCRIPT;
      script.onload = () => resolve();
      script.onerror = () => {
        molstarLoading = undefined;
        reject(new Error('Failed to load PDBe Mol*'));
      };
      document.head.appendChild(script);
    });
  }
  return molstarLoading;
}
