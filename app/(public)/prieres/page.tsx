// app/(public)/prieres/page.tsx
"use client";

import { IntentionsPriereForm } from "@/components/sections/IntentionsPriereForm";

export default function PrieresPage() {
  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#003817] via-[#004D20] to-[#001a0d] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <span className="inline-block text-[#CA8A04] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            💝 Espace de Dévotion
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Intentions de Prière
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto">
            Partagez vos intentions et priez avec notre communauté
          </p>
        </div>
      </section>

      <IntentionsPriereForm />

      {/* Section témoignages ou infos */}
      <section className="py-16 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Une communauté de prière
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Chaque jour, Radio Grâce-Espoir se rassemble pour prier. Vos
              intentions sont portées lors de nos rendez-vous d'antenne et
              partagées avec notre communauté d'auditeurs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Que vous soyez en détresse, en action de grâces ou en
              intercession, nous sommes là pour vous accompagner dans votre
              cheminement spirituel.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Comme nous aide-t-il?
            </h3>
            <ul className="space-y-3">
              {[
                "Portez vos demandes auprès de Dieu",
                "Trouvez du soutien dans une communauté",
                "Recevez des conseils spirituels",
                "Célébrez vos victoires ensemble",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="inline-block w-2 h-2 bg-[#CA8A04] rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
