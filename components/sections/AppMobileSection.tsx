import { Check, Download, Smartphone } from "lucide-react";

export default function AppMobileSection() {
  return (
    <section className="relative overflow-hidden bg-[#0E241C] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#163A2C] text-[#FBF6EA]">
      {/* Halo discret de fond */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#F0A93E]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Illustration téléphone */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              {/* Halos d'arrière-plan */}
              <div
                className="absolute inset-0 rounded-full bg-[#F0A93E]/10 blur-2xl"
                aria-hidden="true"
              />

              {/* Téléphone SVG */}
              <svg
                viewBox="0 0 200 380"
                className="relative z-10 w-48 sm:w-56 drop-shadow-2xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Application mobile Radio Grâce-Espoir"
              >
                {/* Boîtier téléphone */}
                <rect
                  x="10"
                  y="4"
                  width="180"
                  height="372"
                  rx="30"
                  fill="#0A1F17"
                  stroke="#2E4A3D"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="8"
                  width="172"
                  height="364"
                  rx="27"
                  fill="#163A2C"
                />

                {/* Encoche caméra */}
                <rect
                  x="75"
                  y="16"
                  width="50"
                  height="12"
                  rx="6"
                  fill="#0A1F17"
                />

                {/* Écran */}
                <rect
                  x="18"
                  y="35"
                  width="164"
                  height="300"
                  rx="4"
                  fill="#0E241C"
                />

                {/* Header de l'app */}
                <rect
                  x="18"
                  y="35"
                  width="164"
                  height="52"
                  rx="4"
                  fill="#163A2C"
                />

                <circle
                  cx="40"
                  cy="61"
                  r="12"
                  fill="#F0A93E"
                />

                {/* Petit micro/logo */}
                <rect
                  x="38"
                  y="53"
                  width="4"
                  height="12"
                  rx="2"
                  fill="#163A2C"
                />
                <rect
                  x="34"
                  y="59"
                  width="12"
                  height="3"
                  rx="1.5"
                  fill="#163A2C"
                />
                <rect
                  x="38.5"
                  y="63"
                  width="3"
                  height="4"
                  rx="1"
                  fill="#163A2C"
                />

                <text
                  x="57"
                  y="57"
                  fill="#FBF6EA"
                  fontSize="7"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                >
                  Radio Grâce-Espoir
                </text>

                <text
                  x="57"
                  y="67"
                  fill="#B8C4BD"
                  fontSize="6"
                  fontFamily="monospace"
                >
                  L&apos;Évangile au cœur de l&apos;Homme
                </text>

                {/* Pastille LIVE */}
                <rect
                  x="150"
                  y="55"
                  width="24"
                  height="12"
                  rx="6"
                  fill="#E4572E"
                />

                <text
                  x="154"
                  y="63"
                  fill="white"
                  fontSize="6"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  LIVE
                </text>

                {/* Visualiseur audio */}
                <rect
                  x="30"
                  y="100"
                  width="5"
                  height="20"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.8"
                />
                <rect
                  x="40"
                  y="95"
                  width="5"
                  height="30"
                  rx="2"
                  fill="#F0A93E"
                />
                <rect
                  x="50"
                  y="105"
                  width="5"
                  height="15"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.7"
                />
                <rect
                  x="60"
                  y="92"
                  width="5"
                  height="35"
                  rx="2"
                  fill="#F0A93E"
                />
                <rect
                  x="70"
                  y="100"
                  width="5"
                  height="22"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.9"
                />
                <rect
                  x="80"
                  y="88"
                  width="5"
                  height="40"
                  rx="2"
                  fill="#F0A93E"
                />
                <rect
                  x="90"
                  y="98"
                  width="5"
                  height="25"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.8"
                />
                <rect
                  x="100"
                  y="105"
                  width="5"
                  height="16"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.6"
                />
                <rect
                  x="110"
                  y="93"
                  width="5"
                  height="32"
                  rx="2"
                  fill="#F0A93E"
                />
                <rect
                  x="120"
                  y="100"
                  width="5"
                  height="22"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.7"
                />
                <rect
                  x="130"
                  y="97"
                  width="5"
                  height="28"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.9"
                />
                <rect
                  x="140"
                  y="103"
                  width="5"
                  height="18"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.6"
                />
                <rect
                  x="150"
                  y="95"
                  width="5"
                  height="30"
                  rx="2"
                  fill="#F0A93E"
                />
                <rect
                  x="160"
                  y="100"
                  width="5"
                  height="22"
                  rx="2"
                  fill="#F0A93E"
                  opacity="0.8"
                />

                {/* Titre émission */}
                <text
                  x="30"
                  y="150"
                  fill="#FBF6EA"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                >
                  &apos;Heure de Grâce
                </text>

                <text
                  x="30"
                  y="162"
                  fill="#B8C4BD"
                  fontSize="7"
                  fontFamily="sans-serif"
                >
                  En direct · L&apos;Évangile au cœur de l&apos;Homme
                </text>

                {/* Bouton play central */}
                <circle
                  cx="100"
                  cy="200"
                  r="24"
                  fill="#163A2C"
                  stroke="#2E4A3D"
                  strokeWidth="1"
                />
                <circle
                  cx="100"
                  cy="200"
                  r="18"
                  fill="#F0A93E"
                />
                <polygon
                  points="97,193 97,207 109,200"
                  fill="#163A2C"
                />

                {/* Barre de progression */}
                <rect
                  x="30"
                  y="240"
                  width="140"
                  height="3"
                  rx="2"
                  fill="#2E4A3D"
                />
                <rect
                  x="30"
                  y="240"
                  width="60"
                  height="3"
                  rx="2"
                  fill="#F0A93E"
                />
                <circle
                  cx="90"
                  cy="241.5"
                  r="5"
                  fill="#FBF6EA"
                />

                <text
                  x="30"
                  y="255"
                  fill="#8FA398"
                  fontSize="6"
                  fontFamily="monospace"
                >
                  23:14
                </text>

                <text
                  x="155"
                  y="255"
                  fill="#8FA398"
                  fontSize="6"
                  fontFamily="monospace"
                >
                  live
                </text>

                {/* Menu bas */}
                <rect
                  x="18"
                  y="295"
                  width="164"
                  height="40"
                  fill="#163A2C"
                />

                {[
                  { x: 38, label: "Accueil" },
                  { x: 78, label: "Émissions" },
                  { x: 122, label: "Direct" },
                  { x: 152, label: "Dons" },
                ].map((item) => (
                  <text
                    key={item.x}
                    x={item.x}
                    y="318"
                    fill="#B8C4BD"
                    fontSize="6"
                    fontFamily="sans-serif"
                  >
                    {item.label}
                  </text>
                ))}

                {/* Barre home */}
                <rect
                  x="85"
                  y="345"
                  width="30"
                  height="4"
                  rx="2"
                  fill="#4A6355"
                />
              </svg>
            </div>
          </div>

          {/* Texte & Liens de téléchargement */}
          <div className="lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F0A93E]">
              <Smartphone className="h-4 w-4" />
              Application mobile
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#FBF6EA] sm:text-4xl">
              Radio Grâce- {" "}
              <span className="text-[#F0A93E]">
                où que vous soyez
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#D5DDD6]">
              Téléchargez l&apos;application officielle de la Radio Grâce-Espoir.
              Écoutez le direct, retrouvez vos émissions et podcasts, recevez les
              actualités et soumettez vos intentions de prière.
            </p>

            {/* Feature list */}
            <ul className="mt-6 space-y-2.5">
              {[
                "Écoute en direct 24h/24",
                "Émissions & podcasts à la demande",
                "Notifications pour les messes et événements",
                "Intentions de prière",
                "Accessible hors connexion (homélies)",
              ].map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#163A2C] border border-[#F0A93E]/40 text-[#F0A93E]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>

                  <span className="text-sm font-medium text-[#D5DDD6]">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* Badges de Store */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Google Play */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-[#163A2C] border border-[#2E4A3D] px-5 py-3 hover:bg-[#1C4636] hover:border-[#F0A93E]/50 transition-all shadow-sm"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.18 23.5c.2.12.44.13.65.03l11.85-6.83-2.65-2.65L3.18 23.5z"
                    fill="#EA4335"
                  />
                  <path
                    d="M20.82 10.28L17.6 8.42l-2.95 2.95 2.95 2.95 3.25-1.87a1.5 1.5 0 000-2.17z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M3.18.5L13.03 10.35l2.65-2.65L3.83.47A.75.75 0 003.18.5z"
                    fill="#4285F4"
                  />
                  <path
                    d="M3.18.5c-.2.12-.35.34-.35.6v21.8c0 .26.15.48.35.6l10.5-11.5L3.18.5z"
                    fill="#34A853"
                  />
                </svg>

                <div className="text-left">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-[#8FA398]">
                    Disponible sur
                  </p>
                  <p className="text-sm font-bold text-[#FBF6EA]">
                    Google Play
                  </p>
                </div>
              </a>

              {/* App Store (Bientôt) */}
              <div
                className="inline-flex items-center gap-3 rounded-xl bg-[#163A2C]/50 border border-dashed border-[#2E4A3D] px-5 py-3 opacity-60"
                title="Bientôt disponible"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#8FA398]"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 .65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>

                <div className="text-left">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-[#6B7F73]">
                    Bientôt sur
                  </p>
                  <p className="text-sm font-bold text-[#8FA398]">
                    App Store
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 font-mono text-[11px] text-[#6B7F73]">
              Application gratuite · Android 6.0+ · Faible consommation de données
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

