import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile = false, onClose }) => {
  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/biodiversidad", label: "Biodiversidad" },
    { path: "/conservacion", label: "Conservación" },
    { path: "/galeria", label: "Galería" },
    { path: "/visitanos", label: "Visítanos" },
    { path: "/contacto", label: "Contacto" },
  ];

  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav>
      <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-8'}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={handleClick}
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 hover:text-blue-400 ${
                  isActive 
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1' 
                    : 'text-slate-300'
                } ${isMobile ? 'block py-2 text-lg' : ''}`
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