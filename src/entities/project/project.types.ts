export interface ProjectObjective {
  readonly text: string;
}

export interface ConservationAction {
  readonly text: string;
}

export interface ImpactIndicator {
  readonly metric: string;
  readonly target: string;
  readonly current: string;
}

export interface ProblemRow {
  readonly problem: string;
  readonly data: readonly string[];
  readonly strategies: readonly string[];
}
