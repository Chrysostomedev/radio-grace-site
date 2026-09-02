'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePublicitesQuery } from '@/hooks/usePublicites';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * PublicitesCarousel — Carrousel de publicités défilant en haut de page
 * Affiche les publicités avec position 'top' en boucle animée
 */
export function PublicitesCarousel() {
  const { data: publicites = [], isLoading } = usePublicitesQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Défilement automatique
  useEffect(() => {
    if (!autoplay || !publicites || publicites.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % publicites.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, publicites.length, publicites]);

  // Early return après tous les hooks
  if (isLoading || !publicites || publicites.length === 0) {
    return null;
  }

  const currentPub = publicites[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + publicites.length) % publicites.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % publicites.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#004D20] to-[#003817] shadow-lg relative overflow-hidden">
      {/* Hauteur réduite sur mobile : h-24 (96px) → sm:h-36 → lg:h-44 */}
      <div className="relative max-w-full h-24 sm:h-36 lg:h-44 overflow-hidden group">
        
        {/* Slide actuel */}
        <Link
          href={currentPub.lien || '#'}
          target={currentPub.lien ? '_blank' : undefined}
          rel={currentPub.lien ? 'noopener noreferrer' : undefined}
          className="block w-full h-full relative"
        >
          {currentPub.image ? (
            <Image
              src={currentPub.image}
              alt={currentPub.titre}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={currentIndex === 0}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#004D20] to-[#003817] text-white text-center px-4">
              <h3 className="text-base sm:text-xl font-bold">{currentPub.titre}</h3>
            </div>
          )}

          {/* Overlay — padding réduit sur mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-center justify-end p-2.5 sm:p-5">
            <h3 className="text-white font-bold text-xs sm:text-base text-center line-clamp-1 sm:line-clamp-2">
              {currentPub.titre}
            </h3>
            {currentPub.lien && (
              <span className="text-[#CA8A04] text-[10px] sm:text-xs font-semibold mt-0.5 sm:mt-1.5 hidden sm:inline">
                Cliquez pour découvrir →
              </span>
            )}
          </div>
        </Link>

        {/* Flèches navigation */}
        {publicites.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-3 rounded-full backdrop-blur-sm"
              aria-label="Publicité précédente"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-3 rounded-full backdrop-blur-sm"
              aria-label="Publicité suivante"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots — plus compact sur mobile */}
      {publicites.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2.5 bg-[#003817]/50">
          {publicites.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'w-4 sm:w-6 bg-[#CA8A04]'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Aller à la publicité ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {publicites.length > 1 && (
        <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 text-[9px] sm:text-xs font-bold text-white/70 bg-black/40 px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {publicites.length}
        </div>
      )}
    </div>
  );
}