"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const flowers = [
  "/flowers/2ae60908abd44e4b8a8fae1a0ce0cb93462cee40.png",
  "/flowers/4beb60807d0616014ca65882290c83d6d93d193c.png",
  "/flowers/49c791ba625093bb7368902a40e204133daff14a.png",
  "/flowers/63a2318bbf0d1c3d666d1a4a939cb61a6ffaf562.png",
  "/flowers/949224d279b17f4880fe80e5c8c6070056fb2684.png",
];

export default function Slider() {
  return (
    <div className="w-[90%] mx-auto py-10 overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation={false}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        className="!overflow-visible"
      >
        {flowers.map((flower, index) => (
          <SwiperSlide
            key={index}
            className="!w-[260px]"
          >
            <div className="relative w-full h-[260px] overflow-hidden rounded-[28px]">
              <Image
                src={flower}
                alt="flower"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}