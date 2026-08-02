# Architecture du site Radio Grâce-Espoir

## 📐 Vue d'ensemble

Site web statique Next.js 14+ (App Router) pour Radio Grâce-Espoir. Architecture maintenable, prête à être branchée sur l'API Laravel.

**Stack:**
- Next.js 16+ App Router
- React 19
- TypeScript strict
- Tailwind CSS 4 (avec tokens marque)
- Lucide React (icons)
- Framer Motion (animations)

---

## 📁 Structure des dossiers

```
rge-site/
├── app/
│   ├── (public)/                          # Routes publiques
│   │   ├── layout.tsx                     # Layout groupe
│   │   ├── page.tsx                       # Accueil
│   │   ├── qui-sommes-nous/page.tsx       # À propos
│   │   ├── emissions/page.tsx             # Émissions (à créer)
│   │   ├── programmes/page.tsx            # Programmes (à créer)
│   │   ├── actualites/
│   │   │   ├── page.tsx                   # Liste actualités (à créer)
│   │   │   └── [slug]/page.tsx            # Détail actualité (à créer)
│   │   ├── prieres/
│   │   │   ├── page.tsx                   # Liste prières (à créer)
│   │   │   └── [slug]/page.tsx            # Détail prière (à créer)
│   │   └── contacts/page.tsx              # Formulaire contact (à créer)
│   ├── layout.tsx                         # Layout racine + Provider
│   ├── globals.css                        # Tokens Tailwind marque
│   └── favicon.ico
│
├── components/
│   ├── ui/                                # Composants atomiques
│   │   ├── Button.tsx                     ✅
│   │   ├── Input.tsx                      ✅
│   │   ├── Badge.tsx                      ✅
│   │   ├── Avatar.tsx                     ✅
│   │   └── Skeleton.tsx                   ✅
│   ├── cards/                             # Composants métier unitaires
│   │   ├── ActualiteCard.tsx              ✅
│   │   ├── EmissionCard.tsx               ✅
│   │   ├── QuoteCard.tsx                  ✅
│   │   ├── PriereCard.tsx                 ❌ À créer
│   │   └── AdCard.tsx                     ❌ À créer
│   ├── sections/                          # Blocs de page
│   │   ├── TopBar.tsx                     ✅ (date + flash info + socials)
│   │   ├── Header.tsx                     ✅ (logo + nav sticky)
│   │   ├── PlayerBar.tsx                  ✅ (player audio persistant)
│   │   ├── HeroCarousel.tsx               ✅
│   │   ├── AboutSection.tsx               ✅
│   │   ├── PageHero.tsx                   ✅ (bandeau titre interne)
│   │   ├── Footer.tsx                     ✅
│   │   └── VideoSection.tsx               ❌ À créer
│   ├── form/                              # Formulaires
│   │   ├── SearchInput.tsx                ❌ À créer
│   │   └── ContactForm.tsx                ❌ À créer
│   └── modals/                            # Overlays
│       └── SearchModal.tsx                ❌ À créer
│
├── context/
│   └── PlayerContext.tsx                  ✅ (persiste entre pages)
│
├── hooks/
│   ├── useActualites.ts                   ✅
│   ├── useEmissions.ts                    ✅
│   ├── usePrieres.ts                      ✅
│   └── useHeroSlides.ts                   ✅
│
├── lib/
│   ├── constants.ts                       ✅ (marque, nav, réseaux, contacts)
│   ├── utils.ts                           ✅ (formatDateFR, slugify, truncate, cn)
│   └── data/
│       ├── actualites.ts                  ✅ (+ helpers getBySlug, search)
│       ├── emissions.ts                   ✅ (+ helper getBySlug)
│       ├── prieres.ts                     ✅ (+ helpers getBySlug, getByCategory)
│       └── hero-slides.ts                 ✅
│
├── types/
│   └── index.ts                           ✅ (Actualite, Emission, Priere, HeroSlide, etc.)
│
├── public/
│   └── images/                            (à remplir)
│
└── [config files]
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── tailwind.config.js
    ├── postcss.config.mjs
    └── eslint.config.mjs
```

---

## 🎯 État d'avancement

### ✅ Complété

