import { useState, useEffect, type ReactNode, type ElementType } from 'react';
import {
  FiCamera,
  FiImage,
  FiGrid,
  FiSun,
  FiFeather,
  FiDroplet,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiEye,
} from 'react-icons/fi';
import { useIntersectionObserver } from '@/shared/hooks';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/entities/gallery';
import type { GalleryItem } from '@/entities/gallery';

const PAGE_SIZE = 8;

// ── Category config ────────────────────────────────────────────────────────────

type CategoryId = 'all' | 'paisaje' | 'fauna' | 'flora';

interface CategoryConfig {
  icon: ElementType;
  gradient: string;
  badge: string;
}

const CATEGORY_CONFIG: Record<CategoryId, CategoryConfig> = {
  all:     { icon: FiGrid,    gradient: 'from-wetland-lagoon to-wetland-moss',      badge: 'bg-wetland-lagoon/10 text-wetland-lagoon ring-wetland-lagoon/20' },
  paisaje: { icon: FiSun,     gradient: 'from-wetland-lagoon to-wetland-lagoon-dark', badge: 'bg-wetland-lagoon/10 text-wetland-lagoon ring-wetland-lagoon/20' },
  fauna:   { icon: FiFeather, gradient: 'from-wetland-moss to-wetland-moss-dark',   badge: 'bg-wetland-moss/10 text-wetland-moss ring-wetland-moss/20' },
  flora:   { icon: FiDroplet, gradient: 'from-wetland-earth to-wetland-moss',       badge: 'bg-wetland-earth/10 text-wetland-earth ring-wetland-earth/20' },
};

