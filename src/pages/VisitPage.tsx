import { useState, useEffect, type ReactNode, type ElementType } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiSun,
  FiDroplet,
  FiMail,
  FiPhone,
  FiChevronDown,
  FiArrowRight,
  FiTruck,
  FiNavigation,
  FiUsers,
  FiSend,
} from 'react-icons/fi';
import { useIntersectionObserver } from '@/shared/hooks';
import { SITE_CONFIG, VISIT_INFO } from '@/shared/constants';
import { ContactForm } from '@/features/contact';
import { ROUTES } from '@/app/routes';

// ── Constants ──────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: '3,020', label: 'm.s.n.m.' },
  { value: '30 km', label: 'desde Cusco' },
  { value: '6 AM', label: 'apertura' },
] as const;

const PRICES = [
  { label: 'General', amount: `S/ ${VISIT_INFO.prices.general}`, bg: 'bg-wetland-lagoon/10', text: 'text-wetland-lagoon' },
  { label: 'Estudiantes', amount: `S/ ${VISIT_INFO.prices.students}`, bg: 'bg-wetland-moss/10', text: 'text-wetland-moss' },
  { label: 'Niños', amount: `S/ ${VISIT_INFO.prices.children}`, bg: 'bg-wetland-earth/10', text: 'text-wetland-earth' },
  { label: 'Adulto mayor', amount: `S/ ${VISIT_INFO.prices.seniors}`, bg: 'bg-wetland-lagoon/10', text: 'text-wetland-lagoon' },
] as const;

const TRANSPORT_OPTIONS = [
  {
    icon: FiTruck,
    title: 'Transporte público',
    subtitle: 'Desde el centro de Cusco',
    accentFrom: 'from-wetland-lagoon',
    accentTo: 'to-wetland-lagoon-dark',
    iconBg: 'bg-wetland-lagoon/10',
    iconText: 'text-wetland-lagoon',
    steps: [
      'Toma un bus en la Av. de la Cultura con destino a Urcos.',
      'Indica al cobrador que bajas en el paradero "Huacarpay".',
      'La ruta tarda aprox. 45 min y cuesta S/ 3.',
    ],
  },
  {
    icon: FiNavigation,
    title: 'Vehículo propio',
    subtitle: 'Ruta directa por la Vía Expresa',
    accentFrom: 'from-wetland-moss',
    accentTo: 'to-wetland-moss-dark',
    iconBg: 'bg-wetland-moss/10',
    iconText: 'text-wetland-moss',
    steps: [
      'Toma la Vía Expresa desde Cusco hacia el sur (ruta Cusco–Sicuani).',
      'A los 30 km encontrarás señales hacia la Laguna Huacarpay.',
      'Hay estacionamiento habilitado cerca de la orilla.',
    ],
  },
] as const;

// ── Helpers ────────────────────────────────────────────────────────────────────

function getDelay(i: number): string {
  const classes = ['', 'delay-[80ms]', 'delay-[160ms]', 'delay-[240ms]', 'delay-[320ms]', 'delay-[400ms]'];
  return classes[Math.min(i, classes.length - 1)] ?? '';
}

// ── AnimatedWrapper ────────────────────────────────────────────────────────────

