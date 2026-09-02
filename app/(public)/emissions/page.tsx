'use client';

// Redirection vers /programmes (nouvelle version avec API réelle)
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function EmissionsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique après 1s (montre un message au besoin)
    const timer = setTimeout(() => {
      router.replace('/programmes');
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4">
        <Loader2 className="w-8 h-8 text-[#004D20] animate-spin mx-auto" />
        <p className="text-slate-600">
          Redirection vers la grille des programmes...
        </p>
        <p className="text-xs text-slate-500">
          Si le redirection ne fonctionne pas,{' '}
          <a href="/programmes" className="text-[#004D20] hover:text-[#003817] font-bold underline">
            cliquez ici
          </a>
        </p>
      </div>
    </div>
  );
}

