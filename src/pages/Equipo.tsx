import React from 'react';
import { Button, Card } from '@/components';
import { TEAM_MEMBERS, TEAM_METHODOLOGIES } from '@/data';

const Equipo: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-wetland-ink mb-4">Nuestro Equipo</h1>
          <div className="section-divider"></div>
          <p className="text-xl text-wetland-ink-soft max-w-3xl mx-auto">
            Conoce al equipo comprometido con la conservación y divulgación de la Laguna Huacarpay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.initials} className="flex flex-col h-full hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-wetland-lagoon to-wetland-moss rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <span className="text-wetland-foam font-bold text-lg">{member.initials}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-wetland-ink">{member.name}</h3>
                  <p className="text-wetland-lagoon font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-wetland-ink-soft flex-grow mb-4 leading-relaxed">{member.bio}</p>
              <div className="flex space-x-3 pt-4 border-t border-wetland-sand">
                <button className="text-wetland-ink-soft hover:text-wetland-lagoon transition-colors text-sm font-medium">
                  Contactar
                </button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="section-surface p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-wetland-ink text-center">Nuestra Metodología de Trabajo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_METHODOLOGIES.map((method) => (
              <div key={method.step} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-wetland-lagoon to-wetland-moss w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                  <span className="text-wetland-foam font-bold text-2xl">{method.step}</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-wetland-ink">{method.title}</h3>
                <p className="text-wetland-ink-soft leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-wetland-ink-soft text-lg">
            ¿Quieres unirte a nuestro equipo o colaborar con el proyecto?
          </p>
          <Button variant="primary" className="mt-4 px-8 py-3">
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
