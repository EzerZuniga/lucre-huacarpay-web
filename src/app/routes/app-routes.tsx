import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/app/layouts';
import { ROUTES } from './route-constants';
import { Spinner } from '@/shared/ui';

// ─── Lazy-loaded pages ──────────────────────────────────────────────────────

const HomePage = lazy(() => import('@/pages/HomePage'));
const TeamPage = lazy(() => import('@/pages/TeamPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const ProjectPage = lazy(() => import('@/pages/ProjectPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

// ─── Fallback ───────────────────────────────────────────────────────────────

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Spinner size="lg" />
    </div>
  );
}

// ─── Router ─────────────────────────────────────────────────────────────────

export function AppRouter() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.BIODIVERSITY} element={<HomePage />} />
            <Route path={ROUTES.CONSERVATION} element={<TeamPage />} />
            <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
            <Route path={ROUTES.VISIT_US} element={<ProjectPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </BrowserRouter>
  );
}
