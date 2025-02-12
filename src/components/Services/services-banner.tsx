import { FC } from "react";
import { Container } from "../ui/container";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

const ServicesBanner: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "my-[100px]")}>
      <Container>
        <h1 className="text-[70px] mb-5">Услуги</h1>
        <div className="inline-flex max-w-[950px] w-full gap-[10px] flex-wrap tracking-[0.2em]">
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#backend"
          >
            Backend разработка
          </Link>
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#frontend"
          >
            Frontend разработка
          </Link>
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#backend"
          >
            FullStack разработка
          </Link>
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#backend"
          >
            Mobile разработка
          </Link>
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#backend"
          >
            Тестирование
          </Link>
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#backend"
          >
            UI/UX дизайн
          </Link>
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#backend"
          >
            Backend разработка
          </Link>
          <Link
            className="border rounded-sm uppercase py-[8px] px-[12px] border-[hsla(0, 0%, 54.1%, .18)]"
            href="/services#backend"
          >
            Backend разработка
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ServicesBanner;
