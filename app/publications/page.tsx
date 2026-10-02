import CoversCarousel from './CoversCarousel';
import { publicationPeriods } from './publications';

export default function Publications() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-10 md:pt-8 md:pb-16">
      <div className="mb-10 flex flex-col md:flex-row gap-8 items-start md:justify-between w-full">
        <div className="flex flex-col gap-5 min-w-0">
          <h1 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1] tracking-tight font-black m-0 text-text-main">
            <span className="text-primary">Publications</span>.
          </h1>

          <nav aria-label="Jump to period" className="flex flex-wrap gap-2">
            {publicationPeriods.map((period) => (
              <a
                key={period.id}
                href={`#${period.id}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-panel border border-border-main text-sm font-semibold text-slate-700 hover:text-primary hover:border-primary/40 transition-colors"
              >
                {period.title}
              </a>
            ))}
          </nav>

          <p className="text-sm text-muted m-0">
            Google Scholar profiles:{' '}
            <a href="http://goo.gl/fwovi" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">P. Chacón</a>,{' '}
            <a href="http://scholar.google.es/citations?user=0E71qs8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">J.R. López-Blanco</a>
          </p>
        </div>
        <CoversCarousel />
      </div>

      <div className="space-y-8">
        {publicationPeriods.map((period) => (
          <section
            key={period.id}
            id={period.id}
            className="scroll-mt-28 bg-panel border border-border-main rounded-3xl shadow-sm overflow-hidden"
          >
            <div className="px-5 sm:px-7 pt-6 pb-4 border-b border-border-main">
              <h2 className="text-xl font-extrabold tracking-tight text-text-main m-0">{period.title}</h2>
            </div>

            <ul className="list-none m-0 py-2 px-0">
              {period.items.map((pub) => (
                <li
                  key={pub.text}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-4 gap-y-2 items-start px-5 sm:px-7 py-1.5 hover:bg-slate-50/70 transition-colors"
                >
                  <p className="text-[14px] leading-relaxed text-slate-700 m-0">{pub.text}</p>
                  {(pub.pdf || pub.link) && (
                    <div className="flex gap-2 shrink-0">
                      {pub.pdf && (
                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-md text-xs font-semibold transition-colors">
                          PDF
                        </a>
                      )}
                      {pub.link && (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-blue/10 text-blue hover:bg-blue/20 rounded-md text-xs font-semibold transition-colors">
                          Link
                        </a>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
