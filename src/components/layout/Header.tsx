import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Navbar from './Navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 rounded-lg w-12 h-12 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">LH</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight">Laguna Huacarpay</h1>
              <p className="text-sm text-blue-300">Sitio Ramsar - Lucre</p>
            </div>
          </Link>
          
          <div className="hidden lg:block">
            <Navbar onClose={() => {}} />
          </div>
          
          <button 
            className="lg:hidden text-white p-2 hover:bg-slate-700 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú principal"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 pt-4 pb-4">
            <Navbar isMobile={true} onClose={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;