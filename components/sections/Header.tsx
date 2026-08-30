'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/lib/constants';
import { Search, Menu, X, Bell, ChevronDown } from 'lucide-react';

type NavItem = {
  id: string;
  label: string;
  href?: string;
  children?: { id: string; label: string; href: string }[];
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const newsTickerMessages = [
    "Radio Grâce-Espoir : L'évangile au coeur de l'homme",
    "Retrouvez vos temps de prière et d'adoration tous les jours en direct",
    "Émission spéciale ce soir à 20h : Prière & Délivrance avec Père Attobra",
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#007A33]/10 shadow-sm">
      
      {/* 1. TOPBAR — BANDEAU ROUGE JT
      <div className="bg-red-700 text-white text-xs py-1.5 px-4 overflow-hidden shadow-inner border-b border-red-800">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black/30 px-2.5 py-0.5 rounded-md shrink-0 border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            <span className="font-black tracking-wider uppercase text-[10px] text-amber-300 flex items-center gap-1">
              <Bell className="w-3 h-3 animate-bounce" /> FLASH
            </span>
          </div>

          <div className="flex-1 overflow-hidden relative whitespace-nowrap">
            <div className="inline-block animate-marquee whitespace-nowrap text-white font-medium text-xs tracking-wide">
              {newsTickerMessages.map((msg, idx) => (
                <span key={idx} className="inline-flex items-center mx-6">
                  <span className="text-amber-300 mr-2">✦</span>
                  {msg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* 2. MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
            <Image
              src="/img/logo.png"
              alt="Radio Grâce-Espoir Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
           
            <span className="text-[10px] sm:text-xs font-bold text-[#CA8A04] tracking-wider uppercase">
              L'Evangile au coeur de l'Homme
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {(NAVIGATION as NavItem[]).map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isActive =
              (item.href && pathname === item.href) ||
              item.children?.some((c) => c.href === pathname);

            // Item avec sous-menu
            if (hasChildren) {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'text-[#007A33] bg-[#007A33]/10 font-bold'
                        : 'text-slate-700 hover:text-[#007A33] hover:bg-slate-100/80'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  {openDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 min-w-[200px] py-2 bg-white rounded-xl border border-[#007A33]/10 shadow-xl z-50">
                      {item.children!.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                            pathname === child.href
                              ? 'text-[#007A33] bg-[#007A33]/10'
                              : 'text-slate-700 hover:text-[#007A33] hover:bg-slate-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Item simple — href obligatoire
            if (!item.href) return null;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'text-[#007A33] bg-[#007A33]/10 font-bold'
                    : 'text-slate-700 hover:text-[#007A33] hover:bg-slate-100/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/recherche"
            className="p-2 rounded-full hover:bg-slate-100 text-slate-700 hover:text-[#007A33] transition-colors"
            title="Rechercher"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#004D20]" />
            ) : (
              <Menu className="w-6 h-6 text-[#004D20]" />
            )}
          </button>
        </div>
      </div>

      {/* 3. MENU MOBILE */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden border-t border-slate-200 bg-[#FAF9F6] px-4 pt-3 pb-6 flex flex-col gap-1.5 shadow-xl">
          {(NAVIGATION as NavItem[]).map((item) => {
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              return (
                <div key={item.id} className="flex flex-col gap-1">
                  <span className="px-4 py-2 text-xs font-black uppercase tracking-wider text-[#CA8A04]">
                    {item.label}
                  </span>
                  {item.children!.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                        pathname === child.href
                          ? 'bg-[#007A33] text-white font-semibold'
                          : 'text-slate-800 hover:bg-slate-100'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }

            if (!item.href) return null;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-[#007A33] text-white font-semibold'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}