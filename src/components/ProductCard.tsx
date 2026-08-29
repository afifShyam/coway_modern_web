'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { getProductWhatsAppUrl, getProductEmallUrl } from '@/lib/whatsapp';
import { MessageCircle, Info, ZoomIn, Video, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
  onSelectDetail: (product: Product, selectedColor?: string) => void;
  onOpenLightbox: (product: Product, selectedColor?: string) => void;
  onOpenVideo?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  viewMode = 'grid',
  onSelectDetail,
  onOpenLightbox,
  onOpenVideo
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  
  const hasVideo = Boolean(product.videoUrl || product.youtubeId);

  const activeImage = product.colorVariants && product.colorVariants.length > 0 
    ? product.colorVariants[selectedColorIdx].image 
    : product.image;

  const activeColorName = product.colorVariants && product.colorVariants.length > 0
    ? product.colorVariants[selectedColorIdx].name
    : undefined;

  const emallLink = getProductEmallUrl(product.emallUrl);
  const regularNum = parseInt(product.regularMonthly.replace(/[^0-9.]/g, '')) || 0;
  const dailyCost = (regularNum / 30).toFixed(2);

  // List View Mode (Compact horizontal row)
  if (viewMode === 'list') {
    return (
      <div className="pro-card p-3 sm:p-4 bg-slate-850 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 rounded-2xl transition-all">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          
          {/* Clickable Image Box */}
          <div 
            onClick={() => onOpenLightbox(product, activeColorName)}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-xl p-1.5 flex items-center justify-center shrink-0 border border-slate-800 cursor-pointer relative group overflow-hidden"
            title="Klik untuk lihat gambar penuh"
          >
            <img 
              src={activeImage} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
              <ZoomIn className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div 
            onClick={() => onSelectDetail(product, activeColorName)}
            className="min-w-0 cursor-pointer"
          >
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-slate-900 text-sky-400 border border-slate-800">
                {product.badge}
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">{product.code}</span>
              {activeColorName && (
                <span className="text-[9px] text-slate-400 font-medium hidden sm:inline">
                  • {activeColorName}
                </span>
              )}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white truncate mt-0.5">{product.name}</h3>
            
            {/* Price line */}
            <div className="flex items-center gap-2 mt-0.5 text-xs">
              <span className="font-extrabold text-white">
                RM{regularNum}/bln <span className="text-[10px] text-slate-400 font-medium">(≈ RM{dailyCost}/hari)</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 font-semibold hidden sm:inline">
                Promo {product.promoMonths} bln: RM{product.promoMonthly}/bln
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Video Button */}
          {hasVideo && onOpenVideo && (
            <button 
              onClick={() => onOpenVideo(product)}
              className="p-2 rounded-xl bg-sky-950/60 hover:bg-sky-900 text-sky-400 border border-sky-800/80 text-xs transition-colors"
              title="Tonton Video Demo"
            >
              <Video className="w-4 h-4" />
            </button>
          )}

          <button 
            onClick={() => onSelectDetail(product, activeColorName)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors"
            title="Lihat Maklumat & Spesifikasi"
          >
            <Info className="w-4 h-4" />
          </button>
          
          {/* Personalized WhatsApp Button */}
          <a 
            href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
            <span>Tanya Johan</span>
          </a>
        </div>
      </div>
    );
  }

  // Grid View Mode
  return (
    <div className="pro-card p-3.5 sm:p-4 flex flex-col justify-between relative bg-slate-850 border border-slate-800 hover:border-slate-750 rounded-2xl transition-all shadow-md">
      <div>
        {/* Top Badge & Code */}
        <div className="flex items-center justify-between mb-1.5 gap-1">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-900 text-sky-400 border border-slate-800 truncate max-w-[95px] sm:max-w-none">
            {product.badge}
          </span>
          <span className="text-[10px] font-mono text-slate-400 font-bold">{product.code}</span>
        </div>
        
        {/* Clickable Product Image */}
        <div 
          onClick={() => onOpenLightbox(product, activeColorName)}
          className="h-28 sm:h-38 flex items-center justify-center my-2 p-1.5 sm:p-2 bg-slate-900/80 rounded-xl border border-slate-800/80 cursor-pointer group relative overflow-hidden"
          title="Klik untuk besarkan gambar"
        >
          <img 
            src={activeImage} 
            alt={product.name} 
            className="max-h-24 sm:max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
          
          {/* Zoom Overlay Indicator */}
          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-900/80 text-slate-300 opacity-70 group-hover:opacity-100 group-hover:text-sky-400 transition-all border border-slate-800">
            <ZoomIn className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Color Swatches */}
        {product.colorVariants && product.colorVariants.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 my-1.5">
            {product.colorVariants.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColorIdx(i)}
                title={c.name}
                style={{ backgroundColor: c.colorHex }}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border transition-all ${
                  selectedColorIdx === i 
                    ? 'ring-2 ring-sky-400 scale-125 border-white shadow-sm' 
                    : 'border-slate-600 opacity-60 hover:opacity-100'
                }`}
              />
            ))}
            <span className="text-[9px] text-slate-400 font-medium ml-1 truncate max-w-[70px] hidden xs:inline">
              {activeColorName}
            </span>
          </div>
        )}

        {/* Product Title & Description */}
        <div onClick={() => onSelectDetail(product, activeColorName)} className="cursor-pointer">
          <h3 className="text-sm sm:text-base font-extrabold text-white truncate">{product.name}</h3>
          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* ================= HONEST PRICING BLOCK ================= */}
      <div className="mt-2.5 pt-2.5 border-t border-slate-800 space-y-2">
        
        {/* Main Monthly Anchor + Daily Framing */}
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-sm sm:text-base font-black text-white">
                RM{regularNum}
              </span>
              <span className="text-[10px] text-slate-400 font-normal">/bulan</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              ≈ <strong className="text-sky-300">RM{dailyCost}</strong>/hari
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px] border-t border-slate-850 pt-1">
            <span className="text-amber-400 font-bold">Promo {product.promoMonths} bln awal:</span>
            <span className="font-extrabold text-amber-300">RM{product.promoMonthly}/bln</span>
          </div>
        </div>

        {/* Quick Tools Row (Info & Video & E-Mall) */}
        <div className="flex items-center gap-1 text-[11px]">
          <button 
            onClick={() => onSelectDetail(product, activeColorName)}
            className="flex-1 py-1.5 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium transition-colors flex items-center justify-center gap-1"
            title="Lihat Spesifikasi Lengkap"
          >
            <Info className="w-3 h-3 text-sky-400" />
            <span>Spesifikasi</span>
          </button>

          {hasVideo && onOpenVideo && (
            <button 
              onClick={() => onOpenVideo(product)}
              className="py-1.5 px-2 rounded-lg bg-sky-950/70 hover:bg-sky-900 text-sky-300 border border-sky-800/80 font-medium transition-colors flex items-center gap-1"
              title="Tonton Video Demo"
            >
              <Video className="w-3 h-3 text-sky-400" />
              <span>Video</span>
            </button>
          )}

          <a
            href={emallLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="Lihat di Coway E-Mall Rasmi"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Primary Action Button (Tanya Johan WhatsApp) */}
        <a 
          href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>Tanya Johan</span>
        </a>

      </div>

    </div>
  );
};
