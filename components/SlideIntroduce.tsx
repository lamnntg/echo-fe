"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import CEOAvatar from "@/public/ceo-avatar.jpeg";
import Image from "next/image";
import { CEO_INTRODUCE } from "@/constants/app.constants";
import useBreakpoint from "@/hooks/useBreakpoint";

const SlideIntroduce = () => {
  const { isDesktop } = useBreakpoint();
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={isDesktop ? 4 : 2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {CEO_INTRODUCE.map((item, index) => (
        <SwiperSlide key={index}>
          <div>
            <div className="flex flex-col items-center justify-normal">
              <div className="p-2 border border-solid border-[#ececec] w-fit">
                <Image
                  src={CEOAvatar}
                  style={{ objectFit: "cover", width: 190, height: 190 }}
                  alt="Thumnail"
                />
              </div>
            </div>
            <p className="text-center text-lg mt-4">{item.name}</p>
            <p className="text-center text-sm mt-2 uppercase font-medium">
              {item.role}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideIntroduce;
