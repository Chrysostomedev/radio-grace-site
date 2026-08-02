import Image from 'next/image';
import { Quote } from 'lucide-react';

interface QuoteCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export function QuoteCard({ quote, author, role, image }: QuoteCardProps) {
  return (
    <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs overflow-hidden">
      {/* Filigrane d'arrière-plan */}
      <Quote className="absolute -bottom-6 -right-6 w-40 h-40 text-amber-500/5 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
        {/* Photo du Père / Dirigeant */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border-2 border-amber-400/30 shadow-md relative">
            {image ? (
              <Image
                src={image}
                alt={author}
                fill
                sizes="112px"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#004D20] text-white font-extrabold text-xl">
                {author.charAt(0)}
              </div>
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 p-1.5 bg-[#CA8A04] text-white rounded-lg shadow-sm">
            <Quote className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Contenu textuel */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <p className="text-base sm:text-xl text-slate-800 font-medium italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">{author}</h4>
            <p className="text-xs text-amber-700 font-semibold mt-0.5">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}