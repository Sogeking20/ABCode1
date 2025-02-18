import { Button } from "@/components/ui/button";
import { FC } from "react";
import image from "../../../../public/шест (1).png";

interface Props {
  className?: string;
  title: string;
  description: string;
  img: string;
}

const ServiceBanner: FC<Props> = ({ className, title, description, img }) => {
  return (
    <div className="w-full my-[100px]">
      <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[70px] items-center">
        <div className="flex flex-col gap-[40px] items-center sm:w-[50%]">
          <div className="w-full flex gap-[40px]">
            <img className="w-[70px] h-[70px]" src={img} alt="" />
            <h1 className="uppercase text-[36px]">{title}</h1>
          </div>
          <p className="text-[18px]">{description}</p>
          <a className="w-full" href="https://t.me/baielsag">
            <Button variant={"outline"} className="w-full uppercase">
              Заказать услугу
            </Button>
          </a>
        </div>
        <div className="w-full sm:w-[50%] flex justify-center sm:justify-end">
          <img
            className="animation max-w-[400px] w-[100%]"
            src={image.src}
            alt=""
          />
        </div>
      </div>
      <section className="flex flex-col sm:flex-row sm:mt-[70px] gap-[40px] sm:justify-around">
        <div className="w-[100%] flex flex-col gap-2 sm:items-center">
          <span className="text-[56px] font-bold text-[#0020a7]">&gt; 120</span>
          <span className="uppercase">реализованных проектов</span>
        </div>
        <div className="w-[100%] flex flex-col gap-2 sm:items-center">
          <span className="text-[56px] font-bold text-[#0020a7]">9</span>
          <span className="uppercase">лет разработки</span>
        </div>
        <div className="w-[100%] flex flex-col gap-2 sm:items-center">
          <span className="text-[56px] font-bold text-[#0020a7]">17</span>
          <span className="uppercase">специалистов в команде</span>
        </div>
      </section>
    </div>
  );
};

export default ServiceBanner;
