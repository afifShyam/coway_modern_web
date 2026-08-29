'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Lock, Clock, Star, Send } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Coway Villaem 3 (Penapis Air)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hai ${siteConfig.agentName}, saya ${formData.name} (${formData.phone}). Saya berminat untuk dapatkan info & promosi bagi model: ${formData.product}. Boleh bantu saya?`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="pro-card p-8 sm:p-12 lg:p-14 bg-slate-850 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Agent Profile */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-bold border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Health Planner Bertauliah
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hai, Saya <span className="text-sky-400">{siteConfig.agentName}</span>
              </h2>

              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Coway Health Planner • HP Code: <span className="text-slate-200">{siteConfig.hpCode}</span>
              </p>

              <blockquote className="text-slate-300 text-base leading-relaxed border-l-2 border-sky-500 pl-4 italic">
                "Sebagai ejen jualan berpengalaman dan terlatih, saya komited membantu anda dan keluarga memiliki barangan Coway idaman dengan pantas, mudah, dan penjimatan maksimum."
              </blockquote>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <Lock className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">Privasi Terjamin</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <Clock className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">Respon Pantas</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <Star className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">Servis 5 Bintang</div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-6">
              <div className="pro-card p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-white mb-1">Borang Pertanyaan Pantas</h3>
                <p className="text-xs text-slate-400 mb-5">Isi borang ringkas di bawah untuk berhubung terus via WhatsApp.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Nama Penuh *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Ahmad Daniel" 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-850 border border-slate-700 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Nombor Telefon (WhatsApp) *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 0123456789" 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-850 border border-slate-700 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Produk Pilihan *</label>
                    <select 
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-850 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500 transition-all"
                    >
                      <option value="Coway Villaem 3 (Penapis Air)">Coway Villaem 3 (Penapis Air)</option>
                      <option value="Coway AIS (Penapis Air & Ais)">Coway AIS (Penapis Air & Ais)</option>
                      <option value="Coway Neo Plus (Penapis Air Bajet)">Coway Neo Plus (Penapis Air Bajet)</option>
                      <option value="Coway Storm 2 (Penapis Udara)">Coway Storm 2 (Penapis Udara)</option>
                      <option value="Coway Lombok 3 (Penapis Udara)">Coway Lombok 3 (Penapis Udara)</option>
                      <option value="Coway Smart Aircond">Coway Smart Aircond</option>
                      <option value="Coway Prime Lite Mattress">Coway Prime Lite Mattress</option>
                      <option value="Coway Side-By-Side Refrigerator 715L">Coway Side-By-Side Refrigerator 715L</option>
                      <option value="Pakej Mix & Match Combo">Pakej Mix & Match Combo</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Hantar Pertanyaan via WhatsApp
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
