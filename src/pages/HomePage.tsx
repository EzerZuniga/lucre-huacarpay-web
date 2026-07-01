import { type ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiShield, FiEye, FiBook, FiTarget, FiArrowRight,
  FiUsers, FiMapPin, FiHeart, FiAward,
  FiImage, FiCheckCircle, FiChevronDown, FiHelpCircle,
} from 'react-icons/fi';
import { ROUTES } from '@/app/routes';
import { TEAM_MEMBERS } from '@/entities/team';
import { GALLERY_ITEMS } from '@/entities/gallery';
import { HeroSection } from '@/widgets/hero';
import { useIntersectionObserver } from '@/shared/hooks';

// ── Constants ──────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: FiShield,
    title: 'Protección del Humedal',
    description: 'Conservación activa del ecosistema Ramsar y su biodiversidad única.',
    accentFrom: 'from-wetland-lagoon', accentTo: 'to-wetland-lagoon-dark',
    iconBg: 'bg-wetland-lagoon/10', iconText: 'text-wetland-lagoon',
  },
  {
    icon: FiEye,
    title: 'Biodiversidad Andina',
    description: 'Preservación de especies nativas de flora y fauna del ecosistema lacustre.',
    accentFrom: 'from-wetland-moss', accentTo: 'to-wetland-moss-dark',
    iconBg: 'bg-wetland-moss/10', iconText: 'text-wetland-moss',
  },
  {
    icon: FiBook,
    title: 'Educación Ambiental',
    description: 'Programas de concientización para visitantes y comunidades locales.',
    accentFrom: 'from-wetland-earth', accentTo: 'to-wetland-moss',
    iconBg: 'bg-wetland-earth/10', iconText: 'text-wetland-earth',
  },
  {
    icon: FiTarget,
    title: 'Turismo Sostenible',
    description: 'Visitas responsables que valoran y protegen el patrimonio natural andino.',
    accentFrom: 'from-wetland-cta', accentTo: 'to-wetland-earth',
    iconBg: 'bg-wetland-cta/10', iconText: 'text-wetland-cta',
  },
] as const;

const CONSERVATION_STATS = [
  { value: '124', unit: 'ha', label: 'Superficie protegida', icon: FiMapPin },
  { value: '40+', unit: '', label: 'Especies de aves', icon: FiEye },
  { value: '5', unit: '', label: 'Integrantes del equipo', icon: FiUsers },
  { value: '6+', unit: 'años', label: 'De trabajo activo', icon: FiHeart },
] as const;

const PROBLEMS = [
  'Contaminación por residuos sólidos en las orillas',
  'Pérdida de biodiversidad y especies nativas',
  'Falta de valorización del patrimonio natural',
  'Presión turística no regulada',
] as const;

type AreaKey = 'Coordinacion' | 'Tecnologia' | 'Finanzas' | 'Diseno' | 'Sostenibilidad';
const AREA_GRADIENT: Record<AreaKey, string> = {
  Coordinacion:   'from-wetland-moss to-wetland-lagoon',
  Tecnologia:     'from-wetland-lagoon to-wetland-moss',
  Finanzas:       'from-wetland-earth to-wetland-lagoon',
  Diseno:         'from-wetland-moss to-wetland-earth',
  Sostenibilidad: 'from-wetland-lagoon to-wetland-earth',
};

function getAvatarGradient(area?: string): string {
  return AREA_GRADIENT[area as AreaKey] ?? 'from-wetland-lagoon to-wetland-moss';
}

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

// ── Page ───────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectOverviewSection />
      <StatsSection />
      <TeamPreviewSection />
      <GalleryPreviewSection />
      <FaqSection />
    </main>
  );
}

// ── ProjectOverviewSection ─────────────────────────────────────────────────────

