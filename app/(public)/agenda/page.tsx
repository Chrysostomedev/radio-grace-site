/**
 * Page — Agenda
 */

import { PageHero } from '@/components/sections/PageHero';

export default function AgendaPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <PageHero
        title="Agenda"
        subtitle="Retrouvez tous les événements"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Agenda' },
        ]}
      />

      {/* Contenu */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Calendrier (placeholder) */}
          <div className="bg-slate-50 rounded-lg p-8 border-2 border-slate-200 text-center">
            <p className="text-slate-600 text-lg">Calendrier d'événements à intégrer</p>
            <p className="text-slate-500 text-sm mt-2">Retransmission en direct, célébrations spéciales, prières collectives</p>
          </div>

          {/* Liste événements (placeholder) */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-6">Événements à venir</h2>
            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center text-slate-600">
              <p>Aucun événement programmé pour l'instant.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
