'use client';

/**
 * Context — Player Audio Persistant
 * Reste monté entre les changements de page
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PlayerContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  currentStation: string;
  setCurrentStation: (station: string) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [currentStation, setCurrentStation] = useState('Radio Grâce-Espoir Direct');

  const value: PlayerContextType = {
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    currentStation,
    setCurrentStation,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer(): PlayerContextType {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
}
