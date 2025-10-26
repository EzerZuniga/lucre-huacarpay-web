import React from 'react';
import { FiShield, FiEye, FiBook, FiTarget } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ProyectoSection: React.FC = () => {
  const features = [
    {
      icon: <FiShield size={36} className="text-blue-600" />,
      title: "Protección del Humedal",
      description: "Conservación activa del ecosistema Ramsar y su biodiversidad única."
    },
    {
      icon: <FiEye size={36} className="text-green-600" />,
      title: "Biodiversidad Andina",
      description: "Preservación de especies nativas de flora y fauna del ecosistema lacustre."
    },
    {
      icon: <FiBook size={36} className="text-purple-600" />,
      title: "Educación Ambiental",
      description: "Programas de concientización para visitantes y comunidades locales."
    },
    {
      icon: <FiTarget size={36} className="text-orange-600" />,
      title: "Turismo Sostenible",
      description: "Promoción de visitas responsables que valoran y protegen el patrimonio natural."
    }
  ];

  return (
    <section id="proyecto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Proyecto de Conservación</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estrategias integrales para la protección y valorización del humedal Ramsar Laguna Huacarpay, 
            asegurando su preservación para las futuras generaciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Problemática y Solución */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Estrategia de Conservación</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-600 flex items-center">
                    <FiTarget className="mr-2" />
                    Problemática Identificada:
                  </h4>
                  <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-2">
                    <li>Contaminación por residuos sólidos en las orillas</li>
                    <li>Pérdida de biodiversidad y especies nativas</li>
                    <li>Falta de valorización del patrimonio natural</li>
                    <li>Presión turística no regulada</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-blue-600 flex items-center">
                    <FiEye className="mr-2" />
                    Solución Integral:
                  </h4>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    Implementación de un programa de conservación que combina protección ambiental, 
                    educación comunitaria y turismo sostenible, creando un modelo replicable para 
                    humedales andinos.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual del proyecto */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h4 className="text-2xl font-bold mb-3">Humedal Protegido</h4>
                <p className="text-blue-100 leading-relaxed">
                  Sitio Ramsar de importancia internacional
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">124 hectáreas</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">40+ especies</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Conservación activa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Button 
            to="/proyecto" 
            variant="primary" 
            className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700"
          >
            Conocer el proyecto completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProyectoSection;