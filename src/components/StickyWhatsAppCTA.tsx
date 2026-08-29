'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export const StickyWhatsAppCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled beyond hero (> 380px)
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 sm:hidden z-40 pointer-events-auto animate-in slide-in-from-bottom duration-300">
      <a
        href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya sedang melayari laman web Coway dan berminat untuk bertanya promosi terkini.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-13 py-3 px-4 rounded-2xl bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xl shadow-black/80 border border-emerald-400/40 backdrop-blur-md"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
        <span className="truncate">Tanya Johan di WhatsApp • Balasan Pantas</span>
      </a>
    </div>
  );
};
