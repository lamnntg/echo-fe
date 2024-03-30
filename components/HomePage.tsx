"use client";
import React, { useEffect, useState } from "react";
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

const TITLE = "E C H O".split(" ");
const DESCRIPTION = "A R C H I T E C T U R E . I N T E R I O R".split(" ");

enum StepEnums {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

const HEIGHT_HEADER_MOBILE = 56;
const HEIGHT_FOOTER_MOBILE = 76;

const HEIGHT_HEADER_DESKTOP = 68;
const HEIGHT_FOOTER_DESKTOP = 36;

const HomePage = () => {
  const { setShowFooter } = useAppStore();
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState<StepEnums>(StepEnums.ONE);
  const { isMobile, isMobileLarge, isMobileLargeDown } = useBreakpoint();

  const RESOLUTION = {
    fullHeight: 160,
    line: {
      width: isMobile ? 100 : 160,
      height: isMobile ? 80 : isMobileLarge ? 112 : 22,
    },
    strike: {
      width: 160,
      height: 10,
    },
    logo: {
      width: isMobile ? 182 : isMobileLarge ? 254 : 364,
      height: isMobile ? 80 : isMobileLarge ? 112 : 160,
    },
    line1: {
      fontSize: isMobile ? 32 : isMobileLarge ? 38 : 62,
    },
    line2: {
      fontSize: 16,
    },
  };
  useEffect(() => {
    if (!loaded) {
      return;
    }
    const timeoutOne = setTimeout(() => {
      setStep(StepEnums.TWO);
    }, 3000);
    const timeoutTwo = setTimeout(() => {
      setStep(StepEnums.THREE);
    }, 6000);
    return () => {
      clearTimeout(timeoutOne);
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

  return (
    <div
      className="w-[100%] bg-white flex justify-center items-center sticky top-0 left-0"
      style={{
        zIndex: step === StepEnums.THREE ? 1 : 3,
        height: `calc(100vh - ${
          isMobileLargeDown
            ? HEIGHT_FOOTER_MOBILE + HEIGHT_HEADER_MOBILE
            : HEIGHT_FOOTER_DESKTOP + HEIGHT_HEADER_DESKTOP
        }px)`,
      }}
    >
      <Image
        src={Logo}
        width={0}
        height={0}
        alt="Logo"
        style={{ width: "0", height: "0" }}
        onLoad={() => setLoaded(true)}
      />
      {step === StepEnums.ONE && (
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
                  duration: 0.5,
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
                    duration: 0.5,
                    delay: 0.5,
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
                    duration: 0.5,
                    delay: 0.5,
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
                  delay: 1,
                },
              }}
            ></motion.div>
            <div
              className="absolute right-1 top-0"
              style={{
                height: RESOLUTION.fullHeight,
              }}
            >
              <motion.div
                className="bg-white"
                initial={{
                  height: RESOLUTION.fullHeight,
                  width: 4,
                  transform: "translateY(-100%)",
                }}
                animate={{
                  transform: "translateY(0)",
                  transition: {
                    duration: 0.5,
                    delay: 2,
                  },
                }}
              ></motion.div>
            </div>
            <div
              className="absolute right-4 top-0"
              style={{
                height: RESOLUTION.fullHeight,
              }}
            >
              <motion.div
                className="bg-white"
                initial={{
                  height: RESOLUTION.fullHeight,
                  width: 4,
                  transform: "translateY(-100%)",
                }}
                animate={{
                  transform: "translateY(0)",
                  transition: {
                    duration: 0.5,
                    delay: 2,
                  },
                }}
              ></motion.div>
            </div>
            <div
              className="absolute right-8 top-0"
              style={{
                height: RESOLUTION.fullHeight,
              }}
            >
              <motion.div
                className="bg-white"
                initial={{
                  height: RESOLUTION.fullHeight,
                  width: 4,
                  transform: "translateY(-100%)",
                }}
                animate={{
                  transform: "translateY(0)",
                  transition: {
                    duration: 0.5,
                    delay: 2,
                  },
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      )}
      {step === StepEnums.TWO && (
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden">
            <div
              className="relative"
              style={{
                height: RESOLUTION.logo.height,
                width: RESOLUTION.logo.width,
              }}
            >
              <Image
                src={Logo}
                alt="Logo"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                priority
              />
            </div>
            <motion.div
              className="bg-white absolute top-0 left-0"
              initial={{
                height: RESOLUTION.logo.height,
                width: RESOLUTION.logo.width,
                transform: "translateX(0)",
              }}
              animate={{
                transform: "translateX(-100%)",
                transition: {
                  duration: 1.2,
                },
              }}
            ></motion.div>
          </div>
          <div>
            {TITLE.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10,
                }}
                key={i}
                className={`mr-1 leading-none font-medium inline-block text-[#333]`}
                style={{
                  fontSize: RESOLUTION.line1.fontSize,
                }}
              >
                {el}
              </motion.span>
            ))}
            <br />
            <div className="mt-0 sm:mt-1 md:mt-2"></div>
            {DESCRIPTION.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i / 10,
                }}
                key={i}
                className="font-extralight inline-block"
                style={{
                  fontSize: RESOLUTION.line2.fontSize,
                }}
              >
                {el}
              </motion.span>
            ))}
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
        </div>
      )}
    </div>
  );
};

export default HomePage;
