import type { ReactNode } from 'react';
import { Header } from '@/features/navigation';
import { Footer } from '@/features/navigation';
import { useScrollToTop } from '@/shared/hooks';

interface RootLayoutProps {
  children: ReactNode;
}

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-wetland-ivory">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
