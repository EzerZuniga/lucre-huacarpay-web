import { FiShield, FiEye, FiBook, FiTarget, FiMapPin } from 'react-icons/fi';
import { ROUTES } from '@/app/routes';
import { Button, Card, SectionHeader } from '@/shared/ui';
import { TEAM_MEMBERS } from '@/entities/team';
import { GALLERY_ITEMS } from '@/entities/gallery';
import { ContactForm, ContactInfo } from '@/features/contact';
import { HeroSection } from '@/widgets/hero';

// ─── Section Data ────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: FiShield,
    title: 'Protección del Humedal',
    description: 'Conservación activa del ecosistema Ramsar y su biodiversidad única.',
    colorClass: 'text-wetland-lagoon',
  },
  {
    icon: FiEye,
    title: 'Biodiversidad Andina',
    description: 'Preservación de especies nativas de flora y fauna del ecosistema lacustre.',
    colorClass: 'text-wetland-moss',
  },
  {
    icon: FiBook,
    title: 'Educación Ambiental',
    description: 'Programas de concientización para visitantes y comunidades locales.',
    colorClass: 'text-wetland-earth',
  },
  {
    icon: FiTarget,
    title: 'Turismo Sostenible',
    description:
      'Promoción de visitas responsables que valoran y protegen el patrimonio natural.',
    colorClass: 'text-wetland-lagoon-dark',
  },
] as const;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectOverviewSection />
      <TeamPreviewSection />
      <GalleryPreviewSection />
      <ContactSection />
    </main>
  );
}

// ─── Proyecto Section ────────────────────────────────────────────────────────

function ProjectOverviewSection() {
  return (
    <section id="proyecto" className="py-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proyecto de Conservación"
          description="Estrategias integrales para la protección y valorización del humedal Ramsar Laguna Huacarpay, asegurando su preservación para las futuras generaciones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="h-full text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <Icon size={36} className={feature.colorClass} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-wetland-ink">{feature.title}</h3>
                <p className="text-wetland-ink-soft leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Problemática y Solución */}
        <div className="section-surface p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-wetland-ink">
                Estrategia de Conservación
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-wetland-moss flex items-center">
                    <FiTarget className="mr-2" />
                    Problemática Identificada:
                  </h4>
                  <ul className="list-disc pl-5 mt-2 text-wetland-ink-soft space-y-2">
                    <li>Contaminación por residuos sólidos en las orillas</li>
                    <li>Pérdida de biodiversidad y especies nativas</li>
                    <li>Falta de valorización del patrimonio natural</li>
                    <li>Presión turística no regulada</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-wetland-lagoon flex items-center">
                    <FiEye className="mr-2" />
                    Solución Integral:
                  </h4>
                  <p className="mt-2 text-wetland-ink-soft leading-relaxed">
                    Implementación de un programa de conservación que combina protección
                    ambiental, educación comunitaria y turismo sostenible, creando un modelo
                    replicable para humedales andinos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-wetland-lagoon to-wetland-moss rounded-2xl p-8 text-wetland-foam h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h4 className="text-2xl font-bold mb-3">Humedal Protegido</h4>
                <p className="text-wetland-sand leading-relaxed">
                  Sitio Ramsar de importancia internacional
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-wetland-foam/20 px-3 py-1 rounded-full text-sm">
                    124 hectáreas
                  </span>
                  <span className="bg-wetland-foam/20 px-3 py-1 rounded-full text-sm">
                    40+ especies
                  </span>
                  <span className="bg-wetland-foam/20 px-3 py-1 rounded-full text-sm">
                    Conservación activa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button to={ROUTES.VISIT_US} variant="primary" className="px-8 py-4 text-lg">
            Conocer el proyecto completo
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Equipo Section ──────────────────────────────────────────────────────────

function TeamPreviewSection() {
  return (
    <section id="equipo" className="py-20 bg-wetland-mist/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestro Equipo"
          description="Profesionales comprometidos con la conservación y desarrollo sostenible de la Laguna Huacarpay."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Card
              key={member.initials}
              className="text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-wetland-lagoon to-wetland-moss rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-wetland-foam font-bold text-lg">{member.initials}</span>
              </div>
              <h3 className="text-lg font-bold text-wetland-ink mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="text-wetland-lagoon font-medium text-sm">{member.role}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary" to={ROUTES.TEAM} className="px-6 py-3">
            Conoce a todo el equipo
          </Button>
          <Button variant="outline" to={ROUTES.CONTACT} className="px-6 py-3">
            Únete a nosotros
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Galería Section ─────────────────────────────────────────────────────────

function GalleryPreviewSection() {
  return (
    <section id="galeria" className="py-20 bg-wetland-foam">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Galería"
          description="Descubre la belleza natural y biodiversidad de la Laguna Huacarpay a través de nuestra colección de imágenes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {GALLERY_ITEMS.slice(0, 4).map((item) => (
            <Card
              key={item.id}
              className="hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              title={item.title}
              description={item.description}
            >
              <div className="aspect-square bg-gradient-to-br from-wetland-mist to-wetland-sand rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-3xl mb-2"></div>
                  <p className="text-wetland-ink-soft text-sm">Imagen {item.id}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-medium px-2 py-1 bg-wetland-mist text-wetland-ink-soft rounded-full capitalize">
                  {item.category}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button to={ROUTES.GALLERY} variant="outline" className="px-8 py-3">
            Ver galería completa
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Contacto Section ────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-wetland-mist/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contáctanos"
          description="¿Tienes preguntas sobre la Laguna Huacarpay, quieres visitarnos o colaborar con la conservación? Escríbenos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <ContactInfo />

            <div className="bg-gradient-to-br from-wetland-lagoon to-wetland-moss rounded-xl p-8 text-wetland-foam">
              <div className="text-center">
                <FiMapPin size={48} className="mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Ubicación de la Laguna</h4>
                <p className="text-wetland-sand mb-4">
                  A 45 minutos del centro de Cusco
                  <br />
                  Acceso por carretera hacia el Valle Sur
                </p>
                <Button
                  variant="outline"
                  className="border-wetland-foam text-wetland-foam hover:bg-wetland-foam hover:text-wetland-ink"
                  to={ROUTES.VISIT_US}
                >
                  Cómo llegar
                </Button>
              </div>
            </div>

            <div className="section-surface p-6">
              <h4 className="font-bold text-lg text-wetland-ink mb-4">Horarios de atención</h4>
              <div className="space-y-2 text-wetland-ink-soft">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
