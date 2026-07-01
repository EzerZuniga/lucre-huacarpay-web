import type { BiodiversityFeature, BiodiversitySpecies, BiodiversityStat } from './biodiversity.types';

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

export const BIODIVERSITY_STATS: readonly BiodiversityStat[] = [
  {
    value: '120+',
    label: 'Especies de Aves',
    sublabel: 'registradas en el humedal',
  },
  {
    value: '45+',
    label: 'Plantas Nativas',
    sublabel: 'catalogadas en la zona',
  },
  {
    value: '500',
    label: 'Hectáreas',
    sublabel: 'de ecosistema protegido',
  },
  {
    value: '30+',
    label: 'Años de Estudio',
    sublabel: 'de investigación continua',
  },
] as const;

export const BIODIVERSITY_SPECIES: readonly BiodiversitySpecies[] = [
  // ── Fauna ────────────────────────────────────────────────────────────────
  {
    id: 'pato-puna',
    name: 'Pato Puna',
    scientificName: 'Anas puna',
    description:
      'Pato andino endémico de los Andes del sur. Habita en lagunas y humedales de altura entre 3,500 y 4,600 m.s.n.m. Su presencia indica la buena salud del humedal.',
    category: 'fauna',
    status: 'endemica',
    imageUrl:
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80',
    facts: ['3,500–4,600 m.s.n.m.', 'Ave acuática', 'Endémica andina'],
  },
  {
    id: 'garza-blanca',
    name: 'Garza Blanca',
    scientificName: 'Ardea alba',
    description:
      'Elegante garza migratoria que visita los humedales en busca de peces y anfibios. Caracterizada por su plumaje completamente blanco y su vuelo majestuoso.',
    category: 'fauna',
    status: 'migratoria',
    imageUrl:
      'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80',
    facts: ['Migratoria', 'Carnívora', 'Hasta 90 cm'],
  },
  {
    id: 'focha-gigante',
    name: 'Focha Gigante',
    scientificName: 'Fulica gigantea',
    description:
      'Una de las fochas más grandes del mundo, en peligro de extinción. Construye grandes nidos flotantes entre los totorales y es emblemática del altiplano andino.',
    category: 'fauna',
    status: 'protegida',
    imageUrl:
      'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=600&q=80',
    facts: ['En peligro', 'Nido flotante', 'Altiplano andino'],
  },
  {
    id: 'flamenco-andino',
    name: 'Flamenco Andino',
    scientificName: 'Phoenicoparrus andinus',
    description:
      'Espectacular ave migratoria de plumaje rosado que visita la laguna en temporadas específicas. Especie considerada vulnerable a nivel global por la UICN.',
    category: 'fauna',
    status: 'migratoria',
    imageUrl:
      'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=600&q=80',
    facts: ['Vulnerable UICN', 'Migratoria', 'Plumaje rosado'],
  },
  // ── Flora ─────────────────────────────────────────────────────────────────
  {
    id: 'totora',
    name: 'Totora',
    scientificName: 'Schoenoplectus tatora',
    description:
      'Planta acuática icónica de los Andes. Forma densas extensiones llamadas totorales que constituyen el hábitat fundamental para docenas de especies de aves y mamíferos acuáticos.',
    category: 'flora',
    status: 'nativa',
    imageUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    facts: ['Nativa andina', 'Hábitat clave', 'Fibra natural'],
  },
  {
    id: 'llacho',
    name: 'Llacho',
    scientificName: 'Elodea potamogeton',
    description:
      'Alga verde sumergida que oxigena el agua y sirve de alimento para patos y otras aves acuáticas. Es un indicador biológico de la salud del ecosistema lacustre.',
    category: 'flora',
    status: 'nativa',
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    facts: ['Subacuática', 'Indicador ambiental', 'Alimento para aves'],
  },
  {
    id: 'berro-andino',
    name: 'Berro Andino',
    scientificName: 'Nasturtium officinale',
    description:
      'Planta medicinal y comestible que crece en los bordes húmedos del humedal. Ha sido utilizada ancestralmente por las comunidades quechuas por sus propiedades nutritivas y medicinales.',
    category: 'flora',
    status: 'nativa',
    imageUrl:
      'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=600&q=80',
    facts: ['Medicinal', 'Comestible', 'Borde de laguna'],
  },
  // ── Ecosistema ───────────────────────────────────────────────────────────
  {
    id: 'humedal-altoandino',
    name: 'Humedal Altoandino',
    scientificName: 'Ecosistema acuático',
    description:
      'La Laguna Huacarpay es uno de los humedales altoandinos mejor conservados del Cusco. Regula el microclima local, almacena carbono y es fuente de agua dulce para comunidades cercanas.',
    category: 'ecosistema',
    status: 'protegida',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    facts: ['3,076 m.s.n.m.', 'Agua dulce', 'Cusco, Perú'],
  },
  {
    id: 'corredor-biologico',
    name: 'Corredor Biológico',
    scientificName: 'Zona de conectividad',
    description:
      'Punto estratégico en la ruta migratoria de aves entre el Altiplano y los valles andinos. Conecta ecosistemas a lo largo de la cuenca del Río Vilcanota, facilitando la dispersión de especies.',
    category: 'ecosistema',
    status: 'protegida',
    imageUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
    facts: ['Ruta migratoria', 'Cuenca Vilcanota', 'Zona de conexión'],
  },
] as const;
