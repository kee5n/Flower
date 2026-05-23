"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full px-14">

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >

        <SwiperSlide>
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/flowers/2ae60908abd44e4b8a8fae1a0ce0cb93462cee40.png"
              alt="flower"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/flowers/4beb60807d0616014ca65882290c83d6d93d193c.png"
              alt="flower"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/flowers/49c791ba625093bb7368902a40e204133daff14a.png"
              alt="flower"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/flowers/63a2318bbf0d1c3d666d1a4a939cb61a6ffaf562.png"
              alt="flower"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/flowers/949224d279b17f4880fe80e5c8c6070056fb2684.png"
              alt="flower"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
}