import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Container: FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px] px-5 md:px-10", className)}>
      {children}
    </div>
  );
};
