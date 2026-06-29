import type { BiodiversityFeature } from './biodiversity.types';

export const BIODIVERSITY_FEATURES: readonly BiodiversityFeature[] = [
  {
    title: 'Aves Endémicas',
    description:
      'Hogar de especies únicas como el Montañero Barbudo y otras aves andinas que encuentran refugio en nuestros totorales.',
    iconName: 'eye',
    colorClass: 'text-wetland-lagoon',
  },
  {
    title: 'Flora Nativa',
    description:
      'Ecosistema dominado por totorales, algas acuáticas y matorrales andinos que sirven de sustento y protección.',
    iconName: 'shield',
    colorClass: 'text-wetland-moss',
  },
  {
    title: 'Aves Migratorias',
    description:
      'Punto crucial de descanso y alimentación para decenas de especies migratorias durante su ruta intercontinental.',
    iconName: 'target',
    colorClass: 'text-wetland-earth',
  },
] as const;
