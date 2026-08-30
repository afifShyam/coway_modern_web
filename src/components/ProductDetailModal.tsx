'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { siteConfig } from '@/data/siteConfig';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { getDailyEstimate } from '@/lib/pricing';
import { useDialog } from '@/hooks/useDialog';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { 
  X, 
  ShoppingBag, 
  Droplet, 
  ShieldCheck, 
  CheckCircle2, 
  Maximize2,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Gauge,
  Award,
  Users
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox?: (product: Product, initialColor?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenLightbox
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  const dialogRef = useDialog(isOpen && Boolean(product), onClose);

  if (!isOpen || !product) return null;

  const activeImage = (product.colorVariants && product.colorVariants.length > 0)
    ? product.colorVariants[selectedColorIdx].image
    : product.image;

  const activeColorName = (product.colorVariants && product.colorVariants.length > 0)
    ? product.colorVariants[selectedColorIdx].name
    : undefined;

  const dailyEstimate = getDailyEstimate(product.regularMonthly);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      
      {/* Modal Container */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-detail-title"
        className="relative w-full max-w-4xl bg-[#0D1322] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200 text-white"
      >
        
        {/* Header Bar */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-850 flex items-center justify-between bg-[#080C16] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800">
              {product.badge || product.filterType || 'Coway Model'}
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold text-slate-400">{product.code}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            aria-label="Tutup Paparan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          
          {/* Top Section: Studio Image Stage & Primary Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
            
            {/* Left: Product Studio Presentation Stage */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full h-52 sm:h-64 bg-[#0A0F1D] rounded-2xl p-4 border border-slate-800/80 flex items-center justify-center group overflow-hidden">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-48 sm:max-h-56 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {onOpenLightbox && (
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(product, activeColorName)}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-slate-850/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 transition-all shadow-md"
                    title="Lihat Gambar Penuh"
                    aria-label="Lihat Gambar Penuh"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Color Swatches Selector */}
              {product.colorVariants && product.colorVariants.length > 0 && (
                <div className="flex items-center gap-3 mt-3 px-2">
                  <span className="text-xs text-slate-400">
                    Warna: <strong className="text-white">{activeColorName}</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    {product.colorVariants.map((variant, cIdx) => (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => setSelectedColorIdx(cIdx)}
                        style={{ backgroundColor: variant.colorHex }}
                        className={`w-6 h-6 rounded-full border transition-all ${
                          selectedColorIdx === cIdx 
                            ? 'ring-2 ring-sky-400 scale-110 border-white' 
                            : 'border-slate-700 opacity-70 hover:opacity-100'
                        }`}
                        title={variant.name}
                        aria-label={`Warna ${variant.name}`}
                        aria-pressed={selectedColorIdx === cIdx}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Product Headline & Direct Actions */}
            <div className="md:col-span-7 space-y-3.5">
              <div>
                <h2 id="product-detail-title" className="text-xl sm:text-3xl font-black text-white leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Rental Pricing Highlight Box */}
              <div className="p-4 rounded-2xl bg-[#0A0F1D] border border-slate-800 space-y-2">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 block">Kadar Sewaan Bulanan</span>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {product.regularMonthly}<span className="text-xs font-normal text-slate-400">/bulan</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Kos Anggaran</span>
                    <div className="text-sm sm:text-base font-extrabold text-sky-400">
                      ≈ {dailyEstimate} sehari
                    </div>
                  </div>
                </div>

                {product.promoMonths && (
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Promosi Pengenalan (Bulan 1–{product.promoMonths}):
                    </span>
                    <span className="font-extrabold text-amber-300 text-sm sm:text-base">
                      RM{product.promoMonthly}/bulan
                    </span>
                  </div>
                )}

                {product.outrightPrice && (
                  <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Pilihan Beli Terus (Outright):</span>
                    <strong className="text-slate-200">{product.outrightPrice}</strong>
                  </div>
                )}
              </div>

              {/* Side-by-Side Booking Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={product.emallUrl || siteConfig.emallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 text-center"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Beli di E-Mall</span>
                </a>

                <a
                  href={getProductWhatsAppUrl(product.name, product.code)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all active:scale-95 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp Tempah</span>
                </a>
              </div>
            </div>

          </div>

          {/* Full Technical Specifications Bento Grid */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Spesifikasi Teknikal & Ciri Penuh</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
              
              {/* Temperature Options */}
              {product.temperatureOptions && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <Droplet className="w-3.5 h-3.5 text-sky-400" />
                    <span>Pilihan Suhu</span>
                  </div>
                  <div className="font-extrabold text-white">{product.temperatureOptions}</div>
                </div>
              )}

              {/* Tank Capacity */}
              {product.tankCapacity && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <Gauge className="w-3.5 h-3.5 text-amber-400" />
                    <span>Kapasiti Tangki</span>
                  </div>
                  <div className="font-extrabold text-white">
                    {product.tankCapacity.total ? product.tankCapacity.total : 'Kapasiti Tangki Penuh'}
                  </div>
                  {product.tankCapacity.hot && (
                    <div className="text-[10px] text-slate-400 mt-0.5">Panas: {product.tankCapacity.hot} • Sejuk: {product.tankCapacity.cold || '-'}</div>
                  )}
                </div>
              )}

              {/* Coverage Area */}
              {product.coverageArea && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Keluasan Liputan</span>
                  </div>
                  <div className="font-extrabold text-white">{product.coverageArea}</div>
                </div>
              )}

              {/* Service Interval */}
              {product.serviceInterval && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Servis Cody</span>
                  </div>
                  <div className="font-extrabold text-white">{product.serviceInterval}</div>
                </div>
              )}

              {/* Filtration Stages */}
              {product.filtrationStages && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Sistem Penapis</span>
                  </div>
                  <div className="font-extrabold text-white">{product.filtrationStages}</div>
                </div>
              )}

              {/* Dimensions */}
              {product.dimensions && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <Gauge className="w-3.5 h-3.5 text-pink-400" />
                    <span>Dimensi (L x D x T)</span>
                  </div>
                  <div className="font-extrabold text-white">{product.dimensions}</div>
                </div>
              )}

              {/* Weight */}
              {product.weight && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    <span>Berat Bersih</span>
                  </div>
                  <div className="font-extrabold text-white">{product.weight}</div>
                </div>
              )}

              {/* Power Consumption */}
              {product.powerConsumption && (
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0A0F1D] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[11px] font-bold">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Penggunaan Kuasa</span>
                  </div>
                  <div className="font-extrabold text-white">{product.powerConsumption}</div>
                </div>
              )}

            </div>

            {/* Key Features List */}
            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="p-4 rounded-2xl bg-[#0A0F1D] border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-400">Kelebihan & Ciri Eksklusif:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications Badges */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-400 mb-2">Pensijilan Rasmi:</div>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, cIdx) => (
                    <span key={cIdx} className="px-3 py-1 rounded-xl bg-[#0A0F1D] border border-slate-800 text-slate-200 text-xs font-bold">
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-slate-850 bg-[#080C16] flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            Perunding Rasmi: <strong className="text-white">{siteConfig.agentName}</strong> (Kod: {siteConfig.hpCode})
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
