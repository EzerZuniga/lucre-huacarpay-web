import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components';
import { ROUTES } from '@/config';
import { Contacto, Equipo, Galeria, Home, Proyecto } from '@/pages';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BIODIVERSITY} element={<Home />} />
          <Route path={ROUTES.CONSERVATION} element={<Equipo />} />
          <Route path={ROUTES.GALLERY} element={<Galeria />} />
          <Route path={ROUTES.VISIT_US} element={<Proyecto />} />
          <Route path={ROUTES.CONTACT} element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
