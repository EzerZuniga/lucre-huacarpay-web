import React from 'react';
import { LanguageProvider, ThemeProvider } from '@/contexts';
import { AppRouter } from '@/router';

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
