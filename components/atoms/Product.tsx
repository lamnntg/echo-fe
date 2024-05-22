import { RoutesEnum } from "@/constants/app.constants";
import Link from "next/link";
import React, { FC, memo } from "react";

type ProductProps = {
  item: {
    name: string;
    slug: string;
    address: string;
    area: string;
    year_completed: string;
    design_by: string;
    photo: string;
    status: string;
    images: string[];
    description: string;
  };
  to: string;
};

const Product: FC<ProductProps> = ({ item, to }) => {
  return (
    <div key={item.slug} className="relative">
      <div className="relative overflow-hidden group">
        <Link href={to} className="h-[255px] block">
          <img
            src={item.images[0]}
            alt={item.name}
            width="100%"
            loading="lazy"
            className="group-hover:scale-125 transition duration-500"
            style={{
              width: "100%",
              height: 255,
              objectFit: "cover",
            }}
          />
        </Link>
        <Link
          href={to}
          className="text-white cursor-pointer transition flex-col group-hover:translate-y-[0%] translate-y-[100%] absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center"
        >
          <p className="text-xl">{item.name}</p>
          <Link href={to} className="text-primary cursor-pointer mt-3">
            Xem chi tiết
          </Link>
        </Link>
      </div>
      <Link href={to}>
        <p className="mt-2 font-medium text-lg">{item.name}</p>
      </Link>
    </div>
  );
};

export default memo(Product);
