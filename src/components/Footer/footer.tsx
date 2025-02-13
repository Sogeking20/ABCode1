import { FC } from "react";
import { Container } from "../ui/container";
import { CallForm } from "../Form/call-form";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer id="footer" className={className}>
      <div className="w-[100vw] py-[100px] bg-[url('https://creonit.ru/images/blue-bg.webp')] bg-no-repeat bg-cover text-white">
        <Container>
          <div className="w-full flex flex-col-reverse gap-10 md:flex-row md:gap-5 justify-between">
            <div className="h-full flex flex-col justify-between">
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
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
