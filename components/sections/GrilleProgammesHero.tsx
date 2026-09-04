"use client";

import Link from "next/link";
import { Clock, Radio, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useGrilleDay } from "@/hooks/useGrilleDay";
import { useState } from "react";

const DAYS_FR = [
  "LUNDI",
  "MARDI",
  "MERCREDI",
  "JEUDI",
  "VENDREDI",
  "SAMEDI",
  "DIMANCHE",
];

export function GrilleProgammesHero() {
  const [selectedDay, setSelectedDay] = useState<string>("LUNDI");
  const { grille, isLoading, error } = useGrilleDay(selectedDay);

  const formatTime = (time: string): string => {
    return time.slice(0, 5);
  };

  const calculateDuration = (start: string, end: string): number => {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    return eh * 60 + em - (sh * 60 + sm);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#003817] to-[#001a0d] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Grille de Programmes
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Découvrez l'intégralité de notre programmation semaine après
            semaine
          </p>
        </motion.div>

        {/* Sélection jours */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 bg-white/5 p-3 rounded-2xl border border-white/10">
          {DAYS_FR.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors duration-200 border ${
                selectedDay === day
                  ? "bg-[#CA8A04] text-slate-950 border-[#CA8A04]"
                  : "bg-transparent text-slate-300 border-white/15 hover:bg-white/10 hover:text-white"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="space-y-3">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin">
                <Radio className="w-8 h-8 text-[#CA8A04]" />
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center text-red-200">
              {error}
            </div>
          ) : grille.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <p className="text-slate-300 text-sm">
                Aucune émission programmée ce jour
              </p>
            </div>
          ) : (
            grille.map((slot) => (
              <div
                key={slot.id}
                className="group bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-xl p-4 sm:p-6 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                  {/* Horaire */}
                  <div className="flex items-center gap-3 min-w-fit">
                    <div className="bg-[#CA8A04] rounded-lg p-2.5">
                      <Clock className="w-5 h-5 text-slate-950" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-extrabold text-lg">
                        {formatTime(slot.heure_debut)}
                      </span>
                      <span className="text-xs text-slate-400">
                        à {formatTime(slot.heure_fin)}
                      </span>
                    </div>
                  </div>

                  {/* Infos */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 truncate">
                      {slot.programme?.titre || "Programme"}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
                      {slot.programme?.description ||
                        "Découvrez ce programme exclusif"}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {slot.programme?.animateur && (
                        <span className="inline-block bg-[#CA8A04]/15 text-[#CA8A04] text-xs px-2.5 py-1 rounded-full font-semibold">
                          {slot.programme.animateur.nom_scene}
                        </span>
                      )}
                      {slot.is_rediffusion && (
                        <span className="inline-block bg-blue-500/15 text-blue-300 text-xs px-2.5 py-1 rounded-full font-semibold">
                          Rediffusion
                        </span>
                      )}
                      <span className="inline-block bg-white/10 text-slate-300 text-xs px-2.5 py-1 rounded-full font-semibold">
                        {calculateDuration(
                          slot.heure_debut,
                          slot.heure_fin
                        )}min
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2 w-full sm:w-auto sm:justify-end">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#CA8A04]/15 hover:bg-[#CA8A04] text-[#CA8A04] hover:text-slate-950 px-4 py-2.5 rounded-lg font-bold text-xs transition-colors duration-200">
                      <Play className="w-4 h-4" />
                      <span className="hidden sm:inline">Écouter</span>
                    </button>
                    {slot.programme && (
                      <Link
                        href={`/emissions/${slot.programme.id}`}
                        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg font-bold text-xs transition-colors duration-200"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {!isLoading && !error && grille.length > 0 && (
          <div className="mt-10 text-center">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 text-[#CA8A04] hover:text-white font-bold text-sm group transition-colors duration-200"
            >
              <span>Voir tous les programmes</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}