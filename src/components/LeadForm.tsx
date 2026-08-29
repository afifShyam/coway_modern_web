'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Lock, Clock, Star, Send, ShoppingBag, Facebook, Phone } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Coway Villaem III (Penapis Air)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hai ${siteConfig.agentName}, saya ${formData.name} (${formData.phone}). Saya berminat untuk mendapatkan maklumat & promosi bagi model: ${formData.product}. Boleh bantu saya?`;
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
                Perancang Kesihatan Sah (Health Planner)
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hai, Saya <span className="text-sky-400">{siteConfig.agentName}</span>
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400">
                <span>Kod HP: <strong className="text-white">{siteConfig.hpCode}</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-sky-400" /> <strong className="text-white">{siteConfig.displayPhone}</strong></span>
              </div>

              <blockquote className="text-slate-300 text-base leading-relaxed border-l-2 border-sky-500 pl-4 italic">
                "Sebagai wakil jualan bertauliah dan berpengalaman, saya komited untuk membantu anda sekeluarga memiliki perkakas Coway idaman dengan pantas, mudah serta menikmati penjimatan promosi rasmi."
              </blockquote>

              {/* Direct Links to Facebook & Official E-Mall */}
              <div className="flex items-center gap-3 pt-1 flex-wrap">
                <a 
                  href={siteConfig.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Facebook: {siteConfig.facebookName}</span>
                </a>

                <a 
                  href={siteConfig.emallUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>Coway E-Mall (Kod: {siteConfig.hpCode})</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <Lock className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">Privasi Terjamin</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <Clock className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">Respons Pantas</div>
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
                <p className="text-xs text-slate-400 mb-5">Sila lengkapkan maklumat ringkas di bawah untuk berhubung terus melalui WhatsApp.</p>

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
                      placeholder="Contoh: 01110580077" 
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
                      <option value="Coway Villaem III (Penapis Air)">Coway Villaem III (Penapis Air)</option>
                      <option value="Coway AIS (Penapis Air & Ais)">Coway AIS (Penapis Air & Ais)</option>
                      <option value="Coway Neon (Penapis Air Ultra-Nipis)">Coway Neon (Penapis Air Ultra-Nipis)</option>
                      <option value="Coway Neo Plus (Penapis Air Mesra Bajet)">Coway Neo Plus (Penapis Air Mesra Bajet)</option>
                      <option value="Coway Storm II (Penulen Udara)">Coway Storm II (Penulen Udara)</option>
                      <option value="Coway Lombok 3 (Penulen Udara)">Coway Lombok 3 (Penulen Udara)</option>
                      <option value="Kerusi Urut BEREX Pebble">Kerusi Urut BEREX Pebble</option>
                      <option value="Kerusi Urut BEREX Mine">Kerusi Urut BEREX Mine</option>
                      <option value="Katil Urut Haba BEREX">Katil Urut Haba BEREX</option>
                      <option value="Tilam Hotel BEREX Prime Lite">Tilam Hotel BEREX Prime Lite</option>
                      <option value="Penyaman Udara Inverter Coway">Penyaman Udara Inverter Coway</option>
                      <option value="Peti Sejuk Bersebelahan 715L">Peti Sejuk Bersebelahan 715L</option>
                      <option value="Pakej Kombo Suai Padan (Mix & Match)">Pakej Kombo Suai Padan (Mix & Match)</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Hantar Pertanyaan Melalui WhatsApp
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
