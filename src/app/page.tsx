import Main from "@/components/Main";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export const metadata: Metadata = {
  title: "Разработка сайтов и мобильных приложений под ключ",
  description:
    "ABCode: разработка и запуск сайтов и мобильных приложений, тестирование, релиз и ведение",
};
