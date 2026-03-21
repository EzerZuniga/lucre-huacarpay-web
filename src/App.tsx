import React from 'react';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;