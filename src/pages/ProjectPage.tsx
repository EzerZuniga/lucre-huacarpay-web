import { useState, useEffect } from 'react';
import type { ReactNode, ElementType } from 'react';
import {
  FiTarget,
  FiUsers,
  FiBarChart2,
  FiCheckCircle,
  FiShield,
  FiMapPin,
  FiFeather,
  FiTrash2,
  FiBookOpen,
  FiArrowRight,
  FiAlertCircle,
  FiLayers,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/shared/hooks';
import {
  OBJECTIVES,
  CONSERVATION_ACTIONS,
  IMPACT_INDICATORS,
  PROBLEM_STRATEGIES,
} from '@/entities/project';
import { ROUTES } from '@/app/routes';

// ── Constants ─────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: '2', label: 'Proyectos activos' },
  { value: '+6', label: 'Años de trabajo' },
  { value: '500 ha', label: 'Área protegida' },
] as const;

interface ObjectiveConfig {
  icon: ElementType;
  colorClass: string;
  bgClass: string;
}

const OBJECTIVE_CONFIG: readonly ObjectiveConfig[] = [
  { icon: FiShield,   colorClass: 'text-wetland-moss',   bgClass: 'bg-wetland-moss/10'   },
  { icon: FiMapPin,   colorClass: 'text-wetland-lagoon', bgClass: 'bg-wetland-lagoon/10' },
  { icon: FiUsers,    colorClass: 'text-wetland-earth',  bgClass: 'bg-wetland-earth/10'  },
  { icon: FiFeather,  colorClass: 'text-wetland-moss',   bgClass: 'bg-wetland-moss/10'   },
  { icon: FiTrash2,   colorClass: 'text-wetland-lagoon', bgClass: 'bg-wetland-lagoon/10' },
  { icon: FiBookOpen, colorClass: 'text-wetland-earth',  bgClass: 'bg-wetland-earth/10'  },
] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

function calcProgress(current: string, target: string): number {
  const ratio = parseFloat(current) / parseFloat(target);
  return Math.min(isNaN(ratio) ? 0 : ratio * 100, 100);
}

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

// ── AnimatedWrapper ───────────────────────────────────────────────────────────

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

// ── ProgressBar ───────────────────────────────────────────────────────────────

interface ProgressBarProps {
  current: string;
  target: string;
}

function ProgressBar({ current, target }: ProgressBarProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  const pct = calcProgress(current, target);
  return (
    <div ref={ref} className="w-full overflow-hidden rounded-full bg-wetland-sand h-2">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-wetland-lagoon to-wetland-moss transition-all duration-1000 ease-out delay-[150ms]"
        style={{ width: isVisible ? `${pct}%` : '0%' }}
      />
    </div>
  );
}

// ── ProjectPage ───────────────────────────────────────────────────────────────

