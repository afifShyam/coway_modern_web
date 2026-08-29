'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-850 text-slate-400 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-3">
            <div className="font-extrabold text-xl text-white tracking-tight">COWAY MALAYSIA</div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Laman promosi ini diuruskan oleh Ejen Jualan Sah Coway (Health Planner: {siteConfig.agentName}, HP Code {siteConfig.hpCode}). Hak cipta & logo adalah hak milik Coway (M) Sdn Bhd.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Pautan Pantas</h4>
            <ul className="space-y-2">
              <li><a href="#kenapa" className="hover:text-white transition-colors">Kenapa Coway</a></li>
              <li><a href="#produk" className="hover:text-white transition-colors">Koleksi Produk</a></li>
              <li><a href="#promosi" className="hover:text-white transition-colors">Promosi RM20</a></li>
              <li><a href="#perbandingan" className="hover:text-white transition-colors">Perbandingan Pelan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Hubungi Ejen</h4>
            <p className="text-slate-200 font-bold">{siteConfig.agentName}</p>
            <p>WhatsApp: <a href={siteConfig.whatsappBaseUrl} className="text-sky-400 font-bold">{siteConfig.displayPhone}</a></p>
            <p>Penghantaran & Pemasangan Seluruh Malaysia</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>© 2026 Coway Health Planner {siteConfig.agentName}. Hak Cipta Terpelihara.</div>
          <div className="flex items-center gap-3">
            <span>Halal JAKIM</span>
            <span>•</span>
            <span>WQA Certified</span>
            <span>•</span>
            <span>SIRIM Approved</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
