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
