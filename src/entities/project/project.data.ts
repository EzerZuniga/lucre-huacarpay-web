import type { ImpactIndicator, ProblemRow } from './project.types';

export const OBJECTIVES = [
  'Conservar y proteger el ecosistema del humedal Ramsar',
  'Promover el turismo ecológico responsable en la laguna',
  'Fomentar la participación comunitaria en actividades de conservación',
  'Incrementar la biodiversidad con especies nativas',
  'Reducir la contaminación y residuos en el área protegida',
  'Educar a visitantes sobre la importancia del ecosistema',
] as const;

export const CONSERVATION_ACTIONS = [
  'Reforestación con especies nativas (totora, qantu, mutuy)',
  'Instalación de señalética educativa y informativa',
  'Programas de limpieza y mantenimiento periódico',
  'Monitoreo constante de especies de flora y fauna',
  'Control de especies invasoras',
  'Restauración de áreas degradadas',
] as const;

export const IMPACT_INDICATORS: readonly ImpactIndicator[] = [
  { metric: 'Reducción de residuos sólidos', target: '60%', current: '45%' },
  { metric: 'Incremento de visitantes responsables', target: '200%', current: '150%' },
  { metric: 'Especies de aves monitoreadas', target: '40+', current: '35+' },
  { metric: 'Área reforestada (hectáreas)', target: '5', current: '3.2' },
  { metric: 'Participación comunitaria', target: '80%', current: '65%' },
] as const;

export const PROBLEM_STRATEGIES: readonly ProblemRow[] = [
  {
    problem: 'Falta de embellecimiento y valorización',
    data: [
      '90% de la población apoya el embellecimiento de la laguna',
      'Potencial turístico subutilizado',
      'Falta de infraestructura para visitantes',
    ],
    strategies: [
      'Reforestación con especies nativas (totora, qantu, mutuy)',
      'Instalación de miradores y senderos ecológicos',
      'Programas de educación ambiental',
      'Señalética interpretativa bilingüe',
    ],
  },
  {
    problem: 'Contaminación y residuos',
    data: [
      'Acumulación de residuos sólidos en orillas',
      'Falta de contenedores adecuados',
      'Contaminación por actividades humanas',
    ],
    strategies: [
      'Instalación de estaciones de reciclaje',
      'Jornadas mensuales de limpieza comunitaria',
      'Campañas de concientización',
      'Monitoreo de calidad del agua',
    ],
  },
] as const;
