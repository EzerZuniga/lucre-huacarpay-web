import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 rounded-lg w-14 h-14 flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">LH</span>
              </div>
              <h2 className="text-2xl font-bold">Laguna Huacarpay</h2>
            </div>
            <p className="mb-6 text-slate-300 text-lg leading-relaxed">
              Humedal Ramsar de importancia internacional ubicado en Lucre, Valle Sur del Cusco. 
              Sitio de conservación de biodiversidad andina y destino de ecoturismo responsable.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                <FiTwitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Información</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-slate-300 hover:text-white transition-colors duration-300 block">Inicio</a></li>
              <li><a href="/biodiversidad" className="text-slate-300 hover:text-white transition-colors duration-300 block">Biodiversidad</a></li>
              <li><a href="/conservacion" className="text-slate-300 hover:text-white transition-colors duration-300 block">Conservación</a></li>
              <li><a href="/galeria" className="text-slate-300 hover:text-white transition-colors duration-300 block">Galería</a></li>
              <li><a href="/visitanos" className="text-slate-300 hover:text-white transition-colors duration-300 block">Visítanos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={18} />
                <span className="text-slate-300">info@lagunahuacarpay.org</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={18} />
                <span className="text-slate-300">+51 984 123 456</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={18} />
                <span className="text-slate-300">Lucre, Valle Sur del Cusco, Perú</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p className="text-lg">© {currentYear} Laguna de Huacarpay - Sitio Ramsar. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Proyecto de conservación y desarrollo sostenible</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;