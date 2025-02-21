import Price from "@/components/Price";
import { Metadata } from "next";
import Head from "next/head";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>САЙТЫ</title>
        <meta name="description" content="A brief description of your page" />
      </Head>
      <Price />
    </>
  );
}

export const metadata: Metadata = {
  title: "Стоимость услуг компании ABCode",
  description:
    "Аутсорсинг и аутстаффинг разработчиков, сайты под ключ. Оплата по Time & Material от 1800р./час (Middle, Middle+, Senior). Актуальный прайс.",
};
