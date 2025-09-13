import React from "react";
import { FaImage } from "react-icons/fa";
import { Button } from "./ui/button";

export default function ToolCard() {
  const tools = [
    { name: "Image", action: "Open" },
    { name: "Video", action: "Open" },
    { name: "Realtime", action: "Open" },
    { name: "Enhance", action: "Open" },
    { name: "Train", action: "Open" },
  ];
  return (
    <div className=" flex items-center justify-center cursor-pointer gap-2 hover:bg-muted rounded-xl p-4 ">
      <div className=" flex items-center gap-2">
        <div className=" bg-[#3c5870] p-2 rounded-md">
          <FaImage className=" size-6 text-background" />
        </div>
        <div className=" w-[10rem]">
          <div className=" flex gap-1 items-center">
            <h3 className="font-semibold ">Image</h3>
            <Button className=" bg-blue-800 p-1 h-5">New</Button>
          </div>
          <p className=" text-xs leading-4 text-[#a5a5a5] ">
            Generate images with custom styles in flux and ideogram
          </p>
        </div>
      </div>
      <Button className=" bg-muted h-8 rounded-full text-foreground px-4 hover:text-background">
        open
      </Button>
    </div>
  );
}
