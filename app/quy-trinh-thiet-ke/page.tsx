import React from "react";
import Slide2 from "@/public/slide_2.jpg";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { RaleWay } from "@/utils/font";

const page = () => {
  return (
    <main>
      <div className="relative after:absolute after:contents-[''] h-[356px] after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-35">
        <Image
          src={Slide2}
          alt="slide 2"
          style={{
            height: 356,
            objectFit: "cover",
          }}
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-[10%] z-[2] w-[60%]">
          <h1 className="text-white text-3xl">
            QUY TRÌNH THIẾT KẾ CHUYÊN NGHIỆP
          </h1>
          <p className="text-white">
            TDC quy tụ đội ngũ chuyên viên, kỹ sư giàu kinh nghiệm, đội ngũ công
            nhân sản xuất có tay nghề cao cùng trang thiết bị máy móc hiện đại.
            Chúng tôi luôn sẵn sàng cùng khách hàng xây dựng và triển khai các ý
            tưởng.
          </p>
          <Link
            className="border-[2px] border-solid rounded-xl border-white text-primary bg-white hover:bg-primary hover:text-white hover:border-primary transition px-6 py-2 mt-6 inline-block"
            href="/bao-gia"
          >
            Báo giá
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-[60px]">
        <div className="px-2 py-4 border border-solid border-[f7f7f7] rounded">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center gap-4 text-xl">
              <div className="h-[2px] w-[30px] bg-primary"></div>
              <p>TƯ VẤN</p>
            </div>
            <div
              className={cn(
                "[text-shadow:-1px_-1px_0_#e0e0e0,1px_-1px_0_#e0e0e0,-1px_1px_0_#e0e0e0,1px_1px_0_#e0e0e0] text-[48px] leading-[60px] text-[rgba(255,255,255,1)]",
                RaleWay.className,
                "font-bold mb-6"
              )}
            >
              01
            </div>
          </div>
          <ol className="pl-6">
            <li className="marker:text-primary list-[auto]">
              Thu thập thông tin khách hàng và khảo sát hiện trạng
            </li>
            <li className="marker:text-primary list-[auto]">
              Tư vấn và thuyết minh ý tưởng thiết kế
            </li>
            <li className="marker:text-primary list-[auto]">
              Ký hợp đồng thiết kế
            </li>
          </ol>
        </div>

        <div className="px-2 py-4 border border-solid border-[f7f7f7] rounded">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center gap-4 text-xl">
              <div className="h-[2px] w-[30px] bg-primary"></div>
              <p>THIẾT KẾ</p>
            </div>
            <div
              className={cn(
                "[text-shadow:-1px_-1px_0_#e0e0e0,1px_-1px_0_#e0e0e0,-1px_1px_0_#e0e0e0,1px_1px_0_#e0e0e0] text-[48px] leading-[60px] text-[rgba(255,255,255,1)]",
                RaleWay.className,
                "font-bold mb-6"
              )}
            >
              02
            </div>
          </div>
          <ol className="pl-6">
            <li className="marker:text-primary list-[auto]">
              Triển khai thiết kế layout 2D
            </li>
            <li className="marker:text-primary list-[auto]">
              Triển khai thiết kế phối cảnh 3D
            </li>
            <li className="marker:text-primary list-[auto]">
              Triển khai hồ sơ kĩ thuật chi tiết và dự toán
            </li>
            <li className="marker:text-primary list-[auto]">
              Nghiệm thu hoàn thành hạng mục thiết kế
            </li>
          </ol>
        </div>

        <div className="px-2 py-4 border border-solid border-[f7f7f7] rounded">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center gap-4 text-xl">
              <div className="h-[2px] w-[30px] bg-primary"></div>
              <p>THI CÔNG</p>
            </div>
            <div
              className={cn(
                "[text-shadow:-1px_-1px_0_#e0e0e0,1px_-1px_0_#e0e0e0,-1px_1px_0_#e0e0e0,1px_1px_0_#e0e0e0] text-[48px] leading-[60px] text-[rgba(255,255,255,1)]",
                RaleWay.className,
                "font-bold mb-6"
              )}
            >
              03
            </div>
          </div>
          <ol className="pl-6">
            <li className="marker:text-primary list-[auto]">
              Lên dự toán chi phí thi công
            </li>
            <li className="marker:text-primary list-[auto]">
              Ký hợp đồng thi công
            </li>
            <li className="marker:text-primary list-[auto]">
              Triển khai thi công phần thô
            </li>
            <li className="marker:text-primary list-[auto]">
              Triển khai thi công nội thất và hạng mục khác
            </li>
            <li className="marker:text-primary list-[auto]">
              Nghiệm thu hoàn thành hạng mục thi công
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default page;
