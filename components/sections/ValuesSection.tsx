import { HeartHandshake, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: HeartHandshake,
      title: 'Spiritualité',
      description:
        'Nous plaçons la foi et la spiritualité au cœur de toutes nos actions, programmes et contenus diffusés.',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/60',
      accentColor: 'group-hover:border-amber-400',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description:
        "L'amour du prochain, la solidarité et la compassion guident chacun de nos gestes et échanges avec la communauté.",
      iconBg: 'bg-rose-50 text-rose-600 border-rose-200/60',
      accentColor: 'group-hover:border-rose-400',
    },
    {
      icon: Sparkles,
      title: 'Espoir',
      description:
        "Nous apportons une parole d'encouragement et un message d'espoir à ceux qui traversent des moments difficiles.",
      iconBg: 'bg-[#007A33]/10 text-[#007A33] border-[#007A33]/20',
      accentColor: 'group-hover:border-[#007A33]/50',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
      
      {/* Halo d'arrière-plan très subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#007A33]/5 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004D20] tracking-tight">
            Nos Valeurs
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Les piliers fondamentaux qui guident la mission et la ligne éditoriale de notre station.
          </p>
        </div>

        {/* Grille des Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start ${item.accentColor}`}
              >
                {/* Icône de la Valeur */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs mb-6 transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                >
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>

                {/* Titre */}
                <h3 className="text-xl font-extrabold text-[#004D20] mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Petite ligne d'accentuation en bas au survol */}
                <div className="mt-auto pt-6 w-full">
                  <div className="h-1 w-12 rounded-full bg-slate-100 group-hover:w-full group-hover:bg-[#CA8A04] transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}