import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const GaleriaSection: React.FC = () => {
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
      description: "Bandada de patos silvestres en su hábitat natural",
      category: "fauna"
    },
    { 
      id: 3, 
      title: "Flora Acuática", 
      description: "Totora y juncos que forman el ecosistema lacustre",
      category: "flora"
    },
    { 
      id: 4, 
      title: "Atardecer Andino", 
      description: "Puesta de sol sobre las aguas de Huacarpay",
      category: "paisaje"
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Galería</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubre la belleza natural y biodiversidad de la Laguna Huacarpay a través de nuestra colección de imágenes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {galleryItems.map((item) => (
            <Card 
              key={item.id}
              className="hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              title={item.title}
              description={item.description}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-3xl mb-2"></div>
                  <p className="text-slate-500 text-sm">Imagen {item.id}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full capitalize">
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
            className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Ver galería completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;