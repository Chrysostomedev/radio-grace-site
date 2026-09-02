// app/(public)/programmes/page.tsx
"use client";

import { GrilleProgammesHero } from "@/components/sections/GrilleProgammesHero";
import { Metadata } from "next";

export default function ProgrammesPage() {
  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      <GrilleProgammesHero />

      {/* Section info supplémentaire */}
      <section className="py-16 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Votre grille complète
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Radio Grâce-Espoir propose une programmation riche et variée,
              adaptée à tous les moments de la journée. Découvrez nos émissions
              spirituelles, nos magazines et nos directs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Chaque programme est conçu pour vous accompagner dans votre
              quotidien, du matin au soir, du lundi au dimanche.
            </p>
          </div>
{/* 
          <div className="bg-[#004D20]/10 border-l-4 border-[#004D20] p-6 rounded-r-lg space-y-3">
            <h4 className="font-bold text-slate-900 text-lg"> Conseil</h4>
            <p className="text-sm text-slate-700">
              Abonnez-vous à nos alertes pour ne manquer aucune émission spéciale
              ou en direct!
            </p>
            <button className="mt-4 inline-flex items-center gap-2 bg-[#004D20] hover:bg-[#003817] text-white font-bold text-sm px-4 py-2 rounded-lg transition-all duration-200">
              <span>S'abonner aux notifications</span>
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
