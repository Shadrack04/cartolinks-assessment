import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/constants/images";
import Image from "next/image";

export function ImageCarousel() {
  return (
    <Carousel className="relative w-full max-w-full py-10">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-[100%] md:basis-1/2 lg:basis-3/5 "
          >
            <div className="p-1">
              <Card className=" p-0 overflow-hidden">
                <CardContent className="flex aspect-auto items-center justify-center p-0">
                  <div className="relative rounded-2xl overflow-hidden w-full h-80 shrink-0">
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
                        Generate complex with the brand new and powerful WAN 2.2
                        model. Exceptional prompt adherence and ultra-realistic
                        features
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className=" absolute z-30 bottom-4 flex gap-1 left-[45%]">
        {Array.from({ length: 9 }, (_, index) => (
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
