import { Cross, BookOpen } from 'lucide-react';

export default function ChapeletPage() {
  const mystery = "Mystères Glorieux (Mercredi & Dimanche)";

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="bg-emerald-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-emerald-700">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Cross className="w-3.5 h-3.5" /> Prières du Rosaire
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Le Saint Chapelet
          </h1>
          <p className="text-xs text-emerald-200 mt-2">{mystery}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["La Résurrection", "L'Ascension", "La Pentecôte", "L'Assomption"].map((step, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 text-[#007A33] font-black text-sm flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{step}</h3>
                <p className="text-xs text-slate-500 mt-1">1 Notre Père, 10 Je vous salue Marie, 1 Gloire au Père</p>
              </div>
            </div>
          ))}
        </div>  

      </div>
    </main>
  );
}