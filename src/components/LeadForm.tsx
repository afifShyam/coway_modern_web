'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Lock, Clock, Star, Send, ShoppingBag, Facebook, Phone, BadgeCheck, ShieldCheck } from 'lucide-react';

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
        
        <div className="pro-card p-6 sm:p-10 lg:p-12 bg-slate-850 border border-slate-800 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Johan Adam High-Definition Photo Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-sky-500/30 shadow-2xl max-w-sm w-full group">
                <img 
                  src={siteConfig.agentImage} 
                  alt={`${siteConfig.agentName} - Perancang Kesihatan Sah Coway`} 
                  className="w-full h-80 sm:h-96 object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 text-center">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-950/90 text-sky-400 border border-sky-800 text-[10px] font-extrabold uppercase mb-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
                    Authorized Health Planner
                  </div>
                  <h4 className="text-lg font-extrabold text-white">{siteConfig.agentName}</h4>
                  <p className="text-xs text-slate-300 font-mono">Kod Ejen Rasmi: <strong className="text-sky-400">{siteConfig.hpCode}</strong></p>
                </div>
              </div>
            </div>

            {/* Middle Column: Agent Bio & Direct Social Portals */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-bold border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Perancang Kesihatan Sah Coway Malaysia
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Perkhidmatan Peribadi Bersama <span className="text-sky-400">{siteConfig.agentName}</span>
              </h2>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-sky-400" /> Kod HP: <strong className="text-white">{siteConfig.hpCode}</strong>
                </span>
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 px-3 py-1 rounded-lg border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" /> <strong className="text-white">{siteConfig.displayPhone}</strong>
                </a>
              </div>

              <blockquote className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-sky-500 pl-3.5 italic">
                "Sebagai wakil jualan bertauliah Coway Malaysia, saya komited untuk membantu anda sekeluarga memilih penapis air, penulen udara atau perkakas rumah yang tepat dengan penjimatan promosi rasmi terbaik."
              </blockquote>

              {/* Official Portals */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <a 
                  href={siteConfig.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 px-3.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>FB: {siteConfig.facebookName}</span>
                </a>

                <a 
                  href={siteConfig.emallUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>Coway E-Mall</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <Lock className="w-4 h-4 text-sky-400 mx-auto mb-0.5" />
                  <div className="text-[10px] font-bold text-white">Privasi Dijamin</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <Clock className="w-4 h-4 text-sky-400 mx-auto mb-0.5" />
                  <div className="text-[10px] font-bold text-white">Respons Pantas</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <Star className="w-4 h-4 text-sky-400 mx-auto mb-0.5" />
                  <div className="text-[10px] font-bold text-white">Servis 5 Bintang</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick Inquiry Form */}
            <div className="lg:col-span-4">
              <div className="pro-card p-5 sm:p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-sm">
                <h3 className="text-base font-bold text-white mb-0.5">Borang Pertanyaan Pantas</h3>
                <p className="text-[11px] text-slate-400 mb-4">Lengkapkan maklumat ringkas di bawah untuk berhubung terus melalui WhatsApp.</p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Nama Penuh *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Daniel Firdaus" 
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-850 border border-slate-700 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Nombor Telefon (WhatsApp) *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 01110580077" 
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-850 border border-slate-700 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Produk Pilihan *</label>
                    <select 
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-850 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500 transition-all"
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
                    className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow-sm mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Hantar Melalui WhatsApp
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
