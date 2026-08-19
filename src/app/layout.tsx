import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { SiteShell } from "@/components/layout/SiteShell";
import { PreferencesProvider } from "@/components/a11y/PreferencesProvider";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-sans",
  display: "swap",
});

const display = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Vallenar`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/brand/hero-huasco.jpg", width: 1200, height: 675, alt: "Valle del Huasco al atardecer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1F33",
  width: "device-width",
  initialScale: 1,
};

const themeBoot = `(function(){try{var s=localStorage.getItem("sa-theme");var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body className="min-h-full bg-paper font-sans text-ink">
        <PreferencesProvider>
          <SiteShell>{children}</SiteShell>
          <CookieBanner />
        </PreferencesProvider>
      </body>
    </html>
  );
}
