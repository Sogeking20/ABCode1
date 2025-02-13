import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        autoComplete="off"
        type={type}
        className={cn(
          "flex h-9 w-full border-b border-neutral-200 bg-transparent px-3 py-1 text-base transition-colorplaceholder:text-[16px] placeholder:text-[#ffffffcc] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        style={{ outline: "none" }}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
