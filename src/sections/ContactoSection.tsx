import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contáctanos</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre la Laguna Huacarpay, quieres visitarnos o colaborar con la conservación? Escríbenos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nombre *"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
                <Input
                  label="Email *"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <Input
                label="Asunto *"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="¿Sobre qué quieres hablar?"
                required
              />
              
              <Input
                label="Mensaje *"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                required
              />
              
              <Button type="submit" variant="primary" className="w-full text-lg py-4">
                <FiSend className="mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiMail className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">info@lagunahuacarpay.org</p>
                    <p className="text-slate-600">conservacion@lagunahuacarpay.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-1">Teléfono</h4>
                    <p className="text-slate-600">+51 984 123 456</p>
                    <p className="text-slate-600">+51 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiMapPin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-1">Ubicación</h4>
                    <p className="text-slate-600">Laguna de Huacarpay</p>
                    <p className="text-slate-600">Lucre, Valle Sur del Cusco, Perú</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mapa de ubicación */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <FiMapPin size={48} className="mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Ubicación de la Laguna</h4>
                <p className="text-blue-100 mb-4">
                  A 45 minutos del centro de Cusco<br />
                  Acceso por carretera hacia el Valle Sur
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                  to="/visitanos"
                >
                  Cómo llegar
                </Button>
              </div>
            </div>

            {/* Horarios de atención */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-bold text-lg text-slate-800 mb-4">Horarios de atención</h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;