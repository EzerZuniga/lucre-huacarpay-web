import { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAVIGATION_ITEMS, type NavigationItem } from '@/shared/constants';

interface NavbarProps {
  isMobile?: boolean;
  onClose?: () => void;
  isScrolled?: boolean;
}

// Split 3 izquierda / 3 derecha — simétrico con 6 ítems
const LOGO_SPLIT = Math.floor(NAVIGATION_ITEMS.length / 2);

// ── NavItem ───────────────────────────────────────────────────────────────────

interface NavItemProps {
  item: NavigationItem;
  isMobile: boolean;
  onClick: () => void;
}

function NavItem({ item, isMobile, onClick }: NavItemProps) {
  return (
    <li className={isMobile ? 'w-full flex justify-center' : 'shrink-0'}>
      <NavLink
        to={item.path}
        onClick={onClick}
        className={({ isActive }) =>
          [
            'block uppercase font-black whitespace-nowrap transition-colors duration-300',
            isActive ? 'text-white' : 'text-[#8a8a8a] hover:text-white',
            isMobile
              ? 'text-[16px] py-1 tracking-[0.18em]'
              : 'text-[13px] xl:text-[14px] 2xl:text-[15px] tracking-[0.14em] xl:tracking-[0.16em] hover:-translate-y-0.5 inline-block transform transition-transform',
          ].join(' ')
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function NavbarComponent({ isMobile = false, onClose, isScrolled = false }: NavbarProps) {
  const handleClick = () => onClose?.();

  // ─ Mobile ─────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <nav aria-label="Navegación principal" className="w-full h-full flex flex-col justify-center">
        <ul className="flex flex-col gap-7 w-full items-center justify-center h-full">
          {NAVIGATION_ITEMS.map((item) => (
            <NavItem key={item.path} item={item} isMobile onClick={handleClick} />
          ))}
        </ul>
      </nav>
    );
  }

  // ─ Desktop ────────────────────────────────────────────────────────────────
  // Estructura con CSS Grid para garantizar un centrado absoluto del spacer:
  // [1fr] [auto] [1fr]
  // Esto asegura que el centro visual sea exactamente el 50% de la pantalla,
  // sin importar que los textos de la derecha sean más largos que los de la izquierda.
  const leftLinks = NAVIGATION_ITEMS.slice(0, LOGO_SPLIT);
  const rightLinks = NAVIGATION_ITEMS.slice(LOGO_SPLIT);

  return (
    // Se aplica una corrección óptica (transformación a la izquierda) porque 
    // los textos del grupo derecho suman más caracteres que los del grupo izquierdo.
    // Al desplazar todo el bloque ligeramente, equilibramos el espacio negativo (márgenes)
    // logrando que el menú se sienta visualmente centrado en la pantalla.
    <nav aria-label="Navegación principal" className="h-full w-full relative lg:-translate-x-4 xl:-translate-x-6 2xl:-translate-x-8">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full h-full">

        {/* Grupo izquierdo — 3 ítems alineados hacia el centro */}
        <ul className="flex items-center justify-end gap-3 lg:gap-5 xl:gap-7 2xl:gap-10 pr-3 lg:pr-5 xl:pr-8 min-w-0">
          {leftLinks.map((item) => (
            <NavItem key={item.path} item={item} isMobile={false} onClick={handleClick} />
          ))}
        </ul>

        {/* Spacer central — crece para abrir hueco al logo al hacer scroll. */}
        <div
          aria-hidden="true"
          className={`shrink-0 overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? 'w-[100px] lg:w-[130px] xl:w-[176px]' : 'w-0'
          }`}
        />

        {/* Grupo derecho — 3 ítems alineados hacia el centro */}
        <ul className="flex items-center justify-start gap-3 lg:gap-5 xl:gap-7 2xl:gap-10 pl-3 lg:pl-5 xl:pl-8 min-w-0">
          {rightLinks.map((item) => (
            <NavItem key={item.path} item={item} isMobile={false} onClick={handleClick} />
          ))}
        </ul>
      </div>

      {/* Logo — drop animation con spring al hacer scroll.
          left-1/2 coincide exactamente con el centro del spacer (ambos a W/2). */}
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
          className="h-[105px] xl:h-[120px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
        />
      </Link>
    </nav>
  );
}

const Navbar = memo(NavbarComponent);
export default Navbar;



