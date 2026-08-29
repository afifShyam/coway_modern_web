'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { siteConfig } from '@/data/siteConfig';
import { getProductWhatsAppUrl, getProductEmallUrl } from '@/lib/whatsapp';
import { 
  X, 
  Check, 
  MessageCircle, 
  ShoppingCart, 
  ShieldCheck, 
  Wrench, 
  BadgeCheck,
  ExternalLink,
  Flame,
  Info
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  initialColor?: string;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  initialColor, 
  onClose 
}) => {
  const getInitialIndex = () => {
    if (!initialColor || !product.colorVariants) return 0;
    const idx = product.colorVariants.findIndex(c => c.name === initialColor);
    return idx >= 0 ? idx : 0;
  };

  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(getInitialIndex());

  const emallLink = getProductEmallUrl(product.emallUrl);

  const activeImage = product.colorVariants && product.colorVariants.length > 0 
    ? product.colorVariants[selectedColorIdx].image 
    : product.image;

  const activeColorName = product.colorVariants && product.colorVariants.length > 0
    ? product.colorVariants[selectedColorIdx].name
    : undefined;

  const regPrice = Math.round(parseFloat(product.regularMonthly.replace(/[^0-9.]/g, ''))) || 0;
  const promoPrice = parseInt(product.promoMonthly) || 0;
  const savings = Math.max(0, regPrice - promoPrice);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="pro-card p-6 sm:p-8 bg-slate-900 border border-slate-800 w-full sm:max-w-2xl rounded-t-3xl sm:rounded-2xl max-h-[92vh] overflow-y-auto relative shadow-2xl animate-in slide-in-from-bottom duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-850 border border-slate-750 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-950 text-sky-400 border border-sky-800">
            {product.badge}
          </span>
          <span className="text-xs font-mono text-slate-400 font-bold">{product.code}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{product.name}</h2>
        <p className="text-sm text-slate-300 mt-1 leading-relaxed">{product.description}</p>

        {/* Product Image Stage */}
        <div className="h-48 sm:h-64 bg-slate-950 rounded-2xl flex items-center justify-center my-4 p-4 border border-slate-800 relative">
          <img 
            src={activeImage} 
            alt={`${product.name} ${activeColorName || ''}`} 
            className="max-h-full max-w-full object-contain drop-shadow-2xl transition-all duration-300"
          />
          {activeColorName && (
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-750 text-xs font-medium text-slate-300">
              Pilihan Warna: <strong className="text-white">{activeColorName}</strong>
            </div>
          )}
        </div>

        {/* Color Switcher */}
        {product.colorVariants && product.colorVariants.length > 0 && (
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Pilihan Warna Rasmi Coway:
            </span>
            <div className="flex flex-wrap gap-2">
              {product.colorVariants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColorIdx(idx)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                    selectedColorIdx === idx
                      ? 'bg-slate-800 border-sky-500 text-white ring-1 ring-sky-500'
                      : 'bg-slate-850 border-slate-750 text-slate-400 hover:text-white'
                  }`}
                >
                  <span 
                    className="w-3.5 h-3.5 rounded-full border border-slate-600 shadow-sm"
                    style={{ backgroundColor: variant.colorHex }}
                  />
                  <span>{variant.name}</span>
                  {selectedColorIdx === idx && <Check className="w-3.5 h-3.5 text-sky-400" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price Matrix Breakdown */}
        <div className="my-4 p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
          
          {/* Promo Highlight */}
          <div className="p-3 rounded-lg bg-sky-950/60 border border-sky-800/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-sky-400 block">Promosi Bulan 1 - {product.promoMonths}</span>
              <div className="text-2xl font-black text-sky-400">
                RM{product.promoMonthly}<span className="text-xs font-normal text-slate-300">/bulan*</span>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-sky-900 text-sky-200 font-bold text-[10px] uppercase">
              Jimat RM{savings}/bln
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Selepas Promo</span>
              <span className="font-extrabold text-white text-sm">RM{regPrice}/bulan</span>
              <span className="text-[10px] text-slate-500 block">bulan seterusnya</span>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Beli Tunai (Outright)</span>
              <span className="font-extrabold text-sky-300 text-sm">
                {product.outrightPrice !== 'NA' ? product.outrightPrice : 'Pelan Sewa Sahaja'}
              </span>
              <span className="text-[10px] text-slate-500 block">sekali bayar</span>
            </div>
          </div>

          {/* Assurances */}
          <div className="pt-2 border-t border-slate-800 grid grid-cols-3 gap-1 text-center text-[10px] text-emerald-400 font-medium">
            <div>✓ RM0 Pendaftaran</div>
            <div>✓ Pasang Percuma</div>
            <div>✓ Servis Cody Percuma</div>
          </div>
        </div>

        {/* Action Buttons: WhatsApp Primary, E-Mall Secondary */}
        <div className="space-y-2 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            
            {/* WhatsApp Booking (PRIMARY) */}
            <a 
              href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
              target="_blank" 
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 order-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Johan — Semak Kelayakan</span>
            </a>

            {/* Online Purchase on E-Mall (SECONDARY) */}
            <a 
              href={emallLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-750 font-bold text-xs transition-all flex items-center justify-center gap-2 order-2"
            >
              <ShoppingCart className="w-4 h-4 text-sky-400" />
              <span>Beli Terus di E-Mall (Kod: {siteConfig.hpCode})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

          </div>
          <p className="text-[10px] text-slate-500 text-center pt-1">
            *Kadar sewa bulanan promosi RM20 adalah kadar pengenalan untuk tempoh yang ditetapkan. Tertakluk kepada terma pelan kontrak & kelulusan Coway (M) Sdn Bhd.
          </p>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-6 border-t border-slate-800 pt-5 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Info className="w-4 h-4 text-sky-400" />
            <span>Spesifikasi Teknikal Lengkap</span>
          </h3>

          <div className="rounded-xl border border-slate-800 overflow-hidden text-xs">
            <table className="w-full text-left">
              <tbody className="divide-y divide-slate-800 bg-slate-850/50">
                {product.tankCapacity && (
                  <tr>
                    <td className="p-3 font-semibold text-slate-400 bg-slate-900/60 w-1/3">Kapasiti Tangki</td>
                    <td className="p-3 text-slate-200">
                      {product.tankCapacity.hot && `Panas: ${product.tankCapacity.hot} | `}
                      {product.tankCapacity.cold && `Sejuk: ${product.tankCapacity.cold} | `}
                      {product.tankCapacity.ambient && `Suhu Bilik: ${product.tankCapacity.ambient} | `}
                      <strong>Jumlah: {product.tankCapacity.total}</strong>
                    </td>
                  </tr>
                )}
                {product.filterType && (
                  <tr>
                    <td className="p-3 font-semibold text-slate-400 bg-slate-900/60">Jenis Penapisan</td>
                    <td className="p-3 text-slate-200">{product.filterType}</td>
                  </tr>
                )}
                {product.dimensions && (
                  <tr>
                    <td className="p-3 font-semibold text-slate-400 bg-slate-900/60">Dimensi (L x D x T)</td>
                    <td className="p-3 text-slate-200">{product.dimensions}</td>
                  </tr>
                )}
                {product.powerConsumption && (
                  <tr>
                    <td className="p-3 font-semibold text-slate-400 bg-slate-900/60">Penggunaan Kuasa</td>
                    <td className="p-3 text-slate-200">{product.powerConsumption}</td>
                  </tr>
                )}
                {product.filtrationStages && (
                  <tr>
                    <td className="p-3 font-semibold text-slate-400 bg-slate-900/60">Peringkat Penapis</td>
                    <td className="p-3 text-slate-200">{product.filtrationStages}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Features List */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <div className="mt-5 border-t border-slate-800 pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Ciri-Ciri Keutamaan Model Ini:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-850 border border-slate-800">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
