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
              Laman promosi ini diuruskan oleh Perancang Kesihatan Sah Coway (Health Planner: <strong>{siteConfig.agentName}</strong>, Kod HP: <strong>{siteConfig.hpCode}</strong>).
            </p>
            <div className="text-[11px] text-slate-500 max-w-md leading-normal pt-1">
              <strong>Penafian (Disclaimer):</strong> Segala maklumat produk, spesifikasi, harga, tanda dagang, dan logo adalah hak milik terpelihara Coway (M) Sdn Bhd. Setiap permohonan sewa beli adalah tertakluk kepada terma, syarat, dan dasar kelulusan rasmi syarikat.
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Pautan Pantas</h4>
            <ul className="space-y-2">
              <li><a href="#kenapa" className="hover:text-white transition-colors">Komitmen Kualiti</a></li>
              <li><a href="#produk" className="hover:text-white transition-colors">Katalog Produk</a></li>
              <li><a href="#promosi" className="hover:text-white transition-colors">Pelan Promosi RM20</a></li>
              <li><a href="#perbandingan" className="hover:text-white transition-colors">Perbandingan Pelan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Hubungi Perancang Kesihatan</h4>
            <p className="text-slate-200 font-bold">{siteConfig.agentName} (HP: {siteConfig.hpCode})</p>
            <p>WhatsApp: <a href={siteConfig.whatsappBaseUrl} className="text-sky-400 font-bold">{siteConfig.displayPhone}</a></p>
            <p className="text-slate-500 pt-1">Khidmat nasihat dan pendaftaran ke seluruh Malaysia.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>© 2026 Perancang Kesihatan Coway {siteConfig.agentName}. Hak Cipta Terpelihara.</div>
          <div className="flex items-center gap-3">
            <span>Diiktiraf Halal JAKIM</span>
            <span>•</span>
            <span>Pensijilan Emas WQA</span>
            <span>•</span>
            <span>Kelulusan Piawaian SIRIM</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
