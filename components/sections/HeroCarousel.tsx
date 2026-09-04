'use client';

/**
 * Section — Carrousel Hero Ultra-Immersif avec Ken Burns Effect & Slider 5 Visualisations
 */

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useHeroSlidesQuery } from '@/hooks/useAccueil';
import { getAbsoluteImageUrl } from '@/lib/imageUrl';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Radio, 
  ArrowRight, 
  Sparkles,
  Volume2
} from 'lucide-react';

const AUTOPLAY_INTERVAL = 6000;

// Visualisations de secours ultra-qualitatives (4 à 5 visuels immersive)
// const FALLBACK_SLIDES = [

//   {
//     id: '2',
//     image: '/img/hero1.jpg',
//     badge: 'Louange & Adoration',
//     title: 'Des Moments de Grâce Inoubliables',
//     subtitle: 'Élevez votre esprit avec nos programmes musicaux sélectionnés pour fortifier votre foi.',
//     cta: { label: 'Découvrir nos émissions', href: '/emissions' }
//   },
//   {
//     id: '3',
//     image: '/img/actu (4).jpg',
//     badge: 'Communauté',
//     title: 'Ensemble Dans la Prière',
//     subtitle: 'Déposez vos intentions et rejoignez une grande famille unie par l’espérance.',
//     cta: { label: 'Confier une intention', href: '/prieres' }
//   },
//   {
//     id: '4',
//     image: '/img/her.jpg',
//     badge: 'Vie de l\'Église',
//     title: 'Actualités & Enseignements',
//     subtitle: 'Restez informé de la vie de notre diocèse et des réflexions de nos pasteurs.',
//     cta: { label: 'Lire les actualités', href: '/actualites' }
//   },
//   {
//     id: '5',
//     image: '/img/pere.jpg',
//     badge: 'Solidarité',
//     title: 'Soutenez la Mission Radiophonique',
//     subtitle: 'Votre générosité permet à la parole d’espérance d’atteindre des milliers de foyers.',
//     cta: { label: 'Faire un don', href: '/dons' }
//   }
// ];

export function HeroCarousel() {
  const { data: customSlides, isLoading } = useHeroSlidesQuery();
  const slides = (customSlides && customSlides.length > 0) ? customSlides : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] rounded-3xl overflow-hidden bg-[#001A0B] shadow-2xl border border-amber-500/20 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. SLIDES BACKGROUND WITH KEN BURNS EFFECT */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {slide.image && (
              <Image
                src={getAbsoluteImageUrl(slide.image)}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            )}

            {/* Couches de dégradés — allégées pour laisser voir l'image */}
<div className="absolute inset-0 bg-gradient-to-t from-[#001A0B]/80 via-[#001A0B]/25 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-r from-[#001A0B]/70 via-[#001A0B]/20 to-transparent hidden sm:block w-2/3" />
<div className="absolute inset-0 bg-black/10" />
          </div>
        );
      })}

      {/* 2. CONTENU DU SLIDE (TITRE + CTA + BADGE) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end sm:justify-center px-6 sm:px-12 lg:px-16 pb-20 sm:pb-0">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          
         

          {/* Titre Principal dynamique */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none drop-shadow-lg">
            {activeSlide?.title}
          </h1>

          {/* Description */}
          {activeSlide?.subtitle && (
            <p className="text-sm sm:text-lg lg:text-xl font-medium text-slate-200 leading-relaxed line-clamp-3 max-w-2xl drop-shadow-md">
              {activeSlide?.subtitle}
            </p>
          )}

          {/* Boutons d'Action (CTA) */}
          {activeSlide?.cta && (
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href={activeSlide.cta.href}
                target={activeSlide.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={activeSlide.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#CA8A04] to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 group/btn"
              >
                <Volume2 className="w-4 h-4" />
                <span>{activeSlide.cta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          )}

        </div>
      </div>

      {/* 3. CONTROLES FLOTTANTS (FLÈCHES + PAUSE) */}
      <div className="absolute right-6 bottom-8 sm:bottom-1/2 sm:translate-y-1/2 z-30 flex sm:flex-col items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3.5 rounded-2xl bg-[#001A0B]/60 hover:bg-[#CA8A04] text-white hover:text-slate-950 backdrop-blur-md border border-white/15 hover:border-[#CA8A04] transition-all duration-300 hover:scale-110 active:scale-90 shadow-lg"
          aria-label="Slide précédente"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-3.5 rounded-2xl bg-[#001A0B]/60 hover:bg-[#CA8A04] text-white hover:text-slate-950 backdrop-blur-md border border-white/15 hover:border-[#CA8A04] transition-all duration-300 hover:scale-110 active:scale-90 shadow-lg hidden sm:flex"
          aria-label={isPaused ? 'Reprendre l’animation' : 'Mettre en pause'}
        >
          {isPaused ? <Play className="w-5 h-5 fill-current" /> : <Pause className="w-5 h-5 fill-current" />}
        </button>

        <button
          onClick={nextSlide}
          className="p-3.5 rounded-2xl bg-[#001A0B]/60 hover:bg-[#CA8A04] text-white hover:text-slate-950 backdrop-blur-md border border-white/15 hover:border-[#CA8A04] transition-all duration-300 hover:scale-110 active:scale-90 shadow-lg"
          aria-label="Slide suivante"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 4. INDICATEURS DE PROGRESSION BARRES AVEC ANIMATION */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-30 flex items-center gap-2 max-w-[calc(100%-180px)]">
        {slides.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="group py-2 focus:outline-none"
              aria-label={`Aller au slide ${idx + 1}`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-500 overflow-hidden relative ${
                  isActive ? 'w-10 sm:w-16 bg-white/30' : 'w-3 sm:w-4 bg-white/20 hover:bg-white/50'
                }`}
              >
                {isActive && (
                  <div
                    className={`h-full bg-amber-400 rounded-full ${
                      !isPaused ? 'animate-progress' : 'w-full'
                    }`}
                    style={{
                      animationDuration: `${AUTOPLAY_INTERVAL}ms`,
                      animationTimingFunction: 'linear'
                    }}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}