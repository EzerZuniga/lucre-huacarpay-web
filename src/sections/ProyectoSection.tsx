import React from 'react';
import { FiShield, FiEye, FiBook, FiTarget } from 'react-icons/fi';
import { ROUTES } from '@/config';
import { Button, Card } from '@/components';

const ProyectoSection: React.FC = () => {
  const features = [
    {
      icon: <FiShield size={36} className="text-wetland-lagoon" />,
      title: "Protección del Humedal",
      description: "Conservación activa del ecosistema Ramsar y su biodiversidad única."
    },
    {
      icon: <FiEye size={36} className="text-wetland-moss" />,
      title: "Biodiversidad Andina",
      description: "Preservación de especies nativas de flora y fauna del ecosistema lacustre."
    },
    {
      icon: <FiBook size={36} className="text-wetland-earth" />,
      title: "Educación Ambiental",
      description: "Programas de concientización para visitantes y comunidades locales."
    },
    {
      icon: <FiTarget size={36} className="text-wetland-lagoon-dark" />,
      title: "Turismo Sostenible",
      description: "Promoción de visitas responsables que valoran y protegen el patrimonio natural."
    }
  ];

  return (
    <section id="proyecto" className="py-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wetland-ink mb-4">Proyecto de Conservación</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-wetland-ink-soft max-w-3xl mx-auto">
            Estrategias integrales para la protección y valorización del humedal Ramsar Laguna Huacarpay, 
            asegurando su preservación para las futuras generaciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-wetland-ink">{feature.title}</h3>
              <p className="text-wetland-ink-soft leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Problemática y Solución */}
        <div className="section-surface p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-wetland-ink">Estrategia de Conservación</h3>
              
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
                    Implementación de un programa de conservación que combina protección ambiental, 
                    educación comunitaria y turismo sostenible, creando un modelo replicable para 
                    humedales andinos.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual del proyecto */}
            <div className="bg-gradient-to-br from-wetland-lagoon to-wetland-moss rounded-2xl p-8 text-wetland-foam h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h4 className="text-2xl font-bold mb-3">Humedal Protegido</h4>
                <p className="text-wetland-sand leading-relaxed">
                  Sitio Ramsar de importancia internacional
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-wetland-foam/20 px-3 py-1 rounded-full text-sm">124 hectáreas</span>
                  <span className="bg-wetland-foam/20 px-3 py-1 rounded-full text-sm">40+ especies</span>
                  <span className="bg-wetland-foam/20 px-3 py-1 rounded-full text-sm">Conservación activa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Button 
            to={ROUTES.VISIT_US} 
            variant="primary" 
            className="px-8 py-4 text-lg"
          >
            Conocer el proyecto completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProyectoSection;
