import React from 'react';
import { FiCheckCircle, FiBarChart2, FiTarget, FiUsers } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Proyecto: React.FC = () => {
  const objectives = [
    "Conservar y proteger el ecosistema del humedal Ramsar",
    "Promover el turismo ecológico responsable en la laguna",
    "Fomentar la participación comunitaria en actividades de conservación",
    "Incrementar la biodiversidad con especies nativas",
    "Reducir la contaminación y residuos en el área protegida",
    "Educar a visitantes sobre la importancia del ecosistema"
  ];

  const conservationActions = [
    "Reforestación con especies nativas (totora, qantu, mutuy)",
    "Instalación de señalética educativa y informativa",
    "Programas de limpieza y mantenimiento periódico",
    "Monitoreo constante de especies de flora y fauna",
    "Control de especies invasoras",
    "Restauración de áreas degradadas"
  ];

  const impactIndicators = [
    { metric: "Reducción de residuos sólidos", target: "60%", current: "45%" },
    { metric: "Incremento de visitantes responsables", target: "200%", current: "150%" },
    { metric: "Especies de aves monitoreadas", target: "40+", current: "35+" },
    { metric: "Área reforestada (hectáreas)", target: "5", current: "3.2" },
    { metric: "Participación comunitaria", target: "80%", current: "65%" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Proyecto de Conservación</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estrategias integrales para la protección y valorización del humedal Ramsar Laguna Huacarpay.
          </p>
        </div>

        {/* Objetivos del Proyecto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <FiTarget className="text-green-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-slate-800">Objetivos del Proyecto</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                  <FiCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{objective}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Acciones de Conservación e Indicadores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <FiUsers className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-slate-800">Acciones de Conservación</h2>
            </div>
            
            <ul className="space-y-3">
              {conservationActions.map((action, index) => (
                <li key={index} className="flex items-start">
                  <FiCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{action}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <div className="flex items-center mb-6">
              <FiBarChart2 className="text-purple-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-slate-800">Indicadores de Impacto</h2>
            </div>
            
            <div className="space-y-4">
              {impactIndicators.map((indicator, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{indicator.metric}</span>
                    <span className="text-sm font-bold text-purple-600">{indicator.current} / {indicator.target}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(parseFloat(indicator.current) / parseFloat(indicator.target)) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Problemática y Soluciones */}
        <Card className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Problemática y Estrategias</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="py-4 px-4 text-left font-semibold">Problemática Identificada</th>
                  <th className="py-4 px-4 text-left font-semibold">Datos Relevantes</th>
                  <th className="py-4 px-4 text-left font-semibold">Estrategias de Solución</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 align-top">
                    <strong>Falta de embellecimiento y valorización</strong>
                  </td>
                  <td className="py-4 px-4 align-top text-slate-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>90% de la población apoya el embellecimiento de la laguna</li>
                      <li>Potencial turístico subutilizado</li>
                      <li>Falta de infraestructura para visitantes</li>
                    </ul>
                  </td>
                  <td className="py-4 px-4 align-top text-slate-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Reforestación con especies nativas (totora, qantu, mutuy)</li>
                      <li>Instalación de miradores y senderos ecológicos</li>
                      <li>Programas de educación ambiental</li>
                      <li>Señalética interpretativa bilingüe</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 align-top">
                    <strong>Contaminación y residuos</strong>
                  </td>
                  <td className="py-4 px-4 align-top text-slate-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Acumulación de residuos sólidos en orillas</li>
                      <li>Falta de contenedores adecuados</li>
                      <li>Contaminación por actividades humanas</li>
                    </ul>
                  </td>
                  <td className="py-4 px-4 align-top text-slate-700">
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
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Quieres ser parte del cambio?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a nuestros programas de voluntariado, adopta una especie o colabora con la conservación de la Laguna Huacarpay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" to="/contacto" className="border-white text-white hover:bg-white hover:text-slate-900">
                Ser Voluntario
              </Button>
              <Button variant="primary" to="/contacto" className="bg-white text-slate-900 hover:bg-slate-100">
                Colaborar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;