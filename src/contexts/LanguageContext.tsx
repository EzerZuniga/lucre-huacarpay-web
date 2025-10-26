import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en' | 'qu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.biodiversity': 'Biodiversidad',
    'nav.conservation': 'Conservación',
    'nav.gallery': 'Galería',
    'nav.visit': 'Visítanos',
    'nav.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados',
    // Agrega más traducciones según necesites
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
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};