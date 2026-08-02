import { PageHero } from '@/components/sections/PageHero';
import { DonInteractiveSection } from '@/components/don/DonInteractiveSection';
import { Radio, Heart, RadioTower, Users, ShieldCheck } from 'lucide-react';

export default function DonPage() {
  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Hero Header */}
      <PageHero
        title="Soutenir la Mission"
        subtitle="Grâce à vos dons, nous continuons de porter le message d'Espérance dans les foyers."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Dons et Soutien' },
        ]}
      />

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section Intentions / Edito */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-amber-100/80 shadow-xs relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#004D20]/10 text-[#004D20]">
                <Radio className="w-3.5 h-3.5 text-[#CA8A04]" />
                <span>Radio Associative et Indépendante</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Chaque voix portée est un cœur touché
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Radio Grâce-Espoir fonctionne grâce à la générosité de ses auditeurs et au dévouement de ses bénévoles. Vos contributions permettent d'entretenir nos équipements de diffusion, d'étendre notre couverture et d'assurer une présence continue à vos côtés.
              </p>
            </div>
          </div>

          {/* Module de Paiement / Dons */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black text-slate-900">Choisir votre mode de contribution</h2>
              <p className="text-xs text-slate-500">Transparence et sécurité garanties pour tous vos virements et transferts.</p>
            </div>

            <DonInteractiveSection />
          </div>

          {/* Piliers d'Impact de la Radio */}
          <div className="space-y-8">
            <h3 className="text-xl font-extrabold text-slate-900 text-center">Où vont vos dons ?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
                <div className="p-3 bg-amber-50 text-[#CA8A04] rounded-xl w-fit border border-amber-100">
                  <RadioTower className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Équipement & FM</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Maintenance des pylônes, émetteurs FM et serveurs de streaming Web pour maintenir une diffusion fluide.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
                <div className="p-3 bg-emerald-50 text-[#004D20] rounded-xl w-fit border border-emerald-100">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Projets Communautaires</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Organisation d&apos;émissions sur le terrain, de temps de prière en direct et d&apos;actions de solidarité.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
                <div className="p-3 bg-sky-50 text-sky-700 rounded-xl w-fit border border-sky-100">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Soutien aux Émissions</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Production de nouveaux programmes culturels, spirituels et éducatifs pour les jeunes et les familles.
                </p>
              </div>

            </div>
          </div>

          {/* Mentions légales / Confiance */}
          <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#004D20] shrink-0" />
              <p>
                <strong>Besoin d&apos;un reçu de don ou d&apos;une attestation ?</strong> Écrivez-nous directement avec vos références de virement à notre adresse officielle.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}