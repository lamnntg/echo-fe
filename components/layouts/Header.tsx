"use client";
import React, { useEffect, useState } from "react";
import { MenuToggle } from "../atoms/MenuToggle";
import { motion } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";
import Image from "next/image";
import LogoText from "@/public/logo-text.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useAppStore } from "@/store/app.store";
import { usePathname } from "next/navigation";
import DropdownMenu from "../DropdownMenu";

const menu = {
  open: {
    height: "auto",
    transition: {
      delay: 0.1,
    },
  },
  close: {
    height: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
const Header = () => {
  const { showFooter } = useAppStore();
  const [isHover, setIsHover] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };
  const { isMobileLargeDown } = useBreakpoint();
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const { setShowFooter } = useAppStore();
  useEffect(() => {
    if (pathname !== "/") {
      setShowFooter(true);
    }
  }, []);

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  if (!showFooter) {
    return null;
  }

  return (
    <div className="sticky top-0 left-0 z-[2] bg-white w-full px-3">
      {isMobileLargeDown ? (
        <motion.nav initial={false} animate={show ? "open" : "closed"}>
          <div className="flex justify-between pr-4 relative py-2">
            <Link href="/">
              <Image
                width={145}
                height={40}
                objectFit="covert"
                alt="Logo echo"
                src={LogoText}
              />
            </Link>
            <MenuToggle toggle={() => setShow(!show)} />
            <motion.div
              style={{ overflow: "hidden" }}
              initial="close"
              animate={show ? "open" : "close"}
              className={clsx(
                "absolute top-full left-0 w-full bg-white transition -mt-1"
              )}
              variants={menu}
            >
              <Link
                href="/"
                className="flex items-center px-8 hover:text-primary transition my-3 leading-6 text-base"
              >
                Trang chủ
              </Link>
              <Link
                href="/gioi-thieu"
                className="flex items-center px-8 hover:text-primary transition my-3 leading-6 text-base"
                prefetch
              >
                Giới thiệu
              </Link>
              <DropdownMenu />
              <div className="text-nowrap px-8 gap-2 transition cursor-pointer my-3 leading-6 text-base">
                <div
                  className="flex items-center gap-2 hover:text-primary"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  Công trình thực tế
                  <FontAwesomeIcon icon={faSortDown} className="-mt-1" />
                </div>
                <motion.div
                  style={{ overflow: "hidden" }}
                  initial="close"
                  animate={showSubMenu ? "open" : "close"}
                  variants={menu}
                >
                  <Link
                    href="/du-an-da-hoan-thanh"
                    className="text-nowrap my-2 hover:text-primary px-2 block transition"
                    prefetch
                  >
                    Đã hoàn thành
                  </Link>
                  <Link
                    href="/du-an-dang-trien-khai"
                    className=" text-nowrap my-2 hover:text-primary px-2 block transition"
                    prefetch
                  >
                    Đang triển khai
                  </Link>
                </motion.div>
              </div>
              <Link
                href="/lien-he"
                className="flex items-center px-8 hover:text-primary transition mr-4 my-3 leading-6 text-base"
                prefetch
              >
                Liên hệ
              </Link>
              <div className="px-8 my-3 leading-6 text-base">
                <Link
                  href="https://www.facebook.com/echo.interior/"
                  target="_blank"
                  className="mr-4"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="cursor-pointer hover:text-primary transition"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@ECHO.design"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="cursor-pointer hover:text-primary transition"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.nav>
      ) : (
        <div className="container mx-auto w-full flex justify-between py-1 px-3">
          <Link href="/" className=" block h-12 w-36 mt-1">
            <Image
              src={LogoText}
              width={144}
              height={48}
              objectFit="cover"
              alt="Logo echo"
              className="py-1"
            />
          </Link>
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center px-8 text-sm hover:text-primary transition"
            >
              Trang chủ
            </Link>
            <Link
              href="/gioi-thieu"
              className="flex items-center px-8 text-sm hover:text-primary transition"
              prefetch
            >
              Giới thiệu
            </Link>
            <DropdownMenu
              item={{
                label: "Dự án thiết kế",
                items: [
                  {
                    label: "Thiết kế nội thất",
                    href: "/thiet-ke",
                  },
                  {
                    label: "Thiết kế kiến trúc sân vườn",
                    href: "/thiet-ke",
                  },
                ],
              }}
            />
            <Link
              href="/lien-he"
              className="flex items-center px-8 text-sm hover:text-primary transition mr-4"
              prefetch
            >
              Liên hệ
            </Link>
            <Link
              href="https://www.facebook.com/echo.interior/"
              target="_blank"
              className="mr-4"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="cursor-pointer hover:text-primary transition"
              />
            </Link>
            <Link href="https://www.youtube.com/@ECHO.design" target="_blank">
              <FontAwesomeIcon
                icon={faYoutube}
                className="cursor-pointer hover:text-primary transition"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
