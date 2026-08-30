'use client';

import { PageHero } from '@/components/sections/PageHero';
import { useProgrammes } from '@/hooks/useProgrammes';
import { ProgrammesInteractive } from '@/components/sections/ProgrammesInteractive';

export default function ProgrammesPage() {
  const { data, isLoading } = useProgrammes();
  const programmes = data?.data || [];

  return (
    <div className="pb-24 bg-[#FAF9F6] min-h-screen">
      {/* Hero Header */}
      <PageHero
        title="Grille des Programmes"
        subtitle="Retrouvez l'ensemble de nos rendez-vous spirituels, culturels et d'actualité."
        image="/img/hero1.jpg"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Programmes' },
        ]}
      />

      {/* Main Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004D20]"></div>
            </div>
          ) : (
            <ProgrammesInteractive initialEmissions={programmes} />
          )}
        </div>
      </section>
    </div>
  );
}