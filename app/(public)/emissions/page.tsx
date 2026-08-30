'use client';

import { useEmissions } from '@/hooks/useEmissions';
import { EmissionCard } from '@/components/cards/EmissionCard';
import { PageHero } from '@/components/sections/PageHero';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EmissionsPage() {
  const emissions = useEmissions();

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <PageHero
        title="Nos Émissions"
        subtitle="Retrouvez toutes nos émissions en direct et en replay"
        breadcrumb={[
          { label: 'Accueil', href: '/accueil' },
          { label: 'Émissions', href: '/emissions' },
        ]}
      />

      {/* Grille Émissions */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-start gap-3 mb-2">
            <span className="w-1.5 h-8 bg-[#004D20] rounded-full shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#CA8A04]">
                Grille de programmes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Toutes nos émissions
              </h2>
            </div>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-4">
            Découvrez nos émissions couvrant tous les aspects de la vie spirituelle, 
            de l'enseignement biblique aux témoignages inspirants.
          </p>
        </div>

        {emissions && Array.isArray(emissions) && emissions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {emissions.map((emission: any) => (
              <EmissionCard key={emission.id} emission={emission} />
            ))}
          </div>
        ) : (
          <div className="py-20 px-4 text-center rounded-2xl bg-white border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">
              Aucune émission disponible pour le moment.
            </p>
          </div>
        )}
      </section>

      {/* CTA Back */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <Link
          href="/accueil"
          className="inline-flex items-center gap-2 text-[#004D20] hover:text-[#003817] font-bold text-sm transition-colors group"
        >
          ← Retour à l'accueil
        </Link>
      </section>
    </div>
  );
}
