import { PageHero } from '@/components/sections/PageHero';
import { useEmissions } from '@/hooks/useEmissions';
import { ProgrammesInteractive } from '@/components/sections/ProgrammesInteractive';

export default function ProgrammesPage() {
  const emissions = useEmissions();

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
          <ProgrammesInteractive initialEmissions={emissions} />
        </div>
      </section>
    </div>
  );
}