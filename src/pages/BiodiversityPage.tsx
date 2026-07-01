import { useState, useEffect } from 'react';
import type { ReactNode, ElementType } from 'react';
import {
  FiFeather,
  FiDroplet,
  FiSun,
  FiArrowRight,
  FiEye,
  FiShield,
  FiTarget,
  FiMapPin,
  FiChevronDown,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/shared/ui';
import {
  BIODIVERSITY_FEATURES,
  BIODIVERSITY_SPECIES,
  BIODIVERSITY_STATS,
} from '@/entities/biodiversity';
import type {
  SpeciesCategory,
  ConservationStatus,
  BiodiversitySpecies,
} from '@/entities/biodiversity';
import { useIntersectionObserver } from '@/shared/hooks';
import { ROUTES } from '@/app/routes';

// ── Constants ────────────────────────────────────────────────────────────────

const ICON_MAP = {
  eye: FiEye,
  shield: FiShield,
  target: FiTarget,
} as const;

const STATUS_CONFIG: Record<
  ConservationStatus,
  { label: string; className: string }
> = {
  endemica: {
    label: 'Endémica',
    className:
      'bg-wetland-moss/10 text-wetland-moss border border-wetland-moss/25',
  },
  migratoria: {
    label: 'Migratoria',
    className:
      'bg-wetland-lagoon/10 text-wetland-lagoon border border-wetland-lagoon/25',
  },
  nativa: {
    label: 'Nativa',
    className:
      'bg-wetland-earth/10 text-wetland-earth border border-wetland-earth/25',
  },
  protegida: {
    label: 'Protegida',
    className:
      'bg-wetland-cta/10 text-wetland-cta border border-wetland-cta/25',
  },
};

interface CategoryTab {
  id: SpeciesCategory | 'all';
  label: string;
  icon: ElementType;
}

const CATEGORY_TABS: readonly CategoryTab[] = [
  { id: 'all', label: 'Todas', icon: FiEye },
  { id: 'fauna', label: 'Fauna', icon: FiFeather },
  { id: 'flora', label: 'Flora', icon: FiDroplet },
  { id: 'ecosistema', label: 'Ecosistema', icon: FiSun },
] as const;

// ── HeroBiodiversity ─────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: '120+', label: 'Especies de Aves' },
  { value: '500 ha', label: 'Área Protegida' },
  { value: '3,076', label: 'Metros s.n.m.' },
] as const;

