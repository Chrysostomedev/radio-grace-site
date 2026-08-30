'use client';

import { useState, useEffect } from 'react';
import { Cookie, Check, X, Settings } from 'lucide-react';

type Consent = { analytics: boolean; ads: boolean };

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<Consent>({ analytics: false, ads: false });

  useEffect(() => {
    const saved = localStorage.getItem('rge-cookie-consent');
    if (!saved) setVisible(true);
  }, []);

  const save = (c: Consent) => {
    localStorage.setItem('rge-cookie-consent', JSON.stringify({ ...c, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] sm:left-auto sm:max-w-md animate-[fadeUp_0.4s_ease-out]">
      <div className="bg-[#0E241C] text-[#FBF6EA] rounded-2xl border border-[#F0A93E]/40 shadow-2xl p-5 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0A93E]/15 text-[#F0A93E]">
            <Cookie size={20} />
          </span>
          <div>
            <h3 className="font-black text-sm">Nous respectons votre vie privée </h3>
            <p className="text-xs text-[#FBF6EA]/70 mt-1 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience d&apos;écoute et mesurer notre audience.
              Consultez notre{' '}
              <a href="/politique-de-confidentialite" className="text-[#F0A93E] font-bold underline">politique de confidentialité</a>.
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center justify-between bg-[#163A2C] rounded-xl px-3 py-2.5">
              <div>
                <p className="font-bold">Cookies essentiels</p>
                <p className="text-[#FBF6EA]/50">Session, lecture audio, sécurité</p>
              </div>
              <span className="text-[10px] font-black bg-[#F0A93E]/20 text-[#F0A93E] px-2 py-1 rounded-full">TOUJOURS ACTIFS</span>
            </div>
            <div className="flex items-center justify-between bg-[#163A2C] rounded-xl px-3 py-2.5">
              <div>
                <p className="font-bold">Mesure d&apos;audience</p>
                <p className="text-[#FBF6EA]/50">Statistiques anonymisées d&apos;écoute</p>
              </div>
              <button
                onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                className={`w-11 h-6 rounded-full transition-colors relative ${consent.analytics ? 'bg-[#F0A93E]' : 'bg-white/20'}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${consent.analytics ? 'left-[22px]' : 'left-0.5'}`} />
              </button>
            </div>
            <div className="flex items-center justify-between bg-[#163A2C] rounded-xl px-3 py-2.5">
              <div>
                <p className="font-bold">Publicités partenaires</p>
                <p className="text-[#FBF6EA]/50">Mesure des clics sur les encarts</p>
              </div>
              <button
                onClick={() => setConsent(c => ({ ...c, ads: !c.ads }))}
                className={`w-11 h-6 rounded-full transition-colors relative ${consent.ads ? 'bg-[#F0A93E]' : 'bg-white/20'}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${consent.ads ? 'left-[22px]' : 'left-0.5'}`} />
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => save({ analytics: true, ads: true })}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#F0A93E] text-[#163A2C] px-4 py-2.5 rounded-xl text-xs font-black hover:bg-[#D98A1F] transition-colors"
          >
            <Check size={14} /> Tout accepter
          </button>
          <button
            onClick={() => save({ analytics: false, ads: false })}
            className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-white/20 transition-colors"
          >
            <X size={14} /> Tout refuser
          </button>
          <button
            onClick={() => (showDetails ? save(consent) : setShowDetails(true))}
            className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#FBF6EA]/60 hover:text-[#F0A93E] py-1.5 transition-colors"
          >
            <Settings size={12} />
            {showDetails ? 'Enregistrer mes choix' : 'Personnaliser'}
          </button>
        </div>
      </div>
    </div>
  );
}
