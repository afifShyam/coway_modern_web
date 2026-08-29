'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Star, MessageCircle, CheckCircle2, ShieldCheck, MapPin, HeartHandshake } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Puan Nurul Huda',
    location: 'Skudai, Johor',
    product: 'Coway Villaem III (CHP-7320L)',
    rating: 5,
    date: 'Ogos 2026',
    comment: 'Sangat puas hati berurusan dengan Johan. Proses pendaftaran sangat laju, dalam masa 3 hari technician Coway dah sampai pasang di dapur. Paling seronok bila anak bangun tengah malam nak susu, tekan je air suam dah siap. Tak payah jerang air lagi!',
    tag: 'Pemasangan Rumah Teres'
  },
  {
    name: 'En. Khairul Azmi & Keluarga',
    location: 'Shah Alam, Selangor',
    product: 'Coway AIS (Pembuat Ais)',
    rating: 5,
    date: 'Julai 2026',
    comment: 'Sebelum ni selalu beli ais bungkus kat stesen minyak bila ada kenduri atau tetamu datang. Sekarang senang sangat tekan Coway AIS kat rumah. Johan terangkan pakej dengan sangat telus dan jujur tentang bayaran bulanan.',
    tag: 'Peminat Minuman Sejuk'
  },
  {
    name: 'Cikgu Azman',
    location: 'Kuantan, Pahang',
    product: 'Coway Storm II (Penulen Udara)',
    rating: 5,
    date: 'Ogos 2026',
    comment: 'Anak sulung saya ada masalah resdung dan selalu batuk bila tidur malam sebab habuk. Lepas Johan rekomen Storm 2 ni pasang dalam bilik tidur, tidur anak sangat lena tanpa bersin lagi. Udara bilik rasa bersih & segar.',
    tag: 'Masalah Resdung & Habuk'
  },
  {
    name: 'Puan Sarah & Suami',
    location: 'Bangi, Selangor',
    product: 'Coway Neo Plus (CHP-264L)',
    rating: 5,
    date: 'Jun 2026',
    comment: 'Kami baru pindah rumah sewa dan bajet agak terhad. Johan bantu kami dapatkan model Neo Plus pada kadar sewa yang sangat jimat tanpa sebarang caj pendaftaran. Cody yang datang servis pun sangat sopan dan kemas.',
    tag: 'Mesra Bajet Rumah Sewa'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-22 bg-slate-950 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold uppercase mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Pengalaman Sebenar Pelanggan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Apa Kata Keluarga Yang Telah Menggunakan Servis Johan?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Kepercayaan pelanggan adalah keutamaan saya. Berikut adalah sebahagian maklum balas ikhlas daripada pelanggan di seluruh Malaysia:
          </p>
        </div>

        {/* Feature Story Banner: Cody Service In Real Home */}
        <div className="pro-card p-4 sm:p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video relative group">
            <img 
              src="/images/cody-service-lifestyle.jpg" 
              alt="Servis Cody Coway di Rumah Pelanggan" 
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 text-xs text-slate-200">
              <span className="font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Khidmat Cody Berjadual Di Rumah Pelanggan
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-400 border border-sky-800 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Jaminan Servis Sepanjang Kontrak</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              Bukan Sekadar Beli Mesin — Kami Jaga Kebersihan Air Anda Secara Berterusan.
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Setiap 2 hingga 4 bulan sekali, juruteknik terlatih Coway (Cody) akan hadir ke rumah anda untuk melakukan sanitasi menyeluruh, penukaran penapis berjadual dan pemeriksaan fungsi secara percuma.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin tahu mengenai pakej servis berkala Cody untuk rumah saya.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Johan Untuk Info Servis</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx}
              className="pro-card p-5 sm:p-6 bg-slate-900/90 border border-slate-800 hover:border-slate-750 rounded-2xl flex flex-col justify-between shadow-lg space-y-4"
            >
              <div className="space-y-3">
                {/* Header & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{item.date}</span>
                </div>

                {/* Comment */}
                <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </blockquote>
              </div>

              {/* Author & Product Tag */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
                <div>
                  <div className="font-extrabold text-white">{item.name}</div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-sky-400 border border-slate-700 block">
                    {item.product}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
