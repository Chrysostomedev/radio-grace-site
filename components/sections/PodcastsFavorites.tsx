"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Music, Heart, Play, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Podcast {
  id: number;
  titre: string;
  description: string;
  image?: string;
  audio_url?: string;
  duree_formatee?: string;
  programme?: {
    titre: string;
  };
  vues?: number;
}

interface PodcastsResponse {
  success: boolean;
  data: Podcast[];
  pagination?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

export function PodcastsFavorites() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/podcasts?per_page=6`
        );
        const data = (await response.json()) as PodcastsResponse;
        setPodcasts(data.data || []);
      } catch (err) {
        setError("Erreur lors du chargement des podcasts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-start gap-3 mb-4 sm:mb-0">
            <div>
             
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Nos Podcasts Favorites
              </h2>
            </div>
          </div>

          <Link
            href="/podcasts"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#004D20] bg-[#004D20]/5 hover:bg-[#004D20] hover:text-white px-4 py-2 rounded-full transition-all duration-200 group w-fit"
          >
            <span>Tous les podcasts</span>
            <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grille de podcasts */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin">
              <Music className="w-8 h-8 text-[#CA8A04]" />
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center text-red-600">
            {error}
          </div>
        ) : podcasts.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
            <p className="text-slate-500 text-sm">
              Aucun podcast disponible pour le moment
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#CA8A04]/50 transition-all duration-300"
              >
                {/* Image ou placeholder */}
                <div className="relative h-48 w-full bg-gradient-to-br from-[#004D20] to-[#003817] overflow-hidden">
                  {podcast.image ? (
                    <img
                      src={podcast.image}
                      alt={podcast.titre}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Music className="w-12 h-12 text-[#CA8A04]/50" />
                    </div>
                  )}

                  {/* Overlay avec boutons */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    {podcast.audio_url && (
                      <button className="bg-[#CA8A04] hover:bg-[#b07803] text-slate-950 p-4 rounded-full font-bold transition-all duration-200 shadow-lg transform scale-90 group-hover:scale-100">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                    )}
                    <button className="bg-white/20 hover:bg-white/40 text-white p-4 rounded-full font-bold transition-all duration-200 backdrop-blur-sm">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Badge durée */}
                  {podcast.duree_formatee && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1.5 rounded-lg">
                      {podcast.duree_formatee}
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="p-5">
                  {/* Programme */}
                  {podcast.programme && (
                    <span className="inline-block text-[#CA8A04] text-xs font-bold uppercase tracking-widest mb-2">
                      {podcast.programme.titre}
                    </span>
                  )}

                  {/* Titre */}
                  <h3 className="font-bold text-slate-900 line-clamp-2 mb-2 group-hover:text-[#004D20] transition-colors">
                    {podcast.titre}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {podcast.description}
                  </p>

                  {/* Vues */}
                  {podcast.vues !== undefined && (
                    <p className="text-[#CA8A04] text-xs font-semibold mb-4">
                      {podcast.vues.toLocaleString()} écoutes
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    href={`/podcasts/${podcast.id}`}
                    className="block w-full bg-[#004D20] hover:bg-[#003817] text-white font-bold text-sm py-3 px-4 rounded-lg text-center transition-all duration-200 group-hover:shadow-md"
                  >
                    Écouter maintenant
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
