import { FiCheckCircle, FiBarChart2, FiTarget, FiUsers } from 'react-icons/fi';
import { Button, Card, SectionHeader } from '@/shared/ui';
import { ROUTES } from '@/app/routes';
import {
  OBJECTIVES,
  CONSERVATION_ACTIONS,
  IMPACT_INDICATORS,
  PROBLEM_STRATEGIES,
} from '@/entities/project';

function calcProgress(current: string, target: string): number {
  const ratio = parseFloat(current) / parseFloat(target);
  return Math.min(isNaN(ratio) ? 0 : ratio * 100, 100);
}

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
              {OBJECTIVES.map((objective) => (
                <div key={objective} className="flex items-start p-4 bg-wetland-mist/55 rounded-lg">
                  <FiCheckCircle className="text-wetland-moss mt-1 mr-3 flex-shrink-0" size={20} />
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
              {CONSERVATION_ACTIONS.map((action) => (
                <li key={action} className="flex items-start">
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
              {IMPACT_INDICATORS.map((indicator) => (
                <div
                  key={indicator.metric}
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
                        width: `${calcProgress(indicator.current, indicator.target)}%`,
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
                {PROBLEM_STRATEGIES.map((row) => (
                  <tr key={row.problem} className="hover:bg-wetland-mist/35 transition-colors">
                    <td className="py-4 px-4 align-top">
                      <strong>{row.problem}</strong>
                    </td>
                    <td className="py-4 px-4 align-top text-wetland-ink-soft">
                      <ul className="list-disc list-inside space-y-1">
                        {row.data.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 px-4 align-top text-wetland-ink-soft">
                      <ul className="list-disc list-inside space-y-1">
                        {row.strategies.map((strategy) => (
                          <li key={strategy}>{strategy}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
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
