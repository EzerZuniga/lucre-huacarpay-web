import React from 'react';
import HeroSection from '../sections/HeroSection';
import ContactoSection from '../sections/ContactoSection';
import EquipoSection from '../sections/EquipoSection';
import GaleriaSection from '../sections/GaleriaSection';
import ProyectoSection from '../sections/ProyectoSection';

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