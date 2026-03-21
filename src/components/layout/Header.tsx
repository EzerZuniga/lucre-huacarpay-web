import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { ROUTES } from '@/config';
import Navbar from './Navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const location = useLocation();
  const isHeroRoute = location.pathname === ROUTES.HOME || location.pathname === ROUTES.BIODIVERSITY;

  useEffect(() => {
    if (!isHeroRoute) {
      setIsHeaderVisible(true);
      return;
    }

    const onScroll = () => {
      setIsHeaderVisible(window.scrollY > 64);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHeroRoute]);

  const headerClassName = isHeroRoute
    ? `fixed inset-x-0 top-0 z-50 text-wetland-foam transition-all duration-300 ${
        isHeaderVisible
          ? 'translate-y-0 opacity-100 border-b border-wetland-moss/30 bg-wetland-ink shadow-lg shadow-black/35'
          : 'translate-y-0 opacity-100 bg-transparent border-b border-transparent'
      }`
    : 'sticky top-0 z-50 border-b border-wetland-moss/30 bg-wetland-ink text-wetland-foam shadow-lg';

  return (
    <header className={headerClassName}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className={`flex items-center space-x-3 rounded-xl transition-colors ${
              isHeroRoute ? 'px-1 py-1' : ''
            }`}
          >
            <div className={`rounded-lg w-12 h-12 flex items-center justify-center shadow-md ${
              isHeroRoute
                ? 'bg-wetland-lagoon/85 border border-wetland-foam/30'
                : 'bg-wetland-lagoon'
            }`}>
              <span className="text-wetland-foam font-bold text-lg">LH</span>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold tracking-tight text-wetland-foam ${isHeroRoute ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]' : ''}`}>Laguna Huacarpay</h1>
              <p className={`text-sm ${isHeroRoute ? 'text-wetland-foam/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]' : 'text-wetland-sand'}`}>Sitio Ramsar - Lucre</p>
            </div>
          </Link>
          
          <div className="hidden lg:block">
            <Navbar highContrast={isHeroRoute} />
          </div>
          
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors text-wetland-foam ${
              isHeroRoute
                ? 'bg-wetland-foam/15 hover:bg-wetland-foam/25 border border-wetland-foam/30'
                : 'hover:bg-wetland-moss-dark'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú principal"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className={`lg:hidden pt-4 pb-4 border-t ${isHeroRoute ? 'border-wetland-foam/30 bg-wetland-ink/35 backdrop-blur-lg' : 'border-wetland-moss/40'}`}>
            <Navbar isMobile={true} highContrast={isHeroRoute} onClose={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
