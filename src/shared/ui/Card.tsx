import type { ReactNode, KeyboardEvent } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  imageAlt?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  image,
  title,
  description,
  imageAlt = '',
  onClick,
}: CardProps) {
  const isInteractive = typeof onClick === 'function';

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={`bg-wetland-foam rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-wetland-sand ${className}`}
      onClick={onClick}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || 'Imagen de la laguna Huacarpay'}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold mb-3 text-wetland-ink tracking-tight">{title}</h3>
        )}
        {description && (
          <p className="text-wetland-ink-soft mb-4 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}
