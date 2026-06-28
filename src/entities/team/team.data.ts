import type { TeamMember, MethodologyStep } from './team.types';

export const TEAM_MEMBERS: readonly TeamMember[] = [
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
] as const;

export const TEAM_METHODOLOGIES: readonly MethodologyStep[] = [
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
] as const;
