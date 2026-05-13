import React, { useState } from 'react'; // Tambahkan useState
import { Link } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Phone, LogOut, Building2, AlertCircle } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  // State untuk mengontrol pop-up (Modal)
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { name: 'Beranda', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Proyek Kami', icon: <Briefcase size={20} />, path: '/projects' },
    { name: 'Kontak', icon: <Phone size={20} />, path: '/contact' },
  ];

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 z-40">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-blue-600 p-2 rounded-lg"><Building2 size={24} className="text-white" /></div>
          <span className="text-xl font-bold text-white uppercase tracking-wider">NamaCorp</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-200"
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          {/* Saat diklik, jangan langsung logout, tapi munculkan modal */}
          <button 
            onClick={() => setShowModal(true)} 
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
          >
            <LogOut size={20} /> <span className="font-medium">Keluar Akun</span>
          </button>
        </div>
      </aside>

      {/* --- MODAL POP-UP LOGOUT --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transform transition-all animate-in zoom-in duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Konfirmasi Keluar</h3>
              <p className="text-slate-500 mb-8">Apakah Anda yakin ingin keluar dari akun ini?</p>
              
              <div className="flex gap-3 w-full">
                {/* Tombol TIDAK */}
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  Tidak
                </button>
                {/* Tombol YA */}
                <button 
                  onClick={onLogout}
                  className="flex-1 px-4 py-3 rounded-xl bg-red-600 font-semibold text-white hover:bg-red-700 transition shadow-lg shadow-red-200"
                >
                  Ya, Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;