import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { SITE_CONFIG } from '@/shared/constants';

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
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-wetland-ink-soft hover:text-wetland-lagoon transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-wetland-mist p-3 rounded-full mr-4">
            <FiPhone className="text-wetland-lagoon text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-wetland-ink mb-1">Teléfono</h4>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="text-wetland-ink-soft hover:text-wetland-lagoon transition-colors"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-wetland-mist p-3 rounded-full mr-4">
            <FiMapPin className="text-wetland-lagoon text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-wetland-ink mb-1">Ubicación</h4>
            <p className="text-wetland-ink-soft">{SITE_CONFIG.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
