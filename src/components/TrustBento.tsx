'use client';

import React from 'react';
import { Crown, Award, HeartHandshake, ShieldCheck, Zap, FileCheck } from 'lucide-react';

export const TrustBento: React.FC = () => {
  return (
    <section id="kenapa" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">Piawaian & Pensijilan Rasmi</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Komitmen Kualiti & Perkhidmatan Coway
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Coway menyediakan solusi perkakas kediaman menyeluruh dengan sokongan perkhidmatan servis berjadual dan jaminan rasmi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-sky-400 border border-slate-800">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Dipercayai Jutaan Pengguna</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Berpengalaman melayani jutaan isi rumah dan premis perniagaan di seluruh Malaysia sejak tahun 2006 dengan rangkaian sokongan pelanggan yang luas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-sky-400 font-bold">
              Sejak Tahun 2006 di Malaysia
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
                Sistem penapisan dan pemprosesan air Coway mematuhi piawaian pensijilan Halal rasmi oleh Jabatan Kemajuan Islam Malaysia (JAKIM).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-bold">
              Diiktiraf Halal oleh JAKIM
            </div>
          </div>

          {/* Card 3 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-sky-400 border border-slate-800">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Coway Heart Service</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Perkhidmatan servis sanitasi berkala dan penukaran kartrij penapis asli berjadual oleh pasukan Coway Lady (Cody) dan Service Technician (ST) bertauliah.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-sky-400 font-bold">
              Servis & Penapis Berjadual
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
                Sistem penapisan air Coway diuji dan diperakui di bawah standard piawaian ketat Persatuan Kualiti Air Antarabangsa (Water Quality Association).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-400 font-bold">
              Standard Piawaian Antarabangsa
            </div>
          </div>

          {/* Card 5 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-sky-400 border border-slate-800">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Kecekapan Tenaga & Teknologi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Direka dengan teknologi motor penyongsang (inverter) dan mod penjimatan pintar bagi memastikan penggunaan tenaga yang optimum.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-sky-400 font-bold">
              Penggunaan Kuasa Optimum
            </div>
          </div>

          {/* Card 6 */}
          <div className="pro-card p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-indigo-400 border border-slate-800">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Pendaftaran Telus & Mudah</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Proses pendaftaran sewa beli rasmi Coway yang pantas dan telus melalui pengesahan dokumen pengenalan diri yang sah.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-indigo-400 font-bold">
              Pelan Sewa Beli Terus
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
