'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/team', label: 'Team' },
  { href: '/tools', label: 'Tools' },
  { href: '/servers', label: 'Servers' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 lg:px-4 py-2.5 rounded-full transition-all font-semibold text-[14px] lg:text-[15px] hover:bg-primary hover:text-white hover:shadow-panel ${
              pathname === link.href ? 'bg-primary/10 text-primary' : 'text-slate-700'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Phone: menu button and dropdown */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-slate-700 hover:bg-primary/10 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <nav
        id="mobile-menu"
        hidden={!open}
        className="md:hidden absolute left-0 right-0 top-full px-4 pb-4"
      >
        <div className="flex flex-col gap-1 bg-panel border border-border-main rounded-2xl shadow-panel p-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl font-semibold text-[15px] transition-colors ${
                pathname === link.href ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
