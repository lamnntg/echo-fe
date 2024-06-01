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
import thucte from "@/data/thuc-te.json";
import EchoImage from "@/public/echo.png";
import ArchitectImage from "@/public/architect.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    }, 4500);
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
            "text-center absolute left-[50%] translate-x-[-50%] bottom-4 z-10 text-white text-nowrap",
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
            <div className="flex items-center gap-8">
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
                  className="absolute left-[-17px] top-0 bg-primary"
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
                <div className="flex flex-col justify-between h-full">
                  <div className="h-[60%] w-[170px] sm:w-[260px] md:w-[360px] lg:w-[360px] relative overflow-hidden">
                    <img className="h-full w-full" src={EchoImage.src} alt="" />
                    <motion.div
                      initial={{
                        width: "100%",
                        right: 0,
                      }}
                      animate={{
                        width: 0,
                        right: 0,
                        transition: {
                          duration: 0.8,
                          delay: 1,
                        },
                      }}
                      className="absolute top-0 right-0 w-full bg-white h-full"
                    ></motion.div>
                  </div>
                  <div className="h-[15%] w-[170px] sm:w-[260px] md:w-[360px] lg:w-[360px] relative overflow-hidden">
                    <img
                      className="h-full w-full"
                      src={ArchitectImage.src}
                      alt=""
                    />
                    <motion.div
                      initial={{
                        width: "100%",
                        right: 0,
                      }}
                      animate={{
                        width: 0,
                        right: 0,
                        transition: {
                          duration: 0.7,
                          delay: 1.8,
                        },
                      }}
                      className="absolute top-0 right-0 w-full bg-white h-full"
                    ></motion.div>
                  </div>
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
                      delay: i / 30 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
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
                      delay: i / 30 + 0.35 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
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
                      delay: i / 30 + 0.6 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
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
                      delay: i / 30 + 0.9 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === StepEnums.THREE && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="w-[100%] h-[100%] relative"
          >
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
            <div className="absolute bottom-[50%] translate-y-[50%] left-6 md:left-24 z-10 uppercase font-semibold">
              <p className="text-white text-[24px] md:text-[28px] lg:text-[56px]">
                Thiết kế & thi công
              </p>
              <p className="text-primary  text-[24px]  md:text-[28px] lg:text-[56px]">
                Kiến trúc nội thất
                <span className="hidden md:inline">, chuyên nghiệp</span>
              </p>
              <p className="block md:hidden text-primary text-[24px]  md:text-[28px] lg:text-[56px]">
                chuyên nghiệp
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[9]"></div>
          </motion.div>
        )}
      </div>
      {step === StepEnums.THREE && (
        <div className="container mx-auto">
          <div className="flex items-center flex-col md:flex-row flex-wrap gap-6 mt-16">
            <div className="flex-1">
              <h3 className="text-3xl mb-8">ECHO DESIGN</h3>
              <p>
                Lời đầu tiên, chúng tôi - CÔNG TY CỔ PHẦN ECHO DESIGN gửi tới
                Quý khách hàng lời chào trân trọng, lời chúc sức khoẻ, thành
                công, thịnh vượng và gặp nhiều may mắn. ECHO Design được thành
                lập bởi đội ngũ kiến trúc sư, thiết kế nội thất đầy sáng tạo và
                nhiệt huyết kết hợp với đội ngũ thợ thi công tay nghề cao, giàu
                kinh nghiêm dưới sự giám sát chặt chẽ của các quản lý và kỹ sư
                sẽ mang đến những không gian sống và hưởng thụ hoàn hảo cho mỗi
                quý khách hàng. Với khẩu hiệu “Thiết kế vượt thời gian, tiếng
                vang vượt thời đại”, cùng sự chuyên sâu trong lĩnh vực nghiên
                cứu khoa học về sản xuất nội thất và các giải pháp thi công tối
                ưu, chúng tôi luôn mong muốn mang đến cho quý khách hàng những
                thiết kế độc đáo, mang tính tương lai, và biến những thiết kế ấy
                trở thành hiện thực nhằm nâng cao chất lượng cuộc sống của quý
                khách hàng.
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
            <div className="container mx-auto pt-6">
              <div className="justify-center pb-6 flex-wrap hidden md:flex">
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
              <Accordion
                type="single"
                collapsible
                className="w-full bg-white mb-6 block md:hidden"
              >
                <AccordionItem value={productDesign.to}>
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <p className="text-center w-full pl-4 text-base ">
                      {productDesign.label}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    {MENU_HOME.filter(
                      (item) => item.type !== productDesign.type
                    ).map((item, index) => (
                      <p
                        className={cn(
                          "text-center text-base py-2 border-b border-solid border-secondary",
                          index === 0 ? "border-t" : ""
                        )}
                        key={item.label}
                        onClick={() => {
                          setType(item.type);
                        }}
                      >
                        {item.label}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productDesign.data.slice(0, 2).map((item) => (
                  <div key={item.slug} className="relative">
                    <div className="relative overflow-hidden group">
                      <Link
                        href={productDesign.to + "/" + item.slug}
                        className="block"
                      >
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          width="100%"
                          loading="lazy"
                          className="h-[200px] md:h-[250px] lg:h-[400px]"
                        />
                      </Link>
                      <Link
                        href={productDesign.to + "/" + item.slug}
                        className="text-white cursor-pointer transition flex-col group-hover:translate-y-[0%] translate-y-[100%] absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center"
                      >
                        <p className="text-xl">{item.name}</p>
                        <Link
                          href={productDesign.to + "/" + item.slug}
                          className="text-primary cursor-pointer mt-3"
                        >
                          Xem chi tiết
                        </Link>
                      </Link>
                    </div>
                    <Link href={productDesign.to + "/" + item.slug}>
                      <p className="mt-2 font-medium text-lg">{item.name}</p>
                    </Link>
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
                  Dự án thi công
                </span>
              </div>
            </div>
            <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
          </div>
          <div className="bg-[#efefef] mt-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                {thucte.slice(0, 2).map((item) => (
                  <div key={item.slug} className="relative">
                    <div className="relative overflow-hidden group">
                      <Link
                        href={RoutesEnum.THUC_TE + "/" + item.slug}
                        className="block"
                      >
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          width="100%"
                          loading="lazy"
                          className="h-[200px] md:h-[250px] lg:h-[400px]"
                        />
                      </Link>
                      <Link
                        href={RoutesEnum.THUC_TE + "/" + item.slug}
                        className="text-white cursor-pointer transition flex-col group-hover:translate-y-[0%] translate-y-[100%] absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center"
                      >
                        <p className="text-xl">{item.name}</p>
                        <Link
                          href={RoutesEnum.THUC_TE + "/" + item.slug}
                          className="text-primary cursor-pointer mt-3"
                        >
                          Xem chi tiết
                        </Link>
                      </Link>
                    </div>
                    <Link href={RoutesEnum.THUC_TE + "/" + item.slug}>
                      <p className="mt-2 font-medium text-lg">{item.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 pb-6 flex justify-center">
                <Link
                  href={RoutesEnum.THUC_TE}
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
