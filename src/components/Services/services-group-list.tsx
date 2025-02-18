import { FC } from "react";
import { Container } from "../ui/container";
import ServicesGroupListItem from "./services-group-list-item";
import Services from "@/data/services";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const ServicesGroupList: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <Container>
        {Services.map((service) => (
          <ServicesGroupListItem key={service.title} data={service} />
        ))}
      </Container>
    </div>
  );
};

export default ServicesGroupList;
