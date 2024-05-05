import { cn } from "@/lib/utils";
import React, { FC } from "react";

type TContainer = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<TContainer> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
