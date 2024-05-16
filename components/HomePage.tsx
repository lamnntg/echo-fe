"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Slide2 from "@/public/slide_2.jpg";
import Slide1 from "@/public/slide_1.jpg";
import Slide3 from "@/public/slide_3.jpg";
import Slide4 from "@/public/slide_4.jpg";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useAppStore } from "@/store/app.store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FuturaNow, Litera } from "@/utils/font";
import clsx from "clsx";
import Link from "next/link";
import { MENU_HOME, RoutesEnum } from "@/constants/app.constants";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import khachsan from "@/data/khachsan.json";

const TITLE = "E C H O".split(" ");
const DESCRIPTION = "A R C H I T E C T U R E . I N T E R I O R".split(" ");
const SLOGAN = "T i m e l e s s".split(" ");
const SLOGAN2 = "d e s i g n ,".split(" ");
const SLOGAN3 = "e n d l e s s".split(" ");
const SLOGAN4 = "e c h o .".split(" ");
enum StepEnums {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

const HEIGHT_HEADER_MOBILE = 56;
const HEIGHT_FOOTER_MOBILE = -8;

const HEIGHT_HEADER_DESKTOP = 68;
const HEIGHT_FOOTER_DESKTOP = -8;

const HomePage = () => {
  const router = useRouter();
  const { setShowFooter } = useAppStore();
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState<StepEnums>(StepEnums.TWO);
  const [mounted, setMounted] = useState(false);
  const { isMobile, isMobileLarge, isMobileLargeDown } = useBreakpoint();
  const [type, setType] = useState(1);
  const productDesign = useMemo(() => {
    const res = MENU_HOME.find((item) => item.type === type);
    return res || MENU_HOME[0];
  }, [type]);
  useEffect(() => {
    setMounted(true);
  }, []);

  const RESOLUTION = useMemo(() => {
    return {
      fullHeight: 160,
      circleStrike: {
        width: isMobileLargeDown ? 4 : 8,
      },
      line: {
        width: isMobile ? 80 : isMobileLargeDown ? 120 : 160,
        height: isMobile ? 80 : isMobileLarge ? 112 : 22,
      },
      strike: {
        width: 160,
        height: isMobileLargeDown ? 4 : 10,
      },
      logo: {
        width: isMobile ? 120 : isMobileLarge ? 254 : 364,
        height: isMobile ? 80 : isMobileLarge ? 112 : 160,
      },
      line1: {
        fontSize: isMobile ? 30 : isMobileLarge ? 80 : 120,
      },
      line2: {
        fontSize: isMobileLargeDown ? 12 : 16,
      },
    };
  }, [isMobile, isMobileLarge]);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    const timeoutTwo = setTimeout(() => {
      setStep(StepEnums.THREE);
    }, 5000);
    return () => {
      clearTimeout(timeoutTwo);
    };
  }, [loaded]);

  useEffect(() => {
    if (step === StepEnums.THREE) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, [step]);
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div
        className="w-[100%] bg-white flex justify-center items-center relative"
        style={{
          zIndex: step === StepEnums.THREE ? 1 : 3,
          height: `calc(100vh - ${
            isMobileLargeDown
              ? HEIGHT_FOOTER_MOBILE + HEIGHT_HEADER_MOBILE
              : HEIGHT_FOOTER_DESKTOP + HEIGHT_HEADER_DESKTOP
          }px)`,
        }}
      >
        <p
          className={cn(
            "text-center absolute left-[50%] translate-x-[-50%] bottom-4 z-10 text-white",
            FuturaNow.className
          )}
        >
          Timeless design, endless echo
        </p>
        <Image
          src={Logo}
          width={0}
          height={0}
          alt="Logo"
          style={{ width: "0", height: "0" }}
          onLoad={() => setLoaded(true)}
        />
        {step === StepEnums.TWO && (
          <div className="w-full px-2 flex justify-center flex-col items-center">
            <div className="flex items-center gap-4">
              <div className="relative overflow-hidden">
                <div
                  className={`flex relative gap-2 sm:gap-3 md:gap-4 items-end overflow-hidden`}
                >
                  <div className="relative">
                    <motion.div
                      className="bg-primary"
                      initial={{
                        height: RESOLUTION.line.width,
                        width: RESOLUTION.line.width,
                        transform: "translateX(-100%)",
                      }}
                      animate={{
                        transform: "translateX(0)",
                        transition: {
                          duration: 0.3,
                        },
                      }}
                    ></motion.div>
                    <div className="absolute top-[30%] left-0">
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.strike.height,
                          width: RESOLUTION.strike.width,
                          transform: "translateX(-100%)",
                        }}
                        animate={{
                          transform: "translateX(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                    <div className="absolute top-[66%] left-0">
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.strike.height,
                          width: RESOLUTION.strike.width,
                          transform: "translateX(-100%)",
                        }}
                        animate={{
                          transform: "translateX(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="relative rounded-full">
                    <motion.div
                      className="bg-primary"
                      initial={{
                        height: RESOLUTION.line.width,
                        width: RESOLUTION.line.width,
                        transform: "translateX(-100%)",
                        borderRadius: "50%",
                        opacity: 0,
                      }}
                      animate={{
                        transform: "translateX(0)",
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          delay: 0.5,
                        },
                      }}
                    ></motion.div>
                    <div
                      className="absolute top-0"
                      style={{
                        height: RESOLUTION.fullHeight,
                        right: "0.5rem",
                      }}
                    >
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.fullHeight,
                          width: RESOLUTION.circleStrike.width,
                          transform: "translateY(-100%)",
                        }}
                        animate={{
                          transform: "translateY(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                    <div
                      className="absolute top-0"
                      style={{
                        height: RESOLUTION.fullHeight,
                        right: isMobileLargeDown ? "1rem" : "1.5rem",
                      }}
                    >
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.fullHeight,
                          width: RESOLUTION.circleStrike.width,
                          transform: "translateY(-100%)",
                        }}
                        animate={{
                          transform: "translateY(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                    <div
                      className="absolute top-0"
                      style={{
                        height: RESOLUTION.fullHeight,
                        right: isMobileLargeDown ? "1.5rem" : "2.5rem",
                      }}
                    >
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.fullHeight,
                          width: RESOLUTION.circleStrike.width,
                          transform: "translateY(-100%)",
                        }}
                        animate={{
                          transform: "translateY(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative flex justify-center flex-col w-fit"
                style={{
                  height: RESOLUTION.logo.height,
                }}
              >
                <motion.div
                  className="absolute left-[-8px] top-0 bg-primary"
                  initial={{
                    height: "100%",
                    width: 0,
                    transform: "translateX(0px)",
                  }}
                  animate={{
                    width: 3,
                    transition: {
                      duration: 0.2,
                      delay: 1,
                    },
                  }}
                ></motion.div>
                <div className="relative -top-6 sm:-top-2 md:-top-9 left-0 flex">
                  {TITLE.map((el, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: i / 7 + 1,
                      }}
                      key={i}
                      className={cn(
                        `mr-1 leading-none font-medium inline-block text-[#333]`,
                        Litera.className
                      )}
                      style={{
                        fontSize: RESOLUTION.line1.fontSize,
                      }}
                    >
                      {el}
                    </motion.span>
                  ))}
                </div>
                <div className="ml-0 lg:ml-2 absolute -bottom-1 lg:-bottom-2 left-0 flex">
                  {DESCRIPTION.map((el, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: i / 30 + 1.5,
                      }}
                      key={i}
                      className={`font-extralight inline-block ${FuturaNow.className} mx-[1px]`}
                      style={{
                        fontSize: RESOLUTION.line2.fontSize,
                      }}
                    >
                      {el}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center text-5xl md:mt-10 items-center gap-x-3 w-full">
              <div>
                {SLOGAN.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: i / 20 + 3,
                    }}
                    key={i}
                    className={`text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
              <div>
                {SLOGAN2.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: i / 20 + 0.5 + 3,
                    }}
                    key={i}
                    className={`text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
              <div>
                {SLOGAN3.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: i / 20 + 0.8 + 3,
                    }}
                    key={i}
                    className={`text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
              <div>
                {SLOGAN4.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i / 20 + 1.2 + 3,
                    }}
                    key={i}
                    className={`text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === StepEnums.THREE && (
          <div className="w-[100%] h-[100%] relative">
            <Swiper
              className="w-[100%] h-[100%]"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, EffectFade]}
              effect="fade"
            >
              <SwiperSlide>
                <Image
                  src={Slide1}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Thumnail"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Slide2}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Thumnail"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Slide3}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Thumnail"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Slide4}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Thumnail"
                />
              </SwiperSlide>
            </Swiper>
            <div className="absolute bottom-[50%] translate-y-[50%] left-24 z-10 uppercase font-semibold">
              <p className="text-white text-[24px] md:text-[28px] lg:text-[56px]">
                Thiết kế & thi công
              </p>
              <p className="text-primary  text-[24px]  md:text-[28px] lg:text-[56px]">
                Kiến trúc nội thất chuyên nghiệp
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[9]"></div>
          </div>
        )}
      </div>
      {step === StepEnums.THREE && (
        <div className="container mx-auto">
          <div className="flex items-center flex-col md:flex-row flex-wrap gap-6 mt-16">
            <div className="flex-1">
              <h3 className="text-3xl mb-8">ECHO DESIGN</h3>
              <p>
                Là công ty chuyên sâu trong lĩnh vực tư vấn{" "}
                <span className="font-semibold">
                  thiết kế nội thất và thi công nội/ngoại thất
                </span>{" "}
                khách sạn, nhà hàng, biệt thự, chung cư, penthouse, nhà phố,
                resort. Bằng tâm huyết cùng sự am hiểu và sáng tạo, đội ngũ tự
                tin mang tới quý khách hàng những phong cách kiến trúc giàu tính
                thẩm mỹ, nâng tầm giá trị.
              </p>
              <div>
                <Link
                  className="bg-black px-10 mt-10 inline-block py-3 text-white"
                  href="/gioi-thieu"
                >
                  TÌM HIỂU THÊM
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src={Slide1}
                style={{ objectFit: "cover" }}
                alt="Thumnail"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10 relative">
            <div className="px-8 bg-white relative z-[2] ">
              <div
                className={clsx(
                  "uppercase border-[#757575] border border-solid px-[30px] tracking-wider bg-white font-semibold text-base md:text-2xl py-4 pb-3 inline-flex justify-center items-center",
                  FuturaNow.className
                )}
              >
                <span className="leading-[20px] md:leading-[40px]">
                  Dự án thiết kế
                </span>
              </div>
            </div>
            <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
          </div>
        </div>
      )}
      {step === StepEnums.THREE && (
        <div>
          <div className="bg-[#efefef] mt-10">
            <div className="container mx-auto">
              <div className="flex justify-center py-6 flex-wrap">
                {MENU_HOME.map((item, index) => (
                  <div
                    key={item.label}
                    className={clsx(
                      "relative before:content-['/'] text-center before:right-0 before:top-[50%] before:translate-y-[-50%] before:absolute text-base py-[10px] px-7",
                      index === MENU_HOME.length - 1 ? "before:hidden" : ""
                    )}
                  >
                    <span
                      className={cn(
                        "text-center cursor-pointer",
                        type === item.type ? "underline" : ""
                      )}
                      onClick={() => {
                        setType(item.type);
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {productDesign.data.slice(0, 2).map((item) => (
                  <div key={item.slug} className="cursor-pointer">
                    <img
                      src={item.images[0]}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                      className="h-[200px] md:h-[250px] lg:h-[400px]"
                      alt="Thumnail"
                      onClick={() =>
                        router.push(productDesign.to + "/" + item.slug)
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 pb-6 flex justify-center">
                <Link
                  href={productDesign.to}
                  className="bg-[#1c1c1c] text-white w-[140px] flex justify-center items-center py-3 rounded-md border border-solid border-black hover:bg-white transition hover:text-black"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex justify-center mt-10 relative">
            <div className="px-8 bg-white relative z-[2] ">
              <div
                className={clsx(
                  "uppercase border-[#757575] border border-solid px-[30px] tracking-wider bg-white font-semibold text-base text-center md:text-2xl py-4 pb-3 inline-flex justify-center items-center",
                  FuturaNow.className
                )}
              >
                <span className="leading-[20px] md:leading-[40px] uppercase">
                  Công trình hoàn thiện thực tế
                </span>
              </div>
            </div>
            <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
          </div>
          <div className="bg-[#efefef] mt-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-6 pt-10">
                {khachsan.slice(0, 2).map((item) => (
                  <div key={item.slug} className="cursor-pointer">
                    <img
                      src={item.images[0]}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                      className="h-[200px] md:h-[250px] lg:h-[400px]"
                      alt="Thumnail"
                      onClick={() =>
                        router.push(RoutesEnum.KHACH_SAN + "/" + item.slug)
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 pb-6 flex justify-center">
                <Link
                  href={RoutesEnum.KHACH_SAN}
                  className="bg-[#1c1c1c] text-white w-[140px] flex justify-center items-center py-3 rounded-md border border-solid border-black hover:bg-white transition hover:text-black"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