1. **Types & Interfaces** (`types/index.ts`)
   - `Actualite` (avec id, slug, content, category, publishedAt)
   - `Emission` (avec schedule, presenter)
   - `Priere` (avec category pour intentions/neuvaines)
   - `HeroSlide` (pour carrousel)
   - `SocialLink`, `ContactFormData`

2. **Données statiques** (`lib/data/`)
   - `actualites.ts` — helpers: getBySlug(), searchActualites()
   - `emissions.ts` — helper: getBySlug()
   - `prieres.ts` — helpers: getBySlug(), getByCategory()
   - `hero-slides.ts` — slides avec image/title/CTA

3. **Hooks** (`hooks/`)
   - `useActualites()` — retourne actualites + helpers
   - `useEmissions()` — retourne emissions
   - `usePrieres()` — retourne prieres
   - `useHeroSlides()` — retourne hero slides

4. **Contexte** (`context/PlayerContext.tsx`)
   - ✅ Gère: isPlaying, volume, currentStation
   - ✅ Persiste entre les navigations (monté dans RootLayout)
   - ✅ Fournit `usePlayer()` hook

5. **UI Atomiques** (`components/ui/`)
   - `Button.tsx` — variants: primary/secondary/ghost/accent
   - `Input.tsx` — avec support icon et error
   - `Badge.tsx` — variants: default/flash/accent/success
   - `Avatar.tsx` — sizes: sm/md/lg/xl
   - `Skeleton.tsx` — pour placeholder chargement

6. **Sections principales** (`components/sections/`)
   - `TopBar.tsx` — date + carrousel flash info + socials brandées
   - `Header.tsx` — logo + nav sticky + menu mobile (burger)
   - `HeroCarousel.tsx` — autoplay avec indicateurs + flèches
   - `PlayerBar.tsx` — player audio fixe en bas + volume + share
   - `AboutSection.tsx` — bloc "Notre Histoire" réutilisable
   - `PageHero.tsx` — bandeau titre avec breadcrumb
   - `Footer.tsx` — navigation, contact, socials, copyright

7. **Cartes métier** (`components/cards/`)
   - `ActualiteCard.tsx` — avec date FR, badge catégorie
   - `EmissionCard.tsx` — avec schedule, presenter, duration
   - `QuoteCard.tsx` — avec image auteur, role

8. **Pages** (`app/(public)/`)
   - ✅ `/` — Accueil (hero + citation + émissions + actualités + CTA prières)
   - ✅ `/qui-sommes-nous` — À propos (histoire + citation + valeurs + équipe)

9. **Tokens Tailwind** (`app/globals.css`)
   - ✅ Couleurs marque: forest-900/700/100, sun-500/400/100, terracotta-500/100, ivory-100/50
   - ✅ Base styles pour h1-h6, a, body

---

### ❌ À créer (prochaines étapes)

**Pages manquantes:**
- [ ] `/emissions` — Grille d'émissions
- [ ] `/programmes` — Grille de programmes
- [ ] `/actualites` — Liste + recherche
- [ ] `/actualites/[slug]` — Détail article
- [ ] `/prieres` — Liste ou dropdown menu
- [ ] `/prieres/[slug]` — Détail prière
- [ ] `/contacts` — Formulaire de contact

**Composants manquants:**
- [ ] `PriereCard.tsx` — Carte prière pour grille/recherche
- [ ] `AdCard.tsx` — Encart publicitaire latéral
- [ ] `SearchInput.tsx` — Barre recherche
- [ ] `SearchModal.tsx` — Modal recherche (si modal)
- [ ] `ContactForm.tsx` — Formulaire contact
- [ ] `VideoSection.tsx` — Section vidéo (si nécessaire)

---

## 🔄 Flux données → Pages

### Règle d'or
**Aucun composant ne lit `lib/data` directement.** Toujours passer par un hook.

```
Page → Hook (useActualites) → lib/data → Composant Card
```

Exemple:
```tsx
// ❌ MAUVAIS
import { actualites } from '@/lib/data/actualites';
export function MyPage() {
  return actualites.map(...); // FORBIDDEN
}

// ✅ BON
import { useActualites } from '@/hooks/useActualites';
export function MyPage() {
  const actualites = useActualites();
  return actualites.map(...);
}
```

Cet approche permet de brancher l'API Laravel sans refactoriser les composants — on remplace juste la logique du hook.

