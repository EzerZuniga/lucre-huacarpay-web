export interface BiodiversityFeature {
  readonly title: string;
  readonly description: string;
  readonly iconName: 'eye' | 'shield' | 'target';
  readonly colorClass: string;
}

export type SpeciesCategory = 'fauna' | 'flora' | 'ecosistema';

export type ConservationStatus = 'endemica' | 'migratoria' | 'nativa' | 'protegida';

export interface BiodiversitySpecies {
  readonly id: string;
  readonly name: string;
  readonly scientificName: string;
  readonly description: string;
  readonly category: SpeciesCategory;
  readonly status: ConservationStatus;
  readonly imageUrl: string;
  readonly facts: readonly string[];
}

export interface BiodiversityStat {
  readonly value: string;
  readonly label: string;
  readonly sublabel: string;
}
