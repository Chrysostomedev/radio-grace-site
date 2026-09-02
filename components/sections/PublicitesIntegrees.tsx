'use client';

import { usePublicitesQuery } from '@/hooks/usePublicites';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export function PublicitesIntegrees() {
  const { data: publicites = [] } = usePublicitesQuery();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  if (!publicites || publicites.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
       
        {/* Carousel horizontal scrollable - Circulaire */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4">
          <div className="flex gap-6 min-w-min">
            {publicites.map((pub) => {
              const youtubeVideoId = pub.video_url ? extractYoutubeId(pub.video_url) : null;
              const hasVideo = !!youtubeVideoId;

              return (
                <div
                  key={pub.id}
                  className="shrink-0 flex flex-col items-center gap-3"
                >
                  {/* Cercle circulaire */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex-shrink-0">
                    <button
                      onClick={() => hasVideo && setSelectedVideoId(youtubeVideoId)}
                      className={`w-full h-full rounded-full overflow-hidden border-2 border-[#CA8A04]/40 hover:border-[#CA8A04] transition-all group ${hasVideo ? 'cursor-pointer' : ''}`}
                      disabled={!hasVideo}
                    >
                      {/* Background image */}
                      {pub.image ? (
                        <img
                          src={pub.image}
                          alt={pub.titre}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#CA8A04]/20 to-[#163A2C]/20 flex items-center justify-center text-2xl">
                          
                        </div>
                      )}

                      {/* Overlay pour videos */}
                      {hasVideo && (
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#CA8A04] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                      )}
                    </button>

                    {/* Position badge - en bas du cercle */}
                    {pub.position && (
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-[#163A2C] bg-white px-2 py-1 rounded-full border border-[#163A2C]/10">
                        {pub.position}
                      </span>
                    )}
                  </div>

                  {/* Titre sous le cercle */}
                  <p className="text-center text-xs sm:text-sm font-bold text-[#163A2C] line-clamp-2 w-28 sm:w-32 md:w-36 mt-6">
                    {pub.titre}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal vidéo YouTube */}
      {selectedVideoId && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideoId(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setSelectedVideoId(null)}
          >
            <X size={28} />
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

function extractYoutubeId(url: string): string | null {
  try {
    if (url.includes('youtube.com')) {
      const match = url.match(/[?&]v=([^&]+)/);
      return match?.[1] || null;
    }
    if (url.includes('youtu.be')) {
      const match = url.match(/youtu\.be\/([^?&]+)/);
      return match?.[1] || null;
    }
    return null;
  } catch {
    return null;
  }
}
