"use client";

import { useState } from "react";
import { Heart, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IntentionFormData {
  intention: string;
  description?: string;
  nom?: string;
  telephone?: string;
  montant_don?: number;
  is_public: boolean;
  is_anonyme: boolean;
  moyen_paiement?: string;
}

interface SubmitResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    id: number;
    statut_paiement: string;
  };
  paiement?: {
    redirect_url: string;
  };
}

export function IntentionsPriereForm() {
  const [formData, setFormData] = useState<IntentionFormData>({
    intention: "",
    description: "",
    nom: "",
    telephone: "",
    montant_don: undefined,
    is_public: true,
    is_anonyme: false,
    moyen_paiement: "CINETPAY",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    if (name === "montant_don") {
      setFormData((prev) => ({
        ...prev,
        [name]: value ? parseFloat(value as string) : undefined,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/site/intentions-priere`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = (await response.json()) as SubmitResponse;

      if (!result.success) {
        setError(result.error || "Erreur lors de l'envoi");
        return;
      }

      if (result.paiement?.redirect_url && formData.montant_don) {
        // Rediriger vers paiement
        window.location.href = result.paiement.redirect_url;
      } else {
        // Succès sans paiement
        setSubmitted(true);
        setFormData({
          intention: "",
          description: "",
          nom: "",
          telephone: "",
          montant_don: undefined,
          is_public: true,
          is_anonyme: false,
          moyen_paiement: "CINETPAY",
        });

        // Réinitialiser après 5s
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#CA8A04] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              💝 Espace de Dévotion
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Déposer une Intention de Prière
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Confiez vos intentions à notre communauté de prière. Chaque demande
              est portée lors de nos rendez-vous d'antenne quotidiens.
            </p>
          </motion.div>
        </div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-200"
        >
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-green-900">Intention reçue!</p>
                  <p className="text-sm text-green-700">
                    Merci de votre confiance. Votre intention sera portée lors
                    de nos prières.
                  </p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-900">Erreur</p>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Intention (Requis) */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Intention de Prière <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="intention"
                value={formData.intention}
                onChange={handleChange}
                placeholder="Ex: Pour la santé de ma famille..."
                required
                disabled={loading}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004D20] focus:border-transparent outline-none transition-all disabled:opacity-50"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Description (optionnel)
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Détails supplémentaires de votre intention..."
                rows={4}
                disabled={loading}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004D20] focus:border-transparent outline-none transition-all resize-none disabled:opacity-50"
              />
            </div>

            {/* Grille 2 colonnes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nom */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Jean"
                  disabled={loading || formData.is_anonyme}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004D20] focus:border-transparent outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+225XXXXXXXXX"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004D20] focus:border-transparent outline-none transition-all disabled:opacity-50"
                />
              </div>
            </div>

            {/* Don optionnel */}
            <div className="bg-[#004D20]/5 border border-[#004D20]/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-[#CA8A04]" />
                <label className="text-sm font-bold text-slate-900">
                  Soutenir par un don optionnel
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Montant (FCFA)
                  </label>
                  <input
                    type="number"
                    name="montant_don"
                    value={formData.montant_don || ""}
                    onChange={handleChange}
                    placeholder="2000"
                    min="100"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004D20] focus:border-transparent outline-none transition-all disabled:opacity-50"
                  />
                </div>

                {formData.montant_don && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Moyen de paiement
                    </label>
                    <select
                      name="moyen_paiement"
                      value={formData.moyen_paiement}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004D20] focus:border-transparent outline-none transition-all disabled:opacity-50"
                    >
                      <option value="CINETPAY">CinetPay</option>
                      <option value="ORANGE_MONEY">Orange Money</option>
                      <option value="MTN_MOMO">MTN MoMo</option>
                      <option value="WAVE">Wave</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 border-t border-slate-200 pt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="is_public"
                  checked={formData.is_public}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-5 h-5 rounded border-slate-300 text-[#004D20] cursor-pointer disabled:opacity-50"
                />
                <span className="text-sm text-slate-700 group-hover:text-slate-900">
                  Partager publiquement (votre intention pourra être affichée
                  sur notre site)
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="is_anonyme"
                  checked={formData.is_anonyme}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-5 h-5 rounded border-slate-300 text-[#004D20] cursor-pointer disabled:opacity-50"
                />
                <span className="text-sm text-slate-700 group-hover:text-slate-900">
                  Rester anonyme
                </span>
              </label>
            </div>

            {/* Bouton submit */}
            <button
              type="submit"
              disabled={loading || !formData.intention}
              className="w-full bg-gradient-to-r from-[#004D20] to-[#003817] hover:from-[#003817] hover:to-[#002610] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-disabled shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <>
                  <div className="animate-spin">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>
                    {formData.montant_don
                      ? "Déposer l'intention et payer"
                      : "Déposer l'intention"}
                  </span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Infos supplémentaires */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Prières quotidiennes",
              desc: "Vos intentions sont portées lors de nos rendez-vous d'antenne",
            },
            {
              title: "Confidentialité",
              desc: "Vous pouvez rester anonyme si vous le souhaitez",
            },
            {
              title: "Soutien optionnel",
              desc: "Aidez-nous à continuer notre mission avec un don volontaire",
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-4 bg-white rounded-lg border border-slate-200"
            >
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                {info.title}
              </h4>
              <p className="text-xs text-slate-600">{info.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
