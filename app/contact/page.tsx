import React from 'react';

const MAP_QUERY = encodeURIComponent('Instituto de Química Física Blas Cabrera, Calle de Serrano 119, 28006 Madrid');

// Official line colours, so the badges read like the signs in the station
const transport = [
  {
    mode: 'Metro',
    lines: [
      { label: 'L6', className: 'bg-[#98989B] text-white' },
      { label: 'L8', className: 'bg-[#F96DB0] text-white' },
      { label: 'L10', className: 'bg-[#1D4A9C] text-white' },
    ],
    detail: 'República Argentina (L6) or Nuevos Ministerios (L6, L8, L10)',
  },
  {
    mode: 'Train',
    lines: [{ label: 'Cercanías', className: 'bg-[#E2001A] text-white' }],
    detail: 'Nuevos Ministerios',
  },
  {
    mode: 'Bus',
    lines: [
      { label: '16', className: 'bg-[#0062A8] text-white' },
      { label: '19', className: 'bg-[#0062A8] text-white' },
      { label: '51', className: 'bg-[#0062A8] text-white' },
    ],
    detail: 'Lines 16, 19 and 51',
  },
];

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        {children}
      </svg>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-12">
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight font-black m-0 text-text-main">
          Get in <span className="text-primary">touch</span>.
        </h1>
        <p className="mt-6 text-[clamp(1rem,1.6vw,1.15rem)] text-muted max-w-[760px] leading-relaxed">
          We are at the <strong className="text-text-main">Blas Cabrera Institute of Physical Chemistry (IQF)</strong>, CSIC, in Madrid.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8">
        {/* Contact details */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-panel border border-border-main rounded-3xl p-6 shadow-sm">
              <IconBadge>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </IconBadge>
              <h2 className="mt-4 mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Address</h2>
              <p className="font-medium text-text-main m-0 leading-relaxed">
                C/ Serrano 119<br />
                28006 Madrid<br />
                Spain
              </p>
            </div>

            <div className="bg-panel border border-border-main rounded-3xl p-6 shadow-sm">
              <IconBadge>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </IconBadge>
              <h2 className="mt-4 mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</h2>
              <p className="font-medium text-text-main m-0 leading-relaxed">
                (+34) 91 561 9400<br />
                <span className="text-muted">ext. 44116 (lab)</span>
              </p>
            </div>
          </div>

          <div className="bg-panel border border-border-main rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <IconBadge>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-9 8l-2 2m12-2l2 2M7 3h10a2 2 0 012 2v10a4 4 0 01-4 4H9a4 4 0 01-4-4V5a2 2 0 012-2z" />
              </IconBadge>
              <h2 className="m-0 text-xs font-bold text-slate-400 uppercase tracking-widest">Getting here</h2>
            </div>

            <ul className="mt-5 flex flex-col gap-4 list-none p-0 m-0">
              {transport.map((t) => (
                <li key={t.mode} className="grid grid-cols-[4.5rem_1fr] gap-3 items-start">
                  <span className="font-semibold text-text-main pt-0.5">{t.mode}</span>
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {t.lines.map((line) => (
                        <span key={line.label} className={`px-2 py-0.5 rounded-md text-xs font-bold ${line.className}`}>
                          {line.label}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1.5 mb-0 text-sm text-muted leading-relaxed">{t.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="http://www.metromadrid.es/en/viaja_en_metro/red_de_metro/planos/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-sm text-primary font-semibold hover:underline"
            >
              Madrid metro map →
            </a>
          </div>

          <p className="text-sm text-muted m-0 px-1">
            For more information about our institute, visit the{' '}
            <a href="http://www.iqf.csic.es/en/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              IQF website
            </a>.
          </p>
        </div>

        {/* Map */}
        <div className="flex flex-col bg-panel border border-border-main rounded-3xl p-2 shadow-sm overflow-hidden">
          <iframe
            title="Map of the Blas Cabrera Institute of Physical Chemistry"
            src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
            className="w-full flex-1 min-h-[320px] lg:min-h-[480px] rounded-[20px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-end px-4 py-3 text-sm text-primary font-semibold hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
