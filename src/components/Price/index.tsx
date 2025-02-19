import { FC } from "react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import price from "@/data/price";
import PriceListGroup from "./price-list-group";

interface Props {
  className?: string;
}

const Price: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <div className="flex flex-col items-center text-center mb-[100px]">
          <h1 className="text-[50px] uppercase font-bold mt-[50px]">Прайс</h1>
          <p className="text-[20px] text-[#808080] mb-[20px]">
            В данном разделе представлена стоимость услуг компании ABCode. Чтобы
            оценить все достоинства и бесплатно протестировать наши возможности,
            напишите нам. Мы ответим на интересующие вопросы и составим план по
            решению ваших задач.
          </p>
          <a href="https://t.me/baielsag">
            <Button className="" variant={"outline"} size={"lg"}>
              Получить консультацию
            </Button>
          </a>
        </div>
        <div className="">
          {price.map(({ category, items }, id) => (
            <PriceListGroup key={id} category={category} items={items} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Price;
