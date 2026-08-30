'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { 
  BadgeCheck, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Phone,
  Facebook,
  Award,
  Users
} from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Villaem III (Penapis Air 4 Suhu)',
    location: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hai ${siteConfig.agentName}, saya berminat untuk pendaftaran Coway.\n\n` +
      `Nama: ${formData.name || 'Pelanggan'}\n` +
      `No Telefon: ${formData.phone || '-'}\n` +
      `Pilihan Model: ${formData.product}\n` +
      `Lokasi (Negeri): ${formData.location || '-'}\n` +
      `Catatan: ${formData.notes || '-'}`;

    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank');
  };

  return (
    <section id="johan" className="py-8 sm:py-16 bg-gradient-to-b from-[#090D16] via-[#0D1322] to-[#060911] text-white border-t border-slate-850">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 border border-sky-800">
            <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Health Planner Bertauliah</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Konsultasi Terus Bersama Johan Adam
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
            Dapatkan nasihat telus dan semakan promosi khas terus ke WhatsApp anda.
          </p>
        </div>

        {/* 2-Column Split: Johan Profile + WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Johan Adam HD Portrait & Official Credibility Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="pro-card p-5 rounded-3xl bg-[#111726] border border-slate-800 shadow-2xl text-center space-y-4 max-w-sm w-full">
              
              {/* HD Agent Portrait */}
              <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-sky-400/80 shadow-xl bg-slate-900">
                <img 
                  src="/images/johan-adam.webp" 
                  alt={siteConfig.agentName} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-1.5 inset-x-1.5 py-1 px-2 rounded-lg bg-[#060911]/90 backdrop-blur-md border border-slate-750 text-[10px] font-extrabold text-white flex items-center justify-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Kod HP: {siteConfig.hpCode}</span>
                </div>
              </div>

              {/* Agent Title Details */}
              <div className="space-y-0.5">
                <h3 className="text-xl font-black text-white">{siteConfig.agentName}</h3>
                <div className="text-xs font-bold text-sky-400">{siteConfig.designation}</div>
                <div className="text-[11px] text-slate-400">Pengalaman 5+ Tahun • 1,200+ Pelanggan Seluruh Malaysia</div>
              </div>

              {/* Direct Quick Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Telefon: {siteConfig.displayPhone}</span>
                </a>

                <a 
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span>Facebook: {siteConfig.facebookName}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Consultation Generator */}
          <div className="lg:col-span-7">
            <div className="pro-card p-5 sm:p-7 rounded-3xl bg-[#111726] border border-slate-800 shadow-2xl space-y-4">
              
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-black text-white">Borang Permohonan & Pertanyaan</h3>
                <p className="text-xs text-slate-300">
                  Isi butiran ringkas di bawah untuk dijana ke WhatsApp Johan secara automatik:
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Nama Penuh</label>
                    <input 
                      type="text" 
                      placeholder="Cth: Ahmad Razak"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">No. WhatsApp / Telefon</label>
                    <input 
                      type="tel" 
                      placeholder="Cth: 012-3456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Pilihan Produk / Model</label>
                    <select 
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="Villaem III (Penapis Air 4 Suhu)">Villaem III (RM74/bln - Paling Popular)</option>
                      <option value="Neo Plus (Penapis Air 3 Suhu)">Neo Plus (RM59/bln - Paling Jimat)</option>
                      <option value="Coway AIS (Penapis Air + Pembuat Ais)">Coway AIS (RM120/bln - Pembuat Ais)</option>
                      <option value="Storm II (Penapis Udara HEPA)">Storm II (RM60/bln - Penapis Udara)</option>
                      <option value="Lombok III (Penapis Udara Antivirus)">Lombok III (RM90/bln - Penapis Udara)</option>
                      <option value="Tilam Prime II Series">Tilam Prime II (RM100/bln)</option>
                      <option value="Tilam Prime Lite Series">Tilam Prime Lite (RM79/bln)</option>
                      <option value="Kerusi Urut BEREX Senno">Kerusi Urut SENNO (RM165/bln)</option>
                      <option value="Kerusi Urut BEREX Senno Plus">Kerusi Urut SENNO Plus (RM185/bln)</option>
                      <option value="Peti Sejuk 2-Pintu 715L">Peti Sejuk 2-Pintu (RM84/bln)</option>
                      <option value="Peti Sejuk 4-Pintu 551L">Peti Sejuk 4-Pintu (RM99/bln)</option>
                      <option value="Penyaman Udara Inverter (F-Series / P-Series)">Penyaman Udara (Dari RM100/bln)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Lokasi Pemasangan (Negeri)</label>
                    <input 
                      type="text" 
                      placeholder="Cth: Selangor, KL, Johor..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Soalan Tambahan / Catatan</label>
                  <textarea 
                    rows={2}
                    placeholder="Tulis sebarang pertanyaan berkenaan dokumen, tempoh pemasangan atau promosi..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <p className="text-[10px] text-slate-500 leading-relaxed">
                  Butiran yang anda isi di atas hanya digunakan untuk membuka perbualan WhatsApp terus dengan Health Planner dan tidak disimpan di dalam pangkalan data laman web ini. Maklumat peribadi anda dikendalikan mengikut Akta Perlindungan Data Peribadi 2010 (PDPA).
                </p>

                <button 
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Hantar Terus ke WhatsApp Johan</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
