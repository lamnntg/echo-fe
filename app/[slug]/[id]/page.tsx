import { data, RoutesEnum } from "@/constants/app.constants";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const page = ({ params }: { params: { slug: string; id: string } }) => {
  const item = data[params.slug].products.find(
    (item: any) => item.slug === params.id
  );
  if (!item) {
    return notFound();
  }
  return (
    <main className="container mx-auto pb-10 pt-6">
      <div className="border-b border-solid border-[#ebebeb] py-4 flex items-center gap-2 text-gray-700">
        <Link href={RoutesEnum.HOME}>Trang chủ</Link>
        <ChevronRight />
        <Link href={data[params.slug].link}>{data[params.slug].label}</Link>
        <ChevronRight />
        <span>{item.name}</span>
      </div>
      <p className="font-semibold text-xl mt-6 pb-3">{item.name}</p>
      <div className="flex flex-col pt-6 items-center justify-center gap-3">
        {item.images.map((image: any) => (
          <img src={image} className="max-w-full object-cover" loading="lazy" />
        ))}
      </div>
    </main>
  );
};

export default page;
