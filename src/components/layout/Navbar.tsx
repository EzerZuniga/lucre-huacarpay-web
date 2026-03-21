import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '@/config';

interface NavbarProps {
  isMobile?: boolean;
  onClose?: () => void;
  highContrast?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile = false, onClose, highContrast = false }) => {
  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav aria-label="Navegación principal">
      <ul
        className={`flex ${
          isMobile ? 'flex-col gap-3' : 'items-center gap-6'
        }`}
      >
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.path} className={isMobile ? 'w-full' : ''}>
            <NavLink
              to={item.path}
              onClick={handleClick}
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? `${
                        isMobile
                          ? 'block w-full rounded-2xl border border-wetland-foam/40 bg-wetland-foam/16 px-5 py-4 text-xl font-semibold text-wetland-foam shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm'
                          : 'border-b-2 border-wetland-sand pb-1 text-wetland-foam'
                      }`
                    : `${
                        isMobile
                          ? 'block w-full rounded-2xl border border-transparent px-5 py-4 text-xl text-wetland-foam/95 hover:border-wetland-foam/30 hover:bg-wetland-foam/10 hover:text-wetland-sand'
                          : 'text-wetland-foam/95 hover:text-wetland-sand'
                      }`
                } ${highContrast ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
