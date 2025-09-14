"use client";

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
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

export function ImageCarousel() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const carouselApi = React.useRef<EmblaCarouselType | null>(null);

  const onSelect = React.useCallback(() => {
    if (!carouselApi.current) return;
    setSelectedIndex(carouselApi.current.selectedScrollSnap());
  }, []);

  const onInit = React.useCallback(
    (api: EmblaCarouselType | undefined) => {
      if (!api) return;
      carouselApi.current = api;
      setScrollSnaps(api?.scrollSnapList());
      api?.on("select", onSelect);
      onSelect();
    },
    [onSelect]
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      setApi={onInit}
      className="relative w-full max-w-full py-10"
    >
      <CarouselContent className="-ml-1">
        {carouselData.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-6 basis-[100%] md:basis-1/2 lg:basis-3/5 "
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
        {scrollSnaps.map((_, index) => (
          <div
            onClick={() => carouselApi.current?.scrollTo(index)}
            key={index}
            className={`${
              index == selectedIndex ? "bg-foreground" : "bg-muted"
            } size-1.5 rounded-full cursor-pointer `}
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
