import { Sparkles, Heart } from 'lucide-react';

export default function SaintsPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="bg-gradient-to-r from-[#004D20] to-[#007A33] text-white p-6 sm:p-8 rounded-3xl shadow-xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Martrologe Romain
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Les Saints du Jour
          </h1>
        </div>

        {/* Fiche du Saint */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-lg bg-amber-100 text-[#CA8A04] text-xs font-bold uppercase">
              Mémoire Obligatoire
            </span>
          </div>

          <h2 className="text-2xl font-black text-[#004D20]">
            Saint Jean-Marie Vianney (Curé d'Ars)
          </h2>

          <p className="text-sm leading-relaxed text-slate-600">
            Patron de tous les curés du monde, Saint Jean-Marie Vianney s'est distingué par sa vie de prière, son austérité et son dévouement inébranlable au sacrement de la réconciliation.
          </p>

          <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-slate-200/60 flex items-start gap-3 mt-4">
            <Heart className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 italic">
              « L'oraison n'est autre chose qu'une union avec Dieu. Quand on a le cœur pur et uni à Dieu, on éprouve un baume, une douceur qui enivre... »
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}