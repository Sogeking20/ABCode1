import { FC } from "react";
import MainBanner from "./main-banner";
import MainGet from "./main-get";
import MainIncluded from "./main-included";
import "./Main.css";
import MainReasons from "./main-reasons";
import MainStages from "./main-stages";
import MainTable from "./main-table";

interface Props {
  className?: string;
}

const Main: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MainBanner />
      <MainGet />
      <MainIncluded />
      <MainReasons />
      <MainStages />
      {/* <MainTable /> */}
    </div>
  );
};

export default Main;
