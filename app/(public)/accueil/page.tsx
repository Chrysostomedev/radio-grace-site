// app/(public)/accueil/page.tsx
"use client";

import Link from 'next/link';
import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { QuoteCard } from '@/components/cards/QuoteCard';
import { ActualitesRecentes } from '@/components/sections/ActualitesRecentes';
import { EmissionsCircleCarousel } from '@/components/sections/EmissionsCircleCarousel';
import AppMobileSection from '@/components/sections/AppMobileSection';
import { GrilleProgammesHero } from '@/components/sections/GrilleProgammesHero';
import { PodcastsFavorites } from '@/components/sections/PodcastsFavorites';
import { PartenairesSection } from '@/components/sections/PartenairesSection';
import { PublicitesIntegrees } from '@/components/sections/PublicitesIntegrees';
import { HeartHandshake } from 'lucide-react';

export default function AccueilPage() {
  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">

     

     

      {/* 1. HERO CAROUSEL */}
      <section className="pt-4 pb-6 px-4 sm:px-6 w-full">
        <HeroCarousel />
      </section>

      <EmissionsCircleCarousel />

      {/* SECTION DÉFILANTE (PUBLICATIONS) */}
      {/* <PublicationsMarquee /> */}

      {/* 2bis. PUBLICITÉS INTÉGRÉES AVEC WEBVIEW */}
      <PublicitesIntegrees />

      {/* 5. ACTUALITÉS RECENTES - Composant dynamique */}
      <ActualitesRecentes />

      {/* 4. GRILLE DE PROGRAMMES - NOUVEAU COMPOSANT IMMERSIF */}
      <GrilleProgammesHero />

      {/* 4bis. PODCASTS FAVORITES */}
      <PodcastsFavorites />

      {/* 5bis. PARTENAIRES SECTION */}
      <PartenairesSection />

      {/* 7. APPLICATION MOBILE */}
      <AppMobileSection />

      {/* 3. CITATIONS DE L'ÉQUIPE */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-20 mt-16">
        {/* Titre de section */}
        <div className="text-center mb-10 sm:mb-14">
         
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E241C]">
           Ils parlent de nous
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
