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
      className={`w-[100vw] h-[100vh] fixed z-10 bg-white top-0 left-0 ${
        isActive ? "opacity-100" : "opacity-0 hidden"
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

      <div className="w-full h-full flex items-center justify-center px-10">
        <div className="max-w-[1280px] w-[100%] py-[100px] px-[30px] bg-[url('https://creonit.ru/images/blue-bg.webp')] bg-no-repeat bg-cover text-white rounded-3xl">
          <div className="w-full flex-col lg:flex-row flex gap-5 justify-between">
            <div className="flex flex-col justify-between">
              <div className="">
                <div className="text-[20px]">//ABCode</div>
                <div className="text-[16px]">
                  Компания по разработке программного обеспечения
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-[36px]">Давайте обсудим ваш проект</div>
              <CallForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
