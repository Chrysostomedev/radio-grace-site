import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { PlayerProvider } from "@/context/PlayerContext";
import { QueryProvider } from "@/context/QueryProvider";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { PlayerBar } from "@/components/sections/PlayerBar";
import { Footer } from "@/components/sections/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radio Grâce-Espoir — La voix de l'Espoir",
  description: "Webradio chrétienne d'évangélisation et d'enseignement spirituel. Écoutez nos émissions en direct.",
  keywords: "radio, chrétienne, spirituel, évangélisation, prières, enseignement",
  robots: "index, follow",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CookieConsent />
      <QueryProvider>
        <PlayerProvider>
          {/* Top bar (date + flash info + socials) */}
          <TopBar />

          {/* Header principal */}
          <Header />

          {/* Contenu des pages */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Player audio persistant */}
          <PlayerBar />
        </PlayerProvider>
      </QueryProvider>
    </>
  );
}

