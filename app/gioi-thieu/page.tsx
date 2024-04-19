import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Slide2 from "@/public/slide_2.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building,
  Building2,
  ChevronLeft,
  ChevronRight,
  SquarePen,
} from "lucide-react";
import SlideIntroduce from "@/components/SlideIntroduce";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "ECHO Design",
  description:
    "WELCOME TO ECHO DESIGN! Trải qua 10 năm kinh nghiệm trong ngành xây dựng nhà ở, đội ngũ của chúng tôi hướng tới vẻ đẹp hoàn mỹ của kiến trúc đương đại, kết hợp giữa vật liệu cao cấp, thân thiện với người sử dụng, cùng với các thiết bị thông minh giúp chủ nhân […]",
  other: {
    ["or:title"]: "Giới thiệu - ECHO Design",
    ["og:site_name"]: "ECHO Design",
  },
};

export default function Introduce() {
  return (
    <main className="pb-10">
      <div className="relative">
        <Image
          src={Slide2}
          style={{ objectFit: "cover", height: 400 }}
          alt="Thumnail"
        />
        <p className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] z-[2] text-5xl text-white">
          Về ECHO Design
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[1]"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto items-center my-[100px]">
        <div>
          <h1 className="text-[45px] font-semibold text-black leading-[45px] mb-6">
            CÔNG TY CỔ PHẦN ECHO DESIGN
          </h1>
          <p className="text-[15px] font-[300] text-[#222] leading-7 tracking-wide">
            Lời đầu tiên, chúng tôi - CÔNG TY CỔ PHẦN ECHO DESIGN gửi tới Quý
            khách hàng lời chào trân trọng, lời chúc sức khoẻ, thành công, thịnh
            vượng và gặp nhiều may mắn. ECHO Design được thành lập bởi đội ngũ
            kiến trúc sư, thiết kế nội thất đầy sáng tạo và nhiệt huyết kết hợp
            với đội ngũ thợ thi công tay nghề cao, giàu kinh nghiêm dưới sự giám
            sát chặt chẽ của các quản lý và kỹ sư sẽ mang đến những không gian
            sống và hưởng thụ hoàn hảo cho mỗi quý khách hàng. Với khẩu hiệu
            “Thiết kế vượt thời gian, tiếng vang vượt thời đại”, cùng sự chuyên
            sâu trong lĩnh vực nghiên cứu khoa học về sản xuất nội thất và các
            giải pháp thi công tối ưu, chúng tôi luôn mong muốn mang đến cho quý
            khách hàng những thiết kế độc đáo, mang tính tương lai, và biến
            những thiết kế ấy trở thành hiện thực nhằm nâng cao chất lượng cuộc
            sống của quý khách hàng.
          </p>
        </div>
        <div>
          <Image
            src={Slide2}
            style={{ objectFit: "cover", width: "100%" }}
            alt="Thumnail"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-light text-[#222] border border-solid border-[#dedede] px-6 border-b-0 hover:no-underline">
              Tầm nhìn
            </AccordionTrigger>
            <AccordionContent className="text-base px-6 py-5 border border-solid border-[#dedede]">
              Trong giai đoạn 5 năm tới, Echo Design định hướng phát triển trở
              thành công ty thiết kế và thi công kiến trúc nội thất trong top 10
              miền Bắc. Chúng tôi sẽ mở rộng phát triển tại các tỉnh thành phố
              lớn như: TP Hồ Chí Minh, Đà Nẵng, Hải Phòng, Hải Dương, Thanh Hóa,
              Quảng Ninh, ... Ngoài mục tiêu phát triển chuyên sâu về thiết kế
              và xây dựng hoàn thiện, chúng tôi cũng hướng tới các lĩnh vực kính
              doanh bán lẻ, quản lý dự án và cung cấp giải pháp công nghệ mới để
              nâng tầm chất lượng cuộc sống cho khách hàng.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mt-3">
            <AccordionTrigger className="text-2xl font-light text-[#222] border border-solid border-[#dedede] px-6 border-b-0 hover:no-underline">
              Sứ mệnh
            </AccordionTrigger>
            <AccordionContent className="text-base px-6 py-5 border border-solid border-[#dedede]">
              Sứ mệnh của chúng tôi là từng bước tạo ra những không gian sống,
              làm việc, vui chơi, học tập và sinh hoạt mang lại trải nghiệm trọn
              vẹn, tạo nên giá trị và cảm xúc cho quý khách hàng.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mt-3">
            <AccordionTrigger className="text-2xl font-light text-[#222] border border-solid border-[#dedede] px-6 border-b-0 hover:no-underline">
              Giá trị cốt lõi
            </AccordionTrigger>
            <AccordionContent className="text-base px-6 py-5 border border-solid border-[#dedede]">
              <p>
                - Ý tưởng thiết kế sáng tạo - bền vững: Luôn cập nhật và đưa tới
                khách hàng những sản phẩm thiết kế mới mang tính sáng tạo nhưng
                vẫn bám theo tính giá trị bền vững của không gian cũng như nhu
                cầu sử dụng của khách hàng.
              </p>
              <p>
                {" "}
                - Chất lượng sản phẩm: Tập trung vào các sản phẩm mang tính thẩm
                mỹ, hài hòa với không gian, bối cảnh và phù hợp với mong muốn
                của khách hàng nhắm nâng tầm giá trị cuộc sống.
              </p>
              <p>
                - Đội ngũ nhân sự chuyên nghiệp: Echo Design tập trung phát
                triển nguồn nhân sự và coi đó là nền tảng và cốt lõi của công
                ty. Chúng tôi xây dựng một đội ngũ nhân sự có chuyên môn và bề
                dày kinh nghiệm trong lĩnh vực kiến trúc, xây dựng và nội thất.{" "}
              </p>
              <p>
                - Uy tín hàng đầu: Đó là mục tiêu lớn nhất mà chúng tôi luôn
                hướng tới trong quá trình thiết kế và thi công hoàn thiện. Được
                khẳng định qua sự công nhận và hài lòng của khách hàng.{" "}
              </p>
              <p>
                - Tối ưu chi phí và tiết kiệm thời gian của khách hàng: Thấu
                hiểu được nỗi băn khoăn đó của khách hàng, Echo design đưa ra
                quy trình thiết kế, sản xuất và hoàn thiện nhanh chóng với chất
                lượng và chi phí tối ưu cho mỗi công trình.
              </p>{" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="container mx-auto mt-[100px]">
        <h3 className="text-[39px] text-center uppercase mb-10">
          Dịch vụ cung cấp
        </h3>
        <div className="flex items-center justify-center mt-6 gap-[60px] flex-col md:flex-row ">
          <div className="flex flex-col items-center gap-4 text-primary w-[33.33%]">
            <Building size={40} />
            <p className="text-2xl font-medium text-primary text-center">
              Thiết kế kiến trúc, nội thất
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-primary w-[33.33%]">
            <SquarePen size={40} />
            <p className="text-2xl font-medium text-primary text-center">
              Thi công hoàn thiện kiến trúc, nội thất{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-primary w-[33.33%]">
            <Building2 size={40} />
            <p className="text-2xl font-medium text-primary text-center">
              Quản lý dự án
            </p>
          </div>
        </div>
      </div>

      <Team />
    </main>
  );
}
