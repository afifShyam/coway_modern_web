'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 sm:bottom-8 sm:right-8 z-40 p-3 rounded-full bg-[#111726]/90 hover:bg-[#162035] text-sky-400 hover:text-white border border-slate-700/80 shadow-2xl backdrop-blur-md transition-all duration-300 transform active:scale-90 hover:-translate-y-1 group ring-1 ring-sky-500/20"
      title="Kembali ke Atas"
      aria-label="Skrol ke Atas"
    >
      <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
    </button>
  );
};
