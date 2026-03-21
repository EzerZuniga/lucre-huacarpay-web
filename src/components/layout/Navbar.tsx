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
    <nav>
      <ul
        className={`flex ${
          isMobile ? 'flex-col space-y-2' : 'items-center gap-6'
        }`}
      >
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={handleClick}
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? `${
                        isMobile
                          ? 'block rounded-lg border border-wetland-foam/30 bg-wetland-foam/18 px-4 py-2 text-lg text-wetland-foam'
                          : 'border-b-2 border-wetland-sand pb-1 text-wetland-foam'
                      }`
                    : `${
                        isMobile
                          ? 'block rounded-lg px-4 py-2 text-lg text-wetland-foam/95 hover:bg-wetland-foam/10 hover:text-wetland-sand'
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
