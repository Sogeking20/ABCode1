import { FC } from "react";
import PriceListItem from "./price-list-item";

interface Props {
  className?: string;
  category: string;
  items: {
    title: string;
    tech: string;
    priceOnMiddle: number;
    priceOnSenior: number;
    priceOnTechLead: number;
    minOrder: string;
  }[];
}

const PriceListGroup: FC<Props> = ({ className, category, items }) => {
  return (
    <div className="mb-[100px]">
      <h3 className="text-[50px] text-[#0020a7] font-bold mb-5">{category}</h3>
      <div className="">
        {items.map((item) => (
          // <div className=""></div>
          <PriceListItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PriceListGroup;
