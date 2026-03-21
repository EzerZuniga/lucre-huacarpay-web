export const ROUTES = {
  HOME: '/',
  BIODIVERSITY: '/biodiversidad',
  CONSERVATION: '/conservacion',
  GALLERY: '/galeria',
  VISIT_US: '/visitanos',
  CONTACT: '/contacto',
} as const;

export interface NavigationItem {
  path: string;
  label: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { path: ROUTES.HOME, label: 'Inicio' },
  { path: ROUTES.BIODIVERSITY, label: 'Biodiversidad' },
  { path: ROUTES.CONSERVATION, label: 'Conservación' },
  { path: ROUTES.GALLERY, label: 'Galería' },
  { path: ROUTES.VISIT_US, label: 'Visítanos' },
  { path: ROUTES.CONTACT, label: 'Contacto' },
];
