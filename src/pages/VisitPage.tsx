import { FiMapPin, FiClock, FiInfo } from 'react-icons/fi';
import { Card, SectionHeader } from '@/shared/ui';
import { ContactForm, ContactInfo } from '@/features/contact';

export default function VisitPage() {
  return (
    <div className="min-h-screen pt-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Sección visita ─────────────────────────────────────────────────── */}
        <SectionHeader
          title="Visítanos"
          description="Planifica tu visita a la Laguna Huacarpay. Una experiencia inolvidable en contacto directo con la naturaleza andina."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-12">
          <Card className="hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <FiMapPin className="text-wetland-moss text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-wetland-ink">Ubicación y Acceso</h2>
            </div>
            <p className="text-wetland-ink-soft mb-4 leading-relaxed">
              La Laguna de Huacarpay está ubicada en el distrito de Lucre, a solo 30 km (45 minutos)
              al sur de la ciudad del Cusco, sobre los 3,020 m.s.n.m.
            </p>
            <div className="bg-wetland-mist/55 p-4 rounded-lg mt-4">
              <p className="text-sm text-wetland-ink-soft font-semibold">
                Tip: Puedes tomar transporte público desde la Av. de la Cultura en Cusco hacia Urcos
                y bajar en el paradero Huacarpay.
              </p>
            </div>
          </Card>

          <Card className="hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <FiClock className="text-wetland-lagoon text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-wetland-ink">Horarios y Clima</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiInfo className="text-wetland-lagoon mt-1 mr-3 flex-shrink-0" />
                <span className="text-wetland-ink-soft">
                  <strong>Horario ideal:</strong> De 6:00 AM a 9:00 AM para avistamiento de aves.
                </span>
              </li>
              <li className="flex items-start">
                <FiInfo className="text-wetland-lagoon mt-1 mr-3 flex-shrink-0" />
                <span className="text-wetland-ink-soft">
                  <strong>Temporada seca:</strong> Mayo a Octubre (Días soleados, noches frías).
                </span>
              </li>
              <li className="flex items-start">
                <FiInfo className="text-wetland-lagoon mt-1 mr-3 flex-shrink-0" />
                <span className="text-wetland-ink-soft">
                  <strong>Temporada de lluvias:</strong> Noviembre a Abril (El humedal alcanza su mayor esplendor verde).
                </span>
              </li>
            </ul>
          </Card>
        </div>

        {/* ── Divider ────────────────────────────────────────────────────────── */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-wetland-mist" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-wetland-ivory px-6 text-sm font-semibold uppercase tracking-widest text-wetland-ink-soft">
              ¿Tienes preguntas?
            </span>
          </div>
        </div>

        {/* ── Sección contacto ───────────────────────────────────────────────── */}
        <SectionHeader
          title="Contáctanos"
          description="Escríbenos para coordinar tu visita, resolver dudas o colaborar con la conservación de la laguna."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-16">
          <div className="space-y-8">
            <ContactInfo />

            <div className="bg-gradient-to-br from-wetland-lagoon to-wetland-moss rounded-xl w-full h-64 flex items-center justify-center text-wetland-foam">
              <div className="text-center">
                <FiMapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Mapa de ubicación</p>
                <p className="text-wetland-sand">Laguna Huacarpay, Lucre</p>
              </div>
            </div>
          </div>

          <div className="section-surface p-8">
            <h2 className="text-2xl font-bold mb-6 text-wetland-ink">Envíanos un mensaje</h2>
            <ContactForm subjectAsSelect />
          </div>
        </div>

      </div>
    </div>
  );
}
