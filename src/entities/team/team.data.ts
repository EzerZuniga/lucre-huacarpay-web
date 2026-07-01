import type { TeamMember, MethodologyStep } from './team.types';

export const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    name: 'Flor Paloma Valderrama Quispe',
    role: 'Coordinadora del Proyecto',
    bio: 'Lidera la gestión legal y normativa del proyecto, asegurando el cumplimiento de los marcos de protección del humedal Ramsar Laguna Huacarpay.',
    initials: 'FV',
    specialty: 'Derecho ambiental',
    area: 'Coordinacion',
  },
  {
    name: 'Ezer Benito Zuniga Chura',
    role: 'Desarrollador web',
    bio: 'Diseñó y desarrolló la plataforma digital del proyecto, garantizando una experiencia de usuario accesible e intuitiva para la divulgación ambiental.',
    initials: 'EZ',
    specialty: 'Ing. Informática',
    area: 'Tecnologia',
  },
  {
    name: 'Edgardo Rodrigo Carrillo Alarcon',
    role: 'Analista financiero',
    bio: 'Gestiona el análisis económico y la sostenibilidad financiera de las iniciativas de conservación del ecosistema.',
    initials: 'EC',
    specialty: 'Economía',
    area: 'Finanzas',
  },
  {
    name: 'Jesús Aaron Condo Morales',
    role: 'Diseñador de prototipos',
    bio: 'Responsable del diseño UX/UI e interfaces, traduciendo las necesidades del proyecto en productos digitales usables y atractivos.',
    initials: 'JC',
    specialty: 'Ing. de Sistemas',
    area: 'Diseno',
  },
  {
    name: 'Maria Elena Condori Huaman',
    role: 'Desarrollo Sostenible',
    bio: 'Impulsa estrategias de desarrollo sostenible alineadas con los Objetivos de Desarrollo Sostenible y la conservación del humedal.',
    initials: 'MC',
    specialty: 'Derecho',
    area: 'Sostenibilidad',
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
