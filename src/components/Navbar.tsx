'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Sparkles, MessageCircle, ChevronRight, ShoppingBag, Facebook } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-2 px-4 text-center text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-950/80 text-sky-400 font-bold text-[11px] border border-sky-800/50">
              ✨ Promosi 2026
            </span>
            <span>Daftar Sekarang & Nikmati Bayaran Bulanan <strong>Serendah RM20</strong>!</span>
            <a href="#promosi" className="underline font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-0.5 ml-1">
              Lihat Pelan <ChevronRight className="w-3.5 h-3.5" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand & Agent Badge */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-extrabold text-xl shadow-sm">
              C
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                COWAY <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 font-bold border border-sky-800/60">MALAYSIA</span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                Perancang Kesihatan: <strong className="text-slate-200">{siteConfig.agentName}</strong> <span className="text-slate-500">(Kod HP: {siteConfig.hpCode})</span>
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
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={onOpenQuiz}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700/60 transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Kuiz Model Pintar
            </button>

            <a 
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mendapatkan maklumat promosi rasmi Coway terkini.`)}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp {siteConfig.agentName.split(' ')[0]}</span>
            </a>
          </div>

        </div>
      </header>
    </>
  );
};
