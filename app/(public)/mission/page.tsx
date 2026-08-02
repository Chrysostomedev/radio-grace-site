/**
 * Page — Notre Mission
 */

import { PageHero } from '@/components/sections/PageHero';

export default function MissionPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <PageHero
        title="Notre Mission"
        subtitle="Transmettre l'Espoir et la Parole de Dieu"
        image="/img/actu (3).jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Notre Mission' },
        ]}
      />

      {/* Contenu */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-sun-50 to-terracotta-50 rounded-lg p-8 border-l-4 border-sun-500">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Notre Engagement</h2>
            <p className="text-lg text-slate-700">
              Radio Grâce-Espoir existe pour être une voix d'espoir, de foi et de compassion. Nous nous engageons à
              diffuser la Parole de Dieu, à offrir un espace de prière et d'enseignement spirituel, et à soutenir
              ceux qui traversent des moments de doute ou de souffrance.
            </p>
          </div>

          {/* Trois piliers */}
          <div>
            <h2 className="text-2xl font-bold text-forest-900 mb-6 text-center">Nos Trois Piliers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-forest-900">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-xl font-bold text-forest-900 mb-3">Spiritualité</h3>
                <p className="text-slate-600 text-sm">
                  Nous plaçons la foi et la méditation spirituelle au cœur de tous nos contenus et nos actions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-sun-500">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-forest-900 mb-3">Compassion</h3>
                <p className="text-slate-600 text-sm">
                  L'amour du prochain guide chacune de nos paroles et de nos actions envers ceux qui nous écoutent.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-terracotta-500">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-forest-900 mb-3">Espoir</h3>
                <p className="text-slate-600 text-sm">
                  Nous apportons l'espoir et la lumière à ceux qui vivent dans l'obscurité ou la détresse.
                </p>
              </div>
            </div>
          </div>

          {/* Objectifs */}
          <div className="bg-forest-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-6">Nos Objectifs</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-sun-500 font-bold">✓</span>
                <span className="text-slate-700">Transmettre les valeurs chrétiennes par la radio</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sun-500 font-bold">✓</span>
                <span className="text-slate-700">Offrir un espace de prière et d'enseignement accessible à tous</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sun-500 font-bold">✓</span>
                <span className="text-slate-700">Soutenir les personnes en détresse spirituelle ou émotionnelle</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sun-500 font-bold">✓</span>
                <span className="text-slate-700">Renforcer les liens au sein de la communauté de foi</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sun-500 font-bold">✓</span>
                <span className="text-slate-700">Mener des actions caritatives en faveur des plus nécessiteux</span>
              </li>
            </ul>
          </div>

          {/* Appel à action */}
          <div className="bg-gradient-to-r from-forest-900 to-forest-700 rounded-lg p-8 text-ivory-100 text-center">
            <h2 className="text-2xl font-bold mb-4">Rejoignez Notre Mission</h2>
            <p className="text-lg mb-6">
              Vous pouvez nous soutenir en écoutant nos émissions, en partageant vos prières, ou en nous aidant
              financièrement.
            </p>
            <a
              href="/contacts"
              className="inline-block px-6 py-3 bg-sun-500 text-forest-900 font-bold rounded-lg hover:bg-sun-400 transition-colors"
            >
              Nous Soutenir
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
