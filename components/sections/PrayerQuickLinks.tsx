'use client';

import Link from 'next/link';
import { BookOpen, Sparkles, HeartHandshake, Cross, Sun } from 'lucide-react';

const QUICK_LINKS = [
  {
    title: "Évangile du Jour",
    description: "Méditation et lectures de la liturgie quotidienne",
    href: "/evangile-du-jour",
    icon: BookOpen,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Les Saints du Jour",
    description: "Découvrez la vie et la mémoire des saints célébrés",
    href: "/saints-du-jour",
    icon: Sparkles,
    color: "from-[#007A33] to-[#004D20]",
  },
  {
    title: "Déposer une Intention",
    description: "Confiez vos demandes et grâces à la communauté",
    href: "/priorites-prieres",
    icon: HeartHandshake,
    color: "from-red-600 to-red-700",
  },
  {
    title: "Chapelet",
    description: "Récitation des mystères du Saint Rosaire",
    href: "/chapelet",
    icon: Cross,
    color: "from-emerald-600 to-teal-700",
  },
  {
    title: "Neuvaines",
    description: "Prières continues sur neuf jours pour vos intentions",
    href: "/neuvaines",
    icon: Sun,
    color: "from-amber-600 to-yellow-600",
  },
];

export function PrayerQuickLinks() {
  return (
    <section className="w-full py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-2xl font-black text-[#004D20] uppercase tracking-wide">
          Vie Spirituelle & Prières
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Accédez aux lectures du jour, demandes de prières et dévotions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {QUICK_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-slate-800 flex flex-col justify-between min-h-[160px]"
            >
              {/* Dégradé d'accentuation en arrière-plan */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity`}
              />

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-xs font-black tracking-widest uppercase text-amber-400">
                  Dévotion
                </span>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 mt-4">
                <h3 className="text-lg font-black uppercase tracking-wide text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}