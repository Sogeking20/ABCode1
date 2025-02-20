import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { Toaster } from "react-hot-toast";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
import Script from "next/script";
import { Suspense } from "react";

const nunito = Ubuntu({
  weight: "400",
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Разработка сайтов и мобильных приложений под ключ",
  description:
    "ABCode: разработка и запуск сайтов и мобильных приложений, тестирование, релиз и ведение",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
      <YandexMetrika />
    </html>
  );
}
