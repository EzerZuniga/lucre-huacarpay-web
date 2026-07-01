import type { GalleryItem, GalleryCategory } from './gallery.types';

export const GALLERY_CATEGORIES: readonly GalleryCategory[] = [
  { id: 'all', name: 'Todas' },
  { id: 'paisaje', name: 'Paisajes' },
  { id: 'fauna', name: 'Fauna' },
  { id: 'flora', name: 'Flora' },
] as const;

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: 1,
    title: 'Panorámica de la Laguna',
    description: 'Vista completa del humedal Ramsar desde las alturas',
    category: 'paisaje',
    imageUrl: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Aves Migratorias',
    description: 'Bandada de patos silvestres en la laguna',
    category: 'fauna',
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Flora Acuática',
    description: 'Vegetación característica del ecosistema lacustre',
    category: 'flora',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Atardecer Andino',
    description: 'Puesta de sol sobre las aguas de Huacarpay',
    category: 'paisaje',
    imageUrl: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Especies Endémicas',
    description: 'Anfibios en su hábitat natural del humedal',
    category: 'fauna',
    imageUrl: 'https://images.unsplash.com/photo-1551525212-a1dc18871d4b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Totora y Juncos',
    description: 'Plantas acuáticas que forman el ecosistema',
    category: 'flora',
    imageUrl: 'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Reflejos en el Agua',
    description: 'Montañas andinas reflejadas en la superficie',
    category: 'paisaje',
    imageUrl: 'https://images.unsplash.com/photo-1439246854758-f686a415d9da?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Aves Playeras',
    description: 'Garzas y otras aves en las orillas de la laguna',
    category: 'fauna',
    imageUrl: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
  },
] as const;
