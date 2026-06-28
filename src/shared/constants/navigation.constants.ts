export interface NavigationItem {
  readonly path: string;
  readonly label: string;
}

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/biodiversidad', label: 'Biodiversidad' },
  { path: '/conservacion', label: 'Conservación' },
  { path: '/galeria', label: 'Galería' },
  { path: '/visitanos', label: 'Visítanos' },
  { path: '/contacto', label: 'Contacto' },
] as const;
