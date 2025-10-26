import React from 'react';
import Card from '../components/ui/Card';

const EquipoSection: React.FC = () => {
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

  return (
    <section id="equipo" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestro Equipo</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Profesionales comprometidos con la conservación y desarrollo sostenible de la Laguna Huacarpay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">{member.initials}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">{member.name}</h3>
              <p className="text-blue-600 font-medium text-sm">{member.role}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            ¿Quieres unirte a nuestro equipo o colaborar con el proyecto?
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;