'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { X, MessageCircle, CheckCircle2, Droplets, Zap, Ruler, Layers, ZoomIn, Video } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  initialColor?: string;
  onClose: () => void;
  onOpenLightbox?: (product: Product, selectedColor?: string) => void;
  onOpenVideo?: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  initialColor, 
  onClose,
  onOpenLightbox,
  onOpenVideo
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);

  useEffect(() => {
    if (product && product.colorVariants && product.colorVariants.length > 0) {
      if (initialColor) {
        const found = product.colorVariants.findIndex(c => c.name.toLowerCase() === initialColor.toLowerCase());
        setSelectedColorIdx(found !== -1 ? found : 0);
      } else {
        setSelectedColorIdx(0);
      }
    }
  }, [product, initialColor]);

  if (!product) return null;

  const activeImage = product.colorVariants && product.colorVariants.length > 0 
    ? product.colorVariants[selectedColorIdx].image 
    : product.image;

  const activeColorName = product.colorVariants && product.colorVariants.length > 0
    ? product.colorVariants[selectedColorIdx].name
    : undefined;

  const savings = parseInt(product.regularMonthly.replace(/[^0-9]/g, '')) - parseInt(product.promoMonthly);

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

        {/* Top Product Showcase & Color Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 my-3 p-4 bg-slate-850 rounded-2xl border border-slate-800 items-center">
          
          {/* Clickable Image to Zoom */}
          <div 
            onClick={() => onOpenLightbox && onOpenLightbox(product, activeColorName)}
            className="sm:col-span-5 h-44 flex items-center justify-center bg-slate-900 rounded-xl p-3 border border-slate-800 cursor-pointer relative group overflow-hidden"
            title="Klik untuk lihat gambar resolusi tinggi"
          >
            <img 
              src={activeImage} 
              alt={product.name} 
              className="max-h-36 max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-bold flex items-center gap-1 border border-slate-700">
                <ZoomIn className="w-3.5 h-3.5 text-sky-400" /> Zoom
              </span>
            </div>
          </div>

          <div className="sm:col-span-7 space-y-2.5">
            <div>
              <h3 className="text-xl font-extrabold text-white">{product.name}</h3>
              {product.filterType && (
                <span className="text-xs font-semibold text-sky-400 block mt-0.5">{product.filterType}</span>
              )}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{product.description}</p>

            {/* Video Watch Button in Details */}
            <button
              onClick={() => onOpenVideo && onOpenVideo(product)}
              className="w-full py-2 px-3 rounded-xl bg-sky-950/80 hover:bg-sky-900/90 text-sky-300 border border-sky-800 text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-sky-400" />
              <span>Tonton Video Demo & Fungsi Model</span>
            </button>

            {/* Interactive Color Variant Selector */}
            {product.colorVariants && product.colorVariants.length > 0 && (
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Pilihan Warna:</span>
                  <span className="text-sky-400 font-extrabold">{activeColorName}</span>
                </div>
                
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colorVariants.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColorIdx(i)}
                      className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-all ${
                        selectedColorIdx === i 
                          ? 'bg-sky-950 border-sky-500 text-white ring-1 ring-sky-400' 
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span 
                        className="w-3 h-3 rounded-full border border-slate-600" 
                        style={{ backgroundColor: c.colorHex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tank Capacity Grid (If Applicable) */}
        {product.tankCapacity && (
          <div className="my-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-sky-400" />
              Kapasiti Tangki Air
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              {product.tankCapacity.hot && (
                <div className="p-2.5 rounded-xl bg-slate-850 border border-slate-800">
                  <span className="text-[10px] text-rose-400 font-bold block uppercase">Air Panas</span>
                  <span className="font-extrabold text-white text-sm">{product.tankCapacity.hot}</span>
                </div>
              )}
              {product.tankCapacity.cold && (
                <div className="p-2.5 rounded-xl bg-slate-850 border border-slate-800">
                  <span className="text-[10px] text-sky-400 font-bold block uppercase">Air Sejuk</span>
                  <span className="font-extrabold text-white text-sm">{product.tankCapacity.cold}</span>
                </div>
              )}
              {product.tankCapacity.ambient && (
                <div className="p-2.5 rounded-xl bg-slate-850 border border-slate-800">
                  <span className="text-[10px] text-emerald-400 font-bold block uppercase">Air Bilik</span>
                  <span className="font-extrabold text-white text-sm">{product.tankCapacity.ambient}</span>
                </div>
              )}
              {product.tankCapacity.ice && (
                <div className="p-2.5 rounded-xl bg-slate-850 border border-slate-800">
                  <span className="text-[10px] text-cyan-300 font-bold block uppercase">Kapasiti Ais</span>
                  <span className="font-extrabold text-white text-sm">{product.tankCapacity.ice}</span>
                </div>
              )}
              {product.tankCapacity.total && (
                <div className="p-2.5 rounded-xl bg-slate-850 border border-sky-800/60 sm:col-span-4 flex items-center justify-between px-4">
                  <span className="text-xs text-sky-400 font-bold uppercase">Jumlah Keseluruhan</span>
                  <span className="font-extrabold text-white text-sm">{product.tankCapacity.total}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Technical Specs & Dimensions */}
        <div className="my-4 space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Ruler className="w-3.5 h-3.5 text-sky-400" />
            Spesifikasi Teknikal
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {product.dimensions && (
              <div className="p-3 rounded-xl bg-slate-850 border border-slate-800 flex items-center gap-2.5">
                <Ruler className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">Dimensi (L x D x T)</span>
                  <span className="font-bold text-white">{product.dimensions}</span>
                </div>
              </div>
            )}

            {product.powerConsumption && (
              <div className="p-3 rounded-xl bg-slate-850 border border-slate-800 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">Penggunaan Kuasa</span>
                  <span className="font-bold text-white">{product.powerConsumption}</span>
                </div>
              </div>
            )}
          </div>

          {product.filtrationStages && (
            <div className="p-3 rounded-xl bg-slate-850 border border-slate-800 flex items-start gap-2.5 text-xs">
              <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 block">Sistem Penapisan</span>
                <span className="font-semibold text-slate-200">{product.filtrationStages}</span>
              </div>
            </div>
          )}
        </div>

        {/* Key Features Checklist */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <div className="my-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ciri-Ciri Utama</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-850 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
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
                RM{product.promoMonthly}<span className="text-xs font-normal text-slate-300">/bulan</span>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-sky-900 text-sky-200 font-bold text-[10px] uppercase">
              Jimat RM{savings}/bln
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Sewa Biasa</span>
              <span className="font-extrabold text-white text-sm">{product.regularMonthly}</span>
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

        {/* Action Button */}
        <a 
          href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Johan Tempah {product.name} {activeColorName ? `(${activeColorName})` : ''}
        </a>

      </div>
    </div>
  );
};
