import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi: Apakah email berakhiran .com?
    if (!email.endsWith('.com')) {
      setError('Email harus berakhiran dengan .com');
      return;
    }

    // Jika valid, hapus error dan jalankan fungsi login
    setError('');
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Selamat Datang</h2>
        <p className="text-slate-500 text-center mb-8 text-sm">Silakan login menggunakan akun Anda untuk mengakses dashboard perusahaan kami!</p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border rounded-lg outline-none transition ${
                error ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:ring-2 focus:ring-blue-500'
              }`} 
              placeholder="admin@perusahaan.com" 
            />
            {/* Pesan Error */}
            {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              required 
              className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" 
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform active:scale-95 shadow-lg shadow-blue-200 mt-2"
          >
            Masuk Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;