'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Loader, Megaphone, Zap } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Flash {
  id: number;
  message: string;
  type?: 'info' | 'urgent' | 'promo';
  lien?: string;
  date_debut?: string;
  date_fin?: string;
}

interface FlashsSectionProps {
  /**
   * 'full'    → section pleine largeur avec header + cards (page d'accueil, etc.)
   * 'compact' → bandeau rotatif une ligne (intégré dans la TopBar)
   */
  variant?: 'full' | 'compact';
}

export function FlashsSection({ variant = 'full' }: FlashsSectionProps) {
  const { data: flashs, isLoading } = useQuery<Flash[]>({
    queryKey: ['site-flashs'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/flashs`);
      if (!response.ok) throw new Error('Erreur chargement flashs');
      const data = await response.json();
      return data.data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes (flashs changent souvent)
  });

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'urgent':
        return '🚨';
      case 'promo':
        return '🎉';
      default:
        return '📢';
    }
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'urgent':
        return 'bg-red-100/50 border-red-300 text-red-700';
      case 'promo':
        return 'bg-amber-100/50 border-amber-300 text-amber-700';
      default:
        return 'bg-blue-100/50 border-blue-300 text-blue-700';
    }
  };

  /* ─────────────────────────────────────────────
     Rotation (utilisée uniquement en mode compact)
  ───────────────────────────────────────────── */
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (variant !== 'compact' || !flashs || flashs.length < 2) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % flashs.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [variant, flashs]);

  /* ─────────────────────────────────────────────
     VARIANTE COMPACTE — bandeau topbar
  ───────────────────────────────────────────── */
  if (variant === 'compact') {
    if (isLoading || !flashs || flashs.length === 0) return null;

    const current = flashs[index % flashs.length];

    return (
      <div className="flex-1 min-w-0 flex items-center justify-center gap-2 px-2">
        <Zap className="w-3.5 h-3.5 text-[#CA8A04] shrink-0" />
        <span
          key={current.id}
          className={`text-[11px] sm:text-xs font-semibold truncate transition-opacity duration-300 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {current.message}
        </span>
        {current.lien && (
          <a
            href={current.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-[11px] font-bold text-[#CA8A04] hover:text-white underline underline-offset-2 shrink-0 transition-colors"
          >
            En savoir plus
          </a>
        )}
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     VARIANTE COMPLÈTE — section pleine largeur (inchangée)
  ───────────────────────────────────────────── */
  if (isLoading) {
    return (
      <section className="py-8 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-center py-8">
          <Loader className="w-6 h-6 animate-spin text-[#163A2C]" />
        </div>
      </section>
    );
  }

  if (!flashs || flashs.length === 0) {
    return null;
  }

  // Limiter à 3 derniers flashs
  const recentFlashs = flashs.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-6 w-full bg-[#163A2C]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#CA8A04]/20 border border-[#CA8A04]/50">
            <Megaphone size={20} className="text-[#CA8A04]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Infos-Flash
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Les dernières annonces importantes
            </p>
          </div>
        </div>

        {/* Grid de flashs */}
        <div className="space-y-3">
          {recentFlashs.map((flash) => (
            <div
              key={flash.id}
              className={`group p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${getTypeColor(flash.type)}`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <span className="text-2xl shrink-0 mt-1">{getTypeIcon(flash.type)}</span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm sm:text-base leading-snug">
                    {flash.message}
                  </p>

                  {/* Link si présent */}
                  {flash.lien && (
                    <a
                      href={flash.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold mt-2 hover:opacity-80 transition-opacity"
                    >
                      <span>En savoir plus</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {flashs.length > 3 && (
          <div className="mt-6 text-center">
            <p className="text-xs sm:text-sm text-white/70">
              +{flashs.length - 3} autre{flashs.length - 3 > 1 ? 's' : ''} annonce{flashs.length - 3 > 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}