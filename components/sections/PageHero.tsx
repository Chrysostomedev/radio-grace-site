import Image from 'next/image';

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
  /** URL de l'image d'arrière-plan (optionnelle) */
  image?: string;
  /** Alt text pour l'image d'arrière-plan (optionnel) */
  imageAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumb,
  image,
  imageAlt = 'Arrière-plan en-tête',
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-forest-900 to-forest-700 text-ivory-100 py-12 sm:py-16 px-4">
      
      {/* Image d'arrière-plan avec overlay si disponible */}
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center z-0"
          />
          {/* Calque sombre pour garantir la lisibilité du texte */}
          <div className="absolute inset-0 bg-forest-950/80 backdrop-blur-[2px] z-10" />
        </>
      )}

      {/* Contenu principal */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="text-sm mb-4 flex items-center gap-2 flex-wrap">
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sun-300 hover:text-sun-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-ivory-300 font-medium">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && (
                  <span className="text-ivory-400/60" aria-hidden="true">
                    /
                  </span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
          {title}
        </h1>

        {/* Sous-titre */}
        {subtitle && (
          <p className="text-lg sm:text-xl text-sun-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}