import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Facebook, ShoppingBag, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060911] border-t border-slate-850 text-slate-400 pt-12 pb-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="md:col-span-2 space-y-2.5">
            <div className="font-black text-lg sm:text-xl text-white tracking-tight">COWAY MALAYSIA</div>
            <p className="text-slate-300 max-w-sm leading-relaxed text-xs">
              Laman promosi dan konsultasi ini diuruskan secara peribadi oleh {siteConfig.designation} Sah Coway Malaysia (<strong>{siteConfig.agentName}</strong>, Kod HP: <strong>{siteConfig.hpCode}</strong>).
            </p>
            <div className="text-[11px] text-slate-400 max-w-md leading-relaxed pt-1">
              <strong>Penafian (Disclaimer):</strong> Laman web ini dikendalikan oleh Johan Adam, Coway Health Planner sah (Kod HP: {siteConfig.hpCode}), dan bukan laman korporat utama Coway (M) Sdn Bhd. Segala maklumat produk, tanda dagang, dan logo adalah hak milik terpelihara Coway (M) Sdn Bhd.
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-2.5">Pautan Pantas</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#produk" className="hover:text-white transition-colors">Katalog Produk & Harga</a></li>
              <li><a href="#promosi" className="hover:text-white transition-colors">Pelan Promosi RM20</a></li>
              <li><a href="#perbandingan" className="hover:text-white transition-colors">Sewa vs Beli Terus</a></li>
              <li><a href="#kenapa" className="hover:text-white transition-colors">8 Sebab Pilih Coway</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Soalan Lazim (FAQ)</a></li>
              <li>
                <a 
                  href={siteConfig.emallUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors inline-flex items-center gap-1 mt-0.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Coway E-Mall Rasmi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-2.5">Hubungi Health Planner</h4>
            <p className="text-slate-200 font-bold text-xs sm:text-sm">{siteConfig.agentName}</p>
            <p className="text-slate-300 text-xs">Kod Health Planner: <strong className="text-white">{siteConfig.hpCode}</strong></p>
            <p className="flex items-center gap-1 mt-1 text-slate-300 text-xs">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Telefon: <strong className="text-white">{siteConfig.displayPhone}</strong></span>
            </p>
            
            <div className="pt-2.5 flex flex-col gap-1.5">
              <a 
                href={siteConfig.whatsappDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-emerald-300 font-black transition-colors inline-flex items-center gap-1.5 text-xs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp Johan
              </a>

              <a 
                href={siteConfig.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-bold transition-colors inline-flex items-center gap-1.5 text-xs"
              >
                <Facebook className="w-3.5 h-3.5" /> Facebook: {siteConfig.facebookName}
              </a>
            </div>
          </div>
        </div>

        {/* Brand Copyright Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>© 2026 {siteConfig.agentName} (Coway HP: {siteConfig.hpCode}). Hak Cipta Terpelihara.</div>
          <div className="flex items-center gap-2.5">
            <span>Pensijilan Halal JAKIM</span>
            <span>•</span>
            <span>Standard Kualiti WQA</span>
            <span>•</span>
            <span>Piawaian SIRIM</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
