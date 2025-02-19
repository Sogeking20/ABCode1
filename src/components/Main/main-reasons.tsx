import { FC } from "react";
import { Container } from "../ui/container";
import { Code, GraduationCap, LaptopMinimalCheck, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const MainReasons: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <Container>
        <h3 className="uppercase text-[40px] sm:text-[60px] lg:text-[70px] font-bold mb-5">
          Почему мы
        </h3>
        <div className="flex flex-wrap">
          <div className="m-[20px] max-w-[560px] flex">
            <LaptopMinimalCheck
              className="min-w-[32px] mr-[20px]"
              size={32}
              color="#0020a7"
            />
            <div className="max-w-[506px]">
              <div className="font-bold mb-[24px] text-[24px] text-[#0020a7]">
                Получите приложение, которое будет работать на любом устройстве
              </div>
              <div className="text-[16px] text-[#808080]">
                Мы работаем на разных фреймворках: например, JavaScript, React
                Native и AWS. С их помощью создадим продукт, который быстро
                работает — и решает бизнес-задачи.
              </div>
            </div>
          </div>
          <div className="m-[20px] max-w-[560px] flex">
            <Code
              className="min-w-[32px] mr-[20px]"
              size={32}
              color="#0020a7"
            />
            <div className="max-w-[506px]">
              <div className="font-bold mb-[24px] text-[24px] text-[#0020a7]">
                Сможете работать с кодом, который легко изменить под свои нужды
              </div>
              <div className="text-[16px] text-[#808080]">
                Создадим код, который легко интегрировать в свою команду
                разработчиков. Им не нужно разбираться в «спагетти-коде» — можно
                сразу начать работу.
              </div>
            </div>
          </div>
          <div className="m-[20px] max-w-[560px] flex">
            <Rocket
              className="min-w-[32px] mr-[20px]"
              size={32}
              color="#0020a7"
            />
            <div className="max-w-[506px]">
              <div className="font-bold mb-[24px] text-[24px] text-[#0020a7]">
                Запустите приложение вовремя
              </div>
              <div className="text-[16px] text-[#808080]">
                В конце каждой недели проводим созвоны с менеджером проекта —
                наглядно показываем, на какой стадии продукт. Не нужно
                волноваться, что приложение выйдет позже, чем нужно — и
                инвестору нечего будет показать.
              </div>
            </div>
          </div>
          <div className="m-[20px] max-w-[560px] flex">
            <GraduationCap
              className="min-w-[32px] mr-[20px]"
              size={32}
              color="#0020a7"
            />
            <div className="max-w-[506px]">
              <div className="font-bold mb-[24px] text-[24px] text-[#0020a7]">
                Будете сотрудничать с командой, у которой есть нужный опыт
              </div>
              <div className="text-[16px] text-[#808080]">
                Узнаем идею продукта и запустим его с разработчиками, которые
                понимают вашу бизнес-нишу. Если надо — соберем команду с нуля.
                Но если у вас уже есть специалисты, можем подключить к проекту
                несколько своих.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainReasons;
