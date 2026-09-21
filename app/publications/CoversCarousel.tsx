'use client';
import { useState, useEffect } from 'react';

const covers = [
  '/covers/JCTC2010_cover.jpg',
  '/covers/JSB2013cover.gif',
  '/covers/cobs2016.gif',
  '/covers/str2014.gif',
  '/covers/structure2007.gif',
  '/covers/alife.jpg',
  '/covers/cover.jpg',
  '/covers/coverfig.gif'
];

export default function CoversCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % covers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-28 h-36 md:w-32 md:h-40 rounded-xl overflow-hidden shadow-md border border-white/20 bg-white/50 backdrop-blur-md shrink-0">
      {covers.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Journal Cover"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
