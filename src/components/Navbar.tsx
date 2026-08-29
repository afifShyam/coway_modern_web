'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Sparkles, MessageCircle, ChevronRight, ShoppingBag, Facebook, BadgeCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-1.5 px-3 text-center text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0 text-[11px] sm:text-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-sky-950 text-sky-400 font-bold text-[10px] border border-sky-800/60">
              Promo 2026
            </span>
            <span>Bayaran Bulanan <strong>Serendah RM20</strong>!</span>
            <a href="#promosi" className="underline font-bold text-sky-400 hover:text-sky-300 inline-flex items-center ml-1">
              Lihat Pelan <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-400">
            <a 
              href={siteConfig.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-500" />
              <span>Facebook: <strong>{siteConfig.facebookName}</strong></span>
            </a>
            <span>•</span>
            <a 
              href={siteConfig.emallUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 font-bold transition-colors flex items-center gap-1"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Coway E-Mall Rasmi</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 glass-header transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Brand & Agent Badge with Johan Adam Photo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-sky-400 shadow-md bg-slate-850 shrink-0">
              <img 
                src={siteConfig.agentImage} 
                alt={siteConfig.agentName}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border border-slate-900"></div>
            </div>

            <div className="leading-tight">
              <div className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                COWAY <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded bg-sky-950 text-sky-400 font-bold border border-sky-800/60">MALAYSIA</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium flex items-center gap-1">
                <span>HP: <strong className="text-slate-200">{siteConfig.agentName}</strong></span>
                <span className="text-sky-400 font-mono font-bold">({siteConfig.hpCode})</span>
                <BadgeCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-300 whitespace-nowrap">
            <a href="#kenapa" className="hover:text-sky-400 transition-colors">Kenapa Coway</a>
            <a href="#produk" className="hover:text-sky-400 transition-colors">Katalog Produk</a>
            <a href="#promosi" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
              Promosi RM20 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </a>
            <a href="#langkah" className="hover:text-sky-400 transition-colors">Cara Tempahan</a>
            <a href="#perbandingan" className="hover:text-sky-400 transition-colors">Bandingkan Pelan</a>
            <a 
              href={siteConfig.emallUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-bold"
            >
              <ShoppingBag className="w-4 h-4" /> E-Mall
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button 
              onClick={onOpenQuiz}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700/60 transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Kuiz Model
            </button>

            <a 
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mendapatkan maklumat promosi rasmi Coway terkini.`)}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </header>
    </>
  );
};
