'use client';

import { Sun, Calendar, Sparkles, HeartHandshake, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const NEUVAINES_LIST = [
  {
    id: 'neuvaine-sacre-coeur',
    title: 'Neuvaine au Sacré-Cœur de Jésus',
    description: 'Neuf jours de prière confiante pour obtenir des grâces puissantes et réconforter les cœurs en peine.',
    duration: '9 jours',
    category: 'Grâces & Secours',
    popular: true,
  },
  {
    id: 'neuvaine-saint-joseph',
    title: 'Neuvaine à Saint Joseph',
    description: 'Confiez votre travail, votre famille et vos soucis matériels au patron et protecteur des familles.',
    duration: '9 jours',
    category: 'Famille & Travail',
    popular: true,
  },
  {
    id: 'neuvaine-marie-qui-defait-les-noeuds',
    title: 'Neuvaine à Marie qui défait les nœuds',
    description: 'Pour dénouer les difficultés complexes, les conflits intraitables et les situations bloquées.',
    duration: '9 jours',
    category: 'Délivrance',
    popular: false,
  },
  {
    id: 'neuvaine-esprit-saint',
    title: 'Neuvaine à l’Esprit Saint',
    description: 'Invoquez les sept dons de l’Esprit Saint pour être guidé, fortifié et éclairé dans vos choix.',
    duration: '9 jours',
    category: 'Renouveau Spirituel',
    popular: false,
  },
];

export default function NeuvainesPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* BANNIÈRE EN-TÊTE */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-100 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sun className="w-3.5 h-3.5" /> Dévotion Continue
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Les Neuvaines
            </h1>
            <p className="text-sm sm:text-base text-amber-100 max-w-2xl leading-relaxed">
              La neuvaine est une prière offerte pendant neuf jours consécutifs pour confier une intention particulière ou préparer une grande fête spirituelle.
            </p>
          </div>
          
          {/* Motifs décoratifs d'arrière-plan */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* GUIDAGE / INFORMATION */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Comment prier une neuvaine ?</h3>
              <p className="text-xs text-slate-500">Consacrez un moment fixe chaque jour pendant 9 jours consécutifs.</p>
            </div>
          </div>
          <Link 
            href="/priorites-prieres"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#007A33] text-white text-xs font-bold hover:bg-[#004D20] transition-colors shrink-0"
          >
            <HeartHandshake className="w-4 h-4" /> Deposer une intention
          </Link>
        </div>

        {/* GRILLE DES NEUVAINES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEUVAINES_LIST.map((neuvaine) => (
            <div 
              key={neuvaine.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wide">
                    {neuvaine.category}
                  </span>
                  {neuvaine.popular && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      <Sparkles className="w-3 h-3" /> Recommandée
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-extrabold text-[#004D20]">
                  {neuvaine.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {neuvaine.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Durée : <strong className="text-slate-700">{neuvaine.duration}</strong>
                </span>
                <button className="inline-flex items-center gap-1 text-xs font-bold text-[#007A33] hover:text-[#004D20] transition-colors">
                  Commencer la prière <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}