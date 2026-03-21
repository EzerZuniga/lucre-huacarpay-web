import React from 'react';
import {
  ContactoSection,
  EquipoSection,
  GaleriaSection,
  HeroSection,
  ProyectoSection,
} from '@/sections';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ProyectoSection />
      <EquipoSection />
      <GaleriaSection />
      <ContactoSection />
    </main>
  );
};

export default Home;
