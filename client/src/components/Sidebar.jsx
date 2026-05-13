// src/components/Sidebar.jsx
import { Link } from 'react-router-dom'; // PENTING: Harus ada ini
import { LayoutDashboard, Briefcase, Phone, LogOut, Building2 } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { name: 'Beranda', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Proyek Kami', icon: <Briefcase size={20} />, path: '/projects' },
    { name: 'Kontak', icon: <Phone size={20} />, path: '/contact' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 z-50">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="bg-blue-600 p-2 rounded-lg"><Building2 size={24} className="text-white" /></div>
        <span className="text-xl font-bold text-white uppercase tracking-wider">Flazz.Corp</span>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-4">
        {menuItems.map((item, index) => (
          /* GANTI BUTTON JADI LINK */
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
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut size={20} /> <span className="font-medium">Logout Akun</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;