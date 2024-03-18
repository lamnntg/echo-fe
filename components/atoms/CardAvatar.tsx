"use client";
import Image from "next/image";
import React, { memo, useState } from "react";
import CEOAvatar from "@/public/ceo-avatar.jpeg";
import clsx from "clsx";

const CardAvatar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="animate-bottomToTop">
      <div
        className="relative w-[336px] lg:w-[232px] h-[270px] object-cover overflow-hidden px-2"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Image
          src={CEOAvatar}
          alt="CEO Echo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="cursor-pointer"
        />
        <div
          className={clsx(
            "bg-[rgba(255,255,255,0.7)] transition-all duration-300 backdrop-blur-sm absolute top-0 left-0 w-full h-full flex items-center justify-center p-3",
            isHover ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="text-center bg-[#ecebeb] text-[13px] p-2 font-normal">
            <p>2023: Founder/Manager tại ECHO.design</p>
            <p className="my-3">
              Học Interior Design & Decoration tại Mỹ Thuật Công Nghiệp
              <br /> Niên khóa 2012 – 2018
            </p>
          </div>
        </div>
      </div>
      <p className="text-center italic opacity-90 font-light mt-4 text-sm">
        Kiến Trúc Sư - Người Sáng Lập
      </p>
      <p className="text-center mt-1 text-xl font-semibold">
        NGUYỄN MINH QUANG
      </p>
    </div>
  );
};

export default memo(CardAvatar);
