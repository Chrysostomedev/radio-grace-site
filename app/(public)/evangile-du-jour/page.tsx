'use client';

/**
 * Page — Évangile du Jour
 * Lecture biblique quotidienne via l'API Bolls.life (Louis Segond 1910)
 */

import { BookOpen, Calendar, ChevronRight, Loader2, BookMarked, Cross, Sparkles } from 'lucide-react';
import { useEvangileDuJour } from '@/hooks/useEvangile';

export default function EvangilePage() {
  const { data, isLoading, error } = useEvangileDuJour();

  const todayDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] pb-20">

      {/* === HERO HEADER === */}
      <section className="relative bg-gradient-to-br from-[#004D20] via-[#003817] to-[#002C13] text-white overflow-hidden">
        {/* Motifs décoratifs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA8A04]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          <Cross className="absolute top-12 right-12 w-32 h-32 text-white/[0.03] rotate-12" />
          <BookMarked className="absolute bottom-8 left-8 w-24 h-24 text-white/[0.04] -rotate-6" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                <BookOpen className="w-3.5 h-3.5" /> Liturgie du jour
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
                Évangile du Jour
              </h1>
              <p className="text-white/60 text-sm font-medium max-w-md">
                La Parole de Dieu pour nourrir votre journée. Lecture quotidienne tirée de la Bible Louis Segond.
              </p>
            </div>
            <div className="flex items-center gap-2 text-amber-300 bg-black/20 px-5 py-3 rounded-2xl text-xs font-semibold backdrop-blur-md w-fit border border-white/5">
              <Calendar className="w-4 h-4" />
              <span className="capitalize">{todayDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* === CONTENU PRINCIPAL === */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">

        {/* Carte de lecture */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="w-16 h-16 rounded-full bg-[#004D20]/5 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-[#004D20] animate-spin" />
              </div>
              <p className="text-sm text-slate-500 font-medium">Chargement de la lecture du jour…</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-24 gap-4 px-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700">Impossible de charger l&apos;Évangile</p>
                <p className="text-xs text-slate-500 mt-1">Veuillez réessayer plus tard.</p>
              </div>
            </div>
          )}

          {data && (
            <>
              {/* En-tête de la lecture */}
              <div className="border-b border-slate-100 px-6 sm:px-10 pt-8 pb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#CA8A04]" />
                  <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider">
                    {data.label}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#004D20] leading-snug">
                  {data.title}
                </h2>
                <p className="text-sm text-slate-500 font-medium mt-2 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5" />
                  {data.reference}
                </p>
              </div>

              {/* Versets */}
              <div className="px-6 sm:px-10 py-8 space-y-0">
                <div className="border-l-4 border-[#007A33]/30 pl-5 sm:pl-8 space-y-4">
                  {data.verses.map((verse) => (
                    <div key={verse.verse} className="group">
                      <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
                        <sup className="text-[#CA8A04] font-black text-xs mr-1.5 select-none">
                          {verse.verse}
                        </sup>
                        {verse.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Méditation */}
              <div className="border-t border-slate-100 px-6 sm:px-10 py-8 bg-[#FAF9F6]/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#004D20]/5 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#CA8A04]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase text-[#004D20] tracking-wider mb-2">
                      Méditation Spirituelle
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Chaque jour, la parole de Dieu vient éclairer nos pas. Que cette lecture
                      fortifie votre foi et soutienne votre journée dans l&apos;espérance.
                      Méditez ces versets en silence et laissez-les résonner dans votre cœur.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Liens rapides */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/saints-du-jour" className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004D20] to-[#007A33] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#004D20] transition-colors">Saints du Jour</h4>
              <p className="text-xs text-slate-500">Découvrez les saints célébrés aujourd&apos;hui</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#CA8A04] transition-colors shrink-0" />
          </a>

          <a href="/prieres" className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#CA8A04] to-[#b07803] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#004D20] transition-colors">Prières</h4>
              <p className="text-xs text-slate-500">Intentions de prière et neuvaines</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#CA8A04] transition-colors shrink-0" />
          </a>
        </div>
      </div>
    </main>
  );
}