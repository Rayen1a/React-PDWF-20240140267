// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Projects from './pages/Projects'; // Pastikan file ini sudah dibuat
import Contact from './pages/Contact';   // Pastikan file ini sudah dibuat

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  return (
    <Router>
      <Routes>
        {/* Jalur Login */}
        <Route path="/" element={!isLoggedIn ? <Login onLogin={() => setIsLoggedIn(true)} /> : <Navigate to="/dashboard" />} />

        {/* Jalur Utama Dashboard & Fitur Lainnya */}
        <Route path="/*" element={
          isLoggedIn ? (
            <div className="flex">
              <Sidebar onLogout={() => setIsLoggedIn(false)} />
              <main className="flex-1">
                <Routes>
                  {/* DAFTAR HALAMAN DI SINI */}
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
            </div>
          ) : (
            <Navigate to="/" />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;