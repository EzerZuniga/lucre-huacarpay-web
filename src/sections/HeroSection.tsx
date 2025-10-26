import React from 'react';
import Button from '../components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Laguna <span className="text-blue-400">Huacarpay</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl leading-relaxed">
              Humedal Ramsar de importancia internacional en el Valle Sur del Cusco. 
              Santuario de biodiversidad andina y patrimonio natural del Perú.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                to="/visitanos" 
                variant="primary" 
                className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
              >
                Descubrir la Laguna
              </Button>
              <Button 
                to="/biodiversidad" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
              >
                Conocer Biodiversidad
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-blue-200 text-sm">Especies de Aves</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">124</div>
                <div className="text-blue-200 text-sm">Hectáreas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">3050</div>
                <div className="text-blue-200 text-sm">msnm</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl w-full aspect-video flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4"></div>
                    <p className="text-lg font-semibold">Laguna Huacarpay</p>
                    <p className="text-blue-200 text-sm">Humedal Ramsar - Lucre</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;