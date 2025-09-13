import React from "react";

import { Button } from "./ui/button";
import { ToolsDataType } from "@/types";

export default function ToolCard({
  name,
  description,
  Icon,
  isNew,
  bg,
}: ToolsDataType) {
  console.log(bg);
  return (
    <div className=" flex items-center justify-center cursor-pointer gap-2 hover:bg-muted rounded-xl p-4 ">
      <div className=" flex items-center gap-2">
        <div className={`  ${bg} p-2 rounded-md `}>
          <Icon className=" size-6 text-background" />
        </div>
        <div className=" w-[10rem]">
          <div className=" flex gap-1 items-center">
            <h3 className="font-semibold">{name}</h3>
            {isNew && <Button className=" bg-blue-800 p-1 h-5">New</Button>}
          </div>
          <p className=" text-xs leading-4 text-[#a5a5a5] ">{description}</p>
        </div>
      </div>
      <Button className=" bg-muted h-8 rounded-full text-foreground px-4 hover:text-background">
        open
      </Button>
    </div>
  );
}
