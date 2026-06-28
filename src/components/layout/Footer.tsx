
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { NAVIGATION_ITEMS } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wetland-moss-dark text-wetland-foam py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-wetland-lagoon rounded-lg w-14 h-14 flex items-center justify-center mr-4">
                <span className="text-wetland-foam font-bold text-xl">LH</span>
              </div>
              <h2 className="text-2xl font-bold text-wetland-foam">Laguna Huacarpay</h2>
            </div>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-wetland-sand sm:text-lg">
              Humedal Ramsar de importancia internacional ubicado en Lucre, Valle Sur del Cusco. 
              Sitio de conservación de biodiversidad andina y destino de ecoturismo responsable.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-wetland-sand transition-colors duration-300 hover:text-wetland-foam focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-foam/80 rounded-sm"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-wetland-sand transition-colors duration-300 hover:text-wetland-foam focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-foam/80 rounded-sm"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="text-wetland-sand transition-colors duration-300 hover:text-wetland-foam focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-foam/80 rounded-sm"
              >
                <FaXTwitter size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-semibold text-wetland-foam">Información</h3>
            <ul className="space-y-4">
              {NAVIGATION_ITEMS.slice(0, -1).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block text-wetland-sand transition-colors duration-300 hover:text-wetland-foam focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-foam/80 rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-semibold text-wetland-foam">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-wetland-lagoon flex-shrink-0" size={18} />
                <span className="text-wetland-sand leading-relaxed">info@lagunahuacarpay.org</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-wetland-lagoon flex-shrink-0" size={18} />
                <span className="text-wetland-sand leading-relaxed">+51 984 123 456</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-wetland-lagoon flex-shrink-0" size={18} />
                <span className="text-wetland-sand leading-relaxed">Lucre, Valle Sur del Cusco, Perú</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-wetland-sand/25 pt-8 text-center">
          <p className="text-sm text-wetland-sand sm:text-base">© {currentYear} Laguna de Huacarpay - Sitio Ramsar. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-wetland-mist sm:text-sm">Proyecto de conservación y desarrollo sostenible</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
