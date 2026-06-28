import type { SiteConfig, SocialLinks, VisitInfo } from '@/shared/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'Laguna Huacarpay',
  description: 'Humedal Ramsar de importancia internacional en Lucre, Cusco',
  url: 'https://lagunahuacarpay.org',
  email: 'info@lagunahuacarpay.org',
  phone: '+51 984 123 456',
  address: 'Laguna Huacarpay, Lucre, Valle Sur del Cusco, Perú',
} as const;

export const SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://facebook.com/lagunahuacarpay',
  instagram: 'https://instagram.com/lagunahuacarpay',
  twitter: 'https://twitter.com/lagunahuacarpay',
  youtube: 'https://youtube.com/lagunahuacarpay',
} as const;

export const VISIT_INFO: VisitInfo = {
  hours: {
    weekdays: '6:00 AM - 6:00 PM',
    weekends: '6:00 AM - 6:00 PM',
    holidays: '6:00 AM - 6:00 PM',
  },
  prices: {
    general: 5,
    students: 2,
    children: 1,
    seniors: 2,
  },
} as const;

export const BIODIVERSITY_CATEGORIES = {
  aves: 'Aves',
  mamiferos: 'Mamíferos',
  anfibios: 'Anfibios',
  reptiles: 'Reptiles',
  plantas: 'Plantas',
  insectos: 'Insectos',
} as const;
