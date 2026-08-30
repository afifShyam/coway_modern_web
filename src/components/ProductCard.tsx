'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { siteConfig } from '@/data/siteConfig';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { getDailyEstimate } from '@/lib/pricing';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { 
  ShoppingBag, 
  Maximize2, 
  Video, 
  Info, 
  Droplet,
  CheckCircle2
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
  onOpenDetail: (product: Product) => void;
  onOpenLightbox: (product: Product, initialColor?: string) => void;
  onOpenVideo?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode = 'grid',
  onOpenDetail,
  onOpenLightbox,
  onOpenVideo
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);

  const activeImage = (product.colorVariants && product.colorVariants.length > 0)
    ? product.colorVariants[selectedColorIdx].image
    : product.image;

  const activeColorName = (product.colorVariants && product.colorVariants.length > 0)
    ? product.colorVariants[selectedColorIdx].name
    : undefined;

  const dailyEstimate = getDailyEstimate(product.regularMonthly);

  // =========================================================================
  // --- LIST VIEW (RESPONSIVE EXECUTIVE DARK CARD) ---
  // =========================================================================
  if (viewMode === 'list') {
    return (
      <div className="pro-card p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 group">
        
        {/* Left Side: Thumbnail & Title Info */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
          
          {/* Thumbnail Image Box */}
          <div 
            onClick={() => onOpenDetail(product)}
            className="w-18 h-18 sm:w-24 sm:h-24 shrink-0 bg-[#0A0F1D] rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border border-slate-800/80 flex items-center justify-center cursor-pointer relative group/img overflow-hidden"
          >
            <img
              src={activeImage}
              alt={product.name}
              className="max-h-14 max-w-14 sm:max-h-20 sm:max-w-20 w-auto h-auto object-contain transition-transform duration-300 group-hover/img:scale-105"
              loading="lazy"
            />
            {(product.videoUrl || product.youtubeId) && (
              <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xs">
                <Video className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </div>
            )}
          </div>

          {/* Product Details & Tags */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-0.5 sm:mb-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400">{product.code}</span>
              {product.badge && (
                <span className="px-1.5 sm:px-2 py-0.2 rounded-md bg-sky-950 text-sky-300 border border-sky-800 text-[9px] sm:text-[10px] font-bold">
                  {product.badge}
                </span>
              )}
            </div>

            <h3 
              onClick={() => onOpenDetail(product)}
              className="text-sm sm:text-lg font-black text-white hover:text-sky-400 cursor-pointer transition-colors leading-snug break-words"
            >
              {product.name}
            </h3>

            {/* Quick Specs Snippet */}
            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5 text-xs text-slate-400 flex-wrap">
              {product.temperatureOptions && (
                <span className="inline-flex items-center gap-1 bg-[#0A0F1D] px-1.5 sm:px-2 py-0.5 rounded-lg border border-slate-800 text-slate-300 text-[10px] sm:text-[11px]">
                  <Droplet className="w-3 h-3 text-sky-400" />
                  <span className="truncate max-w-[140px] sm:max-w-none">{product.temperatureOptions}</span>
                </span>
              )}
              {product.tankCapacity?.total && (
                <span className="bg-[#0A0F1D] px-1.5 sm:px-2 py-0.5 rounded-lg border border-slate-800 text-slate-300 text-[10px] sm:text-[11px]">
                  Tangki: <strong>{product.tankCapacity.total}</strong>
                </span>
              )}
              {product.coverageArea && (
                <span className="bg-[#0A0F1D] px-1.5 sm:px-2 py-0.5 rounded-lg border border-slate-800 text-slate-300 text-[10px] sm:text-[11px]">
                  Liputan: <strong>{product.coverageArea}</strong>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Price & Action Buttons */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between sm:justify-end gap-2 sm:gap-3 pt-2.5 sm:pt-0 border-t md:border-t-0 border-slate-800 shrink-0">
          
          {/* Price Block */}
          <div className="text-left md:text-right">
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-2xl font-black text-white">{product.regularMonthly}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">/bln</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400">
              ≈ <strong className="text-sky-400">{dailyEstimate}</strong>/hari
            </div>
          </div>

          {/* Action Buttons Group */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => onOpenDetail(product)}
              aria-label={`Lihat spesifikasi penuh ${product.name}`}
              className="py-2 px-2 sm:px-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition-all active:scale-95 whitespace-nowrap"
            >
              <Info className="w-3 h-3 text-sky-400" />
              <span className="hidden xs:inline">Spek</span>
            </button>

            <a
              href={product.emallUrl || siteConfig.emallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-2.5 sm:px-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition-all active:scale-95 whitespace-nowrap"
            >
              <ShoppingBag className="w-3 h-3 text-amber-400" />
              <span>Online</span>
            </a>

            <a
              href={getProductWhatsAppUrl(product.name, product.code)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 sm:px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-[10px] sm:text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>Wasap</span>
            </a>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // --- GRID VIEW (MOBILE-FIRST 2-COLUMN SHOWROOM CARD) ---
  // =========================================================================
  return (
    <div className="pro-card p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl relative">
      
      <div>
        {/* Top Header: Badge & Product Code */}
        <div className="flex items-center justify-between gap-1 mb-2">
          {product.badge ? (
            <span className="px-1.5 sm:px-2.5 py-0.2 sm:py-0.5 rounded-md sm:rounded-full text-[8px] sm:text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800 truncate">
              {product.badge}
            </span>
          ) : (
            <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400 truncate">
              {product.filterType || 'Coway'}
            </span>
          )}
          <span className="text-[9px] sm:text-xs font-mono font-bold text-slate-400 truncate">{product.code}</span>
        </div>

        {/* Product Image Stage (Studio Presentation) */}
        <div 
          onClick={() => onOpenDetail(product)}
          className="relative h-28 sm:h-44 bg-[#0A0F1D] rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-slate-800/80 mb-2 sm:mb-3.5 overflow-hidden flex items-center justify-center cursor-pointer group/img"
        >
          <img
            src={activeImage}
            alt={product.name}
            className="h-full max-h-24 sm:max-h-36 w-auto object-contain transition-transform duration-300 group-hover/img:scale-105"
            loading="lazy"
          />

          {/* Video Play Trigger */}
          {(product.videoUrl || product.youtubeId) && onOpenVideo && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenVideo(product);
              }}
              className="absolute top-1.5 left-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-[8px] sm:text-[10px] font-extrabold flex items-center gap-1 shadow-md transition-all active:scale-95"
            >
              <Video className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>Video</span>
            </button>
          )}

          {/* Quick Zoom Action */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(product, activeColorName);
            }}
            className="absolute top-1.5 right-1.5 p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-slate-850/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
            title="Lihat Gambar Penuh"
            aria-label={`Lihat gambar penuh ${product.name}`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Color Swatches (if available) */}
        {product.colorVariants && product.colorVariants.length > 0 && (
          <div className="flex items-center justify-between mb-2 px-0.5">
            <span className="text-[9px] sm:text-[11px] text-slate-400 truncate max-w-[90px] sm:max-w-none">
              <strong className="text-slate-200">{activeColorName}</strong>
            </span>
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              {product.colorVariants.map((variant, cIdx) => (
                <button
                  key={cIdx}
                  type="button"
                  onClick={() => setSelectedColorIdx(cIdx)}
                  style={{ backgroundColor: variant.colorHex }}
                  aria-label={`Warna ${variant.name}`}
                  aria-pressed={selectedColorIdx === cIdx}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border transition-all ${
                    selectedColorIdx === cIdx 
                      ? 'ring-2 ring-sky-400 scale-110 border-white' 
                      : 'border-slate-700 opacity-70 hover:opacity-100'
                  }`}
                  title={variant.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Product Title */}
        <h3 
          onClick={() => onOpenDetail(product)}
          className="text-xs sm:text-base font-black text-white hover:text-sky-400 cursor-pointer transition-colors leading-snug truncate"
        >
          {product.name}
        </h3>

        {/* Desktop-only key feature snippet */}
        {product.keyFeatures && (
          <div className="mt-2.5 pt-2 border-t border-slate-800 space-y-1 hidden sm:block">
            {product.keyFeatures.slice(0, 2).map((feat, fIdx) => (
              <div key={fIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-tight">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pricing & Footer Actions */}
      <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-800 space-y-2">
        
        {/* Pricing Block */}
        <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#0A0F1D] border border-slate-800">
          <div className="flex items-baseline justify-between">
            <div className="text-sm sm:text-xl font-black text-white">
              {product.regularMonthly}<span className="text-[9px] sm:text-xs font-normal text-slate-400">/bln</span>
            </div>
            <span className="text-[9px] sm:text-xs text-slate-400 font-medium hidden xs:inline">
              ≈ <strong className="text-sky-400">{dailyEstimate}</strong>/hari
            </span>
          </div>

          {product.promoMonths && (
            <div className="mt-1 pt-1 border-t border-slate-800 flex items-center justify-between text-[9px] sm:text-xs">
              <span className="text-amber-400 font-bold">Promo:</span>
              <span className="font-extrabold text-amber-300">RM{product.promoMonthly}/bln</span>
            </div>
          )}
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-1">
          <a
            href={product.emallUrl || siteConfig.emallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-1 sm:px-2 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition-all active:scale-95 whitespace-nowrap"
            title="Beli Terus di Coway E-Mall Rasmi"
          >
            <ShoppingBag className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Online</span>
          </a>

          <a
            href={getProductWhatsAppUrl(product.name, product.code)}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-1 sm:px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-xs transition-all active:scale-95 whitespace-nowrap"
            title="Hubungi Johan di WhatsApp"
          >
            <WhatsAppIcon className="w-3 h-3 fill-white shrink-0" />
            <span>Wasap</span>
          </a>
        </div>

        {/* View Full Specs Link */}
        <button
          type="button"
          onClick={() => onOpenDetail(product)}
          className="w-full py-1 text-[10px] sm:text-[11px] text-slate-400 hover:text-sky-400 font-bold flex items-center justify-center gap-1 transition-colors"
        >
          <Info className="w-3 h-3" />
          <span>Lihat Spek Penuh</span>
        </button>

      </div>

    </div>
  );
};
