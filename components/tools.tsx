import React from "react";
import ToolCard from "./tool-card";
import { toolsData } from "@/data";

export default function Tools() {
  return (
    <div className=" grid grid-cols-4 gap-2 mb-8">
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
      {/* <ToolCard />
      <ToolCard />
      <ToolCard />
      <ToolCard />
      <ToolCard />
      <ToolCard />
      <ToolCard />
      <ToolCard /> */}
    </div>
  );
}
