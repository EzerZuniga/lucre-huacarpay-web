import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { LanguageProvider } from './LanguageProvider';

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * Composes all application-level providers in the correct order.
 * Add new providers here rather than nesting in App.tsx.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