function getCategoryConfig(id: string): CategoryConfig {
  return CATEGORY_CONFIG[id as CategoryId] ?? CATEGORY_CONFIG.all;
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function getDelay(i: number): string {
  const classes = ['', 'delay-[80ms]', 'delay-[160ms]', 'delay-[240ms]', 'delay-[320ms]', 'delay-[400ms]', 'delay-[480ms]', 'delay-[560ms]'];
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

// ── GalleryCard ────────────────────────────────────────────────────────────────

function GalleryCard({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: (id: number) => void }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  const cfg = getCategoryConfig(item.category);
  const categoryLabel = GALLERY_CATEGORIES.find((c) => c.id === item.category)?.name ?? '';

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={`Ver ${item.title}`}
      onClick={() => onOpen(item.id)}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(item.id)}
      className={[
        'group relative flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer',
        'border border-wetland-sand/60 hover:border-wetland-sand',
        'shadow-[0_2px_8px_rgba(35,50,40,0.06),0_1px_2px_rgba(35,50,40,0.04)]',
        'hover:shadow-[0_20px_48px_rgba(35,50,40,0.13),0_6px_16px_rgba(35,50,40,0.07)]',
        'hover:-translate-y-2',
        'transition-[transform,box-shadow,border-color,opacity] duration-500 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon',
        getDelay(index % 8),
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ].join(' ')}
    >
      {/* ── Image area ── */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${cfg.gradient} overflow-hidden`}>
        {/* Real image (gradient is fallback behind it) */}
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 z-10" />

        {/* Eye on hover */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
            <FiEye size={18} className="text-white" />
          </div>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 z-20 inline-flex items-center text-[0.62rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white/90 border border-white/15">
          {categoryLabel}
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-wetland-ink leading-snug mb-1">{item.title}</h3>
        <p className="text-[0.78rem] text-wetland-ink-soft leading-relaxed line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
}

// ── Lightbox ───────────────────────────────────────────────────────────────────

function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }: {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    if (!item) return undefined;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  const cfg = getCategoryConfig(item.category);
  const categoryLabel = GALLERY_CATEGORIES.find((c) => c.id === item.category)?.name ?? '';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col border border-wetland-sand/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <FiX size={15} />
        </button>

        {/* Image */}
        <div className={`relative aspect-video bg-gradient-to-br ${cfg.gradient} overflow-hidden shrink-0`}>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FiChevronLeft size={18} />
            </button>
          )}
          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FiChevronRight size={18} />
            </button>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 className="text-lg font-bold text-wetland-ink leading-snug">{item.title}</h2>
            <span className={`inline-flex items-center text-[0.65rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0 ring-1 ring-inset ${cfg.badge}`}>
              {categoryLabel}
            </span>
          </div>
          <p className="text-wetland-ink-soft text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: '8+', label: 'Fotografías' },
  { value: '3', label: 'Categorías' },
  { value: '1', label: 'Ecosistema' },
] as const;

function HeroGallery() {
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
            'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wetland-ink/80 via-wetland-ink/65 to-wetland-ink/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 ${fi(getDelay(0))}`}>
          <FiCamera size={13} />
          Galería
        </div>

        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 ${fi(getDelay(1))}`}>
          Galería{' '}
          <span className="text-wetland-cta">Fotográfica</span>
        </h1>

        <p className={`text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${fi(getDelay(2))}`}>
          Descubre la belleza natural y biodiversidad de la Laguna Huacarpay a través de nuestra
          colección de imágenes.
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
            href="#galeria"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Ver galería</span>
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

// ── GalleryPage ────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const allFiltered =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = showAll ? allFiltered : allFiltered.slice(0, PAGE_SIZE);
  const hasMore = !showAll && allFiltered.length > PAGE_SIZE;

  const selectedIndex = allFiltered.findIndex((item) => item.id === selectedId);
  const selectedItem = selectedIndex !== -1 ? (allFiltered[selectedIndex] ?? null) : null;

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowAll(false);
    setSelectedId(null);
  };

  const handlePrev = () => {
    if (selectedIndex > 0) setSelectedId(allFiltered[selectedIndex - 1]!.id);
  };

  const handleNext = () => {
    if (selectedIndex < allFiltered.length - 1) setSelectedId(allFiltered[selectedIndex + 1]!.id);
  };

  return (
    <div className="min-h-screen bg-wetland-ivory">
      <HeroGallery />

      {/* ── Gallery section ── */}
      <section id="galeria" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Heading */}
        <AnimatedWrapper className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-wetland-lagoon/10 text-wetland-lagoon text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FiImage size={12} />
            Colección
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-wetland-ink mb-4">
            Explora la naturaleza
          </h2>
          <p className="text-wetland-ink-soft max-w-xl mx-auto leading-relaxed">
            Cada imagen captura un momento único del humedal Ramsar Laguna Huacarpay.
          </p>
        </AnimatedWrapper>

        {/* Filters */}
        <AnimatedWrapper className="flex flex-wrap justify-center gap-2.5 mb-12" delayClass="delay-[100ms]">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={[
                  'px-5 py-2 rounded-full text-sm font-semibold border',
                  'transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon',
                  isActive
                    ? 'bg-wetland-lagoon text-white border-wetland-lagoon shadow-[0_2px_10px_rgba(47,120,152,0.30)]'
                    : 'bg-white text-wetland-ink-soft border-wetland-sand hover:border-wetland-lagoon/50 hover:text-wetland-lagoon',
                ].join(' ')}
              >
                {category.name}
              </button>
            );
          })}
        </AnimatedWrapper>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} onOpen={setSelectedId} />
          ))}
        </div>

        {/* Empty state */}
        {displayedItems.length === 0 && (
          <div className="text-center py-20">
            <FiCamera className="mx-auto mb-4 text-wetland-sand" size={40} />
            <p className="text-wetland-ink-soft font-medium">No hay imágenes en esta categoría.</p>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <AnimatedWrapper className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white border border-wetland-sand text-wetland-ink-soft font-semibold text-sm hover:border-wetland-lagoon/50 hover:text-wetland-lagoon shadow-[0_2px_8px_rgba(35,50,40,0.06)] hover:shadow-[0_6px_20px_rgba(35,50,40,0.10)] transition-[border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wetland-lagoon"
            >
              <FiGrid size={14} />
              Ver todas las imágenes
            </button>
          </AnimatedWrapper>
        )}
      </section>

      {/* ── Lightbox ── */}
      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedId(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedIndex > 0}
        hasNext={selectedIndex < allFiltered.length - 1}
      />
    </div>
  );
}

