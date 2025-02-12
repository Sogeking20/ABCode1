import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FC } from "react";
import ServiceBanner from "./service-banner";
import ServiceAdvantages from "./service-advantages";

interface Props {
  className?: string;
}

const Service: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <ServiceBanner />
        <ServiceAdvantages />
      </Container>
    </div>
  );
};

export default Service;
