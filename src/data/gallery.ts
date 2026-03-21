export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: 'paisaje' | 'fauna' | 'flora';
}

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'Todas' },
  { id: 'paisaje', name: 'Paisajes' },
  { id: 'fauna', name: 'Fauna' },
  { id: 'flora', name: 'Flora' },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Panorámica de la Laguna',
    description: 'Vista completa del humedal Ramsar desde las alturas',
    category: 'paisaje',
  },
  {
    id: 2,
    title: 'Aves Migratorias',
    description: 'Bandada de patos silvestres en la laguna',
    category: 'fauna',
  },
  {
    id: 3,
    title: 'Flora Acuática',
    description: 'Vegetación característica del ecosistema lacustre',
    category: 'flora',
  },
  {
    id: 4,
    title: 'Atardecer Andino',
    description: 'Puesta de sol sobre las aguas de Huacarpay',
    category: 'paisaje',
  },
  {
    id: 5,
    title: 'Especies Endémicas',
    description: 'Rana gigante del Titicaca en su hábitat natural',
    category: 'fauna',
  },
  {
    id: 6,
    title: 'Totora y Juncos',
    description: 'Plantas acuáticas que forman el ecosistema',
    category: 'flora',
  },
  {
    id: 7,
    title: 'Reflejos en el Agua',
    description: 'Montañas andinas reflejadas en la superficie',
    category: 'paisaje',
  },
  {
    id: 8,
    title: 'Aves Playeras',
    description: 'Garzas y otras aves en las orillas de la laguna',
    category: 'fauna',
  },
];
