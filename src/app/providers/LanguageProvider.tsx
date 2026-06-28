import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'es' | 'en' | 'qu';

interface LanguageContextType {
  readonly language: Language;
  readonly setLanguage: (lang: Language) => void;
  readonly t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.home': 'Inicio',
    'nav.biodiversity': 'Biodiversidad',
    'nav.conservation': 'Conservación',
    'nav.gallery': 'Galería',
    'nav.visit': 'Visítanos',
    'nav.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'nav.home': 'Home',
    'nav.biodiversity': 'Biodiversity',
    'nav.conservation': 'Conservation',
    'nav.gallery': 'Gallery',
    'nav.visit': 'Visit Us',
    'nav.contact': 'Contact',
    'footer.rights': 'All rights reserved',
  },
  qu: {
    'nav.home': 'Qallariy',
    'nav.biodiversity': 'Kawsayraqmi',
    'nav.conservation': 'Wañuyqaqa',
    'nav.gallery': 'Rikchakuna',
    'nav.visit': 'Qamuykuy',
    'nav.contact': 'Rimapayay',
    'footer.rights': 'Llapan hayñikuna waqaychasqa',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
