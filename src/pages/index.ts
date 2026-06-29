/**
 * @warning NO importes desde este barrel en el router.
 * El router usa `lazy(() => import('@/pages/XxxPage'))` directamente
 * para garantizar code splitting. Importar desde aquí cancela el lazy loading.
 */
export { default as HomePage } from './HomePage';
export { default as ProjectPage } from './ProjectPage';
export { default as TeamPage } from './TeamPage';
export { default as GalleryPage } from './GalleryPage';
export { default as ContactPage } from './ContactPage';
export { default as BiodiversityPage } from './BiodiversityPage';
export { default as VisitPage } from './VisitPage';
export { default as NotFoundPage } from './NotFoundPage';
