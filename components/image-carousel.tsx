import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarouselComponent from "./carousel-component";
import { carouselData } from "@/data";

export function ImageCarousel() {
  return (
    <Carousel className="relative w-full max-w-full py-10">
      <CarouselContent className="-ml-1">
        {carouselData.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-[100%] md:basis-1/2 lg:basis-3/5 "
          >
            <CarouselComponent
              title={item.title}
              description={item.description}
              isVideo={item.isVideo}
              image={item.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className=" absolute z-30 bottom-4 flex gap-1 left-[45%]">
        {Array.from({ length: carouselData.length }, (_, index) => (
          <div
            key={index}
            className={`${
              index != 0 ? "bg-muted" : "bg-foreground"
            } size-1.5 rounded-full `}
          />
        ))}
      </div>
      <div className="  absolute z-30 -bottom-4 right-0 flex gap-2 m-auto">
        <CarouselPrevious className=" static" />
        <CarouselNext className=" static" />
      </div>
    </Carousel>
  );
}

{
  /* <div className="relative max-w-full flex gap-10 overflow-hidden py-10">
      <div className="relative rounded-2xl overflow-hidden w-full md:w-[55%] h-80 shrink-0">
        <Image
          src={images.wanImage}
          alt=""
          fill
          className=" hover:scale-105 transition-all duration-300 "
        />
        <div className=" absolute bottom-2 left-2 w-[19.1rem] text-white">
          <h3 className=" text-[1.3rem] tracking-tight font-bold">
            WAN 2.2 Images generation
          </h3>
          <p className=" text-xs">
            Generate complex with the brand new and powerful WAN 2.2 model.
            Exceptional prompt adherence and ultra-realistic features
          </p>
        </div>
      </div>
      </div> */
}
