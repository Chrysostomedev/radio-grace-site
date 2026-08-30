'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { programmesService } from '@/services/programmes.service';
import { PageHero } from '@/components/sections/PageHero';
import { ArrowLeft, Calendar, Radio, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_IMAGE = '/img/default-emission.jpg';

export default function EmissionDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: emission, isLoading, error } = useQuery({
    queryKey: ['emission', id],
    queryFn: () => programmesService.getProgramme(parseInt(id)),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004D20] mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !emission) {
    return (
      <div className="min-h-screen bg-[#FAF9F6]">
        <PageHero
          title="Émission non trouvée"
          subtitle="Cette émission n'existe pas ou n'est pas disponible"
          breadcrumb={[
            { label: 'Accueil', href: '/accueil' },
            { label: 'Émissions', href: '/emissions' },
          ]}
        />
        <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
          <Link
            href="/emissions"
            className="inline-flex items-center gap-2 text-[#004D20] hover:text-[#003817] font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux émissions
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero avec image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-[#004D20] to-[#003817] overflow-hidden">
        <Image
          src={(emission as any).image || DEFAULT_IMAGE}
          alt={(emission as any).titre}
          fill
          className="object-cover w-full h-full"
          onError={(e) => {
            (e.target as any).src = DEFAULT_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Header overlay */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6">
          <Link
            href="/emissions"
            className="inline-flex items-center gap-2 text-white hover:text-[#CA8A04] font-bold text-sm transition-colors bg-black/40 px-3 py-2 rounded-lg backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {(emission as any).titre}
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Infos rapides */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 pb-12 border-b border-slate-200">
          {(emission as any).animateur && (
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Animateur</p>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                {(emission as any).animateur?.nom_scene || 'N/A'}
              </p>
            </div>
          )}
          {(emission as any).jour && (
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Jour</p>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                {(emission as any).jour}
              </p>
            </div>
          )}
          {(emission as any).heure_debut && (
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Horaire</p>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                {(emission as any).heure_debut}
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        {(emission as any).description && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">À propos</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
              {(emission as any).description}
            </p>
          </div>
        )}

        {/* Grille horaire */}
        {(emission as any).grille && (emission as any).grille.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Grille horaire</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#004D20]">
                    <th className="text-left py-3 px-3 font-bold text-[#004D20]">Jour</th>
                    <th className="text-left py-3 px-3 font-bold text-[#004D20]">Heure</th>
                    <th className="text-left py-3 px-3 font-bold text-[#004D20]">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {(emission as any).grille.map((slot: any, idx: number) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-3 px-3 font-medium text-slate-900">{slot.jour}</td>
                      <td className="py-3 px-3 text-slate-600">{slot.heure_debut}</td>
                      <td className="py-3 px-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#004D20]/10 text-[#004D20]">
                          {slot.type || 'Direct'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#004D20] to-[#003817] rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-3">Écoutez cette émission</h3>
          <p className="mb-6 text-sm sm:text-base opacity-90">
            Retrouvez cette émission en direct tous les jours aux horaires annoncés.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-[#CA8A04] hover:bg-[#b07803] text-slate-900 font-bold rounded-xl transition-colors"
          >
            Écouter maintenant →
          </a>
        </div>
      </section>
    </div>
  );
}
