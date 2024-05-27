"use client";

import { FC, useEffect, useMemo } from "react";
import Product from "./atoms/Product";
import { useSearchParams } from "next/navigation";

type ProductByTypeProps = {
  item: any;
};

const ProductByType: FC<ProductByTypeProps> = ({ item }) => {
  const searchParams = useSearchParams();
  const data = useMemo(() => {
    const page = Number(searchParams.get("page") || 1);
    return item.products.slice((page - 1) * 6, (page - 1) * 6 + 6);
  }, [searchParams]);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data.map((product: any) => (
        <Product
          key={product.slug}
          to={item.link + "/" + product.slug}
          item={product}
        />
      ))}
    </div>
  );
};

export default ProductByType;