function ProjectOverviewSection() {
  return (
    <section id="proyecto" className="py-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedWrapper className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-wetland-lagoon/10 text-wetland-lagoon text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiShield size={12} />
            El Proyecto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            Proyecto de Conservación
          </h2>
          <p className="text-wetland-ink-soft max-w-2xl mx-auto leading-relaxed">
            Estrategias integrales para la protección y valorización del humedal Ramsar Laguna
            Huacarpay, asegurando su preservación para las futuras generaciones.
          </p>
        </AnimatedWrapper>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimatedWrapper key={f.title} delayClass={getDelay(i)}>
                <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden h-full border border-wetland-sand/60 hover:border-wetland-sand shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)] hover:shadow-[0_16px_44px_rgba(35,50,40,0.12),0_4px_12px_rgba(35,50,40,0.07)] transition-[box-shadow,border-color] duration-500 ease-out">
                  <div className={`h-[3px] w-full bg-gradient-to-r ${f.accentFrom} ${f.accentTo}`} />
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${f.iconBg}`}>
                      <Icon size={22} className={f.iconText} />
                    </div>
                    <h3 className="text-base font-bold text-wetland-ink mb-2">{f.title}</h3>
                    <p className="text-[0.82rem] text-wetland-ink-soft leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </AnimatedWrapper>
            );
          })}
        </div>

        {/* Problem / Solution */}
        <AnimatedWrapper delayClass="delay-[200ms]">
          <div className="bg-white rounded-2xl overflow-hidden border border-wetland-sand/60 shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)]">
            <div className="h-[3px] bg-gradient-to-r from-wetland-lagoon via-wetland-moss to-wetland-earth" />
            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Problems */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-wetland-earth/10 flex items-center justify-center">
                    <FiTarget size={16} className="text-wetland-earth" />
                  </div>
                  <h3 className="text-lg font-bold text-wetland-ink">Problemática identificada</h3>
                </div>
                <ul className="space-y-3">
                  {PROBLEMS.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-wetland-earth shrink-0" />
                      <span className="text-sm text-wetland-ink-soft leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-br from-wetland-lagoon to-wetland-moss rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <FiCheckCircle size={18} className="text-white/80" />
                  <h3 className="text-base font-bold">Solución integral</h3>
                </div>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  Implementamos un programa que combina protección ambiental, educación
                  comunitaria y turismo sostenible — un modelo replicable para humedales andinos.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['124 ha protegidas', '40+ especies', 'Sitio Ramsar'].map((tag) => (
                    <span key={tag} className="text-[0.68rem] font-bold px-2.5 py-1 rounded-full bg-white/15 border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper className="flex justify-center mt-10" delayClass="delay-[280ms]">
          <Link
            to={ROUTES.CONSERVATION}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-wetland-lagoon text-white font-semibold text-sm hover:bg-wetland-lagoon-dark transition-colors shadow-[0_4px_14px_rgba(47,120,152,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
          >
            Conocer el proyecto completo <FiArrowRight size={14} />
          </Link>
        </AnimatedWrapper>

      </div>
    </section>
  );
}

// ── StatsSection ───────────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <AnimatedWrapper>
      <section className="bg-wetland-ink py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {CONSERVATION_STATS.map(({ value, unit, label, icon: Icon }) => (
              <div key={label}>
                <Icon className="text-wetland-cta mx-auto mb-3" size={22} />
                <p className="text-3xl sm:text-4xl font-extrabold text-white">
                  {value}
                  {unit && <span className="text-lg font-semibold text-white/60 ml-1">{unit}</span>}
                </p>
                <p className="text-white/55 text-xs sm:text-sm mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}

// ── TeamPreviewSection ─────────────────────────────────────────────────────────

function TeamPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedWrapper className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-wetland-moss/10 text-wetland-moss text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiUsers size={12} />
            El Equipo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            Nuestro equipo
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto leading-relaxed">
            Profesionales comprometidos con la conservación y desarrollo sostenible de la Laguna Huacarpay.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {TEAM_MEMBERS.map((member, i) => {
            const gradient = getAvatarGradient(member.area);
            return (
              <AnimatedWrapper key={member.initials} delayClass={getDelay(i)}>
                <div className="flex flex-col items-center text-center bg-white rounded-2xl p-5 border border-wetland-sand/60 shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)] hover:shadow-[0_10px_30px_rgba(35,50,40,0.10),0_3px_8px_rgba(35,50,40,0.06)] hover:border-wetland-sand transition-[box-shadow,border-color] duration-300 ease-out">
                  <div className={`bg-gradient-to-br ${gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)] ring-[3px] ring-white`}>
                    <span className="text-white font-extrabold text-lg select-none">{member.initials}</span>
                  </div>
                  <h3 className="text-[0.8rem] font-bold text-wetland-ink leading-snug line-clamp-2 mb-1">{member.name}</h3>
                  <p className="text-[0.68rem] font-semibold text-wetland-lagoon uppercase tracking-wide">{member.role}</p>
                </div>
              </AnimatedWrapper>
            );
          })}
        </div>

        <AnimatedWrapper className="flex flex-col sm:flex-row justify-center gap-3" delayClass="delay-[320ms]">
          <Link
            to={ROUTES.TEAM}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-wetland-lagoon text-white font-semibold text-sm hover:bg-wetland-lagoon-dark transition-colors shadow-[0_4px_14px_rgba(47,120,152,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
          >
            Conoce a todo el equipo <FiArrowRight size={14} />
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-wetland-sand text-wetland-ink-soft font-semibold text-sm hover:border-wetland-lagoon/50 hover:text-wetland-lagoon transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
          >
            <FiAward size={14} /> Únete a nosotros
          </Link>
        </AnimatedWrapper>

      </div>
    </section>
  );
}

// ── GalleryPreviewSection ──────────────────────────────────────────────────────

function GalleryPreviewSection() {
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section className="py-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedWrapper className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-wetland-earth/10 text-wetland-earth text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiImage size={12} />
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            La laguna en imágenes
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto leading-relaxed">
            Descubre la belleza natural y biodiversidad de la Laguna Huacarpay.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {previewItems.map((item, i) => (
            <AnimatedWrapper key={item.id} delayClass={getDelay(i)}>
              <Link
                to={ROUTES.GALLERY}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-wetland-sand/60 hover:border-wetland-sand shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)] hover:shadow-[0_16px_44px_rgba(35,50,40,0.12),0_4px_12px_rgba(35,50,40,0.07)] hover:-translate-y-1.5 transition-[transform,box-shadow,border-color] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
                aria-label={item.title}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-wetland-lagoon/30 to-wetland-moss/30">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-3.5">
                  <h3 className="text-[0.82rem] font-bold text-wetland-ink leading-snug">{item.title}</h3>
                  <p className="text-[0.72rem] text-wetland-ink-soft mt-0.5 line-clamp-1">{item.description}</p>
                </div>
              </Link>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper className="flex justify-center" delayClass="delay-[280ms]">
          <Link
            to={ROUTES.GALLERY}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white border border-wetland-sand text-wetland-ink-soft font-semibold text-sm hover:border-wetland-earth/50 hover:text-wetland-earth shadow-[0_2px_8px_rgba(35,50,40,0.06)] hover:shadow-[0_6px_20px_rgba(35,50,40,0.10)] transition-[border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
          >
            <FiImage size={14} /> Ver galería completa
          </Link>
        </AnimatedWrapper>

      </div>
    </section>
  );
}

// ── FaqSection ─────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: '¿Cuánto cuesta la entrada a la Laguna Huacarpay?',
    answer: 'La entrada es muy accesible: adultos S/ 5, estudiantes S/ 2, niños S/ 1 y adultos mayores S/ 2. El ingreso se realiza en la caseta de control ubicada a orillas de la laguna.',
  },
  {
    question: '¿Cuál es el mejor horario para visitar?',
    answer: 'El horario de atención es de 6:00 AM a 6:00 PM todos los días. Para el avistamiento de aves, el mejor momento es entre las 6:00 AM y las 9:00 AM, cuando la actividad ornitológica es mayor.',
  },
  {
    question: '¿Cómo llego desde el centro de Cusco?',
    answer: 'En transporte público: toma un bus en la Av. de la Cultura con destino a Urcos e indícale al cobrador que bajas en el paradero "Huacarpay" (aprox. 45 min, S/ 3). En auto: sigue la Vía Expresa hacia el sur por la ruta Cusco–Sicuani; a los 30 km verás las señales a la laguna.',
  },
  {
    question: '¿Qué actividades se pueden realizar?',
    answer: 'Puedes disfrutar de avistamiento de aves (más de 40 especies), caminatas por los senderos del humedal, fotografía de naturaleza, kayak en la laguna y visitas guiadas educativas sobre el ecosistema Ramsar.',
  },
  {
    question: '¿En qué época del año es mejor visitar?',
    answer: 'La temporada seca (mayo–octubre) ofrece días soleados y es ideal para senderismo y fotografía. La temporada húmeda (noviembre–abril) es cuando el humedal alcanza su mayor esplendor verde y biodiversidad, aunque puede haber lluvias por las tardes.',
  },
  {
    question: '¿Puedo llevar niños o adultos mayores?',
    answer: 'Sí, la laguna es apta para toda la familia. Los senderos principales son accesibles y planos. Recomendamos ropa abrigadora (la temperatura puede bajar a 8°C), protección solar, agua y snacks. Los niños y adultos mayores tienen tarifas especiales de ingreso.',
  },
] as const;

function FaqItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={[
      'bg-white rounded-2xl overflow-hidden border transition-[border-color,box-shadow] duration-300',
      isOpen
        ? 'border-wetland-lagoon/40 shadow-[0_4px_20px_rgba(47,120,152,0.10)]'
        : 'border-wetland-sand/60 shadow-[0_2px_8px_rgba(35,50,40,0.05)]',
    ].join(' ')}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon focus-visible:ring-inset"
      >
        <span className="text-[0.9rem] font-bold text-wetland-ink leading-snug">{question}</span>
        <FiChevronDown
          size={18}
          className={`shrink-0 text-wetland-lagoon transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5">
          <div className="h-px bg-gradient-to-r from-transparent via-wetland-sand to-transparent mb-4" />
          <p className="text-sm text-wetland-ink-soft leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-20 bg-wetland-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedWrapper className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-wetland-lagoon/10 text-wetland-lagoon text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiHelpCircle size={12} />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto leading-relaxed">
            Todo lo que necesitas saber antes de planificar tu visita a la Laguna Huacarpay.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper className="flex flex-col gap-3" delayClass="delay-[100ms]">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </AnimatedWrapper>

        <AnimatedWrapper className="flex justify-center mt-10" delayClass="delay-[200ms]">
          <Link
            to={ROUTES.VISIT_US}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-wetland-lagoon text-white font-semibold text-sm hover:bg-wetland-lagoon-dark transition-colors shadow-[0_4px_14px_rgba(47,120,152,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
          >
            Planifica tu visita <FiArrowRight size={14} />
          </Link>
        </AnimatedWrapper>

      </div>
    </section>
  );
}
