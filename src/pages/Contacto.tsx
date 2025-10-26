import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Contáctanos</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre la Laguna Huacarpay, quieres visitarnos o colaborar con la conservación? Escríbenos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Información de contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiMail className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">Email</h4>
                    <p className="text-slate-600">info@lagunahuacarpay.org</p>
                    <p className="text-slate-600">conservacion@lagunahuacarpay.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">Teléfono</h4>
                    <p className="text-slate-600">+51 984 123 456</p>
                    <p className="text-slate-600">+51 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiMapPin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">Ubicación</h4>
                    <p className="text-slate-600">Laguna de Huacarpay</p>
                    <p className="text-slate-600">Lucre, Valle Sur del Cusco, Perú</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl w-full h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <FiMapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Mapa de ubicación</p>
                <p className="text-blue-100">Laguna Huacarpay, Lucre</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Envíanos un mensaje</h2>
              
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
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="info">Información general</option>
                    <option value="visit">Visitas guiadas</option>
                    <option value="collaboration">Colaboración</option>
                    <option value="research">Investigación</option>
                    <option value="volunteer">Voluntariado</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <Input
                  label="Mensaje *"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  required
                />
                
                <Button type="submit" variant="primary" className="w-full text-lg py-4">
                  <FiSend className="mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;