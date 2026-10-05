import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ortak Tercüme ve Vize Danışmanlık | Yeminli Tercüme & Noter Onaylı Çeviri",
  description: "Yozgat Sorgun'da 16 yıllık tecrübeyle Yeminli Tercüme, Noter Onaylı Çeviri ve Profesyonel Vize Danışmanlık hizmetleri. Hemen uzman desteği alın.",
  keywords: "Yeminli Tercüme, Noter Onaylı Çeviri, Vize Danışmanlık, Yozgat, Sorgun, Aile Birleşimi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ortak Tercüme ve Vize Danışmanlık",
    image: "/logo.png",
    "@id": "https://ortaktercumevize.vercel.app",
    url: "https://ortaktercumevize.vercel.app",
    telephone: ["+905435136713", "+905426961732"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yeşilöz Mah. Yılmaz Kılıçaslan Caddesi Bina No: 12 Kat: 2 No: 1",
      addressLocality: "Sorgun",
      addressRegion: "Yozgat",
      addressCountry: "TR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.809974471897135,
      longitude: 35.178666369679426
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "18:00"
    }
  };

  return (
    <html lang="tr">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} text-zinc-100 antialiased min-h-screen flex flex-col relative`}>
        <BackgroundVideo />
        <Header />
        <main className="flex-1 flex flex-col pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
