export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'paisaje' | 'fauna' | 'flora' | 'conservacion';
  tags: string[];
  createdAt: string;
}

export interface BiodiversitySpecies {
  id: string;
  name: string;
  scientificName: string;
  category: 'aves' | 'mamiferos' | 'anfibios' | 'reptiles' | 'plantas';
  status: 'endemica' | 'nativa' | 'migratoria' | 'introducida';
  description: string;
  habitat: string;
  image?: string;
}

export interface ConservationProject {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  startDate: string;
  endDate?: string;
  status: 'active' | 'completed' | 'planned';
  partners?: string[];
  progress: number;
}

export interface VisitInfo {
  hours: {
    mondayToFriday: string;
    saturday: string;
    sunday: string;
  };
  prices: {
    general: number;
    students: number;
    children: number;
    seniors: number;
  };
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  facilities: string[];
  rules: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  type: 'general' | 'visit' | 'collaboration' | 'volunteer' | 'research';
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  status: number;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}