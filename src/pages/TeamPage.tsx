import { useState, useEffect } from 'react';
import type { ReactNode, ElementType } from 'react';
import {
  FiSearch,
  FiShield,
  FiBookOpen,
  FiArrowRight,
  FiUsers,
  FiHeart,
  FiAward,
  FiChevronDown,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/shared/hooks';
import { TEAM_MEMBERS, TEAM_METHODOLOGIES } from '@/entities/team';
import { ROUTES } from '@/app/routes';

// ── Constants ─────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: '5', label: 'Integrantes' },
  { value: '4', label: 'Disciplinas' },
  { value: '1', label: 'Misión' },
] as const;

const METHODOLOGY_ICONS: readonly ElementType[] = [FiSearch, FiShield, FiBookOpen];

const CARD_DELAY_CLASSES = [
  '',
  'delay-[100ms]',
  'delay-[200ms]',
  'delay-[300ms]',
  'delay-[400ms]',
] as const;

type AreaKey = 'Coordinacion' | 'Tecnologia' | 'Finanzas' | 'Diseno' | 'Sostenibilidad';

interface AreaConfig {
  bg: string;
  text: string;
  avatarFrom: string;
  avatarTo: string;
}

const AREA_CONFIG: Record<AreaKey, AreaConfig> = {
  Coordinacion:   { bg: 'bg-wetland-moss/15',   text: 'text-wetland-moss',   avatarFrom: 'from-wetland-moss',   avatarTo: 'to-wetland-lagoon' },
  Tecnologia:     { bg: 'bg-wetland-lagoon/15', text: 'text-wetland-lagoon', avatarFrom: 'from-wetland-lagoon', avatarTo: 'to-wetland-moss'   },
  Finanzas:       { bg: 'bg-wetland-earth/15',  text: 'text-wetland-earth',  avatarFrom: 'from-wetland-earth',  avatarTo: 'to-wetland-lagoon' },
  Diseno:         { bg: 'bg-wetland-moss/15',   text: 'text-wetland-moss',   avatarFrom: 'from-wetland-moss',   avatarTo: 'to-wetland-earth'  },
  Sostenibilidad: { bg: 'bg-wetland-lagoon/15', text: 'text-wetland-lagoon', avatarFrom: 'from-wetland-lagoon', avatarTo: 'to-wetland-earth'  },
};

const DEFAULT_AREA_CONFIG: AreaConfig = {
  bg: 'bg-wetland-lagoon/15',
  text: 'text-wetland-lagoon',
  avatarFrom: 'from-wetland-lagoon',
  avatarTo: 'to-wetland-moss',
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function getDelay(i: number): string {
  const classes = [
    '',
    'delay-[80ms]',
    'delay-[160ms]',
    'delay-[240ms]',
    'delay-[320ms]',
    'delay-[400ms]',
  ];
  return classes[Math.min(i, classes.length - 1)] ?? '';
}

function getAreaConfig(area: string | undefined): AreaConfig {
  if (!area) return DEFAULT_AREA_CONFIG;
  return AREA_CONFIG[area as AreaKey] ?? DEFAULT_AREA_CONFIG;
}

// ── Components ────────────────────────────────────────────────────────────────

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delayClass?: string;
}

function AnimatedWrapper({ children, className = '', delayClass = '' }: AnimatedWrapperProps) {
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

interface MemberCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  specialty?: string;
  area?: string;
  index: number;
}

