export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Flor Paloma Valderrama Quispe',
    role: 'Coordinadora del Proyecto',
    bio: 'Estudiante de derecho.',
    initials: 'FV',
  },
  {
    name: 'Ezer Benito Zuniga Chura',
    role: 'Desarrollador de la página web',
    bio: 'Estudiante de ingeniería informática.',
    initials: 'EZ',
  },
  {
    name: 'Edgardo Rodrigo Carrillo Alarcon',
    role: 'Analista financiero',
    bio: 'Estudiante de economía.',
    initials: 'EC',
  },
  {
    name: 'Jesús Aaron Condo Morales',
    role: 'Diseñador del prototipo',
    bio: 'Estudiante de ingeniería de sistemas.',
    initials: 'JC',
  },
  {
    name: 'Maria Elena Condori Huaman',
    role: 'Desarrollo Sostenible',
    bio: 'Estudiante de derecho.',
    initials: 'MC',
  },
];

export const TEAM_METHODOLOGIES: MethodologyStep[] = [
  {
    step: '1',
    title: 'Investigación',
    description: 'Estudio científico del ecosistema y biodiversidad del humedal.',
  },
  {
    step: '2',
    title: 'Conservación',
    description: 'Implementación de estrategias para proteger la flora y fauna nativa.',
  },
  {
    step: '3',
    title: 'Educación',
    description: 'Programas de concientización ambiental para visitantes y comunidades.',
  },
];
