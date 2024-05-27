"use client";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

const usePagination = () => {
  const searchParams = useSearchParams();
  const [pagination, setPagination] = useState({
    page: Number(searchParams.get("page")) || 1,
    per_page: 6,
    total: 1,
  });
  useEffect(() => {
    setPagination({
      page: Number(searchParams.get("page")) || 1,
      per_page: 6,
      total: 1,
    });
  }, [searchParams]);

  return { pagination, setPagination };
};

export default usePagination;
