import React from "react";
import data from "@/data/khachsan.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RoutesEnum } from "@/constants/app.constants";

const page = ({ params }: { params: { slug: string } }) => {
  const item = data.find((item) => item.slug === params.slug);
  if (!item) {
    return notFound();
  }
  return (
    <main className="container mx-auto pb-10 pt-6">
      <div className="border-b border-solid border-[#ebebeb] py-4 flex items-center gap-2 text-gray-700">
        <Link href={RoutesEnum.HOME}>Trang chủ</Link>
        <ChevronRight />
        <Link href={RoutesEnum.KHACH_SAN}>Khách sạn - coffee</Link>
        <ChevronRight />
        <span>{item.name}</span>
      </div>
      <p className="font-semibold text-xl mt-6 pb-3">{item.name}</p>
      <div className="flex flex-col pt-6 items-center justify-center gap-3">
        {item.images.map((image) => (
          <img src={image} className="max-w-full object-cover" />
        ))}
      </div>
    </main>
  );
};

export default page;
