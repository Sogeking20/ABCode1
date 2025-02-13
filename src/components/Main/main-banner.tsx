import { Button } from "@/components/ui/button";
import { Container } from "../ui/container";
import image from "../../../public/image.png";

const MainBanner = () => {
  return (
    <div className="relative w-[100%] h-[80vh] overflow-hidden mb-[100px] bg-[url('https://creonit.ru/images/blue-bg.webp')] bg-no-repeat bg-cover">
      <Container className="relative top-[20%] z-[2]">
        <div className="relative max-w-[740px] flex flex-col gap-12">
          <div className="max-w-[440px] sm:max-w-[560px] lg:max-w-[700px] rounded-xl bg-white uppercase text-[26px] sm:text-[36px] lg:text-[46px] font-bold px-5 py-2 leading-tight text-[#0020a7]">
            Разработка и оптимизация проектов
          </div>
          <div className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold leading-tight text-white">
            Веб и мобильная разработка. Бэкенд и интеграции любой сложности.
            Проектирование архитектуры и управление процессами.
          </div>
          <a href="https://t.me/baielsag">
            <Button
              variant={"outline"}
              size={"lg"}
              className="border-white text-white h-12 max-w-[500px] w-[100%]"
            >
              Заказать
            </Button>
          </a>
        </div>
      </Container>
      <img
        className="opacity-[0.5] absolute animation min-w-[1000px] z-[1] right-[-300px]"
        src={image.src}
        alt="yeah"
      />
      <img
        className="opacity-[0.5] absolute animation-reverse min-w-[1000px] z-[1] right-[-250px] top-[-300px]"
        src={image.src}
        alt="yeah"
      />
    </div>
  );
};

export default MainBanner;
