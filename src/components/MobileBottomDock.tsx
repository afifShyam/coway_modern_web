'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Grid, Sparkles } from 'lucide-react';

interface MobileBottomDockProps {
  onOpenQuiz: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({ onOpenQuiz }) => {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40">
      <div className="bg-slate-900/95 backdrop-blur-md p-1.5 rounded-full border border-slate-800 shadow-2xl flex items-center justify-between gap-1.5">
        <a 
          href="#produk" 
          className="flex-1 py-2.5 rounded-full text-center text-xs font-bold bg-slate-850 text-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
        >
          <Grid className="w-3.5 h-3.5 text-sky-400" />
          Katalog
        </a>
        
        <button 
          onClick={onOpenQuiz}
          className="flex-1 py-2.5 rounded-full text-center text-xs font-bold bg-slate-850 text-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Kuiz
        </button>

        <a 
          href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya berminat untuk mengetahui produk dan promosi rasmi Coway.`)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-[1.6] py-2 px-3 rounded-full text-center text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center gap-2"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden border border-white shrink-0">
            <img 
              src={siteConfig.agentAvatar || siteConfig.agentImage} 
              alt={siteConfig.agentName} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span>WhatsApp Johan</span>
        </a>
      </div>
    </div>
  );
};
