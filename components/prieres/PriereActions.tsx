'use client';

import { Share2, Printer } from 'lucide-react';

interface PriereActionsProps {
  title: string;
  shareUrl: string;
}

export function PriereActions({ title, shareUrl }: PriereActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-center">
      {/* Facebook */}
      <a
        href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2] text-white hover:bg-[#165ecb] text-xs font-bold transition-colors shadow-2xs"
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>Facebook</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] text-xs font-bold transition-colors shadow-2xs"
      >
        <span>WhatsApp</span>
      </a>

      {/* Impression (interactif côté client) */}
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors border border-slate-200 cursor-pointer"
      >
        <Printer className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Imprimer</span>
      </button>
    </div>
  );
}