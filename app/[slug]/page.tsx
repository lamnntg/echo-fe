import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Product from "@/components/atoms/Product";
import { data } from "@/constants/app.constants";
import { notFound } from "next/navigation";
import PaginationCustom from "@/components/atoms/PaginationCustom";
import ProductByType from "@/components/ProductByType";

const page = ({ params }: { params: { slug: string } }) => {
  const item = data[params.slug];
  if (!item) {
    return notFound();
  }
  return (
    <main className="container mx-auto pb-10 pt-6">
      <div className="border-b border-solid border-[#ebebeb] py-4 flex items-center gap-2 text-gray-700">
        <Link href="/">Trang chủ</Link>
        <ChevronRight />
        <span>{item.label}</span>
      </div>
      <ProductByType item={item} />
      <PaginationCustom last_page={Math.ceil(item.products.length / 6)} />
    </main>
  );
};

export default page;
