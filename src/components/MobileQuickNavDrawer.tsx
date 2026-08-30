'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { useDialog } from '@/hooks/useDialog';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { 
  X, 
  ChevronRight, 
  Droplet, 
  Wind, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  Scale, 
  Phone, 
  ShoppingBag,
  HelpCircle,
  UserCheck,
  Footprints
} from 'lucide-react';

interface MobileQuickNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: any) => void;
}

export const MobileQuickNavDrawer: React.FC<MobileQuickNavDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory
}) => {
  const dialogRef = useDialog(isOpen, onClose);

  if (!isOpen) return null;

  const handleNavClick = (href: string, category?: string) => {
    onClose();
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Menu Navigasi Pantas"
        className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#0D1322] border-l border-slate-800 shadow-2xl flex flex-col justify-between text-white animate-in slide-in-from-right duration-300"
      >
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-[#080C16]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-sky-400">
              <img 
                src={siteConfig.agentAvatar || siteConfig.agentImage} 
                alt={siteConfig.agentName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-black text-white">{siteConfig.agentName}</div>
              <div className="text-[10px] text-slate-400">HP: {siteConfig.hpCode}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Nav List */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs">
          
          {/* Section: Lompat Terus ke Kategori Produk */}
          <div>
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-sky-400 block mb-2 px-2">
              Lompat Pantas Produk
            </span>
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => handleNavClick('#produk', 'water')}
                className="w-full p-2.5 rounded-xl bg-[#111726] hover:bg-[#162035] border border-slate-800 flex items-center justify-between text-left font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-sky-400" />
                  <span>Penapis Air (10 Model)</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#produk', 'air')}
                className="w-full p-2.5 rounded-xl bg-[#111726] hover:bg-[#162035] border border-slate-800 flex items-center justify-between text-left font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-emerald-400" />
                  <span>Penapis Udara (5 Model)</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#produk', 'berex')}
                className="w-full p-2.5 rounded-xl bg-[#111726] hover:bg-[#162035] border border-slate-800 flex items-center justify-between text-left font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Kerusi Urut & Tilam Hotel</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#produk', 'aircond')}
                className="w-full p-2.5 rounded-xl bg-[#111726] hover:bg-[#162035] border border-slate-800 flex items-center justify-between text-left font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>❄️</span>
                  <span>Penyaman Udara Inverter</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#produk', 'refrigerator')}
                className="w-full p-2.5 rounded-xl bg-[#111726] hover:bg-[#162035] border border-slate-800 flex items-center justify-between text-left font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>🧊</span>
                  <span>Peti Sejuk 2 & 4 Pintu</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Section: Bahagian Penting Laman */}
          <div>
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400 block mb-2 px-2">
              Maklumat & Panduan
            </span>
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => handleNavClick('#promosi')}
                className="w-full p-2.5 rounded-xl hover:bg-[#111726] flex items-center justify-between text-left font-semibold text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Pelan Promosi RM20</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#kenapa')}
                className="w-full p-2.5 rounded-xl hover:bg-[#111726] flex items-center justify-between text-left font-semibold text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>8 Sebab Pilih Coway</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#perbandingan')}
                className="w-full p-2.5 rounded-xl hover:bg-[#111726] flex items-center justify-between text-left font-semibold text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-purple-400" />
                  <span>Sewa Beli vs Beli Terus</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#langkah')}
                className="w-full p-2.5 rounded-xl hover:bg-[#111726] flex items-center justify-between text-left font-semibold text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-cyan-400" />
                  <span>5 Langkah Pendaftaran</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#johan')}
                className="w-full p-2.5 rounded-xl hover:bg-[#111726] flex items-center justify-between text-left font-semibold text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Borang Konsultasi Johan</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#faq')}
                className="w-full p-2.5 rounded-xl hover:bg-[#111726] flex items-center justify-between text-left font-semibold text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span>Soalan Lazim (FAQ)</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-[#080C16] space-y-2">
          <a
            href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin bertanya mengenai promosi produk Coway.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>WhatsApp Johan Terus</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="py-2.5 px-2 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 text-[11px] font-bold flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Telefon</span>
            </a>

            <a
              href={siteConfig.emallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-amber-300 text-[11px] font-bold flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>E-Mall</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
