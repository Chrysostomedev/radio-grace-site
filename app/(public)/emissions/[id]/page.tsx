'use client';

// Redirection vers /programmes/[id] (nouvelle version avec API réelle)
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function EmissionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  useEffect(() => {
    // Redirection automatique vers la nouvelle page
    router.replace(`/programmes/${id}`);
  }, [id, router]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4">
        <Loader2 className="w-8 h-8 text-[#004D20] animate-spin mx-auto" />
        <p className="text-slate-600">
          Redirection vers le programme détail...
        </p>
        <p className="text-xs text-slate-500">
          Si le redirection ne fonctionne pas,{' '}
          <a href={`/programmes/${id}`} className="text-[#004D20] hover:text-[#003817] font-bold underline">
            cliquez ici
          </a>
        </p>
      </div>
    </div>
  );
}
