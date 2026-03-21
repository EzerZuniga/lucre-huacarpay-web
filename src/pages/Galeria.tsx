import React, { useState } from 'react';
import { Button, Card, Modal } from '@/components';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/data';

const Galeria: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, 8);

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? displayedItems 
    : displayedItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-wetland-ink mb-4">Galería Fotográfica</h1>
          <div className="section-divider"></div>
          <p className="text-xl text-wetland-ink-soft max-w-3xl mx-auto">
            Descubre la belleza natural y biodiversidad de la Laguna Huacarpay a través de nuestra colección de imágenes.
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-wetland-lagoon text-wetland-foam shadow-lg'
                  : 'bg-wetland-foam text-wetland-ink-soft hover:bg-wetland-mist border border-wetland-sand'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-square bg-gradient-to-br from-wetland-mist to-wetland-sand rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-wetland-ink-soft text-sm">Imagen {item.id}</p>
                </div>
              </div>
              <h3 className="font-bold text-wetland-ink mb-2">{item.title}</h3>
              <p className="text-wetland-ink-soft text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Botón cargar más */}
        {!showAll && GALLERY_ITEMS.length > 8 && (
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="px-8 py-3"
            >
              Ver más imágenes
            </Button>
          </div>
        )}

        {/* Modal para imagen ampliada */}
        <Modal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          size="lg"
          title={GALLERY_ITEMS.find(item => item.id === selectedImage)?.title}
        >
          {selectedImage && (
            <div className="text-center">
              <div className="aspect-video bg-gradient-to-br from-wetland-mist to-wetland-sand rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-wetland-ink-soft">Vista previa de imagen ampliada</p>
                </div>
              </div>
              <p className="text-wetland-ink-soft mb-6">
                {GALLERY_ITEMS.find(item => item.id === selectedImage)?.description}
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={() => setSelectedImage(null)}>
                  Cerrar
                </Button>
                <Button variant="primary">
                  Descargar imagen
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Galeria;
