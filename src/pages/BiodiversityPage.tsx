import { FiTarget, FiEye, FiShield } from 'react-icons/fi';
import { Card, SectionHeader } from '@/shared/ui';
import { BIODIVERSITY_FEATURES } from '@/entities/biodiversity';

const ICON_MAP = {
  eye: FiEye,
  shield: FiShield,
  target: FiTarget,
} as const;

export default function BiodiversityPage() {
  return (
    <div className="min-h-screen pt-20 bg-wetland-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Biodiversidad"
          description="Descubre la riqueza de flora y fauna endémica y migratoria que habita en el ecosistema único de la Laguna Huacarpay."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-12">
          {BIODIVERSITY_FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.iconName];
            return (
              <Card
                key={feature.title}
                className="h-full text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <Icon size={36} className={feature.colorClass} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-wetland-ink">{feature.title}</h3>
                <p className="text-wetland-ink-soft leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