function HeroBiodiversity() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay lets the browser paint the initial opacity-0 state first
    const id = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(id);
  }, []);

  /** Returns Tailwind classes for a staggered fade-up transition */
  const fi = (delayClass = '') =>
    `transition-all duration-700 ease-out ${delayClass} ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    }`;

  return (
    <section
      className="relative flex min-h-[600px] items-center overflow-hidden sm:min-h-screen"
      aria-label="Presentación de la biodiversidad"
    >
      {/* ── Background image + overlay ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
          alt=""
          role="presentation"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wetland-ink/80 via-wetland-ink/55 to-wetland-ink/90" />
      </div>

      {/* ── Decorative ambient glows ── */}
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-wetland-lagoon/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/3 h-96 w-96 rounded-full bg-wetland-moss/20 blur-3xl"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-32 sm:pt-28 lg:pb-36 lg:px-8">
        {/* Badge */}
        <div className={`mb-4 flex justify-center sm:mb-6 ${fi()}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-wetland-moss/40 bg-wetland-moss/25 px-3.5 py-1 text-xs font-medium text-wetland-sand backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
            <FiFeather size={12} aria-hidden="true" />
            Ecosistema Altoandino · Cusco, Perú
          </span>
        </div>

        {/* Heading */}
        <h1 className={`mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl ${fi('delay-[150ms]')}`}>
          Descubre la{' '}
          <span className="text-wetland-cta">Biodiversidad</span>
          <br className="hidden sm:block" />
          {' '}de la Laguna Huacarpay
        </h1>

        {/* Description */}
        <p
          className={`mx-auto mb-8 max-w-xl text-base leading-relaxed text-wetland-sand/75 sm:mb-10 sm:max-w-2xl sm:text-lg lg:text-xl ${fi('delay-[300ms]')}`}
        >
          Un ecosistema único que alberga más de 120 especies de aves, flora
          nativa andina y comunidades lacustres únicas en los Andes del Perú.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 ${fi('delay-[450ms]')}`}
        >
          <a
            href="#especies"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wetland-cta px-7 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-wetland-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wetland-cta sm:w-auto sm:px-8 sm:py-3.5"
          >
            Explorar Especies
            <FiArrowRight size={17} aria-hidden="true" />
          </a>
          <Link
            to={ROUTES.VISIT_US}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-8 sm:py-3.5"
          >
            Planifica tu Visita
          </Link>
        </div>

        {/* Divider */}
        <div
          className={`mx-auto my-6 h-px w-12 bg-white/20 sm:my-10 sm:w-16 ${fi('delay-[550ms]')}`}
          aria-hidden="true"
        />

        {/* Mini stats */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 sm:gap-12 lg:gap-16 ${fi('delay-[650ms]')}`}
        >
          {HERO_STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-xl font-bold text-wetland-cta sm:text-2xl lg:text-3xl">
                {value}
              </p>
              <p className="mt-0.5 text-xs text-wetland-sand/55">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce text-white/40 sm:bottom-24"
        aria-hidden="true"
      >
        <FiChevronDown size={26} />
      </div>

      {/* ── Wave divider ── */}
      <div className="absolute -bottom-px left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C360,72 1080,0 1440,48 L1440,73 L0,73 Z" fill="#F8F5EE" />
        </svg>
      </div>
    </section>
  );
}

// ── AnimatedWrapper ───────────────────────────────────────────────────────────

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  /** Tailwind transition-delay class, e.g. 'delay-[80ms]' */
  delayClass?: string;
}

function AnimatedWrapper({
  children,
  className = '',
  delayClass = '',
}: AnimatedWrapperProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delayClass} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ── SpeciesCard ───────────────────────────────────────────────────────────────

interface SpeciesCardProps {
  species: BiodiversitySpecies;
  index: number;
}

const CARD_DELAY_CLASSES = [
  '',
  'delay-[80ms]',
  'delay-[160ms]',
  'delay-[240ms]',
  'delay-[320ms]',
  'delay-[400ms]',
  'delay-[480ms]',
] as const;

function SpeciesCard({ species, index }: SpeciesCardProps) {
  const { label, className: badgeClass } = STATUS_CONFIG[species.status];
  const delayClass = CARD_DELAY_CLASSES[Math.min(index, CARD_DELAY_CLASSES.length - 1)];
  return (
    <AnimatedWrapper delayClass={delayClass} className="h-full">
      <article className="bg-wetland-foam rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-wetland-sand transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
          <img
            src={species.imageUrl}
            alt={`${species.name} – ${species.scientificName}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wetland-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span
            className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm bg-white/85 ${badgeClass}`}
          >
            {label}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-wetland-ink leading-tight">
            {species.name}
          </h3>
          <p className="text-sm italic text-wetland-ink-soft/60 mb-3 font-serif">
            {species.scientificName}
          </p>
          <p className="text-sm text-wetland-ink-soft leading-relaxed mb-4 flex-1">
            {species.description}
          </p>
          {/* Fact pills */}
          <ul className="flex flex-wrap gap-2" aria-label="Características">
            {species.facts.map((fact) => (
              <li
                key={fact}
                className="text-xs bg-wetland-mist text-wetland-moss px-2.5 py-1 rounded-full font-medium"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </AnimatedWrapper>
  );
}

// ── BiodiversityPage ──────────────────────────────────────────────────────────

export default function BiodiversityPage() {
  const [activeCategory, setActiveCategory] = useState<SpeciesCategory | 'all'>('all');

  const filteredSpecies =
    activeCategory === 'all'
      ? BIODIVERSITY_SPECIES
      : BIODIVERSITY_SPECIES.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-wetland-ivory">
      {/* ── Full-viewport Hero ──────────────────────────────────────────── */}
      <HeroBiodiversity />

      {/* ── Feature Cards ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedWrapper>
            <SectionHeader
              title="Biodiversidad"
              description="Descubre la riqueza de flora y fauna endémica y migratoria que habita en el ecosistema único de la Laguna Huacarpay."
            />
          </AnimatedWrapper>

          {/* Feature highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {BIODIVERSITY_FEATURES.map((feature, i) => {
              const Icon = ICON_MAP[feature.iconName];
              const featureDelays = ['', 'delay-[120ms]', 'delay-[240ms]'] as const;
              return (
                <AnimatedWrapper key={feature.title} delayClass={featureDelays[i]}>
                  <div className="bg-wetland-foam rounded-2xl p-8 text-center border border-wetland-sand shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-wetland-mist flex items-center justify-center mx-auto mb-5">
                      <Icon size={28} className={feature.colorClass} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-wetland-ink">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-wetland-ink-soft leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────── */}
      <section className="bg-wetland-ink py-14" aria-label="Estadísticas del ecosistema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {BIODIVERSITY_STATS.map((stat, i) => {
              const statDelays = ['', 'delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]'] as const;
              return (
              <AnimatedWrapper key={stat.label} delayClass={statDelays[i]}>
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold text-wetland-cta font-serif">
                    {stat.value}
                  </p>
                  <p className="text-wetland-foam font-semibold mt-1 text-sm sm:text-base">
                    {stat.label}
                  </p>
                  <p className="text-wetland-sand/50 text-xs sm:text-sm mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              </AnimatedWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Species Explorer ─────────────────────────────────────────────── */}
      <section id="especies" className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Explorador de especies">
        <div className="max-w-7xl mx-auto">
          <AnimatedWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
                Especies del Ecosistema
              </h2>
              <div className="section-divider" />
              <p className="text-wetland-ink-soft max-w-2xl mx-auto mt-4">
                Explora la diversidad de vida que habita en la Laguna Huacarpay
                y sus alrededores.
              </p>
            </div>
          </AnimatedWrapper>

          {/* Category tabs */}
          <AnimatedWrapper delayClass="delay-[100ms]">
            <div
              role="group"
              aria-label="Filtrar por categoría"
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {CATEGORY_TABS.map(({ id, label, icon: TabIcon }) => {
                const isActive = activeCategory === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveCategory(id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                      isActive
                        ? 'bg-wetland-moss text-white border-wetland-moss shadow-md scale-105'
                        : 'bg-wetland-foam text-wetland-ink-soft border-wetland-sand hover:border-wetland-moss hover:text-wetland-moss'
                    }`}
                  >
                    <TabIcon size={15} aria-hidden="true" />
                    {label}
                  </button>
                );
              })}
            </div>
          </AnimatedWrapper>

          {/* Species grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecies.map((species, index) => (
              <SpeciesCard key={species.id} species={species} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Conservation Section ─────────────────────────────────────────── */}
      <section
        className="bg-wetland-mist py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Conservación del ecosistema"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text block */}
            <AnimatedWrapper>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
                  Conservación del Ecosistema
                </h2>
                <div className="w-16 h-1 bg-wetland-moss rounded mb-6" />
                <p className="text-wetland-ink-soft leading-relaxed mb-6">
                  La Laguna Huacarpay es un ecosistema frágil que requiere
                  protección activa. Nuestro trabajo abarca monitoreo constante
                  de especies, restauración de hábitats y educación ambiental
                  comunitaria.
                </p>
                <ul className="space-y-4">
                  {[
                    'Monitoreo mensual de poblaciones de aves',
                    'Restauración de totorales y vegetación nativa',
                    'Programas de educación ambiental para escuelas',
                    'Investigación científica con universidades aliadas',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full bg-wetland-moss/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <span className="w-2 h-2 rounded-full bg-wetland-moss block" />
                      </span>
                      <span className="text-wetland-ink-soft text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedWrapper>

            {/* Data callout */}
            <AnimatedWrapper delayClass="delay-[200ms]">
              <div className="bg-wetland-ink rounded-3xl p-8 text-wetland-foam">
                <h3 className="text-2xl font-bold mb-6 text-wetland-cta">
                  Datos de Conservación
                </h3>
                <dl className="space-y-5">
                  {[
                    { label: 'Área bajo protección', value: '500 hectáreas' },
                    { label: 'Años de monitoreo', value: '+30 años' },
                    { label: 'Especies monitoreadas', value: '120+ aves' },
                    { label: 'Instituciones aliadas', value: '8 universidades' },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-wetland-foam/10 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-wetland-sand/60 text-sm">{label}</dt>
                      <dd className="font-bold text-wetland-cta">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedWrapper>
            <div className="bg-wetland-moss rounded-3xl p-10 sm:p-14">
              <FiMapPin
                size={36}
                className="text-wetland-cta mx-auto mb-4"
                aria-hidden="true"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Observa la biodiversidad de primera mano
              </h2>
              <p className="text-wetland-sand/75 mb-8 leading-relaxed max-w-xl mx-auto">
                Únete a nuestros recorridos guiados y descubre las maravillas
                naturales de la Laguna Huacarpay con expertos locales.
              </p>
              <Link
                to={ROUTES.VISIT_US}
                className="inline-flex items-center gap-2 bg-wetland-cta hover:bg-wetland-cta-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wetland-cta"
              >
                Planifica tu visita
                <FiArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

