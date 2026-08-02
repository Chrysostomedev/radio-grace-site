'use client';

import { useState, useRef, useEffect } from 'react';
import { usePlayer } from '@/context/PlayerContext';
import { Play, Pause, Volume2, Volume1, VolumeX, Share2, Radio, Check } from 'lucide-react';

export function PlayerBar() {
  const { isPlaying, setIsPlaying, volume, setVolume, currentStation } = usePlayer();
  const [copied, setCopied] = useState(false);

  // 1. Référence vers l'élément HTML Audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Chemin vers le fichier situé dans public/audio/
  const AUDIO_SRC = '/audio/radio.mp3';

  // 2. Gestion de la lecture / pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error('Erreur lors de la lecture audio :', err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  // 3. Gestion du changement de volume (conversion 0-100 en 0.0-1.0)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const toggleVolumeMute = () => {
    setVolume(volume === 0 ? 80 : 0);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Radio Grâce-Espoir',
          text: 'Écoutez Radio Grâce-Espoir en direct !',
          url: window.location.href,
        });
      } catch (err) {
        // Annulation utilisateur
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const VolumeIcon = volume === 0 ? VolumeX : volume < 50 ? Volume1 : Volume2;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#002C13]/90 backdrop-blur-md border-t border-[#CA8A04]/30 text-[#FAF9F6] shadow-2xl transition-all">
      {/* Balise audio masquée mais fonctionnelle */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />

      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Infos station & Titre */}
        <div className="flex items-center gap-3.5 min-w-0 flex-1">
          {/* Badge Direct / Animation Ondes */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#007A33]/40 border border-[#EAB308]/30 flex-shrink-0">
            {isPlaying ? (
              <div className="flex items-end gap-[2px] h-4">
                <span className="w-1 bg-[#EAB308] rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
                <span className="w-1 bg-[#EAB308] rounded-full animate-[bounce_1s_infinite_300ms] h-2/3" />
                <span className="w-1 bg-[#EAB308] rounded-full animate-[bounce_1s_infinite_200ms] h-5/6" />
              </div>
            ) : (
              <Radio className="w-5 h-5 text-[#EAB308]/70" />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30">
                <span className={`w-1.5 h-1.5 rounded-full bg-rose-500 ${isPlaying ? 'animate-pulse' : ''}`} />
                Direct
              </span>
              <span className="text-[11px] text-[#FAF9F6]/60 font-medium tracking-wide uppercase hidden sm:inline-block">
                Radio Grâce-Espoir
              </span>
            </div>
            <p className="text-sm font-semibold truncate text-[#FAF9F6] mt-0.5">
              {currentStation || 'Flux Direct Audio HD'}
            </p>
          </div>
        </div>

        {/* Contrôles Principaux */}
        <div className="flex items-center gap-3 sm:gap-6">
          
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Mettre en pause' : 'Lancer le direct'}
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-[#002C13] shadow-lg shadow-[#EAB308]/20 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current translate-x-0.5" />
            )}
          </button>

          {/* Contrôle Volume */}
          <div className="hidden md:flex items-center gap-2.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
            <button
              onClick={toggleVolumeMute}
              className="text-[#FAF9F6]/70 hover:text-[#EAB308] transition-colors"
              aria-label="Sourdine"
            >
              <VolumeIcon className="w-4 h-4" />
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-20 h-1.5 bg-[#007A33] rounded-lg appearance-none cursor-pointer accent-[#EAB308] focus:outline-none"
            />
            <span className="text-xs font-mono w-7 text-right text-[#FAF9F6]/70">
              {volume}%
            </span>
          </div>

          {/* Actions annexes */}
          <div className="flex items-center gap-1 border-l border-white/10 pl-3 sm:pl-4">
            <button
              onClick={handleShare}
              title="Partager le direct"
              className="p-2 text-[#FAF9F6]/70 hover:text-[#EAB308] hover:bg-white/5 rounded-full transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

           
          </div>

        </div>
      </div>
    </div>
  );
}