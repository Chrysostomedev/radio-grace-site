import Link from 'next/link';
import { Home, Radio, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBF6EA] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Décor de fond */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#CA8A04]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#004D20]/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Badge radio */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004D20]/10 text-[#004D20] text-xs font-black uppercase tracking-wider mb-8">
          <Radio className="w-3.5 h-3.5" />
          Radio Grâce-Espoir
        </div>

        {/* Code 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter text-[#004D20]/15 select-none">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-2 text-2xl sm:text-3xl font-black text-[#001A0B] tracking-tight">
          Fréquence introuvable
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#163A2C]/60 leading-relaxed max-w-sm mx-auto">
          Cette page n’existe pas ou a changé d’antenne.
          Revenez à l’accueil pour continuer à écouter la voix de l’Espoir.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#CA8A04] to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black text-sm transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95"
          >
            <Home className="w-4 h-4" />
            Retour à l’accueil
          </Link>

          <Link
            href="/emissions"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-[#004D20]/15 bg-white text-[#004D20] font-bold text-sm hover:bg-[#004D20] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Voir les émissions
          </Link>
        </div>
      </div>

      {/* Ligne décorative bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#004D20] via-[#CA8A04] to-[#004D20]" />
    </div>
  );
}