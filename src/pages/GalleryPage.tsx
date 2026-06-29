import { useState } from 'react';
import { Button, Card, Modal, SectionHeader } from '@/shared/ui';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/entities/gallery';

const PAGE_SIZE = 8;

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter first, then paginate — correct order
  const allFiltered =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = showAll ? allFiltered : allFiltered.slice(0, PAGE_SIZE);
  const hasMore = !showAll && allFiltered.length > PAGE_SIZE;

  const selectedItem = GALLERY_ITEMS.find((item) => item.id === selectedImage);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowAll(false); // Reset pagination on category change
  };

  return (
    <div className="min-h-screen pt-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Galería Fotográfica"
          description="Descubre la belleza natural y biodiversidad de la Laguna Huacarpay a través de nuestra colección de imágenes."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
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

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedItems.map((item) => (
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

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => setShowAll(true)} className="px-8 py-3">
              Ver más imágenes
            </Button>
          </div>
        )}

        {/* Image Modal */}
        <Modal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          size="lg"
          title={selectedItem?.title}
        >
          {selectedItem && (
            <div className="text-center">
              <div className="aspect-video bg-gradient-to-br from-wetland-mist to-wetland-sand rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-wetland-ink-soft">Vista previa de imagen ampliada</p>
                </div>
              </div>
              <p className="text-wetland-ink-soft mb-6">{selectedItem.description}</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={() => setSelectedImage(null)}>
                  Cerrar
                </Button>
                <Button variant="primary">Descargar imagen</Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
