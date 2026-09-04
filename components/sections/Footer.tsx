'use client';

/**
 * Section — Footer Principal
 */

import Link from 'next/link';
import Image from 'next/image';
import { BRAND, CONTACT_INFO, NAVIGATION } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock, Radio, Heart, ArrowUpRight } from 'lucide-react';

// Icônes Réseaux Sociaux Réelles (SVG Vecteurs)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.687-.833-1.947-.929-.26-.096-.45-.143-.639.143-.19.286-.735.929-.901 1.119-.166.19-.333.215-.618.072-.285-.143-1.206-.445-2.298-1.418-.85-.758-1.424-1.694-1.591-1.98-.166-.285-.018-.439.125-.581.129-.128.285-.333.428-.5.143-.167.19-.286.285-.476.095-.19.048-.357-.024-.5-.071-.143-.639-1.541-.876-2.112-.23-.556-.465-.481-.639-.49-.166-.008-.356-.01-.546-.01s-.5.071-.76.357c-.26.286-.999.976-.999 2.38 0 1.404 1.022 2.76 1.165 2.951.143.19 2.012 3.073 4.875 4.311.681.294 1.212.47 1.626.601.684.217 1.307.186 1.801.112.551-.082 1.687-.69 1.924-1.357.237-.667.237-1.238.166-1.357-.07-.119-.26-.19-.545-.333z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002C13] text-[#FAF9F6] border-t-4 border-[#CA8A04] relative z-10 pt-16 pb-28 sm:pb-24">
      
      {/* 1. CTA Interactif Supérieur
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <div className="bg-gradient-to-r from-[#004D20] to-[#007A33] rounded-3xl p-6 sm:p-8 border border-[#EAB308]/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#EAB308]/20 border border-[#EAB308]/40 flex items-center justify-center text-[#EAB308] flex-shrink-0 hidden sm:flex">
              <Heart className="w-7 h-7 fill-current" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Besoin de soutiens et de prières ?
              </h3>
              <p className="text-sm text-[#FAF9F6]/80 mt-1">
                Soumettez vos intentions. Notre communauté et notre équipe pastorale prient pour vous.
              </p>
            </div>
          </div>
          <Link
            href="/priorites-prieres"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#EAB308] text-[#002C13] font-bold text-sm hover:bg-[#CA8A04] hover:text-white transition-all shadow-lg duration-200 flex-shrink-0"
          >
            Déposer une intention
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div> */}

      {/* 2. Colonnes Principales */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Colonne 1: Logo & Vision */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white/10 rounded-full p-1 border border-white/20">
                <Image
                  src="/img/log.png"
                  alt="Radio Grâce-Espoir"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block leading-tight">
                  {BRAND.name}
                </span>
                <span className="text-xs text-[#EAB308] font-semibold tracking-wider uppercase">
                  {BRAND.tagline || 'L\'Evangile au coeur de l\'Homme'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF9F6]/70 leading-relaxed">
              {BRAND.description ||
                'Station de radio chrétienne vouée à la diffusion de l’Évangile, de la louange et de messages d’espoir pour l’édification spirituelle.'}
            </p>

            {/* Réseaux Sociaux Réels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#EAB308] block mb-2.5">
                Rejoignez notre communauté
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF9F6]/80 hover:text-[#EAB308] hover:bg-white/10 hover:border-[#EAB308]/40 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
               
                 
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF9F6]/80 hover:text-[#EAB308] hover:bg-white/10 hover:border-[#EAB308]/40 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/2250779379838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF9F6]/80 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/40 transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne 2: Navigation rapide */}
          <div>
            <h4 className="text-sm font-bold text-[#EAB308] uppercase tracking-wider mb-4 border-l-2 border-[#EAB308] pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
  {NAVIGATION.flatMap((item) => {
    // Sous-menu → liens enfants
    if (item.children && item.children.length > 0) {
      return item.children.map((child) => (
        <li key={child.id || child.href}>
          <Link
            href={child.href}
            className="text-[#FAF9F6]/80 hover:text-[#EAB308] hover:translate-x-1 transition-all inline-block"
          >
            {child.label}
          </Link>
        </li>
      ));
    }

    // Pas de href → ignore
    if (!item.href) return [];

    // Lien simple
    return [
      <li key={item.id || item.href}>
        <Link
          href={item.href}
          className="text-[#FAF9F6]/80 hover:text-[#EAB308] hover:translate-x-1 transition-all inline-block"
        >
          {item.label}
        </Link>
      </li>,
    ];
  })}
</ul>
          </div>

          {/* Colonne 3: Grille des Programmes */}
          <div>
            <h4 className="text-sm font-bold text-[#EAB308] uppercase tracking-wider mb-4 border-l-2 border-[#EAB308] pl-2.5">
              Rendez-vous Phares
            </h4>
            <ul className="space-y-3 text-xs text-[#FAF9F6]/80">
              <li className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                <span className="font-semibold text-white block">Aurore de Grâce</span>
                <span className="text-[#EAB308] text-[11px]">Du Lundi au Vendredi • 05h00 - 06h30</span>
              </li>
              <li className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                <span className="font-semibold text-white block">Temps d’Impact & Prières</span>
                <span className="text-[#EAB308] text-[11px]">Tous les soirs • 21h00 - 22h30</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contacts & Studio */}
          <div>
            <h4 className="text-sm font-bold text-[#EAB308] uppercase tracking-wider mb-4 border-l-2 border-[#EAB308] pl-2.5">
              Contact & Studio
            </h4>
            <ul className="space-y-3 text-xs text-[#FAF9F6]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EAB308] flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address || 'Abidjan, Côte d’Ivoire'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EAB308] flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone || '+225 05 05 14 52 15 '}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EAB308] flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email || 'contact@radiograceespoir.ci'}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#EAB308] flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.hours || 'Antenne H24 / Secrétariat: 08h-18h'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* 3. Copyright & Mentions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/60">
          <p className="text-center sm:text-left">
            © {currentYear} <span className="font-semibold text-white">{BRAND.name}</span>. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/mentions-legales" className="hover:text-[#EAB308] transition-colors">
              Mentions Légales
            </Link>
            <Link href="/legal/politique-de-confidentialite" className="hover:text-[#EAB308] transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="/contacts" className="hover:text-[#EAB308] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}