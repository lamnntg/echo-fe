"use client";
import { useAppStore } from "@/store/app.store";
import React, { memo } from "react";
import ContactFooter from "./ContactFooter";
import clsx from "clsx";
import { FuturaNow } from "@/utils/font";
import { usePathname } from "next/navigation";
import LogoWhite from "@/public/logo-text-white.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  dropdownMenuItems,
  FACEBOOK_LINK,
  RoutesEnum,
} from "@/constants/app.constants";
import { FileVideo, NotepadText } from "lucide-react";
import DropdownMenu from "../DropdownMenu";

const Footer = () => {
  const { showFooter } = useAppStore();
  const pathname = usePathname();
  if (!showFooter) {
    return null;
  }
  return (
    <div className="bg-[#4b4b4b] text-white pt-10 pb-6">
      <div className="container mx-auto lg:flex lg:flex-wrap gap-8 px-2 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src={LogoWhite}
            style={{
              objectFit: "cover",
              width: "135px",
            }}
            alt="Logo"
          />
          <p className="mt-6">
            Số 6 Kim Đồng, Giáp Bát, Hoàng Mai, Hà Nội, Việt Nam
          </p>
          <p className="mt-3">
            <Link
              href="tel:088 688 99 95"
              className="hover:text-primary transition"
            >
              088 688 99 95
            </Link>
          </p>
          <p className="mt-3">
            <Link
              href="mailto:infor@echodesign.vn"
              target="_blank"
              className="hover:text-primary transition"
            >
              infor@echodesign.vn
            </Link>
          </p>
          <p className="mt-3">Thời gian làm việc: 8:30 - 18:00 (Th2 - Th7)</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 md:mb-7">VỀ CHÚNG TÔI</p>
          <Link className="mb-3 transition hover:text-primary" href="/">
            Trang chủ
          </Link>
          <Link
            className="mb-3 transition hover:text-primary"
            href="/gioi-thieu"
          >
            Giới thiệu
          </Link>
          <DropdownMenu
            item={{
              label: "Dự án thiết kế",
              items: dropdownMenuItems,
            }}
            isFooter={true}
          />
          <Link
            className="mb-3 transition hover:text-primary"
            href={RoutesEnum.THUC_TE}
          >
            Dự án thi công hoàn thiện
          </Link>
        </div>

        <div>
          <p className="mb-2 md:mb-7">LIÊN HỆ CHÚNG TÔI</p>
          <div className="flex items-center gap-2 mb-3 transition hover:text-primary cursor-pointer">
            <Link
              href={FACEBOOK_LINK}
              className="flex items-center"
              target="_blank"
            >
              <div className="w-[30px]">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </div>
              Facebook
            </Link>
          </div>
          <div className="flex items-center gap-2 transition hover:text-primary cursor-pointer">
            <Link
              href="https://www.youtube.com/@ECHO.design"
              className="flex items-center"
              target="_blank"
            >
              <div className="w-[30px]">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </div>
              Youtube
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-2 md:mb-7">FANPAGE</p>
          <div className="flex items-center gap-2 mb-3 transition hover:text-primary cursor-pointer">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fed.interior.architecture&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=433043327764949"
              width="340"
              height="130"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="max-w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default memo(Footer);
