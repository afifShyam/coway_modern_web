'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Facebook, ShoppingBag, Phone, MessageCircle, Code2, ArrowUpRight, Globe } from 'lucide-react';

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
              <li>
                <a 
                  href={siteConfig.emallUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors inline-flex items-center gap-1 mt-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Coway E-Mall Rasmi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Hubungi Perancang Kesihatan</h4>
            <p className="text-slate-200 font-bold text-sm">{siteConfig.agentName}</p>
            <p className="text-slate-400">Kod Health Planner: <strong className="text-white">{siteConfig.hpCode}</strong></p>
            <p className="flex items-center gap-1 mt-1 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Telefon: <strong className="text-white">{siteConfig.displayPhone}</strong></span>
            </p>
            
            <div className="pt-3 flex flex-col gap-2">
              <a 
                href={siteConfig.whatsappDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Rasmi
              </a>

              <a 
                href={siteConfig.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <Facebook className="w-4 h-4" /> Facebook: {siteConfig.facebookName}
              </a>
            </div>
          </div>
        </div>

        {/* Brand Copyright Bar */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>© 2026 Perancang Kesihatan Coway {siteConfig.agentName} (Kod HP: {siteConfig.hpCode}). Hak Cipta Terpelihara.</div>
          <div className="flex items-center gap-3">
            <span>Diiktiraf Halal JAKIM</span>
            <span>•</span>
            <span>Pensijilan Emas WQA</span>
            <span>•</span>
            <span>Kelulusan Piawaian SIRIM</span>
          </div>
        </div>

        {/* Discreet Developer Signature & Portfolio Link */}
        {siteConfig.developer && (
          <div className="pt-4 mt-4 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>
                Laman web dibangunkan & direka oleh{' '}
                <a
                  href={siteConfig.developer.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-300 hover:text-sky-400 underline decoration-slate-700 underline-offset-2 transition-colors"
                  title="Lihat Portfolio Afif Shyam"
                >
                  {siteConfig.developer.name}
                </a>
              </span>
            </div>

            <a
              href={siteConfig.developer.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-sky-300 border border-slate-800 transition-colors group"
            >
              <Globe className="w-3 h-3 text-sky-400" />
              <span>Ingin bina laman web seperti ini?</span>
              <span className="text-sky-400 font-bold group-hover:underline flex items-center">
                Lihat Portfolio <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </span>
            </a>
          </div>
        )}

      </div>
    </footer>
  );
};
