import { SectionHeader } from '@/shared/ui';
import { ContactForm, ContactInfo } from '@/features/contact';
import { FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Contáctanos"
          description="¿Tienes preguntas sobre la Laguna Huacarpay, quieres visitarnos o colaborar con la conservación? Escríbenos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />

            <div className="bg-gradient-to-br from-wetland-lagoon to-wetland-moss rounded-xl w-full h-64 flex items-center justify-center text-wetland-foam">
              <div className="text-center">
                <FiMapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Mapa de ubicación</p>
                <p className="text-wetland-sand">Laguna Huacarpay, Lucre</p>
              </div>
            </div>
          </div>

          <div>
            <div className="section-surface p-8">
              <h2 className="text-2xl font-bold mb-6 text-wetland-ink">Envíanos un mensaje</h2>
              <ContactForm subjectAsSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
