// ─── Site Configuration ──────────────────────────────────────────────────────

export interface SiteConfig {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
}

export interface SocialLinks {
  readonly facebook?: string;
  readonly instagram?: string;
  readonly twitter?: string;
  readonly youtube?: string;
}

// ─── Visit Info ──────────────────────────────────────────────────────────────

export interface VisitInfo {
  readonly hours: {
    readonly weekdays: string;
    readonly weekends: string;
    readonly holidays: string;
  };
  readonly prices: {
    readonly general: number;
    readonly students: number;
    readonly children: number;
    readonly seniors: number;
  };
}

// ─── Biodiversity ────────────────────────────────────────────────────────────

export interface BiodiversitySpecies {
  readonly id: string;
  readonly name: string;
  readonly scientificName: string;
  readonly category: 'aves' | 'mamiferos' | 'anfibios' | 'reptiles' | 'plantas';
  readonly status: 'endemica' | 'nativa' | 'migratoria' | 'introducida';
  readonly description: string;
  readonly habitat: string;
  readonly image?: string;
}

// ─── Conservation ────────────────────────────────────────────────────────────

export interface ConservationProject {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly objectives: readonly string[];
  readonly startDate: string;
  readonly endDate?: string;
  readonly status: 'active' | 'completed' | 'planned';
  readonly partners?: readonly string[];
  readonly progress: number;
}
