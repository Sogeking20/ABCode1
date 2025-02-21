import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { Toaster } from "react-hot-toast";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
import Script from "next/script";
import { Suspense } from "react";
import Head from "next/head";

const nunito = Ubuntu({
  weight: "400",
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

// export const metadata: Metadata = {
//   title: "Разработка сайтов и мобильных приложений под ключ",
//   description:
//     "ABCode: разработка и запуск сайтов и мобильных приложений, тестирование, релиз и ведение",
// };

export default function RootLayout({
  children,
  metadata,
}: Readonly<{
  children: React.ReactNode;
  metadata?: Metadata;
}>) {
  const pageTitle =
    String(metadata?.title) ||
    "Разработка сайтов и мобильных приложений под ключ";
  const pageDescription =
    String(metadata?.description) ||
    "ABCode: разработка и запуск сайтов и мобильных приложений, тестирование, релиз и ведение";
  return (
    <html lang="en">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <body className={`${nunito.variable}`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        <YandexMetrika />
      </body>
    </html>
  );
}
