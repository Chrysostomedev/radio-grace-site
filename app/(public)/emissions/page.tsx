/**
 * Page — Émissions
 */

import { PageHero } from '@/components/sections/PageHero';
import { EmissionCard } from '@/components/cards/EmissionCard';
import { useEmissions } from '@/hooks/useEmissions';

export default function EmissionsPage() {
  const emissions = useEmissions();

  return (
    <div className="pb-20">
      {/* Hero */}
      <PageHero
        title="Nos Émissions"
        subtitle="Découvrez nos programmes d'enseignement et de prière"
        image="/img/actu (2).jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Émissions' },
        ]}
      />

      {/* Grille */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {emissions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emissions.map((emission) => (
                <EmissionCard key={emission.id} emission={emission} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-100 rounded-lg p-12 text-center text-slate-600">
              <p>Aucune émission disponible pour l'instant.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
