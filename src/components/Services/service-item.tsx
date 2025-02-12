import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface Props {
  className?: string;
  data: {
    title: string;
    description: string;
    slug: string;
    img: string;
  };
}

const ServiceItem: FC<Props> = ({ className, data }) => {
  return (
    <div
      className={cn(
        className,
        "w-full cursor-pointer p-[20px] duration-300 hover:bg-[hsla(0, 0%, 54.1%, .18)]"
      )}
    >
      <Link href={`/services/${data.slug}`} className="">
        <div className="flex w-full gap-[20px] mb-[20px] items-center">
          <img
            className="saturate w-[42px] h-[42px] object-contain aspect-[unset]"
            src={data.img}
            alt=""
          />
          <h3 className="uppercase text-[16px] text-black">{data.title}</h3>
        </div>
        <p>{data.description}</p>
      </Link>
    </div>
  );
};

export default ServiceItem;
