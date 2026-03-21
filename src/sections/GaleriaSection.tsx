import React from 'react';
import { Button, Card } from '@/components';
import { GALLERY_ITEMS } from '@/data';

const GaleriaSection: React.FC = () => {
  const featuredGalleryItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section id="galeria" className="py-20 bg-wetland-foam">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wetland-ink mb-4">Galería</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-wetland-ink-soft max-w-3xl mx-auto">
            Descubre la belleza natural y biodiversidad de la Laguna Huacarpay a través de nuestra colección de imágenes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredGalleryItems.map((item) => (
            <Card 
              key={item.id}
              className="hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              title={item.title}
              description={item.description}
            >
              <div className="aspect-square bg-gradient-to-br from-wetland-mist to-wetland-sand rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-3xl mb-2"></div>
                  <p className="text-wetland-ink-soft text-sm">Imagen {item.id}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-medium px-2 py-1 bg-wetland-mist text-wetland-ink-soft rounded-full capitalize">
                  {item.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            to="/galeria" 
            variant="outline" 
            className="px-8 py-3"
          >
            Ver galería completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
