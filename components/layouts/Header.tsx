"use client";
import React, { useState } from "react";
import { MenuToggle } from "../atoms/MenuToggle";
import { motion } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";
import Image from "next/image";
import LogoText from "@/public/logo-text.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
  const [isHover, setIsHover] = useState(false);
  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };
  const { isMobileLargeDown } = useBreakpoint();
  const [show, setShow] = useState(false);
  return (
    <div className="sticky top-0 left-0 z-[2] bg-white w-full py-2">
      {isMobileLargeDown ? (
        <motion.nav initial={false} animate={show ? "open" : "closed"}>
          <MenuToggle toggle={() => setShow(!show)} />
        </motion.nav>
      ) : (
        <div className="container mx-auto w-full flex justify-between">
          <Link href="/" className=" block h-12 w-36 mt-1">
            <Image
              src={LogoText}
              width={144}
              height={48}
              objectFit="cover"
              alt="Logo echo"
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
            >
              Giới thiệu
            </Link>
            <motion.div
              className="relative"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              <div className="text-nowrap flex items-center px-8 gap-2 text-sm hover:text-primary transition cursor-pointer">
                Dự án
                <FontAwesomeIcon icon={faSortDown} className="-mt-1" />
              </div>
              <motion.div
                className="absolute top-full left-0 z-[2]"
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className=" bg-white py-4 rounded-b-md">
                  <Link
                    href="/completed"
                    className="text-nowrap my-2 px-8 block hover:text-primary transition"
                  >
                    Đã hoàn thành
                  </Link>
                  <Link
                    href="/in-progress"
                    className=" text-nowrap my-2 px-8 block hover:text-primary transition"
                  >
                    Đang triển khai
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            <Link
              href="/lien-he"
              className="flex items-center px-8 text-sm hover:text-primary transition mr-4"
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
