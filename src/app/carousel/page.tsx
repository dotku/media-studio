"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselPage() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[720px] max-w-7xl mx-auto p-5">
      <Carousel pauseOnHover>
        <div className="relative w-full h-full flex items-center justify-center">
          <h3 className="relative text-white text-4xl md:text-8xl z-10 text-gray-100">
            influrencers
          </h3>
          <video
            src="/assets/videos/sandy_beach.mp4"
            loop
            autoPlay
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <Image
          src="/assets/images/tipi/c0003.jpg"
          className=""
          alt="c0001"
          width={1250}
          height={703}
        />
        {/* <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        /> */}
      </Carousel>
    </div>
  );
}
