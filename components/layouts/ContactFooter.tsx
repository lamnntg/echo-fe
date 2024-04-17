"use client";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faRightLong,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React, { memo, useState } from "react";

const ContactFooter = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div
        className={clsx(
          "rotate-[270deg] fixed right-10 bottom-[184px] z-10 transition-all cursor-pointer text-primary",
          active ? "translate-y-[260px]" : ""
        )}
        onClick={() => setActive(!active)}
      >
        Liên hệ <FontAwesomeIcon icon={faRightLong} />
      </div>
      <div
        className={clsx(
          "fixed right-2 bottom-[160px] z-10 transition-all",
          active ? "translate-y-0" : "translate-y-[360px]"
        )}
      >
        <div>
          <div className="mb-3 bg-white rounded-full w-9 h-9 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              color="#0052c2"
              size="3x"
              fill="#fff"
            />
          </div>
          <div className="mb-2 text-white bg-[#005be0] rounded-full w-11 h-11 flex justify-center items-center cursor-pointer -ml-1">
            <Link href="https://zalo.me/0886889995" target="_blank">
              Zalo
            </Link>
          </div>
          <div className="bg-[#6db703] rounded-full w-10 h-10 flex justify-center items-center mb-3 cursor-pointer">
            <Link href="tel:+0886889995">
              <FontAwesomeIcon icon={faPhone} color="#fff" size="xl" />
            </Link>
          </div>
          <div
            className="bg-[#f58634] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
            onClick={() => setActive(!active)}
          >
            <FontAwesomeIcon icon={faXmark} color="#fff" size="xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ContactFooter);
