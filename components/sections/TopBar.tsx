'use client';

/**
 * Section — Bandeau supérieur (date + flash info + réseaux sociaux)
 */

import { useState, useEffect, SVGProps } from 'react';
import { SOCIAL_LINKS, FLASH_INFO } from '@/lib/constants';
import { formatDateFR } from '@/lib/utils';
import { Calendar, Zap } from 'lucide-react';

/* ─────────────────────────────────────────────
   Vrais logos SVG (réseaux sociaux)
───────────────────────────────────────────── */
type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function XIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.722-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function YoutubeIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TikTokIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// Map plateforme → icône SVG réelle
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  facebook: FacebookIcon,
  Instagram: InstagramIcon,
  instagram: InstagramIcon,
  Twitter: XIcon,
  twitter: XIcon,
  X: XIcon,
  x: XIcon,
  Youtube: YoutubeIcon,
  youtube: YoutubeIcon,
  YouTube: YoutubeIcon,
  WhatsApp: WhatsAppIcon,
  whatsapp: WhatsAppIcon,
  TikTok: TikTokIcon,
  tiktok: TikTokIcon,
};

export function TopBar() {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentFlashIndex, setCurrentFlashIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentDate(formatDateFR(new Date().toISOString()));

    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentFlashIndex((prev) => (prev + 1) % FLASH_INFO.length);
        setFadeState(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-[#004D20] h-10 border-b border-[#CA8A04]/40 w-full" />
    );
  }

  return (
    <div className="bg-[#004D20] text-slate-100 border-b border-[#CA8A04]/40 text-xs py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* 1. Date (À gauche) */}
        <div className="flex items-center gap-2 text-slate-200 shrink-0">
          <Calendar className="w-3.5 h-3.5 text-[#CA8A04]" />
          <span className="font-semibold capitalize tracking-tight text-[11px] sm:text-xs">
            {currentDate}
          </span>
        </div>

        {/* 2. Flash Info (Au centre) */}
        {FLASH_INFO && FLASH_INFO.length > 0 && (
          <div className="hidden md:flex items-center justify-center flex-1 max-w-xl mx-4 overflow-hidden">
            <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full border border-white/5 w-full justify-center">
              <span className="flex items-center gap-1 text-[#CA8A04] font-black uppercase text-[10px] tracking-wider shrink-0">
                <Zap className="w-3 h-3 fill-current animate-pulse" />
                <span>Flash</span>
              </span>
              <span className="text-white/20 text-[10px] shrink-0">•</span>
              <p
                className={`text-slate-200 text-[11px] truncate font-medium transition-opacity duration-300 ${
                  fadeState ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {FLASH_INFO[currentFlashIndex]}
              </p>
            </div>
          </div>
        )}

        {/* 3. Réseaux Sociaux (À droite) — vrais SVG */}
        <div className="flex items-center justify-end gap-2 shrink-0">
          <span className="hidden lg:inline text-[10px] text-slate-300 uppercase tracking-wider font-bold mr-1">
            Nous suivre :
          </span>
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = ICON_MAP[link.platform];
            if (!IconComponent) return null;

            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.platform}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/10 text-slate-200 hover:bg-[#CA8A04] hover:text-slate-950 transition-all duration-200 border border-white/10 group"
              >
                <IconComponent className="w-3.5 h-3.5 transform group-hover:scale-110 transition-transform" />
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}