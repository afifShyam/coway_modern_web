'use client';

import React from 'react';
import { Product } from '@/types/product';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const savings = parseInt(product.regularMonthly.replace(/[^0-9]/g, '')) - parseInt(product.promoMonthly);

  return (
    <div className="pro-card p-5 flex flex-col justify-between relative bg-slate-850 border border-slate-800">
      <div>
        {/* Top Badge & Code */}
        <div className="flex items-center justify-between mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-sky-400 border border-slate-750">
            {product.badge}
          </span>
          <span className="text-[10px] font-mono text-slate-400 font-bold">{product.code}</span>
        </div>
        
        {/* Product Image Container */}
        <div className="h-44 flex items-center justify-center my-3 p-2 bg-slate-900/60 rounded-xl border border-slate-800">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-36 max-w-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Product Title & Description */}
        <h3 className="text-base font-bold text-white mt-2">{product.name}</h3>
        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{product.description}</p>

        {/* Feature Tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ================= CRYSTAL CLEAR PRICING BOX ================= */}
      <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
        
        {/* Promo Highlight Box */}
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-750 flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase font-bold text-sky-400 tracking-wide block">
              PROMOSI BULAN 1 - {product.promoMonths}
            </span>
            <div className="text-xl font-black text-sky-400 leading-tight">
              RM{product.promoMonthly}<span className="text-xs font-normal text-slate-400">/bulan</span>
            </div>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800 font-bold text-[9px] uppercase">
              Jimat RM{savings}/bln
            </span>
          </div>
        </div>

        {/* Clear Regular & Outright Grid */}
        <div className="grid grid-cols-2 gap-1.5 text-center text-xs">
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[9px] text-slate-400 font-semibold uppercase">Sewa Biasa</div>
            <div className="font-bold text-white text-xs mt-0.5">{product.regularMonthly}</div>
            <div className="text-[9px] text-slate-500">bulan seterusnya</div>
          </div>
          
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[9px] text-slate-400 font-semibold uppercase">Beli Tunai</div>
            <div className="font-bold text-sky-300 text-xs mt-0.5">
              {product.outrightPrice !== 'NA' ? product.outrightPrice : 'Pelan Sewa'}
            </div>
            <div className="text-[9px] text-slate-500">outright</div>
          </div>
        </div>

        {/* Zero Fees Assurance */}
        <div className="flex items-center justify-between text-[9px] text-emerald-400 font-semibold px-0.5 pt-0.5">
          <span>✓ Daftar RM0</span>
          <span>✓ Pasang Percuma</span>
          <span>✓ Servis Cody RM0</span>
        </div>

        {/* WhatsApp Action */}
        <a 
          href={getProductWhatsAppUrl(product.name, product.code)}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp Johan Untuk Tempahan
        </a>

      </div>

    </div>
  );
};
