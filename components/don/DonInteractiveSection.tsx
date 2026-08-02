'use client';

import { useState } from 'react';
import { Smartphone, Landmark, CreditCard, Copy, Check, ShieldCheck, HeartHandshake } from 'lucide-react';

export function DonInteractiveSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<'mobile' | 'bank' | 'card'>('mobile');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const mobileNumbers = [
    { provider: 'Wave', number: '+225 07 00 00 00 00', color: 'bg-cyan-50 border-cyan-200 text-cyan-900' },
    { provider: 'Orange Money', number: '+225 07 00 00 00 00', color: 'bg-orange-50 border-orange-200 text-orange-900' },
    { provider: 'MTN MoMo', number: '+225 05 00 00 00 00', color: 'bg-yellow-50 border-yellow-200 text-yellow-900' },
    { provider: 'Moov Money', number: '+225 01 00 00 00 00', color: 'bg-blue-50 border-blue-200 text-blue-900' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
      {/* Selector Tabs */}
      <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50/50 p-2 gap-2">
        <button
          onClick={() => setSelectedMethod('mobile')}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            selectedMethod === 'mobile'
              ? 'bg-white text-[#004D20] shadow-2xs border border-slate-200'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Smartphone className="w-4 h-4 text-[#CA8A04]" />
          <span>Mobile Money</span>
        </button>

        <button
          onClick={() => setSelectedMethod('bank')}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            selectedMethod === 'bank'
              ? 'bg-white text-[#004D20] shadow-2xs border border-slate-200'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Landmark className="w-4 h-4 text-[#CA8A04]" />
          <span>Virement / RIB</span>
        </button>

        <button
          onClick={() => setSelectedMethod('card')}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            selectedMethod === 'card'
              ? 'bg-white text-[#004D20] shadow-2xs border border-slate-200'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <CreditCard className="w-4 h-4 text-[#CA8A04]" />
          <span>Carte Bancaire</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-6 sm:p-10">
        {selectedMethod === 'mobile' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">Soutenez-nous via Mobile Money</h3>
              <p className="text-xs text-slate-500 mt-1">
                Effectuez un dépôt direct ou un transfert vers nos comptes officiels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mobileNumbers.map((item) => (
                <div key={item.provider} className={`p-4 rounded-2xl border ${item.color} flex items-center justify-between`}>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider block opacity-70">{item.provider}</span>
                    <span className="font-mono font-bold text-sm sm:text-base">{item.number}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.number, item.provider)}
                    className="p-2 bg-white/80 hover:bg-white rounded-xl border border-slate-200 transition-colors cursor-pointer"
                    title="Copier le numéro"
                  >
                    {copiedField === item.provider ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-600" />
                    )}
                  </button>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-slate-400 italic">
              * Veuillez indiquer la mention &quot;DON RADIO&quot; en motif de transfert si possible.
            </p>
          </div>
        )}

        {selectedMethod === 'bank' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">Coordonnées Bancaires (RIB)</h3>
              <p className="text-xs text-slate-500 mt-1">
                Pour les virements bancaires locaux ou internationaux.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-xs sm:text-sm space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-sans font-bold">Banque :</span>
                <span className="font-bold text-slate-800">NSIA Banque Côte d'Ivoire</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-sans font-bold">Titulaire :</span>
                <span className="font-bold text-slate-800">Association Radio Grâce Espoir</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-sans font-bold">IBAN / Numéro de compte :</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">CI62 0100 0112 0003 4567 8901</span>
                  <button
                    onClick={() => copyToClipboard('CI62 0100 0112 0003 4567 8901', 'iban')}
                    className="p-1.5 bg-white rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    {copiedField === 'iban' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedMethod === 'card' && (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-amber-50 text-[#CA8A04] rounded-full flex items-center justify-center mx-auto border border-amber-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="max-w-md mx-auto">
              <h3 className="font-extrabold text-slate-900">Paiement Sécurisé par Carte</h3>
              <p className="text-xs text-slate-500 mt-1">
                Vous serez redirigé vers notre plateforme de paiement sécurisée partenaire.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#004D20] text-white hover:bg-[#003817] font-bold text-xs transition-all shadow-md"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Accéder au guichet sécurisé</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}