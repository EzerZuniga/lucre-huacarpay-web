import { useState, useEffect } from 'react';
import { ROUTES } from '@/app/routes';
import { Button } from '@/shared/ui';

const HERO_IMAGES = [
  '/lago3.png',
  '/lago2.png',
  '/lago5.png'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={img}
            alt={`Vista panorámica de la Laguna Huacarpay ${idx + 1}`}
            className={`h-full w-full object-cover object-center transition-transform duration-[10000ms] ease-linear ${
              idx === currentImageIndex ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Elegant Gradients for Centered Content */}
      <div className="absolute inset-0 z-10 bg-wetland-ink/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-wetland-ink/90 via-transparent to-wetland-ink/40" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(35,50,40,0.4)_100%)]" />

      <div className="relative z-20 w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          
          <h1 
            className="mb-4 sm:mb-6 text-4xl font-extrabold leading-tight tracking-tight text-wetland-foam drop-shadow-lg sm:text-5xl md:text-6xl animate-slide-up"
            style={{ animationFillMode: 'both' }}
          >
            Laguna <span className="text-wetland-sand">Huacarpay</span>
          </h1>

          <p 
            className="mb-8 sm:mb-10 max-w-2xl text-base text-balance leading-relaxed text-wetland-foam/95 drop-shadow-md sm:text-lg md:text-xl animate-slide-up"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            Humedal Ramsar de importancia internacional en el Valle Sur del Cusco. Santuario de
            biodiversidad andina y patrimonio natural del Perú.
          </p>

          <div 
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <Button
              to={ROUTES.VISIT_US}
              variant="primary"
              className="w-full max-w-[280px] sm:max-w-none sm:w-[290px] md:w-[310px] text-sm font-semibold sm:py-3.5 sm:text-base shadow-lg transition-transform hover:-translate-y-1"
            >
              Descubrir la Laguna
            </Button>
            <Button
              to={ROUTES.BIODIVERSITY}
              variant="outline"
              className="w-full max-w-[280px] sm:max-w-none sm:w-[290px] md:w-[310px] text-sm font-semibold sm:py-3.5 sm:text-base !border-wetland-foam bg-wetland-ink/40 !text-wetland-foam backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1 hover:!bg-wetland-foam hover:!text-wetland-ink"
            >
              Conocer Biodiversidad
            </Button>
          </div>

          <HeroStats />
        </div>
      </div>

    </section>
  );
}

// ─── Sub-component ───────────────────────────────────────────────────────────

const STATS = [
  { value: '40+', label: 'Especies de Aves' },
  { value: '124', label: 'Hectáreas' },
  { value: '3050', label: 'msnm' },
] as const;

function HeroStats() {
  return (
    <div 
      className="mt-10 sm:mt-12 flex w-full flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-16 animate-slide-up"
      style={{ animationDelay: '600ms', animationFillMode: 'both' }}
    >
      {STATS.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center text-center">
          <div className="text-3xl font-bold tracking-tight text-wetland-foam drop-shadow-md sm:text-4xl md:text-5xl">
            {stat.value}
          </div>
          <div className="mt-1 text-xs font-semibold tracking-[0.2em] text-wetland-sand drop-shadow-sm uppercase sm:text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

