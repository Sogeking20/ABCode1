import { Button } from "@/components/ui/button";
import { FC } from "react";

interface Props {
  className?: string;
}

const ServiceBanner: FC<Props> = ({ className }) => {
  return (
    <div className="w-full my-[100px]">
      <div className="inline-flex gap-[70px] items-center w-[50%]">
        <div className="flex flex-col gap-[40px] items-center ">
          <div className="w-full flex gap-[40px]">
            <img
              className="w-[70px] h-[70px]"
              src="https://api.mediaten.ru/storage/company-service/8/kqG4vAjxWiMQDiaY5LkZyPoLVCqVouUoWp4gv1e1.svg"
              alt=""
            />
            <h1 className="uppercase text-[36px]">
              Backend разработка на Yii2
            </h1>
          </div>
          <p className="text-[18px]">
            Yii2 – это мощный фреймворк для создания и модификации
            веб-приложений на PHP. Он упрощает и ускоряет процесс разработки,
            обеспечивает безопасность и имеет широкий набор инструментов для
            создания веб-приложений.
          </p>
          <Button variant={"outline"} className="w-full uppercase">
            Заказать услугу
          </Button>
        </div>
        {/* <div className="w-[50%]"></div> */}
      </div>
      <section className="flex mt-[70px] gap-[40px] justify-around">
        <div className="w-[100%] flex flex-col gap-2 items-center">
          <span className="text-[56px] font-bold">&gt; 120</span>
          <span className="uppercase">реализованных проектов</span>
        </div>
        <div className="w-[100%] flex flex-col gap-2 items-center">
          <span className="text-[56px] font-bold">9</span>
          <span className="uppercase">лет разработки</span>
        </div>
        <div className="w-[100%] flex flex-col gap-2 items-center">
          <span className="text-[56px] font-bold">17</span>
          <span className="uppercase">специалистов в команде</span>
        </div>
      </section>
    </div>
  );
};

export default ServiceBanner;
