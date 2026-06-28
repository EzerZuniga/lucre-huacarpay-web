import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
}

export default function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-wetland-ink mb-4">{title}</h2>
      <div className="section-divider" />
      {description && (
        <p className="text-xl text-wetland-ink-soft max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );
}
