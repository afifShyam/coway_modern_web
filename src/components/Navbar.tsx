'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Sparkles, ChevronRight, ShoppingBag, Facebook, BadgeCheck, Phone, Menu } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz, onOpenMenu }) => {

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#060911] border-b border-slate-800/80 py-1.5 px-3 text-center text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0 text-[11px] sm:text-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-sky-950 text-sky-300 font-extrabold text-[10px] border border-sky-800/60">
              Promosi 2026
            </span>
            <span>Kadar Bulanan Dari <strong>RM20/Bulan</strong>!</span>
            <a href="#promosi" className="font-bold text-sky-400 hover:text-sky-300 hover:underline inline-flex items-center ml-1">
              Lihat Pakej <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-400">
            <a 
              href={`tel:${siteConfig.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Hubungi: <strong className="text-white">{siteConfig.displayPhone}</strong></span>
            </a>
            <span>•</span>
            <a 
              href={siteConfig.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-400" />
              <span>Facebook: <strong className="text-white">{siteConfig.facebookName}</strong></span>
            </a>
            <span>•</span>
            <a 
              href={siteConfig.emallUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 font-bold transition-colors flex items-center gap-1 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-750 shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Coway E-Mall Rasmi</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 glass-header transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Brand & Agent Badge */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sky-400 shadow-md bg-slate-800 shrink-0">
              <img 
                src={siteConfig.agentAvatar || siteConfig.agentImage} 
                alt={siteConfig.agentName} 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="leading-tight">
              <div className="font-black text-xs sm:text-lg tracking-tight text-white flex items-center gap-1">
                COWAY <span className="text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded bg-sky-950 text-sky-300 font-bold border border-sky-800">MALAYSIA</span>
              </div>
              <div className="text-[9px] sm:text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                <span>HP: <strong className="text-slate-200">{siteConfig.agentName}</strong></span>
                <span className="text-sky-400 font-mono font-bold">({siteConfig.hpCode})</span>
                <BadgeCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-300 whitespace-nowrap">
            <a href="#kategori" className="hover:text-white transition-colors">Kategori</a>
            <a href="#produk" className="hover:text-white transition-colors">Katalog & Harga</a>
            <a href="#promosi" className="hover:text-white transition-colors flex items-center gap-1.5">
              Promosi RM20 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </a>
            <a href="#perbandingan" className="hover:text-white transition-colors">Sewa vs Beli</a>
            <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#johan" className="hover:text-white transition-colors">Johan Adam</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Mobile Menu / Jump Drawer Trigger */}
            <button
              type="button"
              onClick={onOpenMenu}
              className="p-2 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 flex items-center gap-1 text-xs font-bold transition-all"
              title="Menu & Lompat Pantas"
              aria-label="Buka Menu"
            >
              <Menu className="w-4 h-4 text-sky-400" />
              <span className="hidden xs:inline">Menu</span>
            </button>

            <button 
              type="button"
              onClick={onOpenQuiz}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Kuiz Model
            </button>

            <a
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin bertanya mengenai promosi produk Coway.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex py-2.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm items-center gap-2 shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp Johan</span>
            </a>
          </div>

        </div>
      </header>
    </>
  );
};
