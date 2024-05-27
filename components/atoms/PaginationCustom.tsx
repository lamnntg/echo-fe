"use client";
import React, { FC, memo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import usePagination from "@/hooks/usePagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationCustomProps = {
  last_page: number;
};

const PaginationCustom: FC<PaginationCustomProps> = ({ last_page }) => {
  const { pagination } = usePagination();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            disabled={pagination.page === 1}
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set("page", `${pagination.page - 1}`);
              router.push(`${pathname}?${params.toString()}`);
            }}
          />
        </PaginationItem>
        {Array.from({ length: last_page }).map((_, index) => {
          return (
            <PaginationItem key={index}>
              <PaginationLink
                className="cursor-pointer"
                isActive={index + 1 === pagination.page}
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  if (index + 1 === pagination.page) {
                    return;
                  }
                  params.set("page", `${index + 1}`);
                  router.push(`${pathname}?${params.toString()}`);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            disabled={pagination.page === last_page}
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set("page", `${pagination.page + 1}`);
              router.push(`${pathname}?${params.toString()}`);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default memo(PaginationCustom);
