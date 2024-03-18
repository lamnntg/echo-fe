import { Metadata } from "next";
import React from "react";
import Cover from "@/public/cover.png";
import Image from "next/image";
import CardAvatar from "@/components/atoms/CardAvatar";

export const metadata: Metadata = {
  title: "Giới thiệu - ECHO Design",
  description:
    "WELCOME TO ECHO DESIGN! Trải qua 10 năm kinh nghiệm trong ngành xây dựng nhà ở, đội ngũ của chúng tôi hướng tới vẻ đẹp hoàn mỹ của kiến trúc đương đại, kết hợp giữa vật liệu cao cấp, thân thiện với người sử dụng, cùng với các thiết bị thông minh giúp chủ nhân […]",
  other: {
    ["or:title"]: "Giới thiệu - ECHO Design",
    ["og:site_name"]: "ECHO Design",
  },
};

export default function Introduce() {
  return (
    <main className="container mx-auto py-20 bg-white text-[#333] font-medium px-3 pt-14 md:pt-20">
      <div className="flex items-end gap-12 flex-col lg:flex-row">
        <div className="flex-1 animate-leftToRight">
          <h2 className="text-2xl mb-6 text-left lg:text-right md:text-[28px]">
            WELCOME TO ECHO DESIGN!
          </h2>
          <p className="text-left lg:text-right font-thin text-sm md:text-[15px]">
            Trải qua 10 năm kinh nghiệm trong ngành xây dựng nhà ở, đội ngũ của
            chúng tôi hướng tới vẻ đẹp hoàn mỹ của kiến trúc đương đại, kết hợp
            giữa vật liệu cao cấp, thân thiện với người sử dụng, cùng với các
            thiết bị thông minh giúp chủ nhân căn nhà có cuộc sống sang trọng và
            hiện đại.
          </p>
          <p className="text-left lg:text-right font-thin mt-3 text-sm md:text-[15px]">
            Khát khao cháy bỏng mang đến cho Việt Nam những ngôi nhà đẳng cấp
            quốc tế đang là cầu nối đưa chúng tôi đến với bạn.
          </p>
          <p className="text-left lg:text-right font-thin mt-3 text-sm md:text-[15px]">
            Cảm ơn vì đã lựa chọn chúng tôi cho ngôi nhà mới của mình!
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-start w-full animate-rightToLeft">
          <div className="max-h-[200px]">
            <Image
              src={Cover}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                maxHeight: "200px",
              }}
              alt="Cover echo"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 lg:mt-[160px] flex justify-center">
        <CardAvatar />
      </div>
    </main>
  );
}
