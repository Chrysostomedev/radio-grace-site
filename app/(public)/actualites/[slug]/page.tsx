/**
 * Page — Détail Actualité
 */

import { useActualiteBySlug } from '@/hooks/useActualites';
import { PageHero } from '@/components/sections/PageHero';
import { formatDateFR } from '@/lib/utils';
import { notFound } from 'next/navigation';

export interface DetailActualitePageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailActualitePage({ params }: DetailActualitePageProps) {
  const { slug } = await params;
  const actualite = useActualiteBySlug(slug);

  if (!actualite) {
    notFound();
  }

  return (
    <div className="pb-20">
      {/* Hero */}
      <PageHero
        title={actualite.title}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Actualités', href: '/actualites' },
          { label: actualite.title },
        ]}
      />

      {/* Contenu */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Image */}
          {actualite.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={actualite.image}
                alt={actualite.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600 border-b border-slate-200 pb-4">
            <time dateTime={actualite.publishedAt}>{formatDateFR(actualite.publishedAt)}</time>
            {actualite.author && <span>Par {actualite.author}</span>}
            {actualite.tags && (
              <div className="flex gap-2">
                {actualite.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Contenu */}
          <div className="prose prose-lg max-w-none">
            {actualite.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-4">Partagez cette actualité :</p>
            <div className="flex gap-3">
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL || 'https://radiogracespoir.fr'}/actualites/${actualite.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL || 'https://radiogracespoir.fr'}/actualites/${actualite.slug}&text=${encodeURIComponent(actualite.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 text-sm font-semibold"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
