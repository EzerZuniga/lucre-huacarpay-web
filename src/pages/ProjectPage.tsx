import { FiCheckCircle, FiBarChart2, FiTarget, FiUsers } from 'react-icons/fi';
import { Button, Card, SectionHeader } from '@/shared/ui';
import { ROUTES } from '@/app/routes';

// ─── Data ────────────────────────────────────────────────────────────────────

const OBJECTIVES = [
  'Conservar y proteger el ecosistema del humedal Ramsar',
  'Promover el turismo ecológico responsable en la laguna',
  'Fomentar la participación comunitaria en actividades de conservación',
  'Incrementar la biodiversidad con especies nativas',
  'Reducir la contaminación y residuos en el área protegida',
  'Educar a visitantes sobre la importancia del ecosistema',
] as const;

const CONSERVATION_ACTIONS = [
  'Reforestación con especies nativas (totora, qantu, mutuy)',
  'Instalación de señalética educativa y informativa',
  'Programas de limpieza y mantenimiento periódico',
  'Monitoreo constante de especies de flora y fauna',
  'Control de especies invasoras',
  'Restauración de áreas degradadas',
] as const;

interface ImpactIndicator {
  readonly metric: string;
  readonly target: string;
  readonly current: string;
}

const IMPACT_INDICATORS: readonly ImpactIndicator[] = [
  { metric: 'Reducción de residuos sólidos', target: '60%', current: '45%' },
  { metric: 'Incremento de visitantes responsables', target: '200%', current: '150%' },
  { metric: 'Especies de aves monitoreadas', target: '40+', current: '35+' },
  { metric: 'Área reforestada (hectáreas)', target: '5', current: '3.2' },
  { metric: 'Participación comunitaria', target: '80%', current: '65%' },
] as const;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProjectPage() {
  return (
    <div className="min-h-screen pt-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Proyecto de Conservación"
          description="Estrategias integrales para la protección y valorización del humedal Ramsar Laguna Huacarpay."
        />

        {/* Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <FiTarget className="text-wetland-moss text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-wetland-ink">Objetivos del Proyecto</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OBJECTIVES.map((objective, index) => (
                <div key={index} className="flex items-start p-4 bg-wetland-mist/55 rounded-lg">
                  <FiCheckCircle
                    className="text-wetland-moss mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-wetland-ink-soft">{objective}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Conservation Actions & Indicators */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <FiUsers className="text-wetland-lagoon text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-wetland-ink">Acciones de Conservación</h2>
            </div>

            <ul className="space-y-3">
              {CONSERVATION_ACTIONS.map((action, index) => (
                <li key={index} className="flex items-start">
                  <FiCheckCircle
                    className="text-wetland-lagoon mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-wetland-ink-soft">{action}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="flex items-center mb-6">
              <FiBarChart2 className="text-wetland-earth text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-wetland-ink">Indicadores de Impacto</h2>
            </div>

            <div className="space-y-4">
              {IMPACT_INDICATORS.map((indicator, index) => (
                <div
                  key={index}
                  className="bg-wetland-foam p-4 rounded-lg border border-wetland-sand"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-wetland-ink-soft">
                      {indicator.metric}
                    </span>
                    <span className="text-sm font-bold text-wetland-earth">
                      {indicator.current} / {indicator.target}
                    </span>
                  </div>
                  <div className="w-full bg-wetland-sand rounded-full h-2">
                    <div
                      className="bg-wetland-earth h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(parseFloat(indicator.current) / parseFloat(indicator.target)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Problems & Strategies Table */}
        <Card className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-wetland-ink">Problemática y Estrategias</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-wetland-foam rounded-lg overflow-hidden">
              <thead className="bg-wetland-ink text-wetland-foam">
                <tr>
                  <th className="py-4 px-4 text-left font-semibold">Problemática Identificada</th>
                  <th className="py-4 px-4 text-left font-semibold">Datos Relevantes</th>
                  <th className="py-4 px-4 text-left font-semibold">Estrategias de Solución</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wetland-sand">
                <tr className="hover:bg-wetland-mist/35 transition-colors">
                  <td className="py-4 px-4 align-top">
                    <strong>Falta de embellecimiento y valorización</strong>
                  </td>
                  <td className="py-4 px-4 align-top text-wetland-ink-soft">
                    <ul className="list-disc list-inside space-y-1">
                      <li>90% de la población apoya el embellecimiento de la laguna</li>
                      <li>Potencial turístico subutilizado</li>
                      <li>Falta de infraestructura para visitantes</li>
                    </ul>
                  </td>
                  <td className="py-4 px-4 align-top text-wetland-ink-soft">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Reforestación con especies nativas (totora, qantu, mutuy)</li>
                      <li>Instalación de miradores y senderos ecológicos</li>
                      <li>Programas de educación ambiental</li>
                      <li>Señalética interpretativa bilingüe</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-wetland-mist/35 transition-colors">
                  <td className="py-4 px-4 align-top">
                    <strong>Contaminación y residuos</strong>
                  </td>
                  <td className="py-4 px-4 align-top text-wetland-ink-soft">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Acumulación de residuos sólidos en orillas</li>
                      <li>Falta de contenedores adecuados</li>
                      <li>Contaminación por actividades humanas</li>
                    </ul>
                  </td>
                  <td className="py-4 px-4 align-top text-wetland-ink-soft">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Instalación de estaciones de reciclaje</li>
                      <li>Jornadas mensuales de limpieza comunitaria</li>
                      <li>Campañas de concientización</li>
                      <li>Monitoreo de calidad del agua</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-wetland-lagoon to-wetland-moss rounded-2xl p-8 text-wetland-foam">
            <h3 className="text-2xl font-bold mb-4">¿Quieres ser parte del cambio?</h3>
            <p className="text-wetland-sand mb-6 max-w-2xl mx-auto">
              Únete a nuestros programas de voluntariado, adopta una especie o colabora con la
              conservación de la Laguna Huacarpay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                to={ROUTES.CONTACT}
                className="border-wetland-foam text-wetland-foam hover:bg-wetland-foam hover:text-wetland-ink"
              >
                Ser Voluntario
              </Button>
              <Button variant="primary" to={ROUTES.CONTACT}>
                Colaborar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
