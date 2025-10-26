import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const Galeria: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    {
      id: 1,
      title: "Panorámica de la Laguna",
      description: "Vista completa del humedal Ramsar desde las alturas",
      category: "paisaje"
    },
    {
      id: 2,
      title: "Aves Migratorias",
      description: "Bandada de patos silvestres en la laguna",
      category: "fauna"
    },
    {
      id: 3,
      title: "Flora Acuática",
      description: "Vegetación característica del ecosistema lacustre",
      category: "flora"
    },
    {
      id: 4,
      title: "Atardecer Andino",
      description: "Puesta de sol sobre las aguas de Huacarpay",
      category: "paisaje"
    },
    {
      id: 5,
      title: "Especies Endémicas",
      description: "Rana gigante del Titicaca en su hábitat natural",
      category: "fauna"
    },
    {
      id: 6,
      title: "Totora y Juncos",
      description: "Plantas acuáticas que forman el ecosistema",
      category: "flora"
    },
    {
      id: 7,
      title: "Reflejos en el Agua",
      description: "Montañas andinas reflejadas en la superficie",
      category: "paisaje"
    },
    {
      id: 8,
      title: "Aves Playeras",
      description: "Garzas y otras aves en las orillas de la laguna",
      category: "fauna"
    }
  ];

  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 8);

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'paisaje', name: 'Paisajes' },
    { id: 'fauna', name: 'Fauna' },
    { id: 'flora', name: 'Flora' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? displayedItems 
    : displayedItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Galería Fotográfica</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubre la belleza natural y biodiversidad de la Laguna Huacarpay a través de nuestra colección de imágenes.
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-slate-500 text-sm">Imagen {item.id}</p>
                </div>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Botón cargar más */}
        {!showAll && galleryItems.length > 8 && (
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
          title={galleryItems.find(item => item.id === selectedImage)?.title}
        >
          {selectedImage && (
            <div className="text-center">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-slate-500">Vista previa de imagen ampliada</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                {galleryItems.find(item => item.id === selectedImage)?.description}
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