import { FC } from "react";

interface Props {
  item: {
    title: string;
    tech: string;
    priceOnMiddle: number;
    priceOnSenior: number;
    priceOnTechLead: number;
    minOrder: string;
  };
}

const PriceListItem: FC<Props> = ({ item }) => {
  return (
    <div className="mb-[50px]">
      <h3 className="text-[32px] text-[#0020a7] font-semibold mb-3">
        {item.title}
      </h3>
      <div className="no-scrool overflow-y-auto">
        <p className="text-[28px] font-semibold mb-3">{item.tech}</p>
        <div className="grid grid-cols-4 h-[300px] min-w-[1280px] pt-2 border-t-[2px] border-[#0020a7] ">
          <p className="text-[20px] font-semibold">Middle</p>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Стоимость в час
            </p>
            <p>От {item.priceOnMiddle} ₽</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Стоимость в месяц
            </p>
            <p>От {item.priceOnMiddle * 160} ₽</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Минимальный заказ
            </p>
            <p>{item.minOrder}</p>
          </div>
          <p className="text-[20px] font-semibold">Senior</p>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Стоимость в час
            </p>
            <p>От {item.priceOnSenior} ₽</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Стоимость в месяц
            </p>
            <p>От {item.priceOnSenior * 160} ₽</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Минимальный заказ
            </p>
            <p>{item.minOrder}</p>
          </div>
          <p className="text-[20px] font-semibold">Tech Lead</p>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Стоимость в час
            </p>
            <p>От {item.priceOnTechLead} ₽</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Стоимость в месяц
            </p>
            <p>От {item.priceOnTechLead * 160} ₽</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold text-[#0020a7]">
              Минимальный заказ
            </p>
            <p>{item.minOrder}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceListItem;
