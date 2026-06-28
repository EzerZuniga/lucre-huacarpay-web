import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
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

  const headerClassName = isHeroRoute
    ? `fixed inset-x-0 top-0 z-50 text-wetland-foam transition-all duration-300 ${
        isHeaderVisible || isMenuOpen
          ? 'translate-y-0 opacity-100 border-b border-wetland-moss/30 bg-wetland-ink shadow-lg shadow-black/35'
          : 'translate-y-0 opacity-100 bg-transparent border-b border-transparent'
      }`
    : 'sticky top-0 z-50 border-b border-wetland-moss/30 bg-wetland-ink text-wetland-foam shadow-lg';

  return (
    <>
      <header className={headerClassName}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            <Link
              to="/"
              className={`flex items-center space-x-3 rounded-xl transition-colors ${
                isHeroRoute ? 'px-1 py-1' : ''
              }`}
            >
              <div className={`rounded-lg w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center shadow-md ${
                isHeroRoute
                  ? 'bg-wetland-lagoon/85 border border-wetland-foam/30'
                  : 'bg-wetland-lagoon'
              }`}>
                <span className="text-wetland-foam font-bold text-lg">LH</span>
              </div>
              <div className="flex flex-col">
                <h1 className={`text-lg lg:text-xl font-bold tracking-tight text-wetland-foam ${isHeroRoute ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]' : ''}`}>Laguna Huacarpay</h1>
                <p className={`text-xs lg:text-sm ${isHeroRoute ? 'text-wetland-foam/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]' : 'text-wetland-sand'}`}>Sitio Ramsar - Lucre</p>
              </div>
            </Link>

            <div className="hidden lg:block">
              <Navbar highContrast={isHeroRoute} />
            </div>

            <button
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden text-wetland-foam ${
                isHeroRoute
                  ? 'bg-wetland-foam/15 hover:bg-wetland-foam/25 border border-wetland-foam/30'
                  : 'hover:bg-wetland-moss-dark'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-main-menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" id="mobile-main-menu">
          <button
            className="absolute inset-0 bg-wetland-ink/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          />

          <div className="relative z-10 flex h-[100dvh] w-full flex-col bg-gradient-to-b from-wetland-lagoon-dark via-wetland-ink to-wetland-moss-dark text-wetland-foam">
            <div className="flex items-center justify-between border-b border-wetland-foam/25 px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-wetland-foam/35 bg-wetland-lagoon/80 shadow-md">
                  <span className="text-base font-bold">LH</span>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold leading-tight">Laguna Huacarpay</p>
                  <p className="text-xs text-wetland-foam/80">Sitio Ramsar - Lucre</p>
                </div>
              </div>

              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-wetland-foam/30 bg-wetland-foam/10"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú principal"
              >
                <FiX size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6">
              <Navbar isMobile={true} highContrast={true} onClose={() => setIsMenuOpen(false)} />
            </div>

            <div className="border-t border-wetland-foam/20 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
              <Link
                to={ROUTES.VISIT_US}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-2xl bg-wetland-cta px-5 py-4 text-center text-lg font-semibold text-wetland-ink transition-colors hover:bg-wetland-cta-dark"
              >
                Descubrir la Laguna
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
