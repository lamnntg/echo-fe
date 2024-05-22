import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import data from "@/data/nhadat.json";
import { RoutesEnum } from "@/constants/app.constants";
import Product from "@/components/atoms/Product";

const page = () => {
  return (
    <main className="container mx-auto pb-10 pt-6">
      <div className="border-b border-solid border-[ebebeb] py-4 flex items-center gap-2 text-gray-700">
        <Link href="/">Trang chủ</Link>
        <ChevronRight />
        <span>Nhà phố</span>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((item) => (
          <Product
            key={item.slug}
            to={RoutesEnum.NHA_PHO + "/" + item.slug}
            item={item}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
