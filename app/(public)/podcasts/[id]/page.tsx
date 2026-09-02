// app/(public)/podcasts/[id]/page.tsx
"use client";

import { usePodcastById } from "@/hooks/usePodcasts";
import Image from "next/image";
import Link from "next/link";
import { Play, Clock, Eye, Music, ChevronLeft, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface PodcastDetailPageProps {
  params: {
    id: string;
  };
}

export default function PodcastDetailPage({ params }: PodcastDetailPageProps) {
  const podcastId = parseInt(params.id);
  const { podcast, isLoading, error } = usePodcastById(podcastId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="animate-spin">
          <Music className="w-8 h-8 text-[#CA8A04]" />
        </div>
      </div>
    );
  }

  if (error || !podcast) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-900">Podcast non trouvé</h1>
          <p className="text-slate-600">Ce podcast n'existe pas ou a été supprimé.</p>
          <Link
            href="/podcasts"
            className="inline-flex items-center gap-2 text-[#004D20] hover:text-[#003817] font-bold"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour aux podcasts
          </Link>
        </div>
      </div>
    );
  }

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Retour */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/podcasts"
            className="inline-flex items-center gap-2 text-[#004D20] hover:text-[#003817] font-bold text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Tous les podcasts
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#003817] via-[#004D20] to-[#001a0d] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            {/* Image */}
            <div className="md:col-span-1">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
                {podcast.image ? (
                  <Image
                    src={podcast.image}
                    alt={podcast.titre}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-[#CA8A04] to-[#004D20]">
                    <Music className="w-16 h-16 text-white/50" />
                  </div>
                )}
              </div>
            </div>

            {/* Infos */}
            <div className="md:col-span-2 text-white space-y-4">
              {podcast.programme && (
                <span className="inline-block text-[#CA8A04] text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                  {podcast.programme.titre}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                {podcast.titre}
              </h1>

              <p className="text-slate-200 leading-relaxed">
                {podcast.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20">
                {podcast.duree_formatee && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#CA8A04]" />
                    <span className="text-sm">{podcast.duree_formatee}</span>
                  </div>
                )}
                {podcast.vues !== undefined && (
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#CA8A04]" />
                    <span className="text-sm">{podcast.vues.toLocaleString()} écoutes</span>
                  </div>
                )}
              </div>

              {/* CTA Écouter */}
              {podcast.audio_url && (
                <button className="flex items-center justify-center gap-2 bg-[#CA8A04] hover:bg-[#b07803] text-slate-950 font-bold px-6 py-3 rounded-lg transition-all duration-200 mt-6">
                  <Play className="w-5 h-5 fill-current" />
                  <span>Écouter maintenant</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contenu */}
          <div className="lg:col-span-2 space-y-8">
            {/* Audio Player */}
            {podcast.audio_url && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Lecteur audio</h3>
                <audio
                  controls
                  className="w-full rounded-lg"
                  src={podcast.audio_url}
                >
                  Votre navigateur ne supporte pas la lecture audio
                </audio>
              </div>
            )}

            {/* Vidéo */}
            {podcast.video_url && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Vidéo</h3>
                <div className="relative w-full pt-[56.25%] bg-slate-950 rounded-lg overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={podcast.video_url}
                    title={podcast.titre}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Description complète */}
            {podcast.description && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-lg">À propos</h3>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {podcast.description}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Programme */}
            {podcast.programme && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Programme</h4>
                <Link
                  href={`/programmes/${podcast.programme.id}`}
                  className="group"
                >
                  <div className="space-y-2">
                    <h5 className="font-bold text-[#004D20] group-hover:text-[#003817] transition-colors">
                      {podcast.programme.titre}
                    </h5>
                    {podcast.programme.animateur && (
                      <p className="text-xs text-slate-600">
                        Avec <span className="font-semibold">{podcast.programme.animateur.nom_scene}</span>
                      </p>
                    )}
                  </div>
                </Link>
              </div>
            )}

            {/* Liens sociaux programme */}
            {podcast.programme?.liens_sociaux && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Suivre le programme</h4>
                <div className="flex flex-col gap-2">
                  {podcast.programme.liens_sociaux.youtube && (
                    <a
                      href={podcast.programme.liens_sociaux.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm"
                    >
                      ▶ YouTube
                    </a>
                  )}
                  {podcast.programme.liens_sociaux.facebook && (
                    <a
                      href={podcast.programme.liens_sociaux.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      f Facebook
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Partager */}
            <div className="bg-[#004D20]/10 rounded-xl p-6 border border-[#004D20]/20">
              <h4 className="font-bold text-slate-900 mb-4">Partager</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'WhatsApp', icon: '' },
                  { name: 'Facebook', icon: '' },
                  { name: 'Email', icon: '' },
                ].map((item) => (
                  <button
                    key={item.name}
                    className="text-xl hover:scale-110 transition-transform"
                    title={`Partager sur ${item.name}`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
