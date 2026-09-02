// app/(public)/emissions/layout.tsx
// Layout pour redirection vers /programmes (nouvelle version API)

import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

export default function EmissionsLayout({ children }: { children: ReactNode }) {
  // Note: Ce layout restera pour compatibilité
  // Les utilisateurs accédant à /emissions seront guidés vers /programmes
  return children;
}
