import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import data from "@/data/chungcu.json";
import Image from "next/image";
import { RoutesEnum } from "@/constants/app.constants";

const page = () => {
  return (
    <main className="container mx-auto pb-10 pt-6">
      <div className="border-b border-solid border-[ebebeb] py-4 flex items-center gap-2 text-gray-700">
        <Link href="/">Trang chủ</Link>
        <ChevronRight />
        <span>Chung cư</span>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-3">
        {data.map((item) => (
          <div key={item.slug}>
            <Link
              href={RoutesEnum.CHUNG_CU + "/" + item.slug}
              className="h-[255px] block overflow-hidden"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                width="100%"
                className="hover:scale-125 transition duration-500"
                style={{
                  width: "100%",
                  height: 255,
                  objectFit: "cover",
                }}
              />
            </Link>
            <Link href={RoutesEnum.CHUNG_CU + "/" + item.slug}>
              <p className="mt-2 font-medium text-lg">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