function AnimatedWrapper({ children, className = '', delayClass = '' }: { children: ReactNode; className?: string; delayClass?: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delayClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

// ── InfoCard ───────────────────────────────────────────────────────────────────

function InfoCard({ icon: Icon, title, accentFrom, accentTo, iconBg, iconText, index, children }: {
  icon: ElementType;
  title: string;
  accentFrom: string;
  accentTo: string;
  iconBg: string;
  iconText: string;
  index: number;
  children: ReactNode;
}) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={[
        'relative flex flex-col bg-white rounded-2xl overflow-hidden h-full',
        'border border-wetland-sand/60 hover:border-wetland-sand',
        'shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)]',
        'hover:shadow-[0_16px_44px_rgba(35,50,40,0.12),0_4px_12px_rgba(35,50,40,0.07)]',
        'transition-[box-shadow,border-color,opacity,transform] duration-500 ease-out',
        getDelay(index),
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ].join(' ')}
    >
      <div className={`h-[3px] w-full bg-gradient-to-r ${accentFrom} ${accentTo}`} />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
            <Icon size={18} className={iconText} />
          </div>
          <h3 className="text-base font-bold text-wetland-ink">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────

function HeroVisit() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(id);
  }, []);

  const fi = (delay = '') =>
    `transition-all duration-700 ease-out ${delay} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`;

  return (
    <section className="relative min-h-[52vh] flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wetland-ink/80 via-wetland-ink/65 to-wetland-ink/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 ${fi(getDelay(0))}`}>
          <FiMapPin size={13} />
          Planifica tu visita
        </div>

        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 ${fi(getDelay(1))}`}>
          Visítanos en{' '}
          <span className="text-wetland-cta">Laguna Huacarpay</span>
        </h1>

        <p className={`text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${fi(getDelay(2))}`}>
          Una experiencia inolvidable en el humedal Ramsar más cercano a Cusco.
          Aves, paisajes andinos y naturaleza en estado puro.
        </p>

        <div className={`flex flex-wrap justify-center gap-8 sm:gap-14 mb-10 ${fi(getDelay(3))}`}>
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-wetland-cta">{s.value}</p>
              <p className="text-white/65 text-xs sm:text-sm uppercase tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className={`flex justify-center ${fi(getDelay(4))}`}>
          <a
            href="#visita"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Cómo visitar</span>
            <FiChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 sm:h-16" aria-hidden="true">
          <path d="M0,32 C240,72 480,0 720,32 C960,64 1200,8 1440,32 L1440,73 L0,73 Z" fill="#F8F5EE" />
        </svg>
      </div>
    </section>
  );
}

// ── VisitPage ──────────────────────────────────────────────────────────────────

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-wetland-ivory">
      <HeroVisit />

      {/* ── Planifica tu visita ── */}
      <section id="visita" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedWrapper className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-wetland-lagoon/10 text-wetland-lagoon text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiUsers size={12} />
            Información para visitantes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            Planifica tu visita
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto leading-relaxed">
            Todo lo que necesitas saber antes de venir al humedal Ramsar Laguna Huacarpay.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

          {/* Ubicación */}
          <InfoCard
            icon={FiMapPin}
            title="Ubicación y Acceso"
            accentFrom="from-wetland-lagoon"
            accentTo="to-wetland-moss"
            iconBg="bg-wetland-lagoon/10"
            iconText="text-wetland-lagoon"
            index={0}
          >
            <p className="text-sm text-wetland-ink-soft leading-relaxed mb-4">
              Ubicada en el distrito de Lucre, a solo <strong className="text-wetland-ink">30 km</strong> al
              sur de Cusco, sobre los <strong className="text-wetland-ink">3,020 m.s.n.m.</strong> El
              acceso es sencillo tanto en transporte público como en vehículo propio.
            </p>
            <div className="mt-auto bg-wetland-mist/50 rounded-xl p-3.5 border border-wetland-sand/40">
              <p className="text-[0.78rem] text-wetland-ink-soft leading-relaxed">
                <span className="font-bold text-wetland-lagoon">Tip:</span> Bus desde la Av. de la
                Cultura en Cusco hacia Urcos — baja en el paradero <em>Huacarpay</em>.
              </p>
            </div>
          </InfoCard>

          {/* Horarios */}
          <InfoCard
            icon={FiClock}
            title="Horarios de Visita"
            accentFrom="from-wetland-moss"
            accentTo="to-wetland-lagoon"
            iconBg="bg-wetland-moss/10"
            iconText="text-wetland-moss"
            index={1}
          >
            <ul className="space-y-3">
              {[
                { label: 'Horario de atención', value: `${VISIT_INFO.hours.weekdays} (todos los días)` },
                { label: 'Mejor momento', value: '6:00 AM – 9:00 AM para avistamiento de aves.' },
                { label: 'Temperatura promedio', value: 'Entre 8°C y 18°C según la temporada.' },
              ].map(({ label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-wetland-moss shrink-0" />
                  <span className="text-sm text-wetland-ink-soft leading-relaxed">
                    <strong className="text-wetland-ink">{label}:</strong> {value}
                  </span>
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* Tarifas */}
          <InfoCard
            icon={FiDollarSign}
            title="Tarifas de Ingreso"
            accentFrom="from-wetland-earth"
            accentTo="to-wetland-moss"
            iconBg="bg-wetland-earth/10"
            iconText="text-wetland-earth"
            index={2}
          >
            <div className="grid grid-cols-2 gap-3">
              {PRICES.map(({ label, amount, bg, text }) => (
                <div key={label} className={`rounded-xl px-4 py-3 ${bg} flex flex-col items-center text-center`}>
                  <span className={`text-xl font-extrabold ${text}`}>{amount}</span>
                  <span className="text-[0.7rem] text-wetland-ink-soft font-medium mt-0.5 uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Temporadas */}
          <InfoCard
            icon={FiSun}
            title="Temporadas"
            accentFrom="from-wetland-cta"
            accentTo="to-wetland-earth"
            iconBg="bg-wetland-cta/10"
            iconText="text-wetland-cta"
            index={3}
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-wetland-cta/5 border border-wetland-cta/15">
                <FiSun size={16} className="text-wetland-cta mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-wetland-ink">Temporada seca</p>
                  <p className="text-[0.78rem] text-wetland-ink-soft mt-0.5">Mayo – Octubre. Días soleados, noches frías. Ideal para fotografía.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-wetland-lagoon/5 border border-wetland-lagoon/15">
                <FiDroplet size={16} className="text-wetland-lagoon mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-wetland-ink">Temporada húmeda</p>
                  <p className="text-[0.78rem] text-wetland-ink-soft mt-0.5">Nov. – Abril. El humedal alcanza su mayor esplendor verde.</p>
                </div>
              </div>
            </div>
          </InfoCard>

        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section className="bg-wetland-ink py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWrapper className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/15">
              <FiNavigation size={12} />
              Acceso
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Cómo llegar?</h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
              Dos formas sencillas de llegar al humedal desde Cusco.
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRANSPORT_OPTIONS.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <AnimatedWrapper key={opt.title} delayClass={getDelay(i)}>
                  <div className="bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden h-full hover:bg-white/[0.08] transition-colors duration-300">
                    <div className={`h-[3px] bg-gradient-to-r ${opt.accentFrom} ${opt.accentTo}`} />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${opt.iconBg}`}>
                          <Icon size={18} className={opt.iconText} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{opt.title}</h3>
                          <p className="text-[0.72rem] text-white/50 mt-0.5">{opt.subtitle}</p>
                        </div>
                      </div>
                      <ol className="space-y-3">
                        {opt.steps.map((step, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className={`mt-0.5 w-5 h-5 rounded-full text-[0.65rem] font-bold flex items-center justify-center shrink-0 ${opt.iconBg} ${opt.iconText}`}>
                              {j + 1}
                            </span>
                            <span className="text-sm text-white/70 leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </AnimatedWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contáctanos ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedWrapper className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-wetland-lagoon/10 text-wetland-lagoon text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiSend size={12} />
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto leading-relaxed">
            Escríbenos para coordinar tu visita, resolver dudas o colaborar con la conservación.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Contact info */}
          <AnimatedWrapper className="lg:col-span-2 flex flex-col gap-5">
            {[
              { icon: FiMail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
              { icon: FiPhone, label: 'Teléfono', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}` },
              { icon: FiMapPin, label: 'Ubicación', value: SITE_CONFIG.address, href: undefined },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-wetland-sand/60 shadow-[0_2px_8px_rgba(35,50,40,0.05)]"
              >
                <div className="w-10 h-10 rounded-xl bg-wetland-lagoon/10 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-wetland-lagoon" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-wetland-lagoon mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-wetland-ink-soft hover:text-wetland-lagoon transition-colors break-words">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-wetland-ink-soft leading-relaxed">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <Link
              to={ROUTES.GALLERY}
              className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-xl bg-wetland-lagoon text-white font-semibold text-sm hover:bg-wetland-lagoon-dark transition-colors shadow-[0_4px_14px_rgba(47,120,152,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
            >
              Ver la galería <FiArrowRight size={14} />
            </Link>
          </AnimatedWrapper>

          {/* Form */}
          <AnimatedWrapper className="lg:col-span-3 bg-white rounded-2xl p-8 border border-wetland-sand/60 shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)]" delayClass="delay-[120ms]">
            <h3 className="text-lg font-bold text-wetland-ink mb-6">Envíanos un mensaje</h3>
            <ContactForm subjectAsSelect />
          </AnimatedWrapper>

        </div>
      </section>
    </div>
  );
}

