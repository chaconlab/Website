import React from 'react';

export default function Team() {
  const activeMembers = [
    {
      name: "Pablo Chacón",
      role: "Group Leader",
      email: "pablo@chaconlab.org",
      image: "/people/pablo.jpg",
      socials: [
        { name: 'Google Scholar', url: 'http://goo.gl/fwovi', icon: 'scholar' },
        { name: 'LinkedIn', url: 'http://www.linkedin.com/pub/pablo-chac%C3%B3n/12/663/74', icon: 'linkedin' },
        { name: 'ORCID', url: 'http://orcid.org/0000-0002-3168-4826', icon: 'orcid' }
      ]
    },
    {
      name: "José Ramón López-Blanco",
      role: "Research Staff",
      image: null,
      socials: [
        { name: 'Google Scholar', url: 'http://scholar.google.es/citations?user=0E71qs8AAAAJ&hl=en', icon: 'scholar' }
      ]
    },
    {
      name: "Fernando Fernández Álvarez",
      role: "PhD / MSc Student",
      image: null,
      socials: []
    }
  ];

  const formerMembers = [
    "Iván Martín Hernández",
    "Ignacio Garzón",
    "Santiago García Sánchez",
    "Pieter Chys",
    "Erney Ramírez Aportela",
    "Pablo Solar Rodríguez"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="space-y-20">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeMembers.map((member) => (
              <div 
                key={member.name} 
                className="group relative flex flex-col bg-panel border border-border-main rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative gradient blob */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-white shadow-md mb-6 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl font-bold text-slate-300">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {member.role}
                  </p>
                  
                  
                  <div className="mt-auto pt-4 border-t border-border-main/50 flex flex-wrap items-center gap-3">
                    {member.email && (
                      <a href={`mailto:${member.email}`} title="Email" className="text-slate-400 hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 hover:bg-primary/10">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    )}
                    {member.socials && member.socials.map(social => (
                      <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} className="text-slate-400 hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 hover:bg-primary/10">
                        {social.icon === 'scholar' && (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                          </svg>
                        )}
                        {social.icon === 'linkedin' && (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {social.icon === 'orcid' && (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-text-main border-b border-border-main pb-4">
            Former Members
          </h2>
          <div className="bg-panel border border-border-main rounded-3xl p-8 shadow-sm">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {formerMembers.map((name) => (
                <li key={name} className="flex items-center gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  <span className="text-lg font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
