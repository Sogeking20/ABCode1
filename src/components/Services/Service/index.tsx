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
  serviceData: {
    title: string;
    description: string;
    advantages1?: string;
    advantages2?: string;
    img: string;
    slug: string;
  };
}

const Service: FC<Props> = ({ className, serviceData }) => {
  return (
    <div className={className}>
      <Container>
        <ServiceBanner
          title={serviceData.title}
          description={serviceData.description}
          img={serviceData.img}
        />
        <ServiceAdvantages />
        <ServiceDignity />
        <ServiceStages />
        <ServiceFaq />
      </Container>
    </div>
  );
};

export default Service;
