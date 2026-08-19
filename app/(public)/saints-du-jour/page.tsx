'use client';

/**
 * Page — Saints du Jour
 * Calendrier liturgique des saints célébrés aujourd'hui.
 */

import { Sparkles, Heart, Calendar, ChevronRight, Star, BookOpen, Loader2, Church } from 'lucide-react';
import { useSaintsDuJour } from '@/hooks/useSaints';

export default function SaintsPage() {
  const { data: saints, isLoading } = useSaintsDuJour();

  const todayDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Couleurs par type de fête
  const getFeteStyle = (fete: string) => {
    switch (fete.toLowerCase()) {
      case 'solennité':
        return { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200' };
      case 'fête':
        return { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200' };
      case 'mémoire':
        return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' };
      default:
        return { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' };
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] pb-20">

      {/* === HERO HEADER === */}
      <section className="relative bg-gradient-to-br from-[#004D20] via-[#003817] to-[#002C13] text-white overflow-hidden">
        {/* Motifs décoratifs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#CA8A04]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <Star className="absolute top-10 right-16 w-28 h-28 text-white/[0.03] rotate-12" />
          <Church className="absolute bottom-6 left-10 w-20 h-20 text-white/[0.04] -rotate-6" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Martyrologe Romain
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
                Les Saints du Jour
              </h1>
              <p className="text-white/60 text-sm font-medium max-w-md">
                Découvrez les saints et bienheureux célébrés par l&apos;Église universelle en ce jour.
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20 space-y-6">

        {isLoading && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-full bg-[#004D20]/5 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-[#004D20] animate-spin" />
            </div>
            <p className="text-sm text-slate-500 font-medium">Chargement des saints du jour…</p>
          </div>
        )}

        {saints && saints.map((saint, index) => {
          const style = getFeteStyle(saint.fete);
          return (
            <div key={index} className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
              {/* Badge fête */}
              <div className="px-6 sm:px-10 pt-8 pb-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${style.bg} ${style.text} ${style.border} border text-xs font-bold uppercase tracking-wide`}>
                  <Star className="w-3 h-3" />
                  {saint.fete}
                </span>
              </div>

              {/* Nom et titre */}
              <div className="px-6 sm:px-10 pb-6 space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-[#004D20] leading-tight">
                  {saint.nom}
                </h2>
                <p className="text-sm font-semibold text-[#CA8A04]">{saint.titre}</p>
              </div>

              {/* Description */}
              <div className="px-6 sm:px-10 pb-6">
                <p className="text-base leading-relaxed text-slate-600">
                  {saint.description}
                </p>
              </div>

              {/* Citation (si disponible) */}
              {saint.citation && (
                <div className="mx-6 sm:mx-10 mb-8 bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-slate-200/60">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <blockquote className="text-sm italic text-slate-700 leading-relaxed font-medium">
                      {saint.citation}
                    </blockquote>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Liens rapides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <a href="/evangile-du-jour" className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004D20] to-[#007A33] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#004D20] transition-colors">Évangile du Jour</h4>
              <p className="text-xs text-slate-500">Lecture biblique quotidienne</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#CA8A04] transition-colors shrink-0" />
          </a>

          <a href="/prieres" className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#CA8A04] to-[#b07803] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#004D20] transition-colors">Intentions de Prière</h4>
              <p className="text-xs text-slate-500">Déposez vos intentions</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#CA8A04] transition-colors shrink-0" />
          </a>
        </div>
      </div>
    </main>
  );
}