---

## 🎨 Tokens Tailwind (marque)

```css
forest-950: #0b3a2a      /* Très foncé */
forest-900: #0f4d37      /* Primaire */
forest-700: #186548      /* Hover */
forest-100: #d1e8e0      /* Light BG */

sun-600: #d97706         /* Foncé */
sun-500: #f59e0b         /* Primaire doré */
sun-400: #fbbf24         /* Hover */
sun-100: #fef3c7         /* Light BG */

terracotta-500: #d97706  /* Accent */
terracotta-100: #fed7aa  /* Light BG */

ivory-100: #faf8f3       /* BG principal */
ivory-50: #fffbf7        /* BG alternatif */
```

---

## 🚀 Comment ajouter du contenu

### 1. Ajouter une nouvelle actualité

```typescript
// lib/data/actualites.ts
export const actualites: Actualite[] = [
  {
    id: '2',
    title: 'Nouvelle actualité',
    slug: 'nouvelle-actualite',
    excerpt: 'Court résumé...',
    content: 'Contenu complet...',
    category: 'flash',
    publishedAt: '2026-07-20T14:00:00Z',
    author: 'Nom',
    image: '/images/actualites/new.jpg',
  },
];
```

### 2. Ajouter une nouvelle page

```tsx
// app/(public)/new-page/page.tsx
import { PageHero } from '@/components/sections/PageHero';

export default function NewPage() {
  return (
    <>
      <PageHero title="Titre" breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Nouveau' }]} />
      {/* Contenu */}
    </>
  );
}
```

---

## 🔌 Branchement API Laravel (futur)

Quand l'API Laravel sera ready:

```typescript
// lib/api/actualites.ts (nouveau)
export async function fetchActualites(): Promise<Actualite[]> {
  const res = await fetch('https://api.radiogracespoir.fr/actualites');
  return res.json();
}

// hooks/useActualites.ts (à modifier)
'use client';
import { useEffect, useState } from 'react';
import { fetchActualites } from '@/lib/api/actualites';

export function useActualites(): Actualite[] {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  
  useEffect(() => {
    fetchActualites().then(setActualites);
  }, []);

  return actualites;
}
```

**Aucune autre modification ne sera nécessaire** — les pages et composants restent identiques.

---

## 📊 Format des données (Resources Laravel)

Les noms de champs doivent correspondre exactement à ce que renverra l'API Laravel :

```typescript
// Actualite Resource
{
  id: "uuid",
  title: "string",
  slug: "string",          // Généré côté backend (slugify du title)
  excerpt: "string",       // Résumé max 200 chars
  content: "string|markdown",
  image: "url",            // Nullable
  category: "flash|normal",
  publishedAt: "ISO date", // 2026-07-20T10:45:00Z
  author: "string",        // Nullable
  tags: ["array"],         // Nullable
}
```

---

## ⚙️ Commandes utiles

```bash
# Développement
npm run dev                # Démarrer serveur (http://localhost:3000)

# Build
npm run build              # Compilation production (SSG)

# Lint
npm run lint               # Vérifier ESLint

# Type check
npx tsc --noEmit           # Vérifier TypeScript sans émettre
```

---

## 🐛 Points à retenir

1. **Player audio persiste** — Monté une seule fois dans RootLayout via PlayerProvider
2. **Dates formatées** — Utiliser `formatDateFR()` de `lib/utils` partout
3. **Pas de `any`** — TypeScript strict partout
4. **Composants découplés** — Pas de logique métier en UI, pas d'imports directs de `lib/data`
5. **Mobile-first** — Responsive dès le départ (header burger, grilles adaptables)
6. **Tokens marque** — Ne jamais hardcoder de couleurs, utiliser les tokens Tailwind

---

## 📝 À faire ensuite (par ordre)

1. ✅ Créer squelette pages/composants
2. ⏳ Remplir les 2 premières pages (Accueil ✅ + À propos ✅)
3. ⏳ Créer les pages Émissions, Programmes
4. ⏳ Créer pages Actualités (liste + détail)
5. ⏳ Créer pages Prières (liste + détail)
6. ⏳ Créer page Contact
7. ⏳ Intégrer images/textes réels
8. ⏳ Tests QA
9. ⏳ Branchement API Laravel

