// app/(public)/podcasts/page.tsx
"use client";

import { PodcastsFavorites } from "@/components/sections/PodcastsFavorites";

export default function PodcastsPage() {
  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#003817] via-[#004D20] to-[#001a0d] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <span className="inline-block text-[#CA8A04] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            🎙️ Nos émissions en podcast
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Écoutez Radio Grâce-Espoir
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto">
            Retrouvez tous nos podcasts en replay, disponibles à tout moment
          </p>
        </div>
      </section>

      <div className="py-12">
        <PodcastsFavorites />
      </div>
    </div>
  );
}
