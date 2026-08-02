import { PageHero } from '@/components/sections/PageHero';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Radio
} from 'lucide-react';

export default function ContactsPage() {
  // URLs d'action directe
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone?.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Bonjour, je souhaite contacter Radio Grâce Espoir.')}`;
  const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent('Demande de contact')}`;
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127103.585721869!2d-4.08112328222656!3d5.3484252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb8e3488950a2e7%3A0xf69c737c355286e9!2sAbidjan!5e0!3m2!1sfr!2sci!4v1710000000000!5m2!1sfr!2sci";

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Hero Header */}
      <PageHero
        title="Entrons en Contact"
        subtitle="Un membre de notre équipe est à votre écoute pour vous accompagner."
        image="/img/hero2.jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Contacts' },
        ]}
      />

      {/* Main Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section 1 : Hub d'actions directes (Remplace le Formulaire) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Action 1 : WhatsApp Direct (Focus Premium) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-[#25D366]/10 via-emerald-50/50 to-white p-8 rounded-3xl border border-[#25D366]/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#25D366]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Réponse Rapide
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#25D366] transition-colors">
                Discutez sur WhatsApp
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Bénéficiez d'un échange instantané avec nos équipes. Idéal pour vos questions urgentes et vos intentions.
              </p>

              <div className="inline-flex items-center gap-3 text-[#25D366] font-extrabold text-sm group-hover:translate-x-2 transition-transform">
                <span>Démarrer la discussion</span>
                <Send className="w-4 h-4" />
              </div>
            </a>

            {/* Action 2 : Courriel Officiel */}
            <a
              href={mailtoUrl}
              className="group relative bg-gradient-to-br from-[#004D20]/10 via-amber-50/30 to-white p-8 rounded-3xl border border-[#004D20]/15 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#004D20]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl bg-[#004D20] text-white shadow-md shadow-[#004D20]/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CA8A04]" />
                  Courrier Officiel
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#004D20] transition-colors">
                Envoyez-nous un Email
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Pour vos partenariats, propositions d'émissions ou demandes administratives formelles.
              </p>

              <div className="inline-flex items-center gap-3 text-[#004D20] font-extrabold text-sm group-hover:translate-x-2 transition-transform">
                <span>{CONTACT_INFO.email}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

          </div>

          {/* Section 2 : Grille d'Informations & Réseaux */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Téléphone */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 text-[#CA8A04] rounded-xl border border-amber-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Téléphone</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="block font-black text-slate-900 hover:text-[#004D20] transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-[#004D20] rounded-xl border border-emerald-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Disponibilité</span>
                  <p className="font-bold text-slate-800 text-sm">{CONTACT_INFO.hours || 'Du Lundi au Vendredi: 8h - 18h'}</p>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Communauté & Direct</span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#004D20] hover:text-white flex items-center justify-center font-black text-xs transition-all shadow-2xs"
                    title={link.platform}
                  >
                    {link.platform.substring(0, 2).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Section 3 : Carte Google Maps Interactive & Adresse */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Détails Adresse */}
            <div className="lg:col-span-4 p-8 sm:p-10 bg-gradient-to-b from-slate-900 to-[#002C13] text-white flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-amber-300 backdrop-blur-md border border-white/10">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  Siège Social
                </span>
                
                <h3 className="text-3xl font-black tracking-tight">Rendez-nous visite dans nos locaux</h3>
                
                <div className="space-y-4 text-slate-300 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <p className="leading-relaxed">{CONTACT_INFO.address || 'Abidjan, Côte d\'Ivoire'}</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address || 'Abidjan')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-center text-xs tracking-wider uppercase transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Ouvrir dans Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Google Maps iFrame */}
            <div className="lg:col-span-8 min-h-[380px] w-full relative bg-slate-100">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="w-full h-full filter contrast-[1.05]"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}