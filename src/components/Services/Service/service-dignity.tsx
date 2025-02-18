import { FC } from "react";

interface Props {
  className?: string;
}

const ServiceDignity: FC<Props> = ({ className }) => {
  return (
    <div className="mb-[100px]">
      <h2 className="text-center text-[30px] sm:text-[40px] text-[#0020a7] mb-5">
        АУТСОРСИНГ РАЗРАБОТЧИКОВ В MEDIATEN
      </h2>
      <section className="grid lg:grid-cols-3 gap-[30px] text-white ">
        <div className="border-1px p-[30px] bg-[url('https://creonit.ru/images/blue-bg.webp')] bg-no-repeat bg-cover rounded-3xl">
          <div className="flex gap-[30px] items-center mb-3">
            <div className="w-[40px] h-[40px]">
              <img
                src="https://api.mediaten.ru/storage/reason-to-choose/16/lXVNsdFy8WNn6KCJLCybpmO3rVcMJ2KPdh2JHlgq.svg"
                alt="why-we-are-item-0"
              />
            </div>
            <h3 className="text-[16px]">Большой опыт</h3>
          </div>
          <div className="why-we-are-item__information">
            <div className="text-[hsla(0, 0%, 100%, .8)]">
              <p>
                Специалисты MediaTen, работающие с YII2, имеют достаточно опыта,
                чтобы создавать веб-приложения согласно установленным
                требованиям и срокам. За каждым отдельным проектом закреплен
                опытный руководитель, уровень которого не ниже Middle+. Мы
                контролируем ход разработки и оперативно реагируем на
                любые&nbsp; проблемные ситуации.
              </p>
            </div>
          </div>
        </div>
        <div className="border-1px p-[30px] bg-[url('https://creonit.ru/images/blue-bg.webp')] bg-no-repeat bg-cover rounded-3xl">
          <div className="flex gap-[30px] items-center mb-3">
            <div className="w-[40px] h-[40px]">
              <img
                src="https://api.mediaten.ru/storage/reason-to-choose/16/lXVNsdFy8WNn6KCJLCybpmO3rVcMJ2KPdh2JHlgq.svg"
                alt="why-we-are-item-0"
              />
            </div>
            <h3 className="text-[16px]">Большой опыт</h3>
          </div>
          <div className="why-we-are-item__information">
            <div className="text-[hsla(0, 0%, 100%, .8)]">
              <p>
                Специалисты MediaTen, работающие с YII2, имеют достаточно опыта,
                чтобы создавать веб-приложения согласно установленным
                требованиям и срокам. За каждым отдельным проектом закреплен
                опытный руководитель, уровень которого не ниже Middle+. Мы
                контролируем ход разработки и оперативно реагируем на
                любые&nbsp; проблемные ситуации.
              </p>
            </div>
          </div>
        </div>
        <div className="border-1px p-[30px] bg-[url('https://creonit.ru/images/blue-bg.webp')] bg-no-repeat bg-cover rounded-3xl">
          <div className="flex gap-[30px] items-center mb-3">
            <div className="w-[40px] h-[40px]">
              <img
                src="https://api.mediaten.ru/storage/reason-to-choose/16/lXVNsdFy8WNn6KCJLCybpmO3rVcMJ2KPdh2JHlgq.svg"
                alt="why-we-are-item-0"
              />
            </div>
            <h3 className="text-[16px]">Большой опыт</h3>
          </div>
          <div className="why-we-are-item__information">
            <div className="text-[hsla(0, 0%, 100%, .8)]">
              <p>
                Специалисты MediaTen, работающие с YII2, имеют достаточно опыта,
                чтобы создавать веб-приложения согласно установленным
                требованиям и срокам. За каждым отдельным проектом закреплен
                опытный руководитель, уровень которого не ниже Middle+. Мы
                контролируем ход разработки и оперативно реагируем на
                любые&nbsp; проблемные ситуации.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDignity;
