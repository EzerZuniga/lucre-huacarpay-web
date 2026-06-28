import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Navbar from './Navbar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 h-[70px] pointer-events-none lg:pointer-events-auto bg-transparent lg:bg-[#1A1A1A] lg:border-b lg:border-black/30 lg:shadow-2xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-end lg:justify-between items-center h-full relative">
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center w-full h-full">
              <Navbar isScrolled={isScrolled} />
            </div>

            {/* Mobile Menu Button - Floating style */}
            <button
              className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center text-white bg-black/75 backdrop-blur-md rounded-full hover:scale-105 lg:hidden z-50 transition-all shadow-xl border border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-main-menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen Center */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden" id="mobile-main-menu">
          <div className="absolute inset-0 bg-[#161616] flex flex-col">
            {/* Close Button Top Right */}
            <div className="h-[70px] px-4 flex items-center justify-end">
              <button
                className="inline-flex h-12 w-12 items-center justify-center text-[#8a8a8a] bg-[#222] rounded-full hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <FiX size={24} />
              </button>
            </div>
            
            {/* Centered Navigation */}
            <div className="flex-1 flex items-center justify-center pb-[70px]">
              <Navbar isMobile onClose={() => setIsMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
