import { ROUTES } from '@/app/routes';
import { Button } from '@/shared/ui';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="/laguna.png"
        alt="Vista panoramica de la Laguna Huacarpay"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-wetland-ink/88 via-wetland-ink/68 to-wetland-ink/52" />
      <div className="absolute inset-0 bg-gradient-to-b from-wetland-ink/72 via-wetland-ink/25 to-wetland-ink/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(232,221,200,0.2),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(47,120,152,0.28),transparent_42%)]" />

      <div className="relative z-10 w-full py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-wetland-foam drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)] sm:text-6xl lg:text-7xl">
              Laguna <span className="text-wetland-sand">Huacarpay</span>
            </h1>

            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-wetland-foam/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-2xl">
              Humedal Ramsar de importancia internacional en el Valle Sur del Cusco. Santuario de
              biodiversidad andina y patrimonio natural del Perú.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                to={ROUTES.VISIT_US}
                variant="primary"
                className="px-8 py-4 text-lg shadow-xl shadow-black/45"
              >
                Descubrir la Laguna
              </Button>
              <Button
                to={ROUTES.BIODIVERSITY}
                variant="outline"
                className="border-wetland-foam bg-wetland-ink/45 px-8 py-4 text-lg text-wetland-foam backdrop-blur-sm hover:bg-wetland-foam hover:text-wetland-ink shadow-xl shadow-black/40"
              >
                Conocer Biodiversidad
              </Button>
            </div>

            <HeroStats />
          </div>
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
    <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="mb-1 text-2xl font-bold text-wetland-foam drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] md:text-3xl">
            {stat.value}
          </div>
          <div className="text-sm text-wetland-sand drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
