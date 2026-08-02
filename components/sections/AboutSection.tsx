'use client';

/**
 * Section — Notre Histoire (Qui sommes-nous)
 */

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Radio, Users, Heart, ArrowRight } from 'lucide-react';

export interface AboutSectionProps {
  title: string;
  subtitle: string;
  content: string;
  image?: string;
  stats?: { label: string; value: string }[];
}

export function AboutSection({ title, subtitle, content, image, stats }: AboutSectionProps) {
  const paragraphs = content ? content.split('\n\n').filter(Boolean) : [];

  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
      
      {/* Arrière-plan décoratif subtil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#007A33]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EAB308]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Visual Composition / Cadre Image (5 cols) */}
        {image && (
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Halos décoratifs arrière-plan */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#007A33] to-[#EAB308] opacity-20 blur-lg" />

              {/* Cadre Image Principal */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#007A33]/15 shadow-2xl bg-[#002C13]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C13]/80 via-transparent to-transparent" />
                
                {/* Overlay Texte Bas d'Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#002C13]/80 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EAB308] text-[#002C13] flex items-center justify-center font-bold flex-shrink-0">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#EAB308]">
                        Antenne & Diffusion
                      </p>
                      <p className="text-xs text-white/90 font-medium">
                        Émissions en direct & contenu spirituel 24h/7d
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Haut Droite) */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white border border-[#EAB308]/40 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#007A33]/10 flex items-center justify-center text-[#007A33]">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#004D20]">Une Mission</span>
                  <span className="block text-[11px] text-slate-500 font-medium">Édifier & Inspirer</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Texte / Contenu Éditorial (7 cols ou 12 cols si pas d'image) */}
        <div className={`${image ? 'lg:col-span-7 order-1 lg:order-2' : 'lg:col-span-12'}`}>
          
          {/* Badge Sur-titre */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007A33]/10 border border-[#007A33]/20 text-[#007A33] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#CA8A04]" />
            <span>À Propos de la Station</span>
          </div>

          {/* Titre & Sous-titre */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004D20] tracking-tight leading-tight mb-3">
            {title}
          </h2>
          
          <p className="text-lg sm:text-xl font-semibold text-[#CA8A04] mb-6 leading-relaxed">
            {subtitle}
          </p>

          {/* Corps de texte avec Lettrine sur le 1er paragraphe */}
          <div className="space-y-4 text-slate-700 text-base leading-relaxed">
            {paragraphs.map((paragraph, index) => {
              if (index === 0) {
                return (
                  <p key={index} className="first-letter:float-left first-letter:text-4xl first-letter:font-extrabold first-letter:text-[#007A33] first-letter:mr-3 first-letter:leading-none">
                    {paragraph}
                  </p>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Chiffres Clés Optionnels */}
          {stats && stats.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="block text-2xl font-extrabold text-[#007A33]">{stat.value}</span>
                  <span className="text-xs text-slate-600 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#007A33]/10 flex items-center justify-center text-[#007A33] font-bold">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base font-extrabold text-[#004D20]">24h / 7d</span>
                  <span className="text-xs text-slate-500">Direct continu</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EAB308]/20 flex items-center justify-center text-[#CA8A04] font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base font-extrabold text-[#004D20]">100%</span>
                  <span className="text-xs text-slate-500">Communauté</span>
                </div>
              </div>
            </div>
          )}

          {/* CTA vers la page dédiée */}
          <div className="mt-8 pt-2">
            <Link
              href="/qui-sommes-nous"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#007A33] text-white font-bold text-sm hover:bg-[#004D20] transition-all shadow-md hover:shadow-lg duration-200 group"
            >
              En savoir plus sur notre mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}