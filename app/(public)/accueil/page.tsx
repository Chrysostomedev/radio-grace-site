// app/(public)/accueil/page.tsx
"use client";

import Link from 'next/link';
import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { PublicitesCarousel } from '@/components/sections/PublicitesCarousel';
import { QuoteCard } from '@/components/cards/QuoteCard';
import { EmissionCard } from '@/components/cards/EmissionCard';
import { useEmissions } from '@/hooks/useEmissions';
import { ActualitesRecentes } from '@/components/sections/ActualitesRecentes';
import { EmissionsCircleCarousel } from '@/components/sections/EmissionsCircleCarousel';
import { PublicationsMarquee } from '@/components/sections/PublicationsMarquee';
import AppMobileSection from '@/components/sections/AppMobileSection';
import { ArrowRight, HeartHandshake } from 'lucide-react';

export default function AccueilPage() {
  const emissions = useEmissions();

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">

      {/* 0. CARROUSEL PUBLICITÉS TOP */}
      <section className="w-full">
        <PublicitesCarousel />
      </section>

      {/* 1. HERO CAROUSEL */}
      <section className="pt-4 pb-6 px-4 sm:px-6 w-full">
        <HeroCarousel />
      </section>

      <EmissionsCircleCarousel />


     
       {/* SECTION DÉFILANTE (PUBLICATIONS) */}
      <PublicationsMarquee />



      {/* 5. ACTUALITÉS RECENTES - Composant dynamique */}
      <ActualitesRecentes />


      {/* 4. ÉMISSIONS À L'ÉCOUTE */}
      <section className="py-12 px-4 sm:px-6 w-full mb-12">
        <div className="max-w-7xl mx-auto">

          {/* En-tête de section style Éditorial / Media */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200/60 gap-4">
            <div className="flex items-start gap-3">
              {/* Trait de repère visuel (Vert institutionnel) */}
              <span className="w-1.5 h-8 bg-[#004D20] rounded-full shrink-0 mt-0.5" />

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#CA8A04]">
                  Grille de programmes
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none mt-1">
                  Émissions à l&apos;écoute
                </h2>
              </div>
            </div>

            <Link
              href="/emissions"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#004D20] bg-[#004D20]/5 hover:bg-[#004D20] hover:text-white px-4 py-2 rounded-full transition-all duration-200 group w-fit"
            >
              <span>Toute la grille</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Grille d'émissions */}
          {emissions && emissions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* On passe la limite à 5 cartes */}
              {emissions.slice(0, 5).map((emission: any) => (
                <EmissionCard key={emission.id} emission={emission} />
              ))}
            </div>
          ) : (
            <div className="py-16 px-4 text-center rounded-2xl bg-white border border-slate-100 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Aucune émission programmée pour le moment.
              </p>
            </div>
          )}

        </div>
      </section>
     
      {/* 7. APPLICATION MOBILE */}
      <AppMobileSection />

    {/* 3. CITATIONS DE L'ÉQUIPE */}
<section className="px-4 sm:px-6 max-w-7xl mx-auto mb-20 mt-16">
  {/* Titre de section */}
  <div className="text-center mb-10 sm:mb-14">
    <span className="inline-block text-[#CA8A04] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
      Ils parlent de nous
    </span>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E241C]">
      La vision de l’équipe
    </h2>
  </div>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    <QuoteCard
      quote="La radio est un moyen merveilleux pour partager la Parole de Dieu, accompagner les familles et apporter une lueur d'espoir au cœur des foyers."
      author="Assalé David"
      role="Journaliste"
      image="/img/actu (5).jpg"
    />
    <QuoteCard
      quote="La radio est un moyen merveilleux pour partager la Parole de Dieu, accompagner les familles et apporter une lueur d'espoir au cœur des foyers."
      author="Père Attobra"
      role="Directeur Général • Radio Grâce-Espoir"
      image="/img/onboard.jpg"
    />
    <QuoteCard
      quote="La radio est un moyen merveilleux pour partager la Parole de Dieu, accompagner les familles et apporter une lueur d'espoir au cœur des foyers."
      author="Elvire Kadjo"
      role="Directrice des programmes • Radio Grâce-Espoir"
      image="/img/hero1.jpg"
    />
  </div>
</section>

      {/* 6. SECTION INTENTIONS DE PRIÈRE & SOUTIEN */}
      <section className="w-full py-6 px-4 sm:px-6">
        <div className="w-full bg-[#003817] rounded-3xl p-8 sm:p-12 lg:p-16 text-white border border-[#004D20] shadow-lg relative overflow-hidden">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">

            {/* Contenu textuel */}
            <div className="max-w-2xl space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#CA8A04] block">
                Espace Dévotion & Solidarité
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Confiez vos intentions de prière à nos antennes
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                Chaque jour, lors de nos rendez-vous de prière et d&apos;antenne, notre communauté d&apos;auditeurs se rassemble pour porter vos intentions. Vous n&apos;êtes pas seul(e).
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/prieres"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#CA8A04] hover:bg-[#b07803] text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Déposer une intention</span>
              </Link>

              <Link
                href="/don"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/30 transition-all duration-200"
              >
                <span>Soutenir la radio</span>
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}