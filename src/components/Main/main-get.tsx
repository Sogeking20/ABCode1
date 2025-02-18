import { FC } from "react";
import { Container } from "../ui/container";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const MainGet: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <Container>
        <h3 className="uppercase text-[50px] sm:text-[60px] lg:text-[70px] font-bold mb-5">
          Что вы получите
        </h3>
        <div className="get-grid">
          <div className="w-[343px] sm:w-[270px] mx-5 sm:my-5 border border-primary py-[44px] px-[28px] flex flex-col sm:items-center gap-5">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="120" fill="#0020a7"></rect>
              <path
                d="M36.5352 29L45.5352 90.5L59.0352 76L68.0352 89L78.0352 83L69.5352 70L88.0352 63L36.5352 29Z"
                fill="white"
              ></path>
              <path
                opacity="0.5"
                d="M31.9629 33.9062L40.9629 95.4062L54.4629 80.9062L63.4629 93.9062L73.4629 87.9062L64.9629 74.9062L83.4629 67.9062L31.9629 33.9062Z"
                fill="white"
              ></path>
            </svg>
            <div className="font-bold text-[24px]">
              IT-продукт, созданный с современными технологиями
            </div>
            <div className="text-[16px] text-gray-500 ">
              Наша команда создает продукты с помощью передовых фреймворков:
              JavaScript, React Native, AWS, Jenkins. С ними ваше приложение
              будет работать без сбоев.
            </div>
          </div>
          <div className="w-[343px] sm:w-[270px] mx-5 sm:my-5 border border-primary py-[44px] px-[28px] flex flex-col sm:items-center gap-5">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="120" fill="#0020a7"></rect>
              <path
                d="M86.836 52.9927C86.836 51.4068 87.0421 49.8687 87.4282 48.4042C88.2499 45.2871 88.596 41.827 86.6432 39.2622C86.5501 39.1399 86.4562 39.0183 86.3615 38.8974C84.1898 36.1244 80.3529 35.7665 76.8385 36.0003C76.4505 36.0262 76.0589 36.0393 75.6641 36.0393C70.4315 36.0393 65.7317 33.7244 62.5134 30.0488C60.5577 27.8154 57.874 25.9378 54.9401 26.3909C51.8744 26.8644 49.9864 29.6303 48.8619 32.5214C46.2935 39.1244 39.9416 43.7962 32.516 43.7962C31.3415 43.7962 30.2028 44.3602 29.7024 45.4227C29.1972 46.4955 28.7462 47.5992 28.3528 48.7307C27.285 51.8016 28.8757 54.9768 30.8944 57.5254C33.3059 60.5701 34.7474 64.4376 34.7474 68.6482C34.7474 70.3749 34.5044 72.0426 34.0509 73.6193C33.1512 76.7471 32.8962 80.2979 35.0556 82.7331C37.1304 85.073 40.5114 85.3104 43.6173 84.9452C44.288 84.8663 44.9701 84.8259 45.6615 84.8259C50.3039 84.8259 54.5253 86.649 57.666 89.6294C60.1315 91.9691 63.194 94.0438 66.5279 93.3822C66.8172 93.3248 67.1051 93.2636 67.3916 93.1986C70.4395 92.508 72.3769 89.7623 73.7717 86.9657C75.8685 82.7617 79.5624 79.5171 84.0436 78.0492C87.029 77.0713 90.0578 75.5739 91.2167 72.6541C91.3611 72.2903 91.4994 71.9234 91.6315 71.5535C92.7177 68.5117 91.3341 65.3114 89.6053 62.583C87.8529 59.8175 86.836 56.5271 86.836 52.9927ZM60 75.3013C51.6561 75.3013 44.8956 68.4543 44.8956 60.0037C44.8956 51.5531 51.6561 44.6987 60 44.6987C68.3439 44.6987 75.1118 51.5531 75.1118 60.0037C75.1118 68.4543 68.3439 75.3013 60 75.3013Z"
                fill="white"
              ></path>
            </svg>
            <div className="font-bold text-[24px]">
              Чистый код, с которым легко работать
            </div>
            <div className="text-[16px] text-gray-500 ">
              Как только закончим процесс разработки, сможете передать проект
              другой команде. Ей не придется тратить время для того, чтобы
              разбираться с кодом и переписывать его части.
            </div>
          </div>
          <div className="w-[343px] sm:w-[270px] mx-5 sm:my-5 border border-primary py-[44px] px-[28px] flex flex-col sm:items-center gap-5">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="120" fill="#0020a7"></rect>
              <circle cx="63.5" cy="56.5" r="21.5" fill="#0020a7"></circle>
              <rect x="25" y="49" width="70" height="46" fill="white"></rect>
              <rect
                x="28"
                y="41"
                width="64"
                height="34"
                stroke="white"
                strokeWidth="6"
              ></rect>
              <rect
                x="47"
                y="28"
                width="26"
                height="13"
                stroke="white"
                strokeWidth="6"
              ></rect>
              <rect x="56" y="58" width="8" height="12" fill="#0020a7"></rect>
            </svg>
            <div className="font-bold text-[24px]">
              Проект, который выйдет строго в срок
            </div>
            <div className="text-[16px] text-gray-500 ">
              Подключим менеджера проекта — он будет держать вас в курсе
              событий. Вы будете получать обновления по приложению каждую
              неделю. Можете быть уверены — вы успеете показать инвесторам
              готовый продукт и привлечь инвестиции.
            </div>
          </div>
          <div className="w-[343px] sm:w-[270px] mx-5 sm:my-5 border border-primary py-[44px] px-[28px] flex flex-col sm:items-center gap-5">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="120" fill="#0020a7"></rect>
              <path
                d="M60 60.001C68.8365 60.001 76 52.8375 76 44.001C76 35.1644 68.8365 28.001 60 28.001C51.1634 28.001 44 35.1644 44 44.001C44 52.8375 51.1634 60.001 60 60.001Z"
                fill="white"
              ></path>
              <path
                d="M60 61.001C43.4314 61.001 30 74.4324 30 91.001L90 91.001C90 74.4324 76.5685 61.001 60 61.001Z"
                fill="white"
              ></path>
            </svg>
            <div className="font-bold text-[24px]">Команду с опытом</div>
            <div className="text-[16px] text-gray-500 ">
              Все наши разработчики с большим стажем работы. У нас есть
              экспертиза и разработчики — сформируем команду, исходя из ваших
              требований. А если у вас уже есть разработчики в штате, но они
              заняты другими проектами, мы подключим своих.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainGet;
