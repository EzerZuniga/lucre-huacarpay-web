export const ROUTES = {
  HOME: '/',
  BIODIVERSITY: '/biodiversidad',
  CONSERVATION: '/conservacion',
  TEAM: '/equipo',
  GALLERY: '/galeria',
  VISIT_US: '/visitanos',
  CONTACT: '/contacto',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
