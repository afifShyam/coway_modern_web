'use client';

import React from 'react';
import { Product } from '@/types/product';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { X, MessageCircle, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const savings = parseInt(product.regularMonthly.replace(/[^0-9]/g, '')) - parseInt(product.promoMonthly);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="pro-card p-6 bg-slate-900 border border-slate-800 w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in slide-in-from-bottom duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80 transition-colors"
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

        {/* Product Image & Title */}
        <div className="flex flex-col sm:flex-row items-center gap-4 my-2 p-4 bg-slate-850 rounded-xl border border-slate-800">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-36 object-contain"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-extrabold text-white">{product.name}</h3>
            {product.filterType && (
              <span className="text-xs font-semibold text-sky-400 block mt-0.5">{product.filterType}</span>
            )}
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{product.description}</p>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="my-3">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Spesifikasi Utama</div>
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {tag}
              </span>
            ))}
          </div>
        </div>

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
          href={getProductWhatsAppUrl(product.name, product.code)}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Johan Untuk Tempah Model Ini
        </a>

      </div>
    </div>
  );
};
