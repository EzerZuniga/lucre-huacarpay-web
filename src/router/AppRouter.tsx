import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Biodiversidad from '../pages/Home';
import Conservacion from '../pages/Equipo';
import Galeria from '../pages/Galeria';
import Visitanos from '../pages/Proyecto';
import Contacto from '../pages/Contacto';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biodiversidad" element={<Biodiversidad />} />
          <Route path="/conservacion" element={<Conservacion />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/visitanos" element={<Visitanos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;