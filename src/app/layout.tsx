import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ConsentAwareVercelAnalytics } from "@/components/providers/ConsentAwareVercelAnalytics";
import { ConsentAwareTracking } from "@/components/providers/ConsentAwareTracking";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "S-Tech Web | Transformando ideias em soluções digitais",
  description:
    "Agência de tecnologia com 7+ anos de experiência criando sites e apps para empresas e governos. Atendimento 100% remoto em todo o Brasil.",
  keywords: [
    "desenvolvimento de sites",
    "criação de aplicativos",
    "desenvolvimento de software",
    "sistemas sob medida",
    "desenvolvimento web",
    "agência de tecnologia",
    "S-Tech Web",
    "Uberlândia",
  ],
  authors: [{ name: "S-Tech Web" }],
  creator: "S-Tech Web",
  publisher: "S-Tech Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.s-tech-web.com.br"),
  openGraph: {
    title: "S-Tech Web | Transformando ideias em soluções digitais",
    description:
      "Agência de tecnologia com 7+ anos de experiência criando sites e apps para empresas e governos.",
    url: "https://www.s-tech-web.com.br",
    siteName: "S-Tech Web",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S-Tech Web | Transformando ideias em soluções digitais",
    description:
      "Agência de tecnologia com 7+ anos de experiência criando sites e apps para empresas e governos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider>
          {children}
          <ConsentAwareVercelAnalytics />
          <ConsentAwareTracking />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
