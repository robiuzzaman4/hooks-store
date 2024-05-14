import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { index } from "@/constants";
import Link from "next/link";

const items = [
  { id: 1, name: "useIdNameArray" },
  { id: 2, name: "useObjectArrayWithIdName" },
  { id: 3, name: "useIdNameObjectArray" },
  { id: 4, name: "useNamedArray" },
  { id: 5, name: "useIdNameList" },
  { id: 6, name: "useIdNameData" },
  { id: 7, name: "useIdNameCollection" },
  { id: 8, name: "useArrayWithIdNameFormat" },
  { id: 9, name: "useNameIdArray" },
  { id: 10, name: "useIdNameEntityArray" },
  { id: 1, name: "useIdNameArray" },
  { id: 2, name: "useObjectArrayWithIdName" },
  { id: 3, name: "useIdNameObjectArray" },
  { id: 4, name: "useNamedArray" },
  { id: 5, name: "useIdNameList" },
  { id: 6, name: "useIdNameData" },
  { id: 7, name: "useIdNameCollection" },
  { id: 8, name: "useArrayWithIdNameFormat" },
  { id: 9, name: "useNameIdArray" },
  { id: 10, name: "useIdNameEntityArray" },
];

const Sidebar = () => {
  return (
    <aside className="top-s fixed z-30 hidden h-[calc(100vh-72px)] w-full shrink-0 lg:sticky lg:block">
      <ScrollArea className="relative h-full overflow-hidden py-6 pr-6">
        <div className="flex h-full w-full flex-col gap-4">
          {/* overview */}
          <div className="flex w-full flex-col gap-4">
            <p className="w-full text-sm font-semibold capitalize text-foreground">
              {index.overview.category}
            </p>
            <div className="grid w-full gap-2">
              {index.overview.subcategories.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
                  className="w-full cursor-pointer text-sm text-muted-foreground hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* hooks */}
          <div className="flex w-full flex-col gap-4">
            <p className="w-full text-sm font-semibold capitalize text-foreground">
              {index.hooks.category}
            </p>
            <div className="grid w-full gap-2">
              {index.hooks.subcategories.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
                  className="w-full cursor-pointer text-sm text-muted-foreground hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
