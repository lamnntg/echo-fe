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
import clsx from "clsx";
import { useAppStore } from "@/store/app.store";
import { usePathname } from "next/navigation";
import DropdownMenu from "../DropdownMenu";
import {
  dropdownMenuItems,
  FACEBOOK_LINK,
  RoutesEnum,
} from "@/constants/app.constants";
import { cn } from "@/lib/utils";

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
  const { isDesktopDown } = useBreakpoint();
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
    <div className="sticky top-0 left-0 z-[11] bg-white w-full px-3">
      {isDesktopDown ? (
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
                href={RoutesEnum.HOME}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.HOME && "text-primary"
                )}
              >
                Trang chủ
              </Link>
              <Link
                href={RoutesEnum.INTRODUCE}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.INTRODUCE && "text-primary"
                )}
              >
                Giới thiệu
              </Link>
              <DropdownMenu
                item={{
                  label: "Dự án thiết kế",
                  items: dropdownMenuItems,
                }}
              />
              <Link
                href={RoutesEnum.COMPLETED}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.COMPLETED && "text-primary"
                )}
                prefetch
              >
                Dự án thi công
              </Link>
              <DropdownMenu
                item={{
                  label: "Tin tức",
                  items: [
                    {
                      href: RoutesEnum.QUY_TRINH_THIET_KE,
                      label: "Quy trình thiết kế, thi công",
                    },
                    {
                      href: RoutesEnum.BAO_GIA,
                      label: "Báo giá",
                    },
                    {
                      href: RoutesEnum.CHINH_SACH,
                      label: "Chính sách",
                    },
                  ],
                }}
              />
              <Link
                href={RoutesEnum.LIEN_HE}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.LIEN_HE && "text-primary"
                )}
                prefetch
              >
                Liên hệ
              </Link>
              <div className="px-4 my-3 leading-6 text-base">
                <Link href={FACEBOOK_LINK} target="_blank" className="mr-4">
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
          <div className="flex items-center uppercase">
            <Link
              href={RoutesEnum.HOME}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.HOME && "text-primary"
              )}
            >
              Trang chủ
            </Link>
            <Link
              href={RoutesEnum.INTRODUCE}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.INTRODUCE && "text-primary"
              )}
            >
              Giới thiệu
            </Link>
            <DropdownMenu
              item={{
                label: "Dự án thiết kế",
                items: dropdownMenuItems,
              }}
            />
            <Link
              href={RoutesEnum.COMPLETED}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.COMPLETED && "text-primary"
              )}
              prefetch
            >
              Dự án thi công
            </Link>
            <DropdownMenu
              item={{
                label: "Tin tức",
                items: [
                  {
                    href: RoutesEnum.QUY_TRINH_THIET_KE,
                    label: "Quy trình thiết kế, thi công",
                  },
                  {
                    href: RoutesEnum.BAO_GIA,
                    label: "Báo giá",
                  },
                  {
                    href: RoutesEnum.CHINH_SACH,
                    label: "Chính sách",
                  },
                ],
              }}
            />
            <Link
              href={RoutesEnum.LIEN_HE}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.LIEN_HE && "text-primary"
              )}
              prefetch
            >
              Liên hệ
            </Link>
            <Link href={FACEBOOK_LINK} target="_blank" className="mr-4">
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
