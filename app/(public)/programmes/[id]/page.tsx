// app/(public)/programmes/[id]/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { programmeService } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, Share2, Play as PlayIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface ProgrammeDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProgrammeDetailPage({ params }: ProgrammeDetailPageProps) {
  const programmeId = parseInt(params.id);
  const { data: programme, isLoading, error } = useQuery({
    queryKey: ["programme", programmeId],
    queryFn: () => programmeService.getById(programmeId),
    enabled: !!programmeId,
  });

  const { data: grille } = useQuery({
    queryKey: ["programme-grille", programmeId],
    queryFn: () => programmeService.getGrille(programmeId),
    enabled: !!programmeId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="animate-spin">
          <TrendingUp className="w-8 h-8 text-[#CA8A04]" />
        </div>
      </div>
    );
  }

  if (error || !programme) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-900">Programme non trouvé</h1>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-[#004D20] hover:text-[#003817] font-bold"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour aux programmes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Retour */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-[#004D20] hover:text-[#003817] font-bold text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Tous les programmes
          </Link>
        </div>
      </div>

      {/* Hero avec vidéo/image */}
      <section className="w-full bg-gradient-to-br from-[#003817] via-[#004D20] to-[#001a0d] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Vidéo ou Image */}
            {programme.video_url ? (
              <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={programme.video_url}
                  title={programme.titre}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : programme.image ? (
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={programme.image}
                  alt={programme.titre}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}

            {/* Infos */}
            <div className="text-white space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                {programme.titre}
              </h1>

              {programme.description && (
                <p className="text-slate-200 text-lg leading-relaxed max-w-3xl">
                  {programme.description}
                </p>
              )}

              {/* Animateur */}
              {programme.animateur && (
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  {programme.animateur.photo && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={programme.animateur.photo}
                        alt={programme.animateur.nom_scene}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold">Présenté par</p>
                    <p className="text-[#CA8A04] font-bold">{programme.animateur.nom_scene}</p>
                  </div>
                </div>
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
            {/* Description complète */}
            {programme.description && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-lg">À propos</h3>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {programme.description}
                </p>
              </div>
            )}

            {/* Grille de ce programme */}
            {grille?.data && grille.data.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-lg">
                  Horaires de diffusion
                </h3>
                <div className="space-y-3">
                  {grille.data.map((slot: any) => (
                    <div
                      key={slot.id}
                      className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div className="font-bold text-[#004D20] text-lg min-w-fit">
                        {slot.heure_debut} - {slot.heure_fin}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{slot.jour}</p>
                        {slot.is_rediffusion && (
                          <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mt-2 font-semibold">
                            Rediffusion
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* CTA Écouter */}
            <div className="bg-gradient-to-br from-[#004D20] to-[#003817] rounded-xl p-6 text-white shadow-lg">
              <button className="w-full flex items-center justify-center gap-2 bg-[#CA8A04] hover:bg-[#b07803] text-slate-950 font-bold py-3 rounded-lg transition-all duration-200">
                <Play className="w-5 h-5 fill-current" />
                <span>Écouter en direct</span>
              </button>
              <p className="text-xs text-slate-300 mt-3 text-center">
                Retrouvez ce programme sur Radio Grâce-Espoir
              </p>
            </div>

            {/* Liens sociaux */}
            {programme.liens_sociaux && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Suivez le programme</h4>
                <div className="flex flex-col gap-3">
                  {programme.liens_sociaux.youtube && (
                    <a
                      href={programme.liens_sociaux.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                    >
                      ▶ YouTube
                    </a>
                  )}
                  {programme.liens_sociaux.facebook && (
                    <a
                      href={programme.liens_sociaux.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      f Facebook
                    </a>
                  )}
                  {programme.liens_sociaux.instagram && (
                    <a
                      href={programme.liens_sociaux.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold"
                    >
                      📷 Instagram
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Info animateur */}
            {programme.animateur && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Présenté par</h4>
                <div className="text-center space-y-3">
                  {programme.animateur.photo && (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <Image
                        src={programme.animateur.photo}
                        alt={programme.animateur.nom_scene}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h5 className="font-bold text-slate-900">
                      {programme.animateur.nom_scene}
                    </h5>
                    {programme.animateur.bio && (
                      <p className="text-xs text-slate-600 mt-2">
                        {programme.animateur.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
