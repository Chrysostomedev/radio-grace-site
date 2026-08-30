'use client';

import { useState, useRef, useEffect } from 'react';
import { usePlayer } from '@/context/PlayerContext';
import {
  Play, Pause, Volume2, Volume1, VolumeX, Share2, Radio, Check, Loader2
} from 'lucide-react';

const AUDIO_SRC = 'https://play.radioking.io/radio-grace-espoir';

export function PlayerBar() {
  const { isPlaying, setIsPlaying, volume, setVolume, currentStation } = usePlayer();
  const [copied, setCopied] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* ---------- LECTURE / PAUSE ---------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.error('Erreur lors de la lecture audio :', err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, setIsPlaying]);

  /* ---------- VOLUME ---------- */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  /* ---------- ÉTATS DU FLUX ---------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onWaiting = () => setIsBuffering(true);
    const onPlaying = () => setIsBuffering(false);

    audio.addEventListener('waiting', onWaiting);
    audio.addEventListener('playing', onPlaying);
    return () => {
      audio.removeEventListener('waiting', onWaiting);
      audio.removeEventListener('playing', onPlaying);
    };
  }, []);

  const toggleVolumeMute = () => setVolume(volume === 0 ? 80 : 0);

  /* ---------- PARTAGE NATIF ---------- */
  const handleShare = async () => {
    const shareData = {
      title: 'Radio Grâce-Espoir',
      text: "Écoutez Radio Grâce-Espoir — L'Évangile au cœur de l'Homme, en direct !",
      url: window.location.origin,
    };

    // 1. Partage natif du navigateur (mobile + certains navigateurs)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // L'utilisateur a annulé → on fait rien
        return;
      }
    }

    // 2. Fallback : copie le lien dans le presse-papier
    try {
      await navigator.clipboard.writeText(shareData.url);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = shareData.url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const VolumeIcon = volume === 0 ? VolumeX : volume < 50 ? Volume1 : Volume2;

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} preload="none" />

      <div
        className={`fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50
          transition-all duration-500 ease-out
          ${isPlaying ? 'sm:w-[680px]' : 'sm:w-auto'} 
          ${isHidden ? 'translate-y-28 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div
          className={`
            relative flex items-center gap-3 sm:gap-5 rounded-2xl px-3.5 py-2.5 sm:px-5 sm:py-3
            bg-[#0E241C]/95 backdrop-blur-xl text-[#FBF6EA]
            border border-[#F0A93E]/30
            shadow-[0_10px_40px_-5px_rgba(0,0,0,0.6),0_0_0_1px_rgba(240,169,62,0.1)]
            transition-all duration-300
            ${isPlaying ? 'shadow-[0_10px_50px_-5px_rgba(240,169,62,0.25)] border-[#F0A93E]/50' : ''}
          `}
        >
          {isPlaying && (
            <div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-[#F0A93E] to-transparent animate-pulse" />
          )}

          {/* Badge Direct */}
          <div
            className={`relative flex items-center justify-center w-11 h-11 rounded-full border flex-shrink-0 transition-colors duration-300
              ${isPlaying
                ? 'bg-[#F0A93E]/15 border-[#F0A93E]/50'
                : 'bg-[#163A2C] border-[#F0A93E]/20'}`}
          >
            {isPlaying && (
              <span className="absolute inset-0 rounded-full border-2 border-[#F0A93E]/40 animate-ping" />
            )}
            {isPlaying ? (
              <div className="flex items-end gap-[2.5px] h-4">
                <span className="w-[3px] bg-[#F0A93E] rounded-full animate-[eqbar_0.9s_ease-in-out_infinite_0ms]" />
                <span className="w-[3px] bg-[#F0A93E] rounded-full animate-[eqbar_0.9s_ease-in-out_infinite_150ms]" />
                <span className="w-[3px] bg-[#F0A93E] rounded-full animate-[eqbar_0.9s_ease-in-out_infinite_300ms]" />
                <span className="w-[3px] bg-[#F0A93E] rounded-full animate-[eqbar_0.9s_ease-in-out_infinite_450ms]" />
              </div>
            ) : (
              <Radio className="w-5 h-5 text-[#F0A93E]/70" />
            )}
          </div>

          {/* Infos */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-colors
                  ${isPlaying
                    ? 'bg-rose-500/20 text-rose-300 border-rose-400/40'
                    : 'bg-white/5 text-white/40 border-white/10'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-rose-400 ${isPlaying ? 'animate-pulse' : 'opacity-40'}`} />
                Direct
              </span>
              <span className="text-[10px] text-[#FBF6EA]/50 font-bold tracking-[0.15em] uppercase hidden sm:inline-block">
                Grâce-Espoir FM
              </span>
            </div>
            <p className="text-sm font-bold truncate text-[#FBF6EA] mt-0.5">
              {isBuffering && isPlaying ? 'Connexion au flux…' : (currentStation || 'Flux Direct Audio HD')}
            </p>
          </div>

          {/* Contrôles */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">

            {/* Volume */}
            <div className="hidden md:flex items-center gap-2.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/10">
              <button
                onClick={toggleVolumeMute}
                className="text-[#FBF6EA]/70 hover:text-[#F0A93E] transition-colors"
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
                className="w-20 h-1.5 bg-[#163A2C] rounded-lg appearance-none cursor-pointer accent-[#F0A93E] focus:outline-none"
              />
              <span className="text-xs font-mono w-7 text-right text-[#FBF6EA]/70">
                {volume}%
              </span>
            </div>

            {/* Bouton Partage */}
            <button
              onClick={handleShare}
              title="Partager le direct"
              className="p-2.5 text-[#FBF6EA]/70 hover:text-[#F0A93E] hover:bg-[#F0A93E]/10 rounded-full transition-all active:scale-90"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            {/* Play / Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Mettre en pause' : 'Lancer le direct'}
              className="group relative flex items-center justify-center w-12 h-12 rounded-full
                bg-gradient-to-br from-[#F0A93E] to-[#D98A1F] text-[#163A2C]
                shadow-lg shadow-[#F0A93E]/30
                hover:scale-105 hover:shadow-[#F0A93E]/50
                active:scale-95 transition-all duration-200"
            >
              {isBuffering && isPlaying ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}