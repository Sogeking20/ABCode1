import { FC } from "react";
import ServicesBanner from "./services-banner";
import ServicesGroupList from "./services-group-list";

interface Props {
  className?: string;
}

const Services: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ServicesBanner />
      <ServicesGroupList />
    </div>
  );
};

export default Services;
