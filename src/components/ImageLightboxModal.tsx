'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { X, MessageCircle, ZoomIn, ZoomOut, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxModalProps {
  product: Product | null;
  initialColor?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ 
  product, 
  initialColor, 
  onClose 
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    if (product && product.colorVariants && product.colorVariants.length > 0) {
      if (initialColor) {
        const found = product.colorVariants.findIndex(
          c => c.name.toLowerCase() === initialColor.toLowerCase()
        );
        setSelectedColorIdx(found !== -1 ? found : 0);
      } else {
        setSelectedColorIdx(0);
      }
    } else {
      setSelectedColorIdx(0);
    }
    setIsZoomed(false);
  }, [product, initialColor]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const hasVariants = product.colorVariants && product.colorVariants.length > 0;
  const activeImage = hasVariants ? product.colorVariants![selectedColorIdx].image : product.image;
  const activeColorName = hasVariants ? product.colorVariants![selectedColorIdx].name : undefined;

  const handlePrevVariant = () => {
    if (!hasVariants) return;
    setSelectedColorIdx((prev) => (prev === 0 ? product.colorVariants!.length - 1 : prev - 1));
  };

  const handleNextVariant = () => {
    if (!hasVariants) return;
    setSelectedColorIdx((prev) => (prev === product.colorVariants!.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-850 text-sky-400 border border-slate-750">
            {product.badge}
          </span>
          <div>
            <h3 className="text-base sm:text-xl font-extrabold text-white">{product.name}</h3>
            <span className="text-xs text-slate-400 font-mono">
              {product.code} {activeColorName && `• Warna: ${activeColorName}`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Toggle */}
          <button 
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-750 transition-colors"
            title={isZoomed ? "Zoom Keluar" : "Zoom Masuk"}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-850 hover:bg-rose-900/40 text-slate-300 hover:text-white border border-slate-750 transition-colors"
            title="Tutup (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Showcase Stage */}
      <div className="relative flex-1 w-full max-w-4xl flex items-center justify-center my-4 overflow-hidden">
        
        {/* Previous Button (if variants exist) */}
        {hasVariants && product.colorVariants!.length > 1 && (
          <button 
            onClick={handlePrevVariant}
            className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-750 shadow-xl transition-transform hover:scale-110"
            title="Warna Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Large Product Image */}
        <div 
          onClick={() => setIsZoomed(!isZoomed)}
          className={`cursor-zoom-in flex items-center justify-center transition-all duration-300 ease-out max-w-full max-h-full ${
            isZoomed ? 'scale-125 sm:scale-150' : 'scale-100'
          }`}
        >
          <img 
            src={activeImage} 
            alt={`${product.name} ${activeColorName || ''}`} 
            className="max-h-[55vh] sm:max-h-[65vh] max-w-[85vw] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105"
          />
        </div>

        {/* Next Button (if variants exist) */}
        {hasVariants && product.colorVariants!.length > 1 && (
          <button 
            onClick={handleNextVariant}
            className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-750 shadow-xl transition-transform hover:scale-110"
            title="Warna Seterusnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Controls & Color Selector Bar */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 z-20 bg-slate-900/90 border border-slate-800 p-3.5 sm:p-4 rounded-2xl shadow-2xl backdrop-blur-md">
        
        {/* Color Swatches */}
        {hasVariants && product.colorVariants!.length > 0 ? (
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="text-xs text-slate-400 font-bold mr-1 hidden sm:inline">Pilihan Warna:</span>
            {product.colorVariants!.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColorIdx(i)}
                className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${
                  selectedColorIdx === i 
                    ? 'bg-sky-950 border-sky-500 text-white ring-1 ring-sky-400 shadow-md' 
                    : 'bg-slate-850 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span 
                  className="w-3.5 h-3.5 rounded-full border border-slate-600 shadow-inner" 
                  style={{ backgroundColor: c.colorHex }}
                />
                <span>{c.name}</span>
                {selectedColorIdx === i && <Check className="w-3.5 h-3.5 text-sky-400" />}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-xs text-slate-400">
            {product.filterType || 'Model Rasmi Coway Malaysia'}
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Promo Bulanan</span>
            <span className="text-lg font-black text-sky-400">RM{product.promoMonthly}<span className="text-xs font-normal text-slate-400">/bln</span></span>
          </div>

          <a 
            href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Tempah {activeColorName ? `(${activeColorName})` : ''}
          </a>
        </div>

      </div>

    </div>
  );
};
