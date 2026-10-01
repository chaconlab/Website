'use client';
import { useState, useEffect } from 'react';

const highlights = [
  {
    title: 'Protein Design',
    text: 'Advanced deep learning models for de novo design methods.',
    video: '/movies/mol3.webm',
    dot: 'bg-primary',
  },
  {
    title: 'Macromolecular Simulations',
    text: 'Pioneering dynamic relaxation methods for macromolecular motions.',
    video: null,
    dot: 'bg-accent',
  },
];

export default function HighlightsCarousel() {
  const [index, setIndex] = useState(0);

  // Restarts whenever the slide changes, so a dot click gets a full interval.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % highlights.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative">
      <div className="text-right text-[#9B111E] font-semibold tracking-wide uppercase text-[11px] mb-4">Highlights</div>

      {/* All slides share one grid cell, so the panel keeps the height of the tallest. */}
      <div className="grid">
        {highlights.map((h, i) => {
          // Fade each child rather than the slide: opacity on a wrapper would
          // isolate the video and stop its white from blending into the panel.
          const fade = `transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`;
          return (
            <div
              key={h.title}
              aria-hidden={i !== index}
              className={`[grid-area:1/1] ${i === index ? '' : 'pointer-events-none'}`}
            >
              <div className={`flex items-center gap-2.5 font-bold text-text-main ${fade}`}>
                <div className={`w-3 h-3 rounded-full ${h.dot}`}></div>
                {h.title}
              </div>
              <div className={`ml-5 mt-2 text-muted text-sm leading-relaxed ${fade}`}>
                {h.text}
              </div>
              {h.video && (
                <div className="mt-3 h-48 overflow-hidden rounded-xl">
                  <video
                    src={h.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover scale-[1.4] origin-center mix-blend-multiply ${fade}`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-end gap-2 mt-4">
        {highlights.map((h, i) => (
          <button
            key={h.title}
            type="button"
            aria-label={`Show ${h.title}`}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${h.dot} ${
              i === index ? 'opacity-100 scale-125' : 'opacity-20 hover:opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
