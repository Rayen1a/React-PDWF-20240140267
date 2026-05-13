import React from 'react';
import { projectsData } from '../data/mockData';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    /* PERUBAHAN DI SINI: Ditambah md:ml-64 agar tidak tertutup Sidebar */
    <div className="md:ml-64 min-h-screen bg-slate-50 p-6 md:p-10 font-sans">
      
      {/* 1. Header & Motto */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-indigo-700 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-lg shadow-blue-200">
          <h2 className="text-blue-200 font-medium tracking-widest uppercase text-sm mb-3">Our Core Philosophy</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 italic">"Inovasi Tanpa Batas, Solusi Berkelas."</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Kami adalah perusahaan teknologi yang berdedikasi untuk menciptakan solusi digital yang efisien, aman, dan inovatif guna mendukung pertumbuhan bisnis Anda yang jauh lebih baik.
          </p>
        </div>
      </section>

      {/* 2. Visi & Misi */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span> Visi Kami
          </h3>
          <p className="text-slate-600 leading-relaxed">Menjadi mitra teknologi terpercaya yang dapat memimpin transformasi digital di kancah nasional maupun global untuk menciptakan masa depan yang lebih baik.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span> Misi Kami
          </h3>
          <ul className="space-y-3">
            {['Menyediakan infrastruktur digital yang solid.', 'Memberikan layanan konsultasi IT yang solutif.', 'Mengutamakan keamanan data pengguna.'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;