function MemberCard({ name, role, bio, initials, specialty, area, index }: MemberCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  const delayClass = CARD_DELAY_CLASSES[index % CARD_DELAY_CLASSES.length] ?? '';
  const cfg = getAreaConfig(area);

  return (
    <div
      ref={ref}
      className={[
        'group relative flex flex-col bg-white rounded-2xl overflow-hidden',
        'border border-wetland-sand/60 hover:border-wetland-sand',
        'shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)]',
        'hover:shadow-[0_20px_48px_rgba(35,50,40,0.13),0_6px_16px_rgba(35,50,40,0.07)]',
        'hover:-translate-y-2',
        'transition-[transform,box-shadow,border-color,opacity] duration-500 ease-out',
        delayClass,
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ].join(' ')}
    >
      {/* ── Top accent stripe ── */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${cfg.avatarFrom} ${cfg.avatarTo}`} />

      {/* ── Subtle background tint on hover ── */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b ${cfg.avatarFrom}/[0.025] to-transparent`}
      />

      <div className="relative p-6 flex flex-col flex-grow">
        {/* ── Avatar + identity ── */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={[
              `bg-gradient-to-br ${cfg.avatarFrom} ${cfg.avatarTo}`,
              'w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center select-none',
              'shadow-[0_4px_14px_rgba(0,0,0,0.18)] ring-[3px] ring-white',
              'group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)]',
              'transition-[transform,box-shadow] duration-300 ease-out',
            ].join(' ')}
          >
            <span className="text-white font-extrabold text-lg tracking-tight">{initials}</span>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-[0.875rem] font-bold text-wetland-ink leading-snug line-clamp-2">
              {name}
            </h3>
            <p className={`text-[0.68rem] font-bold mt-1 uppercase tracking-widest ${cfg.text}`}>
              {role}
            </p>
          </div>
        </div>

        {/* ── Gradient divider ── */}
        <div className="h-px mb-4 bg-gradient-to-r from-transparent via-wetland-sand to-transparent" />

        {/* ── Bio ── */}
        <p className="text-wetland-ink-soft text-[0.825rem] leading-relaxed flex-grow mb-5 line-clamp-4">
          {bio}
        </p>

        {/* ── Footer ── */}
        <div className="pt-3.5 border-t border-wetland-sand/50 flex items-center justify-between gap-2">
          {specialty && (
            <span
              className={[
                'inline-flex items-center gap-1.5',
                'text-[0.68rem] font-bold px-2.5 py-1 rounded-full',
                'ring-1 ring-inset ring-current/20',
                cfg.bg,
                cfg.text,
              ].join(' ')}
            >
              <FiAward size={9} />
              {specialty}
            </span>
          )}

          <Link
            to={ROUTES.CONTACT}
            className={[
              'group/cta inline-flex items-center gap-1.5 ml-auto',
              'text-xs font-semibold transition-opacity duration-200',
              `${cfg.text} opacity-75 hover:opacity-100`,
            ].join(' ')}
          >
            Contactar
            <FiArrowRight
              size={12}
              className="transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroTeam() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(id);
  }, []);

  const fi = (delay = '') =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    }`;

  return (
    <section className="relative min-h-[52vh] flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wetland-ink/80 via-wetland-ink/65 to-wetland-ink/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div
          className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 ${fi(getDelay(0))}`}
        >
          <FiUsers size={13} />
          Nuestro Equipo
        </div>

        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 ${fi(getDelay(1))}`}
        >
          Personas detrás de la{' '}
          <span className="text-wetland-cta">Conservación</span>
        </h1>

        <p
          className={`text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${fi(getDelay(2))}`}
        >
          Un equipo multidisciplinario comprometido con la protección y divulgación del humedal
          Ramsar Laguna Huacarpay.
        </p>

        <div className={`flex flex-wrap justify-center gap-8 sm:gap-14 mb-10 ${fi(getDelay(3))}`}>
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-wetland-cta">{s.value}</p>
              <p className="text-white/65 text-xs sm:text-sm uppercase tracking-wide mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className={`flex justify-center ${fi(getDelay(4))}`}>
          <a
            href="#equipo"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Ver equipo</span>
            <FiChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16"
        >
          <path
            d="M0,32 C240,72 480,0 720,32 C960,64 1200,8 1440,32 L1440,73 L0,73 Z"
            fill="#F8F5EE"
          />
        </svg>
      </div>
    </section>
  );
}

// ── TeamPage ──────────────────────────────────────────────────────────────────

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-wetland-ivory">
      <HeroTeam />

      {/* ── Team Grid ───────────────────────────────────────────────────────── */}
      <section id="equipo" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedWrapper className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-wetland-moss/10 text-wetland-moss text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiUsers size={12} />
            Equipo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            Conoce a nuestro equipo
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto leading-relaxed">
            Profesionales y estudiantes de diversas disciplinas unidos por la conservación del
            humedal Ramsar.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {TEAM_MEMBERS.map((member, i) => (
            <MemberCard key={member.initials} {...member} index={i} />
          ))}
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────────── */}
      <AnimatedWrapper>
        <section className="bg-wetland-ink py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              {(
                [
                  { value: '+6', label: 'Años de trabajo', icon: FiHeart },
                  { value: '5', label: 'Integrantes activos', icon: FiUsers },
                  { value: '4', label: 'Áreas de especialidad', icon: FiAward },
                ] as const
              ).map(({ value, label, icon: Icon }) => (
                <div key={label} className="group">
                  <Icon className="text-wetland-cta mx-auto mb-3" size={24} />
                  <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{value}</p>
                  <p className="text-white/60 text-xs sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      {/* ── Methodology ─────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedWrapper className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            Nuestra metodología de trabajo
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto">
            Abordamos la conservación con rigor científico, participación comunitaria y educación
            ambiental.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_METHODOLOGIES.map((method, i) => {
            const Icon = METHODOLOGY_ICONS[i] ?? FiBookOpen;
            return (
              <AnimatedWrapper key={method.step} delayClass={CARD_DELAY_CLASSES[i] ?? ''}>
                <div className="relative bg-white rounded-2xl p-8 text-center h-full group border border-wetland-sand/60 hover:border-wetland-sand shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)] hover:shadow-[0_16px_44px_rgba(35,50,40,0.12),0_4px_12px_rgba(35,50,40,0.07)] hover:-translate-y-1.5 transition-[transform,box-shadow,border-color] duration-500 ease-out">
                  {/* Step badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-wetland-moss flex items-center justify-center shadow-[0_4px_10px_rgba(91,109,62,0.35)]">
                    <span className="text-white text-xs font-bold">{method.step}</span>
                  </div>
                  {/* Icon wrapper */}
                  <div className="w-16 h-16 bg-gradient-to-br from-wetland-lagoon/15 to-wetland-moss/15 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-5 group-hover:scale-110 group-hover:from-wetland-lagoon/25 group-hover:to-wetland-moss/25 transition-[transform,background] duration-300 ease-out">
                    <Icon className="text-wetland-moss" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-wetland-ink mb-3">{method.title}</h3>
                  <p className="text-wetland-ink-soft text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </AnimatedWrapper>
            );
          })}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <AnimatedWrapper>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-gradient-to-br from-wetland-moss to-wetland-lagoon rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <FiHeart className="mx-auto mb-5 text-white/80" size={36} />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Quieres unirte a la misión?</h2>
              <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
                Buscamos voluntarios, investigadores y aliados que compartan nuestra pasión por la
                conservación de la Laguna Huacarpay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={ROUTES.CONTACT}
                  className="inline-flex items-center justify-center gap-2 bg-wetland-cta hover:bg-wetland-cta-dark text-wetland-ink font-semibold px-7 py-3 rounded-xl transition-colors duration-200"
                >
                  Contáctanos <FiArrowRight size={16} />
                </Link>
                <Link
                  to={ROUTES.CONSERVATION}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-xl border border-white/25 transition-colors duration-200"
                >
                  Ver el proyecto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
