export interface NavigationItem {
  readonly path: string;
  readonly label: string;
}

// 6 items → split 3 izquierda / 3 derecha alrededor del logo (simétrico)
export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/biodiversidad', label: 'Ecosistema' },
  { path: '/conservacion', label: 'El Proyecto' },
  { path: '/equipo', label: 'Nuestro Equipo' },
  { path: '/galeria', label: 'Experiencias' },
  { path: '/visitanos', label: 'Visítanos' },
] as const;
