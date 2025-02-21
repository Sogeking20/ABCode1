import { FC } from "react";

interface Props {
  className?: string;
}

const ServiceAdvantages: FC<Props> = ({ className }) => {
  return (
    <div className="mb-[100px]">
      <h2 className="text-center text-[30px] sm:text-[40px] text-[#0020a7] mb-5">
        ПРЕИМУЩЕСТВА РАЗРАБОТКИ
      </h2>
      <section className="flex flex-col md:flex-row gap-[30px]">
        <div className="w-full md:w-[50%] border border-primary rounded-lg p-[30px]">
          <h3 className="mb-[30px] uppercase text-[16px]">
            Скорость и функционал
          </h3>
          <div className="text-[hsla(0, 0%, 100%, .8)]">
            <p>
              Yii2 разработан с учетом высокой производительности и имеет ряд
              виджетов, ускоряющих разработку. Он оптимизирован для мгновенного
              выполнения запросов и эффективной работы с базами данных. Это
              важно при создании масштабируемых и высоконагруженных
              веб-приложений. Можно быстро генерировать CRUD: разделы создания,
              чтения, редактирования, удаления.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] border border-primary rounded-lg p-[30px]">
          <h3 className="mb-[30px] uppercase text-[16px]">
            Безопасность и активная поддержка
          </h3>
          <div className="text-[hsla(0, 0%, 100%, .8)]">
            <p>
              В Yii2 есть такие функции безопасности, как защита от CSRF-атак
              (межсайтовая подделка запроса) и валидация пользовательского
              ввода. Благодаря этому разработчики делают максимально безопасные
              веб-продукты. Также Yii2 имеет большое сообщество программистов,
              которое активно поддерживает фреймворк, выпуская обновления и
              исправления.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAdvantages;