export default function ProjectPage() {
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
    <div className="min-h-screen bg-wetland-ivory">

      {/* ── Mini Hero ───────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[55vh] items-center overflow-hidden"
        aria-label="Proyecto de conservación"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
            alt=""
            role="presentation"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wetland-ink/80 via-wetland-ink/55 to-wetland-ink/88" />
        </div>

        {/* Glow */}
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-wetland-moss/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-wetland-lagoon/15 blur-3xl"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div className={`mb-4 flex justify-center sm:mb-5 ${fi()}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-wetland-moss/40 bg-wetland-moss/25 px-3.5 py-1 text-xs font-medium text-wetland-sand backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
              <FiLayers size={12} aria-hidden="true" />
              Humedal Ramsar · Plan de Acción 2024–2030
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`mb-4 text-3xl font-bold leading-tight text-white sm:mb-5 sm:text-4xl lg:text-5xl ${fi('delay-[150ms]')}`}
          >
            Proyecto de{' '}
            <span className="text-wetland-cta">Conservación</span>
          </h1>

          {/* Description */}
          <p
            className={`mx-auto mb-8 max-w-xl text-base leading-relaxed text-wetland-sand/75 sm:mb-10 sm:max-w-2xl sm:text-lg ${fi('delay-[300ms]')}`}
          >
            Estrategias integrales para la protección y valorización del humedal Ramsar,
            articulando comunidad, ciencia y naturaleza.
          </p>

          {/* Stats */}
          <div
            className={`flex flex-wrap items-center justify-center gap-8 sm:gap-14 ${fi('delay-[450ms]')}`}
          >
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-2xl font-bold text-wetland-cta sm:text-3xl">
                  {value}
                </p>
                <p className="mt-0.5 text-xs text-wetland-sand/55">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute -bottom-px left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C360,60 1080,0 1440,40 L1440,61 L0,61 Z" fill="#F8F5EE" />
          </svg>
        </div>
      </section>

      {/* ── Objectives ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-wetland-ink mb-4 sm:text-4xl">
                Objetivos del Proyecto
              </h2>
              <div className="section-divider" />
              <p className="text-wetland-ink-soft max-w-2xl mx-auto mt-4">
                Seis líneas estratégicas que guían nuestro trabajo de conservación y
                desarrollo sostenible en la cuenca de la Laguna Huacarpay.
              </p>
            </div>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OBJECTIVES.map((objective, i) => {
              const { icon: Icon, colorClass, bgClass } = OBJECTIVE_CONFIG[i];
              return (
                <AnimatedWrapper key={objective} delayClass={getDelay(i)}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-wetland-sand bg-wetland-foam p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                    <div
                      className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${bgClass}`}
                    >
                      <Icon size={20} className={colorClass} aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-relaxed text-wetland-ink-soft">{objective}</p>
                  </div>
                </AnimatedWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Conservation Actions + Impact Indicators ────────────────────── */}
      <section className="bg-wetland-mist py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-start">

            {/* Actions — 3 cols */}
            <div className="lg:col-span-3">
              <AnimatedWrapper>
                <div className="mb-8">
                  <h2 className="flex items-center gap-3 text-2xl font-bold text-wetland-ink sm:text-3xl">
                    <FiUsers
                      className="flex-shrink-0 text-wetland-lagoon"
                      size={26}
                      aria-hidden="true"
                    />
                    Acciones de Conservación
                  </h2>
                  <div className="mt-3 h-1 w-12 rounded bg-wetland-lagoon" />
                </div>
              </AnimatedWrapper>

              <div className="space-y-4">
                {CONSERVATION_ACTIONS.map((action, i) => (
                  <AnimatedWrapper key={action} delayClass={getDelay(i)}>
                    <div className="flex items-start gap-4 rounded-xl border border-wetland-sand/60 bg-wetland-foam p-4 shadow-sm">
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-wetland-lagoon text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-wetland-ink-soft">
                        {action}
                      </span>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>

            {/* Indicators — 2 cols */}
            <div className="lg:col-span-2">
              <AnimatedWrapper>
                <div className="mb-8">
                  <h2 className="flex items-center gap-3 text-2xl font-bold text-wetland-ink sm:text-3xl">
                    <FiBarChart2
                      className="flex-shrink-0 text-wetland-earth"
                      size={26}
                      aria-hidden="true"
                    />
                    Indicadores
                  </h2>
                  <div className="mt-3 h-1 w-12 rounded bg-wetland-earth" />
                </div>
              </AnimatedWrapper>

              <div className="space-y-5">
                {IMPACT_INDICATORS.map((indicator, i) => (
                  <AnimatedWrapper key={indicator.metric} delayClass={getDelay(i)}>
                    <div className="rounded-xl border border-wetland-sand/60 bg-wetland-foam p-5 shadow-sm">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <p className="text-sm font-medium leading-snug text-wetland-ink">
                          {indicator.metric}
                        </p>
                        <span className="whitespace-nowrap text-xs font-bold text-wetland-earth">
                          {indicator.current}
                          <span className="font-normal text-wetland-ink-soft">
                            {' '}/ {indicator.target}
                          </span>
                        </span>
                      </div>
                      <ProgressBar current={indicator.current} target={indicator.target} />
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problems & Strategies ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-wetland-ink mb-4 sm:text-4xl">
                Problemática y Estrategias
              </h2>
              <div className="section-divider" />
              <p className="text-wetland-ink-soft max-w-2xl mx-auto mt-4">
                Identificamos los principales desafíos y diseñamos estrategias
                concretas para superarlos con impacto medible.
              </p>
            </div>
          </AnimatedWrapper>

          <div className="space-y-6">
            {PROBLEM_STRATEGIES.map((row, i) => (
              <AnimatedWrapper key={row.problem} delayClass={getDelay(i)}>
                <div className="overflow-hidden rounded-2xl border border-wetland-sand bg-wetland-foam shadow-sm">
                  {/* Header */}
                  <div className="flex items-center gap-3 bg-wetland-ink px-6 py-4">
                    <FiAlertCircle
                      size={18}
                      className="flex-shrink-0 text-wetland-cta"
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-bold text-wetland-foam sm:text-lg">
                      {row.problem}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="grid grid-cols-1 divide-y divide-wetland-sand sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                    {/* Data */}
                    <div className="p-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-wetland-earth">
                        Datos relevantes
                      </p>
                      <ul className="space-y-2.5">
                        {row.data.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-wetland-earth"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed text-wetland-ink-soft">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Strategies */}
                    <div className="p-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-wetland-moss">
                        Estrategias de solución
                      </p>
                      <ul className="space-y-2.5">
                        {row.strategies.map((strategy) => (
                          <li key={strategy} className="flex items-start gap-2.5">
                            <FiCheckCircle
                              size={15}
                              className="mt-0.5 flex-shrink-0 text-wetland-moss"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed text-wetland-ink-soft">
                              {strategy}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedWrapper>
            <div className="rounded-3xl bg-wetland-moss p-10 text-center sm:p-14">
              <FiTarget
                size={36}
                className="mx-auto mb-4 text-wetland-cta"
                aria-hidden="true"
              />
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                ¿Quieres ser parte del cambio?
              </h2>
              <p className="mx-auto mb-8 max-w-xl leading-relaxed text-wetland-sand/75">
                Únete a nuestros programas de voluntariado, adopta una especie o colabora
                con la conservación de la Laguna Huacarpay.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to={ROUTES.CONTACT}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-8 sm:py-3.5"
                >
                  Ser Voluntario
                </Link>
                <Link
                  to={ROUTES.CONTACT}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wetland-cta px-7 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-wetland-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wetland-cta sm:w-auto sm:px-8 sm:py-3.5"
                >
                  Colaborar ahora
                  <FiArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}
