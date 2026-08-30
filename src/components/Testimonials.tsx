import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Star, MessageCircle, MapPin, HeartHandshake } from 'lucide-react';

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
    product: 'Coway Storm II (Penapis Udara)',
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
    <section id="testimoni" className="py-16 sm:py-24 bg-[#0D1322] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pengalaman Sebenar Pelanggan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Apa Kata Keluarga Yang Telah Menggunakan Servis Johan?
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed">
            Maklum balas ikhlas daripada pelanggan yang telah dibantu dari urusan pemilihan pakej, pendaftaran pantas sehingga pemasangan kemas di rumah.
          </p>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="pro-card p-6 sm:p-7 rounded-3xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800">
                    {review.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-white">{review.name}</h4>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-sky-400 block">{review.product}</span>
                  <span className="text-[10px] text-slate-500">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Home Installation & Cody Service Showcase */}
        <div className="pro-card p-6 sm:p-8 rounded-3xl bg-[#111726] border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 shadow-md">
              <img 
                src="/images/cody-service-lifestyle.jpg" 
                alt="Khidmat Servis Cody Sanitasi Wap Coway" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-3.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 text-xs font-bold border border-sky-800">
                <span>Heart Service Percuma Sepanjang Kontrak</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Khidmat Cody & Juruteknik Terlatih Datang Terus Ke Rumah Anda
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Setiap 2 hingga 4 bulan sekali, juruteknik khas (Cody/CT) akan hadir ke kediaman anda untuk melakukan sanitasi wap panas, pemeriksaan kualiti air, dan penukaran penapis berjadual secara 100% percuma.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin tahu lebih lanjut mengenai proses pemasangan dan servis Cody di kawasan saya.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Tanya Pemasangan Di Kawasan Saya</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
