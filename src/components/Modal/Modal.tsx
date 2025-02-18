import { X } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Container } from "../ui/container";
import { CallForm } from "../Form/call-form";
import { Inter } from "next/font/google";

interface Props {
  onClose: () => void;
  isActive: boolean;
}

const Modal: FC<Props> = ({ onClose, isActive }) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] fixed z-10 bg-white top-0 duration-300 left-0 ${
        isActive ? "opacity-100" : "opacity-0 z-[-10]"
      }`}
    >
      <Container>
        <div className="flex w-full justify-between items-center mt-3">
          <Link href="/">
            <h1 className="text-2xl uppercase font-black">ABCode</h1>
          </Link>
          <X onClick={onClose} size={40} className="cursor-pointer" />
        </div>
      </Container>

      <div className="w-full flex flex-col-reverse gap-8 md:grid grid-cols-2 md:gap-5 justify-between">
        <div className="h-full flex flex-col justify-between gap-10">
          <div className="">
            <div className="text-[28px] font-bold">ABCode</div>
            <div className="text-[20px]">
              Компания по разработке цифровых продуктов
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5 mt-[12px]">
              <a
                href="https://t.me/baielsag"
                target="_blank"
                // className="bg-primary rounded-full p-[5px] text-center"
                js-goal="tg_click"
                className="bg-white p-[8px] rounded-full duration-300 hover:opacity-80"
              >
                <img
                  className="w-[25px]"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg width=%2220%22 height=%2218%22 viewBox=%220 0 20 18%22 xmlns=%22http://www.w3.org/2000/svg%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M4.904 7.796l10.818-4.542L14.46 8.8l-7.893 5.168-1.662-6.172z%22 fill=%22%23fff%22/%3E%3Cpath d=%22M.384 8.532l4.44 1.611 1.72 5.372c.11.344.542.471.83.243l2.475-1.961a.755.755 0 0 1 .9-.025l4.464 3.15c.308.217.743.054.82-.307l3.27-15.288c.085-.395-.314-.724-.7-.578L.379 7.58a.504.504 0 0 0 .005.951zm5.882.754l8.679-5.195c.156-.093.316.112.182.233l-7.162 6.47a1.43 1.43 0 0 0-.46.863l-.244 1.757c-.032.235-.371.258-.438.031l-.938-3.204a.838.838 0 0 1 .381-.955z%22 fill=%22%23206ef8%22/%3E%3C/svg%3E"
                  alt=""
                />
              </a>
              <a
                href="https://wa.me/79221152222"
                target="_blank"
                // className="bg-primary rounded-full p-[5px] text-center"
                js-goal="wa_click"
                className="bg-white p-[8px] rounded-full duration-300 hover:opacity-80"
              >
                <img
                  className="w-[25px]"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg width=%2219%22 height=%2218%22 viewBox=%220 0 19 18%22 xmlns=%22http://www.w3.org/2000/svg%22 preserveAspectRatio=%22none%22%3E%3Ccircle cx=%229.349%22 cy=%228.948%22 r=%227.966%22 fill=%22%23fff%22/%3E%3Cpath fill=%22%23fff%22 d=%22M2.195 12.759H6.08v3.069H2.195z%22/%3E%3Cpath d=%22M8.762.01C4.008.237.257 4.196.27 8.955a8.888 8.888 0 0 0 .972 4.027l-.948 4.6a.347.347 0 0 0 .42.408l4.508-1.068c1.159.577 2.46.91 3.836.931 4.86.075 8.91-3.783 9.062-8.64A8.928 8.928 0 0 0 8.761.01zm5.379 13.86a6.944 6.944 0 0 1-4.943 2.047 6.915 6.915 0 0 1-3.11-.729l-.629-.312-2.764.654.582-2.824-.31-.605a6.912 6.912 0 0 1-.759-3.174c0-1.867.727-3.622 2.047-4.942a7.003 7.003 0 0 1 4.943-2.048c1.867 0 3.623.727 4.943 2.047a6.944 6.944 0 0 1 2.047 4.943c0 1.85-.739 3.635-2.047 4.943z%22 fill=%22%23206ef8%22/%3E%3Cpath d=%22M13.531 10.863l-1.73-.496a.644.644 0 0 0-.637.168l-.423.43a.63.63 0 0 1-.685.145c-.818-.331-2.538-1.86-2.978-2.626a.63.63 0 0 1 .05-.698l.37-.478a.644.644 0 0 0 .079-.655l-.728-1.645a.645.645 0 0 0-1.007-.23c-.482.407-1.055 1.028-1.125 1.715-.122 1.211.397 2.739 2.362 4.573 2.27 2.118 4.088 2.398 5.271 2.111.672-.162 1.208-.814 1.547-1.348a.645.645 0 0 0-.366-.966z%22 fill=%22%23206ef8%22/%3E%3C/svg%3E"
                  alt=""
                />
              </a>
            </div>
            <a
              href="tel:+79221152222"
              className="mt-[12px] text-[24px] font-semibold duration-300 hover:opacity-80"
            >
              +7(922)115-22-422
            </a>
            <a
              href="mailto:ABCode@mail.ru"
              className="mt-[12px] text-[24px] font-semibold duration-300 hover:opacity-80"
            >
              ABCode@mail.ru
            </a>
          </div>
        </div>
        <div className="">
          <div className="text-[36px] mb-[30px]">
            Давайте обсудим ваш проект
          </div>
          <CallForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
