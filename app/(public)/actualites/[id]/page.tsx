/**
 * Page — Détail Actualité par ID
 */

import { actualitesService } from '@/services/actualites.service';
import { PageHero } from '@/components/sections/PageHero';
import { formatDateFR } from '@/lib/utils';
import { notFound } from 'next/navigation';

export interface DetailActualitePageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailActualitePage({ params }: DetailActualitePageProps) {
  const { id } = await params;

  let actualite = null;
  try {
    const response = await actualitesService.getActualite(id);
    // Déballe le payload si Laravel entoure la réponse avec { data: ... }
    actualite = (response as any)?.data || response;
  } catch (error) {
    console.error(`[Actualité] Erreur lors du chargement de l'ID ${id}:`, error);
    notFound();
  }

  if (!actualite || !actualite.id) {
    notFound();
  }

  const title = actualite.titre || actualite.title || 'Actualité';
  const textContent = actualite.contenu || actualite.chapeau || actualite.resume || '';

  return (
    <div className="pb-20 bg-[#FAF9F6] min-h-screen">
      {/* En-tête / Hero */}
      <PageHero
        title={title}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Actualités', href: '/actualites' },
          { label: title },
        ]}
      />

      {/* Contenu Article */}
      <article className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
          
          {/* Image */}
          {actualite.image && (
            <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-100">
              <img
                src={actualite.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-slate-100 text-xs sm:text-sm font-medium text-slate-500">
            {actualite.published_at && (
              <time dateTime={actualite.published_at}>
                {formatDateFR(actualite.published_at)}
              </time>
            )}
            {actualite.auteur && (
              <span className="border-l border-slate-200 pl-4 text-[#004D20] font-bold">
                Par {actualite.auteur.prenom} {actualite.auteur.nom}
              </span>
            )}
          </div>

          {/* Contenu Texte */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            {textContent ? (
              textContent.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p className="italic text-slate-400">Aucun contenu disponible pour cet article.</p>
            )}
          </div>

        </div>
      </article>
    </div>
  );
}