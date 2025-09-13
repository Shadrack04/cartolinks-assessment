import React from "react";
import { ImageCarousel } from "./image-carousel";
import Image from "next/image";
import { images } from "@/constants/images";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <div className="relative max-w-full flex gap-10 overflow-hidden py-10">
      <div className="relative rounded-2xl overflow-hidden w-[55%] h-80 shrink-0">
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
      <div className="relative rounded-2xl overflow-hidden aspect-video w-[55%] h-80 shrink-0">
        <video
          src="open-source.mp4"
          muted
          autoPlay
          controls
          loop
          playsInline
          className="hover:scale-105 transition-all duration-300"
        />
        <div className=" absolute bottom-2 left-2 w-[19.1rem] text-white">
          <h3 className=" text-[1.3rem] tracking-tight font-bold">
            Flux.1 Krea
          </h3>
          <p className=" text-xs">
            We're making the weights so our Flux.1 Krea modal open-source.
            Download and run our model weights, read the technical report, or
            generate with it in Krea image
          </p>
        </div>
      </div>

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

      <div className=" absolute z-30 bottom-2 right-4 flex gap-2 items-center">
        <IoIosArrowBack className="bg-muted p-1 rounded-full size-6" />
        <IoIosArrowForward className="bg-muted p-1 rounded-full size-6" />
      </div>

      {/* <ImageCarousel /> */}
    </div>
  );
}
