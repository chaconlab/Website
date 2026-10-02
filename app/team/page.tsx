import React from 'react';

// First letters of the first and last name, e.g. "José Ramón López-Blanco" -> "JL"
function initials(name: string) {
  const words = name.replace(/\./g, ' ').split(/\s+/).filter(Boolean);
  const letters = words[0][0] + (words.length > 1 ? words[words.length - 1][0] : '');
  // Drop accents: "Álvarez" -> "A"
  return letters.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}

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
        { name: 'Google Scholar', url: 'http://scholar.google.es/citations?user=0E71qs8AAAAJ&hl=en', icon: 'scholar' },
        { name: 'ORCID', url: 'https://orcid.org/0000-0002-5891-4134', icon: 'orcid' }
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
    "Pablo Solar Rodríguez",
    "A.J. Canosa-Valls"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-10 md:pt-8 md:pb-16">
      <div className="mb-10">
        <h1 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1] tracking-tight font-black m-0 text-text-main">
          Our <span className="text-primary">Team</span>.
        </h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeMembers.map((member) => (
          <div
            key={member.name}
            className="group relative flex flex-col items-center text-center bg-panel border border-border-main rounded-3xl px-6 pt-8 pb-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Decorative gradient blob */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

            <div className="relative w-28 h-28 rounded-full border-4 border-white shadow-md mb-5 overflow-hidden bg-gradient-to-br from-primary to-blue flex items-center justify-center">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl font-bold text-white tracking-wide">{initials(member.name)}</span>
              )}
            </div>

            <h2 className="relative text-lg font-bold text-slate-800 tracking-tight m-0">{member.name}</h2>
            <span className="relative mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {member.role}
            </span>

            {(member.email || member.socials.length > 0) && (
              <div className="relative mt-5 flex flex-wrap justify-center gap-2">
                {member.email && (
                  <a href={`mailto:${member.email}`} title={member.email} className="text-slate-500 hover:text-primary transition-colors flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-primary/10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                  </a>
                )}
                {member.socials.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} className="text-slate-500 hover:text-primary transition-colors flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-primary/10">
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
            )}
          </div>
        ))}
      </section>

      <section className="mt-12">
        <div className="bg-panel border border-border-main rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold tracking-tight text-text-main m-0 mb-6">
            Former <span className="text-primary">Members</span>
          </h2>
          <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {formerMembers.map((name) => (
              <li key={name} className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 shrink-0 rounded-full bg-primary" />
                <span className="text-lg font-medium">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
