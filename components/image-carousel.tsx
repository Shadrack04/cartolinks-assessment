"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { images } from "@/constants/images";

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" gap-8 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" basis-[50%]">
            <div className="">
              <Image
                src={images.wanImage}
                width={500}
                height={300}
                alt=""
                className=" w-full h-auto object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
