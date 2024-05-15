"use client";
import { useAppStore } from "@/store/app.store";
import React, { memo } from "react";
import ContactFooter from "./ContactFooter";
import clsx from "clsx";
import { FuturaNow } from "@/utils/font";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo-text.jpg";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FACEBOOK_LINK } from "@/constants/app.constants";

const Footer = () => {
  const { showFooter } = useAppStore();
  const pathname = usePathname();
  if (!showFooter) {
    return null;
  }
  return (
    <div className="bg-[#4b4b4b] text-white pt-10 pb-6">
      <div className="container mx-auto flex gap-8 flex-wrap px-2">
        <div>
          <Image
            src={Logo}
            style={{
              objectFit: "cover",
              width: "135px",
            }}
            alt="Logo"
          />
          <p className="mt-6">
            Số 6 Kim Đồng, Giáp Bát, Hoàng Mai, Hanoi, Vietnam
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
          <p className="mt-3">Thời gian làm việc:</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-7">VỀ CHÚNG TÔI</p>
          <Link className="mb-3 transition hover:text-primary" href="/">
            Trang chủ
          </Link>
          <Link
            className="mb-3 transition hover:text-primary"
            href="/gioi-thieu"
          >
            Giới thiệu
          </Link>
          <Link className="mb-3 transition hover:text-primary" href="/">
            Dự án thiết kế
          </Link>
          <Link className="mb-3 transition hover:text-primary" href="/">
            Dự án thi công hoàn thiện
          </Link>
        </div>

        <div>
          <p className="mb-7">LIÊN HỆ CHÚNG TÔI</p>
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
          <p className="mb-7">FANPAGE</p>
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
      </div>
      <ContactFooter />
    </div>
  );
};

export default memo(Footer);
