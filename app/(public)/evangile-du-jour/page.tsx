import { BookOpen, Calendar } from 'lucide-react';

export default function EvangilePage() {
  const todayDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header de la page */}
        <div className="bg-[#004D20] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#CA8A04]/30 relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" /> Liturgie du jour
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Évangile du Jour
              </h1>
            </div>
            <div className="flex items-center gap-2 text-amber-300 bg-black/20 px-4 py-2 rounded-2xl text-xs font-semibold backdrop-blur-md w-fit">
              <Calendar className="w-4 h-4" />
              <span className="capitalize">{todayDate}</span>
            </div>
          </div>
        </div>

        {/* Contenu du texte sacré */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200/80 space-y-6 text-slate-800">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider">
              Lecture de l'Évangile selon Saint Matthieu
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#004D20] mt-1">
              « Vous êtes la lumière du monde »
            </h2>
          </div>

          <blockquote className="italic text-base sm:text-lg leading-relaxed text-slate-700 border-l-4 border-[#007A33] pl-4 sm:pl-6 py-1">
            En ce temps-là, Jésus disait à ses disciples : « Vous êtes le sel de la terre. Mais si le sel devient fade, avec quoi lui rendra-t-on sa saveur ? Il ne vaut plus rien : on le jette dehors et il est piétiné par les gens... »
          </blockquote>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-black uppercase text-[#004D20] tracking-wider mb-2">
              Méditation Spirituelle
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Chaque jour, la parole de Dieu vient éclairer nos pas. Que cette lecture fortifie votre foi et soutienne votre journée dans l'espérance.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}