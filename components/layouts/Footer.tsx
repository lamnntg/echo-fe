"use client";
import { useAppStore } from "@/store/app.store";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { memo } from "react";

const Footer = () => {
  const { showFooter } = useAppStore();
  if (!showFooter) {
    return null;
  }
  return (
    <footer className="flex container mx-auto bg-white py-2 text-sm text-[#333] justify-between flex-col items-center md:flex-row">
      <div>
        <FontAwesomeIcon icon={faLocationDot} className="text-[#333] mr-2" />
        <span className="hover:text-primary transition opacity-70 text-xs">
          Số 6 Kim Đồng, Giáp Bát, Hoàng Mai, Hanoi, Vietnam
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhoneVolume} className="text-[#333] mr-2" />
        <Link
          href="tel:088 688 99 95"
          className="hover:text-primary transition opacity-70 text-xs"
        >
          088 688 99 95
        </Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} className="text-[#333] mr-2" />
        <Link
          href="mailto:nmq.echodesign@gmail.com"
          target="_blank"
          className="hover:text-primary transition opacity-70 text-xs"
        >
          nmq.echodesign@gmail.com
        </Link>
      </div>
    </footer>
  );
};

export default memo(Footer);
