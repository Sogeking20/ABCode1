import { FC } from "react";
import { Container } from "../ui/container";
import ServicesGroupListItem from "./services-group-list-item";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const services = [
  {
    title: "Backend разработка",
    slug: "backend",
    items: [
      {
        title: "Backend разработка на YII2",
        description:
          "Yii2 – это мощный фреймворк для создания и модификации веб-приложений на PHP. Он упрощает и ускоряет процесс разработки, обеспечивает безопасность и имеет широкий набор инструментов для создания веб-приложений.",
        slug: "backend-yii2",
        img: "https://api.mediaten.ru/storage/company-service/8/kqG4vAjxWiMQDiaY5LkZyPoLVCqVouUoWp4gv1e1.svg",
      },
      {
        title: "Backend разработка на LARAVEL",
        description:
          "Laravel – современный веб-фреймворк на языке PHP, который входит в тройку самых популярных по мнению разработчиков. Он имеет богатый функционал и архитектуру MVC (модель-представление-контроллер), которая отделяет визуализацию от бизнес-логики и данных.",
        slug: "backend-laravel",
        img: "	https://api.mediaten.ru/storage/company-service/5/Kq2h9c7SgXO2TQEdlErm8iPjRoyrsU51D8PHg4XP.png",
      },
    ],
  },
  {
    title: "Frontend разработка",
    slug: "frontend",
    items: [
      {
        title: "Frontend разработка на YII2",
        description:
          "Yii2 – это мощный фреймворк для создания и модификации веб-приложений на PHP. Он упрощает и ускоряет процесс разработки, обеспечивает безопасность и имеет широкий набор инструментов для создания веб-приложений.",
        slug: "backend-yii2",
        img: "https://api.mediaten.ru/storage/company-service/8/kqG4vAjxWiMQDiaY5LkZyPoLVCqVouUoWp4gv1e1.svg",
      },
      {
        title: "Frontend разработка на LARAVEL",
        description:
          "Laravel – современный веб-фреймворк на языке PHP, который входит в тройку самых популярных по мнению разработчиков. Он имеет богатый функционал и архитектуру MVC (модель-представление-контроллер), которая отделяет визуализацию от бизнес-логики и данных.",
        slug: "backend-laravel",
        img: "	https://api.mediaten.ru/storage/company-service/5/Kq2h9c7SgXO2TQEdlErm8iPjRoyrsU51D8PHg4XP.png",
      },
    ],
  },
];

const ServicesGroupList: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <Container>
        {services.map((service) => (
          <ServicesGroupListItem key={service.title} data={service} />
        ))}
      </Container>
    </div>
  );
};

export default ServicesGroupList;
