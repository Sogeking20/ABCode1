import { FC } from "react";
import { Container } from "@/components/ui/container";
import {
  BookUser,
  Handshake,
  NotebookPen,
  PhoneCall,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const ServiceStages: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <Container>
        <h3 className="text-center text-[30px] sm:text-[40px] text-[#0020a7] mb-5">
          Как мы работаем
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex mb-[40px]">
            <NotebookPen
              color="#0020a7"
              size={60}
              className="min-w-[32px] mr-[20px]"
            />
            <div className="">
              <div className="text-[24px] text-[#0020a7] font-bold mb-[15px]">
                1. Изучение проекта
              </div>
              <div className="text-[16px] text-[#808080]">
                Вы описываете особенности и задачи вашего проекта, а мы
                подбираем специалиста с соответствующим уровнем компетенции.
              </div>
            </div>
          </div>
          <div className="flex mb-[40px]">
            <BookUser
              color="#0020a7"
              size={60}
              className="min-w-[32px] mr-[20px]"
            />
            <div className="">
              <div className="text-[24px] text-[#0020a7] font-bold mb-[15px]">
                2. Подбор специалиста внутри нашей команды
              </div>
              <div className="text-[16px] text-[#808080]">
                После поиска квалифицированного специалиста внутри нашей команды
                предоставляем вам его резюме.
              </div>
            </div>
          </div>
          <div className="flex mb-[40px]">
            <PhoneCall
              color="#0020a7"
              size={60}
              className="min-w-[32px] mr-[20px]"
            />
            <div className="">
              <div className="text-[24px] text-[#0020a7] font-bold mb-[15px]">
                3. Онлайн собеседование и тестовое задание
              </div>
              <div className="text-[16px] text-[#808080]">
                Если вы хотите убедиться в том, что мы выбрали подходящего
                кандидата, то можете запросить собеседование и выполнение теста.
              </div>
            </div>
          </div>
          <div className="flex mb-[40px]">
            <Handshake
              color="#0020a7"
              size={60}
              className="min-w-[32px] mr-[20px]"
            />
            <div className="">
              <div className="text-[24px] text-[#0020a7] font-bold mb-[15px]">
                4. Соглашение
              </div>
              <div className="text-[16px] text-[#808080]">
                Когда вы одобрите кандидата, мы заключим договор на оказание
                наших услуг в рамках оговоренного проекта.
              </div>
            </div>
          </div>
          <div className="flex mb-[40px]">
            <Rocket
              color="#0020a7"
              size={60}
              className="min-w-[32px] mr-[20px]"
            />
            <div className="">
              <div className="text-[24px] text-[#0020a7] font-bold mb-[15px]">
                5. Начало проекта
              </div>
              <div className="text-[16px] text-[#808080]">
                Определяем сроки начала работ и передаем задачи специалисту,
                который будет работать над вашим веб-продуктом.
              </div>
            </div>
          </div>
          <div className="flex mb-[40px]">
            <ShieldCheck
              color="#0020a7"
              size={60}
              className="min-w-[32px] mr-[20px]"
            />
            <div className="">
              <div className="text-[24px] text-[#0020a7] font-bold mb-[15px]">
                6. Завершение проекта
              </div>
              <div className="text-[16px] text-[#808080]">
                Подписываем закрывающие документы, передаем все необходимые
                материалы и доступы, гордимся проделанной работой.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceStages;
