import React from "react";
import ToolCard from "./tool-card";
import { toolsData } from "@/data";
import { IoIosArrowDown } from "react-icons/io";

export default function Tools() {
  return (
    <div className=" py-8">
      <div className=" flex justify-between items-center">
        <p className=" text-xl font-bold">Generate</p>
        <a
          href="#"
          className=" text-[#01b4fc] flex items-center justify-center gap-1"
        >
          <IoIosArrowDown />
          See all
        </a>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
        {toolsData.map((tool) => (
          <ToolCard
            key={tool.name}
            name={tool.name}
            description={tool.description}
            isNew={tool.isNew}
            Icon={tool.Icon}
            bg={tool.bg}
          />
        ))}
      </div>
    </div>
  );
}
