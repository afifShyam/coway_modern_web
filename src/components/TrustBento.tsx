'use client';

import React from 'react';
import { Crown, Award, HeartHandshake, ShieldCheck, Zap, Percent } from 'lucide-react';

export const TrustBento: React.FC = () => {
  return (
    <section id="kenapa" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">Kualiti & Kepercayaan</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kenapa Jutaan Rakyat Malaysia Memilih Coway?
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Lebih daripada sekadar perkakas rumah — Coway menawarkan perkhidmatan penjagaan kesihatan berjadual tanpa kos tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-sky-400 border border-slate-800">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Jenama No. 1 di Malaysia</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Menerajui pasaran Malaysia dengan lebih <strong>2 Juta akaun pelanggan aktif</strong> dan menguasai <strong>41% pegangan pasaran penulen udara</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-sky-400 font-bold">
              2M+ Pelanggan Setia
            </div>
          </div>

          {/* Card 2 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-emerald-400 border border-slate-800">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Pensijilan Halal JAKIM</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Diiktiraf Halal sepenuhnya dari segi komponen, penapis, dan pemprosesan. Selamat & suci untuk seisi keluarga Muslim.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-bold">
              100% Halal Certified
            </div>
          </div>

          {/* Card 3 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-sky-400 border border-slate-800">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Servis Berkala 'Heart' Cody</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cody bertauliah akan hadir setiap 2-4 bulan untuk pensterilan wap suhu tinggi dan penukaran katrij filter original secara percuma.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-sky-400 font-bold">
              Servis & Filter Percuma
            </div>
          </div>

          {/* Card 4 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-amber-400 border border-slate-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Pensijilan WQA Gold Seal</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sistem penapisan air Coway diiktiraf oleh Persatuan Kualiti Air Antarabangsa (WQA) mengikut piawaian ketat global.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-400 font-bold">
              Standard Antarabangsa
            </div>
          </div>

          {/* Card 5 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-sky-400 border border-slate-800">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Cekap Tenaga & Mesra Alam</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dilengkapi sensor cahaya pintar dan motor inverter jimat elektrik untuk mengurangkan kos bil utiliti bulanan rumah anda.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-sky-400 font-bold">
              Jimat Elektrik Bulanan
            </div>
          </div>

          {/* Card 6 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-indigo-400 border border-slate-800">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Kelulusan Mudah Tanpa Payslip</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Hanya MyKad & kad bank sahaja. Suri rumah, peniaga kecil, dan pekerja bebas layak memohon tanpa sebarang penjamin.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-indigo-400 font-bold">
              Tanpa Penjamin
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
