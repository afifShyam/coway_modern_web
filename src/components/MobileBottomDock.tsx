'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Grid, Sparkles, MessageCircle } from 'lucide-react';

interface MobileBottomDockProps {
  onOpenQuiz: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({ onOpenQuiz }) => {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40">
      <div className="bg-slate-900/95 backdrop-blur-md p-2 rounded-full border border-slate-800 shadow-xl flex items-center justify-between gap-2">
        <a 
          href="#produk" 
          className="flex-1 py-2.5 rounded-full text-center text-xs font-bold bg-slate-850 text-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
        >
          <Grid className="w-3.5 h-3.5 text-sky-400" />
          Produk
        </a>
        
        <button 
          onClick={onOpenQuiz}
          className="flex-1 py-2.5 rounded-full text-center text-xs font-bold bg-slate-850 text-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Quiz
        </button>

        <a 
          href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya berminat nak dapatkan produk Coway`)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-[1.5] py-2.5 rounded-full text-center text-xs font-bold bg-emerald-600 text-white shadow-sm flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp {siteConfig.agentName.split(' ')[0]}
        </a>
      </div>
    </div>
  );
};
