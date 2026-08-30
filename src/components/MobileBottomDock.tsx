'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Phone, ShoppingBag, Menu } from 'lucide-react';

interface MobileBottomDockProps {
  onOpenMenu: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({ onOpenMenu }) => {
  return (
    <div className="sm:hidden fixed bottom-3 inset-x-3 z-40 pointer-events-auto animate-in slide-in-from-bottom-5 duration-300 safe-bottom-padding">
      <div className="bg-[#090D16]/95 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-800 shadow-[0_12px_36px_rgba(0,0,0,0.8)] flex items-center justify-between gap-1.5 ring-1 ring-white/10">
        
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="p-2 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 flex flex-col items-center justify-center shrink-0 w-11 h-11 transition-transform active:scale-95 shadow-xs"
          title="Hubungi Johan"
          aria-label="Panggilan Telefon"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-[8px] font-bold mt-0.5 text-slate-300">Call</span>
        </a>

        {/* Quick Official E-Mall Store Button */}
        <a
          href={siteConfig.emallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 flex flex-col items-center justify-center shrink-0 w-11 h-11 transition-transform active:scale-95 shadow-xs"
          title="Beli di Coway E-Mall"
          aria-label="Coway E-Mall"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[8px] font-bold mt-0.5 text-slate-300">E-Mall</span>
        </a>

        {/* Quick Jump Sidebar Menu Trigger */}
        <button
          type="button"
          onClick={onOpenMenu}
          className="p-2 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 flex flex-col items-center justify-center shrink-0 w-11 h-11 transition-transform active:scale-95 shadow-xs"
          title="Menu & Lompat Pantas"
          aria-label="Lompat Pantas"
        >
          <Menu className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-[8px] font-bold mt-0.5 text-slate-300">Lompat</span>
        </button>

        {/* Primary WhatsApp Action with Johan Avatar */}
        <a
          href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya sedang melayari laman web Coway dan berminat untuk bertanya promosi terkini.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-11 px-2.5 rounded-xl bg-[#25D366] active:bg-[#20bd5a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/60 transition-transform active:scale-95"
        >
          <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white shrink-0">
            <img 
              src={siteConfig.agentAvatar || siteConfig.agentImage} 
              alt={siteConfig.agentName} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col text-left leading-tight min-w-0">
            <span className="text-[10px] font-black truncate">WhatsApp Johan</span>
            <span className="text-[8px] text-emerald-100 font-medium truncate">Balas Pantas (&lt;5m)</span>
          </div>
          <WhatsAppIcon className="w-3.5 h-3.5 fill-white shrink-0 ml-auto" />
        </a>

      </div>
    </div>
  );
};
