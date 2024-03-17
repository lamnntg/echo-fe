"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Slide2 from "@/public/slide_2.jpeg";
import Slide1 from "@/public/slide_1.jpg";
import Slide3 from "@/public/slide_3.jpeg";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useAppStore } from "@/store/app.store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const TITLE = "E C H O".split(" ");
const DESCRIPTION = "I N T E R O R".split(" ");
const DESIGN = "D E S I G N".split(" ");

enum StepEnums {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

const HomePage = () => {
  const { setShowFooter } = useAppStore();
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState<StepEnums>(StepEnums.ONE);
  const { isMobile, isMobileLarge, isMobileLargeDown } = useBreakpoint();

  const RESOLUTION = {
    line: {
      width: isMobile ? 11 : isMobileLarge ? 15 : 22,
      height: isMobile ? 80 : isMobileLarge ? 112 : 160,
    },
    logo: {
      width: isMobile ? 182 : isMobileLarge ? 254 : 364,
      height: isMobile ? 80 : isMobileLarge ? 112 : 160,
    },
    line1: {
      fontSize: isMobile ? 32 : isMobileLarge ? 38 : 62,
    },
    line2: {
      fontSize: isMobile ? 18 : isMobileLarge ? 20 : 36,
    },
  };
  useEffect(() => {
    if (!loaded) {
      return;
    }
    const timeoutOne = setTimeout(() => {
      setStep(StepEnums.TWO);
    }, 1800);
    const timeoutTwo = setTimeout(() => {
      setStep(StepEnums.THREE);
    }, 5000);
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
        height: `calc(100vh - ${isMobileLargeDown ? 76 + 45 : 36 + 68}px)`,
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
          className={`flex gap-2 sm:gap-3 md:gap-4 items-end overflow-hidden`}
        >
          {Array.from({ length: 14 }, (_, i) => (
            <motion.div
              key={i}
              className="bg-primary"
              initial={{
                height: RESOLUTION.line.height,
                width: RESOLUTION.line.width,
                transform: i % 2 ? "translateY(100%)" : "translateY(-100%)",
              }}
              animate={{
                transform: "translateY(0)",
                transition: {
                  duration: 0.8,
                },
              }}
            ></motion.div>
          ))}
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
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
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
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10 + 0.5,
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
            <br />
            {DESIGN.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10 + 1,
                }}
                key={i}
                className="font-extralight inline-block -mt-3"
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
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default HomePage;
