'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { getProductWhatsAppUrl, getProductEmallUrl } from '@/lib/whatsapp';
import { useSwipe } from '@/hooks/useSwipe';
import { useDialog } from '@/hooks/useDialog';
import { cn } from '@/lib/utils';
import { X, MessageCircle, ZoomIn, ZoomOut, Check, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

interface ImageLightboxModalProps {
  product: Product | null;
  initialColor?: string;
  isOpen?: boolean;
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

  // Handle keyboard navigation between colour variants
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNextVariant();
      if (e.key === 'ArrowLeft') handlePrevVariant();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, selectedColorIdx]);

  const dialogRef = useDialog(Boolean(product), onClose);

  if (!product) return null;

  const colorCount = product.colorVariants?.length || 0;
  const hasMultipleColors = colorCount > 1;
  const activeImage = colorCount > 0 ? product.colorVariants![selectedColorIdx].image : product.image;
  const activeColorName = colorCount > 0 ? product.colorVariants![selectedColorIdx].name : undefined;
  const emallLink = getProductEmallUrl(product.emallUrl);

  const handlePrevVariant = () => {
    if (!hasMultipleColors) return;
    setSelectedColorIdx((prev) => (prev - 1 + colorCount) % colorCount);
  };

  const handleNextVariant = () => {
    if (!hasMultipleColors) return;
    setSelectedColorIdx((prev) => (prev + 1) % colorCount);
  };

  // Reusable Touch Swipe Hook
  const swipeHandlers = useSwipe({
    onSwipeLeft: handleNextVariant,
    onSwipeRight: handlePrevVariant,
  });

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in duration-200 focus:outline-none"
    >
      
      {/* Top Header Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-950 text-sky-400 border border-sky-800">
            {product.badge}
          </span>
          <div>
            <h3 id="lightbox-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>{product.name}</span>
              {activeColorName && (
                <span className="text-xs text-sky-400 font-normal">({activeColorName})</span>
              )}
            </h3>
            <span className="text-[11px] font-mono text-slate-400">{product.code}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button 
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 transition-colors"
            title={isZoomed ? 'Kecilkan (Zoom Out)' : 'Besarkan (Zoom In)'}
            aria-label={isZoomed ? 'Kecilkan' : 'Besarkan'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button 
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-850 hover:bg-rose-900/40 text-slate-300 hover:text-white border border-slate-750 transition-colors"
            title="Tutup (ESC)"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Showcase Stage with Touch Swipe Support */}
      <div 
        {...swipeHandlers}
        className="relative flex-1 w-full max-w-4xl flex items-center justify-center my-4 overflow-hidden select-none"
      >
        {/* Compact Previous Button */}
        {hasMultipleColors && (
          <button 
            type="button"
            onClick={handlePrevVariant}
            className="absolute left-2 sm:left-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-750 shadow-lg flex items-center justify-center transition-transform hover:scale-105"
            title="Warna Sebelumnya (atau swipe kiri)"
            aria-label="Warna Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Large Product Image */}
        <div 
          onClick={() => setIsZoomed(!isZoomed)}
          className={cn(
            "cursor-zoom-in flex items-center justify-center transition-all duration-300 ease-out max-w-full max-h-full",
            isZoomed ? "scale-125 sm:scale-150" : "scale-100"
          )}
        >
          <img 
            src={activeImage} 
            alt={`${product.name} ${activeColorName || ''}`} 
            className="max-h-[55vh] sm:max-h-[65vh] max-w-[85vw] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105"
          />
        </div>

        {/* Compact Next Button */}
        {hasMultipleColors && (
          <button 
            type="button"
            onClick={handleNextVariant}
            className="absolute right-2 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-750 shadow-lg flex items-center justify-center transition-transform hover:scale-105"
            title="Warna Seterusnya (atau swipe kanan)"
            aria-label="Warna Seterusnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bottom Controls & Color Selector Bar */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 z-20 bg-slate-900/90 border border-slate-800 p-3.5 sm:p-4 rounded-2xl shadow-2xl backdrop-blur-md">
        
        {/* Color Swatches */}
        {colorCount > 0 ? (
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="text-xs text-slate-400 font-bold mr-1 hidden sm:inline">Pilihan Warna:</span>
            {product.colorVariants!.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedColorIdx(i)}
                aria-pressed={selectedColorIdx === i}
                className={cn(
                  "px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all",
                  selectedColorIdx === i 
                    ? "bg-sky-950 border-sky-500 text-white ring-1 ring-sky-400 shadow-md" 
                    : "bg-slate-850 border-slate-800 text-slate-400 hover:text-white"
                )}
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

        {/* Side-by-Side Action Buttons: Beli Online & WhatsApp */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <a 
            href={emallLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border border-amber-500/40 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Beli Online</span>
          </a>

          <a 
            href={getProductWhatsAppUrl(product.name, product.code, activeColorName)}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
            <span>WhatsApp Johan</span>
          </a>
        </div>

      </div>

    </div>
  );
};
