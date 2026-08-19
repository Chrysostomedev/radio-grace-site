'use client';

/**
 * Page — Agenda
 */

import { PageHero } from '@/components/sections/PageHero';
import { useEvenements } from '@/hooks/useEvenements';
import { Calendar, MapPin, Clock, Loader2, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function AgendaPage() {
  const { data: evenements, isLoading, error } = useEvenements();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

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
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
            <Calendar className="w-6 h-6 text-[#004D20]" />
            <h2 className="text-2xl font-bold text-slate-900">Événements à venir</h2>
          </div>

          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#004D20]" />
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-6 rounded-2xl flex items-center gap-3 justify-center">
              <AlertCircle className="w-5 h-5" />
              <p className="font-medium">Impossible de charger les événements.</p>
            </div>
          )}

          {evenements && evenements.length === 0 && (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <p className="text-lg font-bold text-slate-700">Aucun événement prévu</p>
              <p className="text-slate-500 mt-2">Revenez plus tard pour découvrir nos prochains rendez-vous.</p>
            </div>
          )}

          {evenements && evenements.length > 0 && (
            <div className="space-y-6">
              {evenements.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row">
                  {/* Image éventuelle */}
                  {event.image ? (
                    <div className="relative w-full md:w-64 h-48 md:h-auto bg-slate-100 shrink-0">
                      <Image 
                        src={`http://127.0.0.1:8000/storage/${event.image}`}
                        alt={event.titre}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full md:w-48 h-32 md:h-auto bg-gradient-to-br from-[#004D20] to-[#007A33] shrink-0 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-white/30" />
                    </div>
                  )}

                  {/* Détails */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider w-fit mb-3">
                      {event.type}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-[#004D20] mb-2">
                      {event.titre}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#CA8A04]" />
                        <span className="capitalize">{formatDate(event.date_debut)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#CA8A04]" />
                        <span>{formatTime(event.date_debut)} - {formatTime(event.date_fin)}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <MapPin className="w-4 h-4 text-[#CA8A04]" />
                        <span>{event.lieu}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
