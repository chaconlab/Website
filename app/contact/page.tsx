import React from 'react';

export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="bg-panel rounded-3xl p-8 md:p-12 shadow-sm">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">Contact Us</h1>
        
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            We are at the <strong>Blas Cabrera Institute of Physical Chemistry (IQF)</strong> in Madrid.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-50/80 rounded-2xl mb-8 border border-slate-100">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Address</h3>
              <p className="font-medium text-slate-800 m-0 leading-relaxed">
                C/Serrano 119<br />
                Madrid 28006<br />
                Spain
              </p>
            </div>
            
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Phone</h3>
              <p className="font-medium text-slate-800 m-0">
                (+34) 91 561 9400 #44116 (lab)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-slate-600">
            <p>
              For more information about our institute, visit the <a href="http://www.iqf.csic.es/en/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">IQF website</a>.
            </p>
            
            <p>
              Here you can find the exact location and <a href="http://www.metromadrid.es/en/viaja_en_metro/red_de_metro/planos/index.html" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">how to reach us</a> using public transportation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
