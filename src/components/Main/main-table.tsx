import { FC } from "react";
import { Container } from "../ui/container";
import { Table } from "antd";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const MainTable: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <Container>
        <h3 className="uppercase text-[50px] sm:text-[60px] lg:text-[70px] font-bold mb-5">
          Способы оплаты
        </h3>
        <Table
          className="table w-full"
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </Container>
    </div>
  );
};

export default MainTable;
