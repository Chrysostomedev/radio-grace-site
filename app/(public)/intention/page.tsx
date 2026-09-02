// app/(public)/intention/page.tsx
'use client';

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Send, Lock, Globe, User, Phone, DollarSign, Check, AlertCircle } from 'lucide-react';
import { intentionsService, IntentionPriere } from '@/services/intentions.service';
import { useIntentionsQuery } from '@/hooks/useIntentions';

export default function IntentionPage() {
  const [formData, setFormData] = useState({
    intention: '',
    description: '',
    nom: '',
    telephone: '',
    montant_don: 0,
    is_public: false,
    is_anonyme: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const queryClient = useQueryClient();
  const { data: intentionsData } = useIntentionsQuery();

  // Mutation pour créer une intention
  const createIntention = useMutation({
    mutationFn: (payload: Partial<IntentionPriere>) => intentionsService.create(payload),
    onSuccess: () => {
      setFormData({
        intention: '',
        description: '',
        nom: '',
        telephone: '',
        montant_don: 0,
        is_public: false,
        is_anonyme: false,
      });
      setError('');
      setSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['intentions'] });
      setTimeout(() => setSubmitted(false), 5000);
    },
    onError: () => {
      setError('Erreur lors du dépôt de l\'intention. Veuillez réessayer.');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.intention.trim()) {
      setError('Veuillez entrer votre intention');
      return;
    }

    setError('');
    createIntention.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF9F6] via-white to-[#F5F4F0] pb-24">
      {/* Hero section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#003817] to-[#163A2C] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA8A04]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#CA8A04]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#CA8A04]/20 border border-[#CA8A04]/50">
            <Heart className="w-8 h-8 text-[#CA8A04]" fill="currentColor" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Confiez votre intention de prière
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Notre communauté se réunit chaque jour pour porter vos prières. Vous n'êtes jamais seul(e) sur votre chemin de foi.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-[#163A2C] mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-[#CA8A04]" />
                Déposer votre intention
              </h2>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-green-100/50 border-2 border-green-500">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <p className="text-lg font-bold text-[#163A2C]">
                    Merci de votre confiance 🙏
                  </p>
                  <p className="text-sm text-slate-600">
                    Votre intention a été déposée et sera portée par notre communauté.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error message */}
                  {error && (
                    <div className="flex gap-3 p-4 rounded-xl bg-red-100/50 border border-red-300 text-red-700">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  )}
                  {/* Intention principale */}
                  <div>
                    <label htmlFor="intention" className="block text-sm font-bold text-[#163A2C] mb-2">
                      Votre intention *
                    </label>
                    <textarea
                      id="intention"
                      name="intention"
                      value={formData.intention}
                      onChange={handleChange}
                      placeholder="Exprimez votre intention de prière..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-bold text-[#163A2C] mb-2">
                      Description (optionnel)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Ajoutez des détails si vous le souhaitez..."
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Informations personnelles - Grille 2 colonnes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-bold text-[#163A2C] mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" />
                        Votre nom (optionnel)
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="telephone" className="block text-sm font-bold text-[#163A2C] mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400" />
                        Téléphone (optionnel)
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="+225..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Don optionnel */}
                  <div>
                    <label htmlFor="montant_don" className="block text-sm font-bold text-[#163A2C] mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-slate-400" />
                      Soutien financier (optionnel)
                    </label>
                    <input
                      type="number"
                      id="montant_don"
                      name="montant_don"
                      value={formData.montant_don}
                      onChange={handleChange}
                      placeholder="0"
                      min="0"
                      step="1000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 outline-none transition-all"
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Votre don aidera à soutenir les actions de la radio.
                    </p>
                  </div>

                  {/* Checkboxes - Confidentialité */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="is_public"
                        checked={formData.is_public}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-slate-300 text-[#CA8A04] focus:ring-[#CA8A04]"
                      />
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-[#163A2C] transition-colors">
                        <Globe className="w-4 h-4 text-slate-400" />
                        Publier cette intention
                      </span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="is_anonyme"
                        checked={formData.is_anonyme}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-slate-300 text-[#CA8A04] focus:ring-[#CA8A04]"
                      />
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-[#163A2C] transition-colors">
                        <Lock className="w-4 h-4 text-slate-400" />
                        Rester anonyme
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={createIntention.isPending}
                    className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-[#CA8A04] to-[#B87800] hover:shadow-lg text-slate-950 font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {createIntention.isPending ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5" fill="currentColor" />
                        <span>Déposer mon intention</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar - Intentions récentes */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#003817]/5 to-[#CA8A04]/5 rounded-2xl p-6 border border-[#CA8A04]/20 sticky top-24">
              <h3 className="text-lg font-bold text-[#163A2C] mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#CA8A04]" fill="currentColor" />
                Intentions récentes
              </h3>

              {!intentionsData?.data || intentionsData.data.length === 0 ? (
                <p className="text-sm text-slate-600 italic">
                  Aucune intention publique pour le moment.
                </p>
              ) : (
                <div className="space-y-3">
                  {intentionsData.data.slice(0, 5).map((intention) => (
                    <div
                      key={intention.id}
                      className="p-3 bg-white rounded-lg border border-slate-200 hover:border-[#CA8A04] transition-colors"
                    >
                      <p className="text-xs font-bold text-[#163A2C] line-clamp-2">
                        {intention.is_anonyme ? 'Intention anonyme' : intention.nom || 'Intention'}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {intention.intention}
                      </p>
                      {intention.paid_at && (
                        <div className="mt-2 flex items-center gap-1 text-xs text-green-700 bg-green-100/50 px-2 py-1 rounded w-fit">
                          <Check className="w-3 h-3" />
                          Priée
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Info box */}
              <div className="mt-6 pt-6 border-t border-[#CA8A04]/20 space-y-3">
                <div className="flex gap-3 text-xs">
                  <Heart className="w-4 h-4 text-[#CA8A04] shrink-0 mt-0.5" fill="currentColor" />
                  <p className="text-slate-700">
                    Chaque intention reçue est portée par notre communauté lors de nos moments de prière.
                  </p>
                </div>

                <div className="flex gap-3 text-xs">
                  <Lock className="w-4 h-4 text-[#CA8A04] shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    Vos données restent confidentielles et sécurisées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
