import React from "react";
import { cn } from "../lib/utils";

type ButtonProps = React.ComponentPropsWithRef<"button">;

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "border px-3 rounded-[10px] h-[36px] text-sm font-medium cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
