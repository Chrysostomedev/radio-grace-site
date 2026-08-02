/**
 * Page — Témoignages
 */

import { PageHero } from '@/components/sections/PageHero';

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie D.',
    content: 'Radio Grâce-Espoir m\'a vraiment aidée pendant les moments les plus difficiles de ma vie. Merci infiniment.',
  },
  {
    id: '2',
    name: 'Jean P.',
    content: 'Les émissions du Père Attobra me permettent de commencer chaque journée avec sérénité et foi.',
  },
  {
    id: '3',
    name: 'Sophie L.',
    content: 'Un merveilleux projet qui porte vraiment l\'espoir. Je recommande vivement cette radio à tous mes proches.',
  },
];

export default function TemoignagesPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <PageHero
        title="Témoignages"
        subtitle="Écoutez les histoires de nos auditeurs"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Témoignages' },
        ]}
      />

      {/* Contenu */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sun-500">
                <div className="flex gap-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sun-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">« {testimonial.content} »</p>
                <p className="font-bold text-forest-900">{testimonial.name}</p>
              </div>
            ))}
          </div>

          {/* CTA Partager */}
          <div className="mt-12 bg-forest-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Partagez Votre Témoignage</h2>
            <p className="text-slate-600 mb-6">
              Vous avez une histoire à raconter ? Nous aimerions l'entendre. Contactez-nous pour partager votre
              expérience.
            </p>
            <a
              href="/contacts"
              className="inline-block px-6 py-3 bg-forest-900 text-ivory-100 font-bold rounded-lg hover:bg-forest-700 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
