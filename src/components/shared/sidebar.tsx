import React from "react";
import { ScrollArea } from "../ui/scroll-area";

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
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
      <ScrollArea className="relative h-full overflow-hidden py-6 pr-6">
        <ul className="grid w-full list-none gap-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="w-full text-sm text-muted-foreground hover:underline"
            >
              <a href={`#${item.name}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
