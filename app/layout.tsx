import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/context/QueryProvider";
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
  description:
    "Webradio chrétienne d'évangélisation et d'enseignement spirituel. Écoutez nos émissions en direct.",
  keywords: "radio, chrétienne, spirituel, évangélisation, prières, enseignement",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory-50">
        <CookieConsent />
        <QueryProvider>
         
            {children}
         
        </QueryProvider>
      </body>
    </html>
  );
}