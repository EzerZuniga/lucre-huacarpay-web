import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin, FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { NAVIGATION_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from '@/shared/constants';
import { contactService } from '@/features/contact/services/contact.service';

// ─── Newsletter form (local state — lógica UI pura del widget) ─────────────

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<NewsletterStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      await contactService.subscribeToNewsletter({ email });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 text-wetland-lagoon bg-white/5 rounded-full px-5 py-3 max-w-sm">
        <FiCheck size={18} />
        <span className="text-sm font-medium">¡Suscripción exitosa!</span>
      </div>
    );
  }

  return (
    <form className="w-full max-w-sm relative flex items-center group" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
        required
        disabled={status === 'loading'}
        aria-label="Email para el boletín"
        className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-5 pr-14 text-sm text-wetland-foam placeholder:text-wetland-sand/50 focus:outline-none focus:ring-2 focus:ring-wetland-lagoon focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
      />
      <button
        type="submit"
        aria-label="Suscribirse al boletín"
        disabled={status === 'loading'}
        className="absolute right-1.5 w-10 h-10 rounded-full bg-wetland-lagoon flex items-center justify-center text-wetland-ink hover:bg-wetland-foam transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-wetland-ink focus:ring-wetland-foam disabled:opacity-60"
      >
        {status === 'loading' ? (
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <FiArrowRight size={18} className="transition-transform duration-300 group-focus-within:translate-x-1" />
        )}
      </button>
      {status === 'error' && (
        <p className="absolute -bottom-6 left-0 flex items-center gap-1 text-xs text-red-400">
          <FiAlertCircle size={12} />
          Error al suscribirse. Intenta de nuevo.
        </p>
      )}
    </form>
  );
}

// ─── Social links config ──────────────────────────────────────────────────────

const SOCIAL_ICONS = [
  { key: 'facebook', href: SOCIAL_LINKS.facebook, label: 'Facebook', Icon: FiFacebook, size: 20 },
  { key: 'instagram', href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: FiInstagram, size: 20 },
  { key: 'twitter', href: SOCIAL_LINKS.twitter, label: 'X (Twitter)', Icon: FaXTwitter, size: 18 },
] as const;

const SOCIAL_LINK_CLASS =
  'flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-wetland-foam transition-all duration-300 hover:bg-wetland-lagoon hover:text-wetland-ink hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon';

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-wetland-ink text-wetland-foam mt-24 sm:mt-32">
      {/* Premium Multi-layered SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] pointer-events-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[100px] lg:h-[160px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,120V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120Z"
            opacity=".25"
            className="fill-wetland-lagoon"
          />
          <path
            d="M0,120V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V120Z"
            opacity=".5"
            className="fill-wetland-moss"
          />
          <path
            d="M0,120V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120Z"
            className="fill-wetland-ink"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-2 lg:pt-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link
              to="/"
              className="inline-block shrink-0 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon rounded-lg"
            >
              <img
                src="/footer.png"
                alt={`${SITE_CONFIG.name} Logo`}
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain filter drop-shadow-md"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-wetland-sand/90 mt-2">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="mb-6 text-sm font-extrabold tracking-widest text-wetland-foam/80 uppercase">
              Explorar
            </h3>
            <ul className="flex flex-col gap-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center text-wetland-sand transition-all duration-300 hover:text-wetland-foam hover:translate-x-1 focus-visible:outline-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-wetland-lagoon mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="mb-6 text-sm font-extrabold tracking-widest text-wetland-foam/80 uppercase">
              Boletín
            </h3>
            <p className="text-sm leading-relaxed text-wetland-sand/90 mb-6 max-w-sm">
              Únete a nuestra comunidad y recibe noticias sobre nuestras iniciativas de conservación.
            </p>
            <NewsletterForm />
          </div>

          {/* Socials */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="mb-6 text-sm font-extrabold tracking-widest text-wetland-foam/80 uppercase">
              Conecta
            </h3>
            <div className="flex gap-4 sm:flex-col lg:flex-row lg:flex-wrap">
              {SOCIAL_ICONS.map(({ key, href, label, Icon, size }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={SOCIAL_LINK_CLASS}
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bottom Bar */}
      <div className="bg-[#080b09] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex items-center text-sm text-wetland-sand transition-colors hover:text-wetland-foam"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded bg-white/5 mr-3 group-hover:bg-wetland-lagoon group-hover:text-wetland-ink transition-colors border border-white/5 group-hover:border-transparent">
                  <FiMail size={14} />
                </div>
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="group flex items-center text-sm text-wetland-sand transition-colors hover:text-wetland-foam"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded bg-white/5 mr-3 group-hover:bg-wetland-lagoon group-hover:text-wetland-ink transition-colors border border-white/5 group-hover:border-transparent">
                  <FiPhone size={14} />
                </div>
                {SITE_CONFIG.phone}
              </a>
              <div className="flex items-center text-sm text-wetland-sand">
                <div className="flex items-center justify-center w-8 h-8 rounded bg-white/5 mr-3 border border-white/5">
                  <FiMapPin size={14} />
                </div>
                {SITE_CONFIG.address.split(',').slice(-2).join(',').trim()}
              </div>
            </div>

            <div className="text-center lg:text-right shrink-0">
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-wetland-foam/40 uppercase mb-1">
                Proyecto de conservación
              </p>
              <p className="text-[10px] sm:text-xs text-wetland-sand/60">
                © {currentYear} {SITE_CONFIG.name}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

