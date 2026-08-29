'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle, Info, ZoomIn, Video } from 'lucide-react';

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

  // List View Mode (Compact horizontal row)
  if (viewMode === 'list') {
    return (
      <div className="pro-card p-3 sm:p-4 bg-slate-850 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-all">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          
          {/* Clickable Image Box with Zoom Indicator */}
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
              <span className="text-[10px] font-mono text-slate-400">{product.code}</span>
              {activeColorName && (
                <span className="text-[9px] text-slate-400 font-medium hidden sm:inline">
                  • {activeColorName}
                </span>
              )}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white truncate mt-0.5">{product.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-black text-sky-400">
                RM{product.promoMonthly}<span className="text-[10px] font-normal text-slate-400">/bln</span>
              </span>
              <span className="text-[10px] text-slate-400 line-through hidden sm:inline">{product.regularMonthly}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Color swatches in list mode */}
          {product.colorVariants && product.colorVariants.length > 1 && (
            <div className="hidden md:flex items-center gap-1">
              {product.colorVariants.map((c, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColorIdx(i);
                  }}
                  title={c.name}
                  style={{ backgroundColor: c.colorHex }}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColorIdx === i ? 'ring-2 ring-sky-400 scale-110 border-white' : 'border-slate-600 opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Conditional Video Button: ONLY IF PRODUCT HAS VIDEO */}
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
          
          <a 
            href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  // Grid View Mode (Optimized 2-col mobile & multi-col desktop)
  return (
    <div className="pro-card p-3 sm:p-5 flex flex-col justify-between relative bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all">
      <div>
        {/* Top Badge & Code */}
        <div className="flex items-center justify-between mb-1.5 gap-1">
          <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-slate-900 text-sky-400 border border-slate-800 truncate max-w-[90px] sm:max-w-none">
            {product.badge}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 font-bold">{product.code}</span>
        </div>
        
        {/* Clickable Product Image Container with Zoom Badge */}
        <div 
          onClick={() => onOpenLightbox(product, activeColorName)}
          className="h-28 sm:h-44 flex items-center justify-center my-2 p-1.5 sm:p-2 bg-slate-900/70 rounded-xl border border-slate-800/80 cursor-pointer group relative overflow-hidden"
          title="Klik untuk besarkan gambar & lihat jelas"
        >
          <img 
            src={activeImage} 
            alt={product.name} 
            className="max-h-24 sm:max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
          
          {/* Zoom Overlay Indicator */}
          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-900/80 text-slate-300 opacity-80 group-hover:opacity-100 group-hover:text-sky-400 group-hover:bg-slate-850 transition-all border border-slate-800">
            <ZoomIn className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Color Swatches (If variants exist) */}
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
          <h3 className="text-xs sm:text-base font-extrabold text-white truncate sm:line-clamp-1">{product.name}</h3>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1 sm:line-clamp-2 leading-relaxed hidden xs:block">
            {product.description}
          </p>
        </div>

        {/* Feature Tags */}
        <div className="mt-2 hidden sm:flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ================= COMPACT PRICING BOX ================= */}
      <div className="mt-2.5 pt-2 border-t border-slate-800 space-y-2">
        
        {/* Promo Price Callout */}
        <div className="p-1.5 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[8px] sm:text-[9px] uppercase font-bold text-sky-400 tracking-wide block">
              Promo Bln 1-{product.promoMonths}
            </span>
            <div className="text-sm sm:text-xl font-black text-sky-400 leading-tight">
              RM{product.promoMonthly}<span className="text-[9px] sm:text-[10px] font-normal text-slate-400">/bln</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[8px] sm:text-[9px] text-slate-400">Sewa Asal</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-200">{product.regularMonthly}</div>
          </div>
        </div>

        {/* Actions Row */}
        <div className="flex items-center gap-1.5">
          {/* Conditional Video Button: ONLY IF PRODUCT HAS VIDEO */}
          {hasVideo && onOpenVideo && (
            <button 
              onClick={() => onOpenVideo(product)}
              className="p-2 rounded-xl bg-sky-950/70 hover:bg-sky-900 text-sky-400 border border-sky-800/80 text-xs transition-colors shrink-0"
              title="Tonton Video Demo"
            >
              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          )}

          <button 
            onClick={() => onSelectDetail(product, activeColorName)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors shrink-0"
            title="Spesifikasi Penuh"
          >
            <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          
          <a 
            href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
};
