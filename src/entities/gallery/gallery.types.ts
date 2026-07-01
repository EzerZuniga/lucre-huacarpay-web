export interface GalleryItem {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: 'paisaje' | 'fauna' | 'flora';
  readonly imageUrl: string;
}

export interface GalleryCategory {
  readonly id: string;
  readonly name: string;
}
