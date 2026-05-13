import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="md:ml-64 min-h-screen bg-slate-50 p-6 md:p-10 flex items-center justify-center">
      <section className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl max-w-4xl w-full">
        <h3 className="text-3xl font-bold mb-10 text-slate-800 text-center">Hubungi Kami</h3>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Phone size={30} />
            </div>
            <h5 className="font-bold text-lg">Telepon</h5>
            <p className="text-slate-500 mt-2">+62 812-3456-7890</p>
          </div>
          
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Mail size={30} />
            </div>
            <h5 className="font-bold text-lg">Email</h5>
            <p className="text-slate-500 mt-2">info@Flazzcorp.com</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <MapPin size={30} />
            </div>
            <h5 className="font-bold text-lg">Kantor</h5>
            <p className="text-slate-500 mt-2">Yogyakarta, Indonesia</p>
          </div>
        </div>

        {/* Tambahan Button Chat Langsung */}
        <div className="mt-16 text-center">
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg shadow-green-200 flex items-center gap-2 mx-auto">
            Hubungi via WhatsApp, coming soon!
          </button>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center gap-2 mx-auto mt-4">
            Hubungi via Live Chat, coming soon!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;