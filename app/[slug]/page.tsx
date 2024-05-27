import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Product from "@/components/atoms/Product";
import { data } from "@/constants/app.constants";
import { notFound } from "next/navigation";

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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {item.products.map((product: any) => (
          <Product
            key={product.slug}
            to={item.link + "/" + product.slug}
            item={product}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
