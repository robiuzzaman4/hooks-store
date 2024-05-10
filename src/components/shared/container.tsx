import { cn } from "@/lib/utils";
import React from "react";

type TContainer = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<TContainer> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
