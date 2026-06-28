import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactInfo() {
  return (
    <div className="section-surface p-8">
      <h3 className="text-2xl font-bold mb-6 text-wetland-ink">Información de contacto</h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-wetland-mist p-3 rounded-full mr-4">
            <FiMail className="text-wetland-lagoon text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-wetland-ink mb-1">Email</h4>
            <p className="text-wetland-ink-soft">info@lagunahuacarpay.org</p>
            <p className="text-wetland-ink-soft">conservacion@lagunahuacarpay.org</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-wetland-mist p-3 rounded-full mr-4">
            <FiPhone className="text-wetland-lagoon text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-wetland-ink mb-1">Teléfono</h4>
            <p className="text-wetland-ink-soft">+51 984 123 456</p>
            <p className="text-wetland-ink-soft">+51 987 654 321</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-wetland-mist p-3 rounded-full mr-4">
            <FiMapPin className="text-wetland-lagoon text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-wetland-ink mb-1">Ubicación</h4>
            <p className="text-wetland-ink-soft">Laguna de Huacarpay</p>
            <p className="text-wetland-ink-soft">Lucre, Valle Sur del Cusco, Perú</p>
          </div>
        </div>
      </div>
    </div>
  );
}
