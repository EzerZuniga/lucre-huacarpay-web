import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiCheck,
  FiAlertCircle,
} from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { NAVIGATION_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from '@/shared/constants';
import { contactService } from '@/features/contact/services/contact.service';

// ─── Newsletter form ──────────────────────────────────────────────────────────

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
      <div className="flex items-center gap-2 text-wetland-lagoon text-sm font-medium">
        <FiCheck size={15} />
        ¡Suscripción exitosa!
      </div>
    );
  }

  return (
    <form className="relative flex w-full max-w-[260px]" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
        required
        disabled={status === 'loading'}
        aria-label="Email para el boletín"
        className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg py-2.5 pl-4 pr-12 text-sm text-wetland-foam placeholder:text-wetland-sand/40 focus:outline-none focus:ring-1 focus:ring-wetland-lagoon focus:border-wetland-lagoon disabled:opacity-50 transition-colors"
      />
      <button
        type="submit"
        aria-label="Suscribirse al boletín"
        disabled={status === 'loading'}
        className="absolute right-1 top-1 bottom-1 px-2.5 bg-wetland-lagoon hover:bg-wetland-lagoon-dark text-white rounded-md transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
      >
        <FiArrowRight size={14} />
      </button>
      {status === 'error' && (
        <p className="absolute -bottom-5 left-0 flex items-center gap-1 text-[0.68rem] text-red-400">
          <FiAlertCircle size={11} /> Error. Intenta de nuevo.
        </p>
      )}
    </form>
  );
}

// ─── Social icons ─────────────────────────────────────────────────────────────

const SOCIAL_ICONS = [
  { key: 'facebook', href: SOCIAL_LINKS.facebook, label: 'Facebook', Icon: FiFacebook },
  { key: 'instagram', href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: FiInstagram },
  { key: 'twitter', href: SOCIAL_LINKS.twitter, label: 'X (Twitter)', Icon: FaXTwitter },
] as const;

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-wetland-foam border-t border-black/40">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Brand ── */}
          <div>
            <Link
              to="/"
              className="inline-block mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon rounded-lg"
            >
              <img
                src="/footer.png"
                alt={SITE_CONFIG.name}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-wetland-sand/70 max-w-[210px]">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* ── Explorar ── */}
          <div>
            <h3 className="text-[0.65rem] font-extrabold tracking-[0.15em] uppercase text-wetland-lagoon mb-5">
              Explorar
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-wetland-sand/75 hover:text-wetland-foam transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacto ── */}
          <div>
            <h3 className="text-[0.65rem] font-extrabold tracking-[0.15em] uppercase text-wetland-lagoon mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm text-wetland-sand/75 hover:text-wetland-foam transition-colors"
                >
                  <FiMail size={14} className="mt-0.5 shrink-0 text-wetland-lagoon" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-wetland-sand/75 hover:text-wetland-foam transition-colors"
                >
                  <FiPhone size={14} className="shrink-0 text-wetland-lagoon" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-wetland-sand/75">
                  <FiMapPin size={14} className="mt-0.5 shrink-0 text-wetland-lagoon" />
                  <span className="leading-relaxed">{SITE_CONFIG.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Síguenos + Boletín ── */}
          <div>
            <h3 className="text-[0.65rem] font-extrabold tracking-[0.15em] uppercase text-wetland-lagoon mb-5">
              Síguenos
            </h3>
            <div className="flex items-center gap-2 mb-8">
              {SOCIAL_ICONS.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.12] text-wetland-sand/60 hover:border-wetland-lagoon/50 hover:text-wetland-lagoon hover:bg-wetland-lagoon/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <h4 className="text-[0.65rem] font-extrabold tracking-[0.15em] uppercase text-wetland-lagoon mb-3">
              Boletín
            </h4>
            <p className="text-xs text-wetland-sand/55 mb-3 leading-relaxed max-w-[240px]">
              Recibe noticias sobre conservación e iniciativas del humedal.
            </p>
            <NewsletterForm />
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/[0.07]" />

      {/* ── Bottom bar ── */}
      <div className="bg-black/30 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-wetland-sand/45">
          © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
        </p>
        <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-wetland-foam/20">
          Proyecto de Conservación
        </p>
      </div>
      </div>
    </footer>
  );
}

