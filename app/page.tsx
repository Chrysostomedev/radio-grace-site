"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    // Animation courte puis sortie
    const outTimer = setTimeout(() => setPhase("out"), 1600);
    const redirectTimer = setTimeout(() => {
      router.replace("/accueil"); // → app/(public)/page.tsx si c’est ta home
      // Si conflit de route, utilise par ex. router.replace("/accueil")
    }, 2000);

    return () => {
      clearTimeout(outTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-white transition-opacity duration-400
        ${phase === "out" ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Ondes radio (derrière le logo) */}
      <div className="absolute flex items-center justify-center">
        <span className="wave wave-1" />
        <span className="wave wave-2" />
        <span className="wave wave-3" />
      </div>

      {/* Logo */}
      <div
        className={`
          relative z-10 flex flex-col items-center
          transition-all duration-700 ease-out
          ${phase === "in" ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
        style={{
          animation: phase === "in" ? "logoIn 0.7s ease-out forwards" : undefined,
        }}
      >
        <Image
          src="/img/log.png"
          alt="Radio Grâce-Espoir"
          width={220}
          height={220}
          priority
          className="object-contain drop-shadow-lg"
        />
      </div>

      {/* Petit point d’écoute / signal */}
      <div className="absolute bottom-16 flex items-center gap-2">
        <span className="signal-dot" />
        <p className="text-sm font-semibold tracking-widest text-[#2E8B2E]/80 uppercase">
          En direct
        </p>
      </div>

      <style jsx>{`
        @keyframes logoIn {
          0% {
            opacity: 0;
            transform: scale(0.75) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .wave {
          position: absolute;
          border-radius: 50%;
          border: 2px solid #f5c518;
          opacity: 0;
          animation: pulseWave 1.6s ease-out infinite;
        }
        .wave-1 {
          width: 160px;
          height: 160px;
          animation-delay: 0s;
        }
        .wave-2 {
          width: 220px;
          height: 220px;
          animation-delay: 0.35s;
        }
        .wave-3 {
          width: 280px;
          height: 280px;
          animation-delay: 0.7s;
        }

        @keyframes pulseWave {
          0% {
            transform: scale(0.85);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        .signal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f5c518;
          box-shadow: 0 0 0 0 rgba(245, 197, 24, 0.5);
          animation: signal 1.2s ease-out infinite;
        }

        @keyframes signal {
          0% {
            box-shadow: 0 0 0 0 rgba(245, 197, 24, 0.55);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(245, 197, 24, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(245, 197, 24, 0);
          }
        }
      `}</style>
    </div>
  );
}