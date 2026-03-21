import React from 'react';
import { Button, Card } from '@/components';
import { TEAM_MEMBERS } from '@/data';

const EquipoSection: React.FC = () => {
  return (
    <section id="equipo" className="py-20 bg-wetland-mist/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wetland-ink mb-4">Nuestro Equipo</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-wetland-ink-soft max-w-3xl mx-auto">
            Profesionales comprometidos con la conservación y desarrollo sostenible de la Laguna Huacarpay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Card 
              key={member.initials}
              className="text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-wetland-lagoon to-wetland-moss rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-wetland-foam font-bold text-lg">{member.initials}</span>
              </div>
              <h3 className="text-lg font-bold text-wetland-ink mb-1 leading-tight">{member.name}</h3>
              <p className="text-wetland-lagoon font-medium text-sm">{member.role}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-wetland-ink-soft mb-4">
            ¿Quieres unirte a nuestro equipo o colaborar con el proyecto?
          </p>
          <Button variant="primary" className="px-6 py-3">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;
