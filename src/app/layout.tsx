import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "S-tech | Transformando ideias em soluções digitais",
  description:
    "Agência de tecnologia com 7+ anos de experiência criando sites e apps para governos e igrejas. Atendimento 100% remoto em todo o Brasil.",
  keywords: [
    "desenvolvimento de sites",
    "criação de aplicativos",
    "sites para igrejas",
    "sites para governo",
    "desenvolvimento web",
    "agência de tecnologia",
    "S-tech",
  ],
  authors: [{ name: "S-tech" }],
  creator: "S-tech",
  publisher: "S-tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://s-tech.com.br"),
  openGraph: {
    title: "S-tech | Transformando ideias em soluções digitais",
    description:
      "Agência de tecnologia com 7+ anos de experiência criando sites e apps para governos e igrejas.",
    url: "https://s-tech.com.br",
    siteName: "S-tech",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S-tech | Transformando ideias em soluções digitais",
    description:
      "Agência de tecnologia com 7+ anos de experiência criando sites e apps para governos e igrejas.",
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
