import React from 'react';
import Card from '../components/ui/Card';

const Equipo: React.FC = () => {
  const teamMembers = [
    {
      name: "Flor Paloma Valderrama Quispe",
      role: "Coordinadora del Proyecto",
      bio: "Estudiante de derecho.",
      initials: "FV"
    },
    {
      name: "Ezer Benito Zuniga Chura",
      role: "Desarrollador de la página web",
      bio: "Estudiante de ingeniería informática.",
      initials: "EZ"
    },
    {
      name: "Edgardo Rodrigo Carrillo Alarcon",
      role: "Analista financiero",
      bio: "Estudiante de economía.",
      initials: "EC"
    },
    {
      name: "Jesús Aaron Condo Morales",
      role: "Diseñador del prototipo",
      bio: "Estudiante de ingeniería de sistemas.",
      initials: "JC"
    },
    {
      name: "Maria Elena Condori Huaman",
      role: "Desarrollo Sostenible",
      bio: "Estudiante de derecho.",
      initials: "MC"
    }
  ];

  const methodologies = [
    {
      step: "1",
      title: "Investigación",
      description: "Estudio científico del ecosistema y biodiversidad del humedal."
    },
    {
      step: "2",
      title: "Conservación",
      description: "Implementación de estrategias para proteger la flora y fauna nativa."
    },
    {
      step: "3",
      title: "Educación",
      description: "Programas de concientización ambiental para visitantes y comunidades."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Nuestro Equipo</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conoce al equipo comprometido con la conservación y divulgación de la Laguna Huacarpay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col h-full hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-slate-600 flex-grow mb-4 leading-relaxed">{member.bio}</p>
              <div className="flex space-x-3 pt-4 border-t border-slate-200">
                <button className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
                  Contactar
                </button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Nuestra Metodología de Trabajo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                  <span className="text-white font-bold text-2xl">{method.step}</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">{method.title}</h3>
                <p className="text-slate-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg">
            ¿Quieres unirte a nuestro equipo o colaborar con el proyecto?
          </p>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipo;