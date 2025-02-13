import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FC } from "react";
import ServiceBanner from "./service-banner";
import ServiceAdvantages from "./service-advantages";
import ServiceDignity from "./service-dignity";
import ServiceStages from "./service-stages";
import "./Service.css";
import ServiceFaq from "./service-faq";

interface Props {
  className?: string;
}

const Service: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <ServiceBanner />
        <ServiceAdvantages />
        <ServiceDignity />
        <ServiceStages />
        <ServiceFaq />
      </Container>
    </div>
  );
};

export default Service;
