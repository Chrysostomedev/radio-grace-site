import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'En Direct - Radio Grâce-Espoir',
  description: 'Écoutez le direct de Radio Grâce-Espoir en ligne.',
};

export default function DirectPage() {
  return (
    <main className="min-h-screen bg-[#0E241C] pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 h-[75vh]">
        <div className="w-full h-full rounded-3xl overflow-hidden border border-[#EAB308]/30 shadow-2xl shadow-[#EAB308]/10 bg-black">
          <iframe
            src="https://play.radioking.io/radio-grace-espoir"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay"
            title="Radio Grâce-Espoir Live Player"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
