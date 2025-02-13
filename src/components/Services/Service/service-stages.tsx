import { FC } from "react";
import { Container } from "../../ui/container";
import { NotebookPen } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const ServiceStages: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <h3 className="uppercase text-[30px] sm:text-[40px] text-[#0020a7] mb-5 text-center">
        Как мы работаем
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex mb-[40px]">
          <NotebookPen color="#0020a7" size={60} className="mr-[20px]" />
          <div className="">
            <div className="text-[30px] text-[#0020a7] font-bold mb-[15px]">
              Изучение проекта
            </div>
            <div className="text-[18px] text-[#808080]">
              Вы описываете особенности и задачи вашего проекта, а мы подбираем
              специалиста с соответствующим уровнем компетенции.
            </div>
          </div>
        </div>
        <div className="flex mb-[40px]">
          <NotebookPen color="#0020a7" size={60} className="mr-[20px]" />
          <div className="">
            <div className="text-[30px] text-[#0020a7] font-bold mb-[15px]">
              Подбор специалиста внутри нашей команды
            </div>
            <div className="text-[18px] text-[#808080]">
              После поиска квалифицированного специалиста внутри нашей команды
              предоставляем вам его резюме.
            </div>
          </div>
        </div>
        <div className="flex mb-[40px]">
          <NotebookPen color="#0020a7" size={60} className="mr-[20px]" />
          <div className="">
            <div className="text-[30px] text-[#0020a7] font-bold mb-[15px]">
              Онлайн собеседование и тестовое задание
            </div>
            <div className="text-[18px] text-[#808080]">
              Если вы хотите убедиться в том, что мы выбрали подходящего
              кандидата, то можете запросить собеседование и выполнение теста.
            </div>
          </div>
        </div>
        <div className="flex mb-[40px]">
          <NotebookPen color="#0020a7" size={60} className="mr-[20px]" />
          <div className="">
            <div className="text-[30px] text-[#0020a7] font-bold mb-[15px]">
              Соглашение
            </div>
            <div className="text-[18px] text-[#808080]">
              Когда вы одобрите кандидата, мы заключим договор на оказание наших
              услуг в рамках оговоренного проекта.
            </div>
          </div>
        </div>
        <div className="flex mb-[40px]">
          <NotebookPen color="#0020a7" size={60} className="mr-[20px]" />
          <div className="">
            <div className="text-[30px] text-[#0020a7] font-bold mb-[15px]">
              Начало проекта
            </div>
            <div className="text-[18px] text-[#808080]">
              Определяем сроки начала работ и передаем задачи специалисту,
              который будет работать над вашим веб-продуктом.
            </div>
          </div>
        </div>
        <div className="flex mb-[40px]">
          <NotebookPen color="#0020a7" size={60} className="mr-[20px]" />
          <div className="">
            <div className="text-[30px] text-[#0020a7] font-bold mb-[15px]">
              Завершение проекта
            </div>
            <div className="text-[18px] text-[#808080]">
              Подписываем закрывающие документы, передаем все необходимые
              материалы и доступы, гордимся проделанной работой.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStages;
