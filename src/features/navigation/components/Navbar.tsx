import { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAVIGATION_ITEMS, type NavigationItem } from '@/shared/constants';

interface NavbarProps {
  isMobile?: boolean;
  onClose?: () => void;
  isScrolled?: boolean;
}

function NavbarComponent({ isMobile = false, onClose, isScrolled = false }: NavbarProps) {
  const handleClick = () => {
    onClose?.();
  };

  const NavItem = ({ item }: { item: NavigationItem }) => (
    <li className={isMobile ? 'w-full flex justify-center' : ''}>
      <NavLink
        to={item.path}
        onClick={handleClick}
        className={({ isActive }) =>
          `block uppercase font-black tracking-[0.18em] transition-colors duration-300 ${
            isActive
              ? 'text-white'
              : 'text-[#8a8a8a] hover:text-white'
          } ${isMobile ? 'text-[12px] py-1' : 'text-[11px] xl:text-[13px] hover:-translate-y-0.5 inline-block transform transition-transform'}`
        }
      >
        {item.label}
      </NavLink>
    </li>
  );

  if (isMobile) {
    return (
      <nav aria-label="Navegación principal" className="w-full h-full flex flex-col justify-center">
        <ul className="flex flex-col gap-8 w-full items-center justify-center h-full">
          {NAVIGATION_ITEMS.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </ul>
      </nav>
    );
  }

  const half = Math.ceil(NAVIGATION_ITEMS.length / 2);
  const leftLinks = NAVIGATION_ITEMS.slice(0, half);
  const rightLinks = NAVIGATION_ITEMS.slice(half);

  return (
    <nav aria-label="Navegación principal" className="h-full flex items-center w-full relative">
      <ul className="flex items-center justify-center w-full h-full relative">
        {/* Left Links */}
        <div className="flex items-center justify-end gap-6 xl:gap-12 flex-1 pr-4 xl:pr-6">
          {leftLinks.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>

        {/* Empty Spacer that pushes links apart smoothly */}
        <div
          className={`flex justify-center items-center h-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? 'w-32 xl:w-44' : 'w-0'
          }`}
        />

        {/* Absolutely positioned Logo: Drops down from above with a premium bouncy spring effect */}
        <Link
          to="/"
          className={`absolute top-2 xl:top-3 left-1/2 z-[60] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isScrolled
              ? 'opacity-100 -translate-x-1/2 translate-y-0'
              : 'opacity-0 -translate-x-1/2 -translate-y-[120%] pointer-events-none'
          }`}
          aria-hidden={!isScrolled}
          tabIndex={isScrolled ? 0 : -1}
        >
          <img
            src="/logotipo.png"
            alt="Laguna Huacarpay"
            className="h-[105px] xl:h-[125px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
          />
        </Link>

        {/* Right Links */}
        <div className="flex items-center justify-start gap-6 xl:gap-12 flex-1 pl-4 xl:pl-6">
          {rightLinks.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      </ul>
    </nav>
  );
}

const Navbar = memo(NavbarComponent);
export default Navbar;
