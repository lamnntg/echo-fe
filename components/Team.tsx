"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import SlideIntroduce from "./SlideIntroduce";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { CEO_INTRODUCE } from "@/constants/app.constants";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";
import CEOAvatar from "@/public/ceo-avatar.jpeg";
import Image from "next/image";
import useBreakpoint from "@/hooks/useBreakpoint";
import { Swiper as SwiperType } from "swiper/types";

const Team = () => {
  const { isDesktop } = useBreakpoint();
  const [mySwipper, setMySwipper] = useState<SwiperType>();
  return (
    <div className="container mx-auto mt-[120px]">
      <h3 className="text-primary text-2xl">ECHO DESIGN</h3>
      <p className="text-[52px] font-semibold mt-1">ĐỘI NGŨ</p>
      <div className="flex items-end mb-6">
        <p className="text-[#222]">
          Với sự đa dạng về kinh nghiệm và chuyên môn, mỗi thành viên của nhóm
          đều có thể mang đến những ý tưởng độc đáo và sáng tạo để tạo ra những
          không gian sống đẹp mắt và thoải mái cho khách hàng.
        </p>
        <div className="flex items-center w-[30%] justify-end gap-6">
          <ChevronLeft
            size={40}
            className="cursor-pointer"
            onClick={() => {
              if (mySwipper) {
                mySwipper.slidePrev();
              }
            }}
          />
          <ChevronRight
            size={40}
            className="cursor-pointer"
            onClick={() => {
              if (mySwipper) {
                mySwipper.slideNext();
              }
            }}
          />
        </div>
      </div>
      <Swiper
        onInit={(ev) => {
          setMySwipper(ev);
        }}
        // install Swiper modules
        modules={[Autoplay, EffectFade, FreeMode, Navigation, Thumbs]}
        spaceBetween={50}
        slidesPerView={isDesktop ? 4 : 2}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
    </div>
  );
};

export default Team;
