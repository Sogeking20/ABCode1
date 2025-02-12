import { cn } from "@/lib/utils";
import { FC } from "react";
import ServiceItem from "./service-item";

interface Props {
  className?: string;
  data: {
    title: string;
    slug: string;
    items: {
      title: string;
      description: string;
      slug: string;
      img: string;
    }[];
  };
}

const ServicesGroupListItem: FC<Props> = ({ className, data }) => {
  return (
    <div
      id={`${data.slug}`}
      className={cn(
        className,
        "md:grid grid-cols-2 group gap-[32px] scroll-smooth mb-[100px]"
      )}
    >
      <div className="w-full border-2px border-r border-[hsla(0, 0%, 54.1%, .40)] duration-300 h-full group-hover:border-primary">
        <h3 className="uppercase text-[24px]">{data.title}</h3>
      </div>
      <div className="">
        {data.items.map((service) => (
          <ServiceItem key={service.title} data={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGroupListItem;
