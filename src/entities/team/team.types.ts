export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly initials: string;
  readonly specialty?: string;
  readonly area?: string;
}

export interface MethodologyStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}
