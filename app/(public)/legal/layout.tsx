import Link from 'next/link';
import { Shield, FileText } from 'lucide-react';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FBF6EA]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#163A2C] to-[#0E241C] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-[#FBF6EA] tracking-tight">
            Informations Légales
          </h1>
          <p className="mt-3 text-sm text-[#FBF6EA]/70 max-w-xl mx-auto">
            Radio Grâce-Espoir — L&apos;Évangile au cœur de l&apos;Homme
          </p>

          {/* Onglets */}
          <div className="mt-8 inline-flex gap-2 bg-[#0E241C]/60 p-1.5 rounded-2xl border border-[#F0A93E]/20">
            <Link
              href="/legal/politique-de-confidentialite"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#FBF6EA]/70 hover:text-[#F0A93E] hover:bg-[#F0A93E]/10 transition-all"
            >
              <Shield size={16} />
              Politique de confidentialité
            </Link>
            <Link
              href="/legal/mentions-legales"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#FBF6EA]/70 hover:text-[#F0A93E] hover:bg-[#F0A93E]/10 transition-all"
            >
              <FileText size={16} />
              Mentions légales
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">{children}</div>
    </div>
  );
}
