import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  imageAlt?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  image,
  title,
  description,
  imageAlt = '',
  onClick,
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-slate-200 ${className}`}
      onClick={onClick}
      {...props}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt || title || 'Imagen de la laguna Huacarpay'}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold mb-3 text-slate-800 tracking-tight">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-slate-600 mb-4 leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;