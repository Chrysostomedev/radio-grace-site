import Image from 'next/image';
import Link from 'next/link';
import { usePriereBySlug } from '@/hooks/usePrieres';
import { PageHero } from '@/components/sections/PageHero';
import { formatDateFR } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Calendar, User, BookOpen, ArrowLeft, HeartHandshake, Quote } from 'lucide-react';
import { PriereActions } from '@/components/prieres/PriereActions';

export interface DetailPrierePageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailPrierePage({ params }: DetailPrierePageProps) {
  const { slug } = await params;
  const priere = usePriereBySlug(slug);

  if (!priere) {
    notFound();
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://radiogracespoir.ci'}/prieres/${priere.slug}`;

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <PageHero
        title={priere.title}
        subtitle={priere.category ? `Prière d'intention : ${priere.category}` : "Un temps d'oraison et de méditation"}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Prières', href: '/prieres' },
          { label: priere.title },
        ]}
      />

      {/* Contenu Principal */}
      <article className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Bouton Retour & Badges */}
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/prieres"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#004D20] hover:text-[#CA8A04] transition-colors bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux prières</span>
            </Link>

            {priere.category && (
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#004D20]/10 text-[#004D20]">
                  <BookOpen className="w-3.5 h-3.5 text-[#CA8A04]" />
                  <span>{priere.category}</span>
                </span>
              </div>
            )}
          </div>

          {/* Carte Principale de Lecteur Spirituel */}
          <div className="bg-white rounded-3xl border border-amber-100/80 shadow-md overflow-hidden">
            
            {/* Image d'illustration si disponible */}
            {priere.image && (
              <div className="relative w-full aspect-[21/9] bg-[#002C13]/10 overflow-hidden border-b border-amber-100/60">
                <Image
                  src={priere.image}
                  alt={priere.title}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1200px) 100vw, 1000px"
                />
              </div>
            )}

            {/* Conteneur de Texte Style Oraison */}
            <div className="p-6 sm:p-12 space-y-8">
              
              {/* Métadonnées de l'auteur et de la date */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-4">
                  {priere.author && (
                    <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                      <User className="w-4 h-4 text-[#007A33]" />
                      <span>Rédigé par {priere.author}</span>
                    </span>
                  )}

                  {priere.createdAt && (
                    <span className="flex items-center gap-1.5 border-l border-slate-200 pl-4">
                      <Calendar className="w-4 h-4 text-[#CA8A04]" />
                      <time dateTime={priere.createdAt}>{formatDateFR(priere.createdAt)}</time>
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 text-[#CA8A04] font-semibold">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Prière partagée</span>
                </div>
              </div>

              {/* Texte de la prière stylisé */}
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-amber-500/10 pointer-events-none" />
                
                <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-serif italic text-center max-w-2xl mx-auto py-4">
                  {priere.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="first-letter:text-3xl first-letter:font-extrabold first-letter:text-[#004D20]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Amen de Clôture */}
              <div className="text-center pt-4">
                <span className="inline-block px-6 py-2 rounded-full bg-amber-50 text-[#CA8A04] font-extrabold text-sm border border-amber-200/60 uppercase tracking-widest">
                  Amen
                </span>
              </div>

            </div>

            {/* Pied de Carte — Partage & Actions */}
            <div className="bg-gradient-to-r from-amber-50/50 via-white to-amber-50/50 p-6 sm:p-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div>
                <h4 className="font-extrabold text-[#004D20] text-sm">Transmettez cette grâce</h4>
                <p className="text-xs text-slate-500">Partagez cette prière à un proche ou à votre communauté.</p>
              </div>

              {/* Composant Client isolé pour le partage et l'impression */}
              <PriereActions title={priere.title} shareUrl={shareUrl} />

            </div>

          </div>

        </div>
      </article>
    </div>
  );
}