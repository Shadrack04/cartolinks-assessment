import React from "react";
import { Card, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";

type CarouselComponentProps = {
  image: StaticImageData;
  title: string;
  description: string;
  isVideo: boolean;
};

export default function CarouselComponent({
  image,
  title,
  description,
  isVideo,
}: CarouselComponentProps) {
  return (
    <div className="p-1">
      <Card className=" p-0 overflow-hidden">
        <CardContent className="flex aspect-auto items-center justify-center p-0">
          <div className="relative rounded-2xl overflow-hidden w-full h-80 shrink-0">
            {isVideo ? (
              <video
                src="open-source.mp4"
                muted
                autoPlay
                controls
                loop
                playsInline
                className="hover:scale-105 transition-all duration-300"
              />
            ) : (
              <Image
                src={image}
                alt=""
                fill
                className=" hover:scale-105 transition-all duration-300 "
              />
            )}

            <div className=" absolute bottom-2 left-2 w-[19.1rem] text-white">
              <h3 className=" text-[1.3rem] tracking-tight font-bold">
                {title}
              </h3>
              <p className=" text-xs">